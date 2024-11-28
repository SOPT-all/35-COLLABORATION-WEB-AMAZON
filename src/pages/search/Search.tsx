import { Breadcrumb, FilterList, SortingBar, ProductList, BottomRecommend, BottomLoginRecommend } from '@components';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { bottomLoginSection, mainContainer, searchContainer, searchResultTitle } from './Search.style';

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialKeyword = queryParams.get('keyword') || '';

  const [keyword, setKeyword] = useState(initialKeyword);
  const [sort, setSort] = useState<'POPULARITY' | 'REVIEWCOUNT' | 'SALES' | 'LOWPRICE' | 'LATESTPRODUCTS'>(
    'POPULARITY'
  );

  useEffect(() => {
    setKeyword(initialKeyword);
  }, [initialKeyword]);

  return (
    <div css={searchContainer}>
      <Breadcrumb />
      <main css={mainContainer}>
        <section>
          <FilterList />
        </section>
        <section>
          <h1 css={searchResultTitle}>'{keyword}' 검색결과</h1>
          <SortingBar onSortChange={(selectedSort) => setSort(selectedSort)} />
          <ProductList keyword={keyword} sort={sort} />
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
