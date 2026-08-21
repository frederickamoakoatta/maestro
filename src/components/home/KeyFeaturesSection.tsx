import { asset } from '../../utils/assets'
import { SectionHeading } from '../ui/SectionHeading'

const leftFeatures = [
  { icon: 'images/icons/key-features-icon1.svg', title: 'Decentralized Trade', delay: 100 },
  { icon: 'images/icons/key-features-icon2.svg', title: 'Direct Transport', delay: 300 },
  { icon: 'images/icons/key-features-icon3.svg', title: 'Good Packaging', delay: 500 },
]

const rightFeatures = [
  { icon: 'images/icons/key-features-icon4.svg', title: 'Highly Flexible', delay: 200 },
  { icon: 'images/icons/key-features-icon5.svg', title: 'Secure Delivery', delay: 400 },
  { icon: 'images/icons/key-features-icon6.svg', title: 'Air Freight Facility', delay: 600 },
]

function FeatureColumn({ items }: { items: typeof leftFeatures }) {
  return (
    <div className="d-flex flex-column tw-gap-56-px">
      {items.map((item) => (
        <div key={item.title} className="animation-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={item.delay}>
          <span className="tw-mb-6 cursor-small animate__flipInY">
            <img src={asset(item.icon)} alt="" />
          </span>
          <h5 className="splitTextStyleTwo tw-mb-5 cursor-big">{item.title}</h5>
          <p className="text-neutral-1000 cursor-small fw-medium">Temperate ocean-bass sea chub treefish eulachon tidewater goby.</p>
        </div>
      ))}
    </div>
  )
}

export function KeyFeaturesSection() {
  return (
    <section className="key-features py-140 position-relative">
      <img src={asset('images/thumbs/ship.png')} alt="" className="curve-animation position-absolute top-0 tw-mt-16 tw-end-0 tw-me-14" />
      <img src={asset('images/shapes/key-features-dotted.png')} alt="" className="position-absolute bottom-0 tw-end-0" />

      <div className="position-relative z-1">
        <img src={asset('images/shapes/key-features-shape.png')} alt="" className="position-absolute bottom-0 tw-start-0 w-100 z-n1" />

        <div className="container">
          <div className="max-w-840-px mx-auto text-center tw-mb-15">
            <SectionHeading eyebrow="Safe Transportation & Logistics" title="Why we are considered the best in business" />
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-6">
              <FeatureColumn items={leftFeatures} />
            </div>
            <div className="col-lg-6 d-lg-block d-none">
              <div className="bg-neutral-50 tw-py-8 tw-px-3 border tw-border-dashed border-neutral-200 tw-rounded-3xl position-relative h-100">
                <img src={asset('images/thumbs/kay-features-img.png')} alt="" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" />
                <div className="bg-blur-two tw-py-10 px-lg-5 tw-px-6 position-absolute bottom-0 tw-start-50 translate-50-rotate-10 tw-rounded-32-px min-w-max tw-mb-14">
                  <h1 className="cursor-big">
                    Since <span className="text-main-600">1998</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-6 ps-xxl-5">
              <FeatureColumn items={rightFeatures} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
