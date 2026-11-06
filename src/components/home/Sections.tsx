import { ArrowRight, ArrowUpRight, BadgeCheck, Hammer, MapPin, Palette, Ruler, Trees } from 'lucide-react'
import { Link } from 'react-router'
import { categories } from '../../data/categories'
import { company } from '../../data/company'
import { advantages, processSteps, testimonials } from '../../data/content'
import { locations } from '../../data/locations'
import { products } from '../../data/products'
import { projects } from '../../data/projects'
import { services } from '../../data/services'
import { photo } from '../../lib/image'
import { serviceMessage } from '../../lib/whatsapp'
import { ButtonLink } from '../common/Button'
import { Picture, SampleTag } from '../common/Picture'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'
import { WhatsAppButton } from '../common/WhatsAppButton'
import { LocationActions, LocationMap } from '../contact/LocationCard'
import { ProductCard } from '../products/ProductCard'

const textLink = 'inline-flex items-center gap-1.5 text-sm font-semibold text-walnut underline decoration-oak decoration-2 underline-offset-4 hover:text-wood-ink'
const zoom = 'size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'
const shade = 'absolute inset-0 bg-linear-to-t from-charcoal/95 via-charcoal/45 to-charcoal/5'

function MoreLink({ to, children }: { to: string; children: string }) {
  return (
    <Link to={to} className={textLink}>
      {children} <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  )
}

export function CompanyIntro() {
  return (
    <section className="section-y overflow-hidden">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative pb-14 sm:pr-16">
          <Picture
            image={photo('/images/workshop/workshop-utama.webp', 'Foto contoh workshop produksi furniture')}
            hideTag
            className="aspect-4/3 w-full object-cover"
          />
          <Picture
            image={photo('/images/process/perakitan.webp', 'Foto contoh tukang kayu mengukur komponen')}
            wrapperClassName="absolute! right-0 bottom-0 w-1/2 border-8 border-ivory"
            className="aspect-4/3 w-full object-cover"
          />
        </Reveal>
        <Reveal delay={120}>
          <SectionHeading eyebrow="Tentang kami" title="Dari kayu mentah sampai furniture siap pakai" />
          <p className="mt-5 text-lg text-muted">{company.profile[0]}</p>
          <p className="mt-3 text-lg text-muted">{company.profile[1]}</p>
          <div className="mt-7">
            <MoreLink to="/about">Kenali perusahaan kami</MoreLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const tileSpan = ['col-span-2 row-span-2', '', '', '', '', 'col-span-2', '', '']

export function CategoryGrid() {
  return (
    <section className="section-y bg-cream">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Kategori produk" title="Temukan furniture untuk setiap ruang" />
          <MoreLink to="/products">Lihat semua produk</MoreLink>
        </div>
        <Reveal className="mt-10">
          <ul className="grid auto-rows-[11rem] grid-cols-2 gap-3 md:gap-4 lg:auto-rows-[15rem] lg:grid-cols-4">
            {categories.map((category, index) => (
              <li key={category.slug} className={tileSpan[index]}>
                <Link to={`/products?category=${category.slug}`} className="group relative block size-full overflow-hidden bg-walnut">
                  <img
                    src={category.image.src}
                    alt={category.image.alt}
                    width={category.image.width}
                    height={category.image.height}
                    loading="lazy"
                    decoding="async"
                    className={zoom}
                  />
                  <span className={shade} aria-hidden="true" />
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 md:p-5">
                    <span>
                      <h3 className={`font-medium text-ivory ${index === 0 ? 'text-2xl md:text-4xl' : 'text-lg md:text-xl'}`}>{category.name}</h3>
                      <span className={`mt-1 text-sm text-cream/90 ${index === 0 ? 'block' : 'hidden md:block'}`}>{category.description}</span>
                    </span>
                    <ArrowUpRight className="size-5 shrink-0 text-oak transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function FeaturedProducts() {
  return (
    <section className="section-y">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Produk unggulan" title="Pilihan dari katalog kami" />
          <MoreLink to="/products">Lihat semua produk</MoreLink>
        </div>
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products
            .filter((product) => product.featured)
            .map((product, index) => (
              <Reveal key={product.slug} delay={index * 80} className="flex">
                <ProductCard product={product} />
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  )
}

const advantageIcons = [Trees, Hammer, Palette, Ruler, BadgeCheck]

export function WhyChooseUs() {
  return (
    <section className="bg-walnut">
      <div className="grid lg:grid-cols-2">
        <Picture
          image={photo('/images/process/finishing.webp', 'Foto contoh tukang kayu menyerut papan')}
          wrapperClassName="min-h-72 lg:min-h-full"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="px-5 py-16 md:px-12 lg:py-24 xl:px-20">
          <SectionHeading
            light
            eyebrow="Why choose us"
            title="Yang kami jaga di setiap pesanan"
            description="Furniture kayu yang baik ditentukan oleh material, pengerjaan, dan perhatian pada detail."
          />
          <ul className="mt-10 space-y-6">
            {advantages.map((item, index) => {
              const Icon = advantageIcons[index % advantageIcons.length]
              return (
                <li key={item.title}>
                  <Reveal delay={index * 60} className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-oak/50 text-oak">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <h3 className="text-xl font-medium text-ivory">{item.title}</h3>
                      <span className="mt-1 block text-cream/85">{item.description}</span>
                    </span>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function ServicesPreview() {
  return (
    <section className="section-y">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Services" title="Layanan untuk rumah dan proyek" />
          <MoreLink to="/services">Lihat semua layanan</MoreLink>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services
            .filter((service) => service.featured)
            .map((service, index) => (
              <Reveal key={service.slug} delay={index * 100}>
                <Link to="/services" className="group relative block aspect-4/5 overflow-hidden bg-walnut">
                  <img
                    src={service.image.src}
                    alt={service.image.alt}
                    width={service.image.width}
                    height={service.image.height}
                    loading="lazy"
                    decoding="async"
                    className={zoom}
                  />
                  <span className={shade} aria-hidden="true" />
                  <span className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-2xl font-medium text-ivory">{service.title}</h3>
                    <span className="mt-2 block text-sm text-cream/90">{service.description}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  )
}

export function CustomBanner() {
  return (
    <section className="bg-oak">
      <div className="wrap grid items-center gap-8 py-12 md:grid-cols-[1.3fr_1fr] md:gap-14 lg:py-16">
        <Reveal>
          <h2 className="text-[2rem] font-medium text-charcoal md:text-5xl">Punya ukuran atau desain sendiri?</h2>
          <p className="mt-4 max-w-xl text-lg text-charcoal">
            Kirimkan foto referensi dan ukuran ruang Anda lewat WhatsApp, lalu kami bantu wujudkan dalam kayu.
          </p>
          <div className="mt-6">
            <WhatsAppButton source="custom_banner" label="Konsultasi Custom" message={serviceMessage('Custom Furniture')} className="px-7 py-3 text-base" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Picture
            image={photo('/images/products/meja-konsol-custom-1.webp', 'Foto contoh kabinet laci custom')}
            className="aspect-4/3 w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}

export function ManufacturingProcess() {
  return (
    <section className="section-y bg-cream">
      <div className="wrap">
        <SectionHeading eyebrow="Manufacturing process" title="Enam tahap dari kayu sampai furniture" />
        <ol className="-mx-5 mt-10 flex snap-x snap-mandatory scroll-pl-5 gap-4 overflow-x-auto px-5 pb-3 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
          {processSteps.map((step, index) => (
            <li key={step.title} className="w-[78%] shrink-0 snap-start md:w-auto">
              <Reveal delay={(index % 3) * 90}>
                <div className="relative">
                  <Picture image={step.image} className="aspect-3/2 w-full object-cover" />
                  <span className="absolute top-0 left-0 flex size-11 items-center justify-center bg-walnut font-serif text-xl text-oak">{index + 1}</span>
                </div>
                <h3 className="mt-4 text-xl font-medium">{step.title}</h3>
                <p className="mt-1 text-muted">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function ProjectsPreview() {
  return (
    <section className="section-y">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Our projects" title="Furniture di berbagai ruang" />
          <MoreLink to="/projects">Lihat semua proyek</MoreLink>
        </div>
        <Reveal className="mt-10">
          <div className="grid gap-4 md:auto-rows-[17rem] md:grid-cols-5">
            {projects.slice(0, 3).map((project, index) => (
              <Link
                key={project.slug}
                to="/projects"
                className={`group relative block overflow-hidden bg-walnut max-md:aspect-4/3 ${index === 0 ? 'md:col-span-3 md:row-span-2' : 'md:col-span-2'}`}
              >
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  loading="lazy"
                  decoding="async"
                  className={zoom}
                />
                <span className={shade} aria-hidden="true" />
                <SampleTag />
                <span className="absolute inset-x-0 bottom-0 p-5 pr-24">
                  <span className="text-sm font-semibold text-oak">{project.type}</span>
                  <h3 className={`mt-1 font-medium text-ivory ${index === 0 ? 'text-3xl' : 'text-xl'}`}>{project.title}</h3>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/** Hanya tampil bila ada testimoni asli di data/content.ts. */
export function Testimonials() {
  if (testimonials.length === 0) return null
  return (
    <section className="section-y bg-cream">
      <div className="wrap">
        <SectionHeading eyebrow="Testimonials" title="Kata pelanggan kami" />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.author} className="border-t border-walnut/25 pt-5">
              <blockquote className="font-serif text-lg text-walnut">“{item.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-muted">
                {item.author}
                {item.role && `, ${item.role}`}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LocationPreview() {
  const location = locations[0]
  return (
    <section className="section-y border-t border-line">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow="Lokasi" title="Kunjungi kantor dan workshop kami" />
          <p className="mt-5 flex items-start gap-2 text-lg text-muted">
            <MapPin className="mt-1.5 size-5 shrink-0 text-wood-ink" aria-hidden="true" />
            {location.address}
          </p>
          <div className="mt-6">
            <LocationActions location={location} />
          </div>
          <div className="mt-6">
            <MoreLink to="/contact">Semua lokasi dan kontak</MoreLink>
          </div>
        </div>
        <LocationMap location={location} />
      </div>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <img src="/images/textures/darkwood.webp" alt="" width={1400} height={800} loading="lazy" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-charcoal/80" aria-hidden="true" />
      <div className="wrap relative section-y text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-4xl font-medium text-ivory md:text-6xl">Sedang mencari furniture kayu?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream/90">Ceritakan kebutuhan Anda, dan tim sales kami akan membantu lewat WhatsApp.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppButton source="final_cta" className="px-7 py-3 text-base" />
            <ButtonLink to="/products" variant="outlineLight" className="px-7 py-3 text-base">
              Explore Products
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
