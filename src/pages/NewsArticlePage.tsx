import { Link, Navigate, useParams } from 'react-router-dom'
import { InsightCard } from '../components/company/InsightCard'
import { HomeCtaSection } from '../components/home/HomeCtaSection'
import { PageHeader } from '../components/layout/PageHeader'
import { Icon } from '../components/ui/Icon'
import {
  getInsightArticle,
  newsInsightsPage,
  relatedInsightArticles,
} from '../data/content/company/news-insights'
import { aosAttrs } from '../utils/aos'

export function NewsArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getInsightArticle(slug) : undefined

  if (!article) {
    return <Navigate to="/company/news-insights" replace />
  }

  const related = relatedInsightArticles(article)

  return (
    <>
      <PageHeader
        title={article.title}
        path={`/company/news-insights/${article.id}`}
        eyebrow={article.categoryLabel}
        parent={{ label: newsInsightsPage.title, href: '/company/news-insights' }}
        backgroundImage={article.image}
      />

      <section className="maestro-article-detail py-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="maestro-article-detail__meta cursor-small" {...aosAttrs(0)}>
                <span>{article.date}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
                <span aria-hidden="true">·</span>
                <span>{article.categoryLabel}</span>
              </div>

              <div className="maestro-article-detail__body">
                {article.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="cursor-small">
                    {paragraph}
                  </p>
                ))}
              </div>

              <Link to="/company/news-insights" className="maestro-article-detail__back cursor-small" {...aosAttrs(80)}>
                <Icon name="arrow-left" weight="bold" />
                Back to News & Insights
              </Link>
            </div>
          </div>

          {related.length > 0 && (
            <div className="maestro-article-detail__related" {...aosAttrs(120)}>
              <h2 className="maestro-article-detail__related-title cursor-big">Related articles</h2>
              <div className="maestro-article-detail__related-grid">
                {related.map((item) => (
                  <InsightCard key={item.id} article={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <HomeCtaSection />
    </>
  )
}
