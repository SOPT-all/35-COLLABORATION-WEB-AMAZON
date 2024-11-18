import { sectionStyle } from './Dev.style';
import ProductList from '../../components/ProductCard/ProductList';

const Dev = () => {
  return (
    <>
      <div css={sectionStyle}>
        <ProductList />
      </div>
    </>
  );
};

export default Dev;
