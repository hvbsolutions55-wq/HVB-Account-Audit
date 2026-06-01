type ProcessMarkProps = {
  className?: string;
};

/** Three interlocking curved blades — central process graphic */
export function ProcessMark({ className = "h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64" }: ProcessMarkProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <g transform="translate(120 120)">
        <path
          d="M0 -72C-42 -58 -68 -22 -72 18C-34 6 -8 28 0 58C8 28 34 6 72 18C68 -22 42 -58 0 -72Z"
          fill="#0F172A"
          transform="rotate(0)"
        />
        <path
          d="M0 -72C-42 -58 -68 -22 -72 18C-34 6 -8 28 0 58C8 28 34 6 72 18C68 -22 42 -58 0 -72Z"
          fill="#2563EB"
          transform="rotate(120)"
        />
        <path
          d="M0 -72C-42 -58 -68 -22 -72 18C-34 6 -8 28 0 58C8 28 34 6 72 18C68 -22 42 -58 0 -72Z"
          fill="#7DD3FC"
          transform="rotate(240)"
        />
      </g>
    </svg>
  );
}
