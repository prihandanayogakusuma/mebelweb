import { Check } from 'lucide-react'
import { PageHero } from '../components/common/PageHero'
import { Picture } from '../components/common/Picture'
import { WhatsAppButton } from '../components/common/WhatsAppButton'
import { pageMeta } from '../data/seo'
import { services } from '../data/services'
import { useSeo } from '../hooks/useSeo'
import { serviceMessage } from '../lib/whatsapp'

export default function ServicesPage() {
  useSeo(pageMeta.services)

  return (
    <>
      <PageHero
        eyebrow="Services"
        image={pageMeta.services.preloadImage}
        title="Layanan furniture kami"
        description="Dari pesanan satuan untuk rumah sampai pengadaan proyek, pilih layanan yang sesuai lalu konsultasikan lewat WhatsApp."
      />
      <div className="wrap divide-y divide-line">
        {services.map((service, index) => (
          <section key={service.slug} className="grid items-center gap-8 py-12 md:grid-cols-2 md:gap-14 md:py-16">
            <Picture
              image={service.image}
              priority={index === 0}
              wrapperClassName={index % 2 === 1 ? 'md:order-2' : ''}
              className="aspect-4/3 w-full object-cover"
            />
            <div>
              <h2 className="text-3xl font-medium">{service.title}</h2>
              <p className="mt-3 text-lg text-muted">{service.description}</p>
              {service.points && (
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-muted">
                      <Check className="mt-1 size-4 shrink-0 text-whatsapp" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-6">
                <WhatsAppButton source={`service_${service.slug}`} message={serviceMessage(service.title)} />
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
