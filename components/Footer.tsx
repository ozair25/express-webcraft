"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { MessageCircle, ArrowUpRight, Send } from "lucide-react";
import { Analytics } from "@/lib/analytics";

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="w-full bg-brand-charcoal text-brand-cream/80 py-12 px-4 md:px-12 mt-auto border-t border-white/10 relative z-30 select-none">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Under-footer vintage objects decoration layout */}
        <div className="relative w-full h-[150px] opacity-25 mb-8 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1495707902641-75cac588d2e9?auto=format&fit=crop&w=600&h=200&q=80"
            alt="Vintage Analog Equipment"
            fill
            className="object-contain filter grayscale brightness-75"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Sublinks copyright */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[10px] font-mono text-brand-cream/50 gap-6">
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

      {/* =======================================
          FLOATING CONVERSION OPTIMIZATION ELEMENTS
          ======================================= */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Floating WhatsApp Quick Contact button */}
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

        {/* Floating "Let's Talk" Quick Anchor */}
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

    </footer>
  );
}
