import { css } from '@emotion/react';
import theme from '@styles/theme';

export const homeStyle = css`
  width: 100%;
  min-height: 100vh; 
  position: relative;
  background-color: ${theme.color.white2};
  padding-bottom: 3rem; 
`;

export const headerStyle = css`
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const iconStyle = css`
  position: absolute;
  bottom: 0;
  display: flex;
  height: 10rem;
  justify-content: center;
  align-items: center;
`;

export const sectionStyle = css`
  position: relative; 
  width: 100%;
  margin-top: -30rem; 
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

export const cardStyle = css`
  gap: 1.4rem;
  display: flex;
  margin: 0 2.2rem 3rem 2.2rem;

  &:nth-of-type(2) {
    margin-bottom: 3rem;
  }
`;

export const scrollStyle = css`
  margin: 0em 2.2rem 3rem 2.2rem;
  overflow-x: hidden;
  background-color: ${theme.color.white1};
`;

export const loginRecommendStyle = css`
  background-color: ${theme.color.white1};
`;
