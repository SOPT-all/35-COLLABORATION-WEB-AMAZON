import { MainCarousel, Breadcrumb, ProductList, SearchBar, Header } from '@components';

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
        <SearchBar />
      </div>
      <div css={sectionStyle}>
        <Header />
      </div>
    </>
  );
};

export default Dev;
