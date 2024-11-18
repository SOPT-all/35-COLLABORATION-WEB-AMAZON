import ProductCard from './ProductCard';
import mockData from '../../utils/mocks/product.json';

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
      {mockData.data.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          rating={product.rating}
          price={product.price}
          deliveryDate={product.deliveryDate}
        />
      ))}
    </div>
  );
};

export default ProductList;
