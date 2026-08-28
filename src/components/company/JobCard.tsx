import { Link } from 'react-router-dom'
import { jobDetailPath } from '../../data/content/company/careers'
import type { JobOpening } from '../../types'
import { Icon } from '../ui/Icon'

interface JobCardProps {
  job: JobOpening
}

export function JobCard({ job }: JobCardProps) {
  const href = jobDetailPath(job)

  return (
    <article className="maestro-job-card">
      <div className="maestro-job-card__main">
        <h3 className="maestro-job-card__title cursor-big">
          <Link to={href} className="maestro-job-card__title-link">
            {job.title}
          </Link>
        </h3>
        <ul className="maestro-job-card__meta">
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
      </div>
      <Link to={href} className="maestro-job-card__cta cursor-small">
        View role
        <Icon name="arrow-up-right" weight="bold" />
      </Link>
    </article>
  )
}
