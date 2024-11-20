import { css } from '@emotion/react';

import theme from '@styles/theme';

export const bottomRecommendContainer = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 2rem;

  h1 {
    ${theme.font.title_b_24};
  }
`;

export const bottomRecommendBox = css`
  display: flex;
  width: 101.2rem;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0 0.8rem;
  flex-wrap: wrap;
`;

export const bottomSearchedBox = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 33.2rem;
  padding: 2rem 0 2rem 1.8rem;
  border: 1px solid ${theme.color.gray3};
  border-radius: 4px;

  section {
    display: flex;
    align-items: center;
    gap: 2.8rem;
  }

  span {
    ${theme.font.body_r_14};
  }
`;

export const searchIcon = css`
  width: 1.3rem;
  height: 1.3rem;
`;

export const pagenationContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 101.2rem;
  margin-top: 3.2rem;
`;

export const pagenation = css`
  width: 42.3rem;
  height: 4.7rem;
`;
