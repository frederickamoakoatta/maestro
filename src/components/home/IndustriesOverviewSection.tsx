import { useRef } from 'react'
import { Link } from 'react-router-dom'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { industriesOverview } from '../../data/content/homepage/industries'
import { aosAttrs } from '../../utils/aos'
import { asset } from '../../utils/assets'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

export function IndustriesOverviewSection() {
  const swiperRef = useRef<SwiperType | null>(null)

  const goPrev = () => swiperRef.current?.slidePrev()
  const goNext = () => swiperRef.current?.slideNext()

  return (
    <section
      className="maestro-section maestro-outcomes maestro-industries py-140 position-relative overflow-hidden"
      style={{ ['--maestro-outcomes-image' as string]: `url(${asset('sliders/maestro-slider-09.jpg')})` }}
    >
      <div className="maestro-outcomes__overlay" aria-hidden="true" />
      <div className="container position-relative z-1">
        <div className="max-w-840-px mx-auto text-center tw-mb-15" {...aosAttrs(0)}>
          <SectionHeading
            className="maestro-section-heading--light"
            eyebrow="Industries We Serve"
            title="Who Maestro is for"
            titleTag="h2"
          />
          <p className="maestro-outcomes__lead cursor-small max-w-632-px mx-auto">
            Maestro supports organisations that move goods, equipment and people—digitising logistics from customer
            booking through to final delivery.
          </p>
        </div>
      </div>

      <div className="maestro-industries-carousel position-relative z-1" aria-label="Industries we serve">
        <button
          type="button"
          className="maestro-industries-carousel__arrow maestro-industries-carousel__arrow--prev cursor-small"
          aria-label="Previous industry"
          onClick={goPrev}
        >
          <Icon name="arrow-left" weight="bold" />
        </button>

        <Swiper
          className="maestro-industries-carousel__swiper"
          spaceBetween={18}
          speed={650}
          slidesPerView={1.12}
          breakpoints={{
            576: { slidesPerView: 1.35, spaceBetween: 20 },
            768: { slidesPerView: 2.15, spaceBetween: 22 },
            1200: { slidesPerView: 3.1, spaceBetween: 24 },
          }}
          onSwiper={(instance) => {
            swiperRef.current = instance
          }}
          onBeforeDestroy={(instance) => {
            if (swiperRef.current === instance) swiperRef.current = null
          }}
        >
          {industriesOverview.map((industry) => (
            <SwiperSlide key={industry.title} className="maestro-industries-carousel__slide">
              <article className="maestro-outcome-card maestro-industry-card h-100">
                <span className="maestro-outcome-card__icon" aria-hidden="true">
                  <Icon name={industry.icon} weight="regular" />
                </span>
                <h3 className="maestro-outcome-card__title cursor-big">{industry.title}</h3>
                <p className="maestro-industry-card__desc cursor-small">{industry.description}</p>
                <ul className="maestro-industry-card__list">
                  {industry.idealFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to={industry.href} className="maestro-industry-card__link cursor-small">
                  Learn more
                  <Icon name="arrow-up-right" weight="bold" />
                </Link>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className="maestro-industries-carousel__arrow maestro-industries-carousel__arrow--next cursor-small"
          aria-label="Next industry"
          onClick={goNext}
        >
          <Icon name="arrow-right" weight="bold" />
        </button>
      </div>
    </section>
  )
}
