import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { FloatingWhatsApp } from '../components/layout/FloatingWhatsApp'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { PlaceholderNotice } from '../components/layout/PlaceholderNotice'

export function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:absolute focus:z-60 focus:bg-walnut focus:px-4 focus:py-2 focus:text-ivory"
      >
        Lompat ke konten
      </a>
      <PlaceholderNotice />
      <Navbar />
      <main id="konten" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
