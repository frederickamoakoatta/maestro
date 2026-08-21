import { useCallback, useEffect, useRef, useState } from 'react'

export function useScrollToTop() {
  const [active, setActive] = useState(false)
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const pathLength = path.getTotalLength()
    path.style.transition = 'none'
    path.style.strokeDasharray = `${pathLength} ${pathLength}`
    path.style.strokeDashoffset = `${pathLength}`

    const updateProgress = () => {
      const scroll = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const progress = pathLength - (scroll * pathLength) / (height || 1)
      path.style.strokeDashoffset = `${progress}`
      setActive(scroll > 50)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return { active, pathRef, scrollToTop }
}
