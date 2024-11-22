import FilterCategory from './FilterCategory';

interface FilterListProps {
  data: { id: number; name: string; optionList: { id: number; name: string; colorChip?: React.ReactNode }[] }[];
  selectedFilters: string[];
  onChange: (filter: string) => void;
}

const FilterContainer = ({ data, selectedFilters, onChange }: FilterListProps) => {
  return (
    <>
      {data.map(({ id, name, optionList }) => (
        <FilterCategory
          key={id}
          name={name}
          options={optionList}
          selectedFilters={selectedFilters}
          onChange={onChange}
        />
      ))}
    </>
  );
};

export default FilterContainer;
