import { cn } from "@/lib/utils";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const LOGO_SRC = "/logo-with-heading-cropped.png";
const LOGO_ALT = `${SITE_NAME} — ${SITE_TAGLINE}`;

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "nav" | "full";
};

export function BrandLogo({
  className = "",
  priority = false,
  variant = "full",
}: BrandLogoProps) {
  const isNav = variant === "nav";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO_SRC}
      alt={LOGO_ALT}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={cn(
        "block h-auto w-auto max-w-none shrink-0",
        isNav ? "h-11 sm:h-12" : "h-12 sm:h-14",
        className,
      )}
    />
  );
}
