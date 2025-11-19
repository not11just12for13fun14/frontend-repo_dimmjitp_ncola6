import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const quotes = [
  {
    name: 'Ava K.',
    role: 'Product Designer',
    text: 'The smooth interactions and atmospheric depth are stunning. It feels alive.'
  },
  {
    name: 'Liam R.',
    role: 'Frontend Engineer',
    text: 'Everything flows. The purple/blue visual language is cohesive and bold.'
  },
  {
    name: 'Maya S.',
    role: 'Art Director',
    text: 'It nails the futuristic vibe without sacrificing usability.'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#0b0a13] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_10%_0%,rgba(139,92,246,0.12),transparent)] pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Wall of Love</h2>
          <p className="text-white/70">What creators are saying</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white"
            >
              <Quote className="absolute -top-4 -left-4 h-8 w-8 text-purple-400/40" />
              <p className="text-white/80">“{q.text}”</p>
              <footer className="mt-4 text-sm text-white/60">{q.name} • {q.role}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
