import { css } from '@emotion/react';

import theme from '@styles/theme';

export const section1Container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.5rem 0;
  background-color: ${theme.color.navy3};
  color: ${theme.color.white1};
  ${theme.font.body_r_14}
`;

export const section2BottomContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  width: 100%;
  padding: 3.6rem 0;
`;
