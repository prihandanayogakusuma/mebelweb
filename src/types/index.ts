export interface ImageAsset {
  src: string
  alt: string
  width: number
  height: number
}

export interface SocialLink {
  label: string
  url: string
}

export interface Company {
  /** Ubah ke false setelah seluruh data diganti dengan data resmi perusahaan. */
  isPlaceholderData: boolean
  name: string
  legalName?: string
  tagline: string
  heroHeadline: string
  heroDescription: string
  summary: string
  profile: string[]
  history?: string
  vision?: string
  mission?: string[]
  values?: { title: string; description: string }[]
  /** Tampilkan hanya jika sudah dikonfirmasi perusahaan. */
  productionCapacity?: string
  /** Kode negara tanpa tanda +, spasi, atau tanda hubung. Contoh: 6281234567890 */
  whatsappNumber: string
  phoneDisplay: string
  /** Format tautan tel:, contoh +6281234567890 */
  phoneHref: string
  email: string
  operatingHours: string[]
  social: SocialLink[]
}

export interface Category {
  slug: string
  name: string
  description: string
  image: ImageAsset
}

/** Field opsional yang kosong otomatis disembunyikan di halaman. */
export interface Product {
  slug: string
  name: string
  categorySlug: string
  summary: string
  description: string
  images: ImageAsset[]
  featured?: boolean
  sku?: string
  /** Harga dalam Rupiah. Kosongkan bila harga tidak ingin ditampilkan. */
  price?: number
  material?: string
  dimensions?: string
  colors?: string[]
  finishing?: string
  customOptions?: string[]
  highlights?: string[]
}

export interface Service {
  slug: string
  title: string
  description: string
  points?: string[]
  image: ImageAsset
  featured?: boolean
}

export interface Project {
  slug: string
  title: string
  type: string
  description: string
  furniture: string[]
  image: ImageAsset
  /** Lokasi umum, hanya jika boleh dipublikasikan. */
  location?: string
  year?: number
  /** Hanya jika perusahaan memiliki izin dari klien. */
  clientName?: string
}

export type GalleryCategory = 'Product' | 'Workshop / Factory' | 'Production Process' | 'Completed Projects'

export interface GalleryItem {
  category: GalleryCategory
  image: ImageAsset
}

export interface CompanyLocation {
  id: string
  label: string
  name: string
  address: string
  /**
   * Alamat lengkap atau koordinat "lat,lng" yang SUDAH dikonfirmasi pemilik.
   * Selama kosong, peta dan tombol lokasi tampil sebagai belum tersedia.
   */
  mapQuery: string
  /** Opsional: URL dari Google Maps > Bagikan > Sematkan peta. */
  embedUrl?: string
}

export interface Testimonial {
  quote: string
  author: string
  role?: string
}

export interface TextItem {
  title: string
  description: string
}

export interface ProcessStep extends TextItem {
  image: ImageAsset
}

export interface PageMeta {
  path: string
  title: string
  description: string
  image?: string
  noindex?: boolean
  /** Gambar utama halaman, dipreload agar tampil lebih cepat. */
  preloadImage?: string
}
