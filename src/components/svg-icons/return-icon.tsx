import { SVGProps } from "react";

export function ReturnIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
    >
      <path
        d="M12.9998 8L6 14L12.9998 21"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4"
      />
      <path
        d="M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4"
      />
    </svg>
  );
}
