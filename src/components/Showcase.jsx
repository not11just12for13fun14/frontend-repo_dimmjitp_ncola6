import { motion } from 'framer-motion'

const cards = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Concept #${i + 1}`,
  desc: 'A vibrant exploration in violet & azure tones.'
}))

export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-[#0b0a13] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(168,85,247,0.15),transparent)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white">Showcase</h2>
            <p className="text-white/70">Interactive tiles with hover parallax and glow.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -inset-1 bg-[conic-gradient(from_90deg_at_50%_50%,#a855f7_0%,#60a5fa_50%,#a855f7_100%)] blur-2xl opacity-30"/>
              </div>
              <div className="relative">
                <div className="h-40 rounded-xl bg-gradient-to-br from-purple-600/40 to-blue-500/40 border border-white/10"/>
                <h3 className="mt-4 text-white font-semibold">{card.title}</h3>
                <p className="text-white/70 text-sm">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
