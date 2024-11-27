import { useEffect, useState } from 'react';
import FilterCategory from './FilterCategory';
import { conditionContainerStyle } from './FilterCondition.style';
import { fetchFilters } from '@apis/fetchFilters';

interface FilterConditionProps {
  selectedFilters: string[];
  onChange: (filter: string) => void;
}

interface FilterOption {
  id: number;
  name: string;
}

const FilterCondition = ({ selectedFilters, onChange }: FilterConditionProps) => {
  const [options, setOptions] = useState<FilterOption[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadConditionData = async () => {
      try {
        setLoading(true);
        const data = await fetchFilters(); 
        const conditionData = data.find((filter: any) => filter.name === '상태'); 
        setOptions(conditionData?.optionList || []); 
        setError(null);
      } catch (err) {
        setError('필터 데이터를 가져오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadConditionData();
  }, []);

  if (loading) {
    return <div>Loading condition filters...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div css={conditionContainerStyle}>
      <FilterCategory
        name="상태"
        options={options}
        selectedFilters={selectedFilters}
        onChange={onChange}
      />
    </div>
  );
};

export default FilterCondition;
