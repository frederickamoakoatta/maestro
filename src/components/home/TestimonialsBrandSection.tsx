import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { brandLogos, testimonials } from '../../data/homepage/carousels'
import { asset } from '../../utils/assets'
import { Icon } from '../ui/Icon'

export function TestimonialsBrandSection() {
  return (
    <section className="testimonials-brand pb-140 tw-mt-9 position-relative z-1">
      <img src={asset('images/shapes/testimonials-brand-bg.png')} alt="" className="position-absolute bottom-0 tw-start-0 tw-end-0 z-n1 w-100 h-75" />
      <img src={asset('images/shapes/moon-shape.png')} alt="" className="moon-shape position-absolute bottom-0 tw-start-0 z-n1 tw-mb-17" />

      <div className="tw-container-1380-px tw-px-4 mx-auto">
        <div className="testimonials-box bg-white">
          <Swiper
            className="testimonials-slider"
            modules={[Autoplay]}
            loop
            speed={1500}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={1}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name} className="bg-white">
                <div className="row gy-4">
                  <div className="col-md-4 xs-d-block d-none">
                    <div className="position-relative max-w-318-px tw-me-11 tw-mt-11">
                      <div className="mask-shape d-flex position-relative">
                        <img src={asset(item.image)} alt="Testimonials" />
                      </div>
                      <span className="tw-w-90-px tw-h-90-px bg-main-600 rounded-circle d-flex justify-content-center align-items-center position-absolute top-0 tw-end-0 tw--me-45-px tw--mt-45-px cursor-big">
                        <img src={asset('images/icons/quate-icon.svg')} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="ps-xxl-5">
                      <p className="xl-tw-text-3xl tw-text-xl fw-bold text-main-two-600 cursor-big">{item.quote}</p>
                      <span className="tw-my-10 border-bottom border-neutral-100 d-block" />
                      <div className="d-flex align-items-center justify-content-between flex-wrap tw-gap-2">
                        <div>
                          <h5 className="tw-mb-2 cursor-big">{item.name}</h5>
                          <span className="text-neutral-900 cursor-small">{item.role}</span>
                        </div>
                        <ul className="d-flex align-items-center tw-gap-2 cursor-small">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <li key={i} className="text-star tw-text-base">
                              <Icon name="star" weight="fill" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="container">
        <div className="tw-mt-17">
          <div className="left-right-line text-center position-relative z-1">
            <p className="d-inline-block tw-text-xl fw-bold text-main-two-600 tw-px-10 bg-bg-color cursor-small">
              Trusted and funded by more then <span className="text-main-600">900</span> companies
            </p>
          </div>

          <div className="tw-mt-12">
            <Swiper
              className="brand-slider"
              modules={[Autoplay]}
              loop
              speed={1500}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={30}
              breakpoints={{
                0: { slidesPerView: 2 },
                576: { slidesPerView: 3 },
                992: { slidesPerView: 5 },
                1200: { slidesPerView: 6 },
              }}
            >
              {brandLogos.map((logo, index) => (
                <SwiperSlide key={`${logo}-${index}`} className="me-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={100 + index * 100}>
                  <div className="text-center cursor-big">
                    <img src={asset(logo)} alt="" className="max-w-175-px" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
