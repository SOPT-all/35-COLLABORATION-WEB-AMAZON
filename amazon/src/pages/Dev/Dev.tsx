import MainCarousel from '@components';

import { sectionStyle } from './Dev.style';

import FilterContainer from "../../components/common/FilterList/FIlterContainer";
import { css } from "@emotion/react";

const devPageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;


const Dev = () => {
  return (
  <div css={devPageStyle}>
  <div css={sectionStyle}>
    {/* <MainCarousel /> */}
    <FilterContainer />
  </div>
  </div>

);
};
  
  export default Dev