import type { IconProps } from "./types";

export default function SpinnerIcon({
  className = "h-5 w-5",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d="M12 4.75a7.25 7.25 0 1 0 7.25 7.25" />
    </svg>
  );
}
