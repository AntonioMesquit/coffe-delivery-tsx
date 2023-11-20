import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default.ts';
import { GlobalStyle } from './styles/global.ts';
import { Router } from './router.tsx';
import { BrowserRouter } from 'react-router-dom';
import { CoffeContextProvider } from './contexts/CoffeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CoffeContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CoffeContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
