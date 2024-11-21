import MainCarousel from '@components';

import { sectionStyle } from './Dev.style';

import FilterContainer from '../../components/common/FilterList/FIlterContainer';
import { css } from '@emotion/react';

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
    <>
      {/* <div css={sectionStyle}>
        <MainCarousel /></div> */}
      <div css={sectionStyle}>
        <FilterContainer />
      </div>
    </>
  );
};

export default Dev;
