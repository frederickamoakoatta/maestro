import { howMaestroWorks } from '../../data/content/homepage/how-it-works'
import { aosAttrs } from '../../utils/aos'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

function ProcessCard({ step }: { step: (typeof howMaestroWorks)[number] }) {
  return (
    <article className="maestro-step-card h-100">
      <span className="maestro-step-card__number cursor-small">{step.step}</span>
      <span className="maestro-step-card__icon" aria-hidden="true">
        <Icon name={step.icon} weight="regular" />
      </span>
      <h3 className="maestro-step-card__title cursor-big">{step.title}</h3>
      <p className="maestro-step-card__text cursor-small">{step.description}</p>
    </article>
  )
}

export function HowMaestroWorksSection() {
  const firstRow = howMaestroWorks.slice(0, 3)
  const secondRow = howMaestroWorks.slice(3)

  return (
    <section className="maestro-section maestro-process py-140 position-relative overflow-hidden">
      <div className="maestro-process__map" aria-hidden="true" />

      <div className="container position-relative z-1">
        <div className="max-w-840-px mx-auto text-center tw-mb-15" {...aosAttrs(0)}>
          <SectionHeading eyebrow="Implementation" title="How Maestro works" titleTag="h2" />
          <p className="maestro-process__lead cursor-small max-w-632-px mx-auto">
            Getting started with Maestro is straightforward—from discovery through to continuous optimisation.
          </p>
        </div>

        <div className="maestro-process__row maestro-process__row--three">
          {firstRow.map((step, index) => (
            <div key={step.step} className="maestro-process__item" {...aosAttrs(index * 90)}>
              <ProcessCard step={step} />
            </div>
          ))}
        </div>

        <div className="maestro-process__row maestro-process__row--two">
          {secondRow.map((step, index) => (
            <div key={step.step} className="maestro-process__item" {...aosAttrs(120 + index * 90)}>
              <ProcessCard step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
