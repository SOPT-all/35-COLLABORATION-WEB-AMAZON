import type { SVGProps } from 'react';

const SvgIcCheckBoxFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clip-path="url(#clip0_1075_12410)">
      <rect x="4" y="4" width="16" height="16" rx="4" fill="#FF9900" />
      <path
        d="M8 11.6667L11.2857 15L16 10"
        stroke="white"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <rect x="4.5" y="4.5" width="15" height="15" rx="3.5" stroke="#FF9900" />
    <defs>
      <clipPath id="clip0_1075_12410">
        <rect x="4" y="4" width="16" height="16" rx="4" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgIcCheckBoxFilled;
