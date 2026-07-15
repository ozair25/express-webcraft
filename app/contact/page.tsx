"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Send, MessageCircle, Loader2, Check, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Analytics } from "@/lib/analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function ContactPage() {
  const [contactName, setContactName] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactService, setContactService] = useState("Custom Website Design");
  const [contactVision, setContactVision] = useState("");
  const [contactHoneypot, setContactHoneypot] = useState(""); // Honeypot field for spam prevention
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false);
  const [contactFormLoading, setContactFormLoading] = useState(false);
  const [contactFormErrors, setContactFormErrors] = useState<Record<string, string>>({});
  const [submissionId, setSubmissionId] = useState<number | null>(null);

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

    // Validate phone
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
          budget: "Not Specified",
          vision: contactVision,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Network submission failed");
      }

      const result = await response.json();
      setSubmissionId(result.id || Math.floor(100000 + Math.random() * 900000));
      setContactFormSubmitted(true);
      Analytics.trackFormSubmit("contact", "success");
    } catch (err: any) {
      console.error("Submission error:", err);
      setContactFormErrors({
        form: err.message || "An unexpected error occurred. Please try again or chat via WhatsApp."
      });
      Analytics.trackFormSubmit("contact", "error");
    } finally {
      setContactFormLoading(false);
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://expresswebcraft.com/contact/#breadcrumb",
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
        "name": "Contact",
        "item": "https://expresswebcraft.com/contact"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-transparent grainy-bg relative overflow-x-hidden text-brand-charcoal select-none flex flex-col justify-between" suppressHydrationWarning={true}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="flex-1 pt-28 lg:pt-36 pb-20 px-4 md:px-12 max-w-7xl mx-auto w-full relative z-10">
        
        {/* Breadcrumbs and back navigation */}
        <div className="flex items-center justify-between border-b border-brand-charcoal/10 pb-6 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-brand-charcoal/60">
            <Link href="/" className="hover:text-brand-clay transition-colors">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-charcoal/30" />
            <span className="text-brand-charcoal font-bold">CONTACT ATELIER</span>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-brand-red font-bold hover:text-brand-charcoal transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Agency Information details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-[11px] font-black tracking-[0.25em] text-brand-clay uppercase block">
                ✦ COMMISSION OFFICE // ONLINE ✦
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-black text-brand-charcoal leading-none uppercase tracking-tight">
                LET&apos;S TALK <span className="text-brand-clay">BUILDS</span>
              </h1>
              <p className="text-sm md:text-base text-brand-charcoal/70 leading-relaxed font-light max-w-lg">
                We design and build bespoke web flagships that help elite brands rank first and load in milliseconds. Fill out our commission questionnaire to initiate onboarding immediately.
              </p>
            </div>

            {/* Direct Studio coordinates card */}
            <div className="bg-brand-paper border-2 border-brand-charcoal p-6 space-y-4 shadow-[4px_4px_0px_0px_rgba(11,27,58,0.1)]">
              <span className="font-mono text-[9px] text-brand-clay font-bold block uppercase tracking-wider">
                STUDIO COORDINATES
              </span>
              <div className="space-y-3 font-mono text-xs text-brand-charcoal/80">
                <div>
                  <span className="text-brand-charcoal/45 block text-[9px] uppercase">Direct Email:</span>
                  <a href="mailto:sayedozair25@gmail.com" className="font-bold text-brand-red hover:text-brand-clay transition-colors">sayedozair25@gmail.com</a>
                </div>
                <div>
                  <span className="text-brand-charcoal/45 block text-[9px] uppercase">Registered Location:</span>
                  <span className="font-bold">Indore, MP, India (Available Worldwide)</span>
                </div>
                <div>
                  <span className="text-brand-charcoal/45 block text-[9px] uppercase">Response Time:</span>
                  <span className="font-bold text-brand-gold">Less than 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Floating analog vintage credit banner decoration */}
            <div className="border border-brand-charcoal/10 p-5 rounded-none text-center font-mono text-[9px] text-brand-charcoal/50 uppercase tracking-widest bg-white/30">
              ✦ CALIBRATION STAMP APPROVED ✦
            </div>
          </div>

          {/* RIGHT COLUMN: The fully custom, high-contrast black form container card */}
          <div className="lg:col-span-7 bg-[#12141a] text-brand-cream p-6 sm:p-10 border-2 border-brand-charcoal shadow-[8px_8px_0px_0px_rgba(201,162,39,1)] relative overflow-hidden">
            
            {/* Visual golden corner brackets */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-brand-gold/60" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-brand-gold/60" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-brand-gold/60" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-brand-gold/60" />

            <div className="space-y-6 relative z-10">
              <div className="text-center pb-4 border-b border-brand-cream/10 space-y-1">
                <span className="font-mono text-[9px] text-brand-gold font-bold block uppercase tracking-widest">
                  COMMISSION APPLICATION FORM
                </span>
                <h3 className="font-display text-lg font-black uppercase text-brand-cream">
                  PROJECT SPECIFICATION
                </h3>
              </div>

              <AnimatePresence mode="wait">
                {!contactFormSubmitted ? (
                  <motion.form
                    key="commission-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleContactSubmit}
                    className="space-y-4 text-left"
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
                            placeholder="John Doe"
                            className={`bg-white/5 border px-3 py-2 text-xs text-brand-cream focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold ${
                              contactFormErrors.name ? "border-[#FF5A5A]" : "border-white/20"
                            }`}
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
                            placeholder="Acme Co."
                            className="bg-white/5 border border-white/20 px-3 py-2 text-xs text-brand-cream focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
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
                            placeholder="john@example.com"
                            className={`bg-white/5 border px-3 py-2 text-xs text-brand-cream focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold ${
                              contactFormErrors.email ? "border-[#FF5A5A]" : "border-white/20"
                            }`}
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
                            placeholder="+1 555-0100"
                            className={`bg-white/5 border px-3 py-2 text-xs text-brand-cream focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold ${
                              contactFormErrors.phone ? "border-[#FF5A5A]" : "border-white/20"
                            }`}
                          />
                          {contactFormErrors.phone && (
                            <p className="font-mono text-[9px] text-[#FF5A5A] mt-0.5">{contactFormErrors.phone}</p>
                          )}
                        </div>
                      </div>

                      {/* Selected Service Selection */}
                      <div className="flex flex-col space-y-1">
                        <label htmlFor="contactService" className="font-mono text-[9px] uppercase tracking-wider text-brand-cream/60">
                          Selected Service <span className="text-brand-gold">*</span>
                        </label>
                        <select
                          id="contactService"
                          required
                          value={contactService}
                          onChange={(e) => setContactService(e.target.value)}
                          className="bg-[#12141a] border border-white/20 px-3 py-2.5 text-xs text-brand-cream focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold cursor-pointer w-full"
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

                      {/* Vision Outline */}
                      <div className="flex flex-col space-y-1">
                        <label htmlFor="c_v_no_autofill" className="font-mono text-[9px] uppercase tracking-wider text-brand-cream/60">
                          Vision Outline <span className="text-brand-gold">*</span>
                        </label>
                        <textarea
                          id="c_v_no_autofill"
                          rows={4}
                          required
                          value={contactVision}
                          onChange={(e) => setContactVision(e.target.value)}
                          placeholder="Briefly outline your service requirements, timeline, budget, and project goals..."
                          className={`bg-white/5 border px-3 py-2 text-xs text-brand-cream focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold resize-none ${
                            contactFormErrors.vision ? "border-[#FF5A5A]" : "border-white/20"
                          }`}
                        />
                        {contactFormErrors.vision && (
                          <p className="font-mono text-[9px] text-[#FF5A5A] mt-0.5">{contactFormErrors.vision}</p>
                        )}
                      </div>

                      {/* Form level error message */}
                      {contactFormErrors.form && (
                        <div className="bg-[#FF5A5A]/10 border border-[#FF5A5A]/30 p-3 text-[#FF5A5A] text-xs font-mono text-center flex items-center justify-center gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{contactFormErrors.form}</span>
                        </div>
                      )}

                      {/* Submit action button */}
                      <button
                        type="submit"
                        disabled={contactFormLoading}
                        className="w-full py-3 bg-brand-clay hover:bg-brand-gold text-brand-cream hover:text-brand-charcoal text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none"
                      >
                        {contactFormLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>PROCESSING ARCHITECTURE...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Submit Commission Form ↗</span>
                          </>
                        )}
                      </button>

                      <div className="relative flex py-2 items-center select-none">
                        <div className="flex-grow border-t border-white/10"></div>
                        <span className="flex-shrink mx-4 text-[9px] font-mono text-brand-cream/40 uppercase tracking-widest">or connect instantly</span>
                        <div className="flex-grow border-t border-white/10"></div>
                      </div>

                      {/* WhatsApp backup button */}
                      <a
                        href="https://wa.me/917470857424?text=Hi%20Express%20Webcraft!%20I'm%20interested%20in%20a%20premium%20website%20commission."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => Analytics.trackWhatsAppClick()}
                        className="w-full py-3 border-2 border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 hover:bg-[#25D366]/5 cursor-pointer select-none"
                      >
                        <MessageCircle className="w-4 h-4 fill-[#25D366]/10" />
                        <span>Chat via WhatsApp ↗</span>
                      </a>

                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="talk-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/5 border border-brand-gold/30 p-8 text-center space-y-5"
                  >
                    <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center mx-auto text-brand-gold bg-brand-gold/5 animate-pulse">
                      <Check className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display text-base font-black uppercase text-brand-gold tracking-widest">
                        COMMISSION ARCHITECTED
                      </h4>
                      <p className="font-mono text-[9px] text-brand-cream/40 uppercase tracking-widest">
                        SUBMISSION SECURE // REF_ID: #{submissionId}
                      </p>
                    </div>
                    <p className="font-sans text-xs text-brand-cream/80 leading-relaxed font-light">
                      Thank you for submitting your project vision. Our principal architects have received your parameters and will perform a preliminary technical feasibility audit immediately.
                    </p>
                    <div className="font-sans text-xs text-brand-gold font-bold">
                      A team member will reach out to you via email within 24 hours.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
