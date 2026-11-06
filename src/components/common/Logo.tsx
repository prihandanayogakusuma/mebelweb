import { Link } from 'react-router'
import { company } from '../../data/company'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="inline-flex items-center gap-2.5" aria-label={`${company.name}, kembali ke Home`}>
      <img src="/favicon.svg" alt="" width={32} height={32} className="size-8" />
      <span className={`font-serif text-xl font-semibold ${light ? 'text-ivory' : 'text-walnut'}`}>{company.name}</span>
    </Link>
  )
}
