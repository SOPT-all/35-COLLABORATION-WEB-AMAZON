import {
  Header,
  Breadcrumb,
  FilterList,
  SortingBar,
  ProductList,
  BottomRecommend,
  BottomLoginRecommend,
} from '@components';

import { mainContainer, searchContainer } from './Search.style';

const Search = () => {
  return (
    <div css={searchContainer}>
      <Header />
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
      <BottomLoginRecommend />
    </div>
  );
};

export default Search;
