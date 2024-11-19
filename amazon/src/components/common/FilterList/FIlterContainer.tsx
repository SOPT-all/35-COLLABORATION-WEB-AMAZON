import { css, useTheme } from '@emotion/react';
import { useState } from 'react';
import { ThemeType } from '../../../styles/theme';
import FilterList from './FilterList';
import SelectedFilters from './SelectedFilters';

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

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((item) => item !== filter) : [...prev, filter]
    );
  };

  const handleFilterRemove = (filter: string) => {
    setSelectedFilters((prev) => prev.filter((item) => item !== filter));
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
  ];

  const filteredData = filterData.slice(1); // "아마존 서비스"를 제외한 나머지 필터

  return (
    <div css={containerStyle(theme)}>
      {/* 선택된 필터 */}
      {selectedFilters.length > 0 && (
        <div css={sectionStyle}>
          <span css={titleStyle(theme)}>선택한 필터</span>
          <SelectedFilters selected={selectedFilters} onRemove={handleFilterRemove} />
        </div>
      )}

      {/* 아마존 서비스 필터 */}
      <div css={sectionStyle}>
        <FilterList data={[filterData[0]]} onChange={handleFilterChange} selectedFilters={selectedFilters} />
      </div>

      {/* 나머지 필터 */}
      <div css={sectionStyle}>
        <FilterList data={filteredData} onChange={handleFilterChange} selectedFilters={selectedFilters} />
      </div>
    </div>
  );
};

export default FilterContainer;
