import { css, useTheme } from '@emotion/react';
import { ThemeType } from '../../../styles/theme';
import { IcRemove } from '@svg';


interface SelectedFiltersProps {
  selected: string[]; // 선택된 필터 배열
  onRemove: (filter: string) => void; // 필터 삭제 핸들러
}

const selectedFiltersStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
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
    ${theme.font.body_r_14};
    color: ${theme.color.black};
    text-align: center;
  }

  svg {

  pointer-events: auto; 
}

`;

const SelectedFilters: React.FC<SelectedFiltersProps> = ({ selected, onRemove }) => {
  const theme = useTheme() as ThemeType;

  return (
    <div css={selectedFiltersStyle}>
      {selected.map((filter) => (
        <div key={filter} css={filterTagStyle(theme)}>
          <span>{filter}</span>
          {/* onClick 이벤트 추가 */}
          <IcRemove onClick={() => onRemove(filter)} />
        </div>
      ))}
    </div>
  );
};

export default SelectedFilters;
