import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MapSection from '../components/MapSection';

export default function Home() {
  const [hideFab, setHideFab] = useState(false);

  useEffect(() => {
    const contactEl = document.getElementById('contact');
    if (!contactEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setHideFab(entry.isIntersecting));
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0 }
    );
    observer.observe(contactEl);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>ProComfort HVAC - Denver Heating & Cooling Experts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
        <a href="tel:+13035550182"
        className={`fixed bottom-6 right-6 z-50 md:hidden bg-brand text-white px-5 py-3 rounded-full shadow-lg font-bold text-sm flex items-center gap-2 transition-all duration-300 ${
          hideFab ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
          Call Now
      </a>
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Reviews />
        <Contact />
      </main>
      <MapSection />
      <Footer />
    </>
  );
}