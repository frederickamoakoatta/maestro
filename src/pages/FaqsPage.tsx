import { useMemo, useState } from 'react'
import { HomeCtaSection } from '../components/home/HomeCtaSection'
import { PageHeader } from '../components/layout/PageHeader'
import { FaqAccordion } from '../components/resources/FaqAccordion'
import { faqCategories, faqPage, faqs } from '../data/content/resources/faqs'
import type { FaqCategory } from '../types'
import { aosAttrs } from '../utils/aos'

export function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory | 'all'>('all')

  const visibleFaqs = useMemo(
    () => (activeCategory === 'all' ? faqs : faqs.filter((item) => item.category === activeCategory)),
    [activeCategory],
  )

  return (
    <>
      <PageHeader
        title={faqPage.title}
        path="/resources/faqs"
        eyebrow={faqPage.eyebrow}
        backgroundImage={faqPage.headerImage}
      />

      <section className="maestro-faq py-140">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4" {...aosAttrs(0)}>
              <div className="maestro-faq__intro">
                <span className="maestro-section-heading__eyebrow splitTextStyleTwo cursor-small tw-text-xl fw-bold fst-italic tw-mb-305 d-block">
                  {faqPage.introEyebrow}
                </span>
                <h2 className="maestro-faq__title cursor-big">{faqPage.heading}</h2>
                <p className="maestro-faq__lead cursor-small">{faqPage.description}</p>

                <div className="maestro-faq__filters" role="tablist" aria-label="FAQ categories">
                  {faqCategories.map((category) => {
                    const isActive = category.id === activeCategory
                    return (
                      <button
                        key={category.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`maestro-faq__filter cursor-small${isActive ? ' is-active' : ''}`}
                        onClick={() => setActiveCategory(category.id)}
                      >
                        {category.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="col-lg-8" {...aosAttrs(120)}>
              <FaqAccordion items={visibleFaqs} />
            </div>
          </div>
        </div>
      </section>

      <HomeCtaSection />
    </>
  )
}
