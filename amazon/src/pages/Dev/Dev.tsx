import { MainCarousel, ProductList } from '@components';

import { sectionStyle } from './Dev.style';

const Dev = () => {
  return (
    <>
      <div css={sectionStyle}>
        <MainCarousel />
        <ProductList />
      </div>
    </>
  );
};

export default Dev;
