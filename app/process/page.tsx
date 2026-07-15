import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronRight, ArrowUpRight, Compass, Edit3, Eye, Rocket, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Bespoke Creative Process — Blueprint to Launch in Days",
  description: "Explore Express Webcraft's high-velocity development process. Learn how we deliver elite digital flagships across 4 curated engineering milestones.",
  keywords: [
    "creative web development process",
    "web design workflow milestones",
    "wireframing to launch timeline",
    "technical seo implementation steps",
    "express webcraft methodology"
  ],
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Bespoke Creative Process — Blueprint to Launch in Days",
    description: "Explore Express Webcraft's high-velocity development process. Learn how we deliver elite digital flagships across 4 curated engineering milestones.",
    url: "https://expresswebcraft.com/process",
    siteName: "Express Webcraft",
    images: [
      {
        url: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783525342/ChatGPT_Image_Jul_8_2026_03_24_57_AM_pvot5h.png",
        width: 1200,
        height: 630,
        alt: "Express Webcraft Creative Process Workflow",
      }
    ],
  }
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Wireframing",
    tagline: "MAPPING THE VISUAL HIERARCHY",
    desc: "We begin with a deep exploration of your operational targets and target audience profile. In this stage, we construct complete spatial layout wireframes, mapping out where each header, description, and call-to-action rests on the blank blueprint canvas to eliminate friction.",
    icon: <Compass className="w-5 h-5 text-brand-gold" />,
    deliverables: ["Visual layout wireframes", "User conversion pathway mapping", "Project scope agreement blueprint"]
  },
  {
    step: "02",
    title: "Creative Brand Crafting",
    tagline: "SELECTING FONTS AND BRAND ASSETS",
    desc: "We match elite, high-contrast typography pairings (combining Playfair Display headings with crisp Inter body prose) with customized eye-safe brand colors. Every asset—from logo symbols to product display galleries—is selected and aligned to reinforce a luxurious, editorial aesthetic.",
    icon: <Edit3 className="w-5 h-5 text-brand-gold" />,
    deliverables: ["Curated typography pairing selection", "Bespoke brand color palette draft", "Premium vector graphics & icon sets"]
  },
  {
    step: "03",
    title: "High-Fidelity Interface Review",
    tagline: "ITERATIVE CODE REVIEWS & LIVE PREVIEWS",
    desc: "Our senior developers write clean, fully type-safe React and Next.js components matching the approved wireframes. We generate a private, live preview environment, allowing you to interactively scroll, test page speeds, audit mobile usability, and give feedback in real time.",
    icon: <Eye className="w-5 h-5 text-brand-gold" />,
    deliverables: ["Secure live development preview links", "100% responsive interface validation", "Micro-interaction and hover state testing"]
  },
  {
    step: "04",
    title: "SEO & Export Calibration",
    tagline: "TECHNICAL SCHEMA & PRODUCTION DEPLOY",
    desc: "Before public release, we inject high-end JSON-LD structured data schemas, configure dynamic sitemaps, compress images into modern WebP/AVIF formats, optimize Core Web Vitals, and deploy to ultra-secure, blazing-fast Cloud Run container networks.",
    icon: <Rocket className="w-5 h-5 text-brand-gold" />,
    deliverables: ["Complete JSON-LD rich snippet schema integration", "95+ Google Lighthouse speed audit pass", "Global Edge CDN hosting activation"]
  }
];

export default function ProcessPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://expresswebcraft.com/process/#breadcrumb",
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
        "name": "Process",
        "item": "https://expresswebcraft.com/process"
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
            <span className="text-brand-charcoal font-bold">OUR PROCESS</span>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-brand-red font-bold hover:text-brand-charcoal transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>
        </div>

        {/* SECTION TITLE */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="font-sans text-[11px] font-black tracking-[0.25em] text-brand-clay uppercase block">
            ✦ RIGOROUS WORKFLOW MILESTONES ✦
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-brand-charcoal leading-none uppercase tracking-tight">
            BLUEPRINT TO LAUNCH
          </h1>
          <p className="text-sm md:text-base text-brand-charcoal/70 leading-relaxed font-light max-w-2xl">
            We follow an exhaustively mapped, zero-bloat pipeline engineered to deliver luxury web experiences. No shortcuts, no fluff—just pure mathematical craft.
          </p>
        </div>

        {/* PROCESS MILESTONES STEPPED LIST */}
        <div className="space-y-12">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-brand-paper border-2 border-brand-charcoal p-6 md:p-8 relative shadow-[6px_6px_0px_0px_rgba(11,27,58,0.15)] group hover:shadow-[6px_6px_0px_0px_rgba(201,162,39,1)] transition-all"
            >
              {/* Left sidebar block indicating step number */}
              <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between items-start border-b lg:border-b-0 lg:border-r border-brand-charcoal/10 pb-4 lg:pb-0 lg:pr-8">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-brand-clay font-bold block uppercase">
                    MILESTONE STATUS
                  </span>
                  <div className="flex items-center gap-2 font-display text-4xl font-black text-brand-charcoal">
                    <span className="text-brand-gold">#</span>
                    {step.step}
                  </div>
                </div>
                <div className="w-10 h-10 bg-brand-charcoal text-brand-cream flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(201,162,39,1)] self-end lg:self-start">
                  {step.icon}
                </div>
              </div>

              {/* Main information content block */}
              <div className="lg:col-span-6 space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] text-brand-clay font-bold block uppercase tracking-wider">
                    {step.tagline}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-black uppercase text-brand-charcoal group-hover:text-brand-red transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              {/* Deliverables right column */}
              <div className="lg:col-span-3 bg-brand-cream/30 border border-brand-charcoal/10 p-5 space-y-3 font-mono text-[10px]">
                <span className="font-sans text-[9px] font-black text-brand-charcoal uppercase block tracking-wider">
                  ✦ DELIVERABLES
                </span>
                <ul className="space-y-2 text-brand-charcoal/85">
                  {step.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-1.5 leading-snug">
                      <CheckCircle className="w-3 h-3 text-brand-gold shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Process callout block */}
        <div className="mt-16 bg-brand-charcoal text-brand-cream p-8 text-center space-y-4 max-w-3xl mx-auto border-2 border-brand-charcoal">
          <h3 className="font-display text-xl font-black uppercase text-brand-gold">
            Ready to initiate your build?
          </h3>
          <p className="font-sans text-xs text-brand-cream/80 max-w-xl mx-auto font-light leading-relaxed">
            Our typical onboarding cycle takes less than 24 hours. Contact our team today, outline your digital vision, and receive a tailored project scope agreement.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal text-xs font-bold uppercase tracking-widest transition-all shadow-md"
            >
              <span>Initiate Onboarding ↗</span>
            </Link>
          </div>
        </div>

      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
