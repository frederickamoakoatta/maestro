import type { NavItem } from '../../types'
import {
  companyMegaMenu,
  industriesMegaMenu,
  solutionsMegaMenu,
} from './mega-menus'

export const headerNav: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  {
    id: 'solutions',
    label: 'Solutions',
    megaMenu: solutionsMegaMenu,
  },
  {
    id: 'industries',
    label: 'Industries',
    megaMenu: industriesMegaMenu,
  },
  {
    id: 'company',
    label: 'Company',
    megaMenu: companyMegaMenu,
  },
  { id: 'contact', label: 'Contact Us', href: '/contact' },
]
