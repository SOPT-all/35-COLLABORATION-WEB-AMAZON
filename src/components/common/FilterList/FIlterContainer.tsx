import FilterCategory from './FilterCategory';

interface FilterContainerProps {
  data: {
    id: number;
    name: string;
    optionList: {
      id: number;
      name: string;
      colorChip?: React.ReactNode;
    }[];
  };
  onChange: (filter: string, category?: string) => void;
  selectedFilters: string[];
}

const FilterContainer = ({ data, selectedFilters, onChange }: FilterContainerProps) => {
  return (
    <FilterCategory
      name={data.name}
      options={data.optionList}
      selectedFilters={selectedFilters}
      onChange={onChange}
    />
  );
};

export default FilterContainer;
