import { PageHero } from '../components/common/PageHero'
import { Picture } from '../components/common/Picture'
import { SectionHeading } from '../components/common/SectionHeading'
import { FinalCta } from '../components/home/Sections'
import { company } from '../data/company'
import { advantages } from '../data/content'
import { pageMeta } from '../data/seo'
import { useSeo } from '../hooks/useSeo'
import { photo } from '../lib/image'

export default function AboutPage() {
  useSeo(pageMeta.about)

  return (
    <>
      <PageHero eyebrow="About Us" title={`Mengenal ${company.name}`} description={company.summary} image={pageMeta.about.preloadImage} />

      <section className="section-y">
        <div className="wrap grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-medium">Profil perusahaan</h2>
            <div className="mt-5 space-y-4 text-lg text-muted">
              {company.profile.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {company.history && <p>{company.history}</p>}
              {company.productionCapacity && <p>{company.productionCapacity}</p>}
            </div>
          </div>
          <Picture
            image={photo('/images/workshop/gudang-kayu.webp', 'Foto contoh gudang kayu perusahaan')}
            className="aspect-4/3 w-full object-cover"
          />
        </div>
      </section>

      {(company.vision || company.mission) && (
        <section className="section-y bg-cream">
          <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
            {company.vision && (
              <div>
                <h2 className="text-3xl font-medium">Visi</h2>
                <p className="mt-4 font-serif text-2xl leading-snug text-walnut">{company.vision}</p>
              </div>
            )}
            {company.mission && (
              <div>
                <h2 className="text-3xl font-medium">Misi</h2>
                <ul className="mt-4 divide-y divide-walnut/15 text-lg text-muted">
                  {company.mission.map((item) => (
                    <li key={item} className="py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {company.values && (
        <section className="section-y">
          <div className="wrap">
            <SectionHeading title="Nilai perusahaan" />
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {company.values.map((value) => (
                <div key={value.title} className="border-t border-walnut/25 pt-4">
                  <h3 className="text-xl font-medium">{value.title}</h3>
                  <p className="mt-2 text-muted">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-y bg-cream">
        <div className="wrap">
          <SectionHeading title="Keunggulan kami" />
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-1.5 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
