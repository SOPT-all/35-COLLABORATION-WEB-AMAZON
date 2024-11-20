import { css } from '@emotion/react';
import { ThemeType } from '../../../styles/theme';

export const containerStyle = (theme: ThemeType) => css`
  flex-direction: column;
  padding: 24px 28px;
  border-radius: 8px;
  border: 1px solid ${theme.color.gray3};
  background-color: ${theme.color.white1};
  width: 292px;
  height: auto;
  margin-bottom: 8px;
`;

export const titleStyle = (theme: ThemeType) => css`
  ${theme.font.title_b_16};
`;

export const sectionStyle = css`
  gap: 8px;
  display: flex;
  width: 236px;
  flex-direction: column;
  align-items: flex-start;

  &:first-child {
    margin-top: 0; /* 첫 번째 섹션 간격 제거 */
  }
  &:last-child {
    margin-bottom: 0; /* 마지막 섹션 간격 제거 */
  }
`;
