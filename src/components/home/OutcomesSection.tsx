import { businessOutcomes } from '../../data/content/homepage/outcomes'
import { aosAttrs } from '../../utils/aos'
import { asset } from '../../utils/assets'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

export function OutcomesSection() {
  return (
    <section
      className="maestro-section maestro-outcomes py-140 position-relative overflow-hidden"
      style={{ ['--maestro-outcomes-image' as string]: `url(${asset('apps/maestro-bg-01.jpg')})` }}
    >
      <div className="maestro-outcomes__overlay" aria-hidden="true" />
      <div className="container position-relative z-1">
        <div className="max-w-840-px mx-auto text-center tw-mb-15" {...aosAttrs(0)}>
          <SectionHeading
            className="maestro-section-heading--light"
            eyebrow="Business Outcomes"
            title="Deliver better business outcomes"
            titleTag="h2"
          />
          <p className="maestro-outcomes__lead cursor-small max-w-632-px mx-auto">
            Technology should improve business performance—not simply automate existing processes.
          </p>
        </div>

        <div className="row gy-4">
          {businessOutcomes.map((outcome, index) => (
            <div key={outcome.title} className="col-lg-4 col-md-6" {...aosAttrs(index * 80)}>
              <article className="maestro-outcome-card h-100">
                <span className="maestro-outcome-card__icon" aria-hidden="true">
                  <Icon name={outcome.icon} weight="regular" />
                </span>
                <h3 className="maestro-outcome-card__title cursor-big">{outcome.title}</h3>
                <p className="maestro-outcome-card__text cursor-small">{outcome.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
