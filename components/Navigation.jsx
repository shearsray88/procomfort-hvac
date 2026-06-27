import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white border-b border-gray-mid shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-brand flex items-center justify-center rounded">
            <span className="text-white font-bold text-xs">PC</span>
          </div>
          <span className="font-sans font-semibold text-white text-sm tracking-wide">ProComfort <span className="text-brand-light">HVAC</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {['Services', 'About', 'Reviews', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-white/70 font-sans text-sm hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:block btn-primary text-xs px-5 py-2.5">
          Get a Free Quote
        </a>
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-4">
          {['Services', 'About', 'Reviews', 'Contact'].map((item) => (
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