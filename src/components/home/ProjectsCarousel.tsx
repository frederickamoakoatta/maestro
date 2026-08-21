import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { projects } from '../../data/homepage/carousels'
import { asset } from '../../utils/assets'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

export function ProjectsCarousel() {
  return (
    <section className="project half-bg-w-50 py-140 position-relative z-1 overflow-hidden">
      <img src={asset('images/thumbs/projects-shape-img.png')} alt="" className="project-shape-img position-absolute tw-start-0 top-0 z-n1" />

      <div className="container">
        <div className="d-flex align-items-center flex-wrap tw-gap-6 justify-content-between tw-mb-15">
          <div className="max-w-632-px text-start">
            <SectionHeading
              eyebrow="Safe Transportation & Logistics"
              title="Transport & Logistics projects that we have"
              centered={false}
            />
          </div>
          <Button href="/service" label="View services" variant="main-two" rounded showCheck={false} />
        </div>
      </div>

      <div className="container">
        <div className="view-w-100 position-relative z-1">
          <Swiper
            className="project-slider"
            modules={[Autoplay]}
            loop
            speed={1500}
            spaceBetween={30}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={`${project.title}-${project.aosDelay}`} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={project.aosDelay}>
                <div className="group-item">
                  <div className="position-relative hover-overlay">
                    <img src={asset(project.image)} alt="" className="w-100 h-100 object-fit-cover" />
                    <Link
                      to={project.href}
                      className="cursor-big tw-invisible opacity-0 group-hover-item-visible group-hover-item-opacity-1 btn btn-main hover-style-one button--stroke tw-w-140-px tw-h-140-px d-flex justify-content-center align-items-center group active--translate-y-2 rounded-circle tw-text-9 position-absolute tw-start-50 top-50 translate-middle"
                      data-block="button"
                    >
                      <span className="button__flair" />
                      <span className="button__label">
                        <Icon name="arrow-down-right" />
                      </span>
                    </Link>
                  </div>
                  <div className="tw-mt-8">
                    <span className="text-neutral-1000 tw-mb-5 cursor-small">{project.category}</span>
                    <h5 className="cursor-big">
                      <Link to={project.href} className="hover-text-main-600 line-clamp-2 splitTextStyleTwo">
                        {project.title}
                      </Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
