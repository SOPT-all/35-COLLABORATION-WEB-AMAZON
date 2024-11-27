import { css } from '@emotion/react';

import theme from '@styles/theme';

export const mainCardContainer = css`
  width: 32rem;
  height: 41rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 2rem 1.8rem;

  border-radius: 4px;
  background-color: ${theme.color.white1};
`;

export const cardTitle = css`
  ${theme.font.title_b_20};
  color: ${theme.color.black};
`;

export const cardImageBox = css`
  width: 100%;
  height: 31rem;

  border: 1px solid transparent;
  border-radius: 4px;
  margin-top: 1rem;
`;
export const cardOnlyImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${theme.color.orange1};
  }
`;

export const cardImageGridBox = css`
  width: 100%;
  height: 31rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 2rem;
`;

export const cardGridImage = css`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 12.6rem;
  height: 13.8rem;

  img {
    width: 100%;
    height: 12rem;
    border-radius: 4px;
    border: 1px solid transparent;
    object-fit: cover;
  }

  span {
    ${theme.font.body_r_12};
    color: ${theme.color.black};
  }

  &:hover {
    img {
      border: 1px solid ${theme.color.orange1};
    }

    span {
      color: ${theme.color.orange1};
      text-decoration: underline;
    }
  }
`;

export const cardGridImageText = css`
  color: ${theme.color.black};
  ${theme.font.body_r_12};
`;

export const moreButton = css`
  width: fit-content;
  border: none;
  background: none;
  margin-top: 1rem;
  margin-left: 0.4rem;
  cursor: pointer;

  color: ${theme.color.orange2};
  ${theme.font.body_r_12};

  &:hover {
    text-decoration: underline;
    color: ${theme.color.orange1};
  }
`;
