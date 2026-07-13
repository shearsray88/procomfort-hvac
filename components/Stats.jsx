import { motion } from 'framer-motion';

const STATS = [
  { value: '2,400+', label: 'Systems Installed' },
  { value: '12 yrs', label: 'In Business' },
  { value: '4.9', label: 'Google Rating' },
  { value: '24/7', label: 'Emergency Service' },
];

export default function Stats() {
  return (
    <section className="bg-text-dark py-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="px-4 sm:px-8 py-6 first:pl-0 last:pr-0 overflow-hidden"
            >
              <p className="font-serif text-3xl sm:text-4xl font-normal text-white mb-2 whitespace-nowrap">{s.value}</p>
              <p className="font-sans text-xs text-white/60 uppercase tracking-widest">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}