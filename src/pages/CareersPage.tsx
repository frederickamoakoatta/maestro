import { Link } from 'react-router-dom'
import { HomeCtaSection } from '../components/home/HomeCtaSection'
import { JobCard } from '../components/company/JobCard'
import { PageHeader } from '../components/layout/PageHeader'
import { Icon } from '../components/ui/Icon'
import {
  careersApplyCta,
  careersPage,
  jobOpenings,
} from '../data/content/company/careers'
import { aosAttrs } from '../utils/aos'

export function CareersPage() {
  return (
    <>
      <PageHeader title={careersPage.title} path="/company/careers" />

      <section className="maestro-careers py-140">
        <div className="container">
          {/* <div className="maestro-careers__intro" {...aosAttrs(0)}>
            <span className="maestro-section-heading__eyebrow splitTextStyleTwo cursor-small tw-text-xl fw-bold fst-italic tw-mb-305 d-block">
              {careersPage.eyebrow}
            </span>
            <h2 className="maestro-careers__heading cursor-big">{careersPage.heading}</h2>
            <p className="maestro-careers__lead cursor-small">{careersPage.description}</p>
            {careersPage.intro && <p className="maestro-careers__intro cursor-small">{careersPage.intro}</p>}
          </div> */}

          {/* <div className="maestro-careers__benefits">
            {careerBenefits.map((benefit, index) => (
              <article key={benefit.title} className="maestro-careers-benefit" {...aosAttrs(index * 70)}>
                <span className="maestro-careers-benefit__icon" aria-hidden="true">
                  <Icon name={benefit.icon} weight="bold" />
                </span>
                <h3 className="maestro-careers-benefit__title cursor-big">{benefit.title}</h3>
                <p className="maestro-careers-benefit__text cursor-small">{benefit.description}</p>
              </article>
            ))}
          </div> */}

          <div className="maestro-careers__roles" {...aosAttrs(80)}>
            <div className="maestro-careers__roles-header">
              <h2 className="maestro-careers__roles-title cursor-big">Open roles</h2>
              <p className="maestro-careers__roles-lead cursor-small">
                Current opportunities on the Maestro team. Select a role to express your interest.
              </p>
            </div>
            <div className="maestro-careers__jobs">
              {jobOpenings.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>

          <div className="maestro-careers-apply" {...aosAttrs(120)}>
            <h3 className="maestro-careers-apply__title cursor-big">{careersApplyCta.title}</h3>
            <p className="maestro-careers-apply__text cursor-small">{careersApplyCta.description}</p>
            <Link to={careersApplyCta.href} className="maestro-careers-apply__btn cursor-small">
              {careersApplyCta.buttonLabel}
              <Icon name="caret-right" weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      <HomeCtaSection />
    </>
  )
}
