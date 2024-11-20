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
