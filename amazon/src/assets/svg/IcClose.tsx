import type { SVGProps } from 'react';

interface IcCloseProps extends SVGProps<SVGSVGElement> {
  strokeColor?: string;
}

const SvgIcClose = ({ strokeColor = '#565959', ...props }: IcCloseProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" {...props}>
    <path stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="m12 4-8 8m0-8 8 8" />
  </svg>
);

export default SvgIcClose;
