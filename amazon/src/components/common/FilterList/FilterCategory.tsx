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
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);

  const handleToggleViewAll = () => setIsViewAllOpen((prev) => !prev);

  return (
    <div css={categoryStyle(theme)}>
      <h3>{name}</h3>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
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
          </li>
        ))}
      </ul>

      {(name === '카테고리' || name === '브랜드' || name === '색상') && (
        <div className="view-all-banner" onClick={handleToggleViewAll}>
          <span>{isViewAllOpen ? `${name} 모두보기 닫기` : `${name} 모두보기`}</span>
          {isViewAllOpen ? <IcChevronUp className="up-icon" /> : <IcChevronDown className="down-icon" />}
        </div>
      )}

      <IcVector className={`category-vector-icon ${name === '색상' ? 'hide-vector' : ''}`} />
    </div>
  );
};

export default FilterCategory;
