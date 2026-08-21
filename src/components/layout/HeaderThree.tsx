import { Link } from 'react-router-dom'
import { MAESTRO_LOGO_WHITE_HEADER } from '../../data/brand'
import { asset } from '../../utils/assets'
import { Icon } from '../ui/Icon'
import { NavMenu } from './NavMenu'

interface HeaderThreeProps {
  isScrolled: boolean
  isMobileMenuOpen?: boolean
  onToggleMobileMenu: () => void
  onToggleOffcanvas: () => void
}

export function HeaderThree({ isScrolled, isMobileMenuOpen = false, onToggleMobileMenu, onToggleOffcanvas }: HeaderThreeProps) {
  return (
    <header className={`transition-all maestro-header links-white${isScrolled ? ' maestro-header--scrolled' : ''}`}>
      <nav
        className={`maestro-header-nav d-flex align-items-stretch${isScrolled ? ' maestro-header-nav--solid' : ' maestro-header-nav--glass'}`}
      >
        <div className="tw-container-1760-px tw-px-4 pe-lg-0 mx-auto maestro-header-inner d-flex align-items-stretch flex-grow-1">
          <Link
            to="/"
            className="cursor-big tw-ps-10 tw-pe-14 hexagon-right maestro-header-logo"
          >
            <img src={MAESTRO_LOGO_WHITE_HEADER} alt="Maestro" />
          </Link>

          <div className="d-flex align-items-stretch justify-content-end flex-grow-1 tw-gap-6 tw-pe-6 py-lg-0 py-3 maestro-header-nav-main">
            <div className="header-menu d-lg-block d-none">
              <NavMenu />
            </div>

            <div className="d-flex align-items-center tw-gap-4">
              <button
                type="button"
                className="offcanvas-bar-icon cursor-small hover--translate-y-1 active--translate-y-05 tw-duration-150 xs-d-block d-none border-0 bg-transparent"
                onClick={onToggleOffcanvas}
                aria-label="Open contact panel"
              >
                <img src={asset('images/icons/bars-two.svg')} alt="" />
              </button>

              <button
                type="button"
                className="toggle-mobileMenu leading-none d-lg-none text-white tw-text-9 border-0 bg-transparent"
                onClick={onToggleMobileMenu}
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Icon name="list" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
