import { Link } from 'react-router'
import { categories } from '../../data/categories'
import { company } from '../../data/company'
import { locations } from '../../data/locations'
import { trackEvent } from '../../lib/analytics'
import { generalMessage, whatsappUrl } from '../../lib/whatsapp'
import { Logo } from '../common/Logo'
import { navItems } from './Navbar'

const heading = 'mb-4 font-sans text-sm font-semibold text-oak'
const link = 'text-cream/85 transition-colors hover:text-ivory'

export function Footer() {
  return (
    <footer className="bg-charcoal text-sm text-cream/85">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1.1fr_1.3fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs">{company.summary}</p>
          {company.social.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-4">
              {company.social.map((item) => (
                <li key={item.url}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className={link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className={heading}>Navigasi</h2>
          <ul className="space-y-2.5">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={heading}>Kategori Produk</h2>
          <ul className="space-y-2.5">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link to={`/products?category=${category.slug}`} className={link}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={heading}>Kontak</h2>
          <ul className="space-y-2.5">
            <li>
              <a
                href={whatsappUrl(generalMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className={link}
                onClick={() => trackEvent('whatsapp_click', { source: 'footer' })}
              >
                WhatsApp: {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`tel:${company.phoneHref}`} className={link} onClick={() => trackEvent('call_click', { source: 'footer' })}>
                Telepon: {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className={link} onClick={() => trackEvent('email_click', { source: 'footer' })}>
                {company.email}
              </a>
            </li>
            {locations.map((location) => (
              <li key={location.id}>
                <span className="block font-medium text-ivory">{location.label}</span>
                {location.address}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <p className="wrap py-5 text-xs text-cream/70">
          © {new Date().getFullYear()} {company.legalName ?? company.name}. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  )
}
