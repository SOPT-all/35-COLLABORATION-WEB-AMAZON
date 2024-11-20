import { css, useTheme } from '@emotion/react';
import { useState } from 'react';
import { ThemeType } from '../../../styles/theme';
import FilterOption from './FilterOption';
import { IcChevronDown, IcChevronUp, IcVector } from '@svg';

interface FilterCategoryProps {
  name: string;
  options: { id: number; name: string }[];
  selectedFilters: string[];
  onChange: (filter: string) => void;
  onViewAllCategories?: () => void; // "모두 보기" 클릭 시 호출될 핸들러
}

const categoryStyle = (theme: ThemeType) => css`
  h3 {
    ${theme.font.title_b_16};
    color: ${theme.color.black};
    margin-bottom: 8px;
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    display: flex;
    align-items: center;
    width: 236px;

    label {
      ${theme.font.title_m_16};
      color: ${theme.color.black};
      cursor: pointer;
      width: 188px;
      flex-grow: 1;
      text-align: left;
    }
  }

  .down-icon,
  .up-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .view-all-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin-top: 8px;
    background-color: ${theme.color.white1};
    cursor: pointer;

    span {
      ${theme.font.title_m_16};
      color: ${theme.color.gray2};
    }
  }

  .category-vector-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 24px;
    margin-bottom: 24px;
  }

    .hide-vector {
    display: none;
  }
    
`;

const FilterCategory: React.FC<FilterCategoryProps> = ({
  name,
  options,
  selectedFilters,
  onChange,
  onViewAllCategories,
}) => {
  const theme = useTheme() as ThemeType;

  // 상태 관리: "모두 보기" 배너가 열려 있는지 여부
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);

  const handleToggleViewAll = () => {
    setIsViewAllOpen((prev) => !prev);
    if (onViewAllCategories) {
      onViewAllCategories(); // 필요한 경우 외부 핸들러 호출
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
                  css={css`
                    margin-bottom: 8px;
                  `}>
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

      {/* "카테고리 모두 보기" 배너 */}
      {name === '카테고리' && (
        <div className="view-all-banner" onClick={handleToggleViewAll}>
          <span>{isViewAllOpen ? '카테고리 모두보기 닫기' : '카테고리 모두보기'}</span>
          {isViewAllOpen ? <IcChevronUp className="up-icon" /> : <IcChevronDown className="down-icon" />}
        </div>
      )}

      {/* "브랜드 모두 보기" 배너 */}
      {name === '브랜드' && (
        <div className="view-all-banner" onClick={handleToggleViewAll}>
          <span>{isViewAllOpen ? '브랜드 카테고리 닫기' : '브랜드 모두보기'}</span>
          {isViewAllOpen ? <IcChevronUp className="up-icon" /> : <IcChevronDown className="down-icon" />}
        </div>
      )}

      {/* "색상 모두 보기" 배너 */}
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
