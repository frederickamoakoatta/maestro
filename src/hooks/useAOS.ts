import { useEffect } from 'react'
import AOS from 'aos'

export function useAOS() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 150,
      easing: 'ease-out-cubic',
      delay: 100,
    })

    const refresh = () => AOS.refresh()
    refresh()
    window.addEventListener('load', refresh)

    return () => window.removeEventListener('load', refresh)
  }, [])
}
