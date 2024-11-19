import { css } from '@emotion/react';

export const carouselStyle = css`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const imageContainer = css`
  display: flex;
  overflow: hidden;

  transition: transform 0.4s ease-in-out;
  scroll-behavior: smooth;
`;

export const imageStyle = css`
  min-height: 100%;
  object-fit: cover;
`;

export const iconStyle = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 8.4rem;
  height: 100%;
  z-index: 1;
  cursor: pointer;

  &:first-of-type {
    left: 0;
  }

  &:last-of-type {
    right: 0;
  }
`;

export const hiddenStyle = css`
  display: none;
`;
