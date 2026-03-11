import { Link } from 'react-router-dom'
import { PATHS } from '~/utils/constant'
import { icons } from '~/assets'
import HeaderCart from './HeaderCart'
import HeaderLanguage from './HeaderLanguage'

const { Logo } = icons

const HeaderTop = () => {
  return (
    <div className='header__top'>
      <HeaderLanguage />
      <div className='header__logo'>
        <Link to={PATHS.HOME} className='svg-wrapper'>
          <Logo />
        </Link>
      </div>
      <HeaderCart />
    </div>
  )
}

export default HeaderTop
