import type { Company } from '../types/index.ts'

/**
 * KONFIGURASI PERUSAHAAN (satu-satunya sumber nama, kontak, dan social media).
 *
 * SELURUH ISI DI BAWAH INI ADALAH DATA CONTOH, BUKAN FAKTA PERUSAHAAN.
 * Ganti dengan data resmi, lalu ubah isPlaceholderData menjadi false.
 */
export const company: Company = {
  isPlaceholderData: true,
  name: 'Mebel Contoh',
  tagline: 'Furniture kayu untuk rumah, hotel, dan ruang kerja',
  heroHeadline: 'Kayu pilihan, dibentuk untuk ruang Anda.',
  heroDescription:
    'Kursi, meja, lemari, dan tempat tidur berbahan kayu, dari katalog siap pesan sampai pesanan custom sesuai ukuran Anda.',
  summary:
    'Produsen mebel dan furniture kayu: kursi, meja, lemari, tempat tidur, serta pesanan custom untuk rumah dan proyek.',
  profile: [
    'Mebel Contoh membuat dan menjual furniture berbahan kayu, mulai dari kursi, meja, dan lemari sampai tempat tidur. Kami melayani pembeli rumahan, reseller, serta kebutuhan proyek hotel, restoran, dan kantor.',
    'Setiap pesanan melewati tahapan yang sama: pemilihan material, pemrosesan kayu, perakitan, finishing, dan pemeriksaan akhir sebelum dikirim.',
  ],
  vision: 'Menjadi mitra furniture kayu yang dipercaya oleh rumah tangga dan pelaku usaha.',
  mission: [
    'Membuat furniture kayu yang kokoh dan nyaman dipakai.',
    'Memberi pilihan desain dan ukuran yang sesuai kebutuhan pelanggan.',
    'Menjaga komunikasi yang jelas sejak konsultasi sampai pesanan selesai.',
  ],
  values: [
    { title: 'Jujur pada material', description: 'Jenis kayu dan finishing disampaikan apa adanya sejak awal.' },
    { title: 'Teliti di setiap sambungan', description: 'Detail kecil diperiksa sebelum furniture meninggalkan workshop.' },
    { title: 'Mendengar kebutuhan', description: 'Ukuran dan desain disesuaikan dengan ruang pelanggan.' },
  ],
  whatsappNumber: '6280000000000',
  phoneDisplay: '+62 800-0000-0000',
  phoneHref: '+6280000000000',
  email: 'sales@example.com',
  operatingHours: ['[Jam operasional belum diisi]'],
  social: [],
}
