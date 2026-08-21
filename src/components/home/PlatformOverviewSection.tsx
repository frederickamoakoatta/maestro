import { platformOverview } from '../../data/content/homepage/overview'
import { aosAttrs } from '../../utils/aos'
import { SectionHeading } from '../ui/SectionHeading'

export function PlatformOverviewSection() {
  return (
    <section className="maestro-section py-140 bg-white">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-5" {...aosAttrs(0)}>
            <SectionHeading
              eyebrow={platformOverview.eyebrow}
              title={platformOverview.title}
              centered={false}
              titleTag="h2"
            />
          </div>
          <div className="col-lg-7" {...aosAttrs(120, 'fade-left')}>
            <div className="maestro-prose">
              {platformOverview.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="cursor-small tw-mb-5">
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
