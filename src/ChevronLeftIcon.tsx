import type { IconProps } from "./types";

export default function ChevronLeftIcon({
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
      <path d="M14.75 5.75 8.5 12l6.25 6.25" />
    </svg>
  );
}
