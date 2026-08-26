import type { CatalogSection } from '../../types'
import { aosAttrs } from '../../utils/aos'
import { Icon } from '../ui/Icon'

interface AnchorSectionProps {
  section: CatalogSection
  index: number
  featuresLabel?: string
  benefitsLabel?: string
  idealForLabel?: string
}

export function AnchorSection({
  section,
  index,
  featuresLabel = 'Key features',
  benefitsLabel = 'Benefits',
  idealForLabel = 'Ideal for',
}: AnchorSectionProps) {
  const hasFeatures = Boolean(section.features?.length)
  const hasBenefits = Boolean(section.benefits?.length)
  const hasIdealFor = Boolean(section.idealFor?.length)
  const hasLists = hasFeatures || hasBenefits || hasIdealFor

  return (
    <section id={section.id} className="maestro-catalog-section" {...aosAttrs((index % 4) * 60)}>
      <div className="maestro-catalog-section__header">
        <span className="maestro-catalog-section__icon" aria-hidden="true">
          <Icon name={section.icon} weight="bold" />
        </span>
        <div>
          <span className="maestro-catalog-section__index cursor-small">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="maestro-catalog-section__title cursor-big">{section.title}</h3>
        </div>
      </div>

      <p className="maestro-catalog-section__description cursor-small">{section.description}</p>

      {hasLists && (
        <div className={`maestro-catalog-section__lists${hasIdealFor && !hasFeatures && !hasBenefits ? ' maestro-catalog-section__lists--single' : ''}`}>
          {hasFeatures && (
            <div>
              <h4 className="maestro-catalog-section__list-title cursor-small">{featuresLabel}</h4>
              <ul className="maestro-catalog-section__list">
                {section.features!.map((item) => (
                  <li key={item}>
                    <Icon name="check" weight="bold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {hasBenefits && (
            <div>
              <h4 className="maestro-catalog-section__list-title cursor-small">{benefitsLabel}</h4>
              <ul className="maestro-catalog-section__list">
                {section.benefits!.map((item) => (
                  <li key={item}>
                    <Icon name="check" weight="bold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {hasIdealFor && (
            <div>
              <h4 className="maestro-catalog-section__list-title cursor-small">{idealForLabel}</h4>
              <ul className="maestro-catalog-section__list">
                {section.idealFor!.map((item) => (
                  <li key={item}>
                    <Icon name="check" weight="bold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
