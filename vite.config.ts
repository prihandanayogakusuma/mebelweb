import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import { allPages } from './src/data/seo.ts'
import { renderHead } from './src/lib/seo.ts'

const HEAD_BLOCK = /<!--seo:start-->[\s\S]*<!--seo:end-->/

/**
 * Menyuntikkan metadata ke HTML, lalu saat build membuat satu file HTML per
 * halaman (agar pratinjau tautan di WhatsApp/media sosial tepat) beserta
 * sitemap.xml dan robots.txt yang selalu sinkron dengan data produk.
 */
function seoPages(siteUrl: string): Plugin {
  let outDir = 'dist'
  const pages = allPages()
  const headBlock = (index: number) => `<!--seo:start-->${renderHead(pages[index], siteUrl)}<!--seo:end-->`

  return {
    name: 'seo-pages',
    configResolved(config) {
      outDir = config.build.outDir
    },
    transformIndexHtml: (html) => html.replace('<!--seo-->', headBlock(0)),
    closeBundle() {
      const template = readFileSync(join(outDir, 'index.html'), 'utf8')
      pages.forEach((page, index) => {
        if (page.path === '/') return
        const file = join(outDir, page.path, 'index.html')
        mkdirSync(dirname(file), { recursive: true })
        writeFileSync(file, template.replace(HEAD_BLOCK, headBlock(index)))
      })

      const urls = pages.map((page) => `  <url><loc>${siteUrl}${page.path}</loc></url>`).join('\n')
      writeFileSync(
        join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      )
      writeFileSync(join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL
  const siteUrl = (env.VITE_SITE_URL || (vercelHost ? `https://${vercelHost}` : 'http://localhost:4173')).replace(/\/$/, '')

  return {
    plugins: [react(), tailwindcss(), seoPages(siteUrl)],
    define: { 'import.meta.env.VITE_SITE_URL': JSON.stringify(siteUrl) },
  }
})
