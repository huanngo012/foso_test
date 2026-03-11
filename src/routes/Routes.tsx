import { AboutPage, ContactPage, HomePage, NewsPage, ServicesPage } from '~/pages'
import { PATHS } from '~/utils/constant'

const routes = [
  { path: PATHS.HOME, component: HomePage, layout: true },
  { path: PATHS.ABOUT, component: AboutPage, layout: true },
  { path: PATHS.SERVICE, component: ServicesPage, layout: true },
  { path: PATHS.NEWS, component: NewsPage, layout: true },
  { path: PATHS.CONTACT, component: ContactPage, layout: true }
]

export { routes }
