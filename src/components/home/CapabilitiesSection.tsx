import { useState } from 'react'
import { Link } from 'react-router-dom'
import { capabilityGroups } from '../../data/content/homepage/capabilities'
import { asset, bgStyle } from '../../utils/assets'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

export function CapabilitiesSection() {
  const [activeId, setActiveId] = useState(capabilityGroups[0].id)
  const activeGroup = capabilityGroups.find((group) => group.id === activeId) ?? capabilityGroups[0]

  return (
    <section className="maestro-section maestro-capabilities py-140">
      <div className="container">
        <div className="row gy-5 align-items-start">
          <div className="col-lg-6">
            <SectionHeading
              eyebrow="Platform Capabilities"
              title="Everything your logistics business needs"
              centered={false}
              titleTag="h2"
            />
            <p className="maestro-capabilities__lead cursor-small">
              Every module is fully integrated, giving your organisation one source of truth across the entire logistics
              journey.
            </p>

            <div className="maestro-capabilities-tabs" role="tablist" aria-label="Capability audiences">
              {capabilityGroups.map((group) => {
                const isActive = group.id === activeId
                return (
                  <button
                    key={group.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`maestro-capabilities-tabs__btn cursor-small${isActive ? ' is-active' : ''}`}
                    onClick={() => setActiveId(group.id)}
                  >
                    <Icon name={group.icon} weight={isActive ? 'fill' : 'regular'} />
                    {group.title}
                  </button>
                )
              })}
            </div>

            <div className="row g-3" role="tabpanel">
              {activeGroup.items.map((item) => (
                <div key={item.title} className="col-sm-6">
                  <Link to={item.href} className="maestro-capability-card h-100 cursor-small">
                    <span className="maestro-capability-card__icon" aria-hidden="true">
                      <Icon name={item.icon} />
                    </span>
                    <h3 className="maestro-capability-card__title">{item.title}</h3>
                    <p className="maestro-capability-card__text">{item.description}</p>
                  </Link>
                </div>
              ))}
            </div>

            <div className="maestro-capabilities-cta d-flex flex-wrap align-items-center tw-gap-6">
              <Link
                to="/contact"
                className="maestro-capabilities-cta__btn cursor-small d-inline-flex align-items-center tw-gap-2"
              >
                Book a Demo
                <Icon name="caret-right" weight="bold" />
              </Link>
              <Link to="/solutions/customer-booking" className="maestro-capabilities-cta__link cursor-small">
                See all features
                <Icon name="caret-right" weight="bold" />
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="maestro-capabilities-collage">
              <div
                className="maestro-capabilities-collage__hero"
                style={bgStyle('apps/maestro-feature-01.jpeg')}
                role="img"
                aria-hidden="true"
              />
              <div className="maestro-capabilities-collage__tile maestro-capabilities-collage__tile--tall">
                <img src={asset('apps/maestro-feature-02.jpg')} alt="" />
                <div className="maestro-capabilities-collage__overlay">
                  <div className="d-flex align-items-center justify-content-between tw-mb-2">
                    <strong>Live Tracking</strong>
                    <span className="maestro-capabilities-collage__badge">On Time</span>
                  </div>
                  <p className="mb-0">Accra Warehouse → Kumasi Depot</p>
                </div>
              </div>
              <div className="maestro-capabilities-collage__tile">
                <img src={asset('sliders/maestro-slider-09.jpg')} alt="" />
                <div className="maestro-capabilities-collage__overlay">
                  <div className="d-flex align-items-center justify-content-between tw-mb-2">
                    <strong>Fleet Status</strong>
                    <span className="maestro-capabilities-collage__badge">Operational</span>
                  </div>
                  <p className="mb-0">Vehicles 48 · Drivers 62</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
