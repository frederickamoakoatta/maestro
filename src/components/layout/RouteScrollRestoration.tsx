import { useScrollToTopOnNavigate } from '../../hooks/useScrollToTopOnNavigate'

/** Restores scroll position on route changes (see useScrollToTopOnNavigate). */
export function RouteScrollRestoration() {
  useScrollToTopOnNavigate()
  return null
}
