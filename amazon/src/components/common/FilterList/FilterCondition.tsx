import { mockConditionData } from 'src/constants/mocks/filterCondition';

import FilterCategory from './FilterCategory';
import { conditionContainerStyle } from './FilterCondition.style';

interface FilterConditionProps {
  selectedFilters: string[];
  onChange: (filter: string) => void;
}

const FilterCondition = ({ selectedFilters, onChange }: FilterConditionProps) => {
  return (
    <div css={conditionContainerStyle}>
      <FilterCategory
        name="상태"
        options={mockConditionData} 
        selectedFilters={selectedFilters}
        onChange={onChange}
      />
    </div>
  );
};

export default FilterCondition;
