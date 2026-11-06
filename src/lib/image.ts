import type { ImageAsset } from '../types/index.ts'

export const photo = (src: string, alt: string, width = 960, height = 720): ImageAsset => ({ src, alt, width, height })
