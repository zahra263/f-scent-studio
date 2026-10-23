import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'
import { ShopProvider } from './context/ShopContext'

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [location.pathname])
  return null
}

export default function App() {
  return <BrowserRouter><ShopProvider><ScrollToTop /><Navbar /><Routes><Route path="/" element={<Home />} /><Route path="/shop" element={<Shop />} /><Route path="/product/:id" element={<ProductDetails />} /><Route path="/cart" element={<Cart />} /><Route path="/wishlist" element={<Wishlist />} /><Route path="/checkout" element={<Checkout />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<main className="page-shell py-24 text-center"><h1 className="font-display text-4xl">Page not found</h1><a className="mt-4 inline-block underline" href="/">Back home</a></main>} /></Routes><Footer /></ShopProvider></BrowserRouter>
}
