interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  light?: boolean
}

export function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p className={`mb-4 flex items-center gap-3 text-sm font-semibold ${light ? 'text-oak' : 'text-wood-ink'}`}>
      <span className="h-px w-8 bg-current" aria-hidden="true" />
      {children}
    </p>
  )
}

export function SectionHeading({ eyebrow, title, description, light = false }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={`text-[2rem] font-medium md:text-5xl ${light ? 'text-ivory' : ''}`}>{title}</h2>
      {description && <p className={`mt-4 text-lg ${light ? 'text-cream/90' : 'text-muted'}`}>{description}</p>}
    </div>
  )
}
