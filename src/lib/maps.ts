import type { CompanyLocation } from '../types'

const query = (location: CompanyLocation) => encodeURIComponent(location.mapQuery.trim())

export const isLocationConfirmed = (location: CompanyLocation) => location.mapQuery.trim().length > 0

export const viewLocationUrl = (location: CompanyLocation) =>
  `https://www.google.com/maps/search/?api=1&query=${query(location)}`

export const directionsUrl = (location: CompanyLocation) =>
  `https://www.google.com/maps/dir/?api=1&destination=${query(location)}`

export const embedUrl = (location: CompanyLocation) =>
  location.embedUrl ?? `https://www.google.com/maps?q=${query(location)}&output=embed`
