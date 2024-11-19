import ProductCard from './ProductCard';
import mockData from '../../../utils/mocks/product.json';

const ProductList = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        padding: '0.8rem',
        alignItems: 'center',
        alignContent: 'center',
      }}>
      {mockData.data.map((product, index) => {
        const discountedPrice = Math.floor(product.price * (1 - product.discountRate / 100));
        return (
          <ProductCard
            key={index}
            image={product.image}
            brand={product.brand}
            name={product.name}
            isBestSeller={product.isBestSeller}
            rating={product.rating}
            reviewCount={product.reviewCount}
            price={product.price}
            discountedPrice={discountedPrice}
            discountRate={product.discountRate}
            isFreeDelivery={product.isFreeDelivery}
            deliveryDate={product.deliveryDate}
            freeDeliveryStandard={product.freeDeliveryStandard}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
