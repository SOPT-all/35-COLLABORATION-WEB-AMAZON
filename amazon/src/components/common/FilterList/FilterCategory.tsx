import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { ThemeType } from '../../../styles/theme';
import {
  categoryStyle,
  viewAllBannerStyle,
  vectorIconStyle,
  categoryItemStyle,
  iconStyle,
} from './FilterCategory.style';
import FilterOption from './FilterOption';
import { IcChevronDown, IcChevronUp, IcVector129 } from '@svg';

interface FilterCategoryProps {
  name: string;
  options: { id: number; name: string; colorChip?: React.ReactNode }[];
  selectedFilters: string[];
  onChange: (filter: string, category?: string) => void;
}

const getDisplayedOptions = (name: string, options: any[], isViewAllOpen: boolean) => {
  if (name === '브랜드') {
    return isViewAllOpen ? options : options.slice(0, 7);
  }
  if (name === '색상') {
    return isViewAllOpen ? options : options.slice(0, 5);
  }
  return options;
};

const FilterCategory = ({ name, options, selectedFilters, onChange }: FilterCategoryProps) => {
  const theme = useTheme() as ThemeType;
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);

  const handleToggleViewAll = () => setIsViewAllOpen((prev) => !prev);

  const displayedOptions = getDisplayedOptions(name, options, isViewAllOpen);

  return (
    <div css={categoryStyle(theme)}>
      <h3>{name}</h3>
      <ul>
        {displayedOptions.map((option) => (
          <li key={option.id} css={name === '카테고리' ? categoryItemStyle : undefined}>
            {name === '카테고리' ? (
              <>
                <label>{option.name}</label>
                <IcChevronDown css={iconStyle} />
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

      {(name === '카테고리' || name === '브랜드' || name === '색상') && (
        <div css={viewAllBannerStyle(theme)} onClick={handleToggleViewAll}>
          <span>{isViewAllOpen ? `${name} 모두보기 닫기` : `${name} 모두보기`}</span>
          {isViewAllOpen ? <IcChevronUp css={iconStyle} /> : <IcChevronDown css={iconStyle} />}
        </div>
      )}

      <IcVector129 css={[vectorIconStyle, name === '색상' && { display: 'none' }]} />
    </div>
  );
};

export default FilterCategory;
