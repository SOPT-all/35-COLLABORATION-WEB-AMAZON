import { css } from '@emotion/react';

import theme from '@styles/theme';

export const selectedFiltersStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2.4rem;
`;

export const vectorStyle = css`
  margin-top: 1.6rem;
`;

export const filterTagStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.7rem;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background-color: ${theme.color.gray4};
  cursor: pointer;
  width: fit-content;

  span {
    ${theme.font.title_m_16};
    color: ${theme.color.black};
    text-align: center;
  }

  svg {
    pointer-events: auto;
  }
`;
