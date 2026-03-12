import './style.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { icons } from '~/assets'
import type { TestimonialsProps } from '~/components/type'

const { QuoteIcon } = icons

const Testimonials = ({ title, highlight, banner, reviews }: TestimonialsProps) => {
  return (
    <section className='testimonials'>
      <div className='testimonials__banner'>
        <img className='testimonials__image' src={banner} alt='banner' />
      </div>
      <div className='container'>
        <div>
          <h2 className='testimonials__title'>
            {title} <p className='testimonials__title-highlight'>{highlight}</p>
          </h2>
          <div className='testimonials__slider'>
            <Swiper
              centeredSlides
              slidesPerView={'auto'}
              loop
              spaceBetween={66}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {reviews.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className='testimonials__card'>
                    <div className='testimonials__card-media'>
                      <img src={item.image} alt='' className='testimonials__card-image' />
                      <span className='testimonials__card-quote svg-wrapper'>
                        <QuoteIcon />
                      </span>
                    </div>

                    <div className='testimonials__card-user'>
                      <img src={item.avatar} alt='' className='testimonials__card-avatar' />

                      <div className='testimonials__card-info'>
                        <span className='testimonials__card-name'>{item.name}</span>
                        <div>
                          <span className='testimonials__card-desc truncate-3'>{item.description}</span>
                          <span className='testimonials__card-see-more'>Xem thêm</span>
                        </div>
                      </div>
                    </div>
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

export default Testimonials
