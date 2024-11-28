import { useState } from 'react';

import { deleteCartCount } from '@apis/shoppingCart/deleteCartCount';
import { postCartCount } from '@apis/shoppingCart/postCartCount';

import { ToastCheckCard } from '@components';
import { IcCart, IcChevronRight, IcStar, IcVector120, IcFreedelivery, IcCartAdd } from '@svg';
import formatDeliveryDate from '@utils';
import { useCart } from 'src/context/cartContext';
import useToast from 'src/hooks/useToast';

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

import { ProductData } from '@types';

interface ProductDataProps {
  product: ProductData;
  discountedPrice: number;
}

const ProductCard = ({ product, discountedPrice }: ProductDataProps) => {
  const { updateCartCount } = useCart();
  const { showToast, isToastVisible } = useToast();

  const {
    id,
    image,
    brand,
    name,
    isBestSeller,
    rating,
    reviewCount,
    discountRate,
    price,
    isFreeDelivery,
    deliveryDate,
    freeDeliveryStandard,
    isInCart: isInCartBoolean,
  } = product;

  const [isInCart, setIsInCart] = useState(isInCartBoolean);
  const [toastCheckCardStatus, setToastCheckCardStatus] = useState<'success' | 'error'>('success');

  const handleCartClick = () => {
    if (isInCart) {
      handleMinusCartClick();
    } else {
      handleAddCartClick();
    }
  };

  const handleAddCartClick = async () => {
    try {
      const result = await postCartCount(id);

      if (result.success) {
        updateCartCount(result.cartCount);
        setToastCheckCardStatus('success');
      } else {
        setToastCheckCardStatus('error');
      }
    } catch (error) {
      console.error('장바구니 추가 에러:', error);
      setToastCheckCardStatus('error');
    } finally {
      setIsInCart(true);
      setToastCheckCardStatus('success');
      showToast();
    }
  };

  const handleMinusCartClick = async () => {
    try {
      const result = await deleteCartCount(id);
      if (result.success) {
        updateCartCount(result.cartCount);
      } else {
        console.error('장바구니 삭제 실패');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsInCart(false);
    }
  };

  return (
    <>
      {isToastVisible && <ToastCheckCard status={toastCheckCardStatus} />}

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
            <div onClick={handleCartClick} role="button" aria-label="Add to Cart">
              {isInCart ? <IcCartAdd css={cartIcon} /> : <IcCart css={cartIcon} />}
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
                <span>{`${discountRate}%`}</span>
                <span>{discountedPrice?.toLocaleString()}</span>
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
    </>
  );
};

export default ProductCard;
