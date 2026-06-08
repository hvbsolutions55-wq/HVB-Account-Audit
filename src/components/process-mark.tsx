import { cn } from "@/lib/utils";

const MARK_SRC = "/work-arrow.png";

type ProcessMarkProps = {
  className?: string;
};

/** Central process graphic — transparent gold mark for light section backgrounds */
export function ProcessMark({
  className = "h-44 w-auto sm:h-52 md:h-60 lg:h-72 xl:h-80",
}: ProcessMarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={MARK_SRC}
      alt="HVB process cycle with growth chart"
      decoding="async"
      className={cn("block max-w-none shrink-0", className)}
    />
  );
}
