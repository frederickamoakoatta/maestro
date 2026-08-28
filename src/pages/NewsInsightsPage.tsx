import { useMemo, useState } from 'react'
import { HomeCtaSection } from '../components/home/HomeCtaSection'
import { InsightCard } from '../components/company/InsightCard'
import { PageHeader } from '../components/layout/PageHeader'
import {
  insightArticles,
  insightCategories,
  newsInsightsPage,
} from '../data/content/company/news-insights'
import type { InsightCategory } from '../types'
import { aosAttrs } from '../utils/aos'

export function NewsInsightsPage() {
  const [activeCategory, setActiveCategory] = useState<InsightCategory | 'all'>('all')

  const visibleArticles = useMemo(
    () =>
      activeCategory === 'all'
        ? insightArticles
        : insightArticles.filter((article) => article.category === activeCategory),
    [activeCategory],
  )

  return (
    <>
      <PageHeader title={newsInsightsPage.title} path="/company/news-insights" />

      <section className="maestro-insights py-140">
        <div className="container">
          <div className="maestro-insights__intro" {...aosAttrs(0)}>

            <div className="maestro-insights__filters" role="tablist" aria-label="Article categories">
              {insightCategories.map((category) => {
                const isActive = category.id === activeCategory
                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`maestro-insights__filter cursor-small${isActive ? ' is-active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="maestro-insights__grid">
            {visibleArticles.map((article, index) => (
              <div key={article.id} {...aosAttrs(index * 60)}>
                <InsightCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeCtaSection />
    </>
  )
}
