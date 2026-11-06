import type { CompanyLocation } from '../types'

/**
 * DATA CONTOH. Alamat dan koordinat wajib diberikan pemilik perusahaan.
 * Isi `address` dan `mapQuery` agar peta, View Location, dan Get Directions aktif.
 * Tambahkan objek baru untuk Showroom jika ada.
 */
export const locations: CompanyLocation[] = [
  {
    id: 'head-office',
    label: 'Head Office',
    name: 'Kantor Pusat',
    address: '[Alamat kantor belum dikonfirmasi]',
    mapQuery: '',
  },
  {
    id: 'factory',
    label: 'Factory / Workshop',
    name: 'Pabrik dan Workshop',
    address: '[Alamat pabrik belum dikonfirmasi]',
    mapQuery: '',
  },
]
