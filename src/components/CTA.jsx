import { Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative bg-[#0b0a13] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(168,85,247,0.18),transparent)] pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-12 backdrop-blur-xl">
          <div className="absolute -inset-1 bg-[conic-gradient(from_90deg_at_50%_50%,#a855f7_0%,#60a5fa_50%,#a855f7_100%)] opacity-20 blur-3xl"/>
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Sparkles className="h-4 w-4 text-purple-300"/> Limited Beta
            </div>
            <h3 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Craft your next interface in minutes</h3>
            <p className="mt-2 text-white/70">Layers, glows, glass, and motion — perfectly tuned to a purple/blue universe.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex justify-center rounded-xl px-5 py-3 font-semibold text-white bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 shadow-lg shadow-purple-500/30 hover:brightness-110 transition">
                Join the beta
              </a>
              <a href="#" className="inline-flex justify-center rounded-xl px-5 py-3 font-semibold text-white/90 bg-white/10 border border-white/10 hover:bg-white/15 transition">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
