import type { IconProps } from "./types";

export default function ChevronUpDownIcon({
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
      <path d="m8.25 8.75 3.75-3.75 3.75 3.75" />
      <path d="m8.25 15.25 3.75 3.75 3.75-3.75" />
    </svg>
  );
}
