export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-brand rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">PC</span>
              </div>
              <span className="font-sans font-semibold text-white text-sm">ProComfort <span className="text-brand-light">HVAC</span></span>
            </div>
            <p className="font-sans text-white/30 text-xs">Serving Denver & Front Range since 2012</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {['Services', 'About', 'Reviews', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="font-sans text-white/40 text-xs hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between gap-3">
          <p className="font-sans text-white/20 text-xs">&copy; 2026 ProComfort HVAC. All rights reserved.</p>
          <p className="font-sans text-white/20 text-xs">Denver, CO &middot; License #CO-HVAC-48291</p>
        </div>
      </div>
    </footer>
  );
}