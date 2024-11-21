import { css } from '@emotion/react';
import theme from '@styles/theme';

export const HeaderContainer = css`
  display: flex;
  align-items: center;
  background-color: ${theme.color.black};
  width: 100%;
  height: 6rem;
`;

export const HeaderLogo = css`
  margin: 0 1.6rem 0 2.4rem;
  img {
    height: 3.9rem;
  }
`;

export const LocationIconStyle = css`
  display: inline-flex;
  height: 5rem;
  margin-right: 1.4rem;
  flex-shrink: 0;
`;

export const SearchBarWrapper = css`
  margin-right: 2rem;
`;

export const LanguageIconStyle = css`
  width: 6.3rem;
  cursor: pointer;
`;

export const CartWrapper = css`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 1.3rem;
`;

export const CartIconStyle = css`
  width: 3.6rem;
  height: 3.3rem;
  flex-shrink: 0;
`;

export const CartCountWrapper = css`
  position: absolute;
  left: 2rem;
  bottom: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.orange1};
  color: ${theme.color.white1};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  span {
    ${theme.font.body_r_12};
  }
`;

export const HeaderActionButtonsWrapper = css`
  display: flex;
  gap: 2.3rem;
`;

export const HeaderActionButton = css`
  ${theme.font.body_b_14};
  color: ${theme.color.white1};
  background: none;
  border: none;
  cursor: pointer;
`;
