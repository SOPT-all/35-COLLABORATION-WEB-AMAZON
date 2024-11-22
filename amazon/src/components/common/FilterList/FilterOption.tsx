import { IcCheckBoxUnfilled, IcCheckBoxFilled } from '@svg';

import { containerStyle, iconStyle, labelStyle, colorChipStyle } from './FilterOption.style';

interface FilterOptionProps {
  name: string;
  onChange: (filter: string) => void;
  isChecked: boolean;
  colorChip?: React.ReactNode;
}

const FilterOption = ({ name, onChange, isChecked, colorChip }: FilterOptionProps): JSX.Element => {
  const handleOptionChange = (): void => {
    onChange(name);
  };

  return (
    <div css={containerStyle}>
      <div css={iconStyle} onClick={handleOptionChange} role="button" tabIndex={0} onKeyPress={handleOptionChange}>
        {isChecked ? <IcCheckBoxFilled /> : <IcCheckBoxUnfilled />}
      </div>
      {colorChip && <div css={colorChipStyle}>{colorChip}</div>}
      <label css={labelStyle} onClick={handleOptionChange}>
        {name}
      </label>
    </div>
  );
};

export default FilterOption;
