import type { CSSProperties } from 'react'

export function asset(path: string): string {
  return `/assets/${path.replace(/^\/?assets\//, '')}`
}

export function bgStyle(imagePath: string): CSSProperties {
  return { backgroundImage: `url(${asset(imagePath)})` }
}
