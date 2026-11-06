import { photo } from '../lib/image'
import type { Project } from '../types'

/**
 * DATA CONTOH, bukan proyek nyata. Isi `clientName`, `location`, dan `year`
 * hanya jika datanya benar dan perusahaan memiliki izin untuk menampilkannya.
 */
export const projects: Project[] = [
  {
    slug: 'restoran',
    title: 'Contoh Proyek Restoran',
    type: 'Restoran',
    description: 'Contoh penataan meja dan kursi makan untuk area restoran.',
    furniture: ['Meja makan', 'Kursi makan'],
    image: photo('/images/projects/restoran.webp', 'Foto contoh proyek restoran'),
  },
  {
    slug: 'kamar-hotel',
    title: 'Contoh Proyek Kamar Hotel',
    type: 'Hotel',
    description: 'Contoh dipan dan bangku untuk kamar hotel.',
    furniture: ['Dipan', 'Bangku kamar'],
    image: photo('/images/projects/kamar-hotel.webp', 'Foto contoh proyek kamar hotel'),
  },
  {
    slug: 'kantor',
    title: 'Contoh Proyek Ruang Kantor',
    type: 'Kantor',
    description: 'Contoh meja dan kursi untuk ruang kantor.',
    furniture: ['Meja', 'Kursi'],
    image: photo('/images/projects/kantor.webp', 'Foto contoh proyek kantor'),
  },
  {
    slug: 'kafe',
    title: 'Contoh Proyek Kafe',
    type: 'Kafe',
    description: 'Contoh meja bar dan kursi bar untuk kafe.',
    furniture: ['Meja bar', 'Kursi bar'],
    image: photo('/images/projects/kafe.webp', 'Foto contoh proyek kafe'),
  },
  {
    slug: 'vila',
    title: 'Contoh Proyek Teras Vila',
    type: 'Hunian',
    description: 'Contoh sofa dan kursi santai untuk area teras.',
    furniture: ['Sofa teras', 'Kursi santai'],
    image: photo('/images/projects/vila.webp', 'Foto contoh proyek teras vila'),
  },
  {
    slug: 'lobi',
    title: 'Contoh Proyek Lobi',
    type: 'Komersial',
    description: 'Contoh meja dan kursi tunggu untuk area lobi.',
    furniture: ['Meja', 'Kursi tunggu'],
    image: photo('/images/projects/lobi.webp', 'Foto contoh proyek lobi'),
  },
]
