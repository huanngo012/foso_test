import { icons, images } from '~/assets'
import { useCart } from '~/providers/CartProvider'
import { formatMoney } from '~/utils/helper'

const { CloseIcon, ClockIcon, MinusIcon, Plus02Icon, ArrowRightIcon, ArrowRightLineIcon } = icons
const { avatar_1 } = images

const CartStep = ({ onNext }: { onNext: () => void }) => {
  const { cartItems, totalPrice, removeFromCart } = useCart()

  return (
    <>
      <div className='cart__header'>
        <h2>Giỏ Hàng</h2>
      </div>
      <div className='cart__list'>
        {cartItems.map((item) => (
          <div key={item.id} className='cart-item'>
            <div className='cart-item__main'>
              <img src={item.image} alt='' className='cart-item__image' />
              <div className='cart-item__info'>
                <div className='cart-item__header'>
                  <p className='cart-item__title'>{item.title}</p>
                  <button className='cart-item__remove svg-wrapper' onClick={() => removeFromCart(item.id)}>
                    <CloseIcon />
                  </button>
                </div>
                <div className='cart-item__meta'>
                  <span className='cart-item__price'>
                    {formatMoney(item.price)} <span>đ</span>
                  </span>
                  {item.time && (
                    <span className='cart-item__time'>
                      <ClockIcon />
                      {item.time}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {item.variants && item.variants.length > 0 && (
              <div className='cart-item__variants'>
                {item.variants.map((variant, index) => (
                  <div key={index} className='cart-variant'>
                    <img src={variant.image} alt='' className='cart-variant__image' />
                    <div className='cart-variant__info'>
                      <p className='cart-variant__name'>
                        Hiệu ứng: <span>{variant.title}</span>
                      </p>
                      <div className='cart-variant__quantity'>
                        <button className={`cart-variant__minus svg-wrapper ${variant.quantity < 2 ? 'disabled' : ''}`}>
                          <MinusIcon />
                        </button>
                        <span className='cart-variant__value'>{variant.quantity}</span>
                        <button className='cart-variant__plus svg-wrapper'>
                          <Plus02Icon />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className='cart__footer'>
        <div className='cart__summary'>
          <div className='cart__technician'>
            <span className='cart__label'>Kỹ thuật viên</span>
            <div className='cart__technician-info'>
              <img src={avatar_1} alt='' className='cart__technician-avatar' />
              <span className='cart__technician-name'>Võ Thị Bích Phượng</span>
              <span className='cart__technician-arrow svg-wrapper'>
                <ArrowRightIcon />
              </span>
            </div>
          </div>

          <div className='cart__total'>
            <span className='cart__label'>Tổng thanh toán</span>
            <span className='cart__price'>
              {formatMoney(totalPrice)} <span className='cart__currency'>đ</span>
            </span>
          </div>
        </div>
        <button
          className='cart__button button button--primary'
          disabled={cartItems.length > 0 ? false : true}
          onClick={onNext}
        >
          Tiếp Tục
          <span className='cart__button-icon svg-wrapper'>
            <ArrowRightLineIcon />
          </span>
        </button>
      </div>
    </>
  )
}

export default CartStep
