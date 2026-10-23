import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ShopContext = createContext(null)
const readStorage = (key, fallback) => {
  try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback } catch { return fallback }
}

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => readStorage('fss-cart', []))
  const [wishlist, setWishlist] = useState(() => readStorage('fss-wishlist', []))
  useEffect(() => { localStorage.setItem('fss-cart', JSON.stringify(cart)) }, [cart])
  useEffect(() => { localStorage.setItem('fss-wishlist', JSON.stringify(wishlist)) }, [wishlist])

  const addToCart = (product, size = product.size) => setCart(current => {
    const key = `${product.id}-${size}`
    const existing = current.find(item => item.key === key)
    return existing ? current.map(item => item.key === key ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, key, selectedSize: size, quantity: 1 }]
  })
  const updateQuantity = (key, quantity) => setCart(current => quantity < 1 ? current.filter(item => item.key !== key) : current.map(item => item.key === key ? { ...item, quantity } : item))
  const removeFromCart = (key) => setCart(current => current.filter(item => item.key !== key))
  const toggleWishlist = (product) => setWishlist(current => current.some(item => item.id === product.id) ? current.filter(item => item.id !== product.id) : [...current, product])
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const value = useMemo(() => ({ cart, wishlist, addToCart, updateQuantity, removeFromCart, toggleWishlist, cartCount, subtotal, setCart }), [cart, wishlist, cartCount, subtotal])
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
export const useShop = () => useContext(ShopContext)
