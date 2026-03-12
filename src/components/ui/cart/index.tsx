import './style.scss'
import { useState } from 'react'
import { CART_STEPS } from '~/utils/constant'
import CartStep from './CartStep'
import { useCart } from '~/providers/CartProvider'
import BookingStep from './BookingStep'
import SuccessModal from './SuccessModal'

const Cart = () => {
  const { openCart, closeCartDrawer, clearCart } = useCart()
  const [step, setStep] = useState(CART_STEPS.CART)

  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = () => {
    setShowSuccess(true)
    clearCart()
    closeCartDrawer()
    setStep(CART_STEPS.CART)
  }

  return (
    <>
      <div className={`cart-wrapper ${openCart ? 'cart-wrapper--open' : ''}`}>
        <div className='cart-overlay' onClick={closeCartDrawer}></div>
        <div className='cart'>
          {step === CART_STEPS.CART && <CartStep onNext={() => setStep(CART_STEPS.BOOKING)} />}
          {step === CART_STEPS.BOOKING && <BookingStep onSubmit={handleSubmit} />}
        </div>
      </div>
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </>
  )
}

export default Cart
