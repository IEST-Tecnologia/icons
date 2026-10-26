import type { IconProps } from "./types";

export default function SettingsIcon({
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
      <path d="M 21.52 10.15 A 9.7 9.7 0 0 1 21.52 13.85 L 19.17 14.19 A 7.5 7.5 0 0 1 18.62 15.52 L 20.04 17.42 A 9.7 9.7 0 0 1 17.42 20.04 L 15.52 18.62 A 7.5 7.5 0 0 1 14.19 19.17 L 13.85 21.52 A 9.7 9.7 0 0 1 10.15 21.52 L 9.81 19.17 A 7.5 7.5 0 0 1 8.48 18.62 L 6.58 20.04 A 9.7 9.7 0 0 1 3.96 17.42 L 5.38 15.52 A 7.5 7.5 0 0 1 4.83 14.19 L 2.48 13.85 A 9.7 9.7 0 0 1 2.48 10.15 L 4.83 9.81 A 7.5 7.5 0 0 1 5.38 8.48 L 3.96 6.58 A 9.7 9.7 0 0 1 6.58 3.96 L 8.48 5.38 A 7.5 7.5 0 0 1 9.81 4.83 L 10.15 2.48 A 9.7 9.7 0 0 1 13.85 2.48 L 14.19 4.83 A 7.5 7.5 0 0 1 15.52 5.38 L 17.42 3.96 A 9.7 9.7 0 0 1 20.04 6.58 L 18.62 8.48 A 7.5 7.5 0 0 1 19.17 9.81 Z" />
      <circle cx="12" cy="12" r="2.9" />
    </svg>
  );
}
