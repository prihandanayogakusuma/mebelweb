import { photo } from '../lib/image'
import type { GalleryCategory, GalleryItem } from '../types'
import { products } from './products'
import { projects } from './projects'

export const galleryCategories: GalleryCategory[] = ['Product', 'Workshop / Factory', 'Production Process', 'Completed Projects']

/** DATA CONTOH. Ganti dengan foto asli produk, workshop, dan proyek. */
export const gallery: GalleryItem[] = [
  ...products.slice(0, 8).map((product): GalleryItem => ({ category: 'Product', image: product.images[0] })),
  { category: 'Workshop / Factory', image: photo('/images/workshop/workshop-utama.webp', 'Foto contoh workshop produksi') },
  { category: 'Workshop / Factory', image: photo('/images/workshop/gudang-kayu.webp', 'Foto contoh gudang kayu') },
  { category: 'Workshop / Factory', image: photo('/images/workshop/ruang-finishing.webp', 'Foto contoh ruang finishing') },
  { category: 'Production Process', image: photo('/images/process/pemilihan-material.webp', 'Foto contoh pemilihan material kayu') },
  { category: 'Production Process', image: photo('/images/process/pemotongan.webp', 'Foto contoh pemotongan kayu') },
  { category: 'Production Process', image: photo('/images/process/perakitan.webp', 'Foto contoh perakitan furniture') },
  { category: 'Production Process', image: photo('/images/process/finishing.webp', 'Foto contoh finishing furniture') },
  { category: 'Production Process', image: photo('/images/process/quality-control.webp', 'Foto contoh pemeriksaan kualitas') },
  ...projects.map((project): GalleryItem => ({ category: 'Completed Projects', image: project.image })),
]
