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
  cursor: pointer;
`;

export const section2TopContainer = css`
  display: flex;
  justify-content: center;
  gap: 5.6rem;
  width: 100%;
  padding: 4.2rem 0;

  background-color: ${theme.color.navy2};
`;

export const topTextsSection = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  h4 {
    color: ${theme.color.white1};
    ${theme.font.title_b_16};
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;

    li {
      color: ${theme.color.gray3};
      ${theme.font.body_r_14};
    }
  }
`;

export const divideLine = css`
  width: 100%;
  height: 2px;
  background-color: ${theme.color.navy3};
`;

export const section2BottomContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  width: 100%;
  padding: 3.6rem 0;

  background-color: ${theme.color.navy2};
`;

export const logoIcon = css`
  width: 8rem;
  height: 2.4rem;
`;

export const footerIcon = css`
  height: 2.4rem;
`;

export const section3TopContainer = css`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 3rem 0;
  gap: 4rem;
  background-color: ${theme.color.navy};
`;

export const boxesWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
`;

export const h4AndSpanBox = css`
  display: flex;
  flex-direction: column;
  ${theme.font.body_r_12};

  h4 {
    color: ${theme.color.white1};
  }
  span {
    color: ${theme.color.gray2};
  }
`;

export const section3BottomContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.425rem;
  padding: 1rem 0 3rem 0;

  color: ${theme.color.gray3};
  background-color: ${theme.color.navy};
  ${theme.font.body_r_12};

  div {
    display: flex;
    gap: 1.44rem;
  }
`;

export const checkIcon = css`
  width: 2.9rem;
  height: 1.4rem;
`;
