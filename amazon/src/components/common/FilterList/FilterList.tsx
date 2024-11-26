import { useState, useEffect } from 'react';
import FilterContainer from './FIlterContainer';
import PriceFilter from './FilterPrice';
import SelectedFilters from './SelectedFilters';
import { fetchFilters } from '@apis/fetchFilters';
import { containerStyle, sectionStyle, titleStyle } from './FilterList.style';
import {
  IcColorchipBlack,
  IcColorchipRed,
  IcColorchipGray,
  IcColorchipSilver,
  IcColorchipWhite,
  IcColorchipBrown,
  IcColorchipGold,
  IcColorchipYellow,
  IcColorchipOrange,
  IcColorchipGreen,
  IcColorchipLightGreen,
  IcColorchipViolet,
  IcColorchipPink,
  IcColorchipKhaki,
  IcColorchipSkyBlue,
  IcColorchipBlue,
  IcColorchipNavy,
  IcColorchipPurple,
} from '@svg';

interface FilterOption {
  id: number;
  name: string;
  colorChip?: React.ReactNode;
}

interface FilterCategory {
  id: number;
  name: string;
  optionList: FilterOption[];
}

const FilterList = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{ min: string; max: string }>({ min: '', max: '' });
  const [filters, setFilters] = useState<FilterCategory[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadFilters = async () => {
      try {
        setLoading(true);
        const data = await fetchFilters();

        const colorChipMapping: Record<string, React.ReactNode> = {
          블랙: <IcColorchipBlack />,
          그레이: <IcColorchipGray />,
          실버: <IcColorchipSilver />,
          화이트: <IcColorchipWhite />,
          레드: <IcColorchipRed />,
          브라운: <IcColorchipBrown />,
          골드: <IcColorchipGold />,
          카키: <IcColorchipKhaki />,
          핑크: <IcColorchipPink />,
          스카이블루: <IcColorchipSkyBlue />,
          블루: <IcColorchipBlue />,
          퍼플: <IcColorchipPurple />,
          바이올렛: <IcColorchipViolet />,
          오렌지: <IcColorchipOrange />,
          네이비: <IcColorchipNavy />,
          그린: <IcColorchipGreen />,
          라이트그린: <IcColorchipLightGreen />,
          옐로우: <IcColorchipYellow />,
        };

        const transformedData: FilterCategory[] = data.map((filter: any) => ({
          id: filter.id,
          name: filter.name,
          optionList: filter.optionList.map((option: any) => ({
            id: option.id,
            name: option.name,
            colorChip: filter.name === '색상' ? colorChipMapping[option.name] || null : null,
          })),
        }));

        setFilters(transformedData);
        setError(null);
      } catch (err) {
        setError('필터 데이터를 가져오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadFilters();
  }, []);

  const sortedFilters = [...filters];
  const customOrder = ['아마존 서비스', '카테고리', '브랜드', '상태', '가격', '색상'];

  if (!sortedFilters.some((filter) => filter.name === '가격')) {
    sortedFilters.push({ id: -1, name: '가격', optionList: [] });
  }

  sortedFilters.sort((a, b) => customOrder.indexOf(a.name) - customOrder.indexOf(b.name));

  if (loading) {
    return <div>필터 데이터를 불러오는 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div css={containerStyle}>
      {selectedFilters.length > 0 && (
        <div css={sectionStyle}>
          <span css={titleStyle}>선택한 필터</span>
          <SelectedFilters
            selected={selectedFilters}
            onRemove={(filter) => setSelectedFilters((prev) => prev.filter((item) => item !== filter))}
          />
        </div>
      )}

      {sortedFilters.map((filterCategory) =>
        filterCategory.name === '가격' ? (
          // Render PriceFilter here for "가격"
          <div css={sectionStyle} key="price">
            <PriceFilter
              priceRange={priceRange}
              onPriceChange={(min, max) => {
                setPriceRange({ min, max });
                if (min.trim() && max.trim()) {
                  const priceFilter = `${min} ~ ${max}`;
                  setSelectedFilters((prev) =>
                    prev.some((item) => item.includes('~'))
                      ? prev.map((item) => (item.includes('~') ? priceFilter : item))
                      : [...prev, priceFilter]
                  );
                } else {
                  setSelectedFilters((prev) => prev.filter((item) => !item.includes('~')));
                }
              }}
            />
          </div>
        ) : (
          <div css={sectionStyle} key={filterCategory.id}>
            <FilterContainer
              data={filterCategory}
              selectedFilters={selectedFilters}
              onChange={(filter, category) => {
                const formattedFilter =
                  category === '브랜드' ? `브랜드: ${filter}` : category === '색상' ? `색상: ${filter}` : filter;

                setSelectedFilters((prev) =>
                  prev.includes(formattedFilter)
                    ? prev.filter((item) => item !== formattedFilter)
                    : [...prev, formattedFilter]
                );
              }}
            />
          </div>
        )
      )}
    </div>
  );
};

export default FilterList;
