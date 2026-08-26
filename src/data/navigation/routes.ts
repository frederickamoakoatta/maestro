import type { RouteDefinition } from '../../types'
import { companyFooterLinks, resourceLinks } from './shared'

function toRoutes(links: { id: string; label: string; href?: string }[]): RouteDefinition[] {
  return links
    .filter((link): link is { id: string; label: string; href: string } => Boolean(link.href))
    .filter((link) => !link.href.includes('#'))
    .map((link) => ({
      id: link.id,
      path: link.href,
      title: link.label,
    }))
}

/** Placeholder routes for pages not yet built (company + resources except FAQs/contact). */
export const routes: RouteDefinition[] = [
  ...toRoutes(companyFooterLinks),
  ...toRoutes(resourceLinks),
]
