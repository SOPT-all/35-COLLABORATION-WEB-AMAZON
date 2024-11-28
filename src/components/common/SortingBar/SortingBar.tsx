import { useState } from 'react';

import { sortingBarContainer, sortingKeywordBox, activeKeywordBox } from './SortingBar.style';

const sortBy = [
  { key: 'POPULARITY', label: '인기순' },
  { key: 'REVIEWCOUNT', label: '리뷰 많은순' },
  { key: 'SALES', label: '판매순' },
  { key: 'LOWPRICE', label: '낮은 가격순' },
  { key: 'LATESTPRODUCTS', label: '신상품순' },
];

interface SortingBarProps {
  onSortChange: (sort: 'POPULARITY' | 'REVIEWCOUNT' | 'SALES' | 'LOWPRICE' | 'LATESTPRODUCTS') => void;
}

const SortingBar = ({ onSortChange }: SortingBarProps) => {
  const [activeSort, setActiveSort] = useState<'POPULARITY' | 'REVIEWCOUNT' | 'SALES' | 'LOWPRICE' | 'LATESTPRODUCTS'>(
    'POPULARITY'
  );

  const handleClick = (sort: 'POPULARITY' | 'REVIEWCOUNT' | 'SALES' | 'LOWPRICE' | 'LATESTPRODUCTS') => {
    setActiveSort(sort);
    onSortChange(sort); // 부모 컴포넌트로 정렬 상태 전달
  };

  return (
    <div css={sortingBarContainer}>
      {sortBy.map(({ key, label }) => (
        <div
          key={key}
          css={[sortingKeywordBox, activeSort === key && activeKeywordBox]}
          onClick={() => handleClick(key as 'POPULARITY' | 'REVIEWCOUNT' | 'SALES' | 'LOWPRICE' | 'LATESTPRODUCTS')}>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default SortingBar;
