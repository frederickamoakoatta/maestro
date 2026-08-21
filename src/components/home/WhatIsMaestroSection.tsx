import { whatIsMaestro } from '../../data/content/homepage/overview'
import { aosAttrs } from '../../utils/aos'
import { asset } from '../../utils/assets'
import { SectionHeading } from '../ui/SectionHeading'

export function WhatIsMaestroSection() {
  return (
    <section className="maestro-section maestro-section--what-is-maestro py-140 position-relative overflow-hidden">
      <div className="container position-relative z-1">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6" {...aosAttrs(0)}>
            <SectionHeading
              eyebrow={whatIsMaestro.eyebrow}
              title={whatIsMaestro.title}
              centered={false}
              titleTag="h2"
              className="maestro-section-heading--light"
            />
            <div className="maestro-prose maestro-prose--light">
              {whatIsMaestro.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="cursor-small tw-mb-5">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="col-lg-6" {...aosAttrs(160, 'fade-left')}>
            <div className="maestro-app-showcase" aria-hidden="true">
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
