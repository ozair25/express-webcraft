import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronRight, ShieldCheck, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Privacy Policy — Express Webcraft Bespoke Digital Artistry",
  description: "Review Express Webcraft's strict data preservation protocols. Read about our strategic data utilization rules, zero third-party tracking, and data sandboxing standard.",
  keywords: ["express webcraft privacy policy", "client data preservation", "anti brokerage stance", "secure database sandbox"],
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy — Express Webcraft Bespoke Digital Artistry",
    description: "Review Express Webcraft's strict data preservation protocols. Read about our strategic data utilization rules, zero third-party tracking, and data sandboxing standard.",
    url: "https://expresswebcraft.com/privacy-policy",
    siteName: "Express Webcraft",
    images: [
      {
        url: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783525342/ChatGPT_Image_Jul_8_2026_03_24_57_AM_pvot5h.png",
        width: 1200,
        height: 630,
        alt: "Express Webcraft Privacy Policy",
      }
    ],
  }
};

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://expresswebcraft.com/privacy-policy/#breadcrumb",
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
        "name": "Privacy Policy",
        "item": "https://expresswebcraft.com/privacy-policy"
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
            <span className="text-brand-charcoal font-bold font-mono">PRIVACY POLICY</span>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-brand-red font-bold hover:text-brand-charcoal transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>
        </div>

        {/* SECTION TITLE */}
        <div className="space-y-4 mb-12">
          <span className="font-sans text-[11px] font-black tracking-[0.25em] text-brand-clay uppercase block">
            ✦ DATA PRESERVATION PROTOCOL ✦
          </span>
          <h1 className="font-display text-4xl font-black text-brand-charcoal leading-none uppercase tracking-tight">
            Privacy Policy
          </h1>
          <p className="font-mono text-[9px] text-brand-clay font-bold uppercase block tracking-widest">
            Last Updated: July 2026 // SECURE RETENTION GUARANTEED
          </p>
        </div>

        {/* CONTENT CARD */}
        <div className="bg-brand-paper border-2 border-brand-charcoal p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(11,27,58,0.1)] space-y-8">
          
          <p className="font-sans text-sm md:text-base text-brand-charcoal/85 leading-relaxed font-light">
            We hold a rigorous stance concerning the protection of your personal and business data. Express Webcraft operates on a security-first model, ensuring that any parameters submitted via our project commission questionnaire or contact systems are retained with absolute confidentiality.
          </p>

          <div className="space-y-6">
            <div className="space-y-2 border-t border-brand-charcoal/10 pt-6">
              <h3 className="font-display text-base font-black uppercase text-brand-charcoal flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                1. Information Collection
              </h3>
              <p className="font-sans text-xs md:text-sm text-brand-charcoal/75 leading-relaxed font-light">
                When you submit a project commission application, we collect essential identifier details including your Name, Company Name, Email Address, Phone Number, Selected Service, and your Project Vision description. These values are processed to compile a tailored project feasibility assessment and preliminary design wireframe.
              </p>
            </div>

            <div className="space-y-2 border-t border-brand-charcoal/10 pt-6">
              <h3 className="font-display text-base font-black uppercase text-brand-charcoal flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                2. Strategic Data Utilization
              </h3>
              <p className="font-sans text-xs md:text-sm text-brand-charcoal/75 leading-relaxed font-light">
                Your parameters are processed strictly to prepare design briefs, compute precise performance target estimates, verify waitlist quotas, and schedule face-to-face brief calls on our private ledger. We never use your project parameters for automated profiling.
              </p>
            </div>

            <div className="space-y-2 border-t border-brand-charcoal/10 pt-6">
              <h3 className="font-display text-base font-black uppercase text-brand-charcoal flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                3. No Third-Party Tracking
              </h3>
              <p className="font-sans text-xs md:text-sm text-brand-charcoal/75 leading-relaxed font-light">
                We hold an absolute, non-negotiable stance against automated user brokerage. We do not rent, lease, trade, or distribute your email addresses or company profiles to advertising syndicates. Any client data is retained privately under high-grade secure server sandboxes.
              </p>
            </div>

            <div className="space-y-2 border-t border-brand-charcoal/10 pt-6">
              <h3 className="font-display text-base font-black uppercase text-brand-charcoal flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                4. Analytical Telemetry
              </h3>
              <p className="font-sans text-xs md:text-sm text-brand-charcoal/75 leading-relaxed font-light">
                We employ simple, anonymized telemetry tracking to gauge application load latency and click-through optimization. No personal cookies are logged during these visual audits, maintaining the privacy of your browsing environment.
              </p>
            </div>
          </div>

          {/* Secure disclaimer stamp */}
          <div className="bg-brand-cream/35 border border-brand-charcoal/10 p-5 font-mono text-[9px] text-brand-charcoal/65 leading-relaxed uppercase">
            ✦ VERIFIED UNDER HIGH-GRADE SECURITY PROTOCOLS // EXTRAS SECURE TRANSFERS
          </div>

        </div>

      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
