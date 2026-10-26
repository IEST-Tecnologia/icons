import type { IconProps } from "./types";

export default function TrashIcon({
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
      <path d="M5 7.25h14" />
      <path d="M9.75 7.25v-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1.5" />
      <path d="M7.25 7.25 8 18.25A1.75 1.75 0 0 0 9.75 20h4.5a1.75 1.75 0 0 0 1.75-1.75l.75-11" />
      <path d="M10.25 11v6" />
      <path d="M13.75 11v6" />
    </svg>
  );
}
