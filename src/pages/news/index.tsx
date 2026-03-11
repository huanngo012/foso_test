import { images } from '~/assets'
import { Hero } from '~/components'

const { hero_banner } = images

const NewsPage = () => {
  return (
    <div>
      <Hero title='Tin Tức' banner={hero_banner} />
    </div>
  )
}

export default NewsPage
