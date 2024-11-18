import { cardContainer, imageBox, ProductBox } from './ProductCard.style';

interface productData {
  image: string;
  name: string;
  rating: number;
  price: number;
  deliveryDate: string;
}

const ProductCard = ({ image, name, rating, price, deliveryDate }: productData) => {
  return (
    <div css={cardContainer}>
      <div css={imageBox}>
        <img src={image} alt="productImg" />
      </div>
      <div css={ProductBox}>
        <h1>{name}</h1>
        <p>{rating}</p>
        <h2>{price}원</h2>
        <h3>{deliveryDate}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
