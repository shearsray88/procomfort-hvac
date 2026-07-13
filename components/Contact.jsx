import { useState } from 'react';
import { motion } from 'framer-motion';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdarwbrv';

const SERVICES = [
  'AC Installation', 'AC Repair', 'Heating Repair', 'Furnace Installation',
  'Maintenance Plan', 'Smart Thermostat', 'Emergency Service', 'Other',
];

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [selected, setSelected] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.target;
    const data = new FormData(form);
    data.append('service', selected);
    data.append('_website', 'ProComfort HVAC');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
        setSelected('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-28 bg-text-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-tag">Contact Us</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white leading-tight mb-4">
            Get your free quote today.
          </h2>
          <p className="font-sans text-white/50 text-base">
            Fill out the form and we will call you back within 2 hours during business hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <p className="font-sans font-bold text-white text-sm mb-1">(303) 555-0182</p>
              <p className="font-sans text-white/40 text-xs">Available 24/7 for emergencies</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M4 4h16v16H4z"/><path d="M4 6l8 7 8-7"/>
                </svg>
              </div>
              <p className="font-sans font-bold text-white text-sm mb-1">info@procomforthvac.com</p>
              <p className="font-sans text-white/40 text-xs">Reply within one business day</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <p className="font-sans font-bold text-white text-sm mb-1">Denver & Front Range</p>
              <p className="font-sans text-white/40 text-xs">Aurora, Lakewood, Highlands Ranch + more</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 bg-brand rounded-full flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">We will be in touch soon!</h3>
                <p className="font-sans text-white/50 text-sm">Expect a call within 2 hours during business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-xs text-white/40 uppercase tracking-wide mb-2 block">First Name</label>
                    <input required name="first_name" placeholder="John"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand"/>
                  </div>
                  <div>
                    <label className="font-sans text-xs text-white/40 uppercase tracking-wide mb-2 block">Last Name</label>
                    <input required name="last_name" placeholder="Smith"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand"/>
                  </div>
                </div>
                <div>
                  <label className="font-sans text-xs text-white/40 uppercase tracking-wide mb-2 block">Phone Number</label>
                  <input required name="phone" type="tel" placeholder="(720) 000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand"/>
                </div>
                <div>
                  <label className="font-sans text-xs text-white/40 uppercase tracking-wide mb-2 block">Service Needed</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {SERVICES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelected(s)}
                        className={`text-xs font-sans px-3 py-2 rounded-lg border transition-all duration-200 ${
                          selected === s
                            ? 'bg-brand border-brand text-white shadow-[0_0_0_1px_rgba(217,95,26,0.4),0_0_16px_rgba(217,95,26,0.5),inset_0_1px_0_rgba(255,255,255,0.25)]'
                            : 'bg-white/5 border-white/10 text-white/50 hover:border-brand/50'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="font-sans text-xs text-white/40 uppercase tracking-wide mb-2 block">Tell Us More (optional)</label>
                  <textarea rows={3} name="message" placeholder="Describe the issue or what you are looking for..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand resize-none"/>
                </div>
                {status === 'error' && (
                  <p className="text-red-400 text-xs text-center">Something went wrong. Please try again or call us directly.</p>
                )}
                <button type="submit" disabled={status === 'loading'}
                  className="btn-primary w-full justify-center py-4 mt-1">
                  {status === 'loading' ? 'Sending...' : 'Request Free Quote'}
                </button>
                <p className="font-sans text-xs text-white/30 text-center">
                  No obligation. We will call you back within 2 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}