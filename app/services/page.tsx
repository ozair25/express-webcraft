"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { 
  X, Menu, Compass, ArrowRight, ArrowUpRight, MessageCircle, Send,
  Monitor, Code, Sparkles, ShoppingCart, TrendingUp, Layers, Wrench, BarChart3
} from "lucide-react";
import { Analytics } from "@/lib/analytics";

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Our Services");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Why Us", href: "/why-us" },
    { label: "Contact Us", href: "/contact" }
  ];

  const whatWeProvideDetails = [
    {
      title: "Custom Website Design",
      slug: "custom-website-design",
      desc: "Crafted websites tailored to your business and brand identity.",
      icon: <Monitor className="w-5 h-5 text-brand-gold group-hover:rotate-[4deg] transition-transform duration-300" />,
      hint: "browser window blueprint",
      bgSvg: (
        <svg className="absolute right-4 bottom-4 w-16 h-16 opacity-[0.03] stroke-white fill-none pointer-events-none" viewBox="0 0 100 100" strokeWidth="1">
          <rect x="10" y="25" width="80" height="50" rx="3" />
          <line x1="10" y1="36" x2="90" y2="36" />
          <circle cx="18" cy="30.5" r="1.5" />
          <circle cx="24" cy="30.5" r="1.5" />
          <circle cx="30" cy="30.5" r="1.5" />
          <line x1="20" y1="48" x2="80" y2="48" strokeDasharray="2 2" />
          <line x1="20" y1="58" x2="65" y2="58" strokeDasharray="2 2" />
          <line x1="20" y1="68" x2="45" y2="68" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      title: "Web Development",
      slug: "web-development",
      desc: "Fast, scalable and modern websites built with the latest technologies.",
      icon: <Code className="w-5 h-5 text-brand-gold group-hover:rotate-[-4deg] transition-transform duration-300" />,
      hint: "code brackets",
      bgSvg: (
        <svg className="absolute right-4 bottom-4 w-16 h-16 opacity-[0.03] stroke-white fill-none pointer-events-none" viewBox="0 0 100 100" strokeWidth="1">
          <path d="M 32 30 L 12 50 L 32 70 M 68 30 L 88 50 L 68 70 M 56 20 L 44 80" />
        </svg>
      )
    },
    {
      title: "Landing Pages",
      slug: "landing-pages",
      desc: "High-converting landing pages designed to generate more enquiries and sales.",
      icon: <Sparkles className="w-5 h-5 text-brand-gold group-hover:rotate-[4deg] transition-transform duration-300" />,
      hint: "conversion graph",
      bgSvg: (
        <svg className="absolute right-4 bottom-4 w-16 h-16 opacity-[0.03] stroke-white fill-none pointer-events-none" viewBox="0 0 100 100" strokeWidth="1">
          <path d="M 15 80 L 45 50 L 60 60 L 85 20" />
          <circle cx="85" cy="20" r="2.5" />
          <line x1="15" y1="80" x2="85" y2="80" />
          <line x1="15" y1="15" x2="15" y2="80" />
          <path d="M 45 50 L 45 80 M 60 60 L 60 80 M 85 20 L 85 80" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      title: "E-commerce Solutions",
      slug: "e-commerce-solutions",
      desc: "Beautiful online stores optimized for performance and conversions.",
      icon: <ShoppingCart className="w-5 h-5 text-brand-gold group-hover:rotate-[-3deg] transition-transform duration-300" />,
      hint: "shopping cart",
      bgSvg: (
        <svg className="absolute right-4 bottom-4 w-16 h-16 opacity-[0.03] stroke-white fill-none pointer-events-none" viewBox="0 0 100 100" strokeWidth="1">
          <circle cx="35" cy="78" r="5" />
          <circle cx="72" cy="78" r="5" />
          <path d="M 15 22 L 26 22 L 38 58 L 78 58 L 86 32 L 30 32" />
        </svg>
      )
    },
    {
      title: "SEO & Performance Optimization",
      slug: "seo-performance",
      desc: "Technical SEO, Core Web Vitals optimization and search engine visibility from day one.",
      icon: <TrendingUp className="w-5 h-5 text-brand-gold group-hover:rotate-[5deg] transition-transform duration-300" />,
      hint: "upward trend graph",
      bgSvg: (
        <svg className="absolute right-4 bottom-4 w-16 h-16 opacity-[0.03] stroke-white fill-none pointer-events-none" viewBox="0 0 100 100" strokeWidth="1">
          <path d="M 10 85 L 90 85 M 10 15 L 10 85" />
          <path d="M 15 75 L 35 55 L 55 40 L 85 10" strokeWidth="1.2" />
          <polygon points="85,10 75,10 85,20" />
          <rect x="25" y="65" width="8" height="20" strokeWidth="0.5" />
          <rect x="45" y="50" width="8" height="35" strokeWidth="0.5" />
          <rect x="65" y="25" width="8" height="60" strokeWidth="0.5" />
        </svg>
      )
    },
    {
      title: "UI/UX Design",
      slug: "ui-ux-design",
      desc: "Thoughtful user experiences that improve usability and engagement.",
      icon: <Layers className="w-5 h-5 text-brand-gold group-hover:rotate-[-4deg] transition-transform duration-300" />,
      hint: "wireframe",
      bgSvg: (
        <svg className="absolute right-4 bottom-4 w-16 h-16 opacity-[0.03] stroke-white fill-none pointer-events-none" viewBox="0 0 100 100" strokeWidth="1">
          <rect x="15" y="15" width="70" height="70" rx="2" />
          <line x1="15" y1="15" x2="85" y2="85" />
          <line x1="85" y1="15" x2="15" y2="85" />
          <circle cx="50" cy="50" r="10" />
        </svg>
      )
    },
    {
      title: "Website Maintenance & Support",
      slug: "website-maintenance-support",
      desc: "Reliable updates, monitoring and ongoing improvements after launch.",
      icon: <Wrench className="w-5 h-5 text-brand-gold group-hover:rotate-[4deg] transition-transform duration-300" />,
      hint: "tools",
      bgSvg: (
        <svg className="absolute right-4 bottom-4 w-16 h-16 opacity-[0.03] stroke-white fill-none pointer-events-none" viewBox="0 0 100 100" strokeWidth="1">
          <path d="M 20 80 L 48 52 M 45 45 L 35 25 A 8 8 0 0 1 51 15 L 62 26 M 75 22 L 58 39 M 52 52 L 72 72" />
          <circle cx="50" cy="50" r="3.5" />
        </svg>
      )
    },
    {
      title: "Analytics & Growth",
      slug: "analytics-growth",
      desc: "Google Analytics, Search Console, tracking and insights to help your business grow.",
      icon: <BarChart3 className="w-5 h-5 text-brand-gold group-hover:rotate-[-4deg] transition-transform duration-300" />,
      hint: "dashboard",
      bgSvg: (
        <svg className="absolute right-4 bottom-4 w-16 h-16 opacity-[0.03] stroke-white fill-none pointer-events-none" viewBox="0 0 100 100" strokeWidth="1">
          <path d="M 20 65 A 30 30 0 0 1 80 65" strokeWidth="1.2" />
          <line x1="50" y1="65" x2="68" y2="42" strokeWidth="1.8" />
          <circle cx="50" cy="65" r="2.5" />
          <rect x="22" y="72" width="10" height="12" />
          <rect x="44" y="72" width="10" height="17" />
          <rect x="66" y="72" width="10" height="22" />
        </svg>
      )
    }
  ];

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
            OUR AIM SECTION
            ======================================= */}
        <section id="atelier" className="max-w-7xl mx-auto px-4 md:px-12 py-12 relative z-20" suppressHydrationWarning={true}>
          <div className="bg-white border-2 border-brand-charcoal p-4 md:p-8 shadow-[8px_8px_0px_0px_rgba(11,27,58,1)] relative overflow-hidden isolate">
            
            {/* Background Video Player - Full Opacity */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] object-cover z-0 pointer-events-none opacity-100"
            >
              <source src="/aim-bg.mp4" type="video/mp4" />
              {/* High-quality cinematic fallback */}
              <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technological-glowing-lines-loop-41855-large.mp4" type="video/mp4" />
            </video>

            {/* Clean ambient subtle overlay */}
            <div className="absolute inset-0 bg-white/5 z-10 pointer-events-none" />

            {/* Subtle elegant gold watermark compass background */}
            <div className="absolute right-[-40px] bottom-[-40px] opacity-[0.03] pointer-events-none z-10">
              <Compass className="w-80 h-80 text-brand-gold rotate-45" />
            </div>

            {/* Main content container */}
            <div className="relative z-20 max-w-2xl py-16 md:py-24 text-left space-y-6 pl-4 md:pl-12">
              
              <div className="flex flex-col items-start space-y-2">
                <span className="font-sans text-[11px] font-black tracking-[0.3em] text-brand-clay uppercase block drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
                  OUR SERVICES
                </span>
                <div className="h-[2px] bg-brand-gold w-12" />
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-brand-charcoal leading-tight uppercase drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
                You dream it. <br />
                <span className="text-brand-red">We ship it.</span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-brand-charcoal/90 leading-relaxed font-semibold max-w-xl drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
                Share your vision. We handle the rest— <br className="hidden sm:inline" />
                <span className="text-brand-gold font-bold underline decoration-brand-gold/30 underline-offset-4">design</span>,{" "}
                <span className="text-brand-gold font-bold underline decoration-brand-gold/30 underline-offset-4">code</span>,{" "}
                <span className="text-brand-gold font-bold underline decoration-brand-gold/30 underline-offset-4">launch</span>.
              </p>

              <div className="pt-2">
                <span className="font-display italic text-xl sm:text-2xl text-brand-red font-semibold block drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
                  All in days, not quarters.
                </span>
              </div>

              {/* Premium decorative ornament line */}
              <div className="flex items-center justify-start gap-4 pt-4">
                <div className="h-[1px] w-16 bg-brand-charcoal/15" />
                <div className="w-2 h-2 border border-brand-gold rotate-45 flex items-center justify-center">
                  <div className="w-0.5 h-0.5 bg-brand-gold" />
                </div>
                <div className="h-[1px] w-16 bg-brand-charcoal/15" />
              </div>

            </div>
          </div>
        </section>

        <div className="w-full h-px bg-[#E6DFD3] relative z-30" />

        {/* =======================================
            SERVICES SECTION ("WHAT WE PROVIDE")
            ======================================= */}
        <section 
          id="services" 
          className="w-full py-24 relative overflow-hidden z-20" 
          style={{ 
            backgroundImage: "url('https://res.cloudinary.com/dtrvyelcg/image/upload/v1784055343/Download_free_image_of_White_and_yellow_plaster_rough_paint__by_Jigsaw_about_wallpaper_iphone_wallpaper_mobile_wallpaper_aesthetic_and_phone_wallpaper_13126260_ndskmy.jpg')", 
            backgroundSize: "cover", 
            backgroundPosition: "center" 
          }}
          suppressHydrationWarning={true}
        >
          {/* Subtle background drafting grid dots */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-brand-charcoal) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          
          {/* Subtle decorative compass in background */}
          <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
            <Compass className="w-[500px] h-[500px] text-brand-charcoal rotate-12" />
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-20">
            
            {/* Header Area */}
            <div className="max-w-3xl mb-20 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-sans text-[11px] font-black tracking-[0.3em] text-brand-clay uppercase block">
                  ATELIER SERVICES
                </span>
                <div className="h-[1px] w-12 bg-brand-clay/30" />
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-brand-charcoal leading-none uppercase">
                WHAT WE <span className="text-brand-red">PROVIDE</span>
              </h2>
              
              <p className="font-sans text-sm md:text-base text-brand-charcoal/80 leading-relaxed font-light max-w-2xl">
                Everything your business needs to build, launch and grow a powerful online presence.
              </p>

              {/* Accent gold ornament divider */}
              <div className="flex items-center gap-3 pt-2">
                <div className="h-[1px] w-20 bg-brand-charcoal/10" />
                <div className="w-1.5 h-1.5 border border-brand-gold rotate-45 bg-brand-gold/10" />
                <div className="h-[1px] w-8 bg-brand-charcoal/10" />
              </div>
            </div>

            {/* Services Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {whatWeProvideDetails.map((service, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="group relative bg-[#0B1B3A] border border-white/10 p-8 flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(18,20,26,1)] hover:border-brand-gold/40 transition-all duration-300"
                >
                  {service.bgSvg}

                  <div className="absolute top-0 left-0 h-[2px] bg-brand-gold w-0 group-hover:w-full transition-all duration-500 ease-out" />

                  <div className="space-y-6 relative z-10">
                    {/* Icon Slot */}
                    <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center shadow-sm group-hover:border-brand-gold group-hover:bg-white/10 transition-all duration-300">
                      <div className="transition-transform duration-300 group-hover:scale-105">
                        {service.icon}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-lg font-black uppercase tracking-wider text-white group-hover:text-brand-gold transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="font-sans text-xs md:text-[13px] text-white/70 group-hover:text-brand-gold/80 leading-relaxed font-light pr-8 transition-colors duration-300">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* Learn More interaction */}
                  <div className="pt-8 relative z-10 mt-auto">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/90 font-bold group/btn cursor-pointer"
                    >
                      <span className="relative py-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold group-hover:after:w-full after:transition-all after:duration-300 group-hover:text-brand-gold transition-colors duration-300">
                        Learn More
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

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
