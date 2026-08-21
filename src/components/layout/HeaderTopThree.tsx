import { Link } from 'react-router-dom'
import { headerTopLinks, socialLinks } from '../../data/navigation'
import { siteContact } from '../../data/contact'
import { Icon } from '../ui/Icon'

function HeaderTopLink({ label, href }: { label: string; href: string }) {
  const isExternal = href.startsWith('http')
  const className = 'text-white hover-underline hover--translate-y-1'

  if (isExternal) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      {label}
    </Link>
  )
}

export function HeaderTopThree() {
  return (
    <div className="top-header-three maestro-top-header z-1 d-sm-block d-none tw-py-2">
      <div className="container tw-container-1554-px">
        <div className="d-flex align-items-center justify-content-between tw-gap-6">
          <div className="d-flex align-items-center tw-gap-6">
            <div className="cursor-small d-flex align-items-center tw-gap-2 tw-py-205">
              <span className="text-main-600 d-flex">
                <Icon name="map-pin" weight="bold" />
              </span>
              <span className="text-white fw-medium">{siteContact.address}</span>
            </div>
            <div className="cursor-small d-flex align-items-center tw-gap-2 tw-py-205">
              <span className="text-main-600 d-flex">
                <Icon name="envelope-simple" weight="bold" />
              </span>
              <a
                href={`mailto:${siteContact.email}`}
                className="text-white fw-medium hover--translate-x-05 hover-text-main-600 tw-transition-all"
              >
                {siteContact.email}
              </a>
            </div>
          </div>
          <div className="d-md-flex d-none align-items-center tw-gap-8 cursor-small">
            <div className="tw-px-10 tw-py-3 bg-main-600 d-flex align-items-center tw-gap-6 both-clipped">
              {headerTopLinks.map((link) => (
                <HeaderTopLink key={link.label} label={link.label} href={link.href} />
              ))}
            </div>
            <ul className="d-lg-flex d-none align-items-center tw-gap-5 cursor-small">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white hover-text-white hover-scale-20">
                    <Icon name={link.icon} weight={link.weight} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
