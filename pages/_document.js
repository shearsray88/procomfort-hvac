import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

        {/* Primary Meta Tags */}
        <meta name="title" content="ProComfort HVAC - Denver Heating & Cooling Experts" />
        <meta name="description" content="Denver's trusted HVAC specialists. AC installation, heating repair, and maintenance plans for homes across the Front Range. Get a free quote today." />
        <meta name="keywords" content="HVAC Denver, AC repair Denver, heating repair Denver, furnace installation Denver, HVAC Aurora, HVAC Lakewood" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ProComfort HVAC" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://procomfort-hvac.vercel.app" />
        <meta property="og:title" content="ProComfort HVAC - Denver Heating & Cooling Experts" />
        <meta property="og:description" content="Denver's trusted HVAC specialists. AC installation, heating repair, and maintenance plans for homes across the Front Range." />
        <meta property="og:image" content="https://procomfort-hvac.vercel.app/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ProComfort HVAC - Denver Heating & Cooling Experts" />
        <meta name="twitter:description" content="Denver's trusted HVAC specialists. AC installation, heating repair, and maintenance plans for homes across the Front Range." />
        <meta name="twitter:image" content="https://procomfort-hvac.vercel.app/og-image.jpg" />

        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              "name": "ProComfort HVAC",
              "description": "Denver's trusted HVAC specialists. AC installation, heating repair, and maintenance plans for homes across the Front Range.",
              "url": "https://procomfort-hvac.vercel.app",
              "telephone": "+13035550182",
              "email": "info@procomforthvac.com",
              "priceRange": "$$",
              "image": "https://procomfort-hvac.vercel.app/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4821 E Colfax Ave",
                "addressLocality": "Denver",
                "addressRegion": "CO",
                "postalCode": "80220",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.7402,
                "longitude": -104.9019
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "areaServed": [
                { "@type": "City", "name": "Denver" },
                { "@type": "City", "name": "Aurora" },
                { "@type": "City", "name": "Lakewood" },
                { "@type": "City", "name": "Highlands Ranch" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "HVAC Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Installation" }},
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Repair" }},
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heating Repair" }},
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Furnace Installation" }},
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maintenance Plan" }}
                ]
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}