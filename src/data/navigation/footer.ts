import type { FooterColumn } from '../../types'
import { companyFooterLinks, industryLinks, resourceLinks, solutionLinks } from './shared'

export const footerColumns: FooterColumn[] = [
  {
    id: 'solutions',
    title: 'Solutions',
    links: solutionLinks,
  },
  {
    id: 'industries',
    title: 'Industries',
    links: industryLinks,
  },
  {
    id: 'company',
    title: 'Company',
    links: companyFooterLinks,
  },
  {
    id: 'resources',
    title: 'Resources',
    links: resourceLinks,
  },
]

export const footerColumnLayout: Record<string, { gridClass: string; linkColumns?: 1 | 2 }> = {
  solutions: { gridClass: 'col-xl-5 col-lg-6', linkColumns: 2 },
  industries: { gridClass: 'col-xl-2 col-lg-3 col-md-4 col-sm-6', linkColumns: 1 },
  company: { gridClass: 'col-xl-3 col-lg-3 col-md-4 col-sm-6', linkColumns: 1 },
  resources: { gridClass: 'col-xl-2 col-lg-3 col-md-4 col-sm-6', linkColumns: 1 },
}
