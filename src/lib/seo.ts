import { company } from '../data/company.ts'
import type { PageMeta } from '../types/index.ts'

const DEFAULT_IMAGE = '/images/og/og-default.jpg'

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Hasil akhir tag metadata satu halaman, dipakai saat build dan saat navigasi di browser. */
export function resolveMeta(page: PageMeta, siteUrl: string) {
  // Pratinjau tautan di WhatsApp dan media sosial tidak selalu mendukung WebP.
  const image = !page.image || page.image.endsWith('.webp') ? DEFAULT_IMAGE : page.image
  return {
    title: page.path === '/' ? `${company.name} | ${page.title}` : `${page.title} | ${company.name}`,
    description: page.description,
    canonical: `${siteUrl}${page.path === '/' ? '' : page.path}`,
    image: `${siteUrl}${image}`,
  }
}

export function renderHead(page: PageMeta, siteUrl: string) {
  const meta = resolveMeta(page, siteUrl)
  const [title, description, canonical, image, name] = [meta.title, meta.description, meta.canonical, meta.image, company.name].map(escapeHtml)
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="id_ID" />`,
    `<meta property="og:site_name" content="${name}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    ...(page.preloadImage ? [`<link rel="preload" as="image" href="${page.preloadImage}" fetchpriority="high" />`] : []),
    ...(page.path === '/' ? ['<link rel="preload" as="image" href="/images/hero/hero.webp" imagesrcset="/images/hero/hero-800.webp 800w, /images/hero/hero.webp 1600w" imagesizes="100vw" fetchpriority="high" />'] : []),
  ].join('\n    ')
}
