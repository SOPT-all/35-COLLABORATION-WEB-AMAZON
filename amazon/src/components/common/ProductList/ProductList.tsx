import { ListContainer } from './ProductList.style';
import mockData from '../../../utils/mocks/product.json';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
  return (
    <div css={ListContainer}>
      {mockData.data.map((product, index) => {
        const discountedPrice = Math.floor(product.price * (1 - product.discountRate / 100));
        return <ProductCard key={index} product={{ ...product, discountedPrice }} />;
      })}
    </div>
  );
};

export default ProductList;
