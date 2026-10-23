export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return <div className={`mx-auto mb-9 max-w-2xl text-center ${light ? 'text-[#f8f5ef]' : ''}`}><p className="mb-3 text-[9px] tracking-[.32em] text-[#a08355]">{eyebrow}</p><h2 className="font-display text-3xl leading-tight sm:text-4xl">{title}</h2>{description && <p className={`mx-auto mt-4 max-w-lg text-sm leading-7 ${light ? 'text-[#d1c4b3]' : 'text-[#82776b]'}`}>{description}</p>}</div>
}
