"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { MessageCircle, Send, ArrowUpRight } from "lucide-react";
import { Analytics } from "@/lib/analytics";

export default function FloatingCTA() {
  return (
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

      {/* Floating "Let's Talk" Quick Link */}
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
          aria-label="Go to Commission Form"
        >
          <Send className="w-4 h-4 text-brand-gold group-hover:rotate-12 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
}
