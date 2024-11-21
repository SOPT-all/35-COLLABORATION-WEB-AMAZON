import {
  MainCarousel,
  Breadcrumb,
  SearchBar,
  ProductList,
  BottomRecommend,
  BottomLoginRecommend,
  SortingBar,
} from '@components';

import { sectionStyle } from './Dev.style';

const Dev = () => {
  return (
    <>
      <div css={sectionStyle}>
        <MainCarousel />
      </div>
      <div css={sectionStyle}>
        <SearchBar />
      </div>
      <div css={sectionStyle}>
        <Breadcrumb />
      </div>
      <div css={sectionStyle}>
        <SortingBar />
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
    </>
  );
};

export default Dev;
