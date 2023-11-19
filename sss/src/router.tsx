import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Completed } from './pages/Completed'
import { DefaultLayout } from './layouts/DefaultLayout'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Checkout />} />
        <Route path="/sucesso" element={<Completed />} />
      </Route>
    </Routes>
  )
}
