import { css } from '@emotion/react';
import { ThemeType } from '../../../styles/theme';

export const inputStyle = (theme: ThemeType) => css`
  -moz-appearance: textfield; /* Firefox에서 숫자 스피너 제거 */
  -webkit-appearance: none; /* Chrome, Safari에서 숫자 스피너 제거 */
  appearance: none; /* 다른 브라우저의 기본 스타일 제거 */

  width: 75px;
  height: 32px;
  border: 1px solid ${theme.color.gray3};
  border-radius: 4px;
  background: ${theme.color.white1};
  display: flex;
  padding: 4px 16px 4px 8px;
  align-items: center;

  input {
    width: 51px;
    height: 24px;
  }

  &::placeholder {
    ${theme.font.title_r_16}
    color: ${theme.color.gray3};
    opacity: 1;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none; /* 스피너 버튼 제거 */
    margin: 0; /* 추가적인 여백 제거 */
  }
`;

export const filterPriceStyle = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3 {
    ${theme.font.title_b_16}
  }

  .input-container {
    ${theme.font.title_m_16}
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: stretch;
  }

  .price-vector-icon {
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;
