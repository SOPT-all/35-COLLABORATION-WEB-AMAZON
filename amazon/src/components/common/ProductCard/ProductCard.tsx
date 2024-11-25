import { useState } from 'react';

import { IcCart, IcChevronRight, IcStar, IcVector120, IcFreedelivery, IcCartHover, IcCartAdd } from '@svg';
import formatDeliveryDate from '@utils';

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

  const [cartButton, setCartButton] = useState<'default' | 'hover' | 'clicked'>('default');
  const [toastVisible, setToastVisible] = useState(false);
  const [toastCheckCardStatus, setToastCheckCardStatus] = useState<'success' | 'error'>('success');

  const handleCartClick = () => {
    setCartButton('clicked');
    alert('장바구니에 추가됨');
  };

  const renderCartButton = () => {
    if (cartButton === 'hover') {
      return <IcCartHover css={cartIcon} />;
    }
    if (cartButton === 'clicked') {
      return <IcCartAdd css={cartIcon} />;
    }
    return <IcCart css={cartIcon} />;
  };

  return (
    <div css={cardContainer}>
      <div css={imageBox}>
        {isBestSeller && <div css={bestSellerIcon}>최다 판매</div>}
        <img src={image} alt="productImg" />
      </div>
      <div css={productBox}>
        <div css={productHeader}>
          <h1>
            {brand}
            <IcChevronRight css={rightArrowIcon} />
          </h1>
          <div
            onClick={handleCartClick}
            onMouseEnter={() => setCartButton('hover')}
            onMouseLeave={() => setCartButton('default')}
            role="button"
            aria-label="Add to Cart">
            {renderCartButton()}
          </div>
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
            <span>원</span>
          </div>
        ) : (
          <>
            <div css={countDiscountText}>
              <span>쿠폰할인</span>
              <del>{price.toLocaleString()}</del>
            </div>
            <div css={discountRateText}>
              <span> {`${discountRate}%`}</span>
              <span>{discountedPrice.toLocaleString()}</span>
              <span>원</span>
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
