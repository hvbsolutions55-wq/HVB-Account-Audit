export function getCountryFromHeaders(headerStore: Headers): string | null {
  const country =
    headerStore.get("x-vercel-ip-country") ??
    headerStore.get("cf-ipcountry") ??
    headerStore.get("x-country-code");

  if (!country || country === "XX" || country === "T1") {
    return null;
  }

  return country.toUpperCase();
}

export function getClientIp(headerStore: Headers): string | null {
  const forwarded = headerStore.get("x-forwarded-for");

  if (forwarded) {
    const ip = forwarded.split(",")[0]?.trim();
    return ip || null;
  }

  return headerStore.get("x-real-ip");
}

export async function getCountryFromIp(ip: string | null): Promise<string | null> {
  if (!ip || ip === "127.0.0.1" || ip === "::1" || ip.startsWith("192.168.")) {
    return null;
  }

  try {
    const response = await fetch(
      `https://ipwho.is/${encodeURIComponent(ip)}?fields=country_code,success`,
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as {
      success?: boolean;
      country_code?: string;
    };

    if (data.success && data.country_code) {
      return data.country_code.toUpperCase();
    }
  } catch {
    return null;
  }

  return null;
}

export async function resolveVisitorCountry(
  headerStore: Headers,
): Promise<{ country: string | null; detected: boolean }> {
  const fromHeaders = getCountryFromHeaders(headerStore);

  if (fromHeaders) {
    return { country: fromHeaders, detected: true };
  }

  const ip = getClientIp(headerStore);
  const fromIp = await getCountryFromIp(ip);

  return {
    country: fromIp,
    detected: Boolean(fromIp),
  };
}
