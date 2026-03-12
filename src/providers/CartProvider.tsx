import { createContext, useContext, useEffect, useState } from 'react'
import { cart_items } from '~/data'

export interface CartVariant {
  id: number
  title: string
  image: string
  quantity: number
}

export interface CartItem {
  id: number
  title: string
  image: string
  price: number
  time?: string
  variants?: CartVariant[]
}

interface CartContextType {
  openCart: boolean
  openCartDrawer: () => void
  closeCartDrawer: () => void
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  cartCount: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [openCart, setOpenCart] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : cart_items
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const openCartDrawer = () => setOpenCart(true)
  const closeCartDrawer = () => setOpenCart(false)

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const exist = prev.find((i) => i.id === item.id)

      if (exist) return prev

      return [...prev, item]
    })
    openCartDrawer()
  }

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartCount = cartItems.length

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <CartContext.Provider
      value={{
        openCart,
        openCartDrawer,
        closeCartDrawer,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
