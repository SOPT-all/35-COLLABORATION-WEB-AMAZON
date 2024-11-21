import { IcCheckBoxUnfilled, IcCheckBoxFilled } from '@svg';
import { containerStyle, iconStyle, labelStyle, colorChipStyle } from './FilterOption.style';

interface FilterOptionProps {
  name: string;
  onChange: (filter: string) => void;
  isChecked: boolean;
  colorChip?: React.ReactNode;
}

const FilterOption: React.FC<FilterOptionProps> = ({ name, onChange, isChecked, colorChip }) => {
  return (
    <div css={containerStyle}>
      <div css={iconStyle} onClick={() => onChange(name)}>
        {isChecked ? <IcCheckBoxFilled /> : <IcCheckBoxUnfilled />}
      </div>
      {colorChip && <div css={colorChipStyle}>{colorChip}</div>}
      <label css={labelStyle} onClick={() => onChange(name)}>
        {name}
      </label>
    </div>
  );
};

export default FilterOption;
