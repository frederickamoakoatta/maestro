import { useEffect } from 'react'

export function useCustomCursor() {
  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return

    const cursor = document.querySelector<HTMLElement>('.cursor')
    const dot = document.querySelector<HTMLElement>('.dot')
    if (!cursor || !dot) return

    const move = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
}
