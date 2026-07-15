import React from "react";

export default function StructuredData() {
  const baseUrl = "https://expresswebcraft.com";

  // 1. Founder Person Schema
  const founderSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#founder`,
    "name": "Sayed Ozair",
    "jobTitle": "Founder & Principal Architect",
    "worksFor": {
      "@id": `${baseUrl}/#organization`
    },
    "sameAs": [
      "https://github.com/sayedozair",
      "https://linkedin.com/in/sayedozair"
    ],
    "description": "Next.js architect, Technical SEO specialist, and founder of Express Webcraft."
  };

  // 2. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "Express Webcraft",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "@id": `${baseUrl}/#logo`,
      "url": `${baseUrl}/logo.png`,
      "caption": "Express Webcraft Logo"
    },
    "founder": {
      "@id": `${baseUrl}/#founder`
    },
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

  // 3. ImageObject Schema for Main Showcase Portfolio
  const showcaseImageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": `${baseUrl}/#showcaseImage`,
    "url": "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783525342/ChatGPT_Image_Jul_8_2026_03_24_57_AM_pvot5h.png",
    "width": "1200",
    "height": "630",
    "caption": "Express Webcraft — Bespoke Web Design & High-Performance Engineering Studio"
  };

  // 4. Local Business / Professional Service (with NAP, Location, AggregateRating, and Reviews)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#localbusiness`,
    "name": "Express Webcraft",
    "image": "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783525342/ChatGPT_Image_Jul_8_2026_03_24_57_AM_pvot5h.png",
    "url": baseUrl,
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
    },
    "parentOrganization": {
      "@id": `${baseUrl}/#organization`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "24",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Aris S."
        },
        "datePublished": "2026-06-12",
        "reviewBody": "Express Webcraft designed a premium, super fast wholesale platform for Gopalji Khopra. Their attention to layout calibration and technical SEO is unmatched. We saw wholesale inquiries increase significantly.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Hana T."
        },
        "datePublished": "2026-07-01",
        "reviewBody": "Bespoke digital artistry. Our luxury travel website is fluid, beautiful, and loads instantly. Working with Sayed and his team was an absolute pleasure.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      }
    ]
  };

  // 5. WebSite Schema (with SearchAction)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": "Express Webcraft",
    "description": "Bespoke digital artistry, luxury brand assets, and technical development.",
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // 6. WebPage Schema (Main Homepage metadata)
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    "url": baseUrl,
    "name": "Express Webcraft — Bespoke Web Design & High-Performance Engineering Studio",
    "description": "Express Webcraft is a premium web agency providing bespoke Custom Website Design, Web Development, High-Converting Landing Pages, E-commerce Solutions, SEO & Performance, UI/UX Design, Website Maintenance, and Analytics & Growth.",
    "isPartOf": {
      "@id": `${baseUrl}/#website`
    },
    "about": {
      "@id": `${baseUrl}/#organization`
    },
    "primaryImageOfPage": {
      "@id": `${baseUrl}/#showcaseImage`
    }
  };

  // 7. BreadcrumbList Schema (Root navigation)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${baseUrl}/#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      }
    ]
  };

  // 8. Services Catalog Schema (with OfferCatalog and dynamic services URLs)
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/#services`,
    "serviceType": "Bespoke Web Design and Engineering",
    "provider": {
      "@id": `${baseUrl}/#organization`
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
            "name": "Custom Website Design",
            "url": `${baseUrl}/services/custom-website-design`,
            "description": "Bespoke digital artistry tailored to elite brand identities. We craft visual masterpieces using Swiss minimalism, high-end typography, and tailored brand aesthetics."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "url": `${baseUrl}/services/web-development`,
            "description": "High-performance full-stack web engineering. Scalable, clean, and ultra-fast custom architectures built natively on Next.js 15, React 19, and Tailwind."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landing Pages",
            "url": `${baseUrl}/services/landing-pages`,
            "description": "Conversion-optimized single-page masterpieces engineered to generate high-value client inquiries. Tailored visual copy paired with fast loading times."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Solutions",
            "url": `${baseUrl}/services/e-commerce-solutions`,
            "description": "Luxurious online retail spaces engineered to deliver frictionless transactional journeys. Custom cart, fast checkout, and premium merchant branding."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Performance Optimization",
            "url": `${baseUrl}/services/seo-performance`,
            "description": "Technical search calibration and Core Web Vitals engineering. Speed ranks, clean crawling pathways, and semantic rich-snippet structured schemas."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "url": `${baseUrl}/services/ui-ux-design`,
            "description": "Thoughtful, high-fidelity interactive blueprints and wireframe visual hierarchies that balance elegant aesthetics with perfect usability."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Maintenance & Support",
            "url": `${baseUrl}/services/website-maintenance-support`,
            "description": "Proactive engineering preservation, secure uptime monitoring, and ongoing optimization to ensure your digital flagship operates perfectly."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Analytics & Growth",
            "url": `${baseUrl}/services/analytics-growth`,
            "description": "Data-driven marketing architecture. We integrate Google Analytics 4, Search Console, and GTM securely to extract actionable business insights."
          }
        }
      ]
    }
  };

  // 9. FAQ Schema
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

  // 10. Portfolio Schema
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
          "url": `${baseUrl}/#portfolio`
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
          "url": `${baseUrl}/#portfolio`
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
          "url": `${baseUrl}/#portfolio`
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
          "url": `${baseUrl}/#portfolio`
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(showcaseImageSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
