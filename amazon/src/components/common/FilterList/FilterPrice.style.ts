import { css } from '@emotion/react';
import { ThemeType } from '../../../styles/theme';

export const filterPriceStyle = (theme: ThemeType) => ({
  root: css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    h3 {
      ${theme.font.title_b_16};
    }
  `,
  inputContainer: css`
    ${theme.font.title_m_16};
    display: flex;
    align-items: center;
    gap: 0.8rem;
    align-self: stretch;
  `,
  priceVectorIcon: css`
    margin: 2.4rem 0;
  `,
});

export const inputStyle = (theme: ThemeType) => css`
  -moz-appearance: textfield;
  -webkit-appearance: none;
  appearance: none;

  width: 7.5rem;
  height: 3.2rem;
  border: 0.1rem solid ${theme.color.gray3};
  border-radius: 0.4rem;
  background-color: ${theme.color.white1};
  padding: 0.4rem 1.6rem 0.4rem 0.8rem;
  display: flex;
  align-items: center;

  &::placeholder {
    ${theme.font.title_r_16};
    color: ${theme.color.gray3};
    opacity: 1;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
