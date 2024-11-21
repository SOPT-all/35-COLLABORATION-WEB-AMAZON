import { css } from '@emotion/react';
import theme from '@styles/theme';

export const searchBarContainer = css`
  position: relative;
  display: flex;
  align-items: center;
  width: 74.3rem;
  height: 4rem;
  border-radius: 4px;
  background: ${theme.color.white1};
  border: 1px solid transparent;
  background-clip: padding-box;
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

export const recentSearchContainer = css`
  position: absolute;
  width: 74.3rem;
  padding: 1rem 1.8rem 1.6rem;
  border: 1px solid ${theme.color.orange1};
  border-radius: 4px;
  background: ${theme.color.white1};
`;

export const recentHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const headerTextStyle = css`
  ${theme.font.title_r_16};
  color: ${theme.color.gray1};
`;

export const headerButtonStyle = css`
  ${theme.font.title_r_16};
  color: ${theme.color.gray1};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const recentListStyle = css`
  list-style: none;
  margin-top: 1rem;
`;

export const recentItemStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const searchIconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 1.5rem;
  color: ${theme.color.gray2};
`;

export const keywordStyle = css`
  ${theme.font.title_m_16};
  color: ${theme.color.black};
  flex: 1;
`;

export const dateStyle = css`
  ${theme.font.title_r_16};
  color: ${theme.color.gray3};
  margin-right: 0.7rem;
`;

export const deleteIconStyle = css`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;

  & path {
    stroke: ${theme.color.gray3};
  }
`;

export const emptyMessageStyle = css`
  text-align: center;
  ${theme.font.title_m_16};
  color: ${theme.color.gray1};
  padding: 4.3rem 0;
`;
