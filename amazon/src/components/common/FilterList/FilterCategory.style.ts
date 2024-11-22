import { css } from '@emotion/react';
import { ThemeType } from '../../../styles/theme';

export const categoryStyle = (theme: ThemeType) => css`
  h3 {
    ${theme.font.title_b_16};
    color: ${theme.color.black};
    margin-bottom: 0.8rem; 
  }

  ul {
    display: flex;
    flex-direction: column;
    
  }

  li {
    display: flex;
    align-items: center;
    width: 23.6rem;

    label {
      ${theme.font.title_m_16};
      color: ${theme.color.black};
      cursor: pointer;
      width: 18.8rem; 
      flex-grow: 1;
      text-align: left;
      
    }
  }
`;

export const iconStyle = css`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const viewAllBannerStyle = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem; /* rem 사용 */
  margin-top: 0.8rem;
  background-color: ${theme.color.white1};
  cursor: pointer;

  span {
    ${theme.font.title_m_16};
    color: ${theme.color.gray2};
  }
`;

export const vectorIconStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2.4rem; /* rem 사용 */
  margin-bottom: 2.4rem;
`;

export const hideVectorStyle = css`
  display: none;
`;

export const categoryItemStyle = css`
  margin-bottom: 0.8rem; /* rem 사용 */
`;
