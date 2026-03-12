import './style.scss'
import type { HeroProps } from '~/components/type'

const Hero = ({ title, banner }: HeroProps) => {
  return (
    <section className='hero'>
      <div className='hero__banner'>
        <img className='hero__image' src={banner} alt={title} />
      </div>
      <div className='container'>
        <h1 className='hero__title'>{title}</h1>
      </div>
    </section>
  )
}

export default Hero
