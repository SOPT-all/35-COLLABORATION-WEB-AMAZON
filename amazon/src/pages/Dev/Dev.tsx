import { MainCarousel, Breadcrumb, ProductList, SearchBar, FilterList} from '@components';

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
       <FilterList />
      </div>
    </>
  );
};

export default Dev;
