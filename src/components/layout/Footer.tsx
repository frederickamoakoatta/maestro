import { Link } from 'react-router-dom'
import { MAESTRO_LOGO_WHITE_HEADER } from '../../data/brand'
import { siteContact } from '../../data/contact'
import { footerColumnLayout, footerColumns } from '../../data/navigation/footer'
import { socialLinks } from '../../data/navigation/shared'
import { Icon } from '../ui/Icon'
import { FooterLinkColumn } from './FooterLinkColumn'

export function Footer() {
  return (
    <footer id="site-footer" className="footer maestro-footer position-relative mt-auto">
      <div className="maestro-footer__accent" aria-hidden="true" />
      <div className="maestro-footer__glow" aria-hidden="true" />

      <div className="container position-relative">
        <div className="maestro-footer__top row gy-4 align-items-start">
          <div className="col-lg-5">
            <div className="maestro-footer__brand">
              <Link to="/" className="maestro-footer__logo cursor-big">
                <img src={MAESTRO_LOGO_WHITE_HEADER} alt="Maestro" />
              </Link>
              {/* <p className="maestro-footer__tagline">
                Logistics, <span>connected.</span>
              </p> */}
              <p className="maestro-footer__intro">
                Maestro unites booking, dispatch, fleet, payments, and proof of delivery on one platform — built for
                operators who need every move live.
              </p>
              <div className="maestro-footer__contact-row">
                <ul className="maestro-footer__contact-list">
                  <li>
                    <a href={`mailto:${siteContact.email}`} className="maestro-footer__contact-item cursor-small">
                      <span className="maestro-footer__contact-icon" aria-hidden="true">
                        <Icon name="envelope-simple" />
                      </span>
                      {siteContact.email}
                    </a>
                  </li>
                  <li>
                    <a href={siteContact.phoneHref} className="maestro-footer__contact-item cursor-small">
                      <span className="maestro-footer__contact-icon" aria-hidden="true">
                        <Icon name="phone" />
                      </span>
                      {siteContact.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="maestro-footer__newsletter-wrap">
              <div className="maestro-footer__newsletter">
                <div className="maestro-footer__newsletter-copy">
                  <h4 className="maestro-footer__newsletter-title">Stay in the loop</h4>
                  <p className="maestro-footer__newsletter-text">
                    Product updates and logistics insights — straight to your inbox.
                  </p>
                </div>
                <form action="#" className="maestro-footer__newsletter-form">
                  <div className="maestro-footer__newsletter-field">
                    <span className="maestro-footer__newsletter-icon" aria-hidden="true">
                      <Icon name="envelope-simple" />
                    </span>
                    <input
                      type="email"
                      className="maestro-footer__newsletter-input cursor-big"
                      placeholder="Your email address"
                      aria-label="Email address"
                    />
                  </div>
                  <button type="submit" className="maestro-footer__newsletter-btn cursor-small">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="maestro-footer__social">
                {socialLinks.map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    className="maestro-footer__social-link cursor-small"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.icon}
                  >
                    <Icon name={social.icon} weight={social.weight} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="maestro-footer__links row gy-5">
          {footerColumns.map((column) => {
            const layout = footerColumnLayout[column.id]

            return (
              <div key={column.id} className={layout.gridClass}>
                <FooterLinkColumn title={column.title} links={column.links} columns={layout.linkColumns} />
              </div>
            )
          })}
        </div>
      </div>

      <div className="container maestro-footer__bottom">
        <div className="maestro-footer__bottom-inner">
          <p className="maestro-footer__copyright cursor-small">
            &copy; {new Date().getFullYear()} Maestro — Transport &amp; Logistics. All rights reserved.
          </p>
          <div className="maestro-footer__legal">
            <Link to="/resources/privacy-policy" className="maestro-footer__legal-link cursor-small">
              Privacy Policy
            </Link>
            <Link to="/resources/terms-of-use" className="maestro-footer__legal-link cursor-small">
              Terms of Use
            </Link>
            <Link to="/contact" className="maestro-footer__legal-link cursor-small">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
