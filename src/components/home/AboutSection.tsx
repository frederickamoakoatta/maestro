import { Link } from 'react-router-dom'
import { asset } from '../../utils/assets'
import { Icon } from '../ui/Icon'

export function AboutSection() {
  return (
    <section className="about py-140 position-relative max-lg-overflow-hidden">
      <img src={asset('images/shapes/about-plane.png')} alt="" className="cursor-big about-plane position-absolute tw-start-0 top-50" />
      <img src={asset('images/thumbs/truck-head.png')} alt="" className="truck-head cursor-big position-absolute tw-end-0 d-xxl-block d-none" />

      <div className="container">
        <div className="row gy-5 flex-wrap-reverse">
          <div className="col-lg-5 pe-xl-5">
            <div className="position-relative tw-pb-11 h-100">
              <div className="position-relative" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                <img src={asset('images/thumbs/about-img.png')} alt="" className="w-100 h-100 object-fit-cover" />
                <span className="cursor-big tw-w-75-px tw-h-75-px bg-main-600 d-flex justify-content-center align-items-center rounded-circle position-absolute tw-end-0 bottom-0 tw-me-305 tw-mb-305 d-lg-flex d-none">
                  <img src={asset('images/icons/play-bar.svg')} alt="" />
                </span>
              </div>

              <div
                className="positioned-image bg-white cursor-big common-shadow-four rounded-circle d-flex justify-content-center align-items-center position-absolute top-0 tw-start-0 tw-p-9"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <img src={asset('images/thumbs/glob-track.png')} alt="" />
              </div>

              <div
                className="tw-p-10 tw-pe-130-px tw--translate-x-30-px bg-main-600 position-absolute tw-start-0 bottom-0 tw--ms-30-px"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h1 className="text-white tw-mb-4 cursor-big">25+</h1>
                <div className="d-flex flex-column tw-gap-1 align-items-start">
                  <span className="text-white fw-medium cursor-small">Years Of Experience</span>
                  <img src={asset('images/shapes/line-shape.png')} alt="" />
                </div>
                <div className="cursor-small before-border position-relative tw-p-205 bg-white d-inline-flex align-items-start tw-gap-1 position-absolute top-0 tw-end-0 tw-mt-205 tw-me-205 z-1">
                  <span className="tw-text-xl fw-semibold text-main-600">4.9</span>
                  <span className="tw-text-xl fw-semibold text-main-600 d-flex tw--translate-y-4-px">
                    <Icon name="star" weight="fill" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-lg-5">
            <div>
              <span className="splitTextStyleTwo cursor-small tw-text-xl fw-bold fst-italic text-decoration-underline text-main-600 tw-mb-305">
                Safe Transportation & Logistics
              </span>
              <h1 className="splitTextStyleOne cursor-big tw-mb-8">Modern transport system & secure packaging</h1>
              <p className="cursor-small text-neutral-900 tw-ps-205 border-start border-main-600 border-2">
                Temperate ocean-bass sea chub unicorn fish treefish eulachon tidewater goby. Flier, bighe carp Devario shortnose sucker platy smalleye
              </p>

              <div className="tw-mt-9">
                <div className="row gy-4">
                  {[
                    { icon: 'images/icons/about-icon1.svg', title: 'Air Freight\nTransportation' },
                    { icon: 'images/icons/about-icon2.svg', title: 'Ocean Freight\nTransportation' },
                  ].map((item, index) => (
                    <div key={item.title} className="col-sm-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={200 + index * 200}>
                      <div className="animation-item d-flex align-items-center tw-gap-6">
                        <span className="cursor-big animate__heartBeat">
                          <img src={asset(item.icon)} alt="" />
                        </span>
                        <h6 className="cursor-big" style={{ whiteSpace: 'pre-line' }}>
                          {item.title}
                        </h6>
                      </div>
                      <p className="cursor-small text-neutral-1000 tw-mt-605 line-clamp-2">
                        Temperate ocean-bass sea chub bass sea chub treefish eulachon tidewater goby.
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/about"
                className="cursor-small btn btn-main hover-style-two button--stroke tw-py-405 d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-mt-11"
                data-block="button"
              >
                <span className="button__flair" />
                <span className="button__label">More About Us</span>
                <span className="tw-w-7 tw-h-7 bg-white text-main-600 tw-text-sm tw-rounded d-flex justify-content-center align-items-center position-relative group-hover-bg-main-600 group-hover-text-white tw-duration-500">
                  <Icon name="check" weight="bold" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
