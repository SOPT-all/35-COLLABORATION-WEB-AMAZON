import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { ThemeType } from '../../../styles/theme';
import { categoryStyle } from './FilterCategory.style';
import FilterOption from './FilterOption';
import { IcChevronDown, IcChevronUp, IcVector } from '@svg';

interface FilterCategoryProps {
  name: string;
  options: { id: number; name: string; colorChip?: React.ReactNode }[];
  selectedFilters: string[];
  onChange: (filter: string, category?: string) => void;
}

const FilterCategory: React.FC<FilterCategoryProps> = ({ name, options, selectedFilters, onChange }) => {
  const theme = useTheme() as ThemeType;
  const [isViewAllOpen, setIsViewAllOpen] = useState(false); // 모두보기 상태 관리

  const handleToggleViewAll = () => setIsViewAllOpen((prev) => !prev); // 모두보기 상태 토글

  const displayedOptions =
  name === '브랜드'
    ? (isViewAllOpen ? options : options.slice(0, 7)) // 브랜드는 기본적으로 7개 표시
    : name === '색상'
    ? (isViewAllOpen ? options : options.slice(0, 5)) // 색상은 기본적으로 5개 표시
    : options; 
    
  return (
    <div css={categoryStyle(theme)}>
      <h3>{name}</h3>
      <ul>
        {displayedOptions.map((option) => (
          <li
            key={option.id}
            className={name === '카테고리' ? 'category-item' : ''} // 특정 클래스 추가
          >
            {name === '카테고리' ? (
              <>
                <label>{option.name}</label>
                <IcChevronDown className="down-icon" />
              </>
            ) : (
              <FilterOption
                name={option.name}
                isChecked={selectedFilters.includes(
                  name === '브랜드'
                    ? `브랜드: ${option.name}`
                    : name === '색상'
                    ? `색상: ${option.name}`
                    : option.name
                )}
                onChange={(filter) => onChange(filter, name)}
                colorChip={option.colorChip}
              />
            )}
          </li>
        ))}
      </ul>

      {/* 모두보기 버튼 추가 */}
      {(name === '카테고리' || name === '브랜드' || name === '색상') && (
        <div className="view-all-banner" onClick={handleToggleViewAll}>
          <span>{isViewAllOpen ? `${name} 모두보기 닫기` : `${name} 모두보기`}</span>
          {isViewAllOpen ? <IcChevronUp className="up-icon" /> : <IcChevronDown className="down-icon" />}
        </div>
      )}

      {/* 벡터 아이콘 */}
      <IcVector className={`category-vector-icon ${name === '색상' ? 'hide-vector' : ''}`} />
    </div>
  );
};

export default FilterCategory;
