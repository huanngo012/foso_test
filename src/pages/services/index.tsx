import { images } from '~/assets'
import { Hero } from '~/components'

const { hero_banner } = images

const ServicesPage = () => {
  return (
    <div>
      <Hero title='Dịch Vụ' banner={hero_banner} />
    </div>
  )
}

export default ServicesPage
