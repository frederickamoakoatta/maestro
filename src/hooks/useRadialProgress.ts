import { useEffect } from 'react'

export function useRadialProgress() {
  useEffect(() => {
    const circles = document.querySelectorAll<SVGCircleElement>('svg.radial-progress circle.complete')
    circles.forEach((circle) => {
      const svg = circle.closest('svg')
      const percentage = Number(svg?.dataset.percentage ?? 0)
      const radius = circle.r.baseVal.value
      const circumference = 2 * Math.PI * radius
      circle.style.strokeDasharray = `${circumference}`
      circle.style.strokeDashoffset = `${circumference - (percentage / 100) * circumference}`
    })
  }, [])
}
