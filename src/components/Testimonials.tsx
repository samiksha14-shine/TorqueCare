import { motion } from 'motion/react';

const quotes = [
  { name: 'Arjun', text: 'Pickup in 20 minutes, spotless detail. Solid.' },
  { name: 'Meera', text: 'Transparent pricing, no surprises. Recommend.' },
  { name: 'Ravi', text: 'AC fixed same day. Chill again.' },
];

export default function Testimonials() {
  return (
    <section className="bg-zinc-950 py-16 text-white">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-semibold">What clients say</h2>
        <div className="mt-6 overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-33.333%', '-66.666%', '0%'] }}
            transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
            className="flex gap-6"
          >
            {quotes.concat(quotes).map((q, i) => (
              <div key={i} className="min-w-[300px] shrink-0 rounded-xl border border-white/10 bg-zinc-900 p-5">
                <p className="text-gray-300">“{q.text}”</p>
                <p className="mt-2 text-sm text-gray-500">— {q.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
