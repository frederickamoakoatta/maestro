import { Link } from 'react-router-dom'
import { pageSectionLabel } from '../../data/page-headers'
import { asset } from '../../utils/assets'
import { Icon } from '../ui/Icon'

interface PageHeaderProps {
  title: string
  backgroundImage?: string
  eyebrow?: string
  path?: string
  parent?: { label: string; href: string }
}

export function PageHeader({ title, backgroundImage, eyebrow, path, parent }: PageHeaderProps) {
  const hasImage = Boolean(backgroundImage)
  const section = eyebrow ?? (path ? pageSectionLabel(path) : undefined)

  const headerClass = [
    'maestro-page-header',
    'position-relative',
    'overflow-hidden',
    hasImage ? 'maestro-page-header--blurred' : '',
    !hasImage ? 'maestro-page-header--solid' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header
      className={headerClass}
      style={
        hasImage
          ? { ['--maestro-page-header-image' as string]: `url(${asset(backgroundImage!)})` }
          : undefined
      }
    >
      {hasImage && <div className="maestro-page-header__bg" aria-hidden="true" />}
      <div className="maestro-page-header__overlay" aria-hidden="true" />
      <div className="container position-relative z-1">
        {section && (
          <span className="maestro-section-heading__eyebrow splitTextStyleTwo cursor-small tw-text-xl fw-bold fst-italic tw-mb-305 d-block">
            {section}
          </span>
        )}
        <h1 className="maestro-page-header__title cursor-big">{title}</h1>
        {path && (
          <nav className="maestro-page-header__crumbs cursor-small" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {parent ? (
              <>
                <Icon name="caret-right" weight="bold" />
                <Link to={parent.href}>{parent.label}</Link>
              </>
            ) : (
              section &&
              path !== '/contact' &&
              section !== title && (
                <>
                  <Icon name="caret-right" weight="bold" />
                  <span>{section}</span>
                </>
              )
            )}
            <Icon name="caret-right" weight="bold" />
            <span aria-current="page">{title}</span>
          </nav>
        )}
      </div>
    </header>
  )
}
