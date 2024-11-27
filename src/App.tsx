import { Global, ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';

import { CartProvider } from './context/cartContext';
import router from './routes/Router';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';

function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
