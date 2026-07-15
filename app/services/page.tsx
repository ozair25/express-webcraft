import type { Metadata } from "next";
import Link from "next/link";
import { Monitor, Code, Sparkles, ShoppingCart, TrendingUp, Layers, Wrench, BarChart3, ChevronRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Bespoke Web Services — Express Webcraft Design & Engineering Atelier",
  description: "Explore our ultra-luxury, high-performance web solutions. From custom web design and Next.js development to Technical SEO and analytics, explore our bespoke commissions.",
  keywords: [
    "custom web design services",
    "nextjs development agency",
    "high conversion landing pages",
    "boutique ecommerce web systems",
    "technical seo services"
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Bespoke Web Services — Express Webcraft Design & Engineering Atelier",
    description: "Explore our ultra-luxury, high-performance web solutions. From custom web design and Next.js development to Technical SEO and analytics, explore our bespoke commissions.",
    url: "https://expresswebcraft.com/services",
    siteName: "Express Webcraft",
    images: [
      {
        url: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783525342/ChatGPT_Image_Jul_8_2026_03_24_57_AM_pvot5h.png",
        width: 1200,
        height: 630,
        alt: "Express Webcraft Services Catalog",
      }
    ],
  }
};

const SERVICES_CATALOGUE = [
  {
    slug: "custom-website-design",
    title: "Custom Website Design",
    shortDesc: "Bespoke digital artistry tailored to elite brand identities. We craft visual masterpieces using Swiss minimalism, high-end typography, and tailored layouts.",
    icon: <Monitor className="w-8 h-8 text-brand-gold" />,
    timeline: "3 to 5 Days",
    pricing: "Premium",
    deliverables: ["Visual Interface Mockups", "Editorial Style Guide", "Typography Blueprints", "Responsive Scaling Layouts"]
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortDesc: "High-performance full-stack web engineering. Scalable, secure, and ultra-fast custom architectures built natively on React 19 and Next.js 15.",
    icon: <Code className="w-8 h-8 text-brand-gold" />,
    timeline: "7 to 14 Days",
    pricing: "Enterprise",
    deliverables: ["TypeScript Base Codebase", "Serverless API Routing", "Firestore Synchronization", "Full Uptime Isolation"]
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    shortDesc: "Conversion-optimized single-page masterpieces engineered to generate high-value client inquiries. Tailored visual copy paired with rapid loading speeds.",
    icon: <Sparkles className="w-8 h-8 text-brand-gold" />,
    timeline: "2 to 4 Days",
    pricing: "Boutique",
    deliverables: ["Persuasive Headline Copy", "Single-Screen Wireframe", "Instant Server Rendering", "Lead Pipeline Integration"]
  },
  {
    slug: "e-commerce-solutions",
    title: "E-commerce Solutions",
    shortDesc: "Luxurious online retail spaces engineered to deliver frictionless transactional journeys. Custom carts, fast checkout, and premium merchant branding.",
    icon: <ShoppingCart className="w-8 h-8 text-brand-gold" />,
    timeline: "10 to 18 Days",
    pricing: "Elite Retail",
    deliverables: ["Merchant Showcase Gallery", "Secure Stripe Transaction API", "Firestore Orders Database", "Product Rich Schema Tags"]
  },
  {
    slug: "seo-performance",
    title: "SEO & Performance Optimization",
    shortDesc: "Technical search calibration and Core Web Vitals engineering. Speed ranks, clean crawling pathways, and semantic rich-snippet structured schemas.",
    icon: <TrendingUp className="w-8 h-8 text-brand-gold" />,
    timeline: "3 to 5 Days",
    pricing: "Search Authority",
    deliverables: ["Lighthouse 95+ Audit Report", "Full JSON-LD Integration", "Sitemap & Robots Automation", "Inter-linking Architecture"]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDesc: "Thoughtful, high-fidelity interactive blueprints and wireframe visual hierarchies that balance elegant aesthetics with perfect usability.",
    icon: <Layers className="w-8 h-8 text-brand-gold" />,
    timeline: "4 to 7 Days",
    pricing: "Creative UX",
    deliverables: ["User Journey Blueprinting", "Custom Interactive UI Kits", "WCAG Contrast Validation", "Micro-Animation Schemes"]
  },
  {
    slug: "website-maintenance-support",
    title: "Website Maintenance & Support",
    shortDesc: "Proactive engineering preservation, secure uptime monitoring, and ongoing optimization to ensure your digital flagship operates perfectly.",
    icon: <Wrench className="w-8 h-8 text-brand-gold" />,
    timeline: "Monthly Retainer",
    pricing: "Continuous Support",
    deliverables: ["Uptime Status Monitoring", "Weekly Package Auditing", "Enquiry Pipeline Testing", "On-Demand Content Updates"]
  },
  {
    slug: "analytics-growth",
    title: "Analytics & Growth",
    shortDesc: "Data-driven marketing architecture. We integrate Google Analytics 4, Search Console, and GTM securely to extract actionable business insights.",
    icon: <BarChart3 className="w-8 h-8 text-brand-gold" />,
    timeline: "2 to 3 Days",
    pricing: "Performance Growth",
    deliverables: ["GA4 Tag Custom Isolation", "Google Tag Manager Set", "Interactive Event Trackers", "Lead Acquisition Reports"]
  }
];

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://expresswebcraft.com/services/#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://expresswebcraft.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://expresswebcraft.com/services"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-transparent grainy-bg relative overflow-x-hidden text-brand-charcoal select-none flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="flex-1 pt-28 lg:pt-36 pb-20 px-4 md:px-12 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Breadcrumbs and back navigation */}
        <div className="flex items-center justify-between border-b border-brand-charcoal/10 pb-6 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-brand-charcoal/60">
            <Link href="/" className="hover:text-brand-clay transition-colors">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-charcoal/30" />
            <span className="text-brand-charcoal font-bold">OUR SERVICES</span>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-brand-red font-bold hover:text-brand-charcoal transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>
        </div>

        {/* SECTION TITLE */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="font-sans text-[11px] font-black tracking-[0.25em] text-brand-clay uppercase block">
            ✦ BESPOKE WEB SOLUTIONS CATALOGUE ✦
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-brand-charcoal leading-none uppercase tracking-tight">
            SERVICE ARCHITECTURES
          </h1>
          <p className="text-sm md:text-base text-brand-charcoal/70 leading-relaxed font-light max-w-2xl">
            We operate as a digital atelier, designing and building web solutions calibrated to your exact operational requirements. Explore our core services and select your next project commission.
          </p>
        </div>

        {/* SERVICES LISTING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES_CATALOGUE.map((item, idx) => (
            <div
              key={item.slug}
              className="bg-brand-paper border-2 border-brand-charcoal p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all group relative shadow-[4px_4px_0px_0px_rgba(11,27,58,0.15)] hover:shadow-[4px_4px_0px_0px_rgba(201,162,39,1)]"
            >
              {/* Reference ID and Icon row */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-brand-charcoal text-brand-cream flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(201,162,39,1)]">
                  {item.icon}
                </div>
                <span className="font-mono text-xs font-bold text-brand-clay">
                  REF_CODE // 0{idx + 1}
                </span>
              </div>

              {/* Title & Desc */}
              <div className="space-y-4">
                <h3 className="font-display text-lg sm:text-xl font-black uppercase text-brand-charcoal group-hover:text-brand-red transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-charcoal/85 leading-relaxed font-light">
                  {item.shortDesc}
                </p>

                {/* Sub-details block */}
                <div className="grid grid-cols-2 gap-4 border-y border-brand-charcoal/10 py-3.5 my-4 font-mono text-[10px]">
                  <div>
                    <span className="text-brand-charcoal/50 block">TIMELINE:</span>
                    <span className="text-brand-charcoal font-bold uppercase">{item.timeline}</span>
                  </div>
                  <div>
                    <span className="text-brand-charcoal/50 block">TIER:</span>
                    <span className="text-brand-gold font-bold uppercase">{item.pricing}</span>
                  </div>
                </div>

                {/* Deliverables checklist */}
                <div className="space-y-2 pb-4">
                  <span className="font-sans text-[9px] font-black tracking-wider text-brand-clay uppercase block">
                    DELIVERABLES INCLUDED:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-brand-charcoal/80 font-mono">
                    {item.deliverables.map((del, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Action button */}
              <div className="pt-6 border-t border-brand-charcoal/5 mt-auto flex items-center justify-between">
                <Link
                  href={`/services/${item.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-charcoal hover:bg-brand-gold text-brand-cream hover:text-brand-charcoal text-[10px] font-bold uppercase tracking-widest transition-all shadow-md"
                >
                  <span>Explore Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="text-[10px] font-bold uppercase tracking-wider text-brand-clay hover:text-brand-charcoal transition-colors font-mono"
                >
                  Quick Inquiry ↗
                </Link>
              </div>
            </div>
          ))}
        </div>

      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
