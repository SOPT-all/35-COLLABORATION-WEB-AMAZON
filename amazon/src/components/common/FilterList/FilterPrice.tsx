import { IcVector129 } from '@svg';

import { filterPriceStyle, inputStyle } from './FilterPrice.style';

interface FilterPriceProps {
  priceRange: { min: string; max: string };
  onPriceChange: (min: string, max: string) => void;
}

const FilterPrice = ({ priceRange, onPriceChange }: FilterPriceProps): JSX.Element => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    if (name === 'min') {
      onPriceChange(value, priceRange.max);
    } else if (name === 'max') {
      onPriceChange(priceRange.min, value);
    }
  };

  return (
    <div css={filterPriceStyle.root}>
      <h3>가격</h3>
      <div css={filterPriceStyle.inputContainer}>
        <input
          type="number"
          name="min"
          value={priceRange.min}
          onChange={handleInputChange}
          placeholder="0"
          css={inputStyle}
        />
        <span>~</span>
        <input
          type="number"
          name="max"
          value={priceRange.max}
          onChange={handleInputChange}
          placeholder="99990"
          css={inputStyle}
        />
        <span>원</span>
      </div>
      <IcVector129 css={filterPriceStyle.priceVectorIcon} />
    </div>
  );
};

export default FilterPrice;
