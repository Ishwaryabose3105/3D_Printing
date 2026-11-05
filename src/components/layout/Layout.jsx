import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'
import SvgGradients from '../common/SvgGradients'
import ScrollToTop from '../common/ScrollToTop'

export default function Layout() {
  return (
    <>
      <SvgGradients />
      <ScrollToTop />
      <Navbar />
      {/* clip stops spinning / sliding animations from causing sideways scroll on phones */}
      <main className="overflow-x-clip">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
