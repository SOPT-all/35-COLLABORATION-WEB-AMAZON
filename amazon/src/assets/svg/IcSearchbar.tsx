import type { SVGProps } from 'react';
const SvgIcSearchbar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <rect width={24} height={24} fill="#F0F2F2" rx={12} />
    <circle cx={10.688} cy={10.688} r={4.688} stroke="#848688" strokeWidth={2} />
    <path stroke="#848688" strokeLinecap="round" strokeWidth={2} d="m18 18-3.25-3.25" />
  </svg>
);
export default SvgIcSearchbar;
