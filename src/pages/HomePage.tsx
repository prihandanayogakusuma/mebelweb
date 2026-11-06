import { JsonLd } from '../components/common/JsonLd'
import { CategoryMarquee, Hero } from '../components/home/Hero'
import {
  CategoryGrid,
  CompanyIntro,
  CustomBanner,
  FeaturedProducts,
  FinalCta,
  LocationPreview,
  ManufacturingProcess,
  ProjectsPreview,
  ServicesPreview,
  Testimonials,
  WhyChooseUs,
} from '../components/home/Sections'
import { company } from '../data/company'
import { locations } from '../data/locations'
import { pageMeta } from '../data/seo'
import { useSeo } from '../hooks/useSeo'

export default function HomePage() {
  useSeo(pageMeta.home)

  return (
    <>
      {/* Schema hanya dipasang setelah data perusahaan valid. */}
      {!company.isPlaceholderData && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FurnitureStore',
            name: company.legalName ?? company.name,
            description: company.summary,
            url: import.meta.env.VITE_SITE_URL,
            telephone: company.phoneHref,
            email: company.email,
            address: locations[0].address,
            sameAs: company.social.map((item) => item.url),
          }}
        />
      )}
      <Hero />
      <CategoryMarquee />
      <CompanyIntro />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <ServicesPreview />
      <CustomBanner />
      <ManufacturingProcess />
      <ProjectsPreview />
      <Testimonials />
      <LocationPreview />
      <FinalCta />
    </>
  )
}
