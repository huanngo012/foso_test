import './style.scss'
import { icons } from '~/assets'
import ServiceCategory from './ServiceCategory'
import type { ServicesProps } from '~/components/type'

const { SearchIcon } = icons

const Services = ({ banner, services }: ServicesProps) => {
  return (
    <section className='services'>
      <div className='services__banner'>
        <img className='services__image' src={banner} alt='' />
      </div>
      <div className='container'>
        <div className='services__filter'>
          <ul className='services__tabs'>
            {services.map((item) => (
              <li key={item.id} className={`services__tab  ${item.id === 1 ? 'active' : ''}`}>
                <a href={`#${item.handle}`} className='services__tab-link'>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <form className='services__search'>
            <input type='text' placeholder='Tìm kiếm' className='services__search-input' />
            <span className='services__search-icon'>
              <SearchIcon />
            </span>
          </form>
        </div>
        <div className='services__categories'>
          {services.map((item) => (
            <ServiceCategory key={item.id} service={item} reverse={item.id % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
