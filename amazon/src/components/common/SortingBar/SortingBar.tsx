import { useState } from 'react';

import { sortingBarContainer, sortingKeywordBox, activeKeywordBox } from './SortingBar.style';

const sortBy = ['인기순', '리뷰 많은 순', '판매순', '낮은 가격순', '신상품순'];

const SortingBar = () => {
  const [activeSort, setActiveSort] = useState(sortBy[0]); // 기본값은 '인기순'으로 설정

  const handleClick = (sort: string) => {
    setActiveSort(sort);
  };

  return (
    <div css={sortingBarContainer}>
      {/* index는 API 연결 시 id로 수정 예정 */}
      {sortBy.map((text, index) => (
        <div
          key={index}
          css={[sortingKeywordBox, activeSort === text && activeKeywordBox]}
          onClick={() => handleClick(text)}>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
};

export default SortingBar;
