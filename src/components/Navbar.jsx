import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, Heart, X } from 'lucide-react'
import { useShop } from '../context/ShopContext'

export default function Navbar() {
  const { cartCount, wishlist } = useShop()
  const [open, setOpen] = useState(false)
  const navClass = ({ isActive }) => `text-[11px] uppercase tracking-[.2em] transition hover:text-[#9b7947] ${isActive ? 'text-[#9b7947]' : 'text-[#5f5549]'}`
  return <>
    <div className="bg-[#302820] px-4 py-2 text-center text-[9px] tracking-[.22em] text-[#f7f1e8] sm:text-[10px]">A LITTLE LUXURY, DELIVERED TO YOUR DOOR · FREE DELIVERY OVER RS. 10,000</div>
    <header className="sticky top-0 z-40 border-b border-[#e7dfd2] bg-[#f8f5ef]/95 backdrop-blur-md">
      <div className="page-shell flex h-[76px] items-center justify-between gap-4">
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle menu">{open ? <X size={21}/> : <Menu size={21}/>}</button>
        <Link to="/" className="min-w-0 text-center md:text-left"><span className="font-display block text-[21px] tracking-[.12em] sm:text-[25px]">F. SCENT STUDIO</span><span className="mt-0.5 block text-[8px] tracking-[.34em] text-[#9b7947]">YOUR SIGNATURE, SCENTED</span></Link>
        <nav className="hidden items-center gap-8 md:flex"><NavLink to="/" className={navClass}>Home</NavLink><NavLink to="/shop" className={navClass}>Shop all</NavLink><NavLink to="/about" className={navClass}>Our story</NavLink><NavLink to="/contact" className={navClass}>Contact</NavLink></nav>
        <div className="flex items-center gap-3 sm:gap-5"><Link to="/shop" aria-label="Search products" className="hidden sm:block"><Search size={19} strokeWidth={1.4}/></Link><Link to="/wishlist" className="relative" aria-label="Wishlist"><Heart size={19} strokeWidth={1.4}/>{wishlist.length > 0 && <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-[#b89b6b] px-1 text-[9px] text-white">{wishlist.length}</span>}</Link><Link to="/cart" className="relative" aria-label="Shopping bag"><ShoppingBag size={19} strokeWidth={1.4}/>{cartCount > 0 && <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-[#302820] px-1 text-[9px] text-white">{cartCount}</span>}</Link></div>
      </div>
      {open && <nav className="flex flex-col gap-5 border-t border-[#e7dfd2] px-6 py-5 md:hidden"><NavLink onClick={() => setOpen(false)} to="/" className={navClass}>Home</NavLink><NavLink onClick={() => setOpen(false)} to="/shop" className={navClass}>Shop all</NavLink><NavLink onClick={() => setOpen(false)} to="/about" className={navClass}>Our story</NavLink><NavLink onClick={() => setOpen(false)} to="/contact" className={navClass}>Contact</NavLink></nav>}
    </header>
  </>
}
