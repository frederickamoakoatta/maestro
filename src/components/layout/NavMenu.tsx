import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { NavItem } from '../../types'
import { MAESTRO_LOGO } from '../../data/brand'
import { headerNav } from '../../data/navigation'
import { Icon } from '../ui/Icon'
import { MegaMenuDropdown } from './MegaMenuDropdown'

interface NavMenuProps {
  mobile?: boolean
  onNavigate?: () => void
}

function NavLink({ item, mobile, onNavigate }: { item: NavItem; mobile?: boolean; onNavigate?: () => void }) {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const isActive = item.href === location.pathname

  const handleNavigate = () => {
    setOpen(false)
    setDismissed(true)
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    onNavigate?.()
  }

  if (item.megaMenu?.length) {
    return (
      <li
        className={`nav-menu__item has-submenu has-mega-menu${open ? ' active' : ''}${dismissed ? ' has-mega-menu--dismissed' : ''}`}
        onMouseLeave={() => setDismissed(false)}
      >
        <button
          type="button"
          className="nav-menu__link maestro-nav-link fw-medium tw-pe-4 border-0 bg-transparent text-start"
          onClick={() => mobile && setOpen((prev) => !prev)}
          aria-expanded={mobile ? open : undefined}
        >
          {item.label}
          <Icon name="caret-down" className="maestro-nav-chevron" weight="bold" />
        </button>
        <MegaMenuDropdown
          columns={item.megaMenu}
          feature={item.megaFeature}
          mobile={mobile}
          open={open}
          onNavigate={handleNavigate}
        />
      </li>
    )
  }

  return (
    <li className={`nav-menu__item ${isActive ? 'activePage' : ''}`}>
      <Link to={item.href ?? '#'} className="nav-menu__link maestro-nav-link fw-medium" onClick={handleNavigate}>
        {item.label}
      </Link>
    </li>
  )
}

export function NavMenu({ mobile, onNavigate }: NavMenuProps) {
  return (
    <ul
      className={`nav-menu cursor-small d-lg-flex align-items-center ${mobile ? 'nav-menu--mobile d-block tw-mt-8' : 'xl-tw-gap-12 tw-gap-4'}`}
    >
      {headerNav.map((item) => (
        <NavLink key={item.id} item={item} mobile={mobile} onNavigate={onNavigate} />
      ))}
    </ul>
  )
}

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={`mobile-menu d-lg-none d-block scroll-sm position-fixed bg-white tw-w-300-px tw-h-screen overflow-y-auto tw-p-6 tw-z-999 tw-pb-68 ${open ? 'active' : ''}`}
    >
      <button
        type="button"
        className="close-button position-absolute tw-end-0 top-0 tw-me-2 tw-mt-2 tw-w-605 tw-h-605 rounded-circle d-flex justify-content-center align-items-center text-main-two-600 bg-neutral-200 hover-bg-main-two-600 hover-text-white"
        onClick={onClose}
      >
        <Icon name="x" />
      </button>

      <div className="mobile-menu__inner">
        <Link to="/" className="mobile-menu__logo d-block tw-mb-6" onClick={onClose}>
          <img src={MAESTRO_LOGO} alt="Maestro" style={{ height: 36 }} />
        </Link>
        <div className="mobile-menu__menu">
          <NavMenu mobile onNavigate={onClose} />
        </div>
      </div>
    </div>
  )
}
