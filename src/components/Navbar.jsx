import { useState, useEffect } from 'react'
import { Menu, X, Star, Sparkles, Rocket } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-colors ${scrolled ? 'bg-[#0b0a13]/70 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-500 via-fuchsia-500 to-blue-500 shadow-lg shadow-purple-500/30 grid place-items-center">
              <Rocket className="h-4 w-4 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">Nebula UI</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#showcase" className="text-sm text-white/80 hover:text-white transition-colors">Showcase</a>
            <a href="#testimonials" className="text-sm text-white/80 hover:text-white transition-colors">Wall of Love</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-1"><Star className="h-4 w-4 text-yellow-400"/>Star</a>
            <a href="#cta" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 text-white shadow-lg shadow-purple-500/30 hover:brightness-110 transition">
              <Sparkles className="h-4 w-4"/> Get Started
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
            {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b0a13]/80 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-2">
            <a href="#features" onClick={() => setOpen(false)} className="block text-white/80 hover:text-white">Features</a>
            <a href="#showcase" onClick={() => setOpen(false)} className="block text-white/80 hover:text-white">Showcase</a>
            <a href="#testimonials" onClick={() => setOpen(false)} className="block text-white/80 hover:text-white">Wall of Love</a>
            <a href="#cta" onClick={() => setOpen(false)} className="block text-white font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 text-center">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}
