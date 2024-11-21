import { useTheme } from '@emotion/react';
import { ThemeType } from '../../../styles/theme';
import { IcRemove } from '@svg';
import { selectedFiltersStyle, filterTagStyle } from './SelectedFilter.style';

interface SelectedFiltersProps {
  selected: string[]; // 선택된 필터 배열
  onRemove: (filter: string) => void; // 필터 삭제 핸들러
}

const SelectedFilters: React.FC<SelectedFiltersProps> = ({ selected, onRemove }) => {
  const theme = useTheme() as ThemeType;

  const getFormattedFilter = (filter: string) => {
    if (filter.startsWith("브랜드: ")) {
      return filter.replace("브랜드: ", "브랜드: ");
    }
    if (filter.startsWith("색상: ")) {
      return filter.replace("색상: ", "색상: ");
    }
    return filter; 
  };

  return (
    <div css={selectedFiltersStyle}>
      {selected.map((filter) => (
        <div key={filter} css={filterTagStyle(theme)}>
          <span>{getFormattedFilter(filter)}</span>
          <IcRemove onClick={() => onRemove(filter)} />
        </div>
      ))}
    </div>
  );
};


export default SelectedFilters;
