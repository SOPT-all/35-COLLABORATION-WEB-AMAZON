import { MainCarousel, ProductList } from '@components';

import { sectionStyle } from './Dev.style';

const Dev = () => {
  return (
    <>
      <div css={sectionStyle}>
        <MainCarousel />
      </div>
      <div css={sectionStyle}>
        <ProductList />
      </div>
    </>
  );
};

export default Dev;
