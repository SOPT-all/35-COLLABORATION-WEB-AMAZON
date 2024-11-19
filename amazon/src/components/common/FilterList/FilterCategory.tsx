/** FilterCategory.tsx */
import { css, useTheme } from "@emotion/react";
import { ThemeType } from "../../../styles/theme";

interface FilterCategoryProps {
  name: string;
  options: { id: number; name: string }[];
  selectedFilters: string[];
  onChange: (filter: string) => void;
}

const categoryStyle = (theme: ThemeType) => css`
  margin-bottom: 1rem;

  h3 {
    ${theme.font.title_b_16};
    color: ${theme.color.black};
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    label {
      ${theme.font.title_m_16}; /* 폰트를 title_m_16으로 변경 */
      color: ${theme.color.black};
      cursor: pointer;
    }

    input {
      cursor: pointer;
      accent-color: ${theme.color.blue}; /* 체크박스의 색상을 theme에 맞게 설정 */
    }
  }
`;

const FilterCategory: React.FC<FilterCategoryProps> = ({ name, options, selectedFilters, onChange }) => {
  const theme = useTheme() as ThemeType;

  return (
    <div css={categoryStyle(theme)}>
      <h3>{name}</h3>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            <input
              type="checkbox"
              id={`filter-${option.id}`}
              checked={selectedFilters.includes(option.name)}
              onChange={() => onChange(option.name)}
            />
            <label htmlFor={`filter-${option.id}`}>{option.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCategory
