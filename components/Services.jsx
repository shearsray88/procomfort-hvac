import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

const SERVICES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'AC Installation',
    desc: 'New central air conditioning systems sized and installed correctly for your home. We carry all major brands with full manufacturer warranties.',
    tag: 'Most Popular',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="1.5">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>
      </svg>
    ),
    title: 'Heating Repair',
    desc: 'Fast diagnosis and repair for furnaces, heat pumps, and boilers. Most repairs completed same day with parts we carry on every truck.',
    tag: null,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Maintenance Plans',
    desc: 'Annual tune-up plans that keep your system running efficiently year-round and catch problems before they become expensive breakdowns.',
    tag: 'Best Value',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Smart Thermostat',
    desc: 'Upgrade to a smart thermostat and cut your energy bills by up to 23%. We handle full installation and app setup so it works from day one.',
    tag: null,
  },
];

export default function Services() {
  const isMobile = useIsMobile();

  return (
    <section id="services" className="scroll-mt-16 relative overflow-hidden flex items-center" style={{ minHeight: '100vh' }}>
      <div className="absolute inset-0 z-0">
        <motion.img
          key={isMobile ? 'mobile' : 'desktop'}
          src={isMobile ? '/images/services-mobile.jpg' : '/images/services-desktop.jpg'}
          alt=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/75" />
        <div className="absolute inset-0 bg-orange-950/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-28 w-full">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <span className="section-tag">What We Do</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white leading-tight mb-6">
              Every HVAC service your home needs.
            </h2>
            <p className="font-sans text-white/70 text-base leading-relaxed mb-8">
              From new system installs to emergency repairs, our licensed technicians handle it all. Colorado-certified, fully insured, and background-checked.
            </p>
            <a href="#contact" className="border border-white/25 text-white hover:border-brand hover:text-brand-light rounded-lg px-6 py-3 text-sm font-sans font-semibold transition-colors inline-block mb-8 lg:mb-0">See All Services</a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors duration-200"
              >
                {s.tag && (
                  <span className="inline-block bg-brand text-white font-sans text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4">
                    {s.tag}
                  </span>
                )}
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                  {s.icon}
                </div>
                <h3 className="font-sans font-semibold text-white text-lg mb-3">{s.title}</h3>
                <p className="font-sans text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
