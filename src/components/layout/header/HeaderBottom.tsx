import { Link, useLocation } from 'react-router-dom'
import { PATHS } from '~/utils/constant'
import HeaderCart from './HeaderCart'
import { icons } from '~/assets'
import { menus } from '~/data'
import HeaderLanguage from './HeaderLanguage'
import { forwardRef } from 'react'

const { LogoOnScrll } = icons

const HeaderBottom = forwardRef<HTMLDivElement>((_, ref) => {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <div ref={ref} className='header__bottom'>
      <div className='header__logo'>
        <Link to={PATHS.HOME} className='svg-wrapper'>
          <LogoOnScrll />
        </Link>
      </div>
      <div className='header__menu'>
        <ul className='list-menu'>
          {menus.map((item) => (
            <li key={item.id} className={`menu-item ${item.url === pathname ? 'active' : ''}`}>
              <Link to={item.url} className='menu-link'>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='header__action'>
        <HeaderLanguage />
        <HeaderCart />
      </div>
    </div>
  )
})

export default HeaderBottom
