import { MAESTRO_LOGO_WHITE_HEADER } from '../../data/brand'

interface PreloaderProps {
  visible: boolean
}

export function Preloader({ visible }: PreloaderProps) {
  if (!visible) return null

  return (
    <div className="maestro-preloader" role="status" aria-live="polite" aria-label="Loading Maestro">
      <div className="maestro-preloader__glow" aria-hidden="true" />
      <div className="maestro-preloader__content">
        <div className="maestro-preloader__orb">
          <span className="maestro-preloader__ring maestro-preloader__ring--outer" aria-hidden="true" />
          <span className="maestro-preloader__ring maestro-preloader__ring--inner" aria-hidden="true" />
          <img src={MAESTRO_LOGO_WHITE_HEADER} alt="" />
        </div>
        <p className="maestro-preloader__label">Loading</p>
      </div>
    </div>
  )
}
