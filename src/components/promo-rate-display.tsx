"use client";

import { useEffect, useState } from "react";
import { formatPromoRate } from "@/lib/promo-rate";
import type { LocalizedPromoRate } from "@/lib/promo-rate";
import { PROMO_RATE_EUR } from "@/lib/site";

const DEFAULT_RATE = formatPromoRate(PROMO_RATE_EUR, "EUR");

async function detectCountryInBrowser(): Promise<string | null> {
  const providers = [
    async () => {
      const response = await fetch("https://api.country.is/", {
        signal: AbortSignal.timeout(5000),
      });

      if (!response.ok) {
        return null;
      }

      const data = (await response.json()) as { country?: string };
      return data.country?.toUpperCase() ?? null;
    },
    async () => {
      const response = await fetch("https://get.geojs.io/v1/ip/country.json", {
        signal: AbortSignal.timeout(5000),
      });

      if (!response.ok) {
        return null;
      }

      const data = (await response.json()) as { country?: string };
      return data.country?.toUpperCase() ?? null;
    },
  ];

  for (const provider of providers) {
    try {
      const country = await provider();

      if (country) {
        return country;
      }
    } catch {
      // Try the next provider.
    }
  }

  return null;
}

async function fetchPromoRate(country?: string): Promise<LocalizedPromoRate | null> {
  const url = country
    ? `/api/promo-rate?country=${encodeURIComponent(country)}`
    : "/api/promo-rate";

  const response = await fetch(url);

  if (!response.ok) {
    return null;
  }

  return response.json() as Promise<LocalizedPromoRate>;
}

export function PromoRateDisplay() {
  const [rate, setRate] = useState(DEFAULT_RATE);

  useEffect(() => {
    let cancelled = false;

    async function loadRate() {
      const serverRate = await fetchPromoRate();

      if (cancelled) {
        return;
      }

      if (serverRate?.countryDetected && serverRate.formatted) {
        setRate(serverRate.formatted);
        return;
      }

      const country = await detectCountryInBrowser();

      if (cancelled) {
        return;
      }

      if (country) {
        const localizedRate = await fetchPromoRate(country);

        if (!cancelled && localizedRate?.formatted) {
          setRate(localizedRate.formatted);
          return;
        }
      }

      if (!cancelled && serverRate?.formatted) {
        setRate(serverRate.formatted);
      }
    }

    loadRate();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <span className="promo-blink font-bold text-[#d4af37]" suppressHydrationWarning>
      {rate}
    </span>
  );
}
