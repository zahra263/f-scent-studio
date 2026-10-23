import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import SectionHeading from '../components/SectionHeading'

export default function Shop() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('featured')
  const [maxPrice, setMaxPrice] = useState('all')
  const filtered = useMemo(() => {
    let list = products.filter(p => (category === 'All' || p.category === category) && (p.name + ' ' + p.notes + ' ' + p.category).toLowerCase().includes(search.toLowerCase()) && (maxPrice === 'all' || p.price <= Number(maxPrice)))
    if (sort === 'low') list = [...list].sort((a,b) => a.price-b.price)
    if (sort === 'high') list = [...list].sort((a,b) => b.price-a.price)
    if (sort === 'name') list = [...list].sort((a,b) => a.name.localeCompare(b.name))
    return list
  }, [search, category, sort, maxPrice])
  const reset = () => { setSearch(''); setCategory('All'); setSort('featured'); setMaxPrice('all') }
  return <main className="page-shell min-h-[55vh] py-12 sm:py-16"><SectionHeading eyebrow="THE FRAGRANCE WARDROBE" title="Find your signature" description="Explore our considered collection of scents for every mood, moment and memory."/><div className="mx-auto mb-8 max-w-4xl border-y border-[#e5dccf] py-4"><div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><div className="relative flex-1"><Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8d8174]"/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search fragrance, notes..." className="w-full border border-[#ded4c5] bg-[#fbf9f5] py-3 pl-10 pr-4 text-sm outline-none focus:border-[#a08355]"/></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3"><select value={category} onChange={e => setCategory(e.target.value)} aria-label="Filter category" className="border border-[#ded4c5] bg-[#fbf9f5] px-3 py-3 text-xs outline-none focus:border-[#a08355]"><option>All</option><option>Women</option><option>Men</option><option>Unisex</option></select><select value={maxPrice} onChange={e => setMaxPrice(e.target.value)} aria-label="Filter by price" className="border border-[#ded4c5] bg-[#fbf9f5] px-3 py-3 text-xs outline-none focus:border-[#a08355]"><option value="all">All prices</option><option value="7000">Under Rs. 7,000</option><option value="9000">Under Rs. 9,000</option><option value="10000">Under Rs. 10,000</option></select><select value={sort} onChange={e => setSort(e.target.value)} aria-label="Sort products" className="col-span-2 border border-[#ded4c5] bg-[#fbf9f5] px-3 py-3 text-xs outline-none focus:border-[#a08355] sm:col-span-1"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="name">Name: A–Z</option></select></div></div><div className="mt-4 flex items-center justify-between text-[10px] tracking-wide text-[#82776b]"><span className="flex items-center gap-2"><SlidersHorizontal size={13}/>{filtered.length} FRAGRANCES</span>{(search || category !== 'All' || maxPrice !== 'all' || sort !== 'featured') && <button onClick={reset} className="flex items-center gap-1 hover:text-[#9b7947]">Clear filters <X size={12}/></button>}</div></div>{filtered.length ? <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">{filtered.map(product => <ProductCard key={product.id} product={product}/>)}</div> : <div className="py-20 text-center"><p className="font-display text-2xl">No fragrances found</p><p className="mt-2 text-sm text-[#82776b]">Try another search or clear your filters.</p><button onClick={reset} className="mt-5 border border-[#302820] px-5 py-3 text-[10px] tracking-widest">CLEAR FILTERS</button></div>}</main>
}
