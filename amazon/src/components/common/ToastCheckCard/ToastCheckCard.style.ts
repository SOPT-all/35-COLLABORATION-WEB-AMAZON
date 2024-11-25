import { css } from '@emotion/react';

import theme from '@styles/theme';

export const cardContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 29.4rem;
  height: 13.2rem;
  padding: 2.8rem 9.2rem 3.2rem 9.1rem;

  h3 {
    width: 14.9rem;
    height: 1.7rem;
    color: ${theme.color.white1};
    ${theme.font.body_b_14};
  }

  p {
    width: 11.2rem;
    height: 1.2rem;
    color: ${theme.color.gray2};
    ${theme.font.body_r_10};
  }
`;

export const checkIcon = css`
  width: 4.4rem;
  height: 4.4rem;
`;
