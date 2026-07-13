import { motion } from 'framer-motion';

const SERVICES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D95F1A" strokeWidth="1.5">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D95F1A" strokeWidth="1.5">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>
      </svg>
    ),
    title: 'Heating Repair',
    desc: 'Fast diagnosis and repair for furnaces, heat pumps, and boilers. Most repairs completed same day with parts we carry on every truck.',
    tag: null,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D95F1A" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Maintenance Plans',
    desc: 'Annual tune-up plans that keep your system running efficiently year-round and catch problems before they become expensive breakdowns.',
    tag: 'Best Value',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D95F1A" strokeWidth="1.5">
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
  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <span className="section-tag">What We Do</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-text-dark leading-tight mb-6">
              Every HVAC service your home needs.
            </h2>
            <p className="font-sans text-text-mid text-base leading-relaxed mb-8">
              From new system installs to emergency repairs, our licensed technicians handle it all. Colorado-certified, fully insured, and background-checked.
            </p>
            <a href="#contact" className="btn-outline text-sm mb-8 lg:mb-0 inline-block">See All Services</a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-px bg-gray-mid">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 group hover:bg-gray-warm transition-colors duration-200"
              >
                {s.tag && (
                  <span className="inline-block bg-brand text-white font-sans text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4">
                    {s.tag}
                  </span>
                )}
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                  {s.icon}
                </div>
                <h3 className="font-sans font-semibold text-text-dark text-lg mb-3">{s.title}</h3>
                <p className="font-sans text-text-muted text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}