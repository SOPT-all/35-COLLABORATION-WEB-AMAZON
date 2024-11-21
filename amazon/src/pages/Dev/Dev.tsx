import { MainCarousel, Breadcrumb, ProductList, HorizontalScroll, SearchBar } from '@components';
import { images } from '@constants';

import { sectionStyle } from './Dev.style';

const Dev = () => {
  console.log(images);
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
        <HorizontalScroll title={'가전 제품 및 주방의 베스트셀러'} images={images} />
      </div>
      <div css={sectionStyle}>
        <SearchBar />
      </div>
    </>
  );
};

export default Dev;
