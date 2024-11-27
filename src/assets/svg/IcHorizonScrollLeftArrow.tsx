import type { SVGProps } from 'react';
const SvgIcHorizonScrollLeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 104" {...props}>
    <g filter="url(#ic_horizonScroll_leftArrow_svg__a)">
      <rect width={44} height={100} x={1} fill="#fff" rx={4} shapeRendering="crispEdges" />
      <path
        fill="#565959"
        fillRule="evenodd"
        d="M25.301 39.644a2.143 2.143 0 0 1 3.064 0c.847.86.847 2.253 0 3.112L21.231 50l7.134 7.244c.847.86.847 2.252 0 3.112-.846.859-2.218.859-3.064 0l-8.666-8.8a2.224 2.224 0 0 1 0-3.112z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="ic_horizonScroll_leftArrow_svg__a"
        width={48}
        height={104}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={1} dy={2} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1129_7657" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1129_7657" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgIcHorizonScrollLeftArrow;
