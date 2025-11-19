import { motion } from 'framer-motion'
import { Cpu, Layers, ShieldCheck, Zap, Palette, MousePointerClick } from 'lucide-react'

const features = [
  { icon: Cpu, title: 'Motion Engine', desc: 'Smooth, handcrafted animations powered by Framer Motion.' },
  { icon: Layers, title: 'Depth & Parallax', desc: 'Layered glass panels with soft blurs and depth.' },
  { icon: ShieldCheck, title: 'Accessible', desc: 'Keyboard friendly and high contrast by default.' },
  { icon: Zap, title: 'Snappy', desc: 'GPU-accelerated transitions that feel instant.' },
  { icon: Palette, title: 'Purple Core', desc: 'A rich violet/indigo gradient system across UI.' },
  { icon: MousePointerClick, title: 'Interactive', desc: 'Hover, tilt, and micro-interactions everywhere.' },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0b0a13] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_15%_0%,rgba(139,92,246,0.15),transparent),radial-gradient(800px_500px_at_85%_10%,rgba(59,130,246,0.12),transparent)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Designed to feel alive</h2>
          <p className="mt-2 text-white/70">Every component crafted with motion, depth, and elegance.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden"
            >
              <div className="absolute -top-20 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-2xl" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg grid place-items-center bg-gradient-to-tr from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
              </div>
              <p className="mt-3 text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
