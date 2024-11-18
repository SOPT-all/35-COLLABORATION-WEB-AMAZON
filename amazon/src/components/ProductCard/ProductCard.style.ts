import { css } from '@emotion/react';

import theme from '../../styles/theme';

export const cardContainer = css`
  display: flex;
  max-width: 25rem;
  height: 45rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 4px;
  border: 1px solid var(${theme.color.gray3}, #ccc);
  background: var(${theme.color.white1}, #fff);
`;

export const imageBox = css`
  display: flex;
  height: 23rem;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

export const ProductBox = css`
  display: flex;
  height: 22rem;
  padding: 0.4rem 0.8rem 0.8rem 0.8rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  h1 {
    color: var(${theme.color.black}, #0f1111);
    text-overflow: ellipsis;
    white-space: normal;

    ${theme.font.body_r_14};
  }
  h2 {
    ${theme.font.title_b_20};
  }
  h3 {
    ${theme.font.body_b_10};
  }
`;
