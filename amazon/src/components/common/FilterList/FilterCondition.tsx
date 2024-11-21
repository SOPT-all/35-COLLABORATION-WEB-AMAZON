
import { conditionStyle } from './FilterCondition.style';
import FilterCategory from './FilterCategory';
import { mockConditionData } from 'src/constants/mocks/filterCondition';

interface FilterConditionProps {
  selectedFilters: string[];
  onChange: (filter: string) => void;
}

const FilterCondition = ({ selectedFilters, onChange }: FilterConditionProps) => {
  return (
    <div css={conditionStyle}>
      <FilterCategory
        name="상태"
        options={mockConditionData} // Mock data for 상태 (Condition)
        selectedFilters={selectedFilters}
        onChange={onChange}
      />
    </div>
  );
};

export default FilterCondition;

