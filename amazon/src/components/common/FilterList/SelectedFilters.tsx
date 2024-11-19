import { css, useTheme } from "@emotion/react";
import { ThemeType } from "../../../styles/theme";

interface SelectedFiltersProps {
  selected: string[];
  onRemove: (filter: string) => void;
}

const selectedFiltersStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 1rem;
`;

const filterTagStyle = (theme: ThemeType) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 27px;
  padding: 4px 8px;
  border-radius: 999px;
  background-color: ${theme.color.gray4};
  cursor: pointer;
  width: fit-content;

  span {
    ${theme.font.title_m_16};
    color: ${theme.color.black};
    margin-right: 4px;
  }

  svg {
    margin-left: 4px;
    cursor: pointer;
  }
`;

const SelectedFilters: React.FC<SelectedFiltersProps> = ({ selected, onRemove }) => {
  const theme = useTheme() as ThemeType;

  return (
    <div css={selectedFiltersStyle}>
      {selected.map((filter) => (
        <div key={filter} css={filterTagStyle(theme)}>
          <span>{filter}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            onClick={() => onRemove(filter)}
          >
            <path
              d="M9 1L1 9M1 1L9 9"
              stroke="#565959"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default SelectedFilters
