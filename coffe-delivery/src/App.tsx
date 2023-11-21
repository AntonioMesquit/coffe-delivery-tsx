import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { Router } from './router.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CoffeContextProvider } from './contexts/CoffeContext.tsx'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CoffeContextProvider>
          <Router />
        </CoffeContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
