import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronRight, ArrowUpRight, HelpCircle, CheckCircle, Flame, Star, Coins } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Premium Website Pricing — Express Webcraft Creative Packages",
  description: "Explore bespoke development packages and investment tiers. Review clear timelines, comprehensive deliverables, and call-to-actions for your custom website build.",
  keywords: [
    "express webcraft pricing",
    "bespoke web design cost",
    "nextjs development package rates",
    "landing page design pricing",
    "technical seo services cost"
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Premium Website Pricing — Express Webcraft Creative Packages",
    description: "Explore bespoke development packages and investment tiers. Review clear timelines, comprehensive deliverables, and call-to-actions for your custom website build.",
    url: "https://expresswebcraft.com/pricing",
    siteName: "Express Webcraft",
    images: [
      {
        url: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1783525342/ChatGPT_Image_Jul_8_2026_03_24_57_AM_pvot5h.png",
        width: 1200,
        height: 630,
        alt: "Express Webcraft Pricing Tiers",
      }
    ],
  }
};

const PRICE_TIERS = [
  {
    title: "Landing Pages",
    slug: "landing-pages",
    tier: "Boutique Single-Page",
    timeline: "2 to 4 Days",
    idealFor: "Perfect for single-purpose product, app, book, or high-value service launches looking for maximum conversion rates.",
    highlights: ["Single-screen viewport design", "Persuasive custom copywriting", "Stripe payment / CRM integrations", "95+ Lighthouse performance pass"]
  },
  {
    title: "Custom Website Design",
    slug: "custom-website-design",
    tier: "Premium Aesthetic Design",
    timeline: "3 to 5 Days",
    idealFor: "Ideal for elite brands, boutiques, real estate developments, and personal profiles requiring unique visual identity.",
    highlights: ["Bespoke custom UI layout (zero templates)", "High-end editorial typography", "Complete responsive scaling wireframes", "Advanced interactive feedback states"]
  },
  {
    title: "Web Development",
    slug: "web-development",
    tier: "Enterprise Software Build",
    timeline: "7 to 14 Days",
    idealFor: "For businesses demanding robust full-stack applications, advanced dynamic portals, or secure custom portals.",
    highlights: ["Next.js 15 App Router codebase", "Type-safe robust TypeScript layer", "Secure Firestore synchronization", "Highly secure serverless API routes"]
  },
  {
    title: "E-commerce Solutions",
    slug: "e-commerce-solutions",
    tier: "Elite Online Storefront",
    timeline: "10 to 18 Days",
    idealFor: "For luxurious online boutiques and retail flagships looking for a frictionless checkout experience.",
    highlights: ["Interactive high-fidelity WebP product grids", "Ultra-fast shopping cart and custom checkout", "Stripe payment gateway proxy integrations", "Product rich schema structured data"]
  },
  {
    title: "SEO & Performance Optimization",
    slug: "seo-performance",
    tier: "Search Authority Suite",
    timeline: "3 to 5 Days",
    idealFor: "For existing projects struggling with low organic search traffic, slow mobile speeds, or crawl indexation issues.",
    highlights: ["Lighthouse Core Web Vitals remediation", "Full JSON-LD schema layouts implementation", "Semantic sitemap and robots.txt setup", "Site-wide internal-linking calibration"]
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    tier: "Creative UX Blueprinting",
    timeline: "4 to 7 Days",
    idealFor: "For start-ups looking to map out highly complex user journeys and interfaces before writing code.",
    highlights: ["High-fidelity mobile and desktop layouts", "Accessible WCAG AA contrast guidelines", "Custom component interactive UI kits", "Interactive flow wireframing"]
  },
  {
    title: "Website Maintenance & Support",
    slug: "website-maintenance-support",
    tier: "Continuous Support & Preservation",
    timeline: "Monthly Retainer",
    idealFor: "For digital assets requiring constant security updates, uptime checks, and content updates.",
    highlights: ["Uptime Status Monitoring & Audits", "Continuous dependency and package updates", "Monthly database inquiry pipeline tests", "Fast 24-hour response support channel"]
  },
  {
    title: "Analytics & Growth",
    slug: "analytics-growth",
    tier: "Performance Marketing Growth",
    timeline: "2 to 3 Days",
    idealFor: "For marketing teams wanting absolute transparency on traffic acquisition, conversion rates, and SEO queries.",
    highlights: ["Clean Google Analytics 4 (GA4) configuration", "Google Tag Manager set and tracking", "Inquiry form custom event handlers", "Search Console keyword mappings"]
  }
];

export default function PricingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://expresswebcraft.com/pricing/#breadcrumb",
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
        "name": "Pricing",
        "item": "https://expresswebcraft.com/pricing"
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
            <span className="text-brand-charcoal font-bold">CREATIVE PRICING</span>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-brand-red font-bold hover:text-brand-charcoal transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>
        </div>

        {/* SECTION TITLE */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="font-sans text-[11px] font-black tracking-[0.25em] text-brand-clay uppercase block">
            ✦ TRANSPARENT INVESTMENT PLANS ✦
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-brand-charcoal leading-none uppercase tracking-tight">
            COMMISSION PACKAGES
          </h1>
          <p className="text-sm md:text-base text-brand-charcoal/70 leading-relaxed font-light max-w-2xl">
            We offer fixed-scope pricing and timeline commitments for all core deliverables. Select the design tier that matches your brand growth objectives.
          </p>
        </div>

        {/* PRICING PLANS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {PRICE_TIERS.map((tier) => (
            <div
              key={tier.slug}
              className="bg-brand-paper border-2 border-brand-charcoal p-6 flex flex-col justify-between hover:shadow-lg transition-all group relative shadow-[4px_4px_0px_0px_rgba(11,27,58,0.12)] hover:shadow-[4px_4px_0px_0px_rgba(201,162,39,1)]"
            >
              <div className="space-y-4 flex-1">
                {/* Header row */}
                <div className="border-b border-brand-charcoal/10 pb-4">
                  <span className="font-mono text-[9px] text-brand-clay font-bold block uppercase mb-1">
                    {tier.tier}
                  </span>
                  <h3 className="font-display text-base font-black uppercase text-brand-charcoal group-hover:text-brand-red transition-colors">
                    {tier.title}
                  </h3>
                </div>

                {/* Subtitle / Delivery Time */}
                <div className="font-mono text-[10px] bg-brand-cream/40 border border-brand-charcoal/5 px-2.5 py-1.5 flex justify-between">
                  <span className="text-brand-charcoal/65">EST. TIMELINE:</span>
                  <span className="text-brand-charcoal font-black uppercase">{tier.timeline}</span>
                </div>

                <p className="font-sans text-[11px] text-brand-charcoal/80 leading-relaxed font-light">
                  {tier.idealFor}
                </p>

                {/* Checklist highlights */}
                <div className="space-y-2 pt-2 pb-6">
                  <span className="font-sans text-[9px] font-black text-brand-clay uppercase block tracking-wider">
                    KEY BENEFITS:
                  </span>
                  <ul className="space-y-1.5 font-mono text-[9px] text-brand-charcoal/85">
                    {tier.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 leading-snug">
                        <CheckCircle className="w-3 h-3 text-brand-gold shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-brand-charcoal/5 mt-auto flex flex-col gap-2.5">
                <Link
                  href="/contact"
                  className="w-full text-center py-2.5 bg-brand-charcoal hover:bg-brand-gold text-brand-cream hover:text-brand-charcoal text-[9px] font-bold uppercase tracking-widest transition-all shadow-sm"
                >
                  Book Commission ↗
                </Link>
                <Link
                  href={`/services/${tier.slug}`}
                  className="w-full text-center py-2 border border-brand-charcoal/20 hover:bg-brand-paper hover:text-brand-clay text-[9px] font-bold uppercase tracking-wider transition-all font-mono"
                >
                  View Full Specs
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
