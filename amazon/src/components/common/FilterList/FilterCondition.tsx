/** FilterCondition.tsx */

import { css } from '@emotion/react';
import FilterCategory from './FilterCategory';

const conditionStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 236px;
  
`;

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
