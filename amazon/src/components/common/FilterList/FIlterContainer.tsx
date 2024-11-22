import FilterCategory from './FilterCategory';

interface FilterContainerProps {
  data: { id: number; name: string; optionList: { id: number; name: string; colorChip?: React.ReactNode }[] }[];
  selectedFilters: string[];
  onChange: (filter: string) => void;
}

const FilterContainer = ({ data, selectedFilters, onChange }: FilterContainerProps) => {
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
