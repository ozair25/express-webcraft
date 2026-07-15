import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight, ArrowUpRight, Monitor, Laptop, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Creative Commissions Portfolio — Express Webcraft Bespoke Digital Artistry",
  description: "Browse our high-performance digital commissions. Explore case studies including Gopalji Khopra, Friends Tours & Travels, Shree Kalyan, and Agroshore Organics.",
  keywords: [
    "express webcraft portfolio",
    "gopalji khopra case study",
    "friends tours travels portal",
    "high performance website examples",
    "bespoke nextjs showpiece"
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Creative Commissions Portfolio — Express Webcraft Bespoke Digital Artistry",
    description: "Browse our high-performance digital commissions. Explore case studies including Gopalji Khopra, Friends Tours & Travels, Shree Kalyan, and Agroshore Organics.",
    url: "https://expresswebcraft.com/portfolio",
    siteName: "Express Webcraft",
    images: [
      {
        url: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783525342/ChatGPT_Image_Jul_8_2026_03_24_57_AM_pvot5h.png",
        width: 1200,
        height: 630,
        alt: "Express Webcraft Featured Commissions Portfolio",
      }
    ],
  }
};

const PORTFOLIO_PROJECTS = [
  {
    id: "gopalji",
    title: "Gopalji Khopra",
    url: "gopaljikhopraudhyog.com",
    imgSrc: "/gopaljinew.jpg",
    mobImgSrc: "/mob gopalji.jpeg",
    category: "B2B Bulk Manufacturer Platform",
    description: "A premium, high-conversion digital platform custom designed for Gopalji Khopra Udyog, India's premier B2B manufacturer of high-grade coconut products. Features structured wholesale inquiry channels, deep brand heritage storytelling, elegant editorial typography, and high-performance layout calibrations.",
    highlights: ["B2B Bulk Inquiry Tunnel", "High-Contrast Editorial Typography", "Strict SEO & Multi-device Compatibility"],
    tech: "Next.js 15 + React 19 + Tailwind",
    speed: "Sub-Second Interactive LCP"
  },
  {
    id: "friends",
    title: "Friends Tours & Travels",
    url: "friendstoursandtravel.com",
    imgSrc: "/friends.png",
    mobImgSrc: "/mob friends.jpeg",
    category: "Luxury Travel & Tour Booking Portal",
    description: "A luxurious, highly responsive travel agency and tour portal built for Friends Tours & Travels. Designed with immersive destination showcases, curated premium itineraries, fluid sticky navigation, and optimized SEO and speed to drive bookings for high-end international travel experiences.",
    highlights: ["Curated Premium Tour Packages", "Transparent Sticky Navigation", "Fluid Destination Galleries"],
    tech: "React 19 + Tailwind CSS + motion",
    speed: "Instantly cached static frames"
  },
  {
    id: "shrikalyan",
    title: "Shree Kalyan",
    url: "shree-kalyan-new.vercel.app",
    imgSrc: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1784136246/screencapture-shree-kalyan-new-vercel-app-2026-07-15-20_45_51_p8h7cg.jpg",
    mobImgSrc: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1784136080/shrikalyan_full_u9mll7.jpg",
    category: "Financial Assets Redesign",
    description: "A comprehensive digital transformation and frontend redesign for Shree Kalyan, featuring high-fidelity asset tables, interactive trust indices, responsive calculators, and a custom vintage-meets-modern interface tailored for premium investor presentation.",
    highlights: ["Interactive Financial Instruments Showcase", "Highly Fluid Mobile-Responsive Tables", "Premium Trust-Grade Aesthetic Layouts"],
    tech: "Next.js 15 + TypeScript + SVG",
    speed: "Zero-CLS Fluid Recalibration"
  },
  {
    id: "agroshore",
    title: "Agroshore Organics",
    url: "agroshoreorganics.com",
    imgSrc: "/agroshoreorganics.com_ (1).png",
    mobImgSrc: "/mob agrosure .jpeg",
    category: "Global Export B2B Portal",
    description: "A sophisticated, high-performance global export B2B portal designed for Agroshore Organics. Highlights certified organic farming practices, premium cold-pressed oil and spice portfolios, robust wholesale inquiry tunnels, and elegant clean layouts optimized for international trade buyers.",
    highlights: ["Certified Organic Verification", "Global B2B Export Channels", "Elegant Heritage-inspired Showcase"],
    tech: "Next.js 15 + Tailwind CSS v4",
    speed: "Instant Static Page Generation (SSG)"
  }
];

export default function PortfolioPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://expresswebcraft.com/portfolio/#breadcrumb",
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
        "name": "Portfolio",
        "item": "https://expresswebcraft.com/portfolio"
      }
    ]
  };

  const portfolioListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Bespoke Digital Commissions Showcase",
    "numberOfItems": PORTFOLIO_PROJECTS.length,
    "itemListElement": PORTFOLIO_PROJECTS.map((proj, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "CreativeWork",
        "name": proj.title,
        "headline": proj.category,
        "description": proj.description,
        "url": `https://expresswebcraft.com/portfolio/#${proj.id}`
      }
    }))
  };

  return (
    <div className="min-h-screen bg-transparent grainy-bg relative overflow-x-hidden text-brand-charcoal select-none flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioListSchema) }}
      />

      <Header />

      <main className="flex-1 pt-28 lg:pt-36 pb-20 px-4 md:px-12 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Breadcrumbs and back navigation */}
        <div className="flex items-center justify-between border-b border-brand-charcoal/10 pb-6 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-brand-charcoal/60">
            <Link href="/" className="hover:text-brand-clay transition-colors">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-charcoal/30" />
            <span className="text-brand-charcoal font-bold">PORTFOLIO</span>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-brand-red font-bold hover:text-brand-charcoal transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>
        </div>

        {/* SECTION TITLE */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="font-sans text-[11px] font-black tracking-[0.25em] text-brand-clay uppercase block">
            ✦ SELECTED CREATIVE COMMISSIONS ✦
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-brand-charcoal leading-none uppercase tracking-tight">
            LANDMARK BUILDS
          </h1>
          <p className="text-sm md:text-base text-brand-charcoal/70 leading-relaxed font-light max-w-2xl">
            A showcase of digital flagships custom designed and engineered for industry-leading businesses. Experience sub-second speed coupled with elegant editorial layouts.
          </p>
        </div>

        {/* PROJECTS CONTINUOUS SHOWCASE */}
        <div className="space-y-24">
          {PORTFOLIO_PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              id={proj.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch border-b border-brand-charcoal/10 pb-20 last:border-b-0 last:pb-0 scroll-mt-28"
            >
              {/* LEFT COLUMN: The custom scrollable high-contrast browser frame mockup */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div className="relative w-full aspect-[4/3] bg-brand-cream border-2 border-brand-charcoal overflow-hidden shadow-[6px_6px_0px_0px_rgba(11,27,58,1)] flex flex-col group">
                  
                  {/* Browser simulated bar */}
                  <div className="flex items-center justify-between px-3 py-2 border-b-2 border-brand-charcoal bg-brand-cream select-none z-20">
                    <div className="flex space-x-1.5 items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-clay" />
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-olive" />
                    </div>
                    <div className="flex-1 max-w-xs md:max-w-md mx-4 bg-brand-charcoal/5 rounded-md py-0.5 px-3 flex items-center justify-center text-[9px] md:text-[10px] text-brand-charcoal/60 font-mono tracking-tight">
                      <span className="text-brand-gold mr-1.5">🔒</span>
                      {proj.url}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[9px] text-brand-charcoal/40 font-mono">100% SECURE</span>
                    </div>
                  </div>

                  {/* Scrollable snapshot image container */}
                  <div className="flex-1 w-full overflow-y-auto elegant-scrollbar relative bg-brand-paper">
                    {/* Desktop View */}
                    <div className="hidden sm:block w-full">
                      <Image
                        src={proj.imgSrc}
                        alt={`${proj.title} Desktop View`}
                        width={1200}
                        height={2400}
                        className="w-full h-auto object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Mobile View */}
                    <div className="block sm:hidden w-full">
                      <Image
                        src={proj.mobImgSrc || proj.imgSrc}
                        alt={`${proj.title} Mobile View`}
                        width={600}
                        height={1600}
                        className="w-full h-auto object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Scroll assistant animation badge */}
                    <div className="absolute bottom-4 right-4 bg-brand-charcoal/90 text-brand-cream font-mono text-[9px] px-3 py-1.5 shadow-lg z-10 animate-bounce pointer-events-none flex items-center gap-1.5">
                      <span>↓</span>
                      <span className="font-sans font-bold">SCROLL INSIDE</span>
                    </div>
                  </div>

                  {/* HUD design grids overlays */}
                  <div className="absolute inset-x-4 top-12 bottom-4 border border-brand-cream/5 pointer-events-none z-10" />
                  <div className="absolute top-11 left-3 w-4 h-4 border-t-2 border-l-2 border-brand-gold z-10 pointer-events-none" />
                  <div className="absolute top-11 right-3 w-4 h-4 border-t-2 border-r-2 border-brand-gold z-10 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-brand-gold z-10 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-brand-gold z-10 pointer-events-none" />

                  <div className="absolute bottom-4 left-4 bg-brand-charcoal/80 backdrop-blur-md text-brand-cream font-mono text-[8px] tracking-widest px-2 py-0.5 z-10 uppercase">
                    SHOWCASE WORK // {proj.id.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Project details content */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-brand-paper border border-brand-charcoal/15 p-6 md:p-8 shadow-sm relative">
                
                {/* Visual blue border accent framing */}
                <div className="absolute inset-0 border-[10px] md:border-[12px] border-[#0B1B3A]/20 pointer-events-none z-35" />

                {/* Elegant framing ornaments */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-brand-charcoal/20" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-brand-charcoal/20" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-brand-charcoal/20" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-brand-charcoal/20" />

                <div className="space-y-6">
                  <div className="border-b border-brand-charcoal/10 pb-4">
                    <span className="font-sans text-[10px] font-black tracking-widest text-brand-clay uppercase block mb-1">
                      {proj.category}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-brand-charcoal">
                      {proj.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <p className="font-sans text-xs md:text-sm text-brand-charcoal/85 leading-relaxed font-light">
                      {proj.description}
                    </p>

                    {/* Technical stats dashboard */}
                    <div className="bg-brand-cream/35 border border-brand-charcoal/10 p-4 space-y-2">
                      <div className="flex justify-between text-[9px] font-mono">
                        <span className="text-brand-charcoal/50">PLATFORM // ENGINE</span>
                        <span className="text-brand-charcoal font-bold uppercase">{proj.tech}</span>
                      </div>
                      <div className="flex justify-between text-[9px] font-mono">
                        <span className="text-brand-charcoal/50">PERFORMANCE TARGET</span>
                        <span className="text-brand-gold font-bold uppercase">{proj.speed}</span>
                      </div>
                    </div>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 pt-2">
                      <span className="font-sans text-[9px] font-black tracking-wider text-brand-clay uppercase block">
                        KEY LANDMARK HIGHLIGHTS
                      </span>
                      <ul className="space-y-1 text-[11px] text-brand-charcoal/75 font-mono">
                        {proj.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-charcoal/10 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="font-mono text-[9px] text-brand-clay uppercase font-bold">
                    REF_ID // EW_0{idx + 1}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-charcoal hover:bg-brand-gold text-brand-cream hover:text-brand-charcoal text-[9px] font-bold uppercase tracking-widest transition-colors shadow-sm"
                  >
                    <span>Inquire About Build</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

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
