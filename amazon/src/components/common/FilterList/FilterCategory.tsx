
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { ThemeType } from '../../../styles/theme';
import { categoryStyle } from './FilterCategory.style';
import FilterOption from './FilterOption';
import { IcChevronDown, IcChevronUp, IcVector129 } from '@svg';

interface FilterCategoryProps {
  name: string;
  options: { id: number; name: string; colorChip?: React.ReactNode }[];
  selectedFilters: string[];
  onChange: (filter: string, category?: string) => void;
}

const FilterCategory = ({ name, options, selectedFilters, onChange }: FilterCategoryProps) => {
  const theme = useTheme() as ThemeType;
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);

  const handleToggleViewAll = () => setIsViewAllOpen((prev) => !prev);

  
  const displayedOptions =
    name === '브랜드'
      ? isViewAllOpen
        ? options
        : options.slice(0, 7)
      : name === '색상'
      ? isViewAllOpen
        ? options
        : options.slice(0, 5)
      : options;

  return (
    <div css={categoryStyle(theme)}>
      <h3>{name}</h3>
      <ul>
        {displayedOptions.map((option) => (
          <li key={option.id} className={name === '카테고리' ? 'category-item' : ''}>
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

      {/* 카테고리 펼쳐보기 */}
      {(name === '브랜드' || name === '색상') && (
        <div className="view-all-banner" onClick={handleToggleViewAll}>
          <span>{isViewAllOpen ? `${name} 모두보기 닫기` : `${name} 모두보기`}</span>
          {isViewAllOpen ? <IcChevronUp className="up-icon" /> : <IcChevronDown className="down-icon" />}
        </div>
      )}

      {/* Vector icon */}
      <IcVector129 className={`category-vector-icon ${name === '색상' ? 'hide-vector' : ''}`} />
    </div>
  );
};

export default FilterCategory;
