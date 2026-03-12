import './style.scss'
import { Link } from 'react-router-dom'
import { icons } from '~/assets'
import { menus_footer, socials } from '~/data'

const { LogoFooter, FlowerIcon, ShapeIcon } = icons

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__decoration'>
        <FlowerIcon />
      </div>
      <div className='container'>
        <div className='footer__top'>
          <div className='footer__top-left'>
            <div className='footer__logo svg-wrapper'>
              <LogoFooter />
            </div>
          </div>
          <div className='footer__top-right'>
            <div className='footer__sitemap'>
              <div className='footer__heading'>
                <div className='dot-wrapper'>
                  <span className='dot dot--filled'></span>
                  <span className='dot dot--outline'></span>
                </div>
                <span>SITEMAP</span>
              </div>
              <ul className='footer__menu'>
                {menus_footer.map((item) => (
                  <li key={item.id} className='footer__menu-item'>
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='footer__info'>
              <div className='footer__contact'>
                <div className='footer__heading'>
                  <div className='dot-wrapper'>
                    <span className='dot dot--filled'></span>
                    <span className='dot dot--outline'></span>
                  </div>
                  <span>LIÊN HỆ</span>
                </div>
                <div className='footer_list_info'>
                  <p className='footer__phone'>+84 89 812 12 97</p>
                  <p className='footer__address'>
                    6 Đường G, Phú Mỹ, Quận 7, TP Hồ Chí Minh
                    <br />
                    (gần Crescent Mall)
                  </p>
                  <div className='footer__hours'>
                    <p className='footer__hours-days'>
                      <span>Thứ 2 - Thứ 6:</span> <span> Thứ 7 - Chủ nhật:</span>
                    </p>
                    <p className='footer__hours-time'>
                      <span>09:00 - 19:00 </span> <span>09:00 - 20:00</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='footer__cta'>
                <button className='footer__button'>
                  <span className='icon'>
                    <ShapeIcon />
                  </span>
                  <span className='text'>Đặt lịch ngay</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='footer__bottom'>
          <div className='footer__social'>
            {socials.map((item) => (
              <Link key={item.id} to={item.url} className='footer__social-item svg-wrapper'>
                {item.icon}
              </Link>
            ))}
          </div>

          <p className='footer__copyright'>© 2025 — Copyright The OM Lounge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
