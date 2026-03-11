import type { ReactNode } from 'react'
import { Footer, Header } from '~/components'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
