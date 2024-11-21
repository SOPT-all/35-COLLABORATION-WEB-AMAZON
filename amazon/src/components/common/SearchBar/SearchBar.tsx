import { useState, useRef } from 'react';

import { IcHeaderSearch, IcSearchbar, IcClose } from '@svg';
import { mockRecentSearches } from '@utils';

import {
  searchBarContainer,
  inputStyle,
  buttonStyle,
  buttonActiveStyle,
  recentSearchContainer,
  recentHeaderStyle,
  recentListStyle,
  recentItemStyle,
  keywordStyle,
  dateStyle,
  searchIconStyle,
  deleteIconStyle,
  emptyMessageStyle,
  headerTextStyle,
  headerButtonStyle,
} from './SearchBar.style';

interface RecentSearch {
  id: string;
  keyword: string;
  searchDate: string;
}

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>(mockRecentSearches);
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const handleDelete = (id: string) => {
    setRecentSearches((prev) => prev.filter((item) => item.id !== id));
  };

  const handleDeleteAll = () => {
    setRecentSearches([]);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
      setIsSearchBarActive(false);
    }
  };

  const handleFocus = () => {
    setIsSearchBarActive(true);
    document.addEventListener('mousedown', handleOutsideClick);
  };

  const handleBlur = () => {
    document.removeEventListener('mousedown', handleOutsideClick);
  };

  return (
    <div ref={searchBarRef}>
      {/* 검색 바 */}
      <div css={searchBarContainer} onFocus={handleFocus} onBlur={handleBlur}>
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

      {/* 최근 검색어 */}
      {isSearchBarActive && (
        <div css={recentSearchContainer}>
          <div css={recentHeaderStyle}>
            <span css={headerTextStyle}>최근 검색어</span>
            <button css={headerButtonStyle} onClick={handleDeleteAll}>
              전체 삭제
            </button>
          </div>

          {recentSearches.length > 0 ? (
            <ul css={recentListStyle}>
              {recentSearches.map(({ id, keyword, searchDate }) => (
                <li key={id} css={recentItemStyle}>
                  <IcSearchbar css={searchIconStyle} />
                  <span css={keywordStyle}>{keyword}</span>
                  <span css={dateStyle}>{searchDate}</span>
                  <IcClose css={deleteIconStyle} onClick={() => handleDelete(id)} />
                </li>
              ))}
            </ul>
          ) : (
            <div css={emptyMessageStyle}>최근 검색어 내역이 없습니다.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
