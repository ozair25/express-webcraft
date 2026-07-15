import React from "react";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://expresswebcraft.com/#organization",
    "name": "Express Webcraft",
    "url": "https://expresswebcraft.com",
    "logo": "https://expresswebcraft.com/logo.png",
    "sameAs": [
      "https://linkedin.com/company/express-webcraft",
      "https://dribbble.com/express-webcraft",
      "https://instagram.com/express-webcraft"
    ],
    "description": "Express Webcraft is a web development and digital artistry studio that crafts customised high-performance web solutions, brand architectures, and editorial copy structures.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales and Project Commissions",
      "email": "sayedozair25@gmail.com",
      "availableLanguage": ["en", "id"]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://expresswebcraft.com/#localbusiness",
    "name": "Express Webcraft",
    "image": "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783525342/ChatGPT_Image_Jul_8_2026_03_24_57_AM_pvot5h.png",
    "url": "https://expresswebcraft.com",
    "telephone": "+6281234567890",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta",
      "addressRegion": "DKI Jakarta",
      "postalCode": "12190",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.2088,
      "longitude": 106.8456
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://expresswebcraft.com/#website",
    "url": "https://expresswebcraft.com",
    "name": "Express Webcraft",
    "description": "Bespoke digital artistry, luxury brand assets, and technical development.",
    "publisher": {
      "@id": "https://expresswebcraft.com/#organization"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Bespoke Web Design and Engineering",
    "provider": {
      "@id": "https://expresswebcraft.com/#organization"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Express Webcraft Creative Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Conversion Corporate B2B Portals",
            "description": "Custom designed, SEO-calibrated B2B systems engineered with bespoke inquiry pipelines to drive high-value wholesale accounts."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Luxury Hospitality & Architectural Portals",
            "description": "Immersive, rich digital narratives with fine typography, optimized galleries, and seamless reservation flows."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Artisanal Culinary & Premium Retail Canvases",
            "description": "High-fidelity showcasing for culinary brands and custom operations focusing on sensory storytelling and conversion-optimized menus."
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Express Webcraft's philosophy of development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Express Webcraft rejects templates, generic builders, and unpolished layouts. We approach web development as digital craftsmanship, pairing rigorous technical optimization (95+ Lighthouse, zero CLS) with quiet visual luxury."
        }
      },
      {
        "@type": "Question",
        "name": "How custom are the generated layouts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each commission is drawn from a blank page, aligned with your exact brand assets, typography priorities, and tone. No pre-made kits are ever used."
        }
      },
      {
        "@type": "Question",
        "name": "Are your websites optimized for search ranking and SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, completely. Every project receives exhaustive semantic HTML structuring, descriptive tag auditing, rich JSON-LD schema layouts, sitemap integration, and high speed ranks to pass Google Core Web Vitals comfortably."
        }
      },
      {
        "@type": "Question",
        "name": "What is the average timeline for an enterprise delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our typical delivery window spans 7 to 14 days, from initial wireframing and copy crafting to final deployment calibration."
        }
      }
    ]
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Featured Creative Commissions Portfolio",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "CreativeWork",
          "name": "Gopalji Khopra",
          "headline": "India's Premier B2B Manufacturer of Coconut Ingredients",
          "description": "Enterprise wholesale inquiry platform styled with bold, editorial layout structures to showcase heritage coconut processing quality.",
          "url": "https://expresswebcraft.com/#portfolio"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "CreativeWork",
          "name": "Friends Tours & Travels",
          "headline": "Luxurious Travel Agency & Curated Tour Booking Portal",
          "description": "Luxury travel itinerary hub showcasing curated global escapes, optimized with immersive, fluid, responsive gallery frames.",
          "url": "https://expresswebcraft.com/#portfolio"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "CreativeWork",
          "name": "Rally Pizza",
          "headline": "Artisanal Culinary Showcase Platform",
          "description": "Crisp culinary interface featuring premium typography paired with interactive digital navigation menus.",
          "url": "https://expresswebcraft.com/#portfolio"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "CreativeWork",
          "name": "Agroshore Organics",
          "headline": "Certified Organic Global B2B Export Portal",
          "description": "Highly performant agricultural export portal highlighting soil-to-shore supply integrity and high-volume wholesale routes.",
          "url": "https://expresswebcraft.com/#portfolio"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  );
}
