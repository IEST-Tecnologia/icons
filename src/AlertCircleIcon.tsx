import type { IconProps } from "./types";

export default function AlertCircleIcon({
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
      <path d="M12 8.5v4" />
      <path d="M12 15.5h.01" />
    </svg>
  );
}
