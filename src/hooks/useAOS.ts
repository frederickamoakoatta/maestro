import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useAOS() {
  const { pathname } = useLocation()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-aos]'))

    if (reducedMotion()) {
      elements.forEach((el) => el.classList.add('aos-animate'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('aos-animate')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.08,
        rootMargin: window.matchMedia('(max-width: 991px)').matches
          ? '0px 0px 6% 0px'
          : '0px 0px 22% 0px',
      },
    )

    elements.forEach((el) => {
      el.classList.remove('aos-animate')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])
}
