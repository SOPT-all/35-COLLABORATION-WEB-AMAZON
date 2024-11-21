
import { useTheme } from '@emotion/react';
import { ThemeType } from '../../../styles/theme';
import { IcVector129 } from '@svg';
import { filterPriceStyle, inputStyle } from './FilterPrice.style';

interface FilterPriceProps {
  priceRange: { min: string; max: string };
  onPriceChange: (min: string, max: string) => void; 
}

const FilterPrice = ({ priceRange, onPriceChange }: FilterPriceProps) => {
  const theme = useTheme() as ThemeType; 

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
      <IcVector129 className="price-vector-icon" />
    </div>
  );
};

export default FilterPrice;
