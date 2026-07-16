"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, Menu, Compass, ArrowUpRight, MessageCircle, Send, Loader2, Leaf
} from "lucide-react";
import { Analytics } from "@/lib/analytics";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Contact Us");

  // Form submission and validation states
  const [contactName, setContactName] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactService, setContactService] = useState("Custom Website Design");
  const [contactBudget, setContactBudget] = useState("Not Specified");
  const [contactVision, setContactVision] = useState("");
  const [contactHoneypot, setContactHoneypot] = useState(""); // Honeypot field for spam prevention
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const [contactFormLoading, setContactFormLoading] = useState(false);
  const [contactFormErrors, setContactFormErrors] = useState<Record<string, string>>({});
  const [submissionId, setSubmissionId] = useState<number | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Why Us", href: "/why-us" },
    { label: "Contact Us", href: "/contact" }
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent submissions from automated spam bots
    if (contactHoneypot) {
      console.warn("Spam submission blocked via Honeypot.");
      setSubmissionId(Math.floor(100000 + Math.random() * 900000));
      setContactFormSubmitted(true); // Faux success to trick bots
      Analytics.trackFormSubmit("contact", "spam");
      return;
    }

    const errors: Record<string, string> = {};

    // Validate name
    if (!contactName.trim()) {
      errors.name = "Please enter your name.";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactEmail.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!emailRegex.test(contactEmail)) {
      errors.email = "Please enter a valid email address.";
    }

    // Validate phone: standard international numbers, digits, spaces, plus, minus, parenthesis
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-s./0-9]*$/;
    if (!contactPhone.trim()) {
      errors.phone = "Please enter your phone number.";
    } else if (!phoneRegex.test(contactPhone)) {
      errors.phone = "Please enter a valid phone number format.";
    }

    // Validate vision outline
    if (!contactVision.trim()) {
      errors.vision = "Please enter your vision outline.";
    } else if (contactVision.trim().length < 10) {
      errors.vision = "Vision outline must be at least 10 characters long.";
    }

    if (Object.keys(errors).length > 0) {
      setContactFormErrors(errors);
      Analytics.trackFormSubmit("contact", "error");
      return;
    }

    // Clear previous errors
    setContactFormErrors({});
    setContactFormLoading(true);

    const startTime = Date.now();

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contactName,
          company: contactCompany,
          email: contactEmail,
          phone: contactPhone,
          service: contactService,
          budget: contactBudget,
          message: contactVision,
          honeypot: contactHoneypot,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setSubmissionId(Math.floor(100000 + Math.random() * 900000));
      setContactFormSubmitted(true);
      Analytics.trackFormSubmit("contact", "success", Date.now() - startTime);
    } catch (err: any) {
      console.error("Submission failed:", err);
      setContactFormErrors({ form: err.message || "Something went wrong. Please try again later." });
      Analytics.trackFormSubmit("contact", "error");
    } finally {
      setContactFormLoading(false);
    }
  };

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
            FOOTER HERO CALL-TO-ACTION / CONTACT FORM
            ======================================= */}
        <section className="w-full bg-brand-charcoal text-brand-cream py-16 relative overflow-hidden z-10" suppressHydrationWarning={true}>
          <div className="max-w-4xl mx-auto px-4 md:px-12 text-center relative z-20 space-y-6">
            
            <span className="font-display italic text-lg text-brand-gold tracking-wide font-medium block">
              Ready to create something amazing?
            </span>

            <h1 className="font-display text-3xl md:text-5xl font-black uppercase text-brand-cream leading-tight">
              Let&apos;s build something <br />
              extraordinary together.
            </h1>

            <div className="pt-4 max-w-md mx-auto">
              <AnimatePresence mode="wait">
                {!contactFormSubmitted ? (
                  <motion.form
                    key="talk-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleContactSubmit}
                    className="space-y-4 text-left bg-white/5 border border-white/10 p-6 shadow-2xl"
                    suppressHydrationWarning={true}
                    noValidate
                    autoComplete="off"
                  >
                    {/* Honeypot field for spam control */}
                    <div className="hidden" aria-hidden="true">
                      <input
                        type="text"
                        name="brief_website_key_hash"
                        value={contactHoneypot}
                        onChange={(e) => setContactHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {/* Name & Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-1">
                          <label htmlFor="c_n_no_autofill" className="font-mono text-[9px] uppercase tracking-wider text-brand-cream/60">
                            Your Name <span className="text-brand-gold">*</span>
                          </label>
                          <input
                            id="c_n_no_autofill"
                            type="text"
                            required
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            placeholder=""
                            autoComplete="new-password"
                            className={`bg-white/5 border px-3 py-2 text-xs text-brand-cream focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold ${
                              contactFormErrors.name ? "border-[#FF5A5A]" : "border-white/20"
                            }`}
                            suppressHydrationWarning={true}
                          />
                          {contactFormErrors.name && (
                            <p className="font-mono text-[9px] text-[#FF5A5A] mt-0.5">{contactFormErrors.name}</p>
                          )}
                        </div>

                        <div className="flex flex-col space-y-1">
                          <label htmlFor="c_c_no_autofill" className="font-mono text-[9px] uppercase tracking-wider text-brand-cream/60">
                            Company Name <span className="text-brand-cream/35">(Optional)</span>
                          </label>
                          <input
                            id="c_c_no_autofill"
                            type="text"
                            value={contactCompany}
                            onChange={(e) => setContactCompany(e.target.value)}
                            placeholder=""
                            autoComplete="new-password"
                            className="bg-white/5 border border-white/20 px-3 py-2 text-xs text-brand-cream focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                            suppressHydrationWarning={true}
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-1">
                          <label htmlFor="c_e_no_autofill" className="font-mono text-[9px] uppercase tracking-wider text-brand-cream/60">
                            Email Address <span className="text-brand-gold">*</span>
                          </label>
                          <input
                            id="c_e_no_autofill"
                            type="email"
                            required
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            placeholder=""
                            autoComplete="new-password"
                            className={`bg-white/5 border px-3 py-2 text-xs text-brand-cream focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold ${
                              contactFormErrors.email ? "border-[#FF5A5A]" : "border-white/20"
                            }`}
                            suppressHydrationWarning={true}
                          />
                          {contactFormErrors.email && (
                            <p className="font-mono text-[9px] text-[#FF5A5A] mt-0.5">{contactFormErrors.email}</p>
                          )}
                        </div>

                        <div className="flex flex-col space-y-1">
                          <label htmlFor="c_p_no_autofill" className="font-mono text-[9px] uppercase tracking-wider text-brand-cream/60">
                            Phone Number <span className="text-brand-gold">*</span>
                          </label>
                          <input
                            id="c_p_no_autofill"
                            type="tel"
                            required
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                            placeholder=""
                            autoComplete="new-password"
                            className={`bg-white/5 border px-3 py-2 text-xs text-brand-cream focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold ${
                              contactFormErrors.phone ? "border-[#FF5A5A]" : "border-white/20"
                            }`}
                            suppressHydrationWarning={true}
                          />
                          {contactFormErrors.phone && (
                            <p className="font-mono text-[9px] text-[#FF5A5A] mt-0.5">{contactFormErrors.phone}</p>
                          )}
                        </div>
                      </div>

                      {/* Selected Service */}
                      <div className="flex flex-col space-y-1">
                        <label htmlFor="contactService" className="font-mono text-[9px] uppercase tracking-wider text-brand-cream/60">
                          Selected Service <span className="text-brand-gold">*</span>
                        </label>
                        <select
                          id="contactService"
                          required
                          value={contactService}
                          onChange={(e) => setContactService(e.target.value)}
                          className="bg-[#1c1d24] border border-white/20 px-3 py-2.5 text-xs text-brand-cream focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold cursor-pointer w-full"
                          suppressHydrationWarning={true}
                        >
                          <option value="Custom Website Design">Custom Website Design</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Landing Pages">Landing Pages</option>
                          <option value="E-commerce Solutions">E-commerce Solutions</option>
                          <option value="SEO & Performance Optimization">SEO & Performance Optimization</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="Website Maintenance & Support">Website Maintenance & Support</option>
                          <option value="Analytics & Growth">Analytics & Growth</option>
                        </select>
                      </div>
                    </div>

                    {contactFormErrors.form && (
                      <div className="bg-[#FF5A5A]/10 border border-[#FF5A5A]/30 p-3 text-[#FF5A5A] text-xs font-mono text-center">
                        {contactFormErrors.form}
                      </div>
                    )}

                    <div className="flex flex-col space-y-1">
                      <label htmlFor="c_v_no_autofill" className="font-mono text-[9px] uppercase tracking-wider text-brand-cream/60">
                        Vision Outline <span className="text-brand-gold">*</span>
                      </label>
                      <textarea
                        id="c_v_no_autofill"
                        rows={3}
                        required
                        value={contactVision}
                        onChange={(e) => setContactVision(e.target.value)}
                        placeholder=""
                        autoComplete="new-password"
                        className={`bg-white/5 border px-3 py-2 text-xs text-brand-cream focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold resize-none ${
                          contactFormErrors.vision ? "border-[#FF5A5A]" : "border-white/20"
                        }`}
                        suppressHydrationWarning={true}
                      />
                      {contactFormErrors.vision && (
                        <p className="font-mono text-[9px] text-[#FF5A5A] mt-0.5">{contactFormErrors.vision}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={contactFormLoading}
                      className="w-full py-3 bg-brand-clay hover:bg-brand-gold text-brand-cream text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      suppressHydrationWarning={true}
                    >
                      {contactFormLoading ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          PROCESSING ARCHITECTURE...
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          Let&apos;s Talk ↗
                        </>
                      )}
                    </button>

                    <div className="relative flex py-2 items-center select-none">
                      <div className="flex-grow border-t border-white/10"></div>
                      <span className="flex-shrink mx-4 text-[9px] font-mono text-brand-cream/40 uppercase tracking-widest">or connect instantly</span>
                      <div className="flex-grow border-t border-white/10"></div>
                    </div>

                    <a
                      href="https://wa.me/917470857424?text=Hi%20Express%20Webcraft!%20I'm%20interested%20in%20a%20premium%20website%20commission."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => Analytics.trackWhatsAppClick()}
                      className="w-full py-3 border-2 border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 hover:bg-[#25D366]/5"
                    >
                      <MessageCircle className="w-4 h-4 fill-[#25D366]/10" />
                      Chat on WhatsApp ↗
                    </a>
                  </motion.form>
                ) : (
                  <motion.div
                    key="talk-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/5 border border-brand-gold/30 p-6 text-center space-y-5"
                  >
                    <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center mx-auto text-brand-gold">
                      <Leaf className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display text-base font-bold uppercase text-brand-gold">
                        Commission Request Logged
                      </h4>
                      <p className="font-mono text-[8px] uppercase tracking-widest text-brand-cream/50">
                        ID // EW-COMMISSION-{submissionId || 382914}
                      </p>
                    </div>
                    <p className="font-sans text-xs text-brand-cream/80 leading-relaxed font-light">
                      Thank you. Our master visual architect is reviewing your vision layout proposal and will follow up with a bespoke blueprint within 24 hours.
                    </p>

                    <div className="border-t border-white/10 pt-4 space-y-3">
                      <p className="font-mono text-[9px] text-brand-gold uppercase tracking-wider">
                        ✦ Bypassing waitlists
                      </p>
                      <p className="font-sans text-[11px] text-brand-cream/70 font-light leading-relaxed">
                        To lock in an immediate 15-minute concept review, secure a direct slot on our digital ledger.
                      </p>
                      <button
                        onClick={() => {
                          Analytics.trackCalendlyPlaceholderClick();
                          window.open("https://calendly.com", "_blank");
                        }}
                        className="w-full py-2.5 bg-brand-gold hover:bg-brand-cream hover:text-brand-charcoal text-brand-charcoal text-[9px] font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
                      >
                        Schedule Briefing on Calendly ↗
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        setContactFormSubmitted(false);
                        setContactName("");
                        setContactEmail("");
                        setContactPhone("");
                        setContactVision("");
                      }}
                      className="px-4 py-1.5 border border-white/25 text-[9px] font-mono uppercase tracking-widest hover:bg-white/5 transition-colors text-brand-cream block mx-auto"
                      suppressHydrationWarning={true}
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
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
      </div>

    </div>
  );
}
