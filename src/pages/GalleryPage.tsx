import { useState } from 'react'
import { buttonClass } from '../components/common/Button'
import { PageHero } from '../components/common/PageHero'
import { Picture } from '../components/common/Picture'
import { Lightbox } from '../components/gallery/Lightbox'
import { gallery, galleryCategories } from '../data/gallery'
import { pageMeta } from '../data/seo'
import { useSeo } from '../hooks/useSeo'
import type { GalleryCategory } from '../types'

/** Foto ditampilkan bertahap agar halaman tetap cepat dibuka di ponsel. */
const PAGE_SIZE = 9

const chip = 'min-h-11 shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors'

export default function GalleryPage() {
  useSeo(pageMeta.gallery)

  const [category, setCategory] = useState<GalleryCategory | null>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [limit, setLimit] = useState(PAGE_SIZE)
  const items = category ? gallery.filter((item) => item.category === category) : gallery

  return (
    <>
      <PageHero eyebrow="Gallery" title="Galeri foto" description="Produk, workshop, proses produksi, dan hasil proyek." image={pageMeta.gallery.preloadImage} />

      <section className="wrap py-10 md:py-14">
        <div role="group" aria-label="Filter galeri" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0">
          {[null, ...galleryCategories].map((item) => (
            <button
              key={item ?? 'all'}
              type="button"
              aria-pressed={category === item}
              onClick={() => {
                setCategory(item)
                setLimit(PAGE_SIZE)
              }}
              className={`${chip} ${category === item ? 'border-walnut bg-walnut text-ivory' : 'border-line text-muted hover:border-walnut'}`}
            >
              {item ?? 'Semua'}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3">
          {items.slice(0, limit).map((item, index) => (
            <li key={item.image.src}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Perbesar: ${item.image.alt}`}
                className="group relative block w-full overflow-hidden"
              >
                <Picture
                  image={item.image}
                  priority={index < 3}
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            </li>
          ))}
        </ul>

        {items.length > limit && (
          <div className="mt-8 text-center">
            <button type="button" className={buttonClass('outline')} onClick={() => setLimit((value) => value + PAGE_SIZE)}>
              Tampilkan lebih banyak
            </button>
          </div>
        )}
      </section>

      {openIndex !== null && (
        <Lightbox items={items} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
      )}
    </>
  )
}
