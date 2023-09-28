import { SVGProps } from "react";

export function LogoutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M15 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H15"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <path
        d="M19 12L15 8M19 12L15 16M19 12H9"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
}
