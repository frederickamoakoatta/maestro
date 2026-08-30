import { logisticsChanging } from '../../data/content/homepage/overview'
import { aosAttrs } from '../../utils/aos'
import { asset } from '../../utils/assets'
import { Icon } from '../ui/Icon'

export function LogisticsChangingSection() {
  return (
    <section className="maestro-section maestro-logistics py-140 position-relative overflow-hidden">
      <div className="container">
        <div className="row gy-5 align-items-center tw-mb-15">
          <div className="col-lg-6" {...aosAttrs(0)}>
            <span className="maestro-section-heading__eyebrow splitTextStyleTwo cursor-small tw-text-xl fw-bold fst-italic tw-mb-305 d-block">
              {logisticsChanging.eyebrow}
            </span>
            <h2 className="maestro-logistics__title cursor-big tw-mb-6">
              Customers expect a <em>digital experience</em> at every step
            </h2>
            {logisticsChanging.description && (
              <p className="maestro-logistics__lead cursor-small mb-0">{logisticsChanging.description}</p>
            )}
          </div>
          <div className="col-lg-6" {...aosAttrs(140, 'fade-left')}>
            <div className="maestro-logistics-visual" aria-hidden="true">
              <img
                src={asset('apps/maestro-app-trucks.png')}
                alt=""
                className="maestro-logistics-visual__phone"
              />
              <div className="maestro-logistics-visual__card">
                <span className="maestro-logistics-visual__status">Shipment in progress</span>
                <strong>Accra → Kumasi</strong>
                <span>Live tracking · On schedule</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row gy-4">
          {logisticsChanging.items.map((item, index) => (
            <div key={item.title} className="col-lg-3 col-md-6" {...aosAttrs(index * 80)}>
              <article className="maestro-expect-card h-100">
                <span className="maestro-expect-card__icon" aria-hidden="true">
                  <Icon name={item.icon} weight="regular" />
                </span>
                <h3 className="maestro-expect-card__title cursor-big">{item.title}</h3>
                <p className="maestro-expect-card__text cursor-small">{item.description}</p>
              </article>
            </div>
          ))}
        </div>

        <div
          className="maestro-logistics-banner d-flex flex-column flex-md-row align-items-md-center tw-gap-5"
          {...aosAttrs(80)}
        >
          <span className="maestro-logistics-banner__mark" aria-hidden="true">
            <Icon name="plugs-connected" weight="fill" />
          </span>
          <div>
            <p className="maestro-logistics-banner__title cursor-big mb-1">
              Maestro replaces fragmented processes with one integrated platform.
            </p>
            <p className="maestro-logistics-banner__text cursor-small mb-0">
              Simplify operations. Delight customers. Grow your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
