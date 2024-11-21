import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { ThemeType } from '../../../styles/theme';
import FilterList from './FilterList';
import SelectedFilters from './SelectedFilters';
import PriceFilter from './FilterPrice';
import { containerStyle, sectionStyle, titleStyle } from './FilterContainer.style';
import { IcColorchipBlack, IcColorchipRed, IcColorchipSilver, IcColorchipWhite, IcColorchipGray } from '@svg';

const FilterContainer: React.FC = () => {
  const theme = useTheme() as ThemeType;
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{ min: string; max: string }>({ min: '', max: '' });

  const handleFilterChange = (filter: string, category?: string) => {
    const formattedFilter =
      category === '브랜드'
        ? `브랜드: ${filter}`
        : category === '색상'
        ? `색상: ${filter}`
        : filter;

    setSelectedFilters((prev) =>
      prev.includes(formattedFilter)
        ? prev.filter((item) => item !== formattedFilter)
        : [...prev, formattedFilter]
    );
  };

  const handleFilterRemove = (filter: string) => {
    setSelectedFilters((prev) => prev.filter((item) => item !== filter));
  };

  const handlePriceChange = (min: string, max: string) => {
    setPriceRange({ min, max });

    if (min.trim() !== '' && max.trim() !== '') {
      const priceFilter = `${min} ~ ${max}`;
      setSelectedFilters((prev) =>
        prev.some((item) => item.includes('~'))
          ? prev.map((item) => (item.includes('~') ? priceFilter : item))
          : [...prev, priceFilter]
      );
    } else {
      setSelectedFilters((prev) => prev.filter((item) => !item.includes('~')));
    }
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
        { id: 2, name: '가전 및 주방' },
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
        { id: 10, name: 'BestOffice' },
        { id: 11, name: 'GoodCook' },
        { id: 12, name: 'Glad' },
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
        { id: 15, name: '블랙', colorChip: <IcColorchipBlack /> },
        { id: 16, name: '그레이', colorChip: <IcColorchipGray /> },
        { id: 17, name: '실버', colorChip: <IcColorchipSilver /> },
        { id: 18, name: '화이트', colorChip: <IcColorchipWhite /> },
        { id: 19, name: '레드', colorChip: <IcColorchipRed /> },
      ],
    },
  ];

  return (
    <div css={containerStyle(theme)}>
      {selectedFilters.length > 0 && (
        <div css={sectionStyle}>
          <span css={titleStyle(theme)}>선택한 필터</span>
          <SelectedFilters selected={selectedFilters} onRemove={handleFilterRemove} />
        </div>
      )}

      <div css={sectionStyle}>
        <FilterList
          data={filterData.filter((f) => f.name === '아마존 서비스')}
          onChange={handleFilterChange}
          selectedFilters={selectedFilters}
        />
      </div>

      <div css={sectionStyle}>
        <FilterList
          data={filterData.filter((f) => f.name === '카테고리')}
          onChange={handleFilterChange}
          selectedFilters={selectedFilters}
        />
      </div>

      <div css={sectionStyle}>
        <FilterList
          data={filterData.filter((f) => f.name === '브랜드')}
          onChange={(filter) => handleFilterChange(filter, '브랜드')}
          selectedFilters={selectedFilters}
        />
      </div>

      <div css={sectionStyle}>
        <PriceFilter priceRange={priceRange} onPriceChange={handlePriceChange} />
      </div>

      <div css={sectionStyle}>
        <FilterList
          data={filterData.filter((f) => f.name === '상태')}
          onChange={handleFilterChange}
          selectedFilters={selectedFilters}
        />
      </div>

      <div css={sectionStyle}>
        <FilterList
          data={filterData.filter((f) => f.name === '색상')}
          onChange={(filter) => handleFilterChange(filter, '색상')}
          selectedFilters={selectedFilters}
        />
      </div>
    </div>
  );
};

export default FilterContainer;
