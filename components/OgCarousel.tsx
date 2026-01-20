'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const images = [
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
  'https://images.unsplash.com/photo-1503602642458-232111445657',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
  'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
  'https://images.unsplash.com/photo-1434389677669-e08b4cac3105',
]

const OgCarousel = () => {
  return (
    <div className="w-full h-full bg-[#f5f5f5] rounded-2xl p-4">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1.1}
        spaceBetween={16}
        centeredSlides
        loop
        grabCursor
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="w-full h-full max-h-[360px]
                            bg-white rounded-2xl overflow-hidden
                            shadow-md transition-transform duration-300
                            hover:scale-[1.02]">
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default OgCarousel
