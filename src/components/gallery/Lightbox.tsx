import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef, type KeyboardEvent } from 'react'
import type { GalleryItem } from '../../types'

interface LightboxProps {
  items: GalleryItem[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

const control = 'inline-flex size-11 items-center justify-center rounded-full bg-ivory/15 text-ivory transition-colors hover:bg-ivory/30'

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const dialog = useRef<HTMLDialogElement>(null)
  const item = items[index]
  const previous = () => onNavigate((index - 1 + items.length) % items.length)
  const next = () => onNavigate((index + 1) % items.length)

  useEffect(() => {
    const element = dialog.current
    if (element && !element.open) element.showModal()
  }, [])

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') previous()
    if (event.key === 'ArrowRight') next()
  }

  return (
    <dialog
      ref={dialog}
      aria-label="Tampilan foto"
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={(event) => event.target === dialog.current && dialog.current.close()}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-charcoal/92 text-ivory"
    >
      <div className="flex h-full flex-col items-center justify-center gap-3 p-4" onClick={(event) => event.target === event.currentTarget && dialog.current?.close()}>
        <button type="button" className={`${control} absolute top-4 right-4`} aria-label="Tutup foto" onClick={() => dialog.current?.close()}>
          <X className="size-5" aria-hidden="true" />
        </button>
        <img src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} className="max-h-[78dvh] w-auto max-w-full object-contain" />
        <div className="flex items-center gap-4">
          <button type="button" className={control} aria-label="Foto sebelumnya" onClick={previous}>
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <p className="min-w-16 text-center text-sm">
            {index + 1} / {items.length}
          </p>
          <button type="button" className={control} aria-label="Foto berikutnya" onClick={next}>
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
        <p className="text-center text-sm text-cream/85">{item.image.alt}</p>
      </div>
    </dialog>
  )
}
