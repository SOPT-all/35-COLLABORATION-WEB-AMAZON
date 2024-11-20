import { css } from '@emotion/react';

import theme from '@styles/theme';

export const cardContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 24.7rem;
  height: 45rem;
  border: 1px solid ${theme.color.gray3};
  border-radius: 4px;
  background-color: ${theme.color.white1};
`;

export const imageBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 23.2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const bestSellerIcon = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 6.3rem;
  height: 2.3rem;
`;

export const productBox = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 22rem;
  padding: 0.4rem 0.8rem 0.8rem 0.8rem;
  gap: 0.4rem;

  h2 {
    color: ${theme.color.black};
    white-space: normal;

    ${theme.font.body_r_14};
  }

  h3 {
    ${theme.font.title_b_20};
  }

  h4 {
    ${theme.font.body_b_10};
  }
`;

export const productHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    display: flex;
    align-items: center;
    gap: 0;
    ${theme.font.body_b_12};
  }
`;

export const rightArrowIcon = css`
  width: 1.6rem;
  height: 1.6rem;
`;

export const cartIcon = css`
  width: 2.4rem;
  height: 2.4rem;
`;

export const ratingBox = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${theme.color.orange1};
  ${theme.font.body_r_10};
`;

export const ratingStarIcon = css`
  width: 1.4rem;
  height: 1.4rem;
`;

export const noDiscountRatePrice = css`
  display: flex;
  align-items: center;
  margin: 0.4rem 0.2rem 0 0;
  color: ${theme.color.black};
  ${theme.font.title_b_20};

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 1.3rem;
    height: 1.8rem;
    ${theme.font.body_r_14};
  }
`;

export const countDiscountText = css`
  display: flex;
  align-items: center;
  margin-top: -0.4rem;
  gap: 0.4rem;

  span {
    color: ${theme.color.red};
    ${theme.font.body_b_10};
  }

  del {
    color: ${theme.color.gray2};
    ${theme.font.body_r_10};
  }
`;

export const discountRateText = css`
  display: flex;
  align-items: center;
  margin-top: -0.4rem;
  color: ${theme.color.black};

  div:nth-of-type(1) {
    color: ${theme.color.red};
    ${theme.font.title_b_16};
    margin-right: 0.4rem;
  }

  div:nth-of-type(2) {
    ${theme.font.title_b_20};
  }

  div:nth-of-type(3) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 1.3rem;
    height: 1.8rem;
    ${theme.font.body_r_14};
  }
`;

export const vectorIcon = css`
  height: 0.6rem;
  stroke-width: 0.1rem;
`;

export const freeDeliveryIcon = css`
  width: 5.5rem;
  height: 1.6rem;
`;

export const freeDeliveryConditionText = css`
  color: ${theme.color.gray2};
  ${theme.font.body_r_10};
`;
