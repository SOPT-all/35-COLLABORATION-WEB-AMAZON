import type { SVGProps } from 'react';
const SvgIcHambuger = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" {...props}>
    <path fill="#fff" fillRule="evenodd" d="M16 3H0V1h16zm0 6H0V7h16zM0 15h16v-2H0z" clipRule="evenodd" />
  </svg>
);
export default SvgIcHambuger;
