import { MapPin, Navigation } from 'lucide-react'
import { trackEvent } from '../../lib/analytics'
import { directionsUrl, embedUrl, isLocationConfirmed, viewLocationUrl } from '../../lib/maps'
import type { CompanyLocation } from '../../types'
import { buttonClass, ExternalButton } from '../common/Button'

export function LocationMap({ location }: { location: CompanyLocation }) {
  if (!isLocationConfirmed(location)) {
    return (
      <div className="flex aspect-4/3 w-full flex-col items-center justify-center gap-2 border border-dashed border-wood/40 p-6 text-center md:aspect-video">
        <MapPin className="size-7 text-wood-ink" aria-hidden="true" />
        <p className="font-medium text-walnut">Peta belum tersedia</p>
        <p className="max-w-sm text-sm text-muted">Peta tampil setelah alamat atau koordinat dikonfirmasi perusahaan.</p>
      </div>
    )
  }
  return (
    <iframe
      src={embedUrl(location)}
      title={`Peta lokasi ${location.name}`}
      className="aspect-4/3 w-full border-0 md:aspect-video"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  )
}

export function LocationActions({ location }: { location: CompanyLocation }) {
  if (!isLocationConfirmed(location)) {
    const disabled = buttonClass('outline', 'pointer-events-none opacity-50')
    return (
      <div className="flex flex-wrap gap-2" title="Menunggu alamat yang dikonfirmasi">
        <span className={disabled} aria-disabled="true">
          <MapPin className="size-4" aria-hidden="true" /> View Location
        </span>
        <span className={disabled} aria-disabled="true">
          <Navigation className="size-4" aria-hidden="true" /> Get Directions
        </span>
      </div>
    )
  }
  return (
    <div className="flex flex-wrap gap-2">
      <ExternalButton
        href={viewLocationUrl(location)}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        onClick={() => trackEvent('view_location_click', { location: location.id })}
      >
        <MapPin className="size-4" aria-hidden="true" /> View Location
      </ExternalButton>
      <ExternalButton
        href={directionsUrl(location)}
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
        onClick={() => trackEvent('get_directions_click', { location: location.id })}
      >
        <Navigation className="size-4" aria-hidden="true" /> Get Directions
      </ExternalButton>
    </div>
  )
}

export function LocationCard({ location }: { location: CompanyLocation }) {
  return (
    <article>
      <LocationMap location={location} />
      <p className="mt-5 text-sm font-semibold text-wood-ink">{location.label}</p>
      <h3 className="mt-1 text-2xl font-medium">{location.name}</h3>
      <p className="mt-2 mb-4 text-muted">{location.address}</p>
      <LocationActions location={location} />
    </article>
  )
}
