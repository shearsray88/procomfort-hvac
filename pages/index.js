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
  return (
    <>
      <Head>
        <title>ProComfort HVAC - Denver Heating & Cooling Experts</title>
        <meta name="description" content="Denver's trusted HVAC specialists. AC installation, heating repair, and maintenance plans for homes across the Front Range. Get a free quote today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
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