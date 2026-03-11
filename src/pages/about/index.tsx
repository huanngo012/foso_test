import { images } from '~/assets'
import { Hero } from '~/components'

const { hero_banner } = images

const AboutPage = () => {
  return (
    <div>
      <Hero title='Giới Thiệu' banner={hero_banner} />
    </div>
  )
}

export default AboutPage
