import { Link } from 'react-router-dom'
import { softtribePartner } from '../../data/content/homepage/overview'
import { trustPillars } from '../../data/content/homepage/trust'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

export function TrustSection() {
  const cards = trustPillars.slice(1)

  return (
    <section className="maestro-section maestro-section--what-is-maestro py-140 position-relative overflow-hidden">
      <div className="container position-relative z-1">
        <div className="row gy-5 align-items-start">
          <div className="col-lg-5">
            <SectionHeading
              eyebrow="Why Organisations Trust Maestro"
              title={softtribePartner.title}
              centered={false}
              titleTag="h2"
              className="maestro-section-heading--light"
            />
            <div className="maestro-prose maestro-prose--light maestro-trust-copy">
              {softtribePartner.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="cursor-small">
                  {paragraph}
                </p>
              ))}
            </div>
            <Link to="/company/about-thesofttribe" className="maestro-inline-link cursor-small">
              About SOFTtribe
            </Link>
          </div>

          <div className="col-lg-7">
            <div className="row gy-4">
              {cards.map((pillar, index) => (
                <div key={pillar.title} className={pillar.bullets ? 'col-12' : 'col-md-6'}>
                  <article className={`maestro-trust-card h-100${pillar.bullets ? ' maestro-trust-card--featured' : ''}`}>
                    <div className="maestro-trust-card__top">
                      <span className="maestro-trust-card__icon" aria-hidden="true">
                        <Icon name={pillar.icon} weight="regular" />
                      </span>
                      <span className="maestro-trust-card__index">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="maestro-trust-card__title cursor-big">{pillar.title}</h3>
                    <p className="maestro-trust-card__text cursor-small">{pillar.description}</p>
                    {pillar.bullets && (
                      <ul className="maestro-trust-card__chips">
                        {pillar.bullets.map((bullet) => (
                          <li key={bullet}>
                            <Icon name="check" weight="bold" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
