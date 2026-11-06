import { useEffect } from 'react'
import { resolveMeta } from '../lib/seo'
import type { PageMeta } from '../types'

function setTag(selector: string, tagName: 'meta' | 'link', attrs: Record<string, string>) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement(tagName)
    document.head.append(element)
  }
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value))
}

export function useSeo(page: PageMeta) {
  const { path, title, description, image, noindex } = page

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin
    const meta = resolveMeta({ path, title, description, image }, siteUrl)

    document.title = meta.title
    setTag('meta[name="description"]', 'meta', { name: 'description', content: meta.description })
    setTag('link[rel="canonical"]', 'link', { rel: 'canonical', href: meta.canonical })
    setTag('meta[property="og:title"]', 'meta', { property: 'og:title', content: meta.title })
    setTag('meta[property="og:description"]', 'meta', { property: 'og:description', content: meta.description })
    setTag('meta[property="og:url"]', 'meta', { property: 'og:url', content: meta.canonical })
    setTag('meta[property="og:image"]', 'meta', { property: 'og:image', content: meta.image })
    setTag('meta[name="twitter:title"]', 'meta', { name: 'twitter:title', content: meta.title })
    setTag('meta[name="twitter:description"]', 'meta', { name: 'twitter:description', content: meta.description })
    setTag('meta[name="twitter:image"]', 'meta', { name: 'twitter:image', content: meta.image })

    if (noindex) {
      setTag('meta[name="robots"]', 'meta', { name: 'robots', content: 'noindex' })
      return () => document.head.querySelector('meta[name="robots"]')?.remove()
    }
  }, [path, title, description, image, noindex])
}
