import { useEffect, useState } from 'react'

export function usePreloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 800)
    return () => window.clearTimeout(timer)
  }, [])

  return visible
}
