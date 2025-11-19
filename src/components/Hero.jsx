import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0b0a13]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(168,85,247,0.25),transparent),radial-gradient(900px_500px_at_80%_10%,rgba(56,189,248,0.15),transparent)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            Live interactive 3D experience
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_40px_rgba(168,85,247,0.25)]">
            Build futuristic interfaces with a purple vibe
          </h1>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            A handcrafted playground of motion, depth, and delightful micro-interactions. Explore a bold, blue‑purple gradient universe.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 shadow-lg shadow-purple-500/30 hover:brightness-110 transition">
              Start Creating
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white/90 bg-white/10 border border-white/10 hover:bg-white/15 transition">
              See Features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
