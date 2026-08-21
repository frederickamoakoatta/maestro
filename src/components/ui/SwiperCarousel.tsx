import type { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperOptions } from 'swiper/types'

interface SwiperCarouselProps {
  className?: string
  wrapperClassName?: string
  config: SwiperOptions
  items: ReactNode[]
}

export function SwiperCarousel({ className, wrapperClassName, config, items }: SwiperCarouselProps) {
  return (
    <Swiper className={className} {...config}>
      {items.map((item, index) => (
        <SwiperSlide key={index} className={wrapperClassName}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
