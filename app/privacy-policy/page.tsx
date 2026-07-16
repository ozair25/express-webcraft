"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, Menu, Compass, ArrowUpRight, MessageCircle, Send
} from "lucide-react";
import { Analytics } from "@/lib/analytics";

export default function PrivacyPolicyPage() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");

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

      <main className="pt-[120px] pb-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="bg-brand-paper border-2 border-brand-charcoal p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(11,27,58,1)] relative space-y-8">
            
            {/* Elegant framing ornaments */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-brand-charcoal/30" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-brand-charcoal/30" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-brand-charcoal/30" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-brand-charcoal/30" />

            <div className="space-y-3 border-b border-brand-charcoal/10 pb-6">
              <span className="font-mono text-[9px] text-brand-clay tracking-widest uppercase block">
                ✦ LEGAL CODEX // PROTOCOL
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-black uppercase text-brand-charcoal">
                Privacy Policy
              </h1>
              <p className="font-mono text-[9px] text-brand-charcoal/50 uppercase">
                Last Updated: July 2026
              </p>
            </div>

            <div className="space-y-6 font-sans text-xs md:text-sm text-brand-charcoal/80 leading-relaxed font-light">
              <p>
                At <strong className="text-brand-clay font-bold">Express Webcraft</strong>, we operate with complete transparency, absolute discretion, and uncompromising digital safety. This document details how we handle information submitted to our elite design consultancy.
              </p>
              
              <div className="space-y-3">
                <h2 className="font-display text-sm font-black uppercase text-brand-charcoal tracking-wide">
                  1. Information Collection
                </h2>
                <p>
                  We collect only standard, explicitly provided business contact information via our voluntary commission inquiry form: including names, company designations, active email addresses, phone coordinates, and high-level architectural project visions.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-sm font-black uppercase text-brand-charcoal tracking-wide">
                  2. Strategic Data Utilization
                </h2>
                <p>
                  Your details are processed strictly to prepare design briefs, compute precise performance target estimates, verify waitlist quotas, and schedule face-to-face brief calls on our private ledger.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-sm font-black uppercase text-brand-charcoal tracking-wide">
                  3. No Third-Party Tracking
                </h2>
                <p>
                  We hold a strict stance against automated user brokerage. We do not rent, lease, trade, or distribute your email addresses or company profiles to advertising syndicates. Any client data is retained privately under high-grade secure server sandboxes.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-display text-sm font-black uppercase text-brand-charcoal tracking-wide">
                  4. Analytical Telemetry
                </h2>
                <p>
                  We employ simple, anonymized telemetry tracking to gauge application load latency and click-through optimization. No personal cookies are logged during these visual audits.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-brand-charcoal/15 text-center">
              <Link
                href="/"
                className="inline-flex px-6 py-2.5 bg-brand-charcoal text-brand-cream text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-charcoal transition-all"
              >
                Acknowledge & Return Home
              </Link>
            </div>

          </div>
        </div>
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
