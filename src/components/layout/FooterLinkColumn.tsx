import { Link } from 'react-router-dom'
import type { NavItem } from '../../types'

interface FooterLinkColumnProps {
  title: string
  links: NavItem[]
  columns?: 1 | 2
}

export function FooterLinkColumn({ title, links, columns = 1 }: FooterLinkColumnProps) {
  return (
    <div className="maestro-footer__column">
      <h5 className="maestro-footer__column-title">{title}</h5>
      <ul className={`maestro-footer__link-list${columns === 2 ? ' maestro-footer__link-list--two-col' : ''}`}>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.href ?? '#'} className="maestro-footer__link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
