import type { RouteDefinition } from '../../types'
import { companyFooterLinks, industryLinks, resourceLinks, solutionLinks } from './shared'

function toRoutes(links: { id: string; label: string; href?: string }[]): RouteDefinition[] {
  return links
    .filter((link): link is { id: string; label: string; href: string } => Boolean(link.href))
    .map((link) => ({
      id: link.id,
      path: link.href,
      title: link.label,
    }))
}

export const routes: RouteDefinition[] = [
  ...toRoutes(solutionLinks),
  ...toRoutes(industryLinks),
  ...toRoutes(companyFooterLinks),
  ...toRoutes(resourceLinks),
]
