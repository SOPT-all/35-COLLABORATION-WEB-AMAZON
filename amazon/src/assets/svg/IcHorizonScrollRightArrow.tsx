import type { SVGProps } from 'react';
const SvgIcHorizonScrollRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 104" {...props}>
    <g filter="url(#ic_horizonScroll_rightArrow_svg__a)">
      <rect width={44} height={100} x={1} fill="#fff" rx={4} shapeRendering="crispEdges" />
      <path
        fill="#565959"
        fillRule="evenodd"
        d="M20.699 39.644a2.143 2.143 0 0 0-3.064 0 2.224 2.224 0 0 0 0 3.112L24.769 50l-7.134 7.244a2.224 2.224 0 0 0 0 3.112c.846.859 2.218.859 3.064 0l8.666-8.8a2.224 2.224 0 0 0 0-3.112z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="ic_horizonScroll_rightArrow_svg__a"
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1129_7662" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1129_7662" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgIcHorizonScrollRightArrow;
