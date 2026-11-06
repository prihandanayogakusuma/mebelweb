import { photo } from '../lib/image'
import type { ProcessStep, Testimonial, TextItem } from '../types'

/**
 * Keunggulan bersifat umum dan perlu disesuaikan dengan kondisi perusahaan.
 * Klaim ketepatan waktu, sertifikasi, atau angka sengaja tidak ditulis sampai ada buktinya.
 */
export const advantages: TextItem[] = [
  { title: 'Kualitas material', description: 'Kayu dipilih dan diolah sebelum masuk produksi, dan jenisnya disampaikan dengan jelas.' },
  { title: 'Keahlian pengerjaan', description: 'Sambungan, permukaan, dan finishing dikerjakan oleh tukang kayu di workshop.' },
  { title: 'Pilihan desain', description: 'Koleksi untuk rumah, kantor, dan area komersial dengan beragam gaya.' },
  { title: 'Kemampuan custom', description: 'Ukuran, warna, dan desain dapat disesuaikan dengan kebutuhan ruang Anda.' },
  { title: 'Quality control', description: 'Setiap furniture diperiksa kembali sebelum dikemas dan dikirim.' },
]

export const processSteps: ProcessStep[] = [
  {
    title: 'Pemilihan material',
    description: 'Kayu dipilih sesuai kebutuhan produk.',
    image: photo('/images/process/pemilihan-material.webp', 'Foto contoh pemilihan material kayu'),
  },
  {
    title: 'Pemrosesan kayu',
    description: 'Kayu dikeringkan dan disiapkan untuk produksi.',
    image: photo('/images/process/pemrosesan.webp', 'Foto contoh pemrosesan kayu'),
  },
  {
    title: 'Pemotongan dan pembentukan',
    description: 'Komponen dipotong dan dibentuk sesuai desain.',
    image: photo('/images/process/pemotongan.webp', 'Foto contoh pemotongan kayu'),
  },
  {
    title: 'Perakitan',
    description: 'Komponen disatukan menjadi furniture utuh.',
    image: photo('/images/process/perakitan.webp', 'Foto contoh perakitan furniture'),
  },
  {
    title: 'Finishing',
    description: 'Permukaan dihaluskan dan diberi lapisan akhir.',
    image: photo('/images/process/finishing.webp', 'Foto contoh finishing furniture'),
  },
  {
    title: 'Quality control',
    description: 'Hasil akhir diperiksa sebelum dikirim.',
    image: photo('/images/process/quality-control.webp', 'Foto contoh pemeriksaan kualitas'),
  },
]

/**
 * Sengaja kosong. Isi hanya dengan ulasan asli yang sudah mendapat izin.
 * Bagian testimoni otomatis tampil di homepage setelah array ini terisi.
 */
export const testimonials: Testimonial[] = []
