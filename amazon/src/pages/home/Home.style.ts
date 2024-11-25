import { css } from '@emotion/react';
import theme from '@styles/theme';

export const homeStyle = css`
  width: 100%;
  height: 103vh;
  background-color: ${theme.color.white2};
`;

export const headerStyle = css`
  position: relative;
  top: 0;
`;

export const iconStyle = css`
  position: absolute;
  bottom: 0;
  display: flex;
  height: 10rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const sectionStyle = css`
  position: absolute;
  width: 100%;
  top: 35rem;

  display: flex;
  flex-direction: column;
`;

export const cardStyle = css`
  top: 35rem;
  gap: 1.4rem;
  display: flex;
  margin: 0 2.2rem 3rem 2.2rem;

  &:nth-of-type(2) {
    margin-bottom: 3rem;
  }
`;

export const scrollStyle = css`
  margin: 0rem 2.2rem 3rem 2.2rem;
  overflow-x: hidden;
  background-color: ${theme.color.white1};
`;

export const loginRecommendStyle = css`
// margin-top:3rem;
  margin-bottom: 3rem;
 background-color: ${theme.color.white1};
  
`;
