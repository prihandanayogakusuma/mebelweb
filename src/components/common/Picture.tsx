import { company } from '../../data/company'
import type { ImageAsset } from '../../types'

interface PictureProps {
  image: ImageAsset
  /** Kelas untuk elemen img. */
  className?: string
  /** Kelas untuk pembungkus, misalnya ukuran atau overflow-hidden. */
  wrapperClassName?: string
  /** Aktifkan hanya untuk gambar utama di layar pertama. */
  priority?: boolean
  /** Sembunyikan label "Foto contoh", misalnya pada thumbnail. */
  hideTag?: boolean
}

export function SampleTag() {
  if (!company.isPlaceholderData) return null
  return (
    <span className="pointer-events-none absolute right-2 bottom-2 z-10 rounded-xs bg-charcoal/80 px-1.5 py-0.5 text-[10px] leading-4 font-medium text-ivory">
      Foto contoh
    </span>
  )
}

export function Picture({ image, className, wrapperClassName = '', priority = false, hideTag = false }: PictureProps) {
  return (
    <span className={`relative block ${wrapperClassName}`}>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
      {!hideTag && <SampleTag />}
    </span>
  )
}
