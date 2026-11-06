import { company } from '../data/company'

export const whatsappUrl = (message: string) =>
  `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`

export const generalMessage = () =>
  `Halo, saya mengunjungi website ${company.name}.\nSaya ingin bertanya mengenai produk dan layanan furniture.\nTerima kasih.`

export const productMessage = (productName: string) =>
  `Halo, saya mengunjungi website ${company.name}.\nSaya tertarik dengan produk ${productName}.\nMohon informasi harga, spesifikasi, dan ketersediaan produk tersebut.\nTerima kasih.`

export const serviceMessage = (serviceTitle: string) =>
  `Halo, saya mengunjungi website ${company.name}.\nSaya ingin bertanya mengenai layanan ${serviceTitle}.\nTerima kasih.`
