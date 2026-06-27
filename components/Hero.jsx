import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80"
        >
          <source src="https://www.pexels.com/download/video/7239160/" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="absolute inset-0 bg-orange-950/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-sans text-xs text-white/60 tracking-wide">Serving Denver & Front Range</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.05] mb-8">
              Your home,<br />
              <em className="not-italic text-orange-400">comfortable</em><br />
              all year round.
            </h1>

            <p className="font-sans text-white/70 text-lg leading-relaxed mb-10 max-w-md">
              Denver's trusted HVAC specialists. We install, repair, and maintain heating and cooling systems so your family stays comfortable no matter what season throws at you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-sm px-8 py-4">
                Get a Free Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="tel:+13035550182" className="flex items-center gap-3 text-white hover:text-orange-400 transition-colors">
                <div className="w-11 h-11 border border-white/20 flex items-center justify-center rounded-lg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 12 19.79 19.79 0 0 1 1.06 3.36 2 2 0 0 1 3.04 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/50 font-sans">Call us anytime</p>
                  <p className="text-sm font-sans font-medium">(303) 555-0182</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right - Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4"
          >
            <div className="bg-orange-500/90 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden border border-orange-400/30">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="relative">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="mb-6">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <h3 className="text-white font-extrabold text-2xl mb-2">Same-Day Service</h3>
                <p className="text-white/80 text-sm leading-relaxed">Call before noon and we will be there today. Emergencies answered 24/7.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="1.5" className="mb-4">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <p className="text-white font-bold text-sm mb-1">CO Licensed</p>
                <p className="text-white/40 text-xs">#HVAC-CO-48291</p>
              </div>
              <div className="bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="1.5" className="mb-4">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                <p className="text-white font-bold text-sm mb-1">4.9 Rating</p>
                <p className="text-white/50 text-xs">312 Google reviews</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm">12+ Years in Denver</p>
                <p className="text-white/40 text-xs mt-0.5">Trusted by 2,400+ homeowners</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
