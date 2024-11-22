import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { ThemeType } from '../../../styles/theme';
import FilterContainer from './FIlterContainer';
import SelectedFilters from './SelectedFilters';
import PriceFilter from './FilterPrice';
import { containerStyle, sectionStyle, titleStyle } from './FilterList.style';
import {
  IcColorchipBlack,
  IcColorchipRed,
  IcColorchipSilver,
  IcColorchipWhite,
  IcColorchipGray,
  IcColorchipBlue,
  IcColorchipBrown,
  IcColorchipGold,
  IcColorchipGreen,
  IcColorchipKhaki,
  IcColorchipLightGreen,
  IcColorchipNavy,
  IcColorchipOrange,
  IcColorchipPink,
  IcColorchipPurple,
  IcColorchipSkyBlue,
  IcColorchipViolet,
  IcColorchipYellow,
} from '@svg';

const FilterList = () => {
  const theme = useTheme() as ThemeType;
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{ min: string; max: string }>({ min: '', max: '' });

  const handleFilterChange = (filter: string, category?: string) => {
    const formattedFilter =
      category === '브랜드' ? `브랜드: ${filter}` : category === '색상' ? `색상: ${filter}` : filter;

    setSelectedFilters((prev) =>
      prev.includes(formattedFilter) ? prev.filter((item) => item !== formattedFilter) : [...prev, formattedFilter]
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
        { id: 13, name: 'Ninja' },
        { id: 14, name: 'CAROTE' },
        { id: 15, name: 'Umite Chef' },
        { id: 16, name: 'Kitchen Mama' },
        { id: 17, name: 'JoyJolt' },
        { id: 18, name: 'Zulay Kitchen' },
        { id: 19, name: 'Scotch-Brite' },
        { id: 20, name: 'BLACK+DECKER' },
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
        { id: 20, name: '브라운', colorChip: <IcColorchipBrown /> },
        { id: 21, name: '오렌지', colorChip: <IcColorchipOrange /> },
        { id: 22, name: '골드', colorChip: <IcColorchipGold /> },
        { id: 23, name: '옐로우', colorChip: <IcColorchipYellow /> },
        { id: 24, name: '카키', colorChip: <IcColorchipKhaki /> },
        { id: 25, name: '라이트그린', colorChip: <IcColorchipLightGreen /> },
        { id: 26, name: '그린', colorChip: <IcColorchipGreen /> },
        { id: 27, name: '스카이블루', colorChip: <IcColorchipSkyBlue /> },
        { id: 28, name: '블루', colorChip: <IcColorchipBlue /> },
        { id: 29, name: '네이비', colorChip: <IcColorchipNavy /> },
        { id: 30, name: '핑크', colorChip: <IcColorchipPink /> },
        { id: 31, name: '바이올렛', colorChip: <IcColorchipViolet /> },
        { id: 32, name: '퍼플', colorChip: <IcColorchipPurple /> },
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
        <FilterContainer
          data={filterData.filter((f) => f.name === '아마존 서비스')}
          onChange={handleFilterChange}
          selectedFilters={selectedFilters}
        />
      </div>

      <div css={sectionStyle}>
        <FilterContainer
          data={filterData.filter((f) => f.name === '카테고리')}
          onChange={handleFilterChange}
          selectedFilters={selectedFilters}
        />
      </div>

      <div css={sectionStyle}>
        <FilterContainer
          data={filterData.filter((f) => f.name === '브랜드')}
          onChange={(filter) => handleFilterChange(filter, '브랜드')}
          selectedFilters={selectedFilters}
        />
      </div>

      <div css={sectionStyle}>
        <PriceFilter priceRange={priceRange} onPriceChange={handlePriceChange} />
      </div>

      <div css={sectionStyle}>
        <FilterContainer
          data={filterData.filter((f) => f.name === '상태')}
          onChange={handleFilterChange}
          selectedFilters={selectedFilters}
        />
      </div>

      <div css={sectionStyle}>
        <FilterContainer
          data={filterData.filter((f) => f.name === '색상')}
          onChange={(filter) => handleFilterChange(filter, '색상')}
          selectedFilters={selectedFilters}
        />
      </div>
    </div>
  );
};

export default FilterList;