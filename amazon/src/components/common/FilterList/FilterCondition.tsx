import { conditionContainerStyle } from './FilterCondition.style';
import FilterCategory from './FilterCategory';
import { mockConditionData } from 'src/constants/mocks/filterCondition';

interface FilterConditionProps {
  selectedFilters: string[];
  onChange: (filter: string) => void;
}

const FilterCondition = ({ selectedFilters, onChange }: FilterConditionProps) => {
  return (
    <div css={conditionContainerStyle}>
      <FilterCategory
        name="상태"
        options={mockConditionData} // Mock 데이터 사용
        selectedFilters={selectedFilters}
        onChange={onChange}
      />
    </div>
  );
};

export default FilterCondition;
