import { features } from '../../data/homepage/features'
import { asset, bgStyle } from '../../utils/assets'

export function FeaturesSection() {
  return (
    <section className="features bg-neutral-50 bg-img" style={bgStyle('images/shapes/features-bg.png')}>
      <div className="row g-0 features-item-wrapper">
        {features.map((feature) => (
          <div
            key={feature.number}
            className="col-lg-3 col-sm-6 col-xs-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={feature.aosDelay}
          >
            <div
              className={`features-item animation-item p-80-px tw-duration-300 position-relative h-100 ${feature.highlighted ? 'bg-white common-shadow-two' : ''}`}
            >
              <span className="fw-bold tw-text-xl text-main-two-600 position-absolute top-0 tw-end-0 tw-mt-12 tw-me-12 font-heading cursor-small">
                {feature.number}
              </span>
              <span className="pb-60-px cursor-big animate__wobble">
                <img src={asset(feature.icon)} alt="" />
              </span>
              <h5 className="tw-mb-7 cursor-big splitTextStyleTwo">{feature.title}</h5>
              <p className="text-neutral-1000 cursor-small">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
