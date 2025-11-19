import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0a13]">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Testimonials />
      <CTA />
      <footer className="bg-[#0b0a13] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Nebula UI. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <a href="/test" className="hover:text-white">System Check</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
