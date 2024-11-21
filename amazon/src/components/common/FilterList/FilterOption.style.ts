import { css } from '@emotion/react';

export const containerStyle = css`
  display: flex;
  align-items: center;
`;

export const iconStyle = css`
  cursor: pointer;
  display: flex;
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px; /* 아이콘과 라벨 사이의 간격 */
`;

export const labelStyle = css`
  cursor: pointer;
  margin-bottom: 8px;
`;

export const colorChipStyle = css`
  margin-right: 4px; /* 컬러칩과 라벨 간격 */
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
