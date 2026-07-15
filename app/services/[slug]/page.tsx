import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Monitor, Code, Sparkles, ShoppingCart, 
  TrendingUp, Layers, Wrench, BarChart3, 
  ArrowLeft, ChevronRight, CheckCircle, HelpCircle 
} from "lucide-react";

// Types
interface ServiceDetail {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  features: string[];
  faqs: { q: string; a: string }[];
  process: string[];
}

// Service Data
const SERVICES_DATA: Record<string, ServiceDetail> = {
  "custom-website-design": {
    slug: "custom-website-design",
    title: "Custom Website Design",
    shortDesc: "Bespoke digital artistry tailored to elite brand identities. We craft responsive web layouts using Swiss minimalism and luxury typography.",
    longDesc: "At Express Webcraft, we reject generic layout templates and cookie-cutter builders. We treat custom web design as digital artistry, handcrafting bespoke layout architectures from a blank canvas. By pairing elite editorial typography with perfect grid alignments and custom brand assets, we design experiences that command attention. Every interface is meticulously calibrated to be high-contrast, eye-safe, and fluidly responsive across all desktop, tablet, and mobile displays.",
    iconName: "Monitor",
    features: [
      "Bespoke layout design crafted from a blank canvas (no generic templates)",
      "High-end editorial typography pairings and customized brand colors",
      "Interactive component wireframing and high-fidelity user flows",
      "Pixel-perfect responsive scaling across all modern mobile and desktop screens",
      "SEO-friendly layout structures that facilitate Google crawl indexing"
    ],
    faqs: [
      {
        q: "What makes custom website design different from using pre-made templates?",
        a: "Pre-made templates restrict your brand positioning, carry bloated unused code, and often look generic. Our custom website designs are built entirely from scratch to align perfectly with your brand identity, load significantly faster, and maximize search engine visibility."
      },
      {
        q: "Do you design responsive layouts for mobile devices?",
        a: "Yes, completely. Every layout is built using fluid mobile-first principles, ensuring that your content automatically restructures for high usability, readability, and speed on tablets, smart devices, and phones."
      }
    ],
    process: ["Discovery & Wireframing", "Creative Brand Crafting", "High-Fidelity Interface Review", "SEO & Export Calibration"]
  },
  "web-development": {
    slug: "web-development",
    title: "Web Development",
    shortDesc: "High-performance full-stack web engineering. Scalable, secure, and ultra-fast custom architectures built natively with React 19 and Next.js 15.",
    longDesc: "Our web development department operates at the absolute cutting edge of software engineering. We specialize in building fast, scalable, and ultra-secure custom web applications utilizing Next.js 15, React 19, and Tailwind CSS. By leveraging modern Server-Side Rendering (SSR), static pre-rendering, and native type-safety via TypeScript, we build robust digital systems that load in milliseconds and pass Google Core Web Vitals comfortably. Security is built into every line, featuring strict input sanitization, secure environment isolation, and rate-limiting safeguards.",
    iconName: "Code",
    features: [
      "Robust React 19 and Next.js 15 App Router software architecture",
      "Full-stack capabilities with secure serverless API routes",
      "Type-safe development using clean, maintainable TypeScript",
      "Dynamic data fetching, optimized state management, and asset preloading",
      "Strict security measures including parameter sanitization and secure HTTP headers"
    ],
    faqs: [
      {
        q: "Why do you use Next.js 15 and React 19 for web development?",
        a: "Next.js 15 and React 19 offer unparalleled performance benefits, including automated code splitting, image optimization, server-side rendering, and instant page transitions that dramatically improve Core Web Vitals scores."
      },
      {
        q: "Is the web application code secure?",
        a: "Absolutely. We follow strict web security practices (OWASP Top 10), ensuring server-side input validation, sanitization against XSS, rate-limiting on endpoints, and safe environment variable handling to prevent API key leaks."
      }
    ],
    process: ["Technical Specification", "TypeScript Base Architecture", "Full-Stack API Integration", "Production Optimization"]
  },
  "landing-pages": {
    slug: "landing-pages",
    title: "Landing Pages",
    shortDesc: "High-converting landing pages engineered to generate high-value client inquiries. Tailored visual copy paired with rapid loading speeds.",
    longDesc: "A premium landing page is a business's most effective tool for client acquisition. Our landing pages are mathematically and visually engineered to maximize conversions. We write custom, persuasive brand copywriting aligned with high-contrast layouts and strategically placed call-to-action (CTA) triggers. By eliminating navigation distractions and optimizing the underlying codebase to load in under a second, we ensure that every visitor is guided smoothly toward submitting an inquiry, increasing your return on advertising spend (ROAS).",
    iconName: "Sparkles",
    features: [
      "Persuasive brand copywriting designed to drive user conversions",
      "Single-screen laser focus that eliminates distraction and leaks",
      "Instant loading speeds designed to lower advertising bounce rates",
      "Seamless integration with inquiry pipelines, databases, and CRMs",
      "A/B testing-ready technical layout structures"
    ],
    faqs: [
      {
        q: "What makes a landing page high-converting?",
        a: "Conversion is achieved by pairing persuasive, benefit-focused copywriting with clean visual hierarchy, fast page speeds, minimal distraction, and clear, single-purpose inquiry forms."
      },
      {
        q: "Can you link landing pages to our CRM?",
        a: "Yes. All form submissions can be directly funneled via secure backend APIs into your CRM, email marketing platforms, or persistent Firestore database for real-time tracking."
      }
    ],
    process: ["Conversion Goal Alignment", "Copywriting & Story Outline", "High-Contrast Layout Implementation", "Inquiry Flow Testing"]
  },
  "e-commerce-solutions": {
    slug: "e-commerce-solutions",
    title: "E-commerce Solutions",
    shortDesc: "Luxurious online retail spaces engineered to deliver frictionless transactional journeys. Custom carts, fast checkout, and premium merchant branding.",
    longDesc: "Digital retail should feel as exclusive as a physical boutique. Our e-commerce solutions pair sensory visual storytelling with frictionless, secure checkout systems. We design custom transactional journeys that display products with stunning, optimized, responsive image grids while keeping cart mechanisms lightning-fast. Built without the heavy bloat of standard templates, our customized storefronts integrate seamlessly with leading secure payment processors (such as Stripe) and ensure maximum transaction safety.",
    iconName: "ShoppingCart",
    features: [
      "Bespoke merchant product display with high-fidelity WebP/AVIF galleries",
      "Frictionless, lightning-fast shopping cart and checkout interactions",
      "Secure payment gateway integrations (Stripe, PayPal, etc.) with server-side proxying",
      "Automated stock status tracking and order database logging",
      "Highly optimized schema tags for product rich snippets on Google Search"
    ],
    faqs: [
      {
        q: "How do you ensure transaction security on e-commerce sites?",
        a: "We route all payments through secure, encrypted APIs (like Stripe) using server-side token proxying. We never store credit card details locally, fully complying with PCI-DSS guidelines."
      },
      {
        q: "Can we manage products easily after launch?",
        a: "Yes. We can integrate lightweight head-less CMS platforms or configure custom admin panels so you can manage product lists, prices, and stock counts effortlessly."
      }
    ],
    process: ["Boutique Architecture Planning", "Merchant Gallery & Cart Design", "Secure API Gateway Integration", "Transactional Loop Auditing"]
  },
  "seo-performance": {
    slug: "seo-performance",
    title: "SEO & Performance Optimization",
    shortDesc: "Technical search calibration and Core Web Vitals engineering. Speed ranks, clean crawling pathways, and semantic rich-snippet structured schemas.",
    longDesc: "Visibility in search engines is the lifeblood of online growth. Our SEO and performance optimization service goes far beyond simple keyword matching. As Senior Technical SEO Engineers, we reconstruct your site's codebase to achieve perfect indexing, superb speed, and rich-snippet support. We implement precise JSON-LD structured data (Organization, LocalBusiness, BreadcrumbList, FAQPage), eliminate render-blocking assets, pre-render routes, configure robust sitemaps and robots.txt rules, and optimize images dynamically to score 95+ on Google Lighthouse audits.",
    iconName: "TrendingUp",
    features: [
      "Comprehensive Core Web Vitals audit (LCP, INP, CLS optimization)",
      "Exhaustive JSON-LD schema layouts for rich-snippet eligibility",
      "Semantic HTML tags restructuring for clear search outline hierarchy",
      "Sitemap.xml and robots.txt optimization to ensure clean Google indexing",
      "DNS-prefetching, preconnecting, and code-splitting setup"
    ],
    faqs: [
      {
        q: "What are Core Web Vitals and why do they matter for SEO?",
        a: "Core Web Vitals are a set of specific metrics (LCP, INP, CLS) that Google uses to evaluate user experience and speed. Websites that pass these vitals receive a significant ranking boost in Google search results."
      },
      {
        q: "What is structured JSON-LD data?",
        a: "JSON-LD is a structured data format that tells search engines exactly what your business, services, products, and FAQs are. Implementing this increases your chances of appearing in Google's rich snippets and AI search overviews."
      }
    ],
    process: ["Core Web Vitals Diagnosis", "Semantic Code Restructuring", "JSON-LD Schema Implementation", "Indexability Verification"]
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDesc: "Thoughtful, high-fidelity interactive blueprints and wireframe visual hierarchies that balance elegant aesthetics with perfect usability.",
    longDesc: "Exceptional design balances sensory beauty with structural usability. Our UI/UX design service focuses on establishing a tailored visual language that guides users intuitively. We design custom interactive layouts, establish elegant typography pairings, maintain precise white space margins, and build clean interactive feedback states. Every button, input, and animation is placed intentionally to lower cognitive load, making the interface a natural, pleasing extension of your brand story.",
    iconName: "Layers",
    features: [
      "Exhaustive research into brand values and user behavior profiles",
      "Custom UI kits, brand color palettes, and typography guidelines",
      "High-fidelity desktop and mobile layout wireframes",
      "Micro-animations and hover states for satisfying interactive feedback",
      "Accessibility calibration meeting WCAG AA contrast guidelines"
    ],
    faqs: [
      {
        q: "How does UI/UX design impact business conversions?",
        a: "A seamless, accessible UI reduces friction. When users find information easily and enjoy interacting with the elements, they are significantly more likely to stay longer and submit an inquiry."
      },
      {
        q: "Do you design according to accessibility standards?",
        a: "Yes. We style all our components to satisfy WCAG AA contrast guidelines, support keyboard-only navigation, and provide clear ARIA labels for screen readers."
      }
    ],
    process: ["User Journey Mapping", "Aesthetic Moodboard Pairings", "High-Fidelity Wireframing", "Usability & Contrast Validation"]
  },
  "website-maintenance-support": {
    slug: "website-maintenance-support",
    title: "Website Maintenance & Support",
    shortDesc: "Proactive engineering preservation, secure uptime monitoring, and ongoing optimization to ensure your digital flagship operates perfectly.",
    longDesc: "A modern web application is an evolving digital flagship. Our maintenance and support services guarantee that your site remains secure, responsive, and completely optimized long after its initial launch. We implement continuous uptime monitoring, routine code and security dependency updates, database optimization for enquiries, and regular link integrity audits. If your hosting environment or search algorithms shift, we quickly adjust the codebase so your site never suffers from speed degradation or ranking drops.",
    iconName: "Wrench",
    features: [
      "Continuous secure dependency and package updates (npm audits)",
      "Proactive security scanning and serverless endpoint monitoring",
      "Broken link, asset, and sitemap health checks",
      "Database maintenance for inquiry logging pipelines",
      "Fast, responsive tech support for code tweaks and text revisions"
    ],
    faqs: [
      {
        q: "Why is ongoing website maintenance necessary?",
        a: "Web technologies and browsers evolve rapidly. Ongoing maintenance prevents security vulnerabilities, maintains fast loading speeds as your database grows, and ensures that third-party integrations do not break."
      },
      {
        q: "What is your turn-around time for support requests?",
        a: "Our clients receive priority support, with standard content updates and technical checks completed within 24 hours of submission."
      }
    ],
    process: ["Package & Security Audit", "Uptime & Database Tracking", "Codebase Health Maintenance", "Priority Tech Support Channel"]
  },
  "analytics-growth": {
    slug: "analytics-growth",
    title: "Analytics & Growth",
    shortDesc: "Data-driven marketing architecture. We integrate Google Analytics 4, Search Console, and GTM securely to extract actionable business insights.",
    longDesc: "Unlocking business growth requires precise, actionable data. Our analytics and growth services build the exact measurement infrastructure your marketing team needs. We handle the full integration of Google Analytics 4 (GA4), Google Search Console, and Google Tag Manager (GTM) in a secure, high-performance manner that does not affect your loading speeds. By configuring custom event tracking—such as tracking which buttons and services drive the most inquiries—we provide you with clear, readable data showing exactly where your leads come from.",
    iconName: "BarChart3",
    features: [
      "Clean Google Analytics 4 (GA4) custom event tracking",
      "Google Search Console configuration and keyword mapping",
      "High-performance, non-blocking script integration",
      "Conversion tracking for forms, call-to-actions, and button clicks",
      "Custom reporting dashboards showing traffic and acquisition channels"
    ],
    faqs: [
      {
        q: "Will adding Google Analytics slow down our website?",
        a: "No. We integrate analytics tags asynchronously and utilize preconnect directives, ensuring that tracking scripts do not block page rendering or hurt your Core Web Vitals."
      },
      {
        q: "What insights can we gain from Search Console?",
        a: "Search Console reveals exactly what keywords users are typing into Google to find your site, your average search ranking, and any crawling issues that might prevent pages from indexing."
      }
    ],
    process: ["Analytics Strategy Planning", "Event Tracking Configuration", "Performance-Optimized Deployment", "Conversion Analysis Review"]
  }
};

// Component Map helper
function getIcon(name: string) {
  switch (name) {
    case "Monitor": return <Monitor className="w-10 h-10 text-brand-gold" />;
    case "Code": return <Code className="w-10 h-10 text-brand-gold" />;
    case "Sparkles": return <Sparkles className="w-10 h-10 text-brand-gold" />;
    case "ShoppingCart": return <ShoppingCart className="w-10 h-10 text-brand-gold" />;
    case "TrendingUp": return <TrendingUp className="w-10 h-10 text-brand-gold" />;
    case "Layers": return <Layers className="w-10 h-10 text-brand-gold" />;
    case "Wrench": return <Wrench className="w-10 h-10 text-brand-gold" />;
    case "BarChart3": return <BarChart3 className="w-10 h-10 text-brand-gold" />;
    default: return <Monitor className="w-10 h-10 text-brand-gold" />;
  }
}

// Generate static routes at build time
export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

// Dynamic Meta Titles and descriptions for each page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  
  if (!service) {
    return {
      title: "Service Not Found — Express Webcraft",
      description: "Express Webcraft service page not found.",
    };
  }

  const title = `${service.title} — Elite Digital Solutions | Express Webcraft`;
  const description = `${service.shortDesc} Explore our premium technical capabilities, structured workflows, and high-performance digital artistry.`;

  return {
    title,
    description,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} services`,
      "express webcraft service",
      "premium web agency",
      "bespoke digital agency",
      "technical seo services",
      "high performance nextjs"
    ],
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.expresswebcraft.com/services/${slug}`,
      type: "website",
      siteName: "Express Webcraft",
      locale: "en_US",
      images: [
        {
          url: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783525342/ChatGPT_Image_Jul_8_2026_03_24_57_AM_pvot5h.png",
          width: 1200,
          height: 630,
          alt: `${service.title} — Express Webcraft Services`,
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://res.cloudinary.com/dtrvyelcg/image/upload/v1783525342/ChatGPT_Image_Jul_8_2026_03_24_57_AM_pvot5h.png"]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      }
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  // Find other services for internal linking (excluding current)
  const otherServices = Object.values(SERVICES_DATA).filter(s => s.slug !== slug);

  // Schema generation
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://www.expresswebcraft.com/services/${slug}/#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.expresswebcraft.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.expresswebcraft.com/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://www.expresswebcraft.com/services/${slug}`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.expresswebcraft.com/services/${slug}/#service`,
    "name": service.title,
    "description": service.longDesc,
    "serviceType": service.title,
    "provider": {
      "@type": "ProfessionalService",
      "@id": "https://www.expresswebcraft.com/#localbusiness",
      "name": "Express Webcraft",
      "url": "https://www.expresswebcraft.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    }
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal flex flex-col font-sans selection:bg-brand-gold selection:text-brand-charcoal">
      
      {/* JSON-LD Structured Data Injectors */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* TOP NAVIGATION BAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-red border-b border-brand-gold/15 h-[80px] px-4 md:px-12 flex items-center justify-between shadow-lg">
        <Link href="/" className="flex items-center gap-3 group" id="header-brand-logo">
          <div className="w-10 h-10 bg-brand-cream text-brand-red font-display font-black text-xl flex items-center justify-center rounded-none shadow-[2px_2px_0px_0px_rgba(201,162,39,1)] transition-all group-hover:rotate-12">
            EW
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-black tracking-widest uppercase text-brand-cream">
              EXPRESS WEBCRAFT
            </span>
            <span className="text-[8px] font-mono tracking-widest uppercase text-brand-gold font-bold leading-none">
              WEB SOLUTIONS THAT INSPIRE
            </span>
          </div>
        </Link>

        <Link 
          href="/#contact"
          className="bg-brand-gold hover:bg-white text-brand-charcoal text-[9px] font-mono tracking-widest uppercase font-black px-5 py-3 transition-all shadow-[3px_3px_0px_0px_rgba(11,27,58,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          id="header-cta-button"
        >
          COMMISSION US
        </Link>
      </header>

      {/* HERO SECTION / BREADCRUMB */}
      <main className="flex-1 pt-28 lg:pt-36 pb-16 px-4 md:px-12 max-w-7xl mx-auto w-full">
        
        {/* Navigation back and Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-brand-charcoal/10 pb-6 mb-12 gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-brand-charcoal/60">
            <Link href="/" className="hover:text-brand-red transition-colors">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-charcoal/30" />
            <Link href="/#services" className="hover:text-brand-red transition-colors">SERVICES</Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-charcoal/30" />
            <span className="text-brand-charcoal font-bold uppercase">{service.title}</span>
          </div>

          <Link href="/#services" className="inline-flex items-center gap-2 text-xs font-mono text-brand-red font-bold hover:text-brand-charcoal transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            ALL SERVICES
          </Link>
        </div>

        {/* TWO COLUMN GRID DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Copy (8 columns) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Header Title with icon */}
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-charcoal text-brand-cream flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(201,162,39,1)]">
                {getIcon(service.iconName)}
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-brand-charcoal leading-none uppercase tracking-tight" id="service-heading-h1">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl font-display italic text-brand-charcoal/70 leading-relaxed font-semibold">
                &ldquo;{service.shortDesc}&rdquo;
              </p>
            </div>

            {/* Long Description (High-E-E-A-T showing expertise) */}
            <div className="space-y-6 text-sm md:text-base text-brand-charcoal/80 leading-relaxed max-w-3xl">
              <h2 className="font-display text-xl md:text-2xl font-black uppercase text-brand-charcoal tracking-wide border-b border-brand-charcoal/10 pb-2">
                EXPERT CAPABILITIES
              </h2>
              <p>{service.longDesc}</p>
              <p>
                Our engineering studio is built around absolute layout calibrations, 
                high speed performance ratings, and technical search visibility. We understand that 
                great web solutions do not merely exist—they must perform flawlessly under real-world usage constraints. 
                That is why every digital flagship we construct is calibrated, sanitized, and loaded with rich 
                metadata blueprints from day one.
              </p>
            </div>

            {/* Core Features list (H3 semantic hierarchy) */}
            <div className="space-y-4">
              <h3 className="font-display text-base font-black uppercase tracking-wider text-brand-charcoal">
                TECHNICAL DELIVERABLES Included:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/40 border border-brand-charcoal/5 p-4 rounded-none hover:border-brand-gold/30 transition-all shadow-sm">
                    <CheckCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm font-sans font-medium text-brand-charcoal/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Workflow steps (EEAT validation of structured professional services) */}
            <div className="space-y-4 pt-4">
              <h3 className="font-display text-base font-black uppercase tracking-wider text-brand-charcoal">
                STUDIO PROCESS WORKFLOW:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {service.process.map((step, i) => (
                  <div key={i} className="flex flex-col border border-brand-charcoal/10 p-4 bg-brand-charcoal text-brand-cream relative">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-brand-gold mb-2 font-bold">STAGE 0{i + 1}</span>
                    <span className="font-display text-xs font-bold uppercase leading-snug">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized FAQ Section (AI-Search, Entity Relations, QA-format optimized) */}
            <div className="space-y-6 pt-6 border-t border-brand-charcoal/10">
              <h2 className="font-display text-xl md:text-2xl font-black uppercase text-brand-charcoal tracking-wide flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-brand-red" />
                COMMON COMPRESSION QUESTIONS (FAQ)
              </h2>
              <div className="space-y-6 max-w-3xl">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="bg-white/50 border border-brand-charcoal/10 p-5 rounded-none shadow-sm">
                    <h3 className="font-display text-sm md:text-base font-black uppercase text-brand-charcoal leading-snug mb-2">
                      Q: {faq.q}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-charcoal/80 leading-relaxed font-sans">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar (4 columns) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* CTA Box */}
            <div className="bg-brand-red text-brand-cream p-6 border-2 border-brand-charcoal shadow-[6px_6px_0px_0px_rgba(201,162,39,1)]">
              <h3 className="font-display text-lg md:text-xl font-black uppercase tracking-tight text-brand-cream leading-none mb-3">
                READY FOR CALIBRATION?
              </h3>
              <p className="text-xs text-brand-cream/80 font-sans leading-relaxed mb-6">
                Let us transform your vision into an elite custom digital asset built for absolute speed, beauty, and organic growth.
              </p>
              <Link 
                href="/#contact" 
                className="w-full text-center block bg-brand-gold hover:bg-white text-brand-charcoal font-mono font-black text-xs uppercase tracking-wider py-3 transition-colors shadow-[2px_2px_0px_0px_rgba(11,27,58,1)]"
                id="sidebar-cta-btn"
              >
                BOOK THE COMMISSION
              </Link>
            </div>

            {/* Internal Links: Other Services (Swiss minimalism navigation) */}
            <div className="bg-white border border-brand-charcoal/15 p-6 rounded-none shadow-sm space-y-4">
              <h3 className="font-display text-xs font-black uppercase tracking-widest text-brand-charcoal border-b border-brand-charcoal/10 pb-2">
                EXPLORE OTHER DEPARTMENTS
              </h3>
              <nav className="flex flex-col space-y-2">
                {otherServices.map((s) => (
                  <Link 
                    key={s.slug} 
                    href={`/services/${s.slug}`}
                    className="flex items-center justify-between text-xs font-bold uppercase text-brand-charcoal/70 hover:text-brand-red transition-all py-1.5 border-b border-brand-charcoal/5 group"
                    id={`link-to-${s.slug}`}
                  >
                    <span>{s.title}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-brand-red" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* NAP Info (Local SEO Schema Validation) */}
            <div className="border border-brand-charcoal/10 p-6 space-y-3 font-mono text-[10px] text-brand-charcoal/60 bg-white/20">
              <h3 className="font-sans font-bold text-[11px] text-brand-charcoal uppercase tracking-wider">STUDIO LOCATION</h3>
              <p className="leading-relaxed">
                EXPRESS WEBCRAFT CO.<br />
                MP, 452001 <br />
                India (GLOBAL COMMISSIONS)
              </p>
              <p>TEL: +62 812 3456 7890</p>
              <p>HOURS: MON - FRI, 09:00 - 18:00 </p>
            </div>

          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="bg-brand-charcoal text-brand-cream py-12 px-4 md:px-12 mt-16 border-t border-brand-charcoal">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="font-display font-black text-brand-cream text-lg">EW</div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-brand-cream/50">
              © 2026 EXPRESS WEBCRAFT. DIGITAL CRAFTSMANSHIP GUARANTEED.
            </span>
          </div>

          <div className="flex gap-4 font-mono text-[10px] uppercase text-brand-cream/60">
            <Link href="/" className="hover:text-brand-gold transition-colors">HOME</Link>
            <Link href="/#services" className="hover:text-brand-gold transition-colors">SERVICES</Link>
            <Link href="/#portfolio" className="hover:text-brand-gold transition-colors">PORTFOLIO</Link>
            <Link href="/#process" className="hover:text-brand-gold transition-colors">WHY US</Link>
            <Link href="/#contact" className="hover:text-brand-gold transition-colors">CONTACT</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
