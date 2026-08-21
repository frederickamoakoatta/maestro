import { asset, bgStyle } from '../../utils/assets'
import { SectionHeading } from '../ui/SectionHeading'

const steps = [
  { icon: 'images/icons/tranport-way-icon1.svg', title: 'Replenishment and picking', bgClass: 'bg-main-600', delay: 100, showArrow: true },
  { icon: 'images/icons/tranport-way-icon2.svg', title: 'Warehousing operation', bgClass: 'bg-main-two-600', delay: 200, showArrow: true },
  { icon: 'images/icons/tranport-way-icon3.svg', title: 'Transportation Processing', bgClass: 'bg-main-600', delay: 300, showArrow: false },
]

export function TransportWaySection() {
  return (
    <section className="py-140 bg-img position-relative overflow-hidden" style={bgStyle('images/shapes/how-it-work-bg.png')}>
      <img src={asset('images/shapes/plane-down.png')} alt="" className="plan-down position-absolute tw-start-0 top-0" />
      <img src={asset('images/shapes/biman-line.png')} alt="" className="cursor-small d-lg-block d-none position-absolute tw-end-0 top-50 tw--translate-y-50 tw-me-15" />

      <div className="container">
        <div className="max-w-840-px mx-auto text-center tw-mb-15">
          <SectionHeading eyebrow="Safe Transportation & Logistics" title="Introducing The most Modern way of Transportation" />
        </div>

        <div className="how-it-work-item-wrapper">
          <div className="row gy-4">
            {steps.map((step) => (
              <div key={step.title} className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={step.delay}>
                <div className="transport-card position-relative">
                  <div className="how-it-work-item animation-item position-relative">
                    <div className="half-bg-white z-1 position-relative">
                      <span className={`how-it-work-item__icon cursor-big ${step.bgClass} tw-w-114-px tw-h-114-px d-flex justify-content-center align-items-center rounded-circle tw-ms-10 tw-duration-300`}>
                        <img src={asset(step.icon)} alt="" className="animate__heartBeat" />
                      </span>
                    </div>
                    <div className="bg-white tw-px-10 tw-py-15 tw-pt-8 position-relative">
                      {step.showArrow && (
                        <img src={asset('images/shapes/curve-arrow-right.png')} alt="" className="position-absolute top-0 tw-end-0 tw-me-15 animate__wobble__two z-1" />
                      )}
                      <h5 className="splitTextStyleTwo tw-mb-5 cursor-big max-w-200-px">{step.title}</h5>
                      <p className="text-neutral-1000 cursor-small">Temperate ocean-bass sea chub bass sea chub treefish eulachon tidewater goby.</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
