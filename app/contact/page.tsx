import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Our Creative Atelier — Express Webcraft Premium Commissions",
  description: "Initiate your bespoke web design commission. Submit your project requirements, target timeline, and vision coordinates directly to our visual architects.",
  keywords: [
    "contact express webcraft",
    "web design project commission",
    "custom web engineering quotes",
    "hire luxury nextjs developer"
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Our Creative Atelier — Express Webcraft Premium Commissions",
    description: "Initiate your bespoke web design commission. Submit your project requirements, target timeline, and vision coordinates directly to our visual architects.",
    url: "https://expresswebcraft.com/contact",
    siteName: "Express Webcraft",
    images: [
      {
        url: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783525342/ChatGPT_Image_Jul_8_2026_03_24_57_AM_pvot5h.png",
        width: 1200,
        height: 630,
        alt: "Contact Express Webcraft Atelier",
      }
    ],
  }
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://expresswebcraft.com/contact/#breadcrumb",
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
        "name": "Contact",
        "item": "https://expresswebcraft.com/contact"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-transparent grainy-bg relative overflow-x-hidden text-brand-charcoal select-none flex flex-col justify-between" suppressHydrationWarning={true}>
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
            <span className="text-brand-charcoal font-bold">CONTACT ATELIER</span>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-brand-red font-bold hover:text-brand-charcoal transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Agency Information details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-[11px] font-black tracking-[0.25em] text-brand-clay uppercase block">
                ✦ COMMISSION OFFICE // ONLINE ✦
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-black text-brand-charcoal leading-none uppercase tracking-tight">
                LET&apos;S TALK <span className="text-brand-clay">BUILDS</span>
              </h1>
              <p className="text-sm md:text-base text-brand-charcoal/70 leading-relaxed font-light max-w-lg">
                We design and build bespoke web flagships that help elite brands rank first and load in milliseconds. Fill out our commission questionnaire to initiate onboarding immediately.
              </p>
            </div>

            {/* Direct Studio coordinates card */}
            <div className="bg-brand-paper border-2 border-brand-charcoal p-6 space-y-4 shadow-[4px_4px_0px_0px_rgba(11,27,58,0.1)]">
              <span className="font-mono text-[9px] text-brand-clay font-bold block uppercase tracking-wider">
                STUDIO COORDINATES
              </span>
              <div className="space-y-3 font-mono text-xs text-brand-charcoal/80">
                <div>
                  <span className="text-brand-charcoal/45 block text-[9px] uppercase">Direct Email:</span>
                  <a href="mailto:sayedozair25@gmail.com" className="font-bold text-brand-red hover:text-brand-clay transition-colors">sayedozair25@gmail.com</a>
                </div>
                <div>
                  <span className="text-brand-charcoal/45 block text-[9px] uppercase">Registered Location:</span>
                  <span className="font-bold">Indore, MP, India (Available Worldwide)</span>
                </div>
                <div>
                  <span className="text-brand-charcoal/45 block text-[9px] uppercase">Response Time:</span>
                  <span className="font-bold text-brand-gold">Less than 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Floating analog vintage credit banner decoration */}
            <div className="border border-brand-charcoal/10 p-5 rounded-none text-center font-mono text-[9px] text-brand-charcoal/50 uppercase tracking-widest bg-white/30">
              ✦ CALIBRATION STAMP APPROVED ✦
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <ContactForm />

        </div>

      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
