"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Analytics } from "@/lib/analytics";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-charcoal text-brand-cream py-16 ripped-border-top relative overflow-hidden z-10" suppressHydrationWarning={true}>
      <div className="max-w-6xl mx-auto px-4 md:px-12 relative z-20 space-y-12">
        
        {/* Main Footer Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand/About description (4 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-brand-cream relative rounded-none flex items-center justify-center">
                <span className="font-display font-black text-brand-red text-sm">EW</span>
              </div>
              <span className="font-display text-sm font-black tracking-widest uppercase text-brand-cream">
                EXPRESS WEBCRAFT
              </span>
            </Link>
            <p className="font-sans text-xs text-brand-cream/70 leading-relaxed font-light max-w-sm">
              We reject templates and generic builders. Express Webcraft is an elite digital craftsmanship studio creating high-performance bespoke digital flagships calibrated for absolute speed, luxury aesthetics, and ultimate search authority.
            </p>
            <div className="font-mono text-[9px] text-brand-gold/80 leading-relaxed uppercase">
              STUDIO STATUS // ONLINE // EST 2026
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-brand-gold">
              Agency Directory
            </h4>
            <nav className="flex flex-col gap-2 text-xs font-mono text-brand-cream/60">
              <Link href="/" className="hover:text-brand-cream transition-colors">Home</Link>
              <Link href="/about" className="hover:text-brand-cream transition-colors">About Story</Link>
              <Link href="/services" className="hover:text-brand-cream transition-colors">Our Services</Link>
              <Link href="/portfolio" className="hover:text-brand-cream transition-colors">Featured Works</Link>
              <Link href="/why-us" className="hover:text-brand-cream transition-colors">Why Choose Us</Link>
              <Link href="/process" className="hover:text-brand-cream transition-colors">Creative Process</Link>
            </nav>
          </div>

          {/* Support & Packages Column (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-brand-gold">
              Resources
            </h4>
            <nav className="flex flex-col gap-2 text-xs font-mono text-brand-cream/60">
              <Link href="/pricing" className="hover:text-brand-cream transition-colors">Pricing</Link>
              <Link href="/faq" className="hover:text-brand-cream transition-colors">Read FAQs</Link>
              <Link href="/contact" className="hover:text-brand-cream transition-colors">Let&apos;s Talk</Link>
              <Link href="/privacy-policy" className="hover:text-brand-cream transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-brand-cream transition-colors">Terms of Service</Link>
            </nav>
          </div>

          {/* Core Info (2 cols) */}
          <div className="md:col-span-2 space-y-3 font-mono text-[10px] text-brand-cream/50">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-gold">
              Studio Location
            </h4>
            <p className="leading-relaxed">
              Express Webcraft Co.<br />
              MP, 452001<br />
              India (Global Commissions)
            </p>
            <p className="pt-2 text-brand-cream/70">
              M: sayedozair25@gmail.com
            </p>
          </div>

        </div>

        {/* Vintage analogous graphics decoration */}
        <div className="relative w-full h-[120px] opacity-[0.15] pointer-events-none select-none">
          <Image
            src="https://images.unsplash.com/photo-1495707902641-75cac588d2e9?auto=format&fit=crop&w=600&h=200&q=80"
            alt="Vintage Analog Equipment Layout decoration"
            fill
            className="object-contain filter grayscale brightness-75"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Bottom copyright and legal status bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-brand-cream/40 gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 justify-center sm:justify-start">
            <span className="font-display font-bold text-brand-cream text-xs">EW</span>
            <span>© 2026 EXPRESS WEBCRAFT. ALL RIGHTS RESERVED.</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors uppercase">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-brand-gold transition-colors uppercase">Terms</Link>
          </div>
          <div className="text-[9px] text-brand-gold/60 uppercase tracking-widest">
            ✦ HIGH-PERFORMANCE DIGITAL ATELIER
          </div>
        </div>

      </div>
    </footer>
  );
}
