import './style.scss'
import { useEffect, useRef, useState } from 'react'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const height = headerRef.current?.offsetHeight || 0
    document.documentElement.style.setProperty('--header-height', isScrolled ? `${height}px` : `0`)
  }, [isScrolled])

  return (
    <header className={`header ${isScrolled ? 'header-scroll' : ''}`}>
      <div className='container'>
        <HeaderTop />
        <HeaderBottom ref={headerRef} />
      </div>
    </header>
  )
}

export default Header
