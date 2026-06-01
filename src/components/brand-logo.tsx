import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  /** Nav uses transparent horizontal mark; default/full uses diary logo with tagline */
  variant?: "nav" | "full";
};

export function BrandLogo({
  className = "h-12 w-auto object-contain sm:h-14",
  priority = false,
  variant = "full",
}: BrandLogoProps) {
  const isNav = variant === "nav";

  return (
    <Image
      src="/logo.png"
      alt="HVB Solutions — Outsourcing beyond borders"
      width={isNav ? 180 : 1536}
      height={isNav ? 120 : 1024}
      priority={priority}
      className={className}
    />
  );
}
