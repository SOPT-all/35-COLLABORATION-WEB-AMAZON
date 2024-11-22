import { css } from '@emotion/react';
import { ThemeType } from '../../../styles/theme';

export const containerStyle = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 2.8rem; 
  border-radius: 0.8rem;
  border: 1px solid ${theme.color.gray3};
  background-color: ${theme.color.white1};
  width: 29.2rem;
  height: auto;
  
`;

export const titleStyle = (theme: ThemeType) => css`
  ${theme.font.title_b_16};
`;

export const sectionStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  width: 23.6rem;

  &:first-of-type {
    margin-top: 0; /* 첫 번째 섹션 간격 제거 */
  }

  &:last-of-type {
    margin-bottom: 0; /* 마지막 섹션 간격 제거 */
  }
`;
