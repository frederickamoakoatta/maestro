import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to the element matching location.hash, with sticky-header-friendly timing. */
export function useHashScroll() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return

    const id = decodeURIComponent(hash.replace(/^#/, ''))
    if (!id) return

    let cancelled = false
    let attempts = 0

    const scrollToTarget = () => {
      if (cancelled) return
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      if (attempts < 12) {
        attempts += 1
        window.setTimeout(scrollToTarget, 50)
      }
    }

    // Wait a tick so the hub page sections are in the DOM after route change.
    const timer = window.setTimeout(scrollToTarget, 0)
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [hash, pathname])
}
