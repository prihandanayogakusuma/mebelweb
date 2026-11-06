import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { Logo } from '../common/Logo'
import { WhatsAppButton } from '../common/WhatsAppButton'

export const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Di atas hero homepage, navbar transparan lalu menjadi solid saat digulir.
  const overlay = pathname === '/' && !scrolled && !open

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        overlay ? 'border-transparent bg-transparent' : 'border-line bg-ivory/95 backdrop-blur-sm'
      }`}
    >
      <nav className="wrap flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]" aria-label="Navigasi utama">
        <Logo light={overlay} />

        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${overlay ? 'hover:text-oak' : 'hover:text-walnut'} ${
                    isActive ? 'underline decoration-oak decoration-2 underline-offset-8' : ''
                  } ${overlay ? 'text-ivory' : isActive ? 'text-walnut' : 'text-muted'}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <WhatsAppButton source="navbar" label="WhatsApp" className="max-sm:hidden" />
          <button
            type="button"
            className={`inline-flex size-11 items-center justify-center lg:hidden ${overlay ? 'text-ivory' : 'text-walnut'}`}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-mobile" className="border-t border-line bg-ivory lg:hidden">
          <ul className="wrap py-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 text-base font-medium ${isActive ? 'text-walnut' : 'text-muted'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="py-3">
              <WhatsAppButton source="navbar_mobile" className="w-full" />
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
