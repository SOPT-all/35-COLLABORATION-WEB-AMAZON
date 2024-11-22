import { IcRemove } from '@svg';

import { selectedFiltersStyle, filterTagStyle } from './SelectedFilter.style';

interface SelectedFiltersProps {
  selected: string[];
  onRemove: (filter: string) => void;
}

const SelectedFilters = ({ selected, onRemove }: SelectedFiltersProps): JSX.Element => {
  const getFormattedFilter = (filter: string): string => {
    if (filter.startsWith('브랜드: ')) {
      return filter.replace('브랜드: ', '브랜드: ');
    }
    if (filter.startsWith('색상: ')) {
      return filter.replace('색상: ', '색상: ');
    }
    return filter;
  };

  return (
    <div css={selectedFiltersStyle}>
      {selected.map((filter) => (
        <div key={filter} css={filterTagStyle}>
          <span>{getFormattedFilter(filter)}</span>
          <IcRemove onClick={() => onRemove(filter)} />
        </div>
      ))}
    </div>
  );
};

export default SelectedFilters;
