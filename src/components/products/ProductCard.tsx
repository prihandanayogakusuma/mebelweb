import { useState } from 'react'
import { Link } from 'react-router'
import { getCategory } from '../../data/categories'
import { trackEvent } from '../../lib/analytics'
import { formatRupiah } from '../../lib/format'
import { productMessage } from '../../lib/whatsapp'
import type { Product } from '../../types'
import { ButtonLink } from '../common/Button'
import { Picture } from '../common/Picture'
import { WhatsAppButton } from '../common/WhatsAppButton'

export function ProductCard({ product }: { product: Product }) {
  // Foto kedua baru dimuat saat kartu disentuh kursor, agar katalog tetap ringan.
  const [hovered, setHovered] = useState(false)
  const href = `/products/${product.slug}`
  const onDetail = () => trackEvent('product_detail_click', { product: product.name })
  const alternate = product.images[1]

  return (
    <article className="group flex w-full flex-col" onMouseEnter={() => setHovered(true)}>
      <Link to={href} onClick={onDetail} tabIndex={-1} aria-hidden="true" className="relative block overflow-hidden bg-cream">
        <Picture
          image={product.images[0]}
          className="aspect-4/3 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {hovered && alternate && (
          <img
            src={alternate.src}
            alt=""
            width={alternate.width}
            height={alternate.height}
            className="absolute inset-0 size-full animate-fade object-cover opacity-0 group-hover:opacity-100"
          />
        )}
      </Link>
      <div className="flex flex-1 flex-col pt-4">
        <p className="text-xs font-semibold text-wood-ink">{getCategory(product.categorySlug)?.name}</p>
        <h3 className="mt-1 text-xl font-medium">
          <Link to={href} onClick={onDetail} className="hover:text-wood-ink">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 flex-1 text-sm text-muted">{product.summary}</p>
        {product.price !== undefined && <p className="mt-2 font-semibold text-walnut">{formatRupiah(product.price)}</p>}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <ButtonLink
            to={href}
            variant="outline"
            onClick={onDetail}
            className="px-2! whitespace-nowrap"
            aria-label={`View Detail ${product.name}`}
          >
            View Detail
          </ButtonLink>
          <WhatsAppButton
            source="product_card"
            label="Ask for Price"
            message={productMessage(product.name)}
            className="px-2! whitespace-nowrap"
          />
        </div>
      </div>
    </article>
  )
}
