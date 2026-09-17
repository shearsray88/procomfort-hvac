import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

const STATS = [
  { value: '2,400+', label: 'Systems Installed' },
  { value: '14 yrs', label: 'In Business' },
  { value: '4.9', label: 'Google Rating' },
  { value: '24/7', label: 'Emergency Service' },
];

export default function Stats() {
  const isMobile = useIsMobile();

  return (
    <section id="stats" className="scroll-mt-16 relative overflow-hidden bg-text-dark flex items-center" style={{ minHeight: '100vh' }}>
      <div className="absolute inset-0 z-0">
        <motion.img
          key={isMobile ? 'mobile' : 'desktop'}
          src={isMobile ? '/images/stats-mobile.jpg' : '/images/stats-desktop.jpg'}
          alt=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="absolute inset-0 bg-orange-950/20" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-14 w-full">
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