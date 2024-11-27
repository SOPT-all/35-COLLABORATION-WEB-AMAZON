import { Outlet } from 'react-router-dom';

import { Header, Footer } from '@components';
import { CartProvider } from 'src/context/cartContext';

const Layout = () => {
  return (
    <CartProvider>
      <Header />
      <Outlet />
      <Footer />
    </CartProvider>
  );
};

export default Layout;
