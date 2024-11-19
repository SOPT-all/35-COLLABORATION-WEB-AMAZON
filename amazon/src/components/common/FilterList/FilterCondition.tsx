import FilterCategory from "./FilterCategory";

const FilterCondition = ({ selectedFilters, onChange }: any) => {
  const conditionData = [
    { id: 1, name: "신제품" },
    { id: 2, name: "중고품" },
  ];

  return (
    <FilterCategory
      name="상태"
      options={conditionData}
      selectedFilters={selectedFilters}
      onChange={onChange}
    />
  );
};

export default FilterCondition
