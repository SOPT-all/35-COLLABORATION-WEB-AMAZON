
import { Global, ThemeProvider } from '@emotion/react';

import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
    </ThemeProvider>
    </>
  );
}

export default App;
