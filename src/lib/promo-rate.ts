import { getCurrencyForCountry } from "@/lib/country-currency";
import { resolveVisitorCountry } from "@/lib/geo";
import { PROMO_RATE_EUR } from "@/lib/site";

const ZERO_DECIMAL_CURRENCIES = new Set([
  "BIF",
  "CLP",
  "DJF",
  "GNF",
  "IDR",
  "JPY",
  "KMF",
  "KRW",
  "PYG",
  "RWF",
  "UGX",
  "VND",
  "VUV",
  "XAF",
  "XOF",
  "XPF",
]);

export type LocalizedPromoRate = {
  formatted: string;
  currency: string;
  country: string | null;
  countryDetected: boolean;
};

async function getEurExchangeRates(): Promise<Record<string, number>> {
  const response = await fetch("https://open.er-api.com/v6/latest/EUR", {
    next: { revalidate: 86400 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch exchange rates");
  }

  const data = (await response.json()) as {
    result?: string;
    rates?: Record<string, number>;
  };

  if (data.result !== "success" || !data.rates) {
    throw new Error("Invalid exchange rate response");
  }

  return data.rates;
}

function roundForCurrency(amount: number, currency: string): number {
  if (ZERO_DECIMAL_CURRENCIES.has(currency)) {
    return Math.max(1, Math.round(amount));
  }

  return Math.max(1, Math.round(amount));
}

export function formatPromoRate(amount: number, currency: string): string {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: ZERO_DECIMAL_CURRENCIES.has(currency) ? 0 : 0,
  }).format(amount);
}

export async function getLocalizedPromoRate(
  headerStore: Headers,
  countryOverride?: string | null,
): Promise<LocalizedPromoRate> {
  let country: string | null = null;
  let detected = false;

  if (countryOverride) {
    country = countryOverride.toUpperCase();
    detected = true;
  } else {
    const resolved = await resolveVisitorCountry(headerStore);
    country = resolved.country;
    detected = resolved.detected;
  }

  const currency = getCurrencyForCountry(country);

  if (currency === "EUR") {
    return {
      formatted: formatPromoRate(PROMO_RATE_EUR, "EUR"),
      currency: "EUR",
      country,
      countryDetected: detected,
    };
  }

  try {
    const rates = await getEurExchangeRates();
    const rate = rates[currency];

    if (!rate) {
      throw new Error(`No exchange rate for ${currency}`);
    }

    const converted = roundForCurrency(PROMO_RATE_EUR * rate, currency);

    return {
      formatted: formatPromoRate(converted, currency),
      currency,
      country,
      countryDetected: detected,
    };
  } catch {
    return {
      formatted: formatPromoRate(PROMO_RATE_EUR, "EUR"),
      currency: "EUR",
      country,
      countryDetected: detected,
    };
  }
}
