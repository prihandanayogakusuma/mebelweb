import { photo } from '../lib/image'
import type { Category } from '../types'

/** Nama kategori mengikuti PRD dan dapat disesuaikan. */
export const categories: Category[] = [
  {
    slug: 'wooden-chairs',
    name: 'Wooden Chairs',
    description: 'Kursi makan, kursi bar, dan kursi kayu harian.',
    image: photo('/images/products/kursi-makan-arka-1.webp', 'Foto contoh kategori kursi kayu'),
  },
  {
    slug: 'dining-tables',
    name: 'Dining Tables',
    description: 'Meja makan untuk keluarga, restoran, dan kafe.',
    image: photo('/images/products/meja-makan-lana-1.webp', 'Foto contoh kategori meja makan'),
  },
  {
    slug: 'living-room',
    name: 'Living Room Furniture',
    description: 'Sofa kayu, meja kopi, dan rak TV.',
    image: photo('/images/products/sofa-kayu-nara-1.webp', 'Foto contoh kategori furniture ruang tamu'),
  },
  {
    slug: 'bedroom',
    name: 'Bedroom Furniture',
    description: 'Dipan, nakas, dan pelengkap kamar tidur.',
    image: photo('/images/products/ranjang-dipan-alma-1.webp', 'Foto contoh kategori furniture kamar tidur'),
  },
  {
    slug: 'office',
    name: 'Office Furniture',
    description: 'Meja kerja dan penyimpanan untuk kantor.',
    image: photo('/images/products/meja-kerja-raka-1.webp', 'Foto contoh kategori furniture kantor'),
  },
  {
    slug: 'cabinets-shelves',
    name: 'Cabinets and Shelves',
    description: 'Lemari pakaian, rak buku, dan kabinet.',
    image: photo('/images/products/rak-arsip-bima-1.webp', 'Foto contoh kategori lemari dan rak'),
  },
  {
    slug: 'outdoor',
    name: 'Outdoor Furniture',
    description: 'Bangku dan kursi santai untuk teras dan taman.',
    image: photo('/images/products/bangku-taman-bayu-1.webp', 'Foto contoh kategori furniture luar ruangan'),
  },
  {
    slug: 'custom',
    name: 'Custom Furniture',
    description: 'Dibuat mengikuti ukuran dan desain Anda.',
    image: photo('/images/products/meja-konsol-custom-1.webp', 'Foto contoh kategori furniture custom'),
  },
]

export const getCategory = (slug: string) => categories.find((category) => category.slug === slug)
