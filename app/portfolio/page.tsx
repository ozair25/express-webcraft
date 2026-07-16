"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { 
  X, Menu, Compass, ArrowUpRight, MessageCircle, Send, Quote
} from "lucide-react";
import { Analytics } from "@/lib/analytics";

// Presets for the original projects shown in portfolio
const PROJECTS_DATA = [
  {
    id: "gopalji",
    title: "Gopalji Khopra",
    category: "B2B Coconut Manufacturer",
    img: "/gopaljinew.jpg"
  },
  {
    id: "friends",
    title: "Friends Tours & Travels",
    category: "Luxury Travel & Tours Operator",
    img: "/friends.png"
  },
  {
    id: "shrikalyan",
    title: "Shree Kalyan",
    category: "Financial Heritage & Investment Redesign",
    img: "https://res.cloudinary.com/dtrvyelcg/image/upload/v1784136246/screencapture-shree-kalyan-new-vercel-app-2026-07-15-20_45_51_p8h7cg.jpg"
  },
  {
    id: "agroshore",
    title: "Agroshore Organics",
    category: "Organic Agri-Business Portal",
    img: "/agroshoreorganics.com_ (1).png"
  }
];

const TESTIMONIALS = [
  {
    quote: "Express Webcraft designed a masterpiece for our boutique agency. The attention to typography, custom animations, and layout is unlike anything we've seen. Absolute elite standard.",
    author: "Marcus Vance",
    role: "Creative Director",
    company: "Atelier Vance",
    project: "Bespoke Portfolio Platform",
    metric: "100% Custom Layout"
  },
  {
    quote: "Sub-second load times coupled with high-end, responsive aesthetics. Our inbound conversion rates spiked by 42% within the first month of deployment. Simply outstanding.",
    author: "Elena Rostova",
    role: "Founder",
    company: "Rostova Galleries",
    project: "Art Acquisition Portal",
    metric: "+42% Conversions"
  },
  {
    quote: "They don't use generic templates. They treated our brand like high art. Complete turn-key delivery in exactly 7 days. Highly recommended.",
    author: "Jonathan Pierce",
    role: "Head of Product",
    company: "Veridical Labs",
    project: "SaaS Marketing Suite",
    metric: "7-Day Full Delivery"
  },
  {
    quote: "The attention to responsive layouts and micro-interactions is flawless. They provided robust custom SMTP integrations and a gorgeous booking experience that works seamlessly.",
    author: "Siddharth Mehta",
    role: "Director",
    company: "Aura Wellness",
    project: "Premium Spa Registry",
    metric: "Zero-Latency Booking"
  }
];

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Portfolio");
  const shouldReduceMotion = useReducedMotion();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const [gopaljiImgSrc, setGopaljiImgSrc] = useState("/gopaljinew.jpg");
  const [friendsImgSrc, setFriendsImgSrc] = useState("/friends.png");
  const [shrikalyanImgSrc, setShrikalyanImgSrc] = useState("https://res.cloudinary.com/dtrvyelcg/image/upload/v1784136246/screencapture-shree-kalyan-new-vercel-app-2026-07-15-20_45_51_p8h7cg.jpg");
  const [agroshoreImgSrc, setAgroshoreImgSrc] = useState("/agroshoreorganics.com_ (1).png");
  const [gopaljiMobImgSrc, setGopaljiMobImgSrc] = useState("/mob gopalji.jpeg");
  const [friendsMobImgSrc, setFriendsMobImgSrc] = useState("/mob friends.jpeg");
  const [shrikalyanMobImgSrc, setShrikalyanMobImgSrc] = useState("https://res.cloudinary.com/dtrvyelcg/image/upload/v1784136080/shrikalyan_full_u9mll7.jpg");
  const [agroshoreMobImgSrc, setAgroshoreMobImgSrc] = useState("/mob agrosure .jpeg");

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Why Us", href: "/why-us" },
    { label: "Contact Us", href: "/contact" }
  ];

  const PROJECT_METADATA: Record<string, {
    url: string;
    height: string;
    mobHeight: string;
    description: string;
    highlights: string[];
  }> = {
    gopalji: {
      url: "gopaljikhopraudhyog.com",
      height: "2100px",
      mobHeight: "3800px",
      description: "A premium, high-conversion digital platform custom designed for Gopalji Khopra Udyog, India's premier B2B manufacturer of high-grade coconut products. Features structured wholesale inquiry channels, deep brand heritage storytelling, elegant editorial typography, and high-performance layout calibrations.",
      highlights: ["B2B Bulk Inquiry Tunnel", "High-Contrast Editorial Typography", "Strict SEO & Multi-device Compatibility"]
    },
    friends: {
      url: "friendstoursandtravel.com",
      height: "2500px",
      mobHeight: "4500px",
      description: "A luxurious, highly responsive travel agency and tour portal built for Friends Tours & Travels. Designed with immersive destination showcases, curated premium itineraries, fluid sticky navigation, and optimized SEO and speed to drive bookings for high-end international travel experiences.",
      highlights: ["Curated Premium Tour Packages", "Transparent Sticky Navigation", "Fluid Destination Galleries"]
    },
    shrikalyan: {
      url: "shree-kalyan-new.vercel.app",
      height: "3600px",
      mobHeight: "6500px",
      description: "A comprehensive digital transformation and frontend redesign for Shree Kalyan, featuring high-fidelity asset tables, interactive trust indices, responsive calculators, and a custom vintage-meets-modern interface tailored for premium investor presentation.",
      highlights: ["Interactive Financial Instruments Showcase", "Highly Fluid Mobile-Responsive Tables", "Premium Trust-Grade Aesthetic Layouts"]
    },
    agroshore: {
      url: "agroshoreorganics.com",
      height: "2200px",
      mobHeight: "4200px",
      description: "A sophisticated, high-performance global export B2B portal designed for Agroshore Organics. Highlights certified organic farming practices, premium cold-pressed oil and spice portfolios, robust wholesale inquiry tunnels, and elegant clean layouts optimized for international trade buyers.",
      highlights: ["Certified Organic Verification", "Global B2B Export Channels", "Elegant Heritage-inspired Showcase"]
    }
  };

  const getProjectMetadata = (proj: any) => {
    const meta = PROJECT_METADATA[proj.id];
    if (meta) {
      return {
        url: meta.url,
        height: meta.height,
        mobHeight: meta.mobHeight,
        imgSrc: proj.id === "gopalji" ? gopaljiImgSrc : proj.id === "friends" ? friendsImgSrc : proj.id === "shrikalyan" ? shrikalyanImgSrc : proj.id === "agroshore" ? agroshoreImgSrc : proj.img,
        mobImgSrc: proj.id === "gopalji" ? gopaljiMobImgSrc : proj.id === "friends" ? friendsMobImgSrc : proj.id === "shrikalyan" ? shrikalyanMobImgSrc : proj.id === "agroshore" ? agroshoreMobImgSrc : proj.img,
        description: meta.description,
        highlights: meta.highlights
      };
    }
    return {
      url: `${proj.id || "project"}.crafted.io`,
      height: "100%",
      mobHeight: "100%",
      imgSrc: proj.img || "https://picsum.photos/seed/crafted/800/600",
      mobImgSrc: proj.img || "https://picsum.photos/seed/crafted/800/600",
      description: `A custom-engineered high-performance digital presence built for ${proj.title}. Features highly optimized user journeys, fluid animations, crisp typography pairings, and a fully search-engine responsive framework tailored to the brand's aesthetic goals.`,
      highlights: [
        "100% Mobile fluid responsive alignment",
        "Strict search-engine visibility architecture",
        "Sub-second LCP performance target"
      ]
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    // Testimonial rotation interval
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
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
            PORTFOLIO SECTION ("OUR WORK")
            ======================================= */}
        <section 
          id="portfolio" 
          className="w-full py-12 relative z-10" 
          style={{ 
            backgroundImage: "url('https://res.cloudinary.com/dtrvyelcg/image/upload/v1784128276/%D0%9E%D0%B1%D0%BE%D0%B8_dxm3wn.jpg')", 
            backgroundSize: "cover", 
            backgroundPosition: "center" 
          }} 
          suppressHydrationWarning={true}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-20">
            
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-charcoal/15 pb-6 mb-12">
              <div className="space-y-1">
                <span className="font-sans text-[11px] font-black tracking-widest text-brand-clay uppercase block">
                  OUR WORK
                </span>
                <h1 className="font-display text-2xl md:text-4xl font-black text-brand-charcoal uppercase leading-none">
                  Built to Inspire. Designed to Perform.
                </h1>
              </div>
              <span className="font-mono text-[9px] uppercase text-brand-clay font-bold tracking-widest mt-4 md:mt-0">
                SYSTEM // SELECTION ACTIVE
              </span>
            </div>

            {/* Continuous Sequential Showcase of all projects */}
            <div className="space-y-24">
              {PROJECTS_DATA.map((proj, idx) => {
                const meta = getProjectMetadata(proj);
                return (
                  <div key={proj.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch border-b border-brand-charcoal/10 pb-16 last:border-b-0 last:pb-0">
                    
                    {/* LEFT SIDE: Browser mockup frame */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[4/3] bg-brand-cream border-2 border-brand-charcoal overflow-hidden shadow-[6px_6px_0px_0px_rgba(11,27,58,1)] flex flex-col group">
                        
                        {/* Browser Header Bar */}
                        <div className="flex items-center justify-between px-3 py-2 border-b-2 border-brand-charcoal bg-brand-cream/90 select-none z-20">
                          <div className="flex space-x-1.5 items-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-brand-clay" />
                            <div className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                            <div className="w-2.5 h-2.5 rounded-full bg-brand-olive" />
                          </div>
                          <div className="flex-1 max-w-xs md:max-w-md mx-4 bg-brand-charcoal/5 rounded-md py-0.5 px-3 flex items-center justify-center text-[9px] md:text-[10px] text-brand-charcoal/60 font-mono tracking-tight">
                            <span className="text-brand-gold mr-1.5">🔒</span>
                            {meta.url}
                          </div>
                          <div className="flex space-x-1">
                            <span className="text-[10px] text-brand-charcoal/40 font-mono">100%</span>
                          </div>
                        </div>

                        {/* Scrollable Viewport */}
                        <div className="flex-1 w-full overflow-y-auto elegant-scrollbar relative bg-brand-paper" style={{ scrollBehavior: 'smooth' }}>
                          {/* Desktop Image Viewport */}
                          <div className="hidden lg:block w-full">
                            <Image
                              src={meta.imgSrc}
                              alt={proj.title || "Project Snapshot"}
                              width={1200}
                              height={3600}
                              sizes="(max-width: 1024px) 100vw, 800px"
                              className="w-full h-auto object-top"
                              priority={idx === 0}
                              referrerPolicy="no-referrer"
                              onError={() => {
                                if (proj.id === "gopalji") setGopaljiImgSrc("https://picsum.photos/seed/coconut/600/450");
                                if (proj.id === "friends") setFriendsImgSrc("https://picsum.photos/seed/travel/600/450");
                                if (proj.id === "shrikalyan") setShrikalyanImgSrc("https://picsum.photos/seed/kalyan/600/450");
                                if (proj.id === "agroshore") setAgroshoreImgSrc("https://picsum.photos/seed/organic/600/450");
                              }}
                            />
                          </div>

                          {/* Mobile Image Viewport */}
                          <div className="block lg:hidden w-full">
                            <Image
                              src={meta.mobImgSrc || meta.imgSrc}
                              alt={`${proj.title || "Project Snapshot"} Mobile`}
                              width={600}
                              height={2400}
                              sizes="(max-width: 1024px) 100vw, 400px"
                              className="w-full h-auto object-top"
                              priority={idx === 0}
                              referrerPolicy="no-referrer"
                              onError={() => {
                                if (proj.id === "gopalji") setGopaljiMobImgSrc("https://picsum.photos/seed/coconut/600/450");
                                if (proj.id === "friends") setFriendsMobImgSrc("https://picsum.photos/seed/travel/600/450");
                                if (proj.id === "shrikalyan") setShrikalyanMobImgSrc("https://picsum.photos/seed/kalyan/600/450");
                                if (proj.id === "agroshore") setAgroshoreMobImgSrc("https://picsum.photos/seed/organic/600/450");
                              }}
                            />
                          </div>

                          {/* Vertical Scroll Helper Overlay */}
                          {["gopalji", "friends", "shrikalyan", "agroshore"].includes(proj.id) && (
                            <div className="absolute bottom-4 right-4 bg-brand-charcoal/90 text-brand-cream font-mono text-[9px] tracking-wider px-3 py-1.5 rounded shadow-lg z-10 animate-bounce pointer-events-none flex items-center space-x-1.5">
                              <span>↓</span>
                              <span className="font-sans font-bold">SCROLL TO EXPLORE PAGE</span>
                            </div>
                          )}
                        </div>

                        {/* HUD overlays */}
                        <div className="absolute inset-x-4 top-12 bottom-4 border border-brand-cream/10 pointer-events-none z-10" />
                        <div className="absolute inset-x-6 top-14 bottom-6 border border-dashed border-brand-cream/5 pointer-events-none z-10" />
                        
                        <div className="absolute top-11 left-3 w-4 h-4 border-t-2 border-l-2 border-brand-gold z-10 pointer-events-none" />
                        <div className="absolute top-11 right-3 w-4 h-4 border-t-2 border-r-2 border-brand-gold z-10 pointer-events-none" />
                        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-brand-gold z-10 pointer-events-none" />
                        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-brand-gold z-10 pointer-events-none" />

                        <div className="absolute bottom-4 left-4 bg-brand-charcoal/80 backdrop-blur-md text-brand-cream font-mono text-[8px] tracking-widest px-2 py-0.5 z-10 uppercase">
                          COMMISSION SNAPSHOT // {proj.id?.toUpperCase() || "ARCHIVE"}
                        </div>
                      </div>
                    </div>

                    {/* RIGHT SIDE: Summary card */}
                    <div className="lg:col-span-5 flex flex-col justify-between bg-brand-paper border border-brand-charcoal/15 p-6 md:p-8 shadow-sm relative">
                      
                      <div className="absolute inset-0 border-[10px] md:border-[12px] border-[#000052] pointer-events-none z-35" />
                      
                      <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-brand-charcoal/30" />
                      <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-brand-charcoal/30" />
                      <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-brand-charcoal/30" />
                      <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-brand-charcoal/30" />

                      <div className="space-y-6">
                        
                        <div className="border-b border-brand-charcoal/10 pb-4">
                          <span className="font-sans text-[10px] font-black tracking-widest text-brand-clay uppercase block mb-1">
                            {proj.category || "Digital Curation"}
                          </span>
                          <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-brand-charcoal">
                            {proj.title || "Premium Commission"}
                          </h3>
                        </div>

                        <div className="space-y-4">
                          <p className="font-sans text-xs md:text-sm text-brand-charcoal/85 leading-relaxed">
                            {meta.description}
                          </p>

                          {/* Stats panel */}
                          <div className="bg-brand-cream/30 border border-brand-charcoal/10 p-4 space-y-2">
                            <div className="flex justify-between text-[9px] font-mono">
                              <span className="text-brand-charcoal/50">PLATFORM // RUNTIME</span>
                              <span className="text-brand-charcoal/90 font-bold">NEXT.JS 15 + REACT</span>
                            </div>
                            <div className="flex justify-between text-[9px] font-mono">
                              <span className="text-brand-charcoal/50">STYLING // ENGINE</span>
                              <span className="text-brand-charcoal/90 font-bold">TAILWIND CSS</span>
                            </div>
                            <div className="flex justify-between text-[9px] font-mono">
                              <span className="text-brand-charcoal/50">EST. DEPLOY TIME</span>
                              <span className="text-brand-gold font-bold">3 DAYS FROM BLUEPRINT</span>
                            </div>
                          </div>

                          {/* Highlights */}
                          <div className="space-y-1.5 pt-2">
                            <span className="font-sans text-[9px] font-black tracking-wider text-brand-clay uppercase block">
                              KEY HIGHLIGHTS
                            </span>
                            <ul className="space-y-1 text-[11px] text-brand-charcoal/70">
                              {meta.highlights.map((highlight, hIdx) => (
                                <li key={hIdx} className="flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                      </div>

                      <div className="pt-6 border-t border-brand-charcoal/10 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="font-mono text-[9px] text-brand-clay uppercase font-bold">
                          REF_ID: // 0{idx + 1}
                        </span>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-charcoal hover:bg-brand-gold text-brand-cream hover:text-brand-charcoal text-[9px] font-bold uppercase tracking-widest transition-colors"
                        >
                          <span>Inquire About Build</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>

            {/* Compact Auto-playing Testimonial Slider */}
            <div className="mt-20 pt-16 border-t border-brand-charcoal/15">
              <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
                <span className="font-sans text-[11px] font-black tracking-[0.25em] text-brand-clay uppercase block">
                  ✦ CLIENT SUCCESS RECORDS ✦
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-brand-charcoal tracking-tight">
                  WHAT OUTSTANDING BRANDS SAY
                </h3>
              </div>

              <div className="max-w-3xl mx-auto relative bg-brand-cream/40 backdrop-blur-sm border-2 border-brand-charcoal p-8 md:p-12 shadow-[6px_6px_0px_0px_rgba(11,27,58,1)]">
                {/* Vintage frame elements */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-brand-charcoal/40" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-brand-charcoal/40" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-brand-charcoal/40" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-brand-charcoal/40" />

                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-charcoal text-brand-gold w-10 h-10 rounded-full flex items-center justify-center border-2 border-brand-cream">
                  <Quote className="w-4 h-4 fill-brand-gold" />
                </div>

                <div className="relative min-h-[160px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -15 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="space-y-6 text-center"
                    >
                      <p className="font-sans text-sm sm:text-base md:text-lg text-brand-charcoal/90 leading-relaxed font-light italic px-4">
                        &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
                      </p>

                      <div className="space-y-1">
                        <h4 className="font-display text-xs sm:text-sm font-black text-brand-charcoal uppercase tracking-wider">
                          {TESTIMONIALS[activeTestimonial].author}
                        </h4>
                        <p className="font-mono text-[9px] uppercase tracking-widest text-brand-clay">
                          {TESTIMONIALS[activeTestimonial].role} &mdash; {TESTIMONIALS[activeTestimonial].company}
                        </p>
                      </div>

                      <div className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-3 bg-brand-charcoal/5 border border-brand-charcoal/10 px-3 py-1.5 font-mono text-[9px] text-brand-charcoal/70">
                        <span className="font-bold text-brand-charcoal">METRIC:</span>
                        <span className="text-brand-red font-bold">{TESTIMONIALS[activeTestimonial].metric}</span>
                        <span className="text-brand-charcoal/30">|</span>
                        <span className="font-bold text-brand-charcoal">PROJECT:</span>
                        <span className="text-brand-clay font-bold">{TESTIMONIALS[activeTestimonial].project}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
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
              window.open("https://wa.me/917470857424?text=Hi%20Express%20Webcraft!%20I'm%20interested%20in%20a%20premium%20website%20commission.", "_blank");
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
