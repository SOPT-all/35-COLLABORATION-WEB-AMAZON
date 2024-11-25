import { Breadcrumb, FilterList, SortingBar, ProductList, BottomRecommend, BottomLoginRecommend } from '@components';

import { mainContainer, searchContainer } from './Search.style';

const Search = () => {
  return (
    <div css={searchContainer}>
      <Breadcrumb />
      <main css={mainContainer}>
        <section>
          <FilterList />
        </section>
        <section>
          <SortingBar />
          <ProductList />
          <BottomRecommend />
        </section>
      </main>
      <section>
        <BottomLoginRecommend />
      </section>
    </div>
  );
};

export default Search;
