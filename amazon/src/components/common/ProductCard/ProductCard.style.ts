import { css } from '@emotion/react';

import theme from '@styles/theme';

export const cardContainer = css`
  display: flex;
  width: 24.7rem;
  height: 45rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid ${theme.color.gray3};
  background-color: ${theme.color.white1};
  border-radius: 4px;
`;

export const imageBox = css`
  display: flex;
  width: 100%;
  height: 23.2rem;
  position: relative;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

export const bestSellerIcon = css`
  width: 6.3rem;
  height: 2.3rem;
  position: absolute;
  top: 0;
  left: 0;
`;

export const productBox = css`
  display: flex;
  height: 22rem;
  padding: 0.4rem 0.8rem 0.8rem 0.8rem;
  flex-direction: column;
  align-items: flex-start;
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
  width: 100%;
  justify-content: space-between;
  align-items: center;

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
  gap: 0.4rem;
  align-items: center;

  ${theme.font.body_r_10};
  color: ${theme.color.orange1};
`;

export const ratingStarIcon = css`
  width: 1.4rem;
  height: 1.4rem;
`;

export const noDiscountRatePrice = css`
  display: flex;
  align-items: center;
  color: ${theme.color.black};

  ${theme.font.title_b_20};
  margin: 0.4rem 0.2rem 0 0;

  span {
    display: flex;
    width: 1.3rem;
    height: 1.8rem;
    flex-direction: column;
    justify-content: flex-end;
    ${theme.font.body_r_14};
  }
`;

export const countDiscountText = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: -0.4rem;

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
  color: ${theme.color.black};
  margin-top: -0.4rem;

  span:nth-child(1) {
    color: ${theme.color.red};
    ${theme.font.title_b_16};
    margin-right: 0.4rem;
  }
  span:nth-child(2) {
    ${theme.font.title_b_20};
  }
  span:nth-child(3) {
    display: flex;
    width: 1.3rem;
    height: 1.8rem;
    flex-direction: column;
    justify-content: flex-end;

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
