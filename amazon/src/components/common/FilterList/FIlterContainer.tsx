import { css, useTheme } from '@emotion/react';
import { useState } from 'react';
import { ThemeType } from '../../../styles/theme';
import FilterList from './FilterList';
import SelectedFilters from './SelectedFilters';
import PriceFilter from './FilterPrice';

const containerStyle = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  padding: 24px 28px;
  border-radius: 8px;
  gap: 20px;
  border: 1px solid ${theme.color.gray3};
  background-color: ${theme.color.white1};
  width: 296px;
  height: auto;
`;

const titleStyle = (theme: ThemeType) => css`
  ${theme.font.title_b_16};
  margin-bottom: 10px;
`;

const sectionStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FilterContainer: React.FC = () => {
  const theme = useTheme() as ThemeType;
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{ min: string; max: string }>({ min: '', max: '' });

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((item) => item !== filter) : [...prev, filter]
    );
  };

  const handleFilterRemove = (filter: string) => {
    setSelectedFilters((prev) => prev.filter((item) => item !== filter));
  };

  const handlePriceChange = (min: string, max: string) => {
    setPriceRange({ min, max });

    // 가격 필터를 선택된 필터에 추가
    const priceFilter = `${min} ~ ${max}`;
    setSelectedFilters((prev) =>
      prev.some((item) => item.includes('~')) // 기존 가격 필터가 있다면 교체
        ? prev.map((item) => (item.includes('~') ? priceFilter : item))
        : [...prev, priceFilter] // 없으면 새로 추가
    );
  };

  const filterData = [
    {
      id: 1,
      name: '아마존 서비스',
      optionList: [{ id: 1, name: '무료 배송' }],
    },
    {
      id: 2,
      name: '카테고리',
      optionList: [
        { id: 2, name: '가정 및 주방' },
        { id: 3, name: '건강 및 가정용품' },
        { id: 4, name: '스포츠 및 야외활동' },
        { id: 5, name: '영화 및 TV' },
      ],
    },
    {
      id: 3,
      name: '브랜드',
      optionList: [
        { id: 6, name: '아마존 브랜드' },
        { id: 7, name: 'KitchenAid' },
        { id: 8, name: 'Vtopmart' },
        { id: 9, name: 'T-Fal' },
      ],
    },
    {
      id: 4,
      name: '상태',
      optionList: [
        { id: 13, name: '신제품' },
        { id: 14, name: '중고품' },
      ],
    },
    {
      id: 5,
      name: '색상',
      optionList: [
        { id: 15, name: '블랙' },
        { id: 16, name: '그레이' },
        { id: 17, name: '실버' },
        { id: 18, name: '화이트' },
        { id: 19, name: '레드' },
      ],
    },
  ];

  const amazonFilter = filterData.filter((filter) => filter.name === '아마존 서비스');
  const categoryFilter = filterData.filter((filter) => filter.name === '카테고리');
  const brandFilter = filterData.filter((filter) => filter.name === '브랜드');
  const otherFilters = filterData.filter((filter) => filter.name !== '아마존 서비스' && filter.name !== '카테고리' && filter.name !== '브랜드');

  return (
    <div css={containerStyle(theme)}>
      {/* 선택된 필터 */}
      {selectedFilters.length > 0 && (
        <div css={sectionStyle}>
          <span css={titleStyle(theme)}>선택한 필터</span>
          <SelectedFilters selected={selectedFilters} onRemove={handleFilterRemove} />
        </div>
      )}

      {/* 필터 목록 */}
      <div css={sectionStyle}>
        <FilterList data={amazonFilter} onChange={handleFilterChange} selectedFilters={selectedFilters} />
      </div>

      <div css={sectionStyle}>
        <FilterList data={categoryFilter} onChange={handleFilterChange} selectedFilters={selectedFilters} />
      </div>

      <div css={sectionStyle}>
        <FilterList data={brandFilter} onChange={handleFilterChange} selectedFilters={selectedFilters} />
      </div>

      {/* 가격 필터 */}
      <div css={sectionStyle}>
        <PriceFilter priceRange={priceRange} onPriceChange={handlePriceChange} />
      </div>

      <div css={sectionStyle}>
        <FilterList data={otherFilters} onChange={handleFilterChange} selectedFilters={selectedFilters} />
      </div>
    </div>
  );
};

export default FilterContainer
