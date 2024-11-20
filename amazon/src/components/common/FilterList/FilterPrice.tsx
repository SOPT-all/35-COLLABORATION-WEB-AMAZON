import { useTheme } from '@emotion/react';
import { ThemeType } from '../../../styles/theme';
import { IcVector } from '@svg';
import { filterPriceStyle, inputStyle } from './FilterPrice.style';

interface FilterPriceProps {
  priceRange: { min: string; max: string }; // 최소값과 최대값을 담는 객체
  onPriceChange: (min: string, max: string) => void; // 가격 변경 시 호출되는 콜백
}

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
          placeholder="99990"
          css={inputStyle(theme)}
        />
        <span>원</span>
      </div>
      <IcVector className="price-vector-icon" />
    </div>
  );
};

export default FilterPrice;
