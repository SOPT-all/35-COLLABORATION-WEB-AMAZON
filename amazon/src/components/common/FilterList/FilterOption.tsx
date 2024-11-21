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
      {/* 체크박스 */}
      <div css={iconStyle} onClick={() => onChange(name)}>
        {isChecked ? <IcCheckBoxFilled /> : <IcCheckBoxUnfilled />}
      </div>

      {/* 컬러칩 */}
      {colorChip && <div css={colorChipStyle}>{colorChip}</div>}

      {/* 텍스트 라벨 */}
      <label css={labelStyle} onClick={() => onChange(name)}>
        {name}
      </label>
    </div>
  );
};

export default FilterOption;