import { IcCheckBoxUnfilled, IcCheckBoxFilled } from '@svg';
import { css } from '@emotion/react';

interface FilterOptionProps {
  name: string;
  onChange: (filter: string) => void;
  isChecked: boolean; // 체크 여부를 전달받음
}

// 스타일 정의
const containerStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const iconStyle = css`
  cursor: pointer;
  display: flex;

  padding: 4px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const labelStyle = css`
  margin-bottom: 8px;
  cursor: pointer;
`;

const FilterOption: React.FC<FilterOptionProps> = ({ name, onChange, isChecked }) => {
  return (
    <div css={containerStyle}>
      <div css={iconStyle} onClick={() => onChange(name)}>
        {isChecked ? <IcCheckBoxFilled /> : <IcCheckBoxUnfilled />}
      </div>
      <label css={labelStyle} onClick={() => onChange(name)}>
        {name}
      </label>
    </div>
  );
};

export default FilterOption;
