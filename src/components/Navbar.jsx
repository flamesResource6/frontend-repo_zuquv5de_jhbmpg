import { Menu, ShoppingCart, User } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-sky-500 shadow-lg shadow-fuchsia-500/20" />
          <span className="text-white font-semibold text-lg tracking-tight">Aurora Arts</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#featured" className="text-slate-200/80 hover:text-white transition">Featured</a>
          <a href="#gallery" className="text-slate-200/80 hover:text-white transition">Gallery</a>
          <a href="#artists" className="text-slate-200/80 hover:text-white transition">Artists</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-white/5 text-slate-200" aria-label="Profile">
            <User size={20} />
          </button>
          <button className="p-2 rounded-lg hover:bg-white/5 text-slate-200" aria-label="Cart">
            <ShoppingCart size={20} />
          </button>
          <button className="md:hidden p-2 rounded-lg hover:bg-white/5 text-slate-200" aria-label="Menu">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
