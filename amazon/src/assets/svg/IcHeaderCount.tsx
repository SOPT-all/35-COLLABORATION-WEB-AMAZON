import type { SVGProps } from 'react';
const SvgIcHeaderCount = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <rect width={20} height={20} fill="#F90" rx={10} />
    <path
      fill="#fff"
      d="M9.772 9.248a.6.6 0 0 1 .12-.012h.12q1.188 0 1.884.648.696.636.696 1.716 0 1.176-.852 1.884-.84.696-2.268.696-1.128 0-2.232-.48v-.96q1.308.432 2.232.432.912 0 1.404-.408t.492-1.164q0-1.452-1.836-1.452-.576 0-1.14.06v-.792l2.52-2.748H7.36v-.984h4.884v.948z"
    />
  </svg>
);
export default SvgIcHeaderCount;
