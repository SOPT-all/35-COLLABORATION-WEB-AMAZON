import { MainCarousel, Breadcrumb, ProductList, BottomRecommend } from '@components';

import { sectionStyle } from './Dev.style';

const Dev = () => {
  return (
    <>
      <div css={sectionStyle}>
        <MainCarousel />
      </div>
      <div css={sectionStyle}>
        <Breadcrumb />
      </div>
      <div css={sectionStyle}>
        <ProductList />
      </div>
      <div css={sectionStyle}>
        <BottomRecommend />
      </div>
    </>
  );
};

export default Dev;
