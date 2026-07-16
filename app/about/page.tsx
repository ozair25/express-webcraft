import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createMetadata, DEFAULT_IMAGE_PATH } from "@/lib/metadata";
import { ChevronRight, ArrowLeft, Heart, Eye, Target, Compass, Sparkles, Code, Cpu, ShieldCheck, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = createMetadata({
  title: "About Express Webcraft — Bespoke Web Artistry & High-Performance Engineering",
  description: "Learn about Express Webcraft, a premium web development studio led by Sayed Ozair. Explore our company story, mission, core values, and high-performance tech stack.",
  path: "/about",
  image: DEFAULT_IMAGE_PATH,
  imageAlt: "About Express Webcraft — Company Profile",
  keywords: [
    "about express webcraft",
    "sayed ozair founder",
    "luxury web design studio",
    "high performance nextjs developers",
    "bespoke digital agency profile",
  ],
});

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://expresswebcraft.com/about/#breadcrumb",
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
        "name": "About",
        "item": "https://expresswebcraft.com/about"
      }
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://expresswebcraft.com/#founder",
    "name": "Sayed Ozair",
    "jobTitle": "Founder & Principal Architect",
    "worksFor": {
      "@type": "Organization",
      "name": "Express Webcraft",
      "url": "https://expresswebcraft.com"
    }
  };

  const values = [
    {
      icon: <Sparkles className="w-5 h-5 text-brand-gold" />,
      title: "Absolute Customization",
      desc: "Every grid line, spacing, and typography weight is placed with absolute intent. We use zero generic kits, templates, or bloated builders."
    },
    {
      icon: <Zap className="w-5 h-5 text-brand-gold" />,
      title: "Sub-Second Performance",
      desc: "We optimize code to load instantly, satisfying Google Core Web Vitals comfortably. Fast websites retain users and rank significantly higher."
    },
    {
      icon: <Cpu className="w-5 h-5 text-brand-gold" />,
      title: "Technological Rigor",
      desc: "Leveraging Next.js 15, React 19, and full-stack TypeScript. Clean, safe, and easily maintainable software development standards."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-gold" />,
      title: "Ironclad Security",
      desc: "Server-side input validation, API route proxying, and secure HTTP headers are baked into our design blueprint from day one."
    }
  ];

  const techStack = [
    { category: "Frontend Core", items: ["React 19", "Next.js 15 (App Router)", "TypeScript", "Tailwind CSS v4"] },
    { category: "Animation Engine", items: ["Framer Motion (motion/react)", "CSS Keyframe blueprints"] },
    { category: "Database & Auth", items: ["Firebase Firestore", "Firebase Authentication"] },
    { category: "SEO & Speed", items: ["JSON-LD Schema", "Metadata API", "Edge caching", "WebP/AVIF media optimization"] }
  ];

  return (
    <div className="min-h-screen bg-transparent grainy-bg relative overflow-x-hidden text-brand-charcoal select-none flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Header />

      <main className="flex-1 pt-28 lg:pt-36 pb-20 px-4 md:px-12 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Breadcrumbs and back navigation */}
        <div className="flex items-center justify-between border-b border-brand-charcoal/10 pb-6 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-brand-charcoal/60">
            <Link href="/" className="hover:text-brand-clay transition-colors">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-charcoal/30" />
            <span className="text-brand-charcoal font-bold">ABOUT STORY</span>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-brand-red font-bold hover:text-brand-charcoal transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>
        </div>

        {/* HERO TITLE SECTION */}
        <div className="max-w-4xl space-y-6 mb-16">
          <span className="font-sans text-[11px] font-black tracking-[0.25em] text-brand-clay uppercase block">
            ✦ THE ATELIER PERSPECTIVE ✦
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-brand-charcoal leading-none uppercase tracking-tight">
            WE REJECT COALITION TEMPLATES.<br />
            WE CRAFT UNIQUE <span className="text-brand-clay">DIGITAL FLAGSHIPS</span>.
          </h1>
          <p className="text-lg md:text-xl font-display italic text-brand-charcoal/75 leading-relaxed max-w-2xl font-semibold">
            &ldquo;Express Webcraft is a premium web development studio built around pristine editorial design, high-performance layouts, and absolute search engine dominance.&rdquo;
          </p>
        </div>

        {/* TWO-COLUMN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: STORY & VISION (8 columns) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Our Story */}
            <section className="space-y-4">
              <h2 className="font-display text-2xl font-black uppercase tracking-tight text-brand-charcoal border-b border-brand-charcoal/10 pb-2">
                Our Story
              </h2>
              <div className="font-sans text-sm md:text-base text-brand-charcoal/80 leading-relaxed space-y-4 font-light">
                <p>
                  Founded with a vision to redefine how elite brands occupy digital space, 
                  <strong> Express Webcraft</strong> was established to bridge the gap between high-end visual art 
                  and robust software engineering. While the modern web has become saturated with cookie-cutter 
                  templates and bloated builders, we took a stand for mathematical precision, quiet luxury styling, 
                  and strict technical integrity.
                </p>
                <p>
                  Every website we create is drafted on a blank canvas, calibrated pixel-by-pixel, and built using 
                  cutting-edge, performance-first architectures. By fusing high-contrast layout principles 
                  with Next.js rendering capabilities, we create platforms that load instantly, engage deeply, 
                  and stand out with absolute authority.
                </p>
              </div>
            </section>

            {/* Mission & Vision & Philosophy */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="bg-brand-paper border border-brand-charcoal/10 p-5 space-y-3 shadow-sm relative">
                <div className="w-8 h-8 rounded-full bg-brand-charcoal/5 flex items-center justify-center text-brand-clay">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="font-display text-sm font-bold uppercase text-brand-charcoal">Our Mission</h3>
                <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed font-light">
                  To construct bespoke digital assets for discerning businesses that demand lightning speed, beautiful visual layouts, and flawless multi-device experiences.
                </p>
              </div>

              <div className="bg-brand-paper border border-brand-charcoal/10 p-5 space-y-3 shadow-sm relative">
                <div className="w-8 h-8 rounded-full bg-brand-charcoal/5 flex items-center justify-center text-brand-clay">
                  <Eye className="w-4 h-4" />
                </div>
                <h3 className="font-display text-sm font-bold uppercase text-brand-charcoal">Our Vision</h3>
                <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed font-light">
                  To serve as the premier international agency for high-end bespoke web engineering, proving that luxury art and technical SEO dominance can exist in perfect harmony.
                </p>
              </div>

              <div className="bg-brand-paper border border-brand-charcoal/10 p-5 space-y-3 shadow-sm relative">
                <div className="w-8 h-8 rounded-full bg-brand-charcoal/5 flex items-center justify-center text-brand-clay">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="font-display text-sm font-bold uppercase text-brand-charcoal">Our Philosophy</h3>
                <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed font-light">
                  Every button, typography tracking, and negative space margin should have a clear logical purpose. Beauty is a result of structural truth and absolute calibration.
                </p>
              </div>
            </section>

            {/* Core Values */}
            <section className="space-y-6 pt-4">
              <h2 className="font-display text-2xl font-black uppercase tracking-tight text-brand-charcoal">
                Core Values
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((val, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white/40 border border-brand-charcoal/5 p-4 rounded-none hover:border-brand-gold/30 transition-all shadow-sm">
                    <div className="w-10 h-10 bg-brand-charcoal text-brand-cream flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(201,162,39,1)]">
                      {val.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display text-xs font-black uppercase text-brand-charcoal">
                        {val.title}
                      </h4>
                      <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed font-light">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT: FOUNDER & TECH STACK (4 columns) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Founder Profile */}
            <div className="bg-brand-charcoal text-brand-cream p-6 border-2 border-brand-charcoal shadow-[6px_6px_0px_0px_rgba(201,162,39,1)] relative overflow-hidden">
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/20" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/20" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/20" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/20" />

              <div className="space-y-5 text-center">
                <span className="font-mono text-[9px] uppercase tracking-widest text-brand-gold font-bold block">
                  ✦ FOUNDER PROFILE // LEADER
                </span>
                
                {/* Simulated portrait silhouette with gold bounds */}
                <div className="w-24 h-24 rounded-full border-2 border-brand-gold/60 bg-brand-cream/10 mx-auto relative overflow-hidden flex items-center justify-center text-brand-gold">
                  <span className="font-display text-3xl font-black">SO</span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-lg font-black uppercase tracking-tight text-brand-cream">
                    Sayed Ozair
                  </h3>
                  <p className="font-mono text-[9px] text-brand-cream/50 uppercase tracking-widest">
                    FOUNDER & PRINCIPAL ARCHITECT
                  </p>
                </div>

                <p className="font-sans text-xs text-brand-cream/80 leading-relaxed font-light">
                  Sayed Ozair is a veteran web applications architect and Technical SEO engineer. He specializes in full-stack JavaScript environments, automated crawl indexibility, and editorial brand systems.
                </p>

                <div className="border-t border-white/10 pt-4 flex justify-center gap-4 text-xs font-mono text-brand-gold">
                  <a href="https://linkedin.com/in/sayedozair" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cream transition-colors">LINKEDIN ↗</a>
                  <span className="text-white/15">|</span>
                  <a href="https://github.com/sayedozair" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cream transition-colors">GITHUB ↗</a>
                </div>
              </div>
            </div>

            {/* Premium Tech Stack */}
            <div className="bg-white border border-brand-charcoal/15 p-6 rounded-none shadow-sm space-y-4">
              <h3 className="font-display text-xs font-black uppercase tracking-widest text-brand-charcoal border-b border-brand-charcoal/10 pb-2">
                TECHNOLOGY BLUEPRINT
              </h3>
              <div className="space-y-4">
                {techStack.map((tech, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <span className="font-mono text-[9px] text-brand-clay font-bold block uppercase">{tech.category}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {tech.items.map((item, i) => (
                        <span key={i} className="px-2 py-1 bg-brand-paper border border-brand-charcoal/5 font-mono text-[9px] text-brand-charcoal font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
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
