import { icons } from '~/assets'
import type { ServiceCategoryProps } from '~/components/type'

const { PlusIcon } = icons

const ServiceCategory = ({ service, reverse }: ServiceCategoryProps) => {
  return (
    <div id={service.handle} className={`service-category ${reverse ? 'service-category--reverse' : ''}`}>
      <div className='service-category__image animate animate--fade-left'>
        <img src={service.image} alt={service.title} />
      </div>
      <div className='service-category__content animate animate--fade-right'>
        <h2 className='service-category__title'>{service.title}</h2>
        <ul className='service-category__list'>
          {service.items.map((item, index) => (
            <li key={index} className='service-category__item'>
              <span className='service-category__item-title'>{item.title}</span>
              {item.description && <p className='service-category__item-desc'>{item.description}</p>}
              <div className='service-category__item-meta'>
                <span className='service-category__price'>
                  {item.price} <span>k</span>
                </span>
                <span className='service-category__add'>
                  <PlusIcon />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ServiceCategory
