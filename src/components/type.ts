export interface HeroProps {
  title: string
  banner: string
}

export interface ImageBannerProps {
  title: string
  description: string
  banner: string
  button_label: string
  button_url: string
}

export interface Review {
  id: number
  image: string
  avatar: string
  name: string
  description: string
}

export interface TestimonialsProps {
  title: string
  highlight: string
  banner: string
  reviews: Review[]
}

export type ServiceItem = {
  id: number
  title: string
  image: string
  description: string
  price: number
  time?: string
}

export type Service = {
  id: number
  title: string
  image: string
  handle: string
  items: ServiceItem[]
}

export type ServicesProps = {
  banner: string
  services: Service[]
}

export interface ServiceCategoryProps {
  reverse?: boolean
  service: Service
}
