import { Link } from 'react-router-dom'
import { Heart, ArrowRight } from 'lucide-react'
import { useShop } from '../context/ShopContext'
import ProductCard from '../components/ProductCard'
import SectionHeading from '../components/SectionHeading'
export default function Wishlist() {
  const { wishlist } = useShop()
  return <main className="page-shell min-h-[55vh] py-12 sm:py-16"><SectionHeading eyebrow="SAVED WITH LOVE" title="Your wishlist" description="Keep the fragrances that caught your attention close by." />{wishlist.length ? <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">{wishlist.map(product => <ProductCard key={product.id} product={product} />)}</div> : <div className="py-12 text-center"><Heart size={32} strokeWidth={1.1} className="mx-auto text-[#a08355]" /><h2 className="mt-5 font-display text-2xl">A little room for favourites</h2><p className="mt-2 text-sm text-[#82776b]">Tap the heart on a fragrance to save it here.</p><Link to="/shop" className="mt-6 inline-flex items-center gap-3 bg-[#302820] px-6 py-4 text-[10px] tracking-widest text-white">EXPLORE FRAGRANCES <ArrowRight size={15} /></Link></div>}</main>
}
