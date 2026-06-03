import Link from "next/link";
import {
  PROMO_HEADLINE,
  PROMO_RATE,
  PROMO_RATE_SUFFIX,
} from "@/lib/site";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/cta";

export function PromoBanner() {
  return (
    <div className="w-full border-b border-[#d4af37]/30 bg-[#0f172a] text-center text-sm text-white">
      <div className="site-shell py-2.5">
        <div className="site-shell-inner flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-2">
          <span className="text-white/90">{PROMO_HEADLINE}</span>
          <span className="promo-blink font-bold text-[#d4af37]">{PROMO_RATE}</span>
          <span className="text-white/90">{PROMO_RATE_SUFFIX}</span>
          <Link
            href={PRIMARY_CTA_HREF}
            className="ml-1 font-semibold text-[#d4af37] underline-offset-2 hover:underline"
          >
            {PRIMARY_CTA_LABEL} →
          </Link>
        </div>
      </div>
    </div>
  );
}
