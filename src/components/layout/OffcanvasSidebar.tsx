import { Link } from 'react-router-dom'
import { MAESTRO_LOGO_WHITE_HEADER } from '../../data/brand'
import { siteContact } from '../../data/contact'
import { socialLinks } from '../../data/navigation'
import { Icon } from '../ui/Icon'

interface OffcanvasSidebarProps {
  open: boolean
  onClose: () => void
}

export function OffcanvasSidebar({ open, onClose }: OffcanvasSidebarProps) {
  return (
    <>
      <div
        className={`maestro-offcanvas-overlay${open ? ' is-open' : ''}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`maestro-offcanvas${open ? ' is-open' : ''}`}
        aria-hidden={!open}
        aria-label="Site information"
      >
        <div className="maestro-offcanvas__top">
          <Link to="/" className="maestro-offcanvas__logo cursor-big" onClick={onClose}>
            <img src={MAESTRO_LOGO_WHITE_HEADER} alt="Maestro" />
          </Link>
          <button type="button" className="maestro-offcanvas__close cursor-small" onClick={onClose} aria-label="Close">
            <Icon name="x" weight="bold" />
          </button>
        </div>

        <div className="maestro-offcanvas__body">
          <div>
            <span className="maestro-offcanvas__eyebrow">About Maestro</span>
            <h4 className="maestro-offcanvas__title">One platform for the full logistics journey</h4>
            <p className="maestro-offcanvas__text">
              Maestro is a cloud-based logistics platform for bookings, quotations, payments, fleet, dispatch,
              deliveries and reporting — built by theSOFTtribe for operators who need every move live.
            </p>
          </div>

          <div>
            <span className="maestro-offcanvas__eyebrow">Contact</span>
            <ul className="maestro-offcanvas__contacts">
              <li>
                <a href={siteContact.mapsUrl} target="_blank" rel="noreferrer noopener" className="maestro-offcanvas__contact">
                  <span className="maestro-offcanvas__contact-icon" aria-hidden="true">
                    <Icon name="map-pin" weight="bold" />
                  </span>
                  <span>{siteContact.address}</span>
                </a>
              </li>
              <li>
                <a href={siteContact.phoneHref} className="maestro-offcanvas__contact">
                  <span className="maestro-offcanvas__contact-icon" aria-hidden="true">
                    <Icon name="phone" weight="bold" />
                  </span>
                  <span>{siteContact.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteContact.email}`} className="maestro-offcanvas__contact">
                  <span className="maestro-offcanvas__contact-icon" aria-hidden="true">
                    <Icon name="envelope-simple" weight="bold" />
                  </span>
                  <span>{siteContact.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="maestro-offcanvas__bottom">
          <Link to="/contact" className="maestro-offcanvas__cta cursor-small" onClick={onClose}>
            Request a Demo
            <Icon name="caret-right" weight="bold" />
          </Link>
          <div className="maestro-offcanvas__social">
            {socialLinks.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                className="maestro-offcanvas__social-link cursor-small"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={link.icon}
              >
                <Icon name={link.icon} weight={link.weight} />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}
