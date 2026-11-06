import { ArrowLeft, Check } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { JsonLd } from '../components/common/JsonLd'
import { Picture } from '../components/common/Picture'
import { WhatsAppButton } from '../components/common/WhatsAppButton'
import { ProductCard } from '../components/products/ProductCard'
import { getCategory } from '../data/categories'
import { company } from '../data/company'
import { getProduct, products } from '../data/products'
import { productMeta } from '../data/seo'
import { useSeo } from '../hooks/useSeo'
import { formatRupiah } from '../lib/format'
import { productMessage } from '../lib/whatsapp'
import type { Product } from '../types'
import NotFoundPage from './NotFoundPage'

function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <Picture image={product.images[active]} priority className="aspect-4/3 w-full bg-cream object-cover" />
      {product.images.length > 1 && (
        <div className="mt-3 flex gap-3">
          {product.images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Tampilkan foto ${index + 1}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
              className={`w-24 border-2 ${index === active ? 'border-walnut' : 'border-transparent'}`}
            >
              <Picture image={image} hideTag className="aspect-4/3 w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function ProductContent({ product }: { product: Product }) {
  useSeo(productMeta(product))

  const category = getCategory(product.categorySlug)
  const related = products
    .filter((item) => item.categorySlug === product.categorySlug && item.slug !== product.slug)
    .concat(products.filter((item) => item.featured && item.categorySlug !== product.categorySlug))
    .slice(0, 4)

  const specs = [
    ['Kode produk', product.sku],
    ['Material', product.material],
    ['Dimensi', product.dimensions],
    ['Warna', product.colors?.join(', ')],
    ['Finishing', product.finishing],
    ['Pilihan custom', product.customOptions?.join(', ')],
  ].filter((row): row is [string, string] => Boolean(row[1]))

  return (
    <>
      {/* Product schema butuh data harga yang valid, jadi hanya aktif bila tersedia. */}
      {!company.isPlaceholderData && product.price !== undefined && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.description,
            sku: product.sku,
            image: product.images.map((image) => `${import.meta.env.VITE_SITE_URL}${image.src}`),
            offers: { '@type': 'Offer', price: product.price, priceCurrency: 'IDR' },
          }}
        />
      )}

      <div className="wrap py-8 md:py-12">
        <Link to="/products" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-walnut">
          <ArrowLeft className="size-4" aria-hidden="true" /> Kembali ke katalog
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductGallery key={product.slug} product={product} />
          </div>

          <div>
            {category && (
              <Link to={`/products?category=${category.slug}`} className="text-sm font-semibold text-wood-ink hover:underline">
                {category.name}
              </Link>
            )}
            <h1 className="mt-2 text-4xl font-medium md:text-5xl">{product.name}</h1>
            {product.price !== undefined && <p className="mt-3 text-xl font-semibold text-walnut">{formatRupiah(product.price)}</p>}
            <p className="mt-4 text-lg text-muted">{product.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppButton source="product_detail" label="Ask for Price" message={productMessage(product.name)} className="px-7 py-3 text-base" />
            </div>

            {specs.length > 0 && (
              <dl className="mt-8 divide-y divide-line border-y border-line">
                {specs.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[8.5rem_1fr] gap-3 py-3 text-sm">
                    <dt className="font-medium text-muted">{label}</dt>
                    <dd className="text-charcoal">{value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {product.highlights && (
              <div className="mt-8">
                <h2 className="text-xl font-medium">Keunggulan produk</h2>
                <ul className="mt-3 space-y-2">
                  {product.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted">
                      <Check className="mt-1 size-4 shrink-0 text-whatsapp" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {company.isPlaceholderData && (
              <p className="mt-6 text-xs text-muted">Spesifikasi di halaman ini adalah data contoh.</p>
            )}
          </div>
        </div>
      </div>

      <section className="section-y border-t border-line">
        <div className="wrap">
          <h2 className="text-3xl font-medium">Produk terkait</h2>
          <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default function ProductDetailPage() {
  const { slug = '' } = useParams()
  const product = getProduct(slug)
  return product ? <ProductContent product={product} /> : <NotFoundPage />
}
