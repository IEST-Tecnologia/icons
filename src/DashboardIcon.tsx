import type { IconProps } from "./types";

export default function DashboardIcon({
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
      <rect x="3.25" y="3.25" width="7.5" height="7.5" rx="1.75" />
      <rect x="13.25" y="3.25" width="7.5" height="7.5" rx="1.75" />
      <rect x="3.25" y="13.25" width="7.5" height="7.5" rx="1.75" />
      <rect x="13.25" y="13.25" width="7.5" height="7.5" rx="1.75" />
    </svg>
  );
}
