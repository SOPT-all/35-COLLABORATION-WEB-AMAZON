import FilterCategory from "./FilterCategory";
import { css, useTheme } from "@emotion/react";
import { ThemeType } from "../../../styles/theme";

interface FilterListProps {
  data: { id: number; name: string; optionList: { id: number; name: string }[] }[];
  selectedFilters: string[];
  onChange: (filter: string) => void;
}

const filterListStyle = (theme: ThemeType) => css`
  ${theme.font.title_m_16}; /* 텍스트 스타일 */
  color: ${theme.color.black}; /* 텍스트 색상 */
`;

const FilterList: React.FC<FilterListProps> = ({ data, selectedFilters, onChange }) => {
  const theme = useTheme() as ThemeType; // useTheme를 통해 theme 가져오기

  return (
    <div css={filterListStyle(theme)}>
      {data.map((category) => (
        <FilterCategory
          key={category.id}
          name={category.name}
          options={category.optionList}
          selectedFilters={selectedFilters}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default FilterList
