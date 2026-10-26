import type { IconProps } from "./types";

export default function CheckCircleIcon({
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
      <circle cx="12" cy="12" r="7.25" />
      <path d="m9.25 12.25 1.85 1.85 3.65-4.1" />
    </svg>
  );
}
