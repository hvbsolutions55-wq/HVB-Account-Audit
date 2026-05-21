import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  className = "h-12 w-auto object-contain sm:h-14",
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="HVB Solutions"
      width={1536}
      height={1024}
      priority={priority}
      className={className}
    />
  );
}
