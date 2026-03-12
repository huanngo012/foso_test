import { icons, images } from '~/assets'
import type { Review, Service } from '~/components/type'
import { PATHS } from '~/utils/constant'

const {
  service_1,
  service_2,
  service_3,
  service_4,
  service_5,
  customer_1,
  customer_2,
  customer_3,
  image_review_1,
  image_review_2,
  image_review_3
} = images
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

export const services: Service[] = [
  {
    id: 1,
    title: 'Gói combo',
    handle: 'goi_combo',
    image: service_1,
    items: [
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      },
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      },
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      },
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      }
    ]
  },
  {
    id: 2,
    title: 'Medicure',
    handle: 'medicure',
    image: service_2,
    items: [
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      },
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      },
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      },
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      },
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      },
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      },
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      }
    ]
  },
  {
    id: 3,
    title: 'Pedicure',
    handle: 'pedicure',
    image: service_3,
    items: [
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      },
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      },
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      },
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      }
    ]
  },
  {
    id: 4,
    title: 'Hiệu ứng',
    handle: 'hieu_ung',
    image: service_4,
    items: [
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      },
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      },
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      },
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      },
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      },
      {
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)...',
        price: '390'
      }
    ]
  },
  {
    id: 5,
    title: 'Drinks',
    handle: 'drinks',
    image: service_5,
    items: [
      {
        title: 'Latte',
        description: '',
        price: '50k'
      },
      {
        title: 'Espresso',
        description: '',
        price: '50k'
      },
      {
        title: 'Americano',
        description: '',
        price: '50k'
      },
      {
        title: 'Cappuccino',
        description: '',
        price: '50k'
      },
      {
        title: 'Milkshake',
        description: '',
        price: '50k'
      },
      {
        title: 'Juice',
        description: '',
        price: '50k'
      }
    ]
  }
]

export const reviews: Review[] = [
  {
    id: 1,
    image: image_review_1,
    avatar: customer_1,
    name: 'Thuỳ Đỗ',
    description:
      'Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng vừa ấm cúng. Bộ nail thì khỏi chê luôn, các bạn làm rất tỉ mỉ, form đẹp và màu lên cực kỳ xinh, nhìn rất sang.'
  },
  {
    id: 2,
    image: image_review_2,
    avatar: customer_2,
    name: 'Thuỳ Đỗ',
    description:
      'Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng vừa ấm cúng. Bộ nail thì khỏi chê luôn, các bạn làm rất tỉ mỉ, form đẹp và màu lên cực kỳ xinh, nhìn rất sang.'
  },
  {
    id: 3,
    image: image_review_3,
    avatar: customer_3,
    name: 'John Doe',
    description:
      'Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng vừa ấm cúng. Bộ nail thì khỏi chê luôn, các bạn làm rất tỉ mỉ, form đẹp và màu lên cực kỳ xinh, nhìn rất sang.'
  },
  {
    id: 4,
    image: image_review_1,
    avatar: customer_1,
    name: 'Thuỳ Đỗ',
    description:
      'Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng vừa ấm cúng. Bộ nail thì khỏi chê luôn, các bạn làm rất tỉ mỉ, form đẹp và màu lên cực kỳ xinh, nhìn rất sang.'
  },
  {
    id: 5,
    image: image_review_2,
    avatar: customer_2,
    name: 'Thuỳ Đỗ',
    description:
      'Mỗi lần ghé The OM Lounge là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng vừa ấm cúng. Bộ nail thì khỏi chê luôn, các bạn làm rất tỉ mỉ, form đẹp và màu lên cực kỳ xinh, nhìn rất sang.'
  }
]
