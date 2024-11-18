import { css } from '@emotion/react';

const AmazonEmberFont = css`
  font-family: 'Amazon Ember', sans-serif;
`;

const theme = {
  color: {
    red: '#f21c00',
    orange1: 'ff9900',
    orange2: 'cc7900',
    blue: '#0066ff',
    navy: '#131a22',
    navy2: '222f3e',
    navy3: '#37475a',
    navy3_hover: '#51657b',

    black: '#0f1111',
    white1: 'ffffff',
    white2: 'f5f5f5',

    gray1: '#565959',
    gray2: '#848688',
    gray3: '#cccccc',
    gray4: 'f0f2f2',
  },

  font: {
    title_b_24: css`
      ${AmazonEmberFont};
      font-size: 24px;
      font-weight: 700;
    `,
    title_b_20: css`
      ${AmazonEmberFont};
      font-size: 20px;
      font-weight: 700;
    `,
    title_b_16: css`
      ${AmazonEmberFont};
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
    `,
    title_m_16: css`
      ${AmazonEmberFont};
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    `,
    title_r_16: css`
      ${AmazonEmberFont};
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    `,
    body_b_14: css`
      ${AmazonEmberFont};
      font-size: 14px;
      font-weight: 700;
    `,
    body_r_14: css`
      ${AmazonEmberFont};
      font-size: 14px;
      font-weight: 400;
    `,
    body_b_12: css`
      ${AmazonEmberFont};
      font-size: 12px;
      font-weight: 700;
    `,
    body_r_12: css`
      ${AmazonEmberFont};
      font-size: 12px;
      font-weight: 400;
    `,
    body_b_10: css`
      ${AmazonEmberFont};
      font-size: 10px;
      font-weight: 700;
    `,
    body_r_10: css`
      ${AmazonEmberFont};
      font-size: 10px;
      font-weight: 400;
    `,
  },
};

export type ColorType = typeof theme.color;
export type FontType = typeof theme.font;

export interface ThemeType {
  color: ColorType;
  font: FontType;
}

export default theme;
