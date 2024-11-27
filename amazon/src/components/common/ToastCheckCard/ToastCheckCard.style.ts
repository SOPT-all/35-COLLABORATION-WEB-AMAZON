import { css } from '@emotion/react';

import theme from '@styles/theme';

export const cardContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  width: 29.4rem;
  height: 13.2rem;
  border-radius: 8px;
  background: var(--black_op, rgba(15, 17, 17, 0.8));

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

export const successSection = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

export const failSection = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
  }
`;
