import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { heroSlides } from '../../data/homepage/hero'
import { bgStyle } from '../../utils/assets'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'

export function HeroBannerFourSlider() {
  const [zoomReady, setZoomReady] = useState(false)
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setZoomReady(true))
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  const changeSlide = (direction: 'prev' | 'next') => {
    const swiper = swiperRef.current
    if (!swiper || swiper.destroyed) return

    const advance = () => {
      if (direction === 'next') {
        swiper.slideNext()
      } else {
        swiper.slidePrev()
      }
    }

    // Fade + virtualTranslate can leave `animating` stuck, which makes the next
    // click appear to do nothing. Snap the in-flight transition first.
    if (swiper.animating) {
      swiper.slideTo(swiper.activeIndex, 0, false)
      requestAnimationFrame(advance)
      return
    }

    advance()
  }

  return (
    <section
      className={`banner-four-area position-relative overflow-hidden${zoomReady ? ' banner-four-area--zoom-ready' : ''}`}
    >
      <div className="banner-four-wrapper position-relative">
        <Swiper
          modules={[EffectFade, Autoplay]}
          className="banner-four-active"
          speed={900}
          rewind
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          allowTouchMove
          onSwiper={(instance) => {
            swiperRef.current = instance
          }}
          onBeforeDestroy={(instance) => {
            if (swiperRef.current === instance) {
              swiperRef.current = null
            }
          }}
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div className="banner-four-height d-flex align-items-center justify-content-start">
                <div
                  className="banner-four-bg position-absolute w-100 h-100 top-0 start-0 scale-100 bg-img"
                  style={bgStyle(slide.backgroundImage)}
                />
                <div className="container position-relative z-3">
                  <div className="row">
                    <div className="col-xl-9 col-lg-8 col-md-11">
                      <div className="banner-four-content text-start">
                        <div className="banner-four-title-box position-relative tw-mb-8">
                          <h1 className="banner-four-title text-white splitTextStyleOne cursor-big tw-mb-6">
                            {slide.title}
                          </h1>
                          <p className="banner-four-paragraph text-white tw-text-lg line-clamp-3 max-w-612-px">
                            {slide.paragraph}
                          </p>
                        </div>
                        <div className="banner-four-btn-box d-flex flex-wrap align-items-center justify-content-start tw-gap-5 tw-mt-11">
                          <Button href={slide.primaryCta.href} label={slide.primaryCta.label} showCheck={false} />
                          <Link
                            to={slide.secondaryCta.href}
                            className="cursor-small d-inline-flex align-items-center tw-gap-2 text-white fw-semibold hover-text-main-600 group active--translate-y-2"
                          >
                            {slide.secondaryCta.label}
                            <span className="text-main-600 d-flex group-hover-text-white tw-duration-200 tw-text-base">
                              <Icon name="caret-circle-right" weight="fill" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="banner-four-arrow-box">
          <button
            className="banner-slider-prev"
            type="button"
            aria-label="Previous slide"
            onClick={() => changeSlide('prev')}
          >
            <Icon name="arrow-left" className="banner-four-arrow-icon" />
          </button>
          <button
            className="banner-slider-next"
            type="button"
            aria-label="Next slide"
            onClick={() => changeSlide('next')}
          >
            <Icon name="arrow-right" className="banner-four-arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  )
}
