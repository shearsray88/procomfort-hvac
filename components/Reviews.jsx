import { motion } from 'framer-motion';

const REVIEWS = [
  {
    name: 'Sandra K.',
    location: 'Highlands Ranch, CO',
    text: 'My AC died on the hottest day of the year. ProComfort had a tech at my door within 3 hours and it was fixed by evening. Absolute lifesavers.',
  },
  {
    name: 'Marcus T.',
    location: 'Lakewood, CO',
    text: "I've used them twice now -- once for a furnace repair and once for a full AC install. Both times: on time, professional, and priced fairly. Won't use anyone else.",
  },
  {
    name: 'Rachel M.',
    location: 'Aurora, CO',
    text: 'They installed a new heat pump and smart thermostat. The team was clean, fast, and walked me through everything. My energy bill dropped noticeably the next month.',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Customer Reviews</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-text-dark leading-tight max-w-lg">
              Do not take our word for it.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 text-right"
          >
            <p className="font-serif text-4xl text-text-dark">4.9</p>
            <div className="flex gap-0.5 justify-end mt-1">
              {[0,1,2,3,4].map(i => <span key={i} className="text-brand text-sm">★</span>)}
            </div>
            <p className="font-sans text-xs text-text-muted mt-1">312 Google Reviews</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-gray-mid">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8"
            >
              <div className="flex gap-0.5 mb-6">
                {[0,1,2,3,4].map(i => <span key={i} className="text-brand text-sm">★</span>)}
              </div>
              <p className="font-sans text-text-mid text-sm leading-relaxed mb-8 italic">
                "{r.text}"
              </p>
              <div className="border-t border-gray-mid pt-5">
                <p className="font-sans font-semibold text-text-dark text-sm">{r.name}</p>
                <p className="font-sans text-text-muted text-xs mt-0.5">{r.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}