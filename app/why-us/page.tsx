import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight, ArrowUpRight, CheckCircle2, ShieldCheck, Compass, Zap, Target, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Why Choose Express Webcraft — The Difference is Everything",
  description: "Learn what makes Express Webcraft MP's premier bespoke website design and engineering atelier. Discover our 4 pillars, client statistics, and proven track record.",
  keywords: [
    "why express webcraft",
    "web design customization philosophy",
    "fast nextjs deployment timeline",
    "high conversion design system",
    "secure web development standards"
  ],
  alternates: {
    canonical: "/why-us",
  },
  openGraph: {
    title: "Why Choose Express Webcraft — The Difference is Everything",
    description: "Learn what makes Express Webcraft MP's premier bespoke website design and engineering atelier. Discover our 4 pillars, client statistics, and proven track record.",
    url: "https://expresswebcraft.com/why-us",
    siteName: "Express Webcraft",
    images: [
      {
        url: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783525342/ChatGPT_Image_Jul_8_2026_03_24_57_AM_pvot5h.png",
        width: 1200,
        height: 630,
        alt: "Why Choose Express Webcraft",
      }
    ],
  }
};

const PILLARS = [
  {
    id: "01",
    title: "Days, Not Months",
    desc: "While traditional design agencies take months of endless meetings and delays, we build at high-velocity pace. We deploy pixel-perfect, highly complex platforms in 7 to 14 days.",
    icon: <Zap className="w-5 h-5 text-brand-gold" />
  },
  {
    id: "02",
    title: "Obsessively Crafted",
    desc: "Every single layout detail is mathematically computed and aligned manually. We create bespoke art tailored to your exact target audience using premium grids and high-end typography.",
    icon: <Compass className="w-5 h-5 text-brand-gold" />
  },
  {
    id: "03",
    title: "Built to Convert",
    desc: "A beautiful website must deliver business outcomes. We optimize interactive pathways, headlines, and call-to-actions to prompt quick client inquiries, maximizing your ad ROI.",
    icon: <Target className="w-5 h-5 text-brand-gold" />
  },
  {
    id: "04",
    title: "Secure by Default",
    desc: "Our apps feature strict server-side parameter sanitization, secure API route proxies, environment key isolation, rate-limiting on forms, and continuous npm package audits.",
    icon: <ShieldCheck className="w-5 h-5 text-brand-gold" />
  }
];

export default function WhyUsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://expresswebcraft.com/why-us/#breadcrumb",
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
        "name": "Why Us",
        "item": "https://expresswebcraft.com/why-us"
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
            <span className="text-brand-charcoal font-bold">WHY CHOOSE US</span>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-brand-red font-bold hover:text-brand-charcoal transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>
        </div>

        {/* SECTION TITLE */}
        <div className="max-w-4xl space-y-4 mb-16">
          <span className="font-sans text-[11px] font-black tracking-[0.25em] text-brand-clay uppercase block">
            ✦ CHOREOGRAPHED FOR ABSOLUTE DISTINCTION ✦
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-brand-charcoal leading-none uppercase tracking-tight">
            THE DIFFERENCE IS <span className="text-brand-clay">EVERYTHING</span>.
          </h1>
          <p className="text-lg md:text-xl font-display italic text-brand-charcoal/75 leading-relaxed max-w-3xl font-semibold">
            &ldquo;We don&apos;t build pages. We build powerful market leverage. By discarding pre-made themes and generic templates, we engineer elite digital assets that load in milliseconds and convert visitors at record rates.&rdquo;
          </p>
        </div>

        {/* PILLARS & STATS ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 4 Core Pillars (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="bg-brand-paper border-2 border-brand-charcoal p-6 flex flex-col justify-between hover:shadow-lg hover:border-brand-clay/35 transition-all group relative shadow-[4px_4px_0px_0px_rgba(11,27,58,0.1)]"
                >
                  <div className="absolute top-3 right-3 w-2 h-2 bg-brand-gold rounded-full opacity-70" />
                  
                  <div className="space-y-4">
                    <span className="font-mono text-xs font-bold text-brand-clay block">
                      ✦ CORE PILLAR // {pillar.id}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-charcoal/5 flex items-center justify-center">
                        {pillar.icon}
                      </div>
                      <h3 className="font-display text-base font-black uppercase text-brand-charcoal group-hover:text-brand-red transition-colors">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-brand-charcoal/75 leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inbound Conversion Guarantee Badge */}
            <div className="bg-brand-red text-brand-cream p-6 border-2 border-brand-charcoal relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />
              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-2 text-brand-gold font-mono text-[10px] font-bold tracking-widest uppercase">
                  <Star className="w-3.5 h-3.5 fill-brand-gold" />
                  <span>PERFORMANCE STANDARDS</span>
                </div>
                <h3 className="font-display text-lg font-black uppercase tracking-tight text-brand-cream">
                  The Sub-Second Speed Target
                </h3>
                <p className="font-sans text-xs text-brand-cream/80 leading-relaxed font-light">
                  A mere 100ms delay in page loading times can reduce conversion rates by up to 7%. Our team guarantees that all core layouts achieve 95+ scores on Google Lighthouse audits, providing your business with a bulletproof search ranking advantage.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Stats & Polaroids (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Real Stats Board */}
            <div className="bg-brand-charcoal text-brand-cream p-8 space-y-6 shadow-xl border-2 border-brand-charcoal relative">
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/20" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/20" />
              
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-gold font-bold block text-center border-b border-white/10 pb-4">
                ✦ AUDITED STUDIO RECORDS // GLOBAL COMMISSION STATUS
              </span>

              <div className="space-y-6">
                {[
                  { count: "5+ Years", label: "Aesthetic Design & Core Engineering Experience" },
                  { count: "10+", label: "Bespoke Digital Flagships Delivered Globally" },
                  { count: "100%", label: "Verified Client Satisfaction Records" },
                  { count: "7-14 Days", label: "Average Turnaround from Blueprint to Launch" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-baseline gap-4 border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                    <span className="font-display text-3xl sm:text-4xl font-black text-brand-gold tracking-tight shrink-0">
                      {stat.count}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-wider text-brand-cream/70 font-light leading-relaxed">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Polaroid Layout showing craft details */}
            <div className="bg-brand-paper border border-brand-charcoal/15 p-6 flex flex-col items-center justify-center relative min-h-[300px]">
              <div className="absolute top-3 left-3 font-mono text-[8px] text-brand-charcoal/40 uppercase">LAYOUT INSPECTION BLUEPRINT</div>
              
              <div className="relative w-[180px] bg-white border border-brand-charcoal/10 p-3 pb-8 rotate-[-4deg] shadow-lg hover:rotate-0 transition-transform duration-500 z-10">
                <div className="aspect-square relative bg-brand-cream overflow-hidden">
                  <Image
                    src="https://picsum.photos/seed/atelierwhy/400/400"
                    alt="Bespoke Design Craft Detail"
                    fill
                    className="object-cover filter grayscale contrast-125 sepia-[0.1]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-display italic text-[9px] text-brand-charcoal/60 mt-2 block text-center">
                  Calibration Frame #026
                </span>
              </div>
            </div>

          </div>

        </div>

      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
