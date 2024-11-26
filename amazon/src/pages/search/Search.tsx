import { Breadcrumb, FilterList, SortingBar, ProductList, BottomRecommend, BottomLoginRecommend } from '@components';

import { bottomLoginSection, mainContainer, searchContainer } from './Search.style';

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
      <section css={bottomLoginSection}>
        <BottomLoginRecommend />
      </section>
    </div>
  );
};

export default Search;
