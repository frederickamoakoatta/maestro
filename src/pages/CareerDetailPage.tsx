import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { CareerApplyModal } from '../components/company/CareerApplyModal'
import { HomeCtaSection } from '../components/home/HomeCtaSection'
import { PageHeader } from '../components/layout/PageHeader'
import { Icon } from '../components/ui/Icon'
import { careersPage, getJobOpening } from '../data/content/company/careers'
import { aosAttrs } from '../utils/aos'

export function CareerDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const job = slug ? getJobOpening(slug) : undefined
  const [applyOpen, setApplyOpen] = useState(false)

  if (!job) {
    return <Navigate to="/company/careers" replace />
  }

  return (
    <>
      <PageHeader
        title={job.title}
        path={`/company/careers/${job.id}`}
        eyebrow={careersPage.title}
        parent={{ label: careersPage.title, href: '/company/careers' }}
        backgroundImage="sliders/maestro-slider-07.jpg"
      />

      <section className="maestro-career-detail py-140">
        <div className="container">
          <div className="row gy-5">
            <aside className="col-lg-4" {...aosAttrs(0)}>
              <div className="maestro-career-detail__sidebar">
                <h2 className="maestro-career-detail__sidebar-title cursor-big">Role overview</h2>
                <ul className="maestro-career-detail__meta">
                  <li>
                    <Icon name="buildings" weight="bold" />
                    <span>{job.department}</span>
                  </li>
                  <li>
                    <Icon name="map-pin" weight="bold" />
                    <span>{job.location}</span>
                  </li>
                  <li>
                    <Icon name="clock" weight="bold" />
                    <span>{job.type}</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="maestro-career-detail__apply cursor-small"
                  onClick={() => setApplyOpen(true)}
                >
                  Apply for this role
                  <Icon name="arrow-up-right" weight="bold" />
                </button>
                <Link to="/company/careers" className="maestro-career-detail__back cursor-small">
                  <Icon name="arrow-left" weight="bold" />
                  All open roles
                </Link>
              </div>
            </aside>

            <div className="col-lg-8" {...aosAttrs(100)}>
              <div className="maestro-career-detail__content">
                <p className="maestro-career-detail__summary cursor-small">{job.summary}</p>

                <section className="maestro-career-detail__section">
                  <h3 className="maestro-career-detail__heading cursor-big">Responsibilities</h3>
                  <ul className="maestro-career-detail__list">
                    {job.responsibilities.map((item) => (
                      <li key={item}>
                        <Icon name="check" weight="bold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="maestro-career-detail__section">
                  <h3 className="maestro-career-detail__heading cursor-big">Requirements</h3>
                  <ul className="maestro-career-detail__list">
                    {job.requirements.map((item) => (
                      <li key={item}>
                        <Icon name="check" weight="bold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeCtaSection />

      <CareerApplyModal
        open={applyOpen}
        onClose={() => setApplyOpen(false)}
        jobTitle={job.title}
      />
    </>
  )
}
