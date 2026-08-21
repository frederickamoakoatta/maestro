import { Link } from 'react-router-dom'
import { DEFAULT_PAGE_HEADER_IMAGE, pageSectionLabel } from '../../data/page-headers'
import { asset } from '../../utils/assets'
import { Icon } from '../ui/Icon'

interface PageHeaderProps {
  title: string
  backgroundImage?: string
  eyebrow?: string
  path?: string
}

export function PageHeader({ title, backgroundImage, eyebrow, path }: PageHeaderProps) {
  const image = backgroundImage ?? DEFAULT_PAGE_HEADER_IMAGE
  const section = eyebrow ?? (path ? pageSectionLabel(path) : undefined)

  return (
    <header
      className="maestro-page-header position-relative overflow-hidden"
      style={{ ['--maestro-page-header-image' as string]: `url(${asset(image)})` }}
    >
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
            {section && path !== '/contact' && (
              <>
                <Icon name="caret-right" weight="bold" />
                <span>{section}</span>
              </>
            )}
            <Icon name="caret-right" weight="bold" />
            <span aria-current="page">{title}</span>
          </nav>
        )}
      </div>
    </header>
  )
}
