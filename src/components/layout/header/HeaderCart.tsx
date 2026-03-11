import { useState } from 'react'
import { icons } from '~/assets'
import Cart from '~/components/ui/cart'

const { CartIcon } = icons

const HeaderCart = () => {
  const [openCart, setOpenCart] = useState(false)

  return (
    <div className='header__cart'>
      <button className='header__cart-button button button--primary' onClick={() => setOpenCart(true)}>
        <span className='header__cart-icon svg-wrapper'>
          <CartIcon />
        </span>
        <span>GIỎ HÀNG</span>
        <span className='header__cart-count'>3</span>
      </button>

      <Cart open={openCart} onClose={() => setOpenCart(false)} />
    </div>
  )
}

export default HeaderCart
