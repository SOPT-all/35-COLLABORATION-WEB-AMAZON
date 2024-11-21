import { MainCarousel, Breadcrumb, SearchBar, ProductList, BottomRecommend, BottomLoginRecommend } from '@components';

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
      <div css={sectionStyle}>
        <BottomLoginRecommend />
      </div>
      <div css={sectionStyle}>
        <SearchBar />
      </div>
    </>
  );
};

export default Dev;
