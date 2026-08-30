import { maestroAppShowcaseAlt, maestroAppShowcaseAssets } from '../../data/homepage/app-showcase'
import { asset } from '../../utils/assets'

interface MaestroAppShowcaseProps {
  parallaxOffset?: number
  className?: string
}

export function MaestroAppShowcase({ parallaxOffset = 0, className = '' }: MaestroAppShowcaseProps) {
  return (
    <div className={`maestro-app-composite-stage${className ? ` ${className}` : ''}`}>
      <div
        className="maestro-app-composite maestro-app-showcase--parallax"
        aria-hidden="true"
        style={{ transform: `translate3d(0, ${parallaxOffset * -0.28}px, 0)` }}
      >
        <img
          src={asset(maestroAppShowcaseAssets.tablet)}
          alt={maestroAppShowcaseAlt}
          className="maestro-app-composite__layer maestro-app-composite__tablet"
          loading="lazy"
          decoding="async"
        />
        <img
          src={asset(maestroAppShowcaseAssets.stats1)}
          alt=""
          className="maestro-app-composite__layer maestro-app-composite__stats maestro-app-composite__stats--one"
          loading="lazy"
          decoding="async"
        />
        <img
          src={asset(maestroAppShowcaseAssets.stats2)}
          alt=""
          className="maestro-app-composite__layer maestro-app-composite__stats maestro-app-composite__stats--two"
          loading="lazy"
          decoding="async"
        />
        <img
          src={asset(maestroAppShowcaseAssets.pieChart)}
          alt=""
          className="maestro-app-composite__layer maestro-app-composite__pie"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}
