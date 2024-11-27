import { css } from '@emotion/react';

import theme from '@styles/theme';

export const sortingBarContainer = css`
  display: flex;
  align-items: center;
  width: 101.8rem;
  padding: 1.2rem 1.4rem 1.2rem 1.6rem;
  gap: 1rem;
  border-bottom: 1px solid ${theme.color.gray3};
`;

const sharedActiveStyle = css`
  color: ${theme.color.black};
  cursor: pointer;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: 14.5%; /* 2.32px */
  text-underline-offset: 22%; /* 3.52px */
`;

export const sortingKeywordBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.4rem;
  gap: 1rem;
  color: ${theme.color.gray3};
  ${theme.font.title_b_16};

  &:hover {
    ${sharedActiveStyle};
  }
`;

export const activeKeywordBox = css`
  ${sharedActiveStyle};
`;
