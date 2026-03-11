import { images } from '~/assets'
import { Hero } from '~/components'

const { hero_banner } = images

const ContactPage = () => {
  return (
    <div>
      <Hero title='Liên Hệ' banner={hero_banner} />
    </div>
  )
}

export default ContactPage
