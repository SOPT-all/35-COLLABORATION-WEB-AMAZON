import { products } from '@constants';

import { listContainer, productCardList } from './ProductList.style';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
  return (
    <section css={productCardList}>
      <div css={listContainer}>
        {products.data.map((product, index) => {
          const discountedPrice = Math.floor(product.price * (1 - product.discountRate / 100));
          return <ProductCard key={index} product={product} discountedPrice={discountedPrice} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
