import { ArrowRight, Check } from 'lucide-react'
import { categories } from '../../data/categories'
import { company } from '../../data/company'
import { ButtonLink } from '../common/Button'
import { SampleTag } from '../common/Picture'
import { Eyebrow } from '../common/SectionHeading'
import { WhatsAppButton } from '../common/WhatsAppButton'

const highlights = ['Bisa custom ukuran', 'Untuk rumah dan proyek', 'Konsultasi lewat WhatsApp']

export function Hero() {
  return (
    <section className="relative -mt-16 flex min-h-[40rem] items-end overflow-hidden bg-charcoal lg:-mt-[4.5rem] lg:h-[100svh] lg:max-h-[58rem]">
      <img
        src="/images/hero/hero.webp"
        srcSet="/images/hero/hero-800.webp 800w, /images/hero/hero.webp 1600w"
        sizes="100vw"
        alt="Foto contoh meja kayu panjang di ruangan bermandikan cahaya matahari"
        width={1600}
        height={1060}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover lg:animate-slow-zoom motion-reduce:animate-none"
      />
      <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/55 to-charcoal/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-linear-to-r from-charcoal/70 to-transparent" aria-hidden="true" />
      <SampleTag />

      <div className="wrap relative pt-32 pb-12 lg:pb-16">
        <div className="max-w-4xl animate-rise">
          <Eyebrow light>{`${company.name} · Produsen furniture kayu`}</Eyebrow>
          <h1 className="text-[2.9rem] leading-[1.05] font-medium text-ivory sm:text-6xl lg:text-[5.25rem]">{company.heroHeadline}</h1>
          <p className="mt-6 max-w-xl text-lg text-cream/90 md:text-xl">{company.heroDescription}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/products" variant="accent" className="px-7 py-3 text-base">
              Explore Products <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <WhatsAppButton source="hero" className="px-7 py-3 text-base" />
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-ivory/20 pt-5 text-sm text-cream/90">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check className="size-4 text-oak" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** Pita nama kategori yang bergerak perlahan. Murni dekoratif. */
export function CategoryMarquee() {
  const names = categories.map((category) => category.name)
  return (
    <div className="overflow-hidden bg-walnut py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10 pr-10 font-serif will-change-transform text-xl whitespace-nowrap text-oak motion-reduce:animate-none">
        {[...names, ...names].map((name, index) => (
          <span key={index} className="flex items-center gap-10">
            {name}
            <span className="size-1.5 rounded-full bg-oak/60" />
          </span>
        ))}
      </div>
    </div>
  )
}
