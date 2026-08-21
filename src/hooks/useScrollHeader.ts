import { useEffect, useState } from 'react'

const DEFAULT_THRESHOLD = 60

function getScrollThreshold(fallback = DEFAULT_THRESHOLD) {
  const hero = document.querySelector('.banner-four-area')
  if (!hero) return fallback
  const heroHeight = hero.getBoundingClientRect().height
  return Math.max(heroHeight - 72, fallback)
}

export function useScrollHeader(fallback = DEFAULT_THRESHOLD) {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsFixed(window.scrollY >= getScrollThreshold(fallback))
    }

    const onResize = () => onScroll()

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [fallback])

  return isFixed
}
