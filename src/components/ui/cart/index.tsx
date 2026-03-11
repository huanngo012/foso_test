import './style.scss'
import type { CartProps } from '~/components/type'

const Cart = ({ open, onClose }: CartProps) => {
  return (
    <>
      <div className={`cart-wrapper ${open ? 'cart-wrapper--open' : ''}`}>
        <div className='cart-overlay' onClick={onClose}></div>
        <div className='cart'></div>
      </div>
    </>
  )
}

export default Cart
