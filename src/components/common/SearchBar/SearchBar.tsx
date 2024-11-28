import { forwardRef, useImperativeHandle, useState, useEffect } from 'react';

import { getSearchHistory } from '@apis/getSearchHistory';

import { IcHeaderSearch, IcSearchbar, IcClose } from '@svg';

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

interface RecentSearchData {
  keyword: string;
  searchDate: string;
}

interface RecentSearch extends RecentSearchData {
  id: string;
}

interface SearchBarProps {
  onKeywordChange: (keyword: string) => void;
  initialQuery?: string; // URL에서 가져온 검색어
}

const SearchBar = forwardRef(({ onKeywordChange, initialQuery = '' }: SearchBarProps, ref) => {
  const [query, setQuery] = useState(initialQuery);
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);

  // 부모 컴포넌트에서 호출 가능한 메서드 정의
  useImperativeHandle(ref, () => ({
    resetQuery: () => {
      setQuery('');
    },
  }));

  // 검색 버튼 클릭
  const handleSearch = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      onKeywordChange(trimmedQuery);
      updateRecentSearches(trimmedQuery);
      setIsSearchBarActive(false);
    }
  };

  // 엔터 키 입력하면 검색 실행
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // 최근 검색어 업데이트
  const updateRecentSearches = (keyword: string) => {
    const timestamp = new Date().toISOString();
    const newSearch = { id: timestamp, keyword, searchDate: new Date().toLocaleString() };

    setRecentSearches((prev) => {
      const filtered = prev.filter((item) => item.keyword !== keyword);
      return [newSearch, ...filtered].slice(0, 5);
    });
  };

  // 최근 검색어 삭제
  const handleDeleteRecent = (id: string) => {
    setRecentSearches((prev) => prev.filter((item) => item.id !== id));
  };

  // 최근 검색어 전체 삭제
  const handleDeleteAll = () => {
    setRecentSearches([]);
  };

  // 검색창에 포커스 시 최근 검색어 활성화
  const handleFocus = async () => {
    setIsSearchBarActive(true);
    try {
      const searchHistory = await getSearchHistory();
      const newSearchHistory = searchHistory.map((item: RecentSearchData, index: number) => ({
        ...item,
        id: index.toString(),
      }));
      setRecentSearches(newSearchHistory);
    } catch (error) {
      console.error(error);
    }
  };

  // 검색창에서 포커스 아웃 시 최근 검색어 비활성화
  const handleBlur = () => {
    setTimeout(() => setIsSearchBarActive(false), 200); // 클릭 처리가 끝난 후 닫히게
  };

  // 초기 검색어 설정
  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  return (
    <div>
      {/* 검색 바 */}
      <div css={searchBarContainer} onFocus={handleFocus} onBlur={handleBlur}>
        <input
          css={inputStyle}
          type="text"
          placeholder="상품명 및 브랜드 입력"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button css={[buttonStyle, query.trim() && buttonActiveStyle]} onClick={handleSearch}>
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
                  <span
                    css={keywordStyle}
                    onClick={() => {
                      setQuery(keyword);
                      onKeywordChange(keyword);
                      setIsSearchBarActive(false);
                    }}>
                    {keyword}
                  </span>
                  <span css={dateStyle}>{searchDate}</span>
                  <IcClose css={deleteIconStyle} onClick={() => handleDeleteRecent(id)} />
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
});

export default SearchBar;
