import { Link } from 'react-router-dom'
import type { CatalogPage } from '../../types'
import { useHashScroll } from '../../hooks/useHashScroll'
import { aosAttrs } from '../../utils/aos'
import { HomeCtaSection } from '../home/HomeCtaSection'
import { PageHeader } from '../layout/PageHeader'
import { AnchorSection } from './AnchorSection'

interface CatalogHubPageProps {
  page: CatalogPage
  path: string
  featuresLabel?: string
  benefitsLabel?: string
  idealForLabel?: string
}

export function CatalogHubPage({
  page,
  path,
  featuresLabel,
  benefitsLabel,
  idealForLabel,
}: CatalogHubPageProps) {
  useHashScroll()

  return (
    <>
      <PageHeader
        title={page.title}
        path={path}
        backgroundImage={page.headerImage}
      />

      <section className="maestro-catalog py-140">
        <div className="container">
          <div className="maestro-catalog__intro" {...aosAttrs(0)}>
            <span className="maestro-section-heading__eyebrow splitTextStyleTwo cursor-small tw-text-xl fw-bold fst-italic tw-mb-305 d-block">
              {page.eyebrow}
            </span>
            <h2 className="maestro-catalog__heading cursor-big">{page.heading}</h2>
            <p className="maestro-catalog__lead cursor-small">{page.description}</p>
          </div>

          <nav className="maestro-catalog__toc" aria-label={`${page.title} sections`} {...aosAttrs(80)}>
            {page.sections.map((section) => (
              <Link
                key={section.id}
                to={`${path}#${section.id}`}
                className="maestro-catalog__toc-link cursor-small"
              >
                {section.title}
              </Link>
            ))}
          </nav>

          <div className="maestro-catalog__sections">
            {page.sections.map((section, index) => (
              <AnchorSection
                key={section.id}
                section={section}
                index={index}
                featuresLabel={featuresLabel}
                benefitsLabel={benefitsLabel}
                idealForLabel={idealForLabel}
              />
            ))}
          </div>
        </div>
      </section>

      <HomeCtaSection />
    </>
  )
}
