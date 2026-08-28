import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to the top when the route path changes. Hash-only updates are left to useHashScroll. */
export function useScrollToTopOnNavigate() {
  const { pathname } = useLocation()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    if (previousPathname.current === pathname) return
    previousPathname.current = pathname
    window.scrollTo(0, 0)
  }, [pathname])
}
