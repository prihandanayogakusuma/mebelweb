import { Search, X } from 'lucide-react'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router'
import { PageHero } from '../components/common/PageHero'
import { WhatsAppButton } from '../components/common/WhatsAppButton'
import { ProductCard } from '../components/products/ProductCard'
import { categories, getCategory } from '../data/categories'
import { products } from '../data/products'
import { pageMeta } from '../data/seo'
import { useSeo } from '../hooks/useSeo'

const chip = 'min-h-11 shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors'

export default function ProductsPage() {
  useSeo(pageMeta.products)

  const [params, setParams] = useSearchParams()
  const activeCategory = getCategory(params.get('category') ?? '')
  const search = params.get('q') ?? ''

  const updateParam = (key: 'category' | 'q', value: string) => {
    setParams(
      (current) => {
        const next = new URLSearchParams(current)
        if (value) next.set(key, value)
        else next.delete(key)
        return next
      },
      { replace: true, preventScrollReset: true },
    )
  }

  const results = useMemo(() => {
    const term = search.trim().toLowerCase()
    return products.filter((product) => {
      if (activeCategory && product.categorySlug !== activeCategory.slug) return false
      if (!term) return true
      return [product.name, product.summary, product.material, getCategory(product.categorySlug)?.name]
        .join(' ')
        .toLowerCase()
        .includes(term)
    })
  }, [activeCategory, search])

  return (
    <>
      <PageHero
        eyebrow="Products"
        image={pageMeta.products.preloadImage}
        title={activeCategory?.name ?? 'Katalog furniture kayu'}
        description={activeCategory?.description ?? 'Pilih kategori atau cari produk, lalu tanyakan harga langsung lewat WhatsApp.'}
      />

      <section className="wrap py-10 md:py-14">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="group"
            aria-label="Filter kategori"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0 lg:max-w-[52rem]"
          >
            <button
              type="button"
              aria-pressed={!activeCategory}
              onClick={() => updateParam('category', '')}
              className={`${chip} ${!activeCategory ? 'border-walnut bg-walnut text-ivory' : 'border-line text-muted hover:border-walnut'}`}
            >
              Semua
            </button>
            {categories.map((category) => {
              const active = category.slug === activeCategory?.slug
              return (
                <button
                  key={category.slug}
                  type="button"
                  aria-pressed={active}
                  onClick={() => updateParam('category', category.slug)}
                  className={`${chip} ${active ? 'border-walnut bg-walnut text-ivory' : 'border-line text-muted hover:border-walnut'}`}
                >
                  {category.name}
                </button>
              )
            })}
          </div>

          <div className="relative w-full lg:w-72 lg:shrink-0">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-wood-ink" aria-hidden="true" />
            <input
              type="search"
              value={search}
              onChange={(event) => updateParam('q', event.target.value)}
              placeholder="Cari produk"
              aria-label="Cari produk"
              className="h-11 w-full rounded-sm border border-line bg-white pr-3 pl-9 text-base outline-none placeholder:text-muted focus:border-walnut [&::-webkit-search-cancel-button]:hidden"
            />
          </div>
        </div>

        <h2 className="sr-only">Daftar produk</h2>
        <p className="mt-6 text-sm text-muted" role="status">
          {results.length} produk ditemukan
        </p>

        {results.length > 0 ? (
          <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-6 border border-dashed border-line px-6 py-14 text-center">
            <h2 className="text-2xl font-medium">Produk tidak ditemukan</h2>
            <p className="mx-auto mt-2 max-w-md text-muted">
              Coba kata kunci lain, atau ceritakan furniture yang Anda cari lewat WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setParams({}, { replace: true, preventScrollReset: true })}
                className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-walnut/35 px-5 text-sm font-semibold text-walnut hover:bg-walnut hover:text-ivory"
              >
                <X className="size-4" aria-hidden="true" /> Hapus filter
              </button>
              <WhatsAppButton source="products_empty" />
            </div>
          </div>
        )}
      </section>
    </>
  )
}
