"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, Menu, Compass, ArrowUpRight, MessageCircle, Send
} from "lucide-react";
import { Analytics } from "@/lib/analytics";

export default function WhyUsPage() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Why Us");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Why Us", href: "/why-us" },
    { label: "Contact Us", href: "/contact" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-transparent grainy-bg relative overflow-x-hidden text-brand-charcoal select-none">
      
      {/* TOP NAVIGATION BAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-red border-b border-brand-gold/15 h-[80px] px-4 md:px-12 flex items-center justify-between shadow-lg">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-cream relative rounded-none shadow-[2px_2px_0px_0px_rgba(201,162,39,1)] transition-all group-hover:rotate-12 overflow-hidden flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dtrvyelcg/image/upload/v1784138035/ChatGPT_Image_Jul_15_2026_11_13_18_PM_kajaoz.jpg"
              alt="Express Webcraft Logo"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-black tracking-widest uppercase text-brand-cream">
              EXPRESS WEBCRAFT
            </span>
            <span className="text-[8px] font-mono tracking-widest uppercase text-brand-gold font-bold leading-none">
              WEB SOLUTIONS THAT INSPIRE
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-[10px] xl:text-[11px] font-bold uppercase tracking-wider text-brand-cream/80">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setActiveNav(item.label)}
              className={`hover:text-brand-gold transition-all relative py-1 whitespace-nowrap ${
                activeNav === item.label ? "text-brand-gold font-black after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-[2px] after:bg-brand-gold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center border border-brand-cream/10 rounded-full"
          aria-label="Toggle Menu"
          suppressHydrationWarning={true}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-brand-cream" /> : <Menu className="w-5 h-5 text-brand-cream" />}
        </button>

        {/* Right CTA */}
        <Link
          href="/contact"
          onClick={() => {
            Analytics.trackCtaClick("Header Let's Talk", "header");
            setActiveNav("Contact Us");
          }}
          className="hidden lg:inline-flex px-6 py-2.5 bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal text-[10px] font-bold uppercase tracking-widest transition-all hover:-translate-y-0.5"
        >
          Let&apos;s Talk ↗
        </Link>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-20 left-4 right-4 bg-brand-paper border-2 border-brand-charcoal p-6 z-45 shadow-xl max-h-[80vh] overflow-y-auto"
            suppressHydrationWarning={true}
          >
            <nav className="flex flex-col gap-4 text-center text-xs font-bold uppercase tracking-wider text-brand-charcoal/80">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveNav(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className="hover:text-brand-clay py-2 border-b border-brand-charcoal/5 last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-brand-charcoal text-brand-cream text-center text-xs font-bold uppercase tracking-widest mt-2"
              >
                Let&apos;s Talk ↗
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-[100px]">
        {/* =======================================
            WHY US SECTION ("The difference is everything")
            ======================================= */}
        <section 
          id="process" 
          className="w-full py-16 relative z-10" 
          style={{ 
            backgroundImage: "url('https://res.cloudinary.com/dtrvyelcg/image/upload/v1784054975/Download_premium_image_of_Landscapes_mountain_outdoors_desert_by_Sasi_about_abstract_mobile_wallpapers_earth_tone_wedding_background_iphone_wallpaper_plain_earth_tone_wallpaper_iphone_and_bridal_wallpaper_ze2vua.jpg')", 
            backgroundSize: "cover", 
            backgroundPosition: "center" 
          }}
          suppressHydrationWarning={true}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
              {/* Left Column: Title & 4 Pillars */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-2">
                  <span className="font-sans text-[11px] font-black tracking-widest text-brand-clay uppercase block">
                    WHY US
                  </span>
                  <h1 className="font-display text-3xl md:text-5xl font-black text-brand-charcoal uppercase leading-tight">
                    The difference is <br />
                    <span className="text-brand-red">everything.</span>
                  </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {[
                    {
                      id: "01",
                      title: "Days, Not Months",
                      desc: "Concept to launch at a pace that redefines fast. Because waiting isn't a strategy."
                    },
                    {
                      id: "02",
                      title: "Obsessively Crafted",
                      desc: "Every detail considered. Every element refined. Design so precise, it feels inevitable."
                    },
                    {
                      id: "03",
                      title: "Built to Convert",
                      desc: "Layouts informed by data. Decisions backed by performance. Results you can measure."
                    },
                    {
                      id: "04",
                      title: "Secure by Default",
                      desc: "Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included."
                    }
                  ].map((step) => (
                    <div
                      key={step.id}
                      className="bg-brand-paper border border-brand-charcoal/15 p-5 flex flex-col justify-between hover:shadow-md transition-all group relative"
                    >
                      <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-brand-gold rounded-full opacity-60" />

                      <div className="space-y-3">
                        <span className="font-mono text-[10px] font-black text-brand-clay block">
                          ✦ PILLAR // {step.id}
                        </span>
                        <h4 className="font-display text-base font-black uppercase text-brand-charcoal group-hover:text-brand-red transition-colors">
                          {step.title}
                        </h4>
                        <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed font-light">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Desk Stats & Polaroid Collage */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                
                {/* Stats board */}
                <div className="bg-brand-charcoal text-brand-cream p-6 space-y-6 shadow-xl border-2 border-brand-charcoal">
                  {[
                    { count: "5+ Years", label: "Experience" },
                    { count: "10+", label: "Projects Delivered" },
                    { count: "100%", label: "Customer Satisfaction" },
                    { count: "7 Days", label: "Average Delivery" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-baseline gap-3 border-b border-brand-cream/10 pb-4 last:border-b-0 last:pb-0">
                      <span className="font-display text-3xl font-black text-brand-gold">
                        {stat.count}
                      </span>
                      <span className="font-sans text-xs uppercase tracking-widest text-brand-cream/70 font-light">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Polaroid Prints Collage */}
                <div className="relative flex flex-col items-center justify-center min-h-[280px]">
                  
                  {/* Polaroid 1 */}
                  <div className="absolute w-[150px] bg-white border border-brand-charcoal/10 p-2.5 pb-8 rotate-[-12deg] shadow-lg -translate-x-12 hover:rotate-[-6deg] transition-transform duration-500 z-15">
                    <div className="aspect-square relative bg-brand-cream">
                      <Image
                        src="https://picsum.photos/seed/polaroid1/300/300"
                        alt="Vintage Polaroid Scene"
                        fill
                        className="object-cover filter contrast-125 sepia-[0.15]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="font-display italic text-[8px] text-brand-charcoal/60 mt-2 block text-center">
                      Parisian Facade, 2026
                    </span>
                  </div>

                  {/* Polaroid 2 */}
                  <div className="absolute w-[150px] bg-white border border-brand-charcoal/10 p-2.5 pb-8 rotate-[8deg] shadow-lg translate-x-10 translate-y-6 hover:rotate-[4deg] transition-transform duration-500 z-20">
                    <div className="aspect-square relative bg-brand-cream">
                      <Image
                        src="https://picsum.photos/seed/polaroid2/300/300"
                        alt="Vintage Camera Polaroid"
                        fill
                        className="object-cover filter contrast-125 sepia-[0.15]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="font-display italic text-[8px] text-brand-charcoal/60 mt-2 block text-center">
                      Calibration Focus
                    </span>
                  </div>

                  {/* Classic wooden pencil */}
                  <div className="absolute bottom-[-10px] w-28 h-1 bg-[#4a3424] rotate-[35deg] translate-x-4 shadow-md z-30 opacity-70 pointer-events-none rounded-sm" />

                </div>

              </div>

              {/* FAQ Accordion Section */}
              <div className="col-span-1 lg:col-span-12 mt-16 pt-16 border-t border-brand-charcoal/10">
                <div className="max-w-3xl mx-auto space-y-8">
                  <div className="text-center space-y-2">
                    <span className="font-sans text-[10px] font-black tracking-widest text-brand-clay uppercase block">
                      ATELIER INQUIRY GUIDE
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-black text-brand-charcoal uppercase">
                      Frequently Asked Questions
                    </h3>
                    <div className="w-12 h-0.5 bg-brand-gold mx-auto mt-3" />
                  </div>

                  {/* FAQ Accordion list */}
                  <div className="space-y-4">
                    {[
                      {
                        q: "What services does Express Webcraft offer?",
                        a: "Express Webcraft specializes in bespoke high-performance web development, premium UX/UI design, speed optimization, and custom full-stack web applications tailored to high-conversion brand experiences."
                      },
                      {
                        q: "How fast can you deliver a premium website?",
                        a: "While traditional design agencies take months, our high-velocity development engine is engineered to deliver pixel-perfect, conversion-optimized platforms in days, not months—frequently within 7 to 14 days without compromising on quality."
                      },
                      {
                        q: "Will my website be search engine optimized (SEO) and mobile-responsive?",
                        a: "Absolutely. Every platform we build is engineered with mobile-first responsiveness, clean semantic HTML structure, proper schema markup, optimized media assets, and swift load speeds to ensure maximum search engine visibility and flawless multi-device compatibility."
                      },
                      {
                        q: "How do you ensure the security of our custom website?",
                        a: "Enterprise-grade protection is baked in from day one. We implement secure SSL encryption, configure clean secure HTTP headers, integrate automated backup cycles, and provision robust DDoS protection protocols to shield your brand assets."
                      }
                    ].map((faq, index) => {
                      const isOpen = openFaq === index;
                      return (
                        <div
                          key={index}
                          className="bg-brand-paper border border-brand-charcoal/15 transition-all duration-300"
                        >
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : index)}
                            className="w-full text-left p-5 flex justify-between items-center gap-4 group cursor-pointer"
                          >
                            <span className="font-display text-sm font-black uppercase text-brand-charcoal group-hover:text-brand-red transition-colors duration-300">
                              {faq.q}
                            </span>
                            <span className={`text-brand-gold transition-transform duration-300 transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
                              <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9" />
                              </svg>
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
                                <div className="p-5 pt-0 border-t border-brand-charcoal/5 font-sans text-xs text-brand-charcoal/70 leading-relaxed font-light">
                                  {faq.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                  {/* FAQ Schema JSON-LD */}
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                          {
                            "@type": "Question",
                            "name": "What services does Express Webcraft offer?",
                            "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Express Webcraft specializes in bespoke high-performance web development, premium UX/UI design, speed optimization, and custom full-stack web applications tailored to high-conversion brand experiences."
                            }
                          },
                          {
                            "@type": "Question",
                            "name": "How fast can you deliver a premium website?",
                            "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "While traditional design agencies take months, our high-velocity development engine is engineered to deliver pixel-perfect, conversion-optimized platforms in days, not months—frequently within 7 to 14 days without compromising on quality."
                            }
                          },
                          {
                            "@type": "Question",
                            "name": "Will my website be search engine optimized (SEO) and mobile-responsive?",
                            "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Absolutely. Every platform we build is engineered with mobile-first responsiveness, clean semantic HTML structure, proper schema markup, optimized media assets, and swift load speeds to ensure maximum search engine visibility and flawless multi-device compatibility."
                            }
                          },
                          {
                            "@type": "Question",
                            "name": "How do you ensure the security of our custom website?",
                            "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Enterprise-grade protection is baked in from day one. We implement secure SSL encryption, configure clean secure HTTP headers, integrate automated backup cycles, and provision robust DDoS protection protocols to shield your brand assets."
                            }
                          }
                        ]
                      })
                    }}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-brand-charcoal text-brand-cream py-16 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-20">
          
          <div className="relative w-full h-[150px] opacity-25 mt-8 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1495707902641-75cac588d2e9?auto=format&fit=crop&w=600&h=200&q=80"
              alt="Vintage Analog Equipment"
              fill
              className="object-contain filter grayscale brightness-75"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[10px] font-mono text-brand-cream/50 gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="font-display font-bold text-brand-cream text-xs">EW</span>
                <span>© 2026 EXPRESS WEBCRAFT. ALL RIGHTS RESERVED.</span>
              </div>
              <div className="hidden sm:inline-block w-[1px] h-3 bg-white/15" />
              <div className="flex items-center gap-4 justify-center">
                <Link 
                  href="/privacy-policy"
                  className="hover:text-brand-gold transition-colors uppercase cursor-pointer"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms-and-conditions"
                  className="hover:text-brand-gold transition-colors uppercase cursor-pointer"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-brand-cream/40">
              <span className="text-[9px] text-brand-gold/60 uppercase">Useful Links:</span>
              <Link href="/" className="hover:text-brand-cream transition-colors uppercase">Home</Link>
              <Link href="/services" className="hover:text-brand-cream transition-colors uppercase">Our Services</Link>
              <Link href="/portfolio" className="hover:text-brand-cream transition-colors uppercase">Portfolio</Link>
              <Link href="/why-us" className="hover:text-brand-cream transition-colors uppercase">Why Us</Link>
              <Link href="/contact" className="hover:text-brand-cream transition-colors uppercase">Contact Us</Link>
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING CONVERSION OPTIMIZATION ELEMENTS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="pointer-events-auto"
        >
          <button
            onClick={() => {
              Analytics.trackWhatsAppClick();
              window.open("https://wa.me/917470857424?text=Hi%20Express%20WebCraft!%20I'm%20interested%20in%20a%20premium%20website%20for%20my%20business.%20I'd%20like%20to%20discuss%20my%20requirements%20and%20receive%20a%20custom%20quote", "_blank");
            }}
            className="flex items-center gap-2 px-4 py-2.5 bg-brand-cream border-2 border-brand-charcoal text-brand-charcoal text-[10px] font-mono uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(11,27,58,1)] hover:shadow-[2px_2px_0px_0px_rgba(11,27,58,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all group"
            aria-label="Contact via WhatsApp"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
            </span>
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]/5" />
            <span>Chat via WhatsApp</span>
            <ArrowUpRight className="w-3 h-3 text-brand-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="pointer-events-auto"
        >
          <Link
            href="/contact"
            onClick={() => Analytics.trackCtaClick("Floating Sticky Let's Talk", "sticky_bubble")}
            className="flex items-center justify-center w-10 h-10 bg-brand-charcoal border-2 border-brand-charcoal text-brand-cream shadow-[4px_4px_0px_0px_rgba(201,162,39,1)] hover:shadow-[2px_2px_0px_0px_rgba(201,162,39,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all group"
            aria-label="Scroll to Commission Form"
          >
            <Send className="w-4 h-4 text-brand-gold group-hover:rotate-12 transition-transform" />
          </Link>
        </motion.div>
      </div>

    </div>
  );
}
