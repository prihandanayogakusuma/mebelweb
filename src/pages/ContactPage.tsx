import { Clock, Mail, MessageCircle, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { ExternalButton } from '../components/common/Button'
import { PageHero } from '../components/common/PageHero'
import { WhatsAppButton } from '../components/common/WhatsAppButton'
import { LocationCard } from '../components/contact/LocationCard'
import { company } from '../data/company'
import { locations } from '../data/locations'
import { pageMeta } from '../data/seo'
import { useSeo } from '../hooks/useSeo'
import { trackEvent } from '../lib/analytics'

function ContactItem({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-3 border-t border-walnut/20 pt-4">
      <span className="mt-1 text-wood-ink">{icon}</span>
      <div>
        <p className="text-sm font-semibold text-wood-ink">{label}</p>
        <div className="mt-0.5 text-charcoal">{children}</div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  useSeo(pageMeta.contact)

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        image={pageMeta.contact.preloadImage}
        title={`Hubungi ${company.name}`}
        description="Tanyakan produk, harga, atau kebutuhan proyek Anda. Cara tercepat adalah lewat WhatsApp."
      />

      <section className="section-y">
        <div className="wrap">
          <h2 className="text-3xl font-medium">{company.legalName ?? company.name}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppButton source="contact" label="Chat WhatsApp" />
            <ExternalButton href={`tel:${company.phoneHref}`} variant="outline" onClick={() => trackEvent('call_click', { source: 'contact' })}>
              <Phone className="size-4" aria-hidden="true" /> Call Now
            </ExternalButton>
            <ExternalButton href={`mailto:${company.email}`} variant="outline" onClick={() => trackEvent('email_click', { source: 'contact' })}>
              <Mail className="size-4" aria-hidden="true" /> Send Email
            </ExternalButton>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ContactItem icon={<MessageCircle className="size-5" aria-hidden="true" />} label="WhatsApp">
              {company.phoneDisplay}
            </ContactItem>
            <ContactItem icon={<Phone className="size-5" aria-hidden="true" />} label="Telepon">
              {company.phoneDisplay}
            </ContactItem>
            <ContactItem icon={<Mail className="size-5" aria-hidden="true" />} label="Email">
              {company.email}
            </ContactItem>
            <ContactItem icon={<Clock className="size-5" aria-hidden="true" />} label="Jam operasional">
              {company.operatingHours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </ContactItem>
          </div>

          {company.social.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-4">
              {company.social.map((item) => (
                <li key={item.url}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-medium text-walnut underline decoration-oak underline-offset-4">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="wrap">
          <h2 className="text-3xl font-medium">Lokasi kami</h2>
          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
