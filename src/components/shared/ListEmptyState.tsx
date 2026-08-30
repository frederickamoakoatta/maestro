import { Link } from 'react-router-dom'
import { Icon } from '../ui/Icon'

interface ListEmptyStateProps {
  icon: string
  title: string
  description: string
  actionLabel?: string
  actionHref?: string
}

export function ListEmptyState({ icon, title, description, actionLabel, actionHref }: ListEmptyStateProps) {
  return (
    <div className="maestro-list-empty" role="status">
      <span className="maestro-list-empty__icon" aria-hidden="true">
        <Icon name={icon} weight="bold" />
      </span>
      <h3 className="maestro-list-empty__title cursor-big">{title}</h3>
      <p className="maestro-list-empty__text cursor-small">{description}</p>
      {actionLabel && actionHref && (
        <Link to={actionHref} className="maestro-list-empty__action cursor-small">
          {actionLabel}
          <Icon name="caret-right" weight="bold" />
        </Link>
      )}
    </div>
  )
}
