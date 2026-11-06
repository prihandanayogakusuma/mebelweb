import { Eyebrow } from './SectionHeading'

interface PageHeroProps {
  eyebrow: string
  title: string
  description?: string
  /** Foto latar, berupa path di folder public. */
  image?: string
}

export function PageHero({ eyebrow, title, description, image = '/images/textures/darkwood.webp' }: PageHeroProps) {
  return (
    <header className="relative overflow-hidden bg-walnut">
      <img src={image} alt="" width={960} height={720} fetchPriority="high" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-r from-charcoal/90 via-charcoal/75 to-charcoal/45" aria-hidden="true" />
      <div className="wrap relative animate-rise py-16 md:py-24">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl text-4xl font-medium text-ivory md:text-6xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg text-cream/90">{description}</p>}
      </div>
    </header>
  )
}
