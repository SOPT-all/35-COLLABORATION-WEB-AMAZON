import { conditionStyle } from './FilterCondition.style';
import FilterCategory from './FilterCategory';

interface FilterConditionProps {
  selectedFilters: string[];
  onChange: (filter: string) => void;
}

const FilterCondition: React.FC<FilterConditionProps> = ({ selectedFilters, onChange }) => {
  const conditionData = [
    { id: 1, name: '신제품' },
    { id: 2, name: '중고품' },
  ];

  return (
    <div css={conditionStyle}>
      <FilterCategory
        name="상태"
        options={conditionData}
        selectedFilters={selectedFilters}
        onChange={onChange}
      />
    </div>
  );
};

export default FilterCondition;
