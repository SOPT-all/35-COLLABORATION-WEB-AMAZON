import { css } from '@emotion/react';

import theme from '@styles/theme';

export const searchContainer = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
`;

export const mainContainer = css`
  display: flex;
  padding: 0 1.4rem 0 1.6rem;
  gap: 1.6rem;
`;

export const bottomLoginSection = css`
  margin-top: 8rem;
  margin-bottom: 6.4rem;
`;

export const searchResultTitle = css`
  ${theme.font.title_b_24};
  color: ${theme.color.black};
  margin-bottom: 0.4rem;
`;
