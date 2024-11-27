import { getSearchHistory } from '@apis/getSearchHistory';
import { IcHeaderSearch, IcSearchbar, IcClose } from '@svg';
import { useState, useRef, useEffect } from 'react';

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
}

const LOCAL_STORAGE_KEY = 'searchQuery';

const SearchBar = ({ onKeywordChange }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  // 검색어 삭제 기능
  const handleDelete = (id: string) => {
    setRecentSearches((prev) => prev.filter((item) => item.id !== id));
  };

  // 전체 삭제 기능
  const handleDeleteAll = () => {
    setRecentSearches([]);
  };

  // 외부 클릭 감지하여 최근 검색어 리스트 닫기
  const handleOutsideClick = (event: MouseEvent) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
      setIsSearchBarActive(false);
    }
  };

  // 검색 바에 포커스 될 때 최근 검색어 가져오기
  const handleFocus = async () => {
    setIsSearchBarActive(true);
    document.addEventListener('mousedown', handleOutsideClick);
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

  // 검색 바에서 포커스 아웃될 때 이벤트 제거
  const handleBlur = () => {
    document.removeEventListener('mousedown', handleOutsideClick);
  };

  // 검색 버튼 클릭 또는 Enter 키 입력 시 검색 실행
  const handleSearch = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      onKeywordChange(trimmedQuery); // 부모 컴포넌트로 검색어 전달
      localStorage.setItem(LOCAL_STORAGE_KEY, trimmedQuery); // 검색어 저장
      setIsSearchBarActive(false);
    }
  };

  // Enter 키 입력 시 검색 실행
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // 검색어 클릭 시 검색 실행
  const handleRecentSearchClick = (keyword: string) => {
    setQuery(keyword);
    onKeywordChange(keyword);
    localStorage.setItem(LOCAL_STORAGE_KEY, keyword); // 검색어 저장
    setIsSearchBarActive(false);
  };

  // 컴포넌트 초기화 시 로컬스토리지에서 검색어 불러오기
  useEffect(() => {
    const savedQuery = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedQuery) {
      setQuery(savedQuery); // 상태 초기화
    }

    return () => {
      // 컴포넌트 언마운트 시 검색어 초기화
      localStorage.removeItem(LOCAL_STORAGE_KEY); // localStorage에서 검색어 삭제
    };
  }, []);

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
                  <span css={keywordStyle} onClick={() => handleRecentSearchClick(keyword)}>
                    {keyword}
                  </span>
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
