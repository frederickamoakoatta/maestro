import type { NavItem } from '../../types'
import {
  companyFeature,
  companyMegaMenu,
  industriesFeature,
  industriesMegaMenu,
  solutionsFeature,
  solutionsMegaMenu,
} from './mega-menus'

export const headerNav: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  {
    id: 'solutions',
    label: 'Solutions',
    megaMenu: solutionsMegaMenu,
    megaFeature: solutionsFeature,
  },
  {
    id: 'industries',
    label: 'Industries',
    megaMenu: industriesMegaMenu,
    megaFeature: industriesFeature,
  },
  {
    id: 'company',
    label: 'Company',
    megaMenu: companyMegaMenu,
    megaFeature: companyFeature,
  },
  { id: 'contact', label: 'Contact Us', href: '/contact' },
]
