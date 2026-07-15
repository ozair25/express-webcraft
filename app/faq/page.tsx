"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight, HelpCircle, CheckCircle, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const FAQS_LIST = [
  {
    q: "What makes Express Webcraft different from other design agencies?",
    a: "We reject generic themes, page builders, and unpolished layouts. We approach web development as digital craftsmanship, pairing rigorous technical optimization (95+ Lighthouse score, zero layout shifts) with high-end editorial styling."
  },
  {
    q: "How custom are the designs you build?",
    a: "Each commission is hand-sketched and coded from a blank canvas. We align every layout to match your exact brand colors, typography weights, and brand identity. No pre-made templates are ever used."
  },
  {
    q: "Will my website be search engine optimized (SEO) and mobile-responsive?",
    a: "Yes, absolutely. We build mobile-first responsive layouts, implement proper semantic HTML structure, write optimized metadata, generate dynamic XML sitemaps, and configure structured JSON-LD rich snippet schemas so your site indexes cleanly on Google."
  },
  {
    q: "How fast can you deliver a premium website?",
    a: "While traditional design agencies take months, our high-velocity development pipeline is engineered to deliver pixel-perfect, custom-designed, and optimized digital flagships within 7 to 14 days, from initial wireframing to launch."
  },
  {
    q: "How do you ensure transaction security on e-commerce sites?",
    a: "We route all payments through secure, encrypted payment processors (such as Stripe) using server-side token proxying. We never store credit card details locally, conforming strictly to PCI-DSS standards."
  },
  {
    q: "Do you integrate with third-party tools, CRMs, or analytics?",
    a: "Yes. All form inquiries, orders, and analytical tags can be funneled via secure backend APIs into your CRM, database (Firestore), email marketing platforms, and Google Analytics 4 (GA4) with zero performance bloat."
  },
  {
    q: "What are your support and maintenance retainer services?",
    a: "Our website maintenance plan includes continuous uptime monitoring, routine npm package dependency updates, broken link checks, search-ranking audits, and on-demand content updates with a priority 24-hour response."
  },
  {
    q: "How do we get started with a project commission?",
    a: "Navigate to our Contact page and fill out our inquiry form. Tell us about your service requirements, timeline, budget, and project vision. A principal developer will reach out within 24 hours with a custom project scope blueprint."
  }
];

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://expresswebcraft.com/faq/#breadcrumb",
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
        "name": "FAQ",
        "item": "https://expresswebcraft.com/faq"
      }
    ]
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS_LIST.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-transparent grainy-bg relative overflow-x-hidden text-brand-charcoal select-none flex flex-col justify-between" suppressHydrationWarning={true}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      <Header />

      <main className="flex-1 pt-28 lg:pt-36 pb-20 px-4 md:px-12 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Breadcrumbs and back navigation */}
        <div className="flex items-center justify-between border-b border-brand-charcoal/10 pb-6 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-brand-charcoal/60">
            <Link href="/" className="hover:text-brand-clay transition-colors">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-charcoal/30" />
            <span className="text-brand-charcoal font-bold">FAQS</span>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-brand-red font-bold hover:text-brand-charcoal transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>
        </div>

        {/* SECTION TITLE */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="font-sans text-[11px] font-black tracking-[0.25em] text-brand-clay uppercase block">
            ✦ CHOREOGRAPHED STUDIO GUIDANCE ✦
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-brand-charcoal leading-none uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-sm md:text-base text-brand-charcoal/70 leading-relaxed font-light max-w-2xl">
            Have questions about our custom process, rates, or optimization capabilities? Explore our comprehensive FAQ handbook. If your question is not listed, contact us directly.
          </p>
        </div>

        {/* FAQ LIST SECTION */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS_LIST.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-brand-paper border-2 border-brand-charcoal transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(11,27,58,0.12)] hover:shadow-[4px_4px_0px_0px_rgba(201,162,39,1)]"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 group cursor-pointer select-none"
                >
                  <span className="font-display text-xs sm:text-sm font-black uppercase text-brand-charcoal group-hover:text-brand-clay transition-colors duration-300 tracking-wide">
                    {faq.q}
                  </span>
                  <span className="text-brand-gold shrink-0 bg-brand-charcoal/5 w-8 h-8 flex items-center justify-center rounded-full transition-all group-hover:bg-brand-charcoal/10">
                    {isOpen ? <Minus className="w-4 h-4 text-brand-clay" /> : <Plus className="w-4 h-4 text-brand-gold" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 md:p-6 pt-0 border-t border-brand-charcoal/5 font-sans text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Inquiry Call to Action */}
        <div className="mt-20 text-center space-y-4 max-w-md mx-auto bg-brand-cream/40 border border-brand-charcoal/10 p-6 md:p-8 rounded-none">
          <HelpCircle className="w-10 h-10 text-brand-gold mx-auto" />
          <h3 className="font-display text-base font-black uppercase text-brand-charcoal">
            Still have lingering questions?
          </h3>
          <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed font-light">
            No query is too small. Reach out to our principal web architects today and clear any operational ambiguities immediately.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-charcoal hover:bg-brand-gold text-brand-cream hover:text-brand-charcoal text-[10px] font-bold uppercase tracking-widest transition-all shadow-md"
            >
              <span>Submit Inquiry ↗</span>
            </Link>
          </div>
        </div>

      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
