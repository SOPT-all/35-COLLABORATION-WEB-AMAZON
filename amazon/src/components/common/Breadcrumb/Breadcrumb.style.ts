import { css } from '@emotion/react';
import theme from '@styles/theme';

export const breadcrumbContainer = css`
  width: 100%;
  padding: 0.75rem 1.75rem;
  border-top: 1px solid ${theme.color.gray3};
  border-bottom: 1px solid ${theme.color.gray3};
  background: ${theme.color.gray4};
`;

export const breadcrumbNav = css`
  display: flex;
  align-items: center;
`;

export const breadcrumbBtn = css`
  ${theme.font.title_r_16};
  color: ${theme.color.gray2};
  cursor: pointer;
  background: transparent;
  border: none;
`;

export const breadcrumbCurrentBtn = css`
  ${breadcrumbBtn};
  ${theme.font.title_b_16};
  color: ${theme.color.black};
`;
