import FilterCategory from './FilterCategory';

interface FilterListProps {
  data: { id: number; name: string; optionList: { id: number; name: string; colorChip?: React.ReactNode }[] }[];
  selectedFilters: string[];
  onChange: (filter: string) => void;
}

const FilterList: React.FC<FilterListProps> = ({ data, selectedFilters, onChange }) => {
  return (
    <div>
      {data.map((category) => (
        <FilterCategory
          key={category.id}
          name={category.name}
          options={category.optionList}
          selectedFilters={selectedFilters}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default FilterList;
