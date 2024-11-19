import FilterCategory from "./FilterCategory";

const FilterColor = ({ selectedFilters, onChange }: any) => {
  const colorData = [
    { id: 1, name: "블랙" },
    { id: 2, name: "그레이" },
    { id: 3, name: "실버" },
    { id: 4, name: "화이트" },
    { id: 5, name: "레드" },
  ];

  return (
    <FilterCategory
      name="색상"
      options={colorData}
      selectedFilters={selectedFilters}
      onChange={onChange}
    />
  );
};

export default FilterColor
