import { useLocation } from 'react-router'
import { ButtonLink } from '../components/common/Button'
import { WhatsAppButton } from '../components/common/WhatsAppButton'
import { useSeo } from '../hooks/useSeo'

export default function NotFoundPage() {
  const { pathname } = useLocation()
  useSeo({ path: pathname, title: 'Halaman tidak ditemukan', description: 'Halaman yang Anda cari tidak tersedia.', noindex: true })

  return (
    <section className="wrap py-24 text-center">
      <h1 className="text-4xl font-medium md:text-5xl">Halaman tidak ditemukan</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-muted">Tautan mungkin sudah berubah. Lihat katalog atau hubungi kami.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink to="/products">Explore Products</ButtonLink>
        <WhatsAppButton source="not_found" />
      </div>
    </section>
  )
}
