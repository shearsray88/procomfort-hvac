import { useState, useEffect } from 'react';

const NAV_ITEMS = ['Stats', 'Services', 'About', 'Reviews', 'Contact', 'Locations'];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) {
      setScrolled(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: '-96px 0px 0px 0px', threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'bg-gray-900 border-white/10' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-brand-dark flex items-center justify-center rounded">
            <span className="text-white font-bold text-xs">PC</span>
          </div>
          <span className="font-sans font-semibold text-white text-sm tracking-wide">ProComfort <span className="text-brand-light">HVAC</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-white/70 font-sans text-sm hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:block text-xs font-sans font-semibold text-white border border-white/25 hover:border-brand hover:text-brand-light rounded-lg px-5 py-2.5 transition-colors">
          Get a Free Quote
        </a>
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-white/70 font-sans text-sm" onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-xs w-fit" onClick={() => setMenuOpen(false)}>
            Get a Free Quote
          </a>
        </div>
      )}
    </header>
  );
}