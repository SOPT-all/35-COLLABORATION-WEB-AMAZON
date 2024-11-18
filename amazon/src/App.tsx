import { Global, ThemeProvider } from '@emotion/react';

import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <h1>Amazon</h1>
      <p className="read-the-docs">웨비들 화이팅🌊</p>
    </ThemeProvider>
  );
}

export default App;
