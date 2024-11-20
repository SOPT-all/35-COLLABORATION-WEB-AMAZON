import { css } from '@emotion/react';

import theme from '@styles/theme';

export const BottomLoginRecommendContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136.6rem;
  height: 21.9rem;
  padding: 4.8rem 0;
  margin: 8rem 0 6.4rem 0;
  border-top: 1px solid ${theme.color.gray3};
  border-bottom: 1px solid ${theme.color.gray3};
`;

export const BottomLoginRecommendCard = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28.8rem;
  padding: 1rem;
`;

export const BottomLoginCard = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 136.6rem;
  height: 21.9rem;
  padding: 4.8rem 0;

  h1 {
    margin-bottom: 1.6rem;
    text-align: center;
    ${theme.font.title_b_24};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.2rem;
    padding: 0.7rem 9.8rem;
    margin-bottom: 1.2rem;
    gap: 1rem;
    border: none;
    border-radius: 4px;
    background-color: ${theme.color.orange1};
    color: ${theme.color.white1};
    ${theme.font.body_b_12};
  }
`;

export const BottomRecommendCard = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p:nth-of-type(1) {
    color: ${theme.color.black};
    text-align: center;
    ${theme.font.body_r_12};
  }

  p:nth-of-type(2) {
    color: ${theme.color.orange2};
    text-align: center;
    ${theme.font.body_r_12};
  }
`;
