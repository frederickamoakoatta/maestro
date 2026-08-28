import { useEffect, useState, type RefObject } from 'react'

interface SectionParallaxOptions {
  /** Multiplier applied to scroll progress (px). */
  strength?: number
}

export function useSectionParallax(
  sectionRef: RefObject<HTMLElement | null>,
  { strength = 72 }: SectionParallaxOptions = {},
) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let frame = 0

    const update = () => {
      frame = 0
      const rect = section.getBoundingClientRect()
      const viewHeight = window.innerHeight

      if (rect.bottom < 0 || rect.top > viewHeight) return

      const progress = (viewHeight - rect.top) / (viewHeight + rect.height)
      setOffset((progress - 0.5) * strength)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sectionRef, strength])

  return offset
}
