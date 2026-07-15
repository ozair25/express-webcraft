import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Terms and Conditions — Express Webcraft Bespoke Digital Artistry",
  description: "Review our Terms of Engagement. Learn about our commission scope, development timelines, performance guarantees, and full intellectual ownership protocols.",
  keywords: ["express webcraft terms and conditions", "terms of engagement", "commission scope", "intellectual property transfer"],
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions — Express Webcraft Bespoke Digital Artistry",
    description: "Review our Terms of Engagement. Learn about our commission scope, development timelines, performance guarantees, and full intellectual ownership protocols.",
    url: "https://expresswebcraft.com/terms-and-conditions",
    siteName: "Express Webcraft",
    images: [
      {
        url: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783525342/ChatGPT_Image_Jul_8_2026_03_24_57_AM_pvot5h.png",
        width: 1200,
        height: 630,
        alt: "Express Webcraft Terms and Conditions",
      }
    ],
  }
};

export default function TermsAndConditionsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://expresswebcraft.com/terms-and-conditions/#breadcrumb",
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
        "name": "Terms and Conditions",
        "item": "https://expresswebcraft.com/terms-and-conditions"
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

      <main className="flex-1 pt-28 lg:pt-36 pb-20 px-4 md:px-12 max-w-4xl mx-auto w-full relative z-10">
        
        {/* Breadcrumbs and back navigation */}
        <div className="flex items-center justify-between border-b border-brand-charcoal/10 pb-6 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-brand-charcoal/60">
            <Link href="/" className="hover:text-brand-clay transition-colors">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-charcoal/30" />
            <span className="text-brand-charcoal font-bold font-mono">TERMS & CONDITIONS</span>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-brand-red font-bold hover:text-brand-charcoal transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>
        </div>

        {/* SECTION TITLE */}
        <div className="space-y-4 mb-12">
          <span className="font-sans text-[11px] font-black tracking-[0.25em] text-brand-clay uppercase block">
            ✦ TERMS OF ENGAGEMENT // PROTOCOL ✦
          </span>
          <h1 className="font-display text-4xl font-black text-brand-charcoal leading-none uppercase tracking-tight">
            Terms of Service
          </h1>
          <p className="font-mono text-[9px] text-brand-clay font-bold uppercase block tracking-widest">
            Last Updated: July 2026 // STANDARDIZED STUDIO GUIDELINES
          </p>
        </div>

        {/* CONTENT CARD */}
        <div className="bg-brand-paper border-2 border-brand-charcoal p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(11,27,58,0.1)] space-y-8">
          
          <p className="font-sans text-sm md:text-base text-brand-charcoal/85 leading-relaxed font-light">
            Accessing our services or initiating a website commission proposal establishes consent to these Terms of Engagement. Please review these parameters thoroughly before submitting your final project specifications.
          </p>

          <div className="space-y-6">
            <div className="space-y-2 border-t border-brand-charcoal/10 pt-6">
              <h3 className="font-display text-base font-black uppercase text-brand-charcoal flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                1. Scope of Commissions
              </h3>
              <p className="font-sans text-xs md:text-sm text-brand-charcoal/75 leading-relaxed font-light">
                All project builds are custom-tailored on top of standard Next.js, React, and Tailwind CSS architectures. Specifications, specific typography setups, and asset provisions are fully defined and agreed upon inside a dedicated Statement of Work (SOW).
              </p>
            </div>

            <div className="space-y-2 border-t border-brand-charcoal/10 pt-6">
              <h3 className="font-display text-base font-black uppercase text-brand-charcoal flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                2. Timelines & Performance Guarantees
              </h3>
              <p className="font-sans text-xs md:text-sm text-brand-charcoal/75 leading-relaxed font-light">
                Our general delivery standard is a turnkey launch blueprint completed in approximately 7 to 14 business days from formal contract signoff. All design parameters target an outstanding mobile visual score and strict search-engine crawl validation checkpoints.
              </p>
            </div>

            <div className="space-y-2 border-t border-brand-charcoal/10 pt-6">
              <h3 className="font-display text-base font-black uppercase text-brand-charcoal flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                3. Revision Entitlement
              </h3>
              <p className="font-sans text-xs md:text-sm text-brand-charcoal/75 leading-relaxed font-light">
                To secure absolute client satisfaction, we offer exhaustive visual refinement passes within the scope of the original blueprint, ensuring your exact aesthetic alignment is captured flawlessly and rendering perfect results.
              </p>
            </div>

            <div className="space-y-2 border-t border-brand-charcoal/10 pt-6">
              <h3 className="font-display text-base font-black uppercase text-brand-charcoal flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                4. Intellectual Curation Ownership
              </h3>
              <p className="font-sans text-xs md:text-sm text-brand-charcoal/75 leading-relaxed font-light">
                Upon complete reconciliation of outstanding commission fees, all custom layout files, responsive assets, domain maps, and high-performance codes transition entirely and exclusively to client ownership.
              </p>
            </div>
          </div>

          {/* Accept stamp */}
          <div className="bg-brand-cream/35 border border-brand-charcoal/10 p-5 font-mono text-[9px] text-brand-charcoal/65 leading-relaxed uppercase">
            ✦ CONTRACTUALLY BINDING ON WORK ORDER SIGNATURES
          </div>

        </div>

      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
