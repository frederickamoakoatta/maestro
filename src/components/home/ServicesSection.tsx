import { useState } from 'react'
import { serviceExtras, serviceFeatures, serviceTabs } from '../../data/homepage/services'
import { asset } from '../../utils/assets'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].id)

  return (
    <section className="service pb-140 position-relative half-bg-white bg-neutral">
      <img src={asset('images/shapes/pattern-bg.png')} alt="" className="position-absolute bottom-0 tw-start-0 w-100 h-50" />

      <div className="container">
        <div className="max-w-856-px mx-auto text-center tw-pb-16 tw-mb-6">
          <SectionHeading
            eyebrow="Safe Transportation & Logistics"
            title="Fastest & Secured Logistics Solution & services"
          />
        </div>
      </div>

      <div className="tw-container-1540-px mx-auto tw-px-4">
        <div className="bg-main-two-600 tw-rounded-2xl position-relative z-1">
          <img src={asset('images/thumbs/service-bg-img.png')} alt="" className="position-absolute tw-end-0 bottom-0 z-n1" />

          <div className="container">
            <div className="row gy-4 align-items-end">
              <div className="col-xl-5" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                <div className="pt-120">
                  <div className="bg-neutral-50 px-lg-5 tw-px-6 tw-pt-76-px tw-pb-15 rectangle-shape">
                    <ul className="common-tab nav nav-pills d-flex flex-column tw-gap-8" role="tablist">
                      {serviceTabs.map((tab) => (
                        <li key={tab.id} className="nav-item" role="presentation">
                          <button
                            type="button"
                            className={`nav-link cursor-big tw-text-xl animation-item text-main-two-600 hover-text-main-600 active-scale-094 tw-duration-300 fw-semibold tw-px-8 tw-py-4 tw-rounded-lg bg-white w-100 ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                          >
                            <span className="d-flex align-items-center gap-xxl-5 tw-gap-6 text-start">
                              <img src={asset(tab.icon)} alt="" className="d-sm-flex d-none animate__swing" />
                              <span>{tab.label}</span>
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-7 ps-xl-5">
                <div className="tab-content py-120">
                  {serviceTabs.map((tab) => (
                    <div
                      key={tab.id}
                      className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
                      role="tabpanel"
                    >
                      <p
                        className="bg-main-two-900 tw-py-8 tw-pe-8 tw-ps-14 tw-text-lg text-white fw-semibold border-start border-main-600 border-5 tw-mb-11 cursor-small"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                      >
                        For each project we establish relationships with partners who we know will help us create added value for
                      </p>
                      <div className="d-flex align-items-center position-relative max-w-620-px" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        <span className="tw-w-90-px tw-h-90-px bg-white rounded-circle d-flex justify-content-center align-items-center position-absolute top-50 tw--translate-y-50 z-2 tw-start-48">
                          <img src={asset('images/icons/service-icon5.svg')} alt="" />
                        </span>
                        <div className="tw--me-32-px d-sm-flex d-none position-relative">
                          <img src={asset('images/thumbs/service-img.png')} alt="" />
                        </div>
                        <div className="bg-main-600 tw-h-280-px d-flex justify-content-center align-items-center tw-pe-6 tw-ps-8 position-relative z-1 rectangle-shape-two max-w-286-px w-100">
                          <ul className="cursor-small d-flex flex-column tw-gap-2">
                            {serviceFeatures.map((feature, index) => (
                              <li key={feature} className="d-flex align-items-center tw-gap-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={200 + index * 200}>
                                <span className="text-white d-flex">
                                  <Icon name="check" weight="bold" />
                                </span>
                                <span className="text-white fw-medium">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <ul className="cursor-small d-flex flex-row flex-wrap tw-gap-8 tw-mt-14">
                        {serviceExtras.map((extra, index) => (
                          <li key={extra} className="d-flex align-items-center tw-gap-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={200 + index * 200}>
                            <span className="text-main-600 d-flex">
                              <Icon name="check" weight="bold" />
                            </span>
                            <span className="text-white fw-medium">{extra}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
