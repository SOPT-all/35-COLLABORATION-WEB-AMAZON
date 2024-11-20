import { IcCheckBoxUnfilled, IcCheckBoxFilled } from '@svg';
import { containerStyle, iconStyle, labelStyle } from './FilterOption.style';


interface FilterOptionProps {
  name: string;
  onChange: (filter: string) => void;
  isChecked: boolean; // 체크 여부를 전달받음
}

const FilterOption: React.FC<FilterOptionProps> = ({ name, onChange, isChecked }) => {
  return (
    <div css={containerStyle}>
      <div css={iconStyle} onClick={() => onChange(name)}>
        {isChecked ? <IcCheckBoxFilled /> : <IcCheckBoxUnfilled />}
      </div>
      <label css={labelStyle}>
        {name}
      </label>
    </div>

  );
};


export default FilterOption;
