import { icons } from '~/assets'
import { PATHS } from '~/utils/constant'

const { FacebookIcon, TikTokIcon, ZaloIcon } = icons

export const menus = [
  {
    id: 1,
    title: 'Trang chủ',
    url: PATHS.HOME
  },
  {
    id: 2,
    title: 'Giới thiệu',
    url: PATHS.ABOUT
  },
  {
    id: 3,
    title: 'Dịch vụ',
    url: PATHS.SERVICE
  },
  {
    id: 4,
    title: 'Tin tức',
    url: PATHS.NEWS
  },
  {
    id: 5,
    title: 'Liên hệ',
    url: PATHS.CONTACT
  }
]

export const menus_footer = [
  {
    id: 1,
    title: 'Trang chủ',
    url: PATHS.HOME
  },
  {
    id: 2,
    title: 'Tin tức',
    url: PATHS.NEWS
  },
  {
    id: 3,
    title: 'Giới thiệu',
    url: PATHS.ABOUT
  },
  {
    id: 4,
    title: 'Liên hệ',
    url: PATHS.CONTACT
  },
  {
    id: 5,
    title: 'Dịch vụ',
    url: PATHS.SERVICE
  }
]

export const socials = [
  {
    id: 1,
    icon: <FacebookIcon />,
    url: '#'
  },
  {
    id: 2,
    icon: <TikTokIcon />,
    url: '#'
  },
  {
    id: 3,
    icon: <ZaloIcon />,
    url: '#'
  }
]
