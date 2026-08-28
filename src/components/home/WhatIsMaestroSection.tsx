import { useRef } from 'react'
import { whatIsMaestro } from '../../data/content/homepage/overview'
import { useSectionParallax } from '../../hooks/useSectionParallax'
import { aosAttrs } from '../../utils/aos'
import { asset } from '../../utils/assets'
import { SectionHeading } from '../ui/SectionHeading'

export type WhatIsMaestroVariant = 'default' | 'light'

interface WhatIsMaestroSectionProps {
  /** `default` — dark gradient (current). `light` — white background, left-aligned dark text. */
  variant?: WhatIsMaestroVariant
}

export function WhatIsMaestroSection({ variant = 'default' }: WhatIsMaestroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const parallaxOffset = useSectionParallax(sectionRef)
  const isLight = variant === 'light'

  return (
    <section
      ref={sectionRef}
      className={`maestro-section maestro-section--what-is-maestro py-140 position-relative overflow-hidden${
        isLight ? ' maestro-section--what-is-maestro--light' : ''
      }`}
    >
      {!isLight && (
        <div
          className="maestro-what-is-maestro__bg"
          aria-hidden="true"
          style={{ transform: `translate3d(0, ${parallaxOffset * 0.35}px, 0)` }}
        />
      )}

      <div className="container position-relative z-1">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6" {...aosAttrs(0)}>
            <SectionHeading
              eyebrow={whatIsMaestro.eyebrow}
              title={whatIsMaestro.title}
              centered={false}
              titleTag="h2"
              className={isLight ? '' : 'maestro-section-heading--light'}
            />
            <div className={isLight ? 'maestro-prose' : 'maestro-prose maestro-prose--light'}>
              {whatIsMaestro.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="cursor-small tw-mb-5">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="col-lg-6" {...aosAttrs(160, 'fade-left')}>
            <div
              className="maestro-app-showcase maestro-app-showcase--parallax"
              aria-hidden="true"
              style={{ transform: `translate3d(0, ${parallaxOffset * -0.28}px, 0)` }}
            >
              <img
                src={asset('apps/maestro-placeholder-01.png')}
                alt=""
                className="maestro-app-showcase__tablet maestro-app-float"
              />
              <img
                src={asset('apps/maestro-placeholder-02.png')}
                alt=""
                className="maestro-app-showcase__phone maestro-app-float maestro-app-float--offset"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
