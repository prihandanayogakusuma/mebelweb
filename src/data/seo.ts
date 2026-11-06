import type { PageMeta } from '../types/index.ts'
import { company } from './company.ts'
import { products } from './products.ts'

export const pageMeta = {
  home: {
    path: '/',
    title: company.tagline,
    description: `${company.name}: ${company.summary} Lihat katalog dan hubungi kami lewat WhatsApp.`,
  },
  about: {
    path: '/about',
    preloadImage: '/images/workshop/workshop-utama.webp',
    title: 'About Us',
    description: `Kenali ${company.name}, cara kami bekerja, dan nilai yang kami pegang dalam membuat furniture kayu.`,
  },
  products: {
    path: '/products',
    preloadImage: '/images/process/pemilihan-material.webp',
    title: 'Products',
    description: 'Katalog furniture kayu: kursi, meja makan, furniture ruang tamu, kamar tidur, kantor, lemari, outdoor, dan custom.',
  },
  services: {
    path: '/services',
    preloadImage: '/images/process/finishing.webp',
    title: 'Services',
    description: 'Layanan produksi furniture, custom, pengadaan hotel dan restoran, furniture kantor, proyek, dan grosir.',
  },
  projects: {
    path: '/projects',
    preloadImage: '/images/projects/restoran.webp',
    title: 'Our Projects',
    description: `Portofolio penataan furniture kayu ${company.name} untuk restoran, hotel, kantor, dan hunian.`,
  },
  gallery: {
    path: '/gallery',
    preloadImage: '/images/workshop/gudang-kayu.webp',
    title: 'Gallery',
    description: `Galeri foto produk, workshop, proses produksi, dan proyek ${company.name}.`,
  },
  contact: {
    path: '/contact',
    preloadImage: '/images/services/hotel-restoran.webp',
    title: 'Contact Us',
    description: `Hubungi ${company.name} lewat WhatsApp, telepon, atau email, dan temukan lokasi kantor serta pabrik kami.`,
  },
} satisfies Record<string, PageMeta>

export const productMeta = (product: (typeof products)[number]): PageMeta => ({
  path: `/products/${product.slug}`,
  title: product.name,
  description: product.summary,
  image: product.images[0].src,
  preloadImage: product.images[0].src,
})

/** Seluruh URL publik. Halaman pertama wajib homepage. */
export const allPages = (): PageMeta[] => [...Object.values(pageMeta), ...products.map(productMeta)]
