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

interface productDataProps {
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
}

const ProductCard = ({
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
}: productDataProps) => {
  // 날짜를 "00월 00일 0요일" 형식으로 변환하는 함수
  const formatDeliveryDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = daysOfWeek[date.getDay()]; // 요일 인덱스 가져오기

    return `${month}월 ${day}일 ${dayOfWeek}요일`;
  };
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
