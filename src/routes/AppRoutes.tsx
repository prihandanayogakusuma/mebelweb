import { Route, Routes } from 'react-router'
import { MainLayout } from '../layouts/MainLayout'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import GalleryPage from '../pages/GalleryPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import ProductDetailPage from '../pages/ProductDetailPage'
import ProductsPage from '../pages/ProductsPage'
import ProjectsPage from '../pages/ProjectsPage'
import ServicesPage from '../pages/ServicesPage'

/**
 * Halaman sengaja tidak di-lazy-load: total kodenya kecil, sehingga memisahkannya
 * justru menambah satu putaran jaringan dan membuat layout bergeser saat dimuat.
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:slug" element={<ProductDetailPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
