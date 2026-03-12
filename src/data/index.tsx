import { icons, images } from '~/assets'
import type { Review, Service } from '~/components/type'
import type { CartItem } from '~/providers/CartProvider'
import { PATHS } from '~/utils/constant'

const {
  service_1,
  service_2,
  service_3,
  service_4,
  service_5,
  product_1,
  product_2,
  product_3,
  product_4,
  variant_1,
  variant_2,
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
        id: 1,
        title: 'Perfectly Polished',
        description: 'Làm mới màu sắc (Mani hoặc Pedi)',
        image: service_1,
        price: 390000,
        time: '10 phút'
      },
      {
        id: 2,
        title: 'Luxury Nail Combo',
        description: 'Chăm sóc móng tay và chân cao cấp',
        image: service_1,
        price: 520000,
        time: '10 phút'
      },
      {
        id: 3,
        title: 'Gel Polish Combo',
        description: 'Sơn gel bền màu cho tay hoặc chân',
        image: service_1,
        price: 420000,
        time: '10 phút'
      },
      {
        id: 4,
        title: 'Relax Spa Combo',
        description: 'Ngâm, massage và chăm sóc móng thư giãn',
        image: service_1,
        price: 480000,
        time: '10 phút'
      }
    ]
  },

  {
    id: 2,
    title: 'Manicure',
    handle: 'manicure',
    image: service_2,
    items: [
      {
        id: 5,
        title: 'Classic Manicure',
        description: 'Chăm sóc móng tay cơ bản',
        image: service_2,
        price: 220000,
        time: '10 phút'
      },
      {
        id: 6,
        title: 'Gel Manicure',
        description: 'Sơn gel bền màu cho móng tay',
        image: service_2,
        price: 350000,
        time: '10 phút'
      },
      {
        id: 7,
        title: 'Spa Manicure',
        description: 'Ngâm tay thư giãn và dưỡng móng',
        image: service_2,
        price: 300000,
        time: '10 phút'
      },
      {
        id: 8,
        title: 'French Manicure',
        description: 'Sơn móng kiểu French thanh lịch',
        image: service_2,
        price: 320000,
        time: '10 phút'
      },
      {
        id: 9,
        title: 'Deluxe Manicure',
        description: 'Chăm sóc móng tay cao cấp',
        image: service_2,
        price: 450000,
        time: '10 phút'
      },
      {
        id: 10,
        title: 'Luxury Manicure',
        description: 'Dịch vụ chăm sóc móng tay sang trọng',
        image: service_2,
        price: 550000,
        time: '10 phút'
      },
      {
        id: 11,
        title: 'Paraffin Manicure',
        description: 'Dưỡng ẩm sâu cho tay bằng sáp paraffin',
        image: service_2,
        price: 380000,
        time: '10 phút'
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
        id: 12,
        title: 'Classic Pedicure',
        description: 'Chăm sóc móng chân cơ bản',
        image: service_3,
        price: 250000,
        time: '10 phút'
      },
      {
        id: 13,
        title: 'Spa Pedicure',
        description: 'Ngâm chân và massage thư giãn',
        image: service_3,
        price: 350000,
        time: '10 phút'
      },
      {
        id: 14,
        title: 'Gel Pedicure',
        description: 'Sơn gel bền màu cho móng chân',
        image: service_3,
        price: 420000,
        time: '10 phút'
      },
      {
        id: 15,
        title: 'Deluxe Pedicure',
        description: 'Chăm sóc móng chân cao cấp',
        image: service_3,
        price: 520000,
        time: '10 phút'
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
        id: 16,
        title: 'Cat Eye Effect',
        description: 'Hiệu ứng mắt mèo nổi bật',
        image: service_4,
        price: 80000,
        time: '10 phút'
      },
      {
        id: 17,
        title: 'Chrome Effect',
        description: 'Hiệu ứng chrome ánh kim',
        image: service_4,
        price: 90000,
        time: '10 phút'
      },
      {
        id: 18,
        title: 'Marble Effect',
        description: 'Hiệu ứng vân đá sang trọng',
        image: service_4,
        price: 100000,
        time: '10 phút'
      },
      {
        id: 19,
        title: 'Ombre Effect',
        description: 'Hiệu ứng chuyển màu',
        image: service_4,
        price: 85000,
        time: '10 phút'
      },
      {
        id: 20,
        title: 'Glitter Effect',
        description: 'Hiệu ứng nhũ lấp lánh',
        image: service_4,
        price: 70000,
        time: '10 phút'
      },
      {
        id: 21,
        title: 'Sticker Nail Art',
        description: 'Trang trí móng bằng sticker',
        image: service_4,
        price: 60000,
        time: '10 phút'
      }
    ]
  },

  {
    id: 5,
    title: 'Drinks',
    handle: 'drinks',
    image: service_5,
    items: [
      { id: 22, title: 'Latte', description: '', image: service_5, price: 50000 },
      { id: 23, title: 'Espresso', description: '', image: service_5, price: 45000 },
      { id: 24, title: 'Americano', description: '', image: service_5, price: 45000 },
      { id: 25, title: 'Cappuccino', description: '', image: service_5, price: 50000 },
      { id: 26, title: 'Milkshake', description: '', image: service_5, price: 60000 },
      { id: 27, title: 'Fresh Juice', description: '', image: service_5, price: 55000 }
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

export const cart_items: CartItem[] = [
  {
    id: 28,
    image: product_1,
    title: 'Sơn gel',
    price: 264000,
    time: '10 phút',
    variants: [
      {
        id: 1,
        title: 'Da beo',
        image: variant_1,
        quantity: 1
      },
      {
        id: 2,
        title: 'Da beo',
        image: variant_2,
        quantity: 2
      }
    ]
  },
  {
    id: 29,
    image: product_2,
    title: 'Mắt mèo',
    price: 88000,
    variants: []
  },
  {
    id: 30,
    image: product_3,
    title: 'Sơn nhũ',
    price: 88000,
    time: '10 phút',
    variants: []
  },
  {
    id: 31,
    image: product_4,
    title: 'Sơn gel',
    price: 88000,
    time: '10 phút',
    variants: []
  }
]

export const booking_schedules = [
  {
    id: 1,
    label: 'Thứ 5',
    date: '04/09',
    disabled: false,
    times: [
      { id: 1, time: '09:00', period: 'AM', disabled: false },
      { id: 2, time: '09:30', period: 'AM', disabled: true },
      { id: 3, time: '10:00', period: 'AM', disabled: false },
      { id: 4, time: '10:30', period: 'AM', disabled: false },
      { id: 5, time: '11:00', period: 'AM', disabled: false },
      { id: 6, time: '11:30', period: 'AM', disabled: false },
      { id: 7, time: '12:00', period: 'PM', disabled: false },
      { id: 8, time: '12:30', period: 'PM', disabled: false },
      { id: 9, time: '01:00', period: 'PM', disabled: false },
      { id: 10, time: '01:30', period: 'PM', disabled: false },
      { id: 11, time: '02:00', period: 'PM', disabled: false },
      { id: 12, time: '02:30', period: 'PM', disabled: true },
      { id: 13, time: '03:00', period: 'PM', disabled: false },
      { id: 14, time: '03:30', period: 'PM', disabled: false },
      { id: 15, time: '04:00', period: 'PM', disabled: false },
      { id: 16, time: '04:30', period: 'PM', disabled: false },
      { id: 17, time: '05:00', period: 'PM', disabled: false },
      { id: 18, time: '05:30', period: 'PM', disabled: false },
      { id: 19, time: '06:00', period: 'PM', disabled: true },
      { id: 20, time: '06:30', period: 'PM', disabled: false }
    ]
  },

  {
    id: 2,
    label: 'Thứ 6',
    date: '05/09',
    disabled: true,
    times: [
      { id: 21, time: '09:00', period: 'AM', disabled: false },
      { id: 22, time: '09:30', period: 'AM', disabled: false },
      { id: 23, time: '10:00', period: 'AM', disabled: false },
      { id: 24, time: '10:30', period: 'AM', disabled: false },
      { id: 25, time: '11:00', period: 'AM', disabled: false },
      { id: 26, time: '11:30', period: 'AM', disabled: false },
      { id: 27, time: '12:00', period: 'PM', disabled: false },
      { id: 28, time: '12:30', period: 'PM', disabled: false },
      { id: 29, time: '01:00', period: 'PM', disabled: true },
      { id: 30, time: '01:30', period: 'PM', disabled: false },
      { id: 31, time: '02:00', period: 'PM', disabled: false },
      { id: 32, time: '02:30', period: 'PM', disabled: false },
      { id: 33, time: '03:00', period: 'PM', disabled: false },
      { id: 34, time: '03:30', period: 'PM', disabled: false },
      { id: 35, time: '04:00', period: 'PM', disabled: false },
      { id: 36, time: '04:30', period: 'PM', disabled: false },
      { id: 37, time: '05:00', period: 'PM', disabled: false },
      { id: 38, time: '05:30', period: 'PM', disabled: false },
      { id: 39, time: '06:00', period: 'PM', disabled: true },
      { id: 40, time: '06:30', period: 'PM', disabled: false }
    ]
  },

  {
    id: 3,
    label: 'Thứ 7',
    date: '06/09',
    disabled: false,
    times: [
      { id: 41, time: '09:00', period: 'AM', disabled: false },
      { id: 42, time: '09:30', period: 'AM', disabled: false },
      { id: 43, time: '10:00', period: 'AM', disabled: false },
      { id: 44, time: '10:30', period: 'AM', disabled: false },
      { id: 45, time: '11:00', period: 'AM', disabled: false },
      { id: 46, time: '11:30', period: 'AM', disabled: false },
      { id: 47, time: '12:00', period: 'PM', disabled: false },
      { id: 48, time: '12:30', period: 'PM', disabled: true },
      { id: 49, time: '01:00', period: 'PM', disabled: false },
      { id: 50, time: '01:30', period: 'PM', disabled: false },
      { id: 51, time: '02:00', period: 'PM', disabled: false },
      { id: 52, time: '02:30', period: 'PM', disabled: false },
      { id: 53, time: '03:00', period: 'PM', disabled: false },
      { id: 54, time: '03:30', period: 'PM', disabled: false },
      { id: 55, time: '04:00', period: 'PM', disabled: false },
      { id: 56, time: '04:30', period: 'PM', disabled: false },
      { id: 57, time: '05:00', period: 'PM', disabled: false },
      { id: 58, time: '05:30', period: 'PM', disabled: false },
      { id: 59, time: '06:00', period: 'PM', disabled: false },
      { id: 60, time: '06:30', period: 'PM', disabled: true }
    ]
  },

  {
    id: 4,
    label: 'Chủ Nhật',
    date: '07/09',
    disabled: false,
    times: [
      { id: 61, time: '09:00', period: 'AM', disabled: false },
      { id: 62, time: '09:30', period: 'AM', disabled: false },
      { id: 63, time: '10:00', period: 'AM', disabled: false },
      { id: 64, time: '10:30', period: 'AM', disabled: false },
      { id: 65, time: '11:00', period: 'AM', disabled: false },
      { id: 66, time: '11:30', period: 'AM', disabled: false },
      { id: 67, time: '12:00', period: 'PM', disabled: false },
      { id: 68, time: '12:30', period: 'PM', disabled: false },
      { id: 69, time: '01:00', period: 'PM', disabled: true },
      { id: 70, time: '01:30', period: 'PM', disabled: false },
      { id: 71, time: '02:00', period: 'PM', disabled: false },
      { id: 72, time: '02:30', period: 'PM', disabled: false },
      { id: 73, time: '03:00', period: 'PM', disabled: false },
      { id: 74, time: '03:30', period: 'PM', disabled: true },
      { id: 75, time: '04:00', period: 'PM', disabled: false },
      { id: 76, time: '04:30', period: 'PM', disabled: false },
      { id: 77, time: '05:00', period: 'PM', disabled: false },
      { id: 78, time: '05:30', period: 'PM', disabled: false },
      { id: 79, time: '06:00', period: 'PM', disabled: false },
      { id: 80, time: '06:30', period: 'PM', disabled: false }
    ]
  },

  {
    id: 5,
    label: 'Thứ 2',
    date: '08/09',
    disabled: false,
    times: [
      { id: 81, time: '09:00', period: 'AM', disabled: true },
      { id: 82, time: '09:30', period: 'AM', disabled: false },
      { id: 83, time: '10:00', period: 'AM', disabled: false },
      { id: 84, time: '10:30', period: 'AM', disabled: false },
      { id: 85, time: '11:00', period: 'AM', disabled: false },
      { id: 86, time: '11:30', period: 'AM', disabled: false },
      { id: 87, time: '12:00', period: 'PM', disabled: false },
      { id: 88, time: '12:30', period: 'PM', disabled: false },
      { id: 89, time: '01:00', period: 'PM', disabled: false },
      { id: 90, time: '01:30', period: 'PM', disabled: false },
      { id: 91, time: '02:00', period: 'PM', disabled: false },
      { id: 92, time: '02:30', period: 'PM', disabled: false },
      { id: 93, time: '03:00', period: 'PM', disabled: false },
      { id: 94, time: '03:30', period: 'PM', disabled: false },
      { id: 95, time: '04:00', period: 'PM', disabled: false },
      { id: 96, time: '04:30', period: 'PM', disabled: false },
      { id: 97, time: '05:00', period: 'PM', disabled: true },
      { id: 98, time: '05:30', period: 'PM', disabled: false },
      { id: 99, time: '06:00', period: 'PM', disabled: false },
      { id: 100, time: '06:30', period: 'PM', disabled: false }
    ]
  }
]
