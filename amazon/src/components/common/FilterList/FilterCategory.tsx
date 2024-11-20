import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { ThemeType } from '../../../styles/theme';
import { categoryStyle } from './FilterCategory.style';
import FilterOption from './FilterOption';
import { IcChevronDown, IcChevronUp, IcVector } from '@svg';

interface FilterCategoryProps {
  name: string;
  options: { id: number; name: string }[];
  selectedFilters: string[];
  onChange: (filter: string) => void;
  onViewAllCategories?: () => void;
}

const FilterCategory: React.FC<FilterCategoryProps> = ({
  name,
  options,
  selectedFilters,
  onChange,
  onViewAllCategories,
}) => {
  const theme = useTheme() as ThemeType;

  const [isViewAllOpen, setIsViewAllOpen] = useState(false);

  const handleToggleViewAll = () => {
    setIsViewAllOpen((prev) => !prev);
    if (onViewAllCategories) {
      onViewAllCategories();
    }
  };

  return (
    <div css={categoryStyle(theme)}>
      <h3>{name}</h3>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            {name === '카테고리' ? (
              <>
                <label
                  css={{
                    marginBottom: '8px',
                  }}>
                  {option.name}
                </label>
                <IcChevronDown className="down-icon" />
              </>
            ) : (
              <FilterOption name={option.name} isChecked={selectedFilters.includes(option.name)} onChange={onChange} />
            )}
          </li>
        ))}
      </ul>

      {name === '카테고리' && (
        <div className="view-all-banner" onClick={handleToggleViewAll}>
          <span>{isViewAllOpen ? '카테고리 모두보기 닫기' : '카테고리 모두보기'}</span>
          {isViewAllOpen ? <IcChevronUp className="up-icon" /> : <IcChevronDown className="down-icon" />}
        </div>
      )}

      {name === '브랜드' && (
        <div className="view-all-banner" onClick={handleToggleViewAll}>
          <span>{isViewAllOpen ? '브랜드 카테고리 닫기' : '브랜드 모두보기'}</span>
          {isViewAllOpen ? <IcChevronUp className="up-icon" /> : <IcChevronDown className="down-icon" />}
        </div>
      )}

      {name === '색상' && (
        <div className="view-all-banner" onClick={handleToggleViewAll}>
          <span>{isViewAllOpen ? '색상 모두보기 닫기' : '색상 모두보기'}</span>
          {isViewAllOpen ? <IcChevronUp className="up-icon" /> : <IcChevronDown className="down-icon" />}
        </div>
      )}

      <IcVector className={`category-vector-icon ${name === '색상' ? 'hide-vector' : ''}`} />
    </div>
  );
};

export default FilterCategory;
