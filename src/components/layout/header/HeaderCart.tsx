import { icons } from '~/assets'
import Cart from '~/components/ui/cart'
import { useCart } from '~/providers/CartProvider'

const { CartIcon } = icons

const HeaderCart = () => {
  const { cartCount, openCartDrawer } = useCart()

  return (
    <div className='header__cart'>
      <button className='header__cart-button button button--primary' onClick={openCartDrawer}>
        <span className='header__cart-icon svg-wrapper'>
          <CartIcon />
        </span>
        <span>GIỎ HÀNG</span>
        <span className='header__cart-count'>{cartCount}</span>
      </button>

      <Cart />
    </div>
  )
}

export default HeaderCart
