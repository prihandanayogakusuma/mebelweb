import { PageHero } from '../components/common/PageHero'
import { Picture } from '../components/common/Picture'
import { FinalCta } from '../components/home/Sections'
import { projects } from '../data/projects'
import { pageMeta } from '../data/seo'
import { useSeo } from '../hooks/useSeo'

export default function ProjectsPage() {
  useSeo(pageMeta.projects)

  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        image={pageMeta.projects.preloadImage}
        title="Furniture kayu di berbagai ruang"
        description="Contoh penerapan furniture untuk restoran, hotel, kantor, dan hunian."
      />
      <section className="section-y">
        <div className="wrap grid gap-x-8 gap-y-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.slug}>
              <Picture image={project.image} priority={index < 2} className="aspect-4/3 w-full object-cover" />
              <p className="mt-4 text-sm font-semibold text-wood-ink">
                {[project.type, project.location, project.year].filter(Boolean).join(' · ')}
              </p>
              <h2 className="mt-1 text-2xl font-medium">{project.title}</h2>
              {project.clientName && <p className="mt-1 text-sm text-muted">Klien: {project.clientName}</p>}
              <p className="mt-2 text-muted">{project.description}</p>
              <p className="mt-2 text-sm text-muted">
                <span className="font-medium text-charcoal">Jenis furniture:</span> {project.furniture.join(', ')}
              </p>
            </article>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  )
}
