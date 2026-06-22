const EURO_COUNTRIES = new Set([
  "AD",
  "AT",
  "BE",
  "CY",
  "DE",
  "EE",
  "ES",
  "FI",
  "FR",
  "GR",
  "IE",
  "IT",
  "LT",
  "LU",
  "LV",
  "MC",
  "ME",
  "MT",
  "NL",
  "PT",
  "SI",
  "SK",
  "SM",
  "VA",
  "XK",
]);

const COUNTRY_CURRENCY: Record<string, string> = {
  AE: "AED",
  AR: "ARS",
  AU: "AUD",
  BD: "BDT",
  BH: "BHD",
  BR: "BRL",
  CA: "CAD",
  CH: "CHF",
  CL: "CLP",
  CN: "CNY",
  CO: "COP",
  CZ: "CZK",
  DK: "DKK",
  EG: "EGP",
  GB: "GBP",
  HK: "HKD",
  HU: "HUF",
  ID: "IDR",
  IL: "ILS",
  IN: "INR",
  IS: "ISK",
  JP: "JPY",
  KE: "KES",
  KR: "KRW",
  KW: "KWD",
  LK: "LKR",
  MX: "MXN",
  MY: "MYR",
  NG: "NGN",
  NO: "NOK",
  NZ: "NZD",
  OM: "OMR",
  PE: "PEN",
  PH: "PHP",
  PK: "PKR",
  PL: "PLN",
  QA: "QAR",
  RO: "RON",
  SA: "SAR",
  SE: "SEK",
  SG: "SGD",
  TH: "THB",
  TR: "TRY",
  TW: "TWD",
  TZ: "TZS",
  US: "USD",
  VN: "VND",
  ZA: "ZAR",
};

export function getCurrencyForCountry(countryCode: string | null): string {
  if (!countryCode) {
    return "EUR";
  }

  const normalized = countryCode.toUpperCase();

  if (EURO_COUNTRIES.has(normalized)) {
    return "EUR";
  }

  return COUNTRY_CURRENCY[normalized] ?? "USD";
}
