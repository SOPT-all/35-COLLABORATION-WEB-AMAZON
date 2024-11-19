interface FilterOptionProps {
    name: string;
    onChange: (filter: string) => void;
  }
  
  const FilterOption: React.FC<FilterOptionProps> = ({ name, onChange }) => {
    return (
      <li>
        <label>
          <input type="checkbox" onChange={() => onChange(name)} />
          {name}
        </label>
      </li>
    );
  };
  
  export default FilterOption
  