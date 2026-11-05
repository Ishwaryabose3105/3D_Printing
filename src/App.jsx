import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Layout from "./components/layout/Layout";
import ModalProvider from './context/ModalProvider'
import'./components/layout/Layout.css'

import Services from './pages/Services'
import Products from './pages/Products'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      {/* reducedMotion="user" turns off framer animations for people who prefer less motion */}
      <MotionConfig reducedMotion="user">
        <ModalProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="products" element={<Products />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ModalProvider>
      </MotionConfig>
    </BrowserRouter>
  )
}

export default App
