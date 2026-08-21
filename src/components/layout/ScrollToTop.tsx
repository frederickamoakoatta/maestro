import { Icon } from '../ui/Icon'
import { useScrollToTop } from '../../hooks/useScrollToTop'

export function ScrollToTop() {
  const { active, pathRef, scrollToTop } = useScrollToTop()

  return (
    <button
      type="button"
      className={`progress-wrap maestro-scroll-top cursor-big ${active ? 'active-progress' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102" aria-hidden="true">
        <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <span className="maestro-scroll-top__icon" aria-hidden="true">
        <Icon name="arrow-up" weight="bold" />
      </span>
    </button>
  )
}
