import { css } from '@emotion/react';
import theme from '@styles/theme';

export const searchBarContainer = css`
  display: flex;
  align-items: center;
  width: 74.3rem;
  height: 4rem;
  border: 1px solid transparent;
  border-radius: 4px;
  background: ${theme.color.white1};
  overflow: hidden;

  &:focus-within {
    border-color: ${theme.color.orange1};
  }
`;

export const inputStyle = css`
  ${theme.font.title_b_16};
  flex: 1;
  border: none;
  outline: none;
  padding-left: 2rem;
  color: ${theme.color.black};
  height: 100%;

  &::placeholder {
    ${theme.font.title_r_16};
    color: ${theme.color.gray2};
  }
`;

export const buttonStyle = css`
  width: 4.6rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${theme.color.gray3};
  border: none;

  svg {
    width: 2.2rem;
    height: 2.2rem;
  }
`;

export const buttonActiveStyle = css`
  background: ${theme.color.orange1};
`;
