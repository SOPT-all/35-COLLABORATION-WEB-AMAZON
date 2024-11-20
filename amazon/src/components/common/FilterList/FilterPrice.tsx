import { css, useTheme } from '@emotion/react';
import { ThemeType } from '../../../styles/theme';

interface FilterPriceProps {
  priceRange: { min: string; max: string }; // 최소값과 최대값을 담는 객체
  onPriceChange: (min: string, max: string) => void; // 가격 변경 시 호출되는 콜백
}

const inputStyle = (theme: ThemeType) => css`
  -moz-appearance: textfield; /* Firefox에서 숫자 스피너 제거 */
  -webkit-appearance: none; /* Chrome, Safari에서 숫자 스피너 제거 */
  appearance: none; /* 다른 브라우저의 기본 스타일 제거 */

  
  width: 75px;
  height: 32px;
  border: 1px solid ${theme.color.gray3};
  border-radius: 4px;
  background: ${theme.color.white1};
  display: flex;
  padding: 4px 16px 4px 8px;
  align-items: center;

  input {
    width: 51px;
    height: 24px;
  }

   &::placeholder {
      ${theme.font.title_r_16}
      color: ${theme.color.gray3}; 
      opacity: 1; 
    }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none; /* 스피너 버튼 제거 */
    margin: 0; /* 추가적인 여백 제거 */
  }
`;

const filterPriceStyle = (theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3 {
    ${theme.font.title_b_16}
  }

 

  .input-container {
    ${theme.font.title_m_16}
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    
  }
`;

const FilterPrice: React.FC<FilterPriceProps> = ({ priceRange, onPriceChange }) => {
  const theme = useTheme() as ThemeType; // useTheme 훅으로 theme 가져오기

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'min') {
      onPriceChange(value, priceRange.max);
    } else if (name === 'max') {
      onPriceChange(priceRange.min, value);
    }
  };

  return (
    <div css={filterPriceStyle(theme)}>
      <h3>가격</h3>
      <div className="input-container">
        <input
          type="number"
          name="min"
          value={priceRange.min}
          onChange={handleInputChange}
          placeholder="0"
          css={inputStyle(theme)}
        />
        <span>~</span>
        <input
          type="number"
          name="max"
          value={priceRange.max}
          onChange={handleInputChange}
          placeholder = "99990"
          css={inputStyle(theme)}
        />
        <span>원</span>
      </div>
    </div>
  );
};

export default FilterPrice;
