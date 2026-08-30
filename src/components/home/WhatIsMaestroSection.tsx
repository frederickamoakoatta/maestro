import { useRef } from 'react'
import { whatIsMaestro } from '../../data/content/homepage/overview'
import { useSectionParallax } from '../../hooks/useSectionParallax'
import { aosAttrs } from '../../utils/aos'
import { MaestroAppShowcase } from './MaestroAppShowcase'
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
      className={`maestro-section maestro-section--what-is-maestro position-relative${
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
        <div className="row gy-4 align-items-center maestro-what-is-maestro__layout">
          <div className="col-12 col-lg-5" {...aosAttrs(0)}>
            <SectionHeading
              eyebrow={whatIsMaestro.eyebrow}
              title={whatIsMaestro.title}
              centered={false}
              titleTag="h2"
              className={isLight ? '' : 'maestro-section-heading--light'}
            />
            <div className={isLight ? 'maestro-prose' : 'maestro-prose maestro-prose--light'}>
              {whatIsMaestro.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="cursor-small tw-mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-6 maestro-what-is-maestro__showcase-col" {...aosAttrs(160, 'fade-left')}>
            <MaestroAppShowcase parallaxOffset={parallaxOffset} />
          </div>
        </div>
      </div>
    </section>
  )
}
