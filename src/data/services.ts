import { photo } from '../lib/image'
import type { Service } from '../types'

/** DATA CONTOH. Tampilkan hanya layanan yang benar-benar disediakan perusahaan. */
export const services: Service[] = [
  {
    slug: 'furniture-manufacturing',
    title: 'Furniture Manufacturing',
    description: 'Produksi furniture kayu dari bahan mentah sampai barang jadi, untuk pesanan satuan maupun jumlah banyak.',
    points: ['Pemilihan dan pengolahan kayu', 'Perakitan dan finishing', 'Pemeriksaan sebelum pengiriman'],
    image: photo('/images/services/produksi.webp', 'Foto contoh layanan produksi furniture'),
    featured: true,
  },
  {
    slug: 'custom-furniture',
    title: 'Custom Furniture',
    description: 'Punya ukuran atau desain sendiri? Kirimkan referensinya, lalu kami bantu wujudkan dalam material yang sesuai.',
    points: ['Konsultasi desain dan ukuran', 'Pilihan jenis kayu dan finishing'],
    image: photo('/images/services/custom.webp', 'Foto contoh layanan furniture custom'),
    featured: true,
  },
  {
    slug: 'hotel-restaurant',
    title: 'Furniture for Hotel and Restaurant',
    description: 'Meja, kursi, dan furniture kamar untuk hotel, restoran, dan kafe, disesuaikan dengan konsep interior.',
    points: ['Mengikuti konsep interior', 'Pemesanan dalam jumlah banyak'],
    image: photo('/images/services/hotel-restoran.webp', 'Foto contoh furniture hotel dan restoran'),
  },
  {
    slug: 'office',
    title: 'Furniture for Office',
    description: 'Meja kerja, rak, dan penyimpanan untuk ruang kantor dengan tampilan seragam.',
    image: photo('/images/services/kantor.webp', 'Foto contoh furniture kantor'),
  },
  {
    slug: 'project-supply',
    title: 'Furniture Project Supply',
    description: 'Pengadaan furniture untuk kontraktor, procurement, dan desainer interior dengan spesifikasi proyek.',
    points: ['Mengikuti spesifikasi proyek', 'Satu kontak untuk koordinasi pesanan'],
    image: photo('/images/services/pengadaan.webp', 'Foto contoh pengadaan furniture proyek'),
    featured: true,
  },
  {
    slug: 'wholesale',
    title: 'Wholesale / Distribution',
    description: 'Kerja sama pasokan untuk toko furniture, reseller, dan distributor.',
    image: photo('/images/services/grosir.webp', 'Foto contoh layanan grosir dan distribusi'),
  },
]
