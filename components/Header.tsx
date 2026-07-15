"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X, Menu } from "lucide-react";
import { Analytics } from "@/lib/analytics";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Why Us", href: "/why-us" },
    { label: "Process", href: "/process" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" }
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
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
        <nav className="hidden xl:flex items-center gap-5 xl:gap-7 text-[10px] xl:text-[11px] font-bold uppercase tracking-wider text-brand-cream/80">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`hover:text-brand-gold transition-all relative py-1 whitespace-nowrap ${
                isActive(item.href)
                  ? "text-brand-gold font-black after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-[2px] after:bg-brand-gold"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Medium and Desktop compact links (if viewport under xl but over lg) */}
        <nav className="hidden lg:flex xl:hidden items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-brand-cream/80">
          {navItems.slice(0, 6).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`hover:text-brand-gold transition-all relative py-1 ${
                isActive(item.href) ? "text-brand-gold font-black" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/faq" className={`hover:text-brand-gold transition-all ${isActive("/faq") ? "text-brand-gold" : ""}`}>FAQ</Link>
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center border border-brand-cream/10 rounded-full bg-brand-charcoal/10 hover:bg-brand-charcoal/20 transition-all text-brand-cream"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Right CTA */}
        <Link
          href="/contact"
          onClick={() => {
            Analytics.trackCtaClick("Header Let's Talk", "header");
          }}
          className="hidden lg:inline-flex px-6 py-2.5 bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal text-[10px] font-bold uppercase tracking-widest transition-all hover:-translate-y-0.5 shadow-md"
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
            className="lg:hidden fixed top-20 left-4 right-4 bg-brand-paper border-2 border-brand-charcoal p-6 z-45 shadow-xl max-h-[85vh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-3.5 text-center text-xs font-bold uppercase tracking-wider text-brand-charcoal/80">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  className={`hover:text-brand-clay py-1.5 border-b border-brand-charcoal/5 last:border-b-0 ${
                    isActive(item.href) ? "text-brand-clay font-black" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-brand-charcoal hover:bg-brand-clay text-brand-cream text-center text-xs font-bold uppercase tracking-widest mt-2 transition-all"
              >
                Let&apos;s Talk ↗
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
