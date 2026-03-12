import './style.scss'
import { Link } from 'react-router-dom'
import type { ImageBannerProps } from '~/components/type'

const ImageBanner = ({ title, description, banner, button_label, button_url }: ImageBannerProps) => {
  return (
    <section className='image-banner'>
      <div className='image-banner__banner'>
        <img className='image-banner__image' src={banner} alt={title} />
      </div>
      <div className='container animate animate--fade-in'>
        <div className='image-banner__content'>
          <h2 className='image-banner__title'>{title}</h2>
          <p className='image-banner__desc'>{description}</p>
          <Link to={button_url} className='image-banner__button button button--secondary'>
            {button_label}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ImageBanner
