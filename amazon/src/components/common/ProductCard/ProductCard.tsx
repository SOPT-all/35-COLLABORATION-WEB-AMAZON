import { IcCart, IcChevronRight, IcStar, IcVector120, IcFreedelivery, IcBestseller } from '@svg';

import {
  bestSellerIcon,
  cardContainer,
  cartIcon,
  countDiscountText,
  discountRateText,
  freeDeliveryConditionText,
  freeDeliveryIcon,
  imageBox,
  noDiscountRatePrice,
  productBox,
  productHeader,
  ratingBox,
  ratingStarIcon,
  rightArrowIcon,
  vectorIcon,
} from './ProductCard.style';
import formatDeliveryDate from '../../../utils/formatDeliveryDate';

interface ProductDataProps {
  product: {
    image: string;
    brand: string;
    name: string;
    isBestSeller: boolean;
    rating: number;
    reviewCount: number;
    discountRate: number;
    price: number;
    discountedPrice: number;
    isFreeDelivery: boolean;
    deliveryDate: string;
    freeDeliveryStandard: number;
  };
}

const ProductCard = ({ product }: ProductDataProps) => {
  const {
    image,
    brand,
    name,
    isBestSeller,
    rating,
    reviewCount,
    discountRate,
    price,
    discountedPrice,
    isFreeDelivery,
    deliveryDate,
    freeDeliveryStandard,
  } = product;

  return (
    <div css={cardContainer}>
      <div css={imageBox}>
        {isBestSeller && <IcBestseller css={bestSellerIcon} />}
        <img src={image} alt="productImg" />
      </div>
      <div css={productBox}>
        <div css={productHeader}>
          <h1>
            {brand}
            <IcChevronRight css={rightArrowIcon} />
          </h1>
          <IcCart css={cartIcon} />
        </div>
        <h2>{name}</h2>
        <div css={ratingBox}>
          <IcStar css={ratingStarIcon} />
          {rating}
          <IcVector120 css={vectorIcon} />
          {reviewCount.toLocaleString()}
        </div>
        {discountRate === 0 ? (
          <div css={noDiscountRatePrice}>
            {price.toLocaleString()}
            <div>원</div>
          </div>
        ) : (
          <>
            <div css={countDiscountText}>
              <span>쿠폰할인</span>
              <del>{price.toLocaleString()}</del>
            </div>
            <div css={discountRateText}>
              <div> {`${discountRate}%`}</div>
              <div>{discountedPrice.toLocaleString()}</div>
              <div>원</div>
            </div>
          </>
        )}
        {isFreeDelivery && <IcFreedelivery css={freeDeliveryIcon} />}
        <h4>{formatDeliveryDate(deliveryDate)} 도착</h4>
        {freeDeliveryStandard === 0 ? (
          ''
        ) : (
          <p css={freeDeliveryConditionText}>{`${discountRate}만원 이상 구매 시 무료배송`}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
