import { motion } from 'framer-motion';

const REASONS = [
  {
    num: '01',
    title: 'Same-Day Service',
    desc: "When your AC goes out in July or your furnace quits in January, you can't wait. We keep trucks stocked and technicians ready for same-day calls.",
  },
  {
    num: '02',
    title: 'Upfront Pricing',
    desc: 'You get a clear written quote before any work begins. No surprise charges, no upsells. What we quote is what you pay.',
  },
  {
    num: '03',
    title: 'Licensed & Insured',
    desc: 'Every technician is Colorado state-licensed, EPA-certified, and background-checked. Your home and family are in good hands.',
  },
  {
    num: '04',
    title: '10-Year Warranty',
    desc: 'All new system installations come with a 10-year parts and labor warranty. If something goes wrong, we fix it at no cost to you.',
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-28 bg-gray-warm">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <span className="section-tag">Why ProComfort</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-text-dark leading-tight">
            We do things differently around here.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-gray-mid">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="pt-10 pr-8 pb-12 md:pb-8 border-b md:border-b-0 md:border-r border-gray-mid last:border-r-0"
            >
              <span className="font-serif text-5xl text-brand-light/30 font-normal block mb-6">{r.num}</span>
              <h3 className="font-sans font-semibold text-text-dark text-base mb-3">{r.title}</h3>
              <p className="font-sans text-text-muted text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-brand p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="font-serif text-3xl text-white font-normal mb-2">
              Emergency? We are available 24/7.
            </p>
            <p className="font-sans text-white/70 text-sm">
              Call us anytime -- day or night, weekends and holidays included.
            </p>
          </div>
          <a href="tel:+13035550182"
            className="flex-shrink-0 bg-white text-gray-900 font-sans font-bold text-sm px-8 py-4 rounded-lg hover:bg-gray-warm transition-colors">
            (303) 555-0182
          </a>
        </motion.div>
      </div>
    </section>
  );
}