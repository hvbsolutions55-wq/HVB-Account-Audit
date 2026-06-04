import { cn } from "@/lib/utils";

const MARK_SRC = "/arrow-how-it-work.png";

type ProcessMarkProps = {
  className?: string;
};

/** Central process graphic — transparent gold mark for light section backgrounds */
export function ProcessMark({
  className = "h-36 w-auto sm:h-44 md:h-48 lg:h-52 xl:h-60",
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
