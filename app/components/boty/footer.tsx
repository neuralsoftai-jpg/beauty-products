export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-200 py-16 text-center border-t border-stone-800">
      <h3 className="font-serif text-3xl tracking-widest uppercase mb-4 text-white">Elysian</h3>
      <p className="text-sm text-stone-400">© {new Date().getFullYear()} Elysian Botanicals. Pure organic skincare, crafted with love.</p>
    </footer>
  )
}