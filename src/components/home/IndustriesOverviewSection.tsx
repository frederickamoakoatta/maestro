import { Link } from 'react-router-dom'
import { industriesOverview } from '../../data/content/homepage/industries'
import { aosAttrs } from '../../utils/aos'
import { asset } from '../../utils/assets'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

export function IndustriesOverviewSection() {
  const marqueeItems = [...industriesOverview, ...industriesOverview]

  return (
    <section
      className="maestro-section maestro-outcomes maestro-industries py-140 position-relative overflow-hidden"
      style={{ ['--maestro-outcomes-image' as string]: `url(${asset('sliders/maestro-slider-09.jpg')})` }}
    >
      <div className="maestro-outcomes__overlay" aria-hidden="true" />
      <div className="container position-relative z-1">
        <div className="max-w-840-px mx-auto text-center tw-mb-15" {...aosAttrs(0)}>
          <SectionHeading
            className="maestro-section-heading--light"
            eyebrow="Industries We Serve"
            title="Who Maestro is for"
            titleTag="h2"
          />
          <p className="maestro-outcomes__lead cursor-small max-w-632-px mx-auto">
            Maestro supports organisations that move goods, equipment and people—digitising logistics from customer
            booking through to final delivery.
          </p>
        </div>
      </div>

      <div className="maestro-industries-marquee position-relative z-1" aria-label="Industries we serve">
        <div className="maestro-industries-marquee__track">
          {marqueeItems.map((industry, index) => (
            <article
              key={`${industry.title}-${index}`}
              className="maestro-outcome-card maestro-industry-card"
              aria-hidden={index >= industriesOverview.length}
            >
              <span className="maestro-outcome-card__icon" aria-hidden="true">
                <Icon name={industry.icon} weight="regular" />
              </span>
              <h3 className="maestro-outcome-card__title cursor-big">{industry.title}</h3>
              <p className="maestro-industry-card__desc cursor-small">{industry.description}</p>
              <ul className="maestro-industry-card__list">
                {industry.idealFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to={industry.href} className="maestro-industry-card__link cursor-small" tabIndex={index >= industriesOverview.length ? -1 : undefined}>
                Learn more
                <Icon name="arrow-up-right" weight="bold" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
