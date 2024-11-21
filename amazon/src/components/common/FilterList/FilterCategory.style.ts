import { css } from '@emotion/react';
import { ThemeType } from '../../../styles/theme';

export const categoryStyle = (theme: ThemeType) => css`
  h3 {
    ${theme.font.title_b_16};
    color: ${theme.color.black};
    margin-bottom: 8px;
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    display: flex;
    align-items: center;
    width: 236px;

    label {
      ${theme.font.title_m_16};
      color: ${theme.color.black};
      cursor: pointer;
      width: 188px;
      flex-grow: 1;
      text-align: left;
      margin-bottom:;
    }
  }

  .down-icon,
  .up-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .view-all-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin-top: 8px;
    background-color: ${theme.color.white1};
    cursor: pointer;

    span {
      ${theme.font.title_m_16};
      color: ${theme.color.gray2};
    }
  }

  .category-vector-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .hide-vector {
    display: none;
  }

  .category-item {
    margin-bottom: 8px;
  }
`;
