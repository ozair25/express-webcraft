"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "@/lib/firebase/config";
import {
  Search,
  Filter,
  LogOut,
  Trash2,
  CheckCircle,
  Clock,
  Archive,
  Download,
  Mail,
  Phone,
  Briefcase,
  DollarSign,
  FileText,
  User as UserIcon,
  Globe,
  Loader2,
  X,
  ChevronRight,
  Shield,
  ExternalLink,
} from "lucide-react";

export default function AdminPage() {
  // Auth state
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Login form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // Enquiries data state
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [enquiriesLoading, setEnquiriesLoading] = useState(true);

  // Filters & Search states
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [serviceFilter, setServiceFilter] = useState("All");

  // Selection for details view
  const [selectedEnquiry, setSelectedEnquiry] = useState<any | null>(null);

  // Setup account API trigger status
  const [setupMessage, setSetupMessage] = useState("");

  // Track auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser && currentUser.email === "sayedozair25@gmail.com") {
        setUser(currentUser);
        const idToken = await currentUser.getIdToken();
        setToken(idToken);
      } else {
        setUser(null);
        setToken(null);
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Set up real-time listener for enquiries when authenticated
  useEffect(() => {
    if (!user) {
      // Don't update state synchronously inside the effect if there's no user to avoid cascading renders
      return;
    }

    const q = query(collection(db, "enquiries"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const list: any[] = [];
        snapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setEnquiries(list);
        setEnquiriesLoading(false);
      },
      (error) => {
        console.error("Firestore live listener failed:", error);
        setEnquiriesLoading(false);
      }
    );

    return () => unsubscribe();
  }, [user]);

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    // Validate that only the official admin email can log in
    if (email.trim().toLowerCase() !== "sayedozair25@gmail.com") {
      setLoginError("Access Denied: Only the specified administrator can access this panel.");
      return;
    }

    setLoginLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      console.error("Login failed:", err);
      setLoginError(err.message || "Authentication failed. Please check your credentials.");
    } finally {
      setLoginLoading(false);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setToken(null);
      setSelectedEnquiry(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  // Update Enquiry Status
  const updateStatus = async (id: string, newStatus: string) => {
    if (!token) return;

    try {
      const response = await fetch(`/api/enquiries/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to update status.");
      }

      // Update selected view if currently open
      if (selectedEnquiry && selectedEnquiry.id === id) {
        setSelectedEnquiry((prev: any) => ({ ...prev, status: newStatus }));
      }
    } catch (err: any) {
      alert(`Error updating status: ${err.message}`);
    }
  };

  // Delete Enquiry
  const deleteEnquiry = async (id: string) => {
    if (!token) return;
    if (!window.confirm("Are you absolutely sure you want to delete this enquiry? This action cannot be undone.")) {
      return;
    }

    try {
      const response = await fetch(`/api/enquiries/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to delete enquiry.");
      }

      // Close details if deleted
      if (selectedEnquiry && selectedEnquiry.id === id) {
        setSelectedEnquiry(null);
      }
    } catch (err: any) {
      alert(`Error deleting enquiry: ${err.message}`);
    }
  };

  // Export Enquiries as CSV
  const exportCSV = () => {
    const dataToExport = getFilteredEnquiries();
    if (dataToExport.length === 0) {
      alert("No enquiries match the current filters to export.");
      return;
    }

    const headers = [
      "ID",
      "Name",
      "Company",
      "Email",
      "Phone",
      "Service",
      "Budget",
      "Message",
      "Created At",
      "Status",
      "IP Address",
      "User Agent",
    ];

    const rows = dataToExport.map((e) => [
      e.id,
      e.name,
      e.company || "",
      e.email,
      e.phone || "",
      e.service,
      e.budget,
      e.message.replace(/"/g, '""'),
      e.createdAt,
      e.status,
      e.ip || "",
      e.userAgent || "",
    ]);

    // Build standard CSV string content
    const csvContent =
      "data:text/csv;charset=utf-8,\uFEFF" +
      [headers.join(","), ...rows.map((r) => r.map((val) => `"${val}"`).join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `express_webcraft_enquiries_${new Date().toISOString().split("T")[0]}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter & Search computation
  const getFilteredEnquiries = () => {
    return enquiries.filter((e) => {
      const matchesSearch =
        e.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.message?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.service?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = statusFilter === "All" || e.status === statusFilter;
      const matchesService = serviceFilter === "All" || e.service === serviceFilter;

      return matchesSearch && matchesStatus && matchesService;
    });
  };

  // Compute key stats
  const getStats = () => {
    const total = enquiries.length;
    const isNew = enquiries.filter((e) => e.status === "New").length;
    const contacted = enquiries.filter((e) => e.status === "Contacted").length;
    const closed = enquiries.filter((e) => e.status === "Closed").length;
    return { total, isNew, contacted, closed };
  };

  const filteredEnquiries = getFilteredEnquiries();
  const stats = getStats();

  // Distinct Services for filter list
  const getDistinctServices = () => {
    const services = enquiries.map((e) => e.service).filter(Boolean);
    return ["All", ...Array.from(new Set(services))];
  };

  const servicesList = getDistinctServices();

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#12141a] flex flex-col items-center justify-center text-brand-cream">
        <Loader2 className="w-8 h-8 animate-spin text-[#c9a227]" />
        <span className="mt-4 font-mono text-[10px] tracking-widest uppercase text-brand-cream/60">
          Loading Security Console...
        </span>
      </div>
    );
  }

  // If user is not authenticated as sayedozair25@gmail.com
  if (!user) {
    return (
      <div className="min-h-screen bg-[#12141a] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        {/* Decorative corner accents */}
        <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-white/5 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-white/5 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-[#1a1d26] border border-white/10 p-8 shadow-2xl relative"
        >
          {/* Top aesthetic bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-[#c9a227]" />

          <div className="text-center space-y-3 mb-8">
            <div className="inline-flex w-12 h-12 rounded-full border border-[#c9a227]/30 items-center justify-center text-[#c9a227] mb-2">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="font-display text-xl font-black uppercase tracking-widest text-brand-cream">
              ATELIER SECURITY
            </h2>
            <p className="font-mono text-[9px] uppercase tracking-wider text-brand-cream/45">
              Authorized administrator access only
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5" noValidate autoComplete="off">
            {loginError && (
              <div className="bg-red-500/10 border border-red-500/30 p-3 text-red-400 text-xs text-center font-mono">
                {loginError}
              </div>
            )}

            <div className="space-y-1.5">
              <label htmlFor="adm-e-no-autofill" className="font-mono text-[9px] uppercase tracking-widest text-brand-cream/50 block">
                ADMINISTRATOR EMAIL
              </label>
              <input
                id="adm-e-no-autofill"
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                autoComplete="new-password"
                className="w-full bg-white/5 border border-white/10 focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] px-3.5 py-2.5 text-xs text-brand-cream outline-none font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="adm-p-no-autofill" className="font-mono text-[9px] uppercase tracking-widest text-brand-cream/50 block">
                ACCESS KEYCODE (PASSWORD)
              </label>
              <input
                id="adm-p-no-autofill"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
                autoComplete="new-password"
                className="w-full bg-white/5 border border-white/10 focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] px-3.5 py-2.5 text-xs text-brand-cream outline-none font-mono"
              />
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-[#c9a227] hover:bg-[#c9a227]/90 text-[#12141a] font-display font-black text-xs uppercase tracking-widest py-3.5 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loginLoading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  DECRYPTING MASTER KEY...
                </>
              ) : (
                "INITIALIZE SECURE SYSTEM ↗"
              )}
            </button>
          </form>

          <div className="mt-8 pt-4 border-t border-white/5 text-center">
            <Link
              href="/"
              className="font-mono text-[8px] uppercase tracking-widest text-brand-cream/35 hover:text-[#c9a227] transition-colors"
            >
              ← RETURN TO LANDING ATELIER
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Active Authenticated Admin Dashboard Layout
  return (
    <div className="min-h-screen bg-[#fcfaf6] text-[#111b3a] flex flex-col font-sans select-text">
      {/* Top dashboard header bar */}
      <header className="bg-[#12141a] border-b border-[#c9a227]/15 h-[80px] px-4 md:px-10 flex items-center justify-between shadow-md relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#fcfaf6] text-[#12141a] font-display font-black text-xl flex items-center justify-center">
            EW
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-black tracking-widest uppercase text-brand-cream">
              ATELIER ADMIN CONSOLE
            </span>
            <span className="text-[8px] font-mono tracking-widest uppercase text-[#c9a227] font-bold leading-none">
              REAL-TIME LEDGER MONITOR // OK
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-wider text-brand-cream/60">
            ADMIN: {user.email}
          </span>
          <button
            onClick={handleLogout}
            className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-mono text-[9px] font-bold uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>TERMINATE</span>
          </button>
        </div>
      </header>

      {/* Main console content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8 space-y-6">
        
        {/* STATS BENTO GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: "TOTAL ENQUIRIES",
              value: stats.total,
              color: "border-[#111b3a]/15 text-[#111b3a]",
              icon: <FileText className="w-4 h-4 text-[#111b3a]/40" />,
            },
            {
              label: "NEW PROPOSALS",
              value: stats.isNew,
              color: "border-blue-200 bg-blue-50/20 text-blue-700",
              icon: <Clock className="w-4 h-4 text-blue-500" />,
            },
            {
              label: "CONTACTED OUTREACH",
              value: stats.contacted,
              color: "border-amber-200 bg-amber-50/20 text-amber-700",
              icon: <CheckCircle className="w-4 h-4 text-amber-500" />,
            },
            {
              label: "CLOSED LEGACY",
              value: stats.closed,
              color: "border-green-200 bg-green-50/20 text-green-700",
              icon: <Archive className="w-4 h-4 text-green-500" />,
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`bg-white border-2 p-5 flex flex-col justify-between shadow-sm hover:shadow transition-shadow ${card.color}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#111b3a]/50">
                  {card.label}
                </span>
                {card.icon}
              </div>
              <span className="font-display text-2xl md:text-3xl font-black tracking-tight mt-3">
                {card.value}
              </span>
            </div>
          ))}
        </div>

        {/* LEDGER WORKSPACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT PANEL: FILTERS & ENQUIRIES LIST (8 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#111b3a]/15 p-5 md:p-6 shadow-sm space-y-5 relative">
            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#111b3a]/20" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#111b3a]/20" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#111b3a]/10 pb-4">
              <h2 className="font-display text-base font-black uppercase tracking-tight text-[#111b3a]">
                Enquiry Ledger Database ({filteredEnquiries.length})
              </h2>
              <button
                onClick={exportCSV}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#12141a] hover:bg-[#c9a227] text-brand-cream hover:text-[#12141a] font-mono text-[9px] font-bold uppercase tracking-widest transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>EXPORT LEDGER CSV</span>
              </button>
            </div>

            {/* CONTROL INPUTS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#111b3a]/40" />
                <input
                  type="text"
                  placeholder="Search database..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#fcfaf6] border border-[#111b3a]/15 px-9 py-2 text-xs outline-none focus:border-[#c9a227] text-[#111b3a] font-sans"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-1.5 bg-[#fcfaf6] border border-[#111b3a]/15 px-3 py-1.5">
                <Filter className="w-3.5 h-3.5 text-[#111b3a]/40" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full bg-transparent border-none text-xs outline-none cursor-pointer text-[#111b3a] font-mono font-bold"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              {/* Service Filter */}
              <div className="flex items-center gap-1.5 bg-[#fcfaf6] border border-[#111b3a]/15 px-3 py-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#111b3a]/40" />
                <select
                  value={serviceFilter}
                  onChange={(e) => setServiceFilter(e.target.value)}
                  className="w-full bg-transparent border-none text-xs outline-none cursor-pointer text-[#111b3a] font-mono font-bold"
                >
                  <option value="All">All Services</option>
                  {servicesList.filter(s => s !== "All").map((svc) => (
                    <option key={svc} value={svc}>
                      {svc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* REAL-TIME LIST DISPLAY */}
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
              {enquiriesLoading ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <Loader2 className="w-6 h-6 animate-spin text-[#c9a227]" />
                  <span className="mt-3 font-mono text-[9px] uppercase tracking-widest text-[#111b3a]/55">
                    Querying Ledger records...
                  </span>
                </div>
              ) : filteredEnquiries.length === 0 ? (
                <div className="py-12 text-center border-2 border-dashed border-[#111b3a]/10 font-mono text-[10px] uppercase tracking-wider text-[#111b3a]/40">
                  No records match current parameters.
                </div>
              ) : (
                filteredEnquiries.map((enq) => {
                  const isSelected = selectedEnquiry?.id === enq.id;
                  
                  // Color status badge
                  let badgeColor = "bg-blue-100 text-blue-800 border-blue-200";
                  if (enq.status === "Contacted") badgeColor = "bg-amber-100 text-amber-800 border-amber-200";
                  if (enq.status === "Closed") badgeColor = "bg-green-100 text-green-800 border-green-200";

                  return (
                    <div
                      key={enq.id}
                      onClick={() => setSelectedEnquiry(enq)}
                      className={`border p-4 transition-all duration-150 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative group ${
                        isSelected
                          ? "bg-[#12141a]/5 border-[#c9a227] shadow-sm"
                          : "bg-white hover:bg-[#fcfaf6] border-[#111b3a]/15"
                      }`}
                    >
                      {/* Left side info */}
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-sans font-extrabold text-[13px] text-[#111b3a]">
                            {enq.name}
                          </span>
                          {enq.company && (
                            <span className="font-mono text-[9px] uppercase bg-slate-100 px-1.5 py-0.5 text-slate-600 border border-slate-200 rounded">
                              {enq.company}
                            </span>
                          )}
                          <span className={`font-mono text-[8px] uppercase tracking-wider font-extrabold px-2 py-0.5 border ${badgeColor}`}>
                            {enq.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 font-mono text-[9px] text-[#111b3a]/50">
                          <span>{enq.email}</span>
                          {enq.phone && <span>• {enq.phone}</span>}
                        </div>
                        <p className="font-sans text-[11px] text-[#111b3a]/75 line-clamp-1 italic font-light pt-1">
                          &quot;{enq.message}&quot;
                        </p>
                      </div>

                      {/* Right side info (Timestamp & Actions) */}
                      <div className="flex flex-row sm:flex-col items-end justify-between sm:justify-center gap-2 self-stretch sm:self-auto border-t sm:border-t-0 border-[#111b3a]/5 pt-2 sm:pt-0">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-[#111b3a]/40 font-bold">
                          {new Date(enq.createdAt).toLocaleDateString()}
                        </span>
                        
                        <div className="flex items-center gap-2">
                          {/* Quick change status dropdown */}
                          <select
                            value={enq.status}
                            onClick={(e) => e.stopPropagation()}
                            onChange={(e) => updateStatus(enq.id, e.target.value)}
                            className="bg-transparent border border-[#111b3a]/20 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider font-bold text-[#111b3a] outline-none cursor-pointer"
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Closed">Closed</option>
                          </select>

                          {/* Quick Delete */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteEnquiry(enq.id);
                            }}
                            className="p-1 text-red-500 hover:bg-red-50 transition-colors border border-transparent hover:border-red-100 rounded"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* RIGHT PANEL: SELECTED DETAIL VIEW (4 Cols) */}
          <div className="lg:col-span-5 bg-white border border-[#111b3a]/15 p-5 md:p-6 shadow-sm min-h-[450px] relative">
            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#111b3a]/20" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#111b3a]/20" />

            <AnimatePresence mode="wait">
              {selectedEnquiry ? (
                <motion.div
                  key={selectedEnquiry.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Title & Close */}
                  <div className="flex items-start justify-between border-b border-[#111b3a]/10 pb-4">
                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-widest text-[#111b3a]/40 block mb-1">
                        RECORD ID // {selectedEnquiry.id}
                      </span>
                      <h3 className="font-display text-base font-black uppercase text-[#111b3a]">
                        Enquiry Specifics
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedEnquiry(null)}
                      className="p-1.5 bg-[#fcfaf6] border border-[#111b3a]/10 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Detail list */}
                  <div className="space-y-4 text-xs">
                    {/* Status selection banner */}
                    <div className="bg-[#fcfaf6] border border-[#111b3a]/10 p-3.5 flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#111b3a]/60">
                        STATUS STATE:
                      </span>
                      <div className="flex items-center gap-2">
                        {["New", "Contacted", "Closed"].map((st) => (
                          <button
                            key={st}
                            onClick={() => updateStatus(selectedEnquiry.id, st)}
                            className={`px-2.5 py-1 font-mono text-[8px] uppercase tracking-widest font-extrabold border transition-all cursor-pointer ${
                              selectedEnquiry.status === st
                                ? "bg-[#111b3a] text-white border-[#111b3a]"
                                : "bg-white border-[#111b3a]/15 text-[#111b3a]/60 hover:border-[#111b3a]/40"
                            }`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Meta Fields */}
                    <div className="space-y-3">
                      {/* Name */}
                      <div className="flex items-start gap-3 border-b border-[#111b3a]/5 pb-2.5">
                        <UserIcon className="w-4 h-4 text-[#111b3a]/40 mt-0.5" />
                        <div>
                          <span className="font-mono text-[8px] uppercase tracking-widest text-[#111b3a]/40 block">
                            PROPOSER NAME
                          </span>
                          <span className="font-sans font-extrabold text-[13px] text-[#111b3a]">
                            {selectedEnquiry.name}
                          </span>
                        </div>
                      </div>

                      {/* Company */}
                      {selectedEnquiry.company && (
                        <div className="flex items-start gap-3 border-b border-[#111b3a]/5 pb-2.5">
                          <Briefcase className="w-4 h-4 text-[#111b3a]/40 mt-0.5" />
                          <div>
                            <span className="font-mono text-[8px] uppercase tracking-widest text-[#111b3a]/40 block">
                              COMPANY / BUSINESS
                            </span>
                            <span className="font-sans font-bold text-xs text-[#111b3a]">
                              {selectedEnquiry.company}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Contact Info */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-b border-[#111b3a]/5 pb-2.5">
                        <div className="flex items-start gap-3">
                          <Mail className="w-4 h-4 text-[#111b3a]/40 mt-0.5" />
                          <div>
                            <span className="font-mono text-[8px] uppercase tracking-widest text-[#111b3a]/40 block">
                              EMAIL
                            </span>
                            <a
                              href={`mailto:${selectedEnquiry.email}`}
                              className="font-sans text-xs text-[#c9a227] hover:underline font-bold"
                            >
                              {selectedEnquiry.email}
                            </a>
                          </div>
                        </div>

                        {selectedEnquiry.phone && (
                          <div className="flex items-start gap-3">
                            <Phone className="w-4 h-4 text-[#111b3a]/40 mt-0.5" />
                            <div>
                              <span className="font-mono text-[8px] uppercase tracking-widest text-[#111b3a]/40 block">
                                PHONE
                              </span>
                              <a
                                href={`tel:${selectedEnquiry.phone}`}
                                className="font-sans text-xs text-[#111b3a] hover:underline font-bold"
                              >
                                {selectedEnquiry.phone}
                              </a>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Service & Budget */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-b border-[#111b3a]/5 pb-2.5">
                        <div className="flex items-start gap-3">
                          <Briefcase className="w-4 h-4 text-[#111b3a]/40 mt-0.5" />
                          <div>
                            <span className="font-mono text-[8px] uppercase tracking-widest text-[#111b3a]/40 block">
                              SELECTED SERVICE
                            </span>
                            <span className="font-sans font-extrabold text-xs text-[#111b3a]">
                              {selectedEnquiry.service}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <DollarSign className="w-4 h-4 text-[#111b3a]/40 mt-0.5" />
                          <div>
                            <span className="font-mono text-[8px] uppercase tracking-widest text-[#111b3a]/40 block">
                              BUDGET ESTIMATE
                            </span>
                            <span className="font-sans font-extrabold text-xs text-green-700">
                              {selectedEnquiry.budget}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Message Box */}
                      <div className="bg-[#fcfaf6] border border-[#111b3a]/10 p-4 space-y-1.5">
                        <span className="font-mono text-[8px] uppercase tracking-widest text-[#111b3a]/40 block">
                          COMPLETE MESSAGE / VISION OUTLINE
                        </span>
                        <p className="font-sans text-xs text-[#111b3a]/85 leading-relaxed font-light whitespace-pre-wrap italic">
                          &quot;{selectedEnquiry.message}&quot;
                        </p>
                      </div>

                      {/* IP & User Agent Info */}
                      <div className="bg-[#12141a]/5 p-3.5 space-y-2 border border-[#111b3a]/10 font-mono text-[8px] text-[#111b3a]/65">
                        <div className="flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-[#111b3a]/40" />
                          <span>IP ADDRESS: {selectedEnquiry.ip || "Unknown"}</span>
                        </div>
                        <div className="flex items-start gap-1.5 leading-relaxed">
                          <FileText className="w-3.5 h-3.5 text-[#111b3a]/40 mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-2">USER AGENT: {selectedEnquiry.userAgent || "Unknown"}</span>
                        </div>
                        <div className="flex items-center gap-1.5 leading-relaxed pt-1.5 border-t border-[#111b3a]/10 text-[#111b3a]/40 font-bold">
                          <span>SUBMISSION TIME (UTC): {new Date(selectedEnquiry.createdAt).toUTCString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="border-t border-[#111b3a]/10 pt-4 flex items-center justify-between">
                    <button
                      onClick={() => deleteEnquiry(selectedEnquiry.id)}
                      className="px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 font-mono text-[9px] font-bold uppercase tracking-widest border border-red-200 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>DELETE RECORD</span>
                    </button>
                    <a
                      href={`mailto:${selectedEnquiry.email}?subject=Express Webcraft Inquiry Follow-up`}
                      className="px-4 py-2.5 bg-[#12141a] hover:bg-[#c9a227] text-brand-cream hover:text-[#12141a] font-mono text-[9px] font-bold uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>REPLY VIA EMAIL</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20 space-y-3"
                >
                  <div className="w-10 h-10 border border-[#111b3a]/15 rounded-full flex items-center justify-center text-[#111b3a]/30">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display text-xs font-black uppercase text-[#111b3a]/60">
                      No Records Activated
                    </h4>
                    <p className="font-mono text-[8px] uppercase tracking-widest text-[#111b3a]/30">
                      Select an enquiry from the ledger to view details
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </main>
    </div>
  );
}
