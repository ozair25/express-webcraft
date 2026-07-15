"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Analytics } from "@/lib/analytics";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Sparkles,
  ArrowUpRight,
  Loader2,
  ChevronRight,
  Quote,
  LayoutGrid,
  FileText,
  Hammer,
  HelpCircle,
  FolderKanban,
  CheckCircle2,
  Mail,
  Send,
  RefreshCw,
  Info,
  Leaf,
  Star,
  Compass,
  Feather,
  Sun,
  Flower,
  Tv,
  Smartphone,
  Search,
  Wrench,
  X,
  Menu,
  MessageCircle,
  Code,
  ShoppingCart,
  TrendingUp,
  Layers,
  BarChart3,
  Monitor,
  ArrowRight,
  Zap,
  Shield,
  Globe
} from "lucide-react";

// Curated luxury presets matching the premium vintage & modern editorial style of the reference
const BRAND_PRESETS: Record<string, any> = {
  original: {
    tagline: "Explore. Frame. Inspire.",
    headline: "We Craft Digital Experiences",
    highlight: "That Capture Your Vision.",
    description: "We design and build modern, fast, and SEO-friendly websites that help businesses stand out and grow online.",
    workTitle: "Built to Inspire. Designed to Perform.",
    projects: [
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
    ]
  },
  luxuryHotel: {
    tagline: "Sanctuary. Serenity. Prestige.",
    headline: "We Curate Immersive Havens",
    highlight: "For the Discerning Traveler.",
    description: "Architectural grandeur meets quiet digital luxury. Custom virtual portals engineered for high-end boutique hospitality estates.",
    workTitle: "Elegance Restored. Prestige Reimagined.",
    projects: [
      {
        id: "chalet",
        title: "Chalet L'Alpe",
        category: "Alpine Resort",
        img: "https://picsum.photos/seed/chalet/600/450"
      },
      {
        id: "villa",
        title: "Villa Smeralda",
        category: "Coastal Estate",
        img: "https://picsum.photos/seed/villa/600/450"
      },
      {
        id: "terrace",
        title: "The Zenith Room",
        category: "Boutique Penthouse",
        img: "https://picsum.photos/seed/zenith/600/450"
      },
      {
        id: "resort",
        title: "Oasis Sanctuary",
        category: "Eco-Luxe Retreat",
        img: "https://picsum.photos/seed/oasis/600/450"
      }
    ]
  },
  horology: {
    tagline: "Heritage. Precision. Eternity.",
    headline: "Chronographs of Absolute Purity",
    highlight: "Engraved in Eternal Code.",
    description: "Swiss calibration brought to premium digital canvases. Uncompromising mathematical layouts designed to last generations.",
    workTitle: "Calibrated to Last. Engineered to Mesmerize.",
    projects: [
      {
        id: "vesper",
        title: "Vesper Chrono",
        category: "Grand Complication",
        img: "https://picsum.photos/seed/vesperwatch/600/450"
      },
      {
        id: "aurum",
        title: "Aurum Calibre",
        category: "Minimalist Gold Dress",
        img: "https://picsum.photos/seed/goldwatch/600/450"
      },
      {
        id: "oceanic",
        title: "Oceanic Depthmaster",
        category: "Precision Dive Utility",
        img: "https://picsum.photos/seed/divewatch/600/450"
      },
      {
        id: "mechanical",
        title: "Kinetics Lab",
        category: "Open-Heart Tourbillon",
        img: "https://picsum.photos/seed/mechanical/600/450"
      }
    ]
  },
  tailoring: {
    tagline: "Stitch. Silhouette. Distinction.",
    headline: "Bespoke Sartorial Mastery",
    highlight: "Tailored to Your Identity.",
    description: "We drape physical elegance over virtual canvases. Structured grids, tactile layouts, and fine terracotta details.",
    workTitle: "Curated Textures. Hand-Carved Outlines.",
    projects: [
      {
        id: "linen",
        title: "The Linen House",
        category: "Summer Fine Apparel",
        img: "https://picsum.photos/seed/linen/600/450"
      },
      {
        id: "atelier",
        title: "Savile Row Atelier",
        category: "Bespoke Suit Curation",
        img: "https://picsum.photos/seed/atelier/600/450"
      },
      {
        id: "merino",
        title: "Merino Woollens",
        category: "Tactile Knitwear Studio",
        img: "https://picsum.photos/seed/wool/600/450"
      },
      {
        id: "heritageleather",
        title: "Heritage Hide",
        category: "Hand-Stitched Goods",
        img: "https://picsum.photos/seed/leather/600/450"
      }
    ]
  }
};

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

export default function Home() {
  const [activeNav, setActiveNav] = useState("Home");
  const shouldReduceMotion = useReducedMotion();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  // Navigation Items defined dynamically
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Our Services", href: "#atelier" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Why Us", href: "#process" },
    { label: "Contact Us", href: "#contact" }
  ];
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gopaljiImgSrc, setGopaljiImgSrc] = useState("/gopaljinew.jpg");
  const [friendsImgSrc, setFriendsImgSrc] = useState("/friends.png");
  const [shrikalyanImgSrc, setShrikalyanImgSrc] = useState("https://res.cloudinary.com/dtrvyelcg/image/upload/v1784136246/screencapture-shree-kalyan-new-vercel-app-2026-07-15-20_45_51_p8h7cg.jpg");
  const [agroshoreImgSrc, setAgroshoreImgSrc] = useState("/agroshoreorganics.com_ (1).png");
  const [gopaljiMobImgSrc, setGopaljiMobImgSrc] = useState("/mob gopalji.jpeg");
  const [friendsMobImgSrc, setFriendsMobImgSrc] = useState("/mob friends.jpeg");
  const [shrikalyanMobImgSrc, setShrikalyanMobImgSrc] = useState("https://res.cloudinary.com/dtrvyelcg/image/upload/v1784136080/shrikalyan_full_u9mll7.jpg");
  const [agroshoreMobImgSrc, setAgroshoreMobImgSrc] = useState("/mob agrosure .jpeg");

  // Creative Atelier Engine Custom Coprocessor State
  const [customBrandInput, setCustomBrandInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentBrandData, setCurrentBrandData] = useState<any>(BRAND_PRESETS.original);
  const [selectedBrandKey, setSelectedBrandKey] = useState("original");
  const [customCoprocessorMessage, setCustomCoprocessorMessage] = useState("");

  // Mapping for the project metadata
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

  const getProjectMetadata = (proj: any, idx: number) => {
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

    // Validate phone: standard international numbers, digits, spaces, plus, minus, parenthesis (Now Required)
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-s./0-9]*$/;
    if (!contactPhone.trim()) {
      errors.phone = "Please enter your phone number.";
    } else if (!phoneRegex.test(contactPhone)) {
      errors.phone = "Please enter a valid phone number format.";
    }

    // Validate vision outline (Now Required)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Handle Preset Quick Clicks
  const selectPreset = (key: string) => {
    setSelectedBrandKey(key);
    setCustomBrandInput("");
    setCurrentBrandData(BRAND_PRESETS[key]);
    setCustomCoprocessorMessage("");
  };

  // Submit to the server-side Gemini Coprocessor
  const handleCoprocessorCraft = async (e: React.FormEvent) => {
    e.preventDefault();
    const promptToSend = customBrandInput.trim();
    if (!promptToSend) return;

    setIsGenerating(true);
    setCustomCoprocessorMessage("");

    try {
      const response = await fetch("/api/craft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: promptToSend }),
      });

      if (!response.ok) {
        throw new Error("Local synthesis triggered.");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // Dynamically form new state matching the elegant reference structures
      setCurrentBrandData({
        tagline: data.tagline || "Artistry. Vision. Curation.",
        headline: data.brandName || promptToSend,
        highlight: data.headline || "Bespoke Digital Canvas.",
        description: data.subheadline || data.aboutDescription || "Meticulously balanced digital storytelling optimized for the peak of search engine authority.",
        workTitle: `Commission Spec: ${promptToSend}`,
        projects: [
          {
            id: "dynamic1",
            title: data.features?.[0]?.title || "The Digital Archetype",
            category: data.features?.[0]?.description?.slice(0, 30) || "Bespoke Portfolio",
            img: "https://picsum.photos/seed/crafted1/600/450"
          },
          {
            id: "dynamic2",
            title: data.features?.[1]?.title || "The Tactile Interface",
            category: data.features?.[1]?.description?.slice(0, 30) || "Curated Framework",
            img: "https://picsum.photos/seed/crafted2/600/450"
          },
          {
            id: "dynamic3",
            title: data.features?.[2]?.title || "Absolute Calibration",
            category: data.features?.[2]?.description?.slice(0, 30) || "Next.js Architecture",
            img: "https://picsum.photos/seed/crafted3/600/450"
          },
          {
            id: "dynamic4",
            title: data.testimonial?.author || "Legacy Preservation",
            category: data.testimonial?.role || "Interactive Masterpiece",
            img: "https://picsum.photos/seed/crafted4/600/450"
          }
        ]
      });
      setSelectedBrandKey("custom");
    } catch (err) {
      console.warn("AI Fallback triggered:", err);
      // Construct an elegant personalized luxury layout locally
      const words = promptToSend.split(" ");
      const formattedBrandName = words.length > 2 ? words.slice(0, 2).join(" ") : promptToSend;

      setCurrentBrandData({
        tagline: `Curated. Tailored. Engineered.`,
        headline: `We Craft Digital Havens`,
        highlight: `For ${formattedBrandName}.`,
        description: `Custom, hand-stitched digital canvases designed to celebrate the timeless heritage, absolute precision, and high-performance layout of your elite commission.`,
        workTitle: `${formattedBrandName} Atelier Collections`,
        projects: [
          {
            id: "fb1",
            title: `${formattedBrandName} Heritage`,
            category: "Bespoke Brand Canvas",
            img: "https://picsum.photos/seed/fallback1/600/450"
          },
          {
            id: "fb2",
            title: "The Tactile Edition",
            category: "Fine Letterpress Spacing",
            img: "https://picsum.photos/seed/fallback2/600/450"
          },
          {
            id: "fb3",
            title: "Absolute Calibration",
            category: "High-Performance Grid",
            img: "https://picsum.photos/seed/fallback3/600/450"
          },
          {
            id: "fb4",
            title: "Legacy Preservation",
            category: "Premium Digital Archive",
            img: "https://picsum.photos/seed/fallback4/600/450"
          }
        ]
      });
      setSelectedBrandKey("custom");
      setCustomCoprocessorMessage("Successfully curated local design archetype.");
    } finally {
      setIsGenerating(false);
    }
  };

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
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-poster-bg {
          background-image: url('https://res.cloudinary.com/dtrvyelcg/image/upload/v1784056206/ChatGPT_Image_Jul_15_2026_12_39_07_AM_vvu6ky.png') !important;
          background-size: cover !important;
          background-position: center !important;
        }
        @media (min-width: 768px) {
          .hero-poster-bg {
            background-image: url('https://res.cloudinary.com/dtrvyelcg/image/upload/v1784054976/download_15_szvr4w.jpg') !important;
          }
        }
        @media (min-width: 1024px) {
          .desktop-poster-adjust {
            margin-left: -2px !important;
            margin-right: 3px !important;
            margin-bottom: 1px !important;
            margin-top: -82px !important;
            padding-bottom: 3px !important;
            padding-top: -4px !important;
            padding-left: -2px !important;
            padding-right: -21px !important;
          }
          .desktop-grid-adjust {
            margin-right: -3px !important;
            padding-bottom: -3px !important;
            padding-right: -3px !important;
            padding-left: -3px !important;
            margin-left: -7px !important;
            margin-top: -3px !important;
            margin-bottom: 1px !important;
            padding-top: 2px !important;
          }
        }
      `}} />
      
      {/* =======================================
          MASTER RED-BORDER VIEWPORT POSTER
          ======================================= */}
      <div 
        className="hero-poster-bg desktop-poster-adjust relative w-full min-h-screen md:min-h-screen bg-brand-paper border-y-[12px] border-x-0 md:border-y-[18px] md:border-x-0 border-brand-red flex flex-col justify-between overflow-hidden shadow-[0_24px_60px_rgba(18,20,26,0.18)]"
      >
        
        {/* Fine interior layout keyline border */}
        <div className="absolute inset-1.5 md:inset-2 border border-brand-charcoal/15 pointer-events-none z-30" />

        {/* Highly Crafted, Animated Digital Designer Corner HUD System */}
        <div className="absolute top-[96px] left-6 md:left-10 z-35 pointer-events-none select-none">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <motion.div 
              animate={shouldReduceMotion ? { scale: 1, opacity: 0.6 } : { scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={shouldReduceMotion ? {} : { repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{ willChange: "transform, opacity" }}
              className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-brand-gold" 
            />
            <motion.div 
              animate={shouldReduceMotion ? { rotate: 0 } : { rotate: 360 }}
              transition={shouldReduceMotion ? {} : { repeat: Infinity, duration: 15, ease: "linear" }}
              style={{ willChange: "transform" }}
              className="absolute top-1 left-1 w-4 h-4 border border-dashed border-brand-charcoal/20 rounded-full"
            />
            <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-brand-vibrant-red rounded-full" />
          </div>
          <div className="absolute top-0 left-10 hidden sm:flex flex-col font-mono text-[7px] md:text-[8px] text-brand-charcoal/65 leading-none gap-1 whitespace-nowrap">
            <span className="font-bold text-brand-charcoal/90">EW_ATELIER_08C-1</span>
            <span className="text-[6px] md:text-[7px] text-brand-gold animate-pulse flex items-center gap-1">
              <span className="w-1 h-1 bg-brand-gold rounded-full" />
              SYSTEM // ACTIVE
            </span>
          </div>
        </div>

        <div className="absolute top-[96px] right-6 md:right-10 z-35 pointer-events-none select-none">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <motion.div 
              animate={shouldReduceMotion ? { scale: 1, opacity: 0.6 } : { scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={shouldReduceMotion ? {} : { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              style={{ willChange: "transform, opacity" }}
              className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-gold" 
            />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-brand-vibrant-red rounded-full" />
            <motion.div 
              animate={shouldReduceMotion ? { scale: 1, opacity: 0.2 } : { scale: [0.8, 1.5, 0.8], opacity: [0, 0.4, 0] }}
              transition={shouldReduceMotion ? {} : { repeat: Infinity, duration: 3, ease: "easeOut" }}
              style={{ willChange: "transform, opacity" }}
              className="absolute -top-1 -right-1 w-6 h-6 border border-brand-gold/30 rounded-full"
            />
          </div>
          <div className="absolute top-0 right-10 hidden sm:flex flex-col font-mono text-[7px] md:text-[8px] text-brand-charcoal/65 leading-none gap-1 text-right whitespace-nowrap">
            <span className="font-bold text-brand-charcoal/90">CALIBRATION // PASS</span>
            <span className="text-[6px] md:text-[7px] text-brand-charcoal/40">SCALE // 1.00:ACTUAL</span>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 md:left-10 z-35 pointer-events-none select-none">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <motion.div 
              animate={shouldReduceMotion ? { scale: 1, opacity: 0.6 } : { scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={shouldReduceMotion ? {} : { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
              style={{ willChange: "transform, opacity" }}
              className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-gold" 
            />
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-brand-vibrant-red rounded-full" />
            <motion.div 
              animate={shouldReduceMotion ? { rotate: 0 } : { rotate: -360 }}
              transition={shouldReduceMotion ? {} : { repeat: Infinity, duration: 25, ease: "linear" }}
              style={{ willChange: "transform" }}
              className="absolute bottom-1 left-1 w-5 h-5 border border-dashed border-brand-charcoal/10 rounded-full flex items-center justify-center"
            >
              <div className="w-[1px] h-3 bg-brand-charcoal/20" />
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-10 hidden sm:flex flex-col font-mono text-[7px] md:text-[8px] text-brand-charcoal/65 leading-none gap-1 whitespace-nowrap">
            <span className="font-bold text-brand-charcoal/90">LAT_COORD_35.67</span>
            <span className="text-[6px] md:text-[7px] text-brand-charcoal/40">LNG_COORD_139.65</span>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 md:right-10 z-35 pointer-events-none select-none">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <motion.div 
              animate={shouldReduceMotion ? { scale: 1, opacity: 0.6 } : { scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={shouldReduceMotion ? {} : { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 3 }}
              style={{ willChange: "transform, opacity" }}
              className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-brand-gold" 
            />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-brand-vibrant-red rounded-full" />
            <motion.div 
              animate={shouldReduceMotion ? { scale: 1, opacity: 0.3 } : { scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
              transition={shouldReduceMotion ? {} : { repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              style={{ willChange: "transform, opacity" }}
              className="absolute bottom-0 right-0 w-3 h-3 bg-brand-gold/20 rounded-full"
            />
          </div>
          <div className="absolute bottom-0 right-10 hidden sm:flex flex-col font-mono text-[7px] md:text-[8px] text-brand-charcoal/65 leading-none gap-1 text-right whitespace-nowrap">
            <span className="font-bold text-brand-charcoal/90">COP_SYNTH // ENGR</span>
            <span className="text-[6px] md:text-[7px] text-brand-gold/85 animate-pulse">EST // 2026</span>
          </div>
        </div>

        {/* Technical drafting dots in grid paper style */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-brand-charcoal) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        {/* Creative Radiating SVG Poster Rays matching the camera's perspective */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-15 mix-blend-multiply">
          <svg className="w-full h-full" viewBox="0 0 1000 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Concentric circles radiating from the bottom-left camera origin */}
            <circle cx="10%" cy="95%" r="300" stroke="var(--color-brand-red)" strokeWidth="1" strokeDasharray="4 8" />
            <circle cx="10%" cy="95%" r="500" stroke="var(--color-brand-red)" strokeWidth="1" />
            <circle cx="10%" cy="95%" r="700" stroke="var(--color-brand-red)" strokeWidth="1.5" strokeDasharray="8 12" />
            <circle cx="10%" cy="95%" r="900" stroke="var(--color-brand-red)" strokeWidth="2" />
            
            {/* Radial rays spreading across the vintage canvas */}
            <line x1="10%" y1="95%" x2="100%" y2="0%" stroke="var(--color-brand-red)" strokeWidth="2.5" />
            <line x1="10%" y1="95%" x2="80%" y2="0%" stroke="var(--color-brand-red)" strokeWidth="1" />
            <line x1="10%" y1="95%" x2="60%" y2="0%" stroke="var(--color-brand-red)" strokeWidth="1.5" strokeDasharray="3 6" />
            <line x1="10%" y1="95%" x2="40%" y2="0%" stroke="var(--color-brand-red)" strokeWidth="2" strokeDasharray="10 15" />
            <line x1="10%" y1="95%" x2="20%" y2="0%" stroke="var(--color-brand-red)" strokeWidth="1" />
            <line x1="10%" y1="95%" x2="100%" y2="20%" stroke="var(--color-brand-red)" strokeWidth="1.5" />
            <line x1="10%" y1="95%" x2="100%" y2="45%" stroke="var(--color-brand-red)" strokeWidth="2" />
            <line x1="10%" y1="95%" x2="100%" y2="70%" stroke="var(--color-brand-red)" strokeWidth="1" strokeDasharray="6 6" />
          </svg>
        </div>



        <Header />

        {/* HERO CONTENT AREA */}
        <section id="home" className="flex-1 flex items-center w-full max-w-7xl mx-auto px-4 md:px-12 xl:pl-28 pb-12 max-md:pb-0 pt-28 lg:pt-36 relative lg:static z-10" suppressHydrationWarning={true}>
          
          {/* Elegant Left Corner Background Drafting Compass Animation */}
          <div className="absolute top-[120px] left-[4%] w-40 h-40 md:w-56 md:h-56 opacity-[0.55] pointer-events-none select-none z-0 block">
            <motion.div
              animate={shouldReduceMotion ? { rotate: 0 } : { rotate: 360 }}
              transition={shouldReduceMotion ? {} : { repeat: Infinity, duration: 40, ease: "linear" }}
              style={{ willChange: "transform" }}
              className="w-full h-full"
            >
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                {/* Concentric blueprint circles in red and gold */}
                <circle cx="50" cy="50" r="48" stroke="var(--color-brand-vibrant-red)" strokeWidth="0.8" strokeDasharray="1 3" />
                <circle cx="50" cy="50" r="42" stroke="var(--color-brand-gold)" strokeWidth="1.2" />
                <circle cx="50" cy="50" r="30" stroke="var(--color-brand-vibrant-red)" strokeWidth="0.8" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="15" stroke="var(--color-brand-gold)" strokeWidth="1.2" />
                
                {/* Drafting crosshairs */}
                <line x1="50" y1="0" x2="50" y2="100" stroke="var(--color-brand-charcoal)" strokeWidth="0.25" strokeDasharray="2 2" opacity="0.3" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="var(--color-brand-charcoal)" strokeWidth="0.25" strokeDasharray="2 2" opacity="0.3" />
                
                {/* Compass Needle */}
                <polygon points="50,15 47,50 53,50" fill="var(--color-brand-gold)" opacity="0.9" />
                <polygon points="50,85 47,50 53,50" fill="var(--color-brand-vibrant-red)" opacity="0.9" />
              </svg>
            </motion.div>
            <motion.div
              animate={shouldReduceMotion ? { scale: 1, opacity: 0.8 } : { scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={shouldReduceMotion ? {} : { repeat: Infinity, duration: 5, ease: "easeInOut" }}
              style={{ willChange: "transform, opacity" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-8 h-8 border-2 border-brand-gold rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-brand-vibrant-red rounded-full animate-pulse" />
              </div>
            </motion.div>
          </div>

          {/* Elegant Right Corner Background Astrolabe Blueprint Animation */}
          <div className="absolute top-[420px] md:top-[180px] right-[4%] w-48 h-48 md:w-72 md:h-72 opacity-[0.55] pointer-events-none select-none z-0 block">
            <motion.div
              animate={shouldReduceMotion ? { rotate: 0 } : { rotate: -360 }}
              transition={shouldReduceMotion ? {} : { repeat: Infinity, duration: 50, ease: "linear" }}
              style={{ willChange: "transform" }}
              className="w-full h-full"
            >
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                {/* Outer astrolabe coordinates ticks and circles in red and gold */}
                <circle cx="50" cy="50" r="48" stroke="var(--color-brand-vibrant-red)" strokeWidth="1" strokeDasharray="0.5 1.5" />
                <circle cx="50" cy="50" r="45" stroke="var(--color-brand-gold)" strokeWidth="0.6" />
                <circle cx="50" cy="50" r="35" stroke="var(--color-brand-vibrant-red)" strokeWidth="1.2" strokeDasharray="6 6" />
                
                {/* Radiating lines every 30 degrees */}
                <path d="M 50 2 L 50 98 M 2 50 L 98 50 M 16 16 L 84 84 M 16 84 L 84 16 M 26.8 6.7 L 73.2 93.3 M 6.7 26.8 L 93.3 73.2 M 6.7 73.2 L 93.3 26.8 M 26.8 93.3 L 73.2 6.7" stroke="var(--color-brand-charcoal)" strokeWidth="0.2" opacity="0.3" />
                
                <circle cx="50" cy="50" r="18" stroke="var(--color-brand-gold)" strokeWidth="1.2" />
              </svg>
            </motion.div>
          </div>

          {/* Main Grid Content */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="desktop-grid-adjust grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative lg:static z-10"
          >
            
            {/* Left Column: Creative Text Details */}
            <div className="lg:col-span-6 flex flex-col space-y-6 text-left max-md:mb-6">
              
              {/* Creative 8C-1 System Badge Row */}
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-brand-red text-brand-cream text-[9px] font-mono font-black uppercase tracking-[0.25em]">
                  MODEL 8C-1
                </span>
                <span className="h-[1px] w-8 bg-brand-charcoal/20" />
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-brand-charcoal/50 font-bold">
                  Aesthetic Blueprint Mode
                </span>
              </div>

              {/* Tagline */}
              <span className="font-display italic text-lg md:text-xl text-brand-clay tracking-wide font-medium block">
                {currentBrandData.tagline}
              </span>

              {/* Headline with custom underlined text */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-brand-charcoal tracking-tight leading-[1.05] uppercase">
                <span className="text-brand-red">
                  {currentBrandData.headline}
                </span> <br />
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: shouldReduceMotion ? 0.1 : 0.4, duration: shouldReduceMotion ? 0.2 : 0.6, ease: "easeOut" }}
                  style={{ willChange: "transform, opacity" }}
                  className="text-brand-vibrant-red font-semibold italic capitalize font-display relative inline-block"
                >
                  {currentBrandData.highlight}
                  <motion.span
                    initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: shouldReduceMotion ? 0.15 : 0.9, duration: shouldReduceMotion ? 0.2 : 0.8, ease: "easeInOut" }}
                    style={{ transformOrigin: "left", willChange: "transform" }}
                    className="absolute left-0 bottom-1.5 h-[6px] w-full bg-brand-vibrant-red/25 -z-10 rounded-full"
                  />
                </motion.span>
              </h1>

              {/* Descriptive Paragraph */}
              <div className="relative border-l-4 border-brand-gold pl-5 py-3 my-3 bg-brand-paper/60 backdrop-blur-sm pr-4 rounded-r-md shadow-[4px_4px_0px_0px_rgba(201,162,39,0.15)] border border-brand-charcoal/5">
                <p className="font-sans text-sm md:text-base text-brand-charcoal font-semibold leading-relaxed max-w-lg">
                  {currentBrandData.description}
                </p>
              </div>

              {/* Creative Tactile Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/portfolio"
                  className="px-6 py-4 bg-brand-charcoal text-brand-cream text-xs font-bold uppercase tracking-widest transition-all hover:bg-brand-red hover:shadow-[4px_4px_0px_0px_rgba(18,20,26,1)] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0"
                >
                  View Our Work ↗
                </Link>
                <Link
                  href="/services"
                  className="px-6 py-4 border-2 border-brand-charcoal hover:border-brand-red text-brand-charcoal hover:text-brand-red text-xs font-bold uppercase tracking-widest transition-all hover:bg-brand-red/5"
                >
                  Our Services ↗
                </Link>
              </div>

              {/* Trust Indicator Stack */}
              <div className="hidden md:flex items-center gap-4 pt-6 border-t border-brand-charcoal/10">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
                  ].map((src, i) => (
                    <div key={i} className="w-9 h-9 rounded-full border border-brand-cream overflow-hidden relative">
                      <Image
                        src={src}
                        alt="Trusted Client Profile"
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                  <div className="w-9 h-9 rounded-full bg-brand-red border border-brand-cream text-brand-cream text-[10px] font-bold flex items-center justify-center font-sans">
                    20+
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-sans text-xs font-bold text-brand-charcoal uppercase tracking-wider leading-tight">
                    Trusted by 20+ clients
                  </span>
                  <span className="font-sans text-[10px] text-brand-charcoal/50 uppercase tracking-widest leading-none mt-0.5">
                    globally worldwide
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Premium Framed Artwork Column */}
            <div className="lg:absolute lg:top-[10px] lg:bottom-0 lg:right-1 xl:right-6 lg:w-[440px] relative flex flex-col items-center justify-center max-md:pt-0 max-md:pb-0 z-20">
              
              {/* Multi-layered Framed Display with premium soft shadow and creative black viewfinder HUD detailing */}
              <div className="relative w-full max-w-[440px] lg:h-full lg:aspect-auto aspect-[1074/1465] max-md:aspect-auto max-md:h-[520px] overflow-hidden bg-brand-cream shadow-[0_24px_50px_rgba(11,27,58,0.15)] hover:shadow-[0_32px_65px_rgba(11,27,58,0.22)] transition-all duration-500 hover:scale-[1.015] max-md:-mx-4 max-md:w-[calc(100%+2rem)] max-md:max-w-none max-md:shadow-none max-md:hover:scale-100 z-20">
                <Image
                  src="https://res.cloudinary.com/dtrvyelcg/image/upload/v1783525342/ChatGPT_Image_Jul_8_2026_03_24_57_AM_pvot5h.png"
                  alt="Express Webcraft Showcase Portfolio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover scale-[1.15] origin-center"
                  priority
                  referrerPolicy="no-referrer"
                />

                {/* Premium Beige Border Frame to separate the image from the wallpaper background */}
                <div className="absolute inset-0 border-[10px] md:border-[12px] border-[#E6DFD3] pointer-events-none z-35" />
                
                {/* Rule of Thirds camera grid lines overlay (Creative Black Detailing) */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none z-25 opacity-10">
                  <div className="border-b border-r border-brand-charcoal" />
                  <div className="border-b border-r border-brand-charcoal" />
                  <div className="border-b border-brand-charcoal" />
                  <div className="border-b border-r border-brand-charcoal" />
                  <div className="border-b border-r border-brand-charcoal" />
                  <div className="border-b border-brand-charcoal" />
                  <div className="border-r border-brand-charcoal" />
                  <div className="border-r border-brand-charcoal" />
                  <div className="border-brand-charcoal" />
                </div>

                {/* Central Focus Crosshair Reticle (Creative Black Detailing) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                  <div className="relative w-14 h-14 flex items-center justify-center">
                     <div className="w-1.5 h-1.5 bg-brand-charcoal/80 rounded-full" />
                     <div className="w-10 h-10 border border-brand-charcoal/30 rounded-full" />
                     <div className="absolute w-6 h-[1px] bg-brand-charcoal/50" />
                     <div className="absolute h-6 w-[1px] bg-brand-charcoal/50" />
                     {/* Focus lock brackets */}
                     <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-brand-charcoal/80" />
                     <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-brand-charcoal/80" />
                     <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-brand-charcoal/80" />
                     <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-brand-charcoal/80" />
                  </div>
                </div>

                {/* Technical Corner Brackets (Creative Black Detailing) */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-brand-charcoal/70 pointer-events-none z-30" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-brand-charcoal/70 pointer-events-none z-30" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-brand-charcoal/70 pointer-events-none z-30" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-brand-charcoal/70 pointer-events-none z-30" />

                {/* Exposure Value / Meter Scale on Right Side (Creative Black Detailing) */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-30 font-mono text-[7px] text-brand-charcoal/70">
                  <span>+2.0</span>
                  <div className="w-1.5 h-[1px] bg-brand-charcoal/40" />
                  <div className="w-1 h-[1px] bg-brand-charcoal/30" />
                  <div className="w-1.5 h-[1px] bg-brand-charcoal/40" />
                  <div className="w-1 h-[1px] bg-brand-charcoal/30" />
                  <div className="w-3 h-[1px] bg-brand-charcoal/80 relative flex items-center justify-end">
                    <span className="absolute right-4 text-[6px] font-bold">▶ 0</span>
                  </div>
                  <div className="w-1 h-[1px] bg-brand-charcoal/30" />
                  <div className="w-1.5 h-[1px] bg-brand-charcoal/40" />
                  <div className="w-1 h-[1px] bg-brand-charcoal/30" />
                  <div className="w-1.5 h-[1px] bg-brand-charcoal/40" />
                  <span>-2.0</span>
                </div>

                {/* Aspect Ratio & Safe Areas (Creative Thin Outlines) */}
                <div className="absolute inset-5 border border-brand-charcoal/5 pointer-events-none z-30" />
                <div className="absolute inset-8 border border-dashed border-brand-charcoal/5 pointer-events-none z-30" />

                {/* Technical HUD Overlay Labels in Crisp Black / Mono */}
                <div className="absolute inset-x-4 top-4 flex justify-between pointer-events-none z-30 font-mono text-[8px] text-brand-charcoal/80 uppercase tracking-widest select-none">
                  <div className="flex items-center gap-1.5 bg-brand-cream/80 px-1.5 py-0.5 border border-brand-charcoal/15 backdrop-blur-[1px]">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
                    <span>LIVE VIEW</span>
                  </div>
                  <div className="bg-brand-cream/80 px-1.5 py-0.5 border border-brand-charcoal/15 backdrop-blur-[1px]">
                    <span>F/1.2 • 50MM</span>
                  </div>
                </div>

                {/* Shutter Settings bottom labels */}
                <div className="absolute inset-x-4 bottom-4 flex justify-between pointer-events-none z-30 font-mono text-[8px] text-brand-charcoal/80 uppercase tracking-widest select-none">
                  <div className="bg-brand-cream/80 px-1.5 py-0.5 border border-brand-charcoal/15 backdrop-blur-[1px]">
                    <span>1/250S • ISO 100</span>
                  </div>
                  <div className="bg-brand-cream/80 px-1.5 py-0.5 border border-brand-charcoal/15 backdrop-blur-[1px]">
                    <span>MF [STABILIZED]</span>
                  </div>
                </div>
              </div>

              {/* Vintage text stamp matching reference image */}
              <div className="text-center mt-6 lg:mt-0 lg:absolute lg:bottom-16 lg:right-[calc(100%+24px)] lg:left-auto lg:translate-x-0 bg-brand-cream/90 lg:px-4 lg:py-2.5 lg:border lg:border-brand-charcoal/15 lg:backdrop-blur-sm max-w-xs space-y-1 z-30 max-md:absolute max-md:bottom-6 max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-[calc(100%-2rem)] max-md:mt-0">
                <span className="font-sans font-black text-xs uppercase tracking-[0.25em] text-brand-charcoal block">
                  CAPTURE YOUR VISION
                </span>
                <p className="font-sans text-[10px] text-brand-red/80 uppercase tracking-wider italic font-semibold">
                  Turn concepts into timeless masterpieces.
                </p>
                <div className="h-[2px] bg-brand-red/25 w-32 mx-auto mt-2" />
              </div>

            </div>

          </motion.div>

        </section>



      </div>

      {/* Thin beige border between page end */}
      <div className="w-full h-px bg-[#E6DFD3] relative z-30" />



      {/* =======================================
          OUR AIM SECTION
          ======================================= */}
      <section id="atelier" className="max-w-7xl mx-auto px-4 md:px-12 py-16 relative z-20 scroll-mt-[80px]" suppressHydrationWarning={true}>
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
            {/* High-quality cinematic dark abstract motion graphics fallback from Mixkit */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technological-glowing-lines-loop-41855-large.mp4" type="video/mp4" />
          </video>

          {/* Clean ambient subtle light overlay to blend edges */}
          <div className="absolute inset-0 bg-white/5 z-10 pointer-events-none" />

          {/* Subtle elegant gold watermark compass background */}
          <div className="absolute right-[-40px] bottom-[-40px] opacity-[0.03] pointer-events-none z-10">
            <Compass className="w-80 h-80 text-brand-gold rotate-45" />
          </div>

          {/* Main content container - fully transparent, no white screen, text left-aligned directly over video */}
          <div className="relative z-20 max-w-2xl py-16 md:py-24 text-left space-y-6 pl-4 md:pl-12">
            
            <div className="flex flex-col items-start space-y-2">
              <span className="font-sans text-[11px] font-black tracking-[0.3em] text-brand-clay uppercase block drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
                OUR SERVICES
              </span>
              <div className="h-[2px] bg-brand-gold w-12" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-brand-charcoal leading-tight uppercase drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
              You dream it. <br />
              <span className="text-brand-red">We ship it.</span>
            </h2>

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

      {/* Thin beige border between page end */}
      <div className="w-full h-px bg-[#E6DFD3] relative z-30" />

      {/* Services Section starts below */}


      {/* =======================================
          SERVICES SECTION ("WHAT WE PROVIDE")
          ======================================= */}
      <section 
        id="services" 
        className="w-full py-24 border-t border-b border-brand-charcoal/10 relative overflow-hidden z-20 scroll-mt-[80px]" 
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

          {/* Services Grid (2x4 on desktop/tablet, 1 column on mobile) */}
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
                {/* Visual hint related to the service - Absolutely positioned custom inline SVG */}
                {service.bgSvg}

                {/* Top border gold accent line only on card hover */}
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

          {/* Section concluding CTA to dedicated Services index */}
          <div className="mt-12 text-center relative z-20">
            <Link
              href="/services"
              className="inline-flex px-8 py-4 bg-brand-gold hover:bg-white text-brand-charcoal text-[11px] font-mono tracking-widest uppercase font-black transition-all shadow-[4px_4px_0px_0px_rgba(11,27,58,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
            >
              Explore All Creative Departments & Specs ↗
            </Link>
          </div>

        </div>
      </section>

      {/* Thin beige border between page end */}
      <div className="w-full h-px bg-[#E6DFD3] relative z-30" />

      {/* =======================================
          PORTFOLIO SECTION ("OUR WORK")
          ======================================= */}
      <section 
        id="portfolio" 
        className="w-full py-20 relative z-10 scroll-mt-[80px]" 
        style={{ 
          backgroundImage: "url('https://res.cloudinary.com/dtrvyelcg/image/upload/v1784128276/%D0%9E%D0%B1%D0%BE%D0%B8_dxm3wn.jpg')", 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }} 
        suppressHydrationWarning={true}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-20">
          
          {/* Header row from reference image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-charcoal/15 pb-6 mb-12">
          <div className="space-y-1">
            <span className="font-sans text-[11px] font-black tracking-widest text-brand-clay uppercase block">
              OUR WORK
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-black text-brand-charcoal uppercase">
              Built to Inspire. Designed to Perform.
            </h2>
          </div>
          <span className="font-mono text-[9px] uppercase text-brand-clay font-bold tracking-widest mt-4 md:mt-0">
            SYSTEM // SELECTION ACTIVE
          </span>
        </div>

        {/* Continuous Sequential Showcase of all projects */}
        <div className="space-y-24">
          {currentBrandData.projects.slice(0, 4).map((proj: any, idx: number) => {
            const meta = getProjectMetadata(proj, idx);
            return (
              <div key={proj.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch border-b border-brand-charcoal/10 pb-16 last:border-b-0 last:pb-0">
                
                {/* LEFT SIDE: One BIG creative framed placeholder */}
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
                            if (proj.id === "gopalji") {
                              setGopaljiImgSrc("https://picsum.photos/seed/coconut/600/450");
                            } else if (proj.id === "friends") {
                              setFriendsImgSrc("https://picsum.photos/seed/travel/600/450");
                            } else if (proj.id === "shrikalyan") {
                              setShrikalyanImgSrc("https://picsum.photos/seed/kalyan/600/450");
                            } else if (proj.id === "agroshore") {
                              setAgroshoreImgSrc("https://picsum.photos/seed/organic/600/450");
                            }
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
                            if (proj.id === "gopalji") {
                              setGopaljiMobImgSrc("https://picsum.photos/seed/coconut/600/450");
                            } else if (proj.id === "friends") {
                              setFriendsMobImgSrc("https://picsum.photos/seed/travel/600/450");
                            } else if (proj.id === "shrikalyan") {
                              setShrikalyanMobImgSrc("https://picsum.photos/seed/kalyan/600/450");
                            } else if (proj.id === "agroshore") {
                              setAgroshoreMobImgSrc("https://picsum.photos/seed/organic/600/450");
                            }
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

                    {/* Viewfinder focus box graphics (Creative HUD overlay) */}
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

                {/* RIGHT SIDE: Summary of the project */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-brand-paper border border-brand-charcoal/15 p-6 md:p-8 shadow-sm relative">
                  
                  {/* Premium Dark Blue Border Frame to separate the card from the background */}
                  <div className="absolute inset-0 border-[10px] md:border-[12px] border-[#000052] pointer-events-none z-35" />
                  
                  {/* Elegant framing ornaments */}
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

                    {/* Dynamic Project Summary copywriting */}
                    <div className="space-y-4">
                      <p className="font-sans text-xs md:text-sm text-brand-charcoal/85 leading-relaxed">
                        {meta.description}
                      </p>

                      {/* Technical stats panel */}
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

                      {/* Key Achievements Bullet points */}
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
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-charcoal hover:bg-brand-gold text-brand-cream hover:text-brand-charcoal text-[9px] font-bold uppercase tracking-widest transition-colors"
                    >
                      <span>Inquire About Build</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Section concluding CTA to dedicated Portfolio index */}
        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex px-8 py-4 bg-brand-red hover:bg-brand-charcoal text-brand-cream text-[11px] font-mono tracking-widest uppercase font-black transition-all shadow-[4px_4px_0px_0px_rgba(201,162,39,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
          >
            Explore All Landmark Commissions & Case Studies ↗
          </Link>
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
            {/* Decorative vintage frame elements */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-brand-charcoal/40" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-brand-charcoal/40" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-brand-charcoal/40" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-brand-charcoal/40" />

            {/* Double quote badge decoration */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-charcoal text-brand-gold w-10 h-10 rounded-full flex items-center justify-center border-2 border-brand-cream">
              <Quote className="w-4 h-4 fill-brand-gold" />
            </div>

            {/* Testimonial slider body with Framer Motion for smooth exit/entry */}
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
                  {/* Main quote */}
                  <p className="font-sans text-sm sm:text-base md:text-lg text-brand-charcoal/90 leading-relaxed font-light italic px-4">
                    &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
                  </p>

                  {/* Author metadata details */}
                  <div className="space-y-1">
                    <h4 className="font-display text-xs sm:text-sm font-black text-brand-charcoal uppercase tracking-wider">
                      {TESTIMONIALS[activeTestimonial].author}
                    </h4>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-brand-clay">
                      {TESTIMONIALS[activeTestimonial].role} &mdash; {TESTIMONIALS[activeTestimonial].company}
                    </p>
                  </div>

                  {/* Context Tag details */}
                  <div className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-3 bg-brand-charcoal/5 border border-brand-charcoal/10 px-3 py-1.5 font-mono text-[9px] text-brand-charcoal/70">
                    <span>PROJECT: {TESTIMONIALS[activeTestimonial].project}</span>
                    <span className="hidden md:inline w-1.5 h-1.5 bg-brand-gold rounded-full" />
                    <span className="text-brand-gold font-bold">{TESTIMONIALS[activeTestimonial].metric}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls: Dots and arrows */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-brand-charcoal/10">
                {/* Left Arrow Button */}
                <button
                  onClick={() => {
                    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
                  }}
                  className="p-1.5 border border-brand-charcoal/20 hover:border-brand-charcoal hover:bg-brand-charcoal hover:text-brand-cream transition-colors text-brand-charcoal/60 cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                </button>

                {/* Progress indicator dots */}
                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`w-2 h-2 rounded-none border border-brand-charcoal transition-all cursor-pointer ${
                        activeTestimonial === idx ? "bg-brand-gold w-4" : "bg-transparent hover:bg-brand-charcoal/20"
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Right Arrow Button */}
                <button
                  onClick={() => {
                    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
                  }}
                  className="p-1.5 border border-brand-charcoal/20 hover:border-brand-charcoal hover:bg-brand-charcoal hover:text-brand-cream transition-colors text-brand-charcoal/60 cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        </div>
      </section>

      {/* Thin beige border between page end */}
      <div className="w-full h-px bg-[#E6DFD3] relative z-30" />

      {/* =======================================
          WHY US SECTION ("The difference is everything")
          ======================================= */}
      <section 
        id="process" 
        className="w-full py-20 relative z-10 scroll-mt-[80px]" 
        style={{ 
          backgroundImage: "url('https://res.cloudinary.com/dtrvyelcg/image/upload/v1784054975/Download_premium_image_of_Landscapes_mountain_outdoors_desert_by_Sasi_about_abstract_mobile_wallpapers_earth_tone_wedding_background_iphone_wallpaper_plain_earth_tone_wallpaper_iphone_and_bridal_wallpaper_ze2vua.jpg')", 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
        suppressHydrationWarning={true}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Section Title & 4 Pillar blocks */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            <div className="space-y-2">
              <span className="font-sans text-[11px] font-black tracking-widest text-brand-clay uppercase block">
                WHY US
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-brand-charcoal uppercase leading-tight">
                The difference is <br />
                <span className="text-brand-red">everything.</span>
              </h2>
            </div>

            {/* Grid of 4 Pillars */}
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
                  {/* Accent mini ornament */}
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-brand-gold rounded-full opacity-60" />

                  <div className="space-y-3">
                    <span className="font-mono text-xs font-black text-brand-clay block">
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

          {/* Right Column: Creative Desk Stats & Polaroid Collage (Pristine Desk Aesthetic) */}
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

            {/* Layered Polaroid Prints Collage representing pure design craft */}
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

              {/* A classic angled wooden pencil element overlay representing manual design */}
              <div className="absolute bottom-[-10px] w-28 h-1 bg-[#4a3424] rotate-[35deg] translate-x-4 shadow-md z-30 opacity-70 pointer-events-none rounded-sm" />

            </div>

          </div>

          {/* Section concluding CTA to dedicated Why Us and Process index */}
          <div className="col-span-1 lg:col-span-12 mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20">
            <Link
              href="/why-us"
              className="inline-flex px-6 py-3.5 bg-brand-charcoal hover:bg-brand-red text-brand-cream text-[10px] font-mono tracking-widest uppercase font-black transition-all shadow-[3px_3px_0px_0px_rgba(201,162,39,1)]"
            >
              Why Outstanding Brands Choose Us ↗
            </Link>
            <Link
              href="/process"
              className="inline-flex px-6 py-3.5 border-2 border-brand-charcoal hover:border-brand-red text-brand-charcoal hover:text-brand-red text-[10px] font-mono tracking-widest uppercase font-black transition-all bg-white/20"
            >
              Our Complete 4-Stage Creative Process ↗
            </Link>
          </div>

          {/* Interactive FAQ Accordion with SEO Schema */}
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

              {/* Additional Guide / Pricing links for premium funnel conversion */}
              <div className="pt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20">
                <Link
                  href="/faq"
                  className="inline-flex px-5 py-3 bg-brand-charcoal hover:bg-brand-red text-brand-cream text-[10px] font-mono tracking-widest uppercase font-black transition-all shadow-[2px_2px_0px_0px_rgba(201,162,39,1)]"
                >
                  View Complete FAQs Handbook ↗
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex px-5 py-3 border border-brand-charcoal hover:border-brand-red text-brand-charcoal hover:text-brand-red text-[10px] font-mono tracking-widest uppercase font-black transition-all bg-white/20"
                >
                  Check Development Pricing & Packages ↗
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Thin beige border between page end */}
    <div className="w-full h-px bg-[#E6DFD3] relative z-30" />

      {/* =======================================
          FOOTER HERO CALL-TO-ACTION ("Let's build something...")
          ======================================= */}
      <section id="contact" className="w-full bg-brand-charcoal text-brand-cream py-16 mt-12 ripped-border-top relative overflow-hidden z-10 scroll-mt-[80px]" suppressHydrationWarning={true}>
        <div className="max-w-4xl mx-auto px-4 md:px-12 text-center relative z-20 space-y-6">
          
          <span className="font-display italic text-lg text-brand-gold tracking-wide font-medium block">
            Ready to create something amazing?
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-black uppercase text-brand-cream leading-tight">
            Let&apos;s build something <br />
            extraordinary together.
          </h2>

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

                    {/* Selected Service (Budget removed) */}
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

      <Footer />

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-charcoal/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#1c1d24] border-2 border-brand-gold max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 relative text-brand-cream space-y-6 shadow-2xl"
            >
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-brand-gold/30" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-brand-gold/30" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-brand-gold/30" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-brand-gold/30" />

              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="absolute top-4 right-4 text-brand-cream/60 hover:text-brand-gold transition-colors p-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 border-b border-white/10 pb-4">
                <span className="font-mono text-[9px] text-brand-gold tracking-widest uppercase block">
                  ✦ LEGAL CODEX // PROTOCOL
                </span>
                <h3 className="font-display text-2xl font-black uppercase text-brand-cream">
                  Privacy Policy
                </h3>
                <p className="font-mono text-[9px] text-brand-cream/50 uppercase">
                  Last Updated: July 2026
                </p>
              </div>

              <div className="space-y-4 font-sans text-xs md:text-sm text-brand-cream/80 leading-relaxed font-light">
                <p>
                  At <strong className="text-brand-gold">Express Webcraft</strong>, we operate with complete transparency, absolute discretion, and uncompromising digital safety. This document details how we handle information submitted to our elite design consultancy.
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-display text-xs font-black uppercase text-brand-cream tracking-wide">
                    1. Information Collection
                  </h4>
                  <p>
                    We collect only standard, explicitly provided business contact information via our voluntary commission inquiry form: including names, company designations, active email addresses, phone coordinates, and high-level architectural project visions.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-display text-xs font-black uppercase text-brand-cream tracking-wide">
                    2. Strategic Data Utilization
                  </h4>
                  <p>
                    Your details are processed strictly to prepare design briefs, compute precise performance target estimates, verify waitlist quotas, and schedule face-to-face brief calls on our private ledger.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-display text-xs font-black uppercase text-brand-cream tracking-wide">
                    3. No Third-Party Tracking
                  </h4>
                  <p>
                    We hold a strict stance against automated user brokerage. We do not rent, lease, trade, or distribute your email addresses or company profiles to advertising syndicates. Any client data is retained privately under high-grade secure server sandboxes.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-display text-xs font-black uppercase text-brand-cream tracking-wide">
                    4. Analytical Telemetry
                  </h4>
                  <p>
                    We employ simple, anonymized telemetry tracking to gauge application load latency and click-through optimization. No personal cookies are logged during these visual audits.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-center">
                <button
                  onClick={() => setIsPrivacyOpen(false)}
                  className="px-6 py-2 bg-brand-gold text-brand-charcoal text-[10px] font-bold uppercase tracking-widest hover:bg-brand-cream hover:text-brand-charcoal transition-all cursor-pointer"
                >
                  Acknowledge Protocol
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terms of Service Modal */}
      <AnimatePresence>
        {isTermsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-charcoal/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#1c1d24] border-2 border-brand-gold max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 relative text-brand-cream space-y-6 shadow-2xl"
            >
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-brand-gold/30" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-brand-gold/30" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-brand-gold/30" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-brand-gold/30" />

              <button
                onClick={() => setIsTermsOpen(false)}
                className="absolute top-4 right-4 text-brand-cream/60 hover:text-brand-gold transition-colors p-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 border-b border-white/10 pb-4">
                <span className="font-mono text-[9px] text-brand-gold tracking-widest uppercase block">
                  ✦ TERMS OF ENGAGEMENT // PROTOCOL
                </span>
                <h3 className="font-display text-2xl font-black uppercase text-brand-cream">
                  Terms of Service
                </h3>
                <p className="font-mono text-[9px] text-brand-cream/50 uppercase">
                  Last Updated: July 2026
                </p>
              </div>

              <div className="space-y-4 font-sans text-xs md:text-sm text-brand-cream/80 leading-relaxed font-light">
                <p>
                  Accessing our services or initiating a website commission proposal establishes consent to these Terms of Engagement. Please review these parameters thoroughly.
                </p>

                <div className="space-y-2">
                  <h4 className="font-display text-xs font-black uppercase text-brand-cream tracking-wide">
                    1. Scope of Commissions
                  </h4>
                  <p>
                    All project builds are custom-tailored on top of standard Next.js, React, and Tailwind CSS architectures. Specifications, specific typography setups, and asset provisions are fully defined and agreed upon inside a dedicated Statement of Work (SOW).
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-display text-xs font-black uppercase text-brand-cream tracking-wide">
                    2. Timelines & Performance Guarantees
                  </h4>
                  <p>
                    Our general delivery standard is a turnkey launch blueprint completed in approximately 7 business days from formal contract signoff. All design parameters target an outstanding mobile visual score and strict SEO validation checkpoints.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-display text-xs font-black uppercase text-brand-cream tracking-wide">
                    3. Revision Entitlement
                  </h4>
                  <p>
                    To secure absolute client satisfaction, we offer exhaustive visual refinement passes within the scope of the original blueprint, ensuring your exact aesthetic alignment is captured flawlessly.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-display text-xs font-black uppercase text-brand-cream tracking-wide">
                    4. Intellectual Curation Ownership
                  </h4>
                  <p>
                    Upon complete reconciliation of outstanding commission fees, all custom layout files, responsive assets, domain maps, and high-performance codes transition entirely and exclusively to client ownership.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-center">
                <button
                  onClick={() => setIsTermsOpen(false)}
                  className="px-6 py-2 bg-brand-gold text-brand-charcoal text-[10px] font-bold uppercase tracking-widest hover:bg-brand-cream hover:text-brand-charcoal transition-all cursor-pointer"
                >
                  Accept Conditions
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
          <a
            href="#contact"
            onClick={() => Analytics.trackCtaClick("Floating Sticky Let's Talk", "sticky_bubble")}
            className="flex items-center justify-center w-10 h-10 bg-brand-charcoal border-2 border-brand-charcoal text-brand-cream shadow-[4px_4px_0px_0px_rgba(201,162,39,1)] hover:shadow-[2px_2px_0px_0px_rgba(201,162,39,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all group"
            aria-label="Scroll to Commission Form"
          >
            <Send className="w-4 h-4 text-brand-gold group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </div>

    </div>
  );
}
