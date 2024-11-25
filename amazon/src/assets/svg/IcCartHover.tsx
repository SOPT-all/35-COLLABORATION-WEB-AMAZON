import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcCartHover = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 23" {...props}>
    <circle cx={11.5} cy={11.5} r={11.5} fill="#CCC" />
    <path
      fill="#0F1111"
      fillRule="evenodd"
      d="M4.455 6H3.5a.5.5 0 0 1 0-1h1.486a.6.6 0 0 1 .609.514v.003l.001.009.006.035a29 29 0 0 0 .088.557 9 9 0 0 0 .186.906L7.27 13.5h8.75l1.394-6.475a.6.6 0 1 1 1.173.253l-1.495 6.948a.6.6 0 0 1-.586.474H7.5v.99a1.93 1.93 0 0 1 1.455-.087L9 15.6h5.718q.291-.099.615-.1a1.933 1.933 0 1 1-1.745 1.1h-3.51a1.933 1.933 0 1 1-3.578.218v-2.19a.6.6 0 0 1-.303-.403l-1.49-6.927a11 11 0 0 1-.201-.98q-.03-.175-.052-.318m3.146 11.433a.733.733 0 1 1 1.467 0 .733.733 0 0 1-1.467 0m7 0a.733.733 0 1 1 1.467 0 .733.733 0 0 1-1.467 0"
      clipRule="evenodd"
    />
    <path stroke="#0F1111" strokeLinecap="round" d="M12 7v4M10 9h4" />
  </svg>
);
export default SvgIcCartHover;
