import { Link } from 'react-router-dom'
import { insightDetailPath } from '../../data/content/company/news-insights'
import type { InsightArticle } from '../../types'
import { asset } from '../../utils/assets'
import { Icon } from '../ui/Icon'

interface InsightCardProps {
  article: InsightArticle
}

export function InsightCard({ article }: InsightCardProps) {
  const href = insightDetailPath(article)

  return (
    <Link to={href} className="maestro-insight-card">
      <div className="maestro-insight-card__media">
        <img src={asset(article.image)} alt="" loading="lazy" />
        <span className="maestro-insight-card__category">{article.categoryLabel}</span>
      </div>
      <div className="maestro-insight-card__body">
        <div className="maestro-insight-card__meta cursor-small">
          <span>{article.date}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="maestro-insight-card__title cursor-big">{article.title}</h3>
        <p className="maestro-insight-card__excerpt cursor-small">{article.excerpt}</p>
        <span className="maestro-insight-card__link cursor-small">
          Read article
          <Icon name="caret-right" weight="bold" />
        </span>
      </div>
    </Link>
  )
}
