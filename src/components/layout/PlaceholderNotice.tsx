import { company } from '../../data/company'

export function PlaceholderNotice() {
  if (!company.isPlaceholderData) return null
  return (
    <p className="bg-oak px-4 py-1.5 text-center text-xs font-medium text-charcoal">
      Versi contoh: nama perusahaan, kontak, produk, dan foto masih data contoh, bukan data perusahaan sebenarnya.
    </p>
  )
}
