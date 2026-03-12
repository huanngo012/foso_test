import { images } from '~/assets'
import { Hero, ImageBanner, Services, Testimonials } from '~/components'
import { reviews, services } from '~/data'

const { hero_banner, service_banner, testimonials_banner, image_banner } = images

const ServicesPage = () => {
  return (
    <div>
      <Hero title='Dịch Vụ' banner={hero_banner} />
      <Services banner={service_banner} services={services} />
      <Testimonials title='nhận xét từ' highlight='Khách Hàng' banner={testimonials_banner} reviews={reviews} />
      <ImageBanner
        title='Đặt lịch hẹn chữa lành'
        description='Đến The OM Lounge để xả stress và làm mới mình. Vẻ đẹp bắt đầu từ những điều nhỏ nhất và lan tỏa đến cả tâm
            hồn.'
        banner={image_banner}
        button_label='Trải nghiệm ngay'
        button_url='#'
      />
    </div>
  )
}

export default ServicesPage
