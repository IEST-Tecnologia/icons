import type { IconProps } from "./types";

export default function TeamIcon({
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
      <circle cx="9.5" cy="8" r="3.25" />
      <path d="M3.5 20.25c0-3.35 2.7-5.75 6-5.75s6 2.4 6 5.75" />
      <path d="M16.25 5.15a3.25 3.25 0 0 1 0 5.7" />
      <path d="M17.75 15.05c1.85.75 3 2.35 3 4.35" />
    </svg>
  );
}
