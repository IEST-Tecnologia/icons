import type { IconProps } from "./types";

export default function LogoutIcon({
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
      <path d="M9.25 4.75H6.5A2.25 2.25 0 0 0 4.25 7v10a2.25 2.25 0 0 0 2.25 2.25h2.75" />
      <path d="m14.75 8.25 3.75 3.75-3.75 3.75" />
      <path d="M18.5 12H9" />
    </svg>
  );
}
