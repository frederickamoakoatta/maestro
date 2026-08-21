import { Link } from 'react-router-dom'
import { homeCta } from '../../data/content/homepage/trust'
import { aosAttrs } from '../../utils/aos'
import { asset } from '../../utils/assets'
import { Icon } from '../ui/Icon'

export function HomeCtaSection() {
  return (
    <section
      className="maestro-section maestro-cta py-140 position-relative overflow-hidden"
      style={{ ['--maestro-cta-image' as string]: `url(${asset(homeCta.backgroundImage)})` }}
    >
      <div className="maestro-cta__overlay" aria-hidden="true" />
      <div className="container position-relative z-1">
        <div className="maestro-cta-panel text-center" {...aosAttrs(0, 'zoom-in')}>
          <span className="maestro-cta-panel__eyebrow cursor-small">{homeCta.eyebrow}</span>
          <h2 className="maestro-cta-panel__title cursor-big">{homeCta.title}</h2>
          <p className="maestro-cta-panel__text cursor-small">{homeCta.description}</p>
          <div className="d-flex flex-wrap align-items-center justify-content-center tw-gap-4 tw-mt-10">
            <Link
              to={homeCta.secondaryCta.href}
              className="maestro-cta-panel__btn cursor-small d-inline-flex align-items-center tw-gap-2"
            >
              {homeCta.secondaryCta.label}
              <Icon name="caret-right" weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
