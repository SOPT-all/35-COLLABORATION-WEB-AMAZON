import { getProducts } from '@apis/getProducts';
import { useEffect, useState } from 'react';

import { listContainer, productCardList } from './ProductList.style';
import ProductCard from '../ProductCard/ProductCard';
// 상품 데이터 타입 정의
interface Product {
  id: number;
  image: string;
  brand: string;
  name: string;
  isBestSeller: boolean;
  rating: number;
  reviewCount: number;
  discountRate: number;
  price: number;
  isFreeDelivery: boolean;
  deliveryDate: string;
  freeDeliveryStandard: number;
}

interface ProductListProps {
  keyword: string;
  sort: 'POPULARITY' | 'REVIEWCOUNT' | 'SALES' | 'LOWPRICE' | 'LATESTPRODUCTS'; // 정확한 타입 지정
}

const ProductList = ({ keyword, sort }: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]); // 명시적 타입 추가
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts({ keyword, sort });
        setProducts(data); // 데이터가 올바르게 설정되도록 타입 일치
      } catch (err) {
        console.error('Error fetching products:', err); // err 사용
        setError('상품 데이터를 불러오는 중 문제가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [keyword, sort]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section css={productCardList}>
      <div css={listContainer}>
        {products.map((product) => {
          const discountedPrice = Math.floor(product.price * (1 - product.discountRate / 100));
          return <ProductCard key={product.id} product={{ ...product, discountedPrice }} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
