import type { IconProps } from "./types";

export default function XIcon({
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
      <path d="M6.75 6.75 17.25 17.25" />
      <path d="M17.25 6.75 6.75 17.25" />
    </svg>
  );
}
