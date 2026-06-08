import { cn } from "@/lib/utils";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const LOGO_SRC = "/hvb-logo.png";
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
        "block h-auto w-auto shrink-0 object-contain object-left",
        isNav ? "h-11 w-auto sm:h-12" : "h-14 w-auto sm:h-16",
        className,
      )}
    />
  );
}
