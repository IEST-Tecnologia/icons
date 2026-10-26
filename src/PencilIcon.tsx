import type { IconProps } from "./types";

export default function PencilIcon({
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
      <path d="M4.75 19.25 5.5 15.5 15.75 5.25a2.12 2.12 0 0 1 3 3L8.5 18.5l-3.75.75Z" />
      <path d="m14 7 3 3" />
    </svg>
  );
}
