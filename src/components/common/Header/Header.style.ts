import { css } from '@emotion/react';

import theme from '@styles/theme';

export const HeaderContainer = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
  background: var(--navy23_gradation, linear-gradient(90deg, #222f3e 45.83%, #37475a 100%));
`;

export const HeaderLogo = css`
  margin: 0 1.6rem 0 2.4rem;
  cursor: pointer;

  img {
    height: 3.9rem;
  }
`;

export const LocationIconStyle = css`
  display: inline-flex;
  height: 5rem;
  margin-right: 1.4rem;
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
`;

export const CartCountWrapper = css`
  position: absolute;
  left: 2rem;
  bottom: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${theme.color.orange1};
  color: ${theme.color.white1};

  span {
    ${theme.font.body_r_12};
  }
`;

export const HeaderActionButtonsWrapper = css`
  display: flex;
  gap: 2.3rem;
`;

export const HeaderActionButton = css`
  background: none;
  border: none;
  cursor: pointer;
  color: ${theme.color.white1};
  ${theme.font.body_b_14};
`;

export const NavigationBar = css`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  height: 4.1rem;
  background-color: ${theme.color.navy};
`;

export const HamburgerStyle = css`
  width: 1.6rem;
  height: 1.6rem;
`;

export const AllMenuButton = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-left: 1.2rem;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  span {
    color: ${theme.color.white1};
    ${theme.font.body_b_14};
  }
`;

export const NavigationItem = css`
  color: ${theme.color.white1};
  cursor: pointer;
  ${theme.font.body_r_14};
`;
