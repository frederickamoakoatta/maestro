import { whyChooseMaestro } from '../../data/content/homepage/overview'
import { aosAttrs } from '../../utils/aos'
import { SectionHeading } from '../ui/SectionHeading'

export function WhyMaestroSection() {
  return (
    <section className="maestro-section py-140 bg-neutral-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 text-center" {...aosAttrs(0)}>
            <SectionHeading
              eyebrow={whyChooseMaestro.eyebrow}
              title={whyChooseMaestro.title}
              titleTag="h2"
            />
            <div className="maestro-prose mx-auto">
              {whyChooseMaestro.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-neutral-1000 cursor-small tw-mb-5">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
