import { css } from '@emotion/react';

import theme from '@styles/theme';

export const horizontalScrollContainer = css`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2rem;

  h1 {
    color: ${theme.color.black};
    ${theme.font.title_b_20};
  }
`;

export const horizontalScrollWrapper = css`
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;

  img {
    width: 20rem;
    height: 20rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const arrowButton = (direction: string) => css`
  position: absolute;
  top: calc(50%);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.4rem;
  height: 10rem;

  transform: translateY(-50%);
  cursor: pointer;

  ${direction === 'left' && 'left: 2rem;'}
  ${direction === 'right' && 'right: 2rem;'}
`;
