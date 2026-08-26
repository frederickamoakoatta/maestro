import { Link } from 'react-router-dom'
import type { MegaMenuColumn, MegaMenuFeature } from '../../types'
import { asset } from '../../utils/assets'
import { Icon } from '../ui/Icon'

interface MegaMenuDropdownProps {
  columns: MegaMenuColumn[]
  feature?: MegaMenuFeature
  mobile?: boolean
  open?: boolean
  onNavigate?: () => void
}

export function MegaMenuDropdown({ columns, feature, mobile, open, onNavigate }: MegaMenuDropdownProps) {
  const stateClass = mobile ? (open ? 'mega-menu--mobile-open' : 'mega-menu--mobile-closed') : ''
  const cardClass = feature ? 'mega-menu__card mega-menu__card--with-feature' : 'mega-menu__card'

  return (
    <div className={`mega-menu ${stateClass}`}>
      <div className={cardClass}>
        <div className="mega-menu__links">
          {columns.map((column) => (
            <div key={column.title} className="mega-menu__column">
              <p className="mega-menu__eyebrow">{column.title}</p>
              <ul className="mega-menu__list">
                {column.items.map((item) => (
                  <li key={item.id}>
                    <Link to={item.href ?? '#'} className="mega-menu__item" onClick={onNavigate}>
                      <span className="mega-menu__icon" aria-hidden="true">
                        <Icon name={item.icon ?? 'caret-right'} />
                      </span>
                      <span className="mega-menu__text">
                        <span className="mega-menu__label">{item.label}</span>
                        {item.description && <span className="mega-menu__description">{item.description}</span>}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {feature && (
          <aside className="mega-menu__feature">
            <div className="mega-menu__feature-copy">
              <p className="mega-menu__feature-title">{feature.title}</p>
              <p className="mega-menu__feature-text">{feature.description}</p>
            </div>
            <Link to={feature.cta.href} className="mega-menu__feature-media" onClick={onNavigate}>
              <img src={asset(feature.image)} alt="" loading="lazy" />
            </Link>
            <Link to={feature.cta.href} className="mega-menu__feature-cta" onClick={onNavigate}>
              {feature.cta.label}
              <Icon name="arrow-up-right" weight="bold" />
            </Link>
          </aside>
        )}
      </div>
    </div>
  )
}
