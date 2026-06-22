import { NextResponse } from "next/server";
import { getLocalizedPromoRate } from "@/lib/promo-rate";

export async function GET(request: Request) {
  const country = new URL(request.url).searchParams.get("country");
  const promoRate = await getLocalizedPromoRate(request.headers, country);

  return NextResponse.json(promoRate, {
    headers: {
      "Cache-Control": "private, no-store",
    },
  });
}
