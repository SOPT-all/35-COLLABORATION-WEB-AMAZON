import { IcHeaderSearch } from '@svg';
import { useState } from 'react';

import { searchBarContainer, inputStyle, buttonStyle, buttonActiveStyle } from './SearchBar.style';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  return (
    <div css={searchBarContainer}>
      <input
        css={inputStyle}
        type="text"
        placeholder="상품명 및 브랜드 입력"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button css={[buttonStyle, query.trim() && buttonActiveStyle]}>
        <IcHeaderSearch />
      </button>
    </div>
  );
};

export default SearchBar;
