import { useState } from "react";
import Navbar from "./components/Navbar";
import ResumeBuilder from "./components/ResumeBuilder";
import ComingSoon from "./components/ComingSoon";
import ContactForm from "./components/ContactForm";
import PolicyModals from "./components/PolicyModals";
import Logo from "./components/Logo";
import {
  Monitor,
  Smartphone,
  Sparkles,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Code,
  Heart,
  ChevronRight,
  ExternalLink,
  Laptop,
  CheckCircle2
} from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const [activePolicy, setActivePolicy] = useState<"privacy" | "terms" | "cookie" | null>(null);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [mobileMockScreen, setMobileMockScreen] = useState<"onboarding" | "dashboard" | "transaction">("onboarding");

  const openPolicy = (type: "privacy" | "terms" | "cookie") => {
    setActivePolicy(type);
    setIsPolicyOpen(true);
  };

  const handleClosePolicy = () => {
    setIsPolicyOpen(false);
    setActivePolicy(null);
  };

  return (
    <div className="min-h-screen bg-velicx-dark text-gray-100 flex flex-col justify-between font-sans relative antialiased selection:bg-velicx-indigo/30 selection:text-white overflow-x-hidden">

      {/* GLOW ATMOSPHERE - Soft ambient gradients scattered in the backdrop */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-velicx-blue/10 rounded-full filter blur-[100px] pointer-events-none no-print" />
      <div className="absolute top-[800px] right-1/4 w-[500px] h-[500px] bg-velicx-purple/10 rounded-full filter blur-[120px] pointer-events-none no-print" />
      <div className="absolute bottom-[1000px] left-1/5 w-[450px] h-[450px] bg-velicx-indigo/5 rounded-full filter blur-[110px] pointer-events-none no-print" />

      {/* HEADER NAVBAR */}
      <Navbar />

      {/* MAIN SYSTEM WRAPPER */}
      <main className="flex-1 w-full pt-[74px]">

        {/* HERO BRAND UNIT */}
        <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-white/5 no-print" id="hero-unit">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
            {/* Launching Capsule Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-velicx-blue/10 to-velicx-purple/10 border border-velicx-indigo/30 rounded-full text-xs font-mono font-medium text-white shadow-lg"
            >
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span>Velicx Architectural Engine Online • Launching Summer 2026</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4 max-w-4xl mx-auto">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-white leading-none"
              >
                Next-Gen Software for{" "}
                <span className="bg-gradient-to-r from-[#0052FF] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                  Bold Modern Brands
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-400 text-base sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto"
              >
                Translating high-impact business visions into customized premium website suites and responsive, high-end mobile application ecosystems.
              </motion.p>
            </div>

            {/* Quick Actions Panel */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-md mx-auto"
            >
              <a
                href="https://resume.velicx.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-velicx-dark hover:bg-white/90 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shrink-0 cursor-pointer animate-shimmer"
                id="hero-create-resume-btn"
              >
                <Sparkles size={16} className="text-amber-500 animate-pulse" />
                <span>Build My Portfolio Resume</span>
              </a>
              <a
                href="#contact-us-section"
                className="w-full sm:w-auto px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 font-mono text-xs transition-all flex items-center justify-center gap-2"
                id="hero-quote-inquiry-btn"
              >
                <span>Request Project Proposal</span>
                <ChevronRight size={14} />
              </a>
            </motion.div>

            {/* Trust Coordinates badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/5 block text-center"
            >
              <div className="space-y-1">
                <p className="text-xl sm:text-2xl font-display font-medium text-white">React 19</p>
                <p className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Speed Standardized</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl sm:text-2xl font-display font-medium text-white">SLA &lt;4h</p>
                <p className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Outreach response</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl sm:text-2xl font-display font-medium text-white">100% Local</p>
                <p className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Document safety</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl sm:text-2xl font-display font-medium text-white">Bespoke UI</p>
                <p className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">No generic templates</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* COMPREHENSIVE CORE SERVICES SHOWCASE GRID */}
        <section className="py-20 md:py-28 border-b border-white/5 no-print" id="services-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-velicx-blue/15 border border-velicx-blue/20 rounded-full text-xs font-mono font-medium text-velicx-blue uppercase tracking-wider">
                <Cpu size={12} /> Modern Core Practices
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-semibold text-white tracking-tight">
                Our Architectural Priorities
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                We avoid bulky boilerplate codes and bloated configurations. Every solution is custom crafted to elevate your conversion funnels, load metrics, and customer satisfaction index.
              </p>
            </div>

            {/* Core comparative Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              {/* SERVICE 1: CUSTOM WEBSITES FOR YOUR BRAND */}
              <div className="bg-velicx-card border border-white/5 hover:border-white/10 rounded-3xl p-6 sm:p-10 space-y-8 relative group transition-all duration-300">
                <div className="absolute top-0 right-0 h-32 w-32 bg-velicx-blue/5 rounded-full filter blur-3xl pointer-events-none" />

                <div className="space-y-4">
                  <div className="h-12 w-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-velicx-blue shadow-lg">
                    <Monitor size={20} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                    Custom Websites for Your Brand
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Sleek static hubs, full-stack React catalogs, and high-conversion landing assets meticulously styled. Enjoy optimized response parameters, uncompromised speed performance, and dynamic brand typography pairings.
                  </p>
                </div>

                {/* Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/5 text-xs">
                  <div className="space-y-1">
                    <p className="text-white font-semibold flex items-center gap-1.5">
                      <Code size={13} className="text-velicx-blue" /> Codebase Customization
                    </p>
                    <p className="text-gray-500 font-mono">Clean, custom Vite configurations. Zero slow heavy CMS bloat layers.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-semibold flex items-center gap-1.5">
                      <Cpu size={13} className="text-velicx-blue" /> Speed Optimization
                    </p>
                    <p className="text-gray-500 font-mono">Lighthouse scores targeting 95+ average out-of-the-box.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-semibold flex items-center gap-1.5">
                      <Laptop size={13} className="text-velicx-blue" /> Multi-viewport Responsive
                    </p>
                    <p className="text-gray-500 font-mono">Tailormade layouts responsive to smart watch and desktop screens alike.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-semibold flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-velicx-blue" /> Localized Hardened Security
                    </p>
                    <p className="text-gray-500 font-mono">Robust server-side protections keeping API tokens masked.</p>
                  </div>
                </div>

                {/* Premium Interactive Element: Responsive Workspace Mockup simulation */}
                <div className="bg-velicx-dark/80 rounded-2xl p-5 border border-white/5 space-y-4 shadow-inner" id="web-interact-mock">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono select-all">brand.velicx.design</span>
                    <span className="text-[10px] font-mono text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded leading-none">HTTPS OK</span>
                  </div>

                  <div className="space-y-3 py-1">
                    <p className="text-white text-xs font-semibold text-center mt-2">Simulate Brand Typography pairings</p>
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="p-3 bg-white/5 border border-white/5 rounded-xl space-y-1 hover:border-velicx-blue/35 transition-colors cursor-pointer">
                        <p className="font-display font-medium text-white text-sm">Space Grotesk</p>
                        <p className="text-[9px] text-gray-400 font-mono">Modern Futuristic</p>
                      </div>
                      <div className="p-3 bg-white/5 border border-white/5 rounded-xl space-y-1 hover:border-velicx-blue/35 transition-colors cursor-pointer">
                        <p className="font-serif font-medium text-white text-sm">Playfair Serif</p>
                        <p className="text-[9px] text-gray-400 font-mono">Editorial Elegant</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* SERVICE 2: HIGH-END MOBILE APP DEVELOPMENT */}
              <div className="bg-velicx-card border border-white/5 hover:border-white/10 rounded-3xl p-6 sm:p-10 space-y-8 relative group transition-all duration-300">
                <div className="absolute top-0 right-0 h-32 w-32 bg-velicx-purple/5 rounded-full filter blur-3xl pointer-events-none" />

                <div className="space-y-4">
                  <div className="h-12 w-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-velicx-purple shadow-lg">
                    <Smartphone size={20} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                    High-End Mobile Development
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Bespoke mobile software layouts tailored strictly to support your complex client workflows, e-commerce checkouts, and system tracking. Runs natively, fast, and secure on iOS & Android devices.
                  </p>
                </div>

                {/* Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/5 text-xs">
                  <div className="space-y-1">
                    <p className="text-white font-semibold flex items-center gap-1.5">
                      <Smartphone size={13} className="text-velicx-purple" /> iOS & Android Synergy
                    </p>
                    <p className="text-gray-500 font-mono">Single source delivery keeping app development and upkeep costs balanced.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-semibold flex items-center gap-1.5">
                      <Sparkles size={13} className="text-velicx-purple" /> Fluid UI Animations
                    </p>
                    <p className="text-gray-500 font-mono">Stutter-free gesture controls and smooth micro-interactions.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-semibold flex items-center gap-1.5">
                      <Code size={13} className="text-velicx-purple" /> Offline-First Storage
                    </p>
                    <p className="text-gray-500 font-mono">Client-side SQLite caches to maintain performance without signal latency.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-semibold flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-velicx-purple" /> Business Alignment
                    </p>
                    <p className="text-gray-500 font-mono">Tailormade workflows engineered for active conversion goals.</p>
                  </div>
                </div>

                {/* Premium Interactive Element: Mobile Phone Screen simulation */}
                <div className="p-4 bg-velicx-dark/80 rounded-2xl border border-white/5 flex flex-col items-center shadow-inner" id="mobile-interact-mock">
                  <p className="text-xs text-slate-400 font-semibold mb-3">Live Interactive Mock (Tap screens below)</p>

                  {/* Phone Screen Case */}
                  <div className="w-[180px] h-[260px] bg-black border-[6px] border-slate-800 rounded-3xl p-3 shadow-xl relative overflow-hidden flex flex-col justify-between">
                    {/* Speaker notch */}
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-14 h-3 bg-slate-800 rounded-full" />

                    {/* Screens Engine */}
                    <div className="flex-1 mt-3 flex flex-col justify-between text-left select-none text-[10px]">

                      {mobileMockScreen === "onboarding" && (
                        <div className="flex flex-col justify-center items-center text-center h-full space-y-2">
                          <div className="px-2 py-0.5 bg-velicx-indigo/35 text-[8px] font-mono rounded text-indigo-300">Velicx Mobile</div>
                          <p className="font-semibold text-white leading-tight text-xs">Unlock your business potential</p>
                          <p className="text-[9px] text-gray-500">Premium SLA services</p>
                        </div>
                      )}

                      {mobileMockScreen === "dashboard" && (
                        <div className="space-y-2 pt-2">
                          <div className="flex justify-between items-center text-gray-400 text-[8px]">
                            <span>Welcome, Partner</span>
                            <span className="h-2 w-2 rounded-full bg-green-400" />
                          </div>
                          <div className="p-1.5 bg-white/5 rounded border border-white/5">
                            <p className="text-[8px] text-gray-400">Total Reach</p>
                            <p className="text-xs font-bold text-white">43,290 Users</p>
                          </div>
                          <p className="text-[8px] text-indigo-400 font-mono">⚡ Speed optimization active</p>
                        </div>
                      )}

                      {mobileMockScreen === "transaction" && (
                        <div className="h-full flex flex-col justify-center items-center text-center space-y-1">
                          <CheckCircle2 size={18} className="text-green-500" />
                          <p className="font-semibold text-white">SLA Connected</p>
                          <p className="text-[8px] text-gray-500">Invoice #VX-903 Paid</p>
                        </div>
                      )}

                    </div>

                    {/* bottom mock home capsule */}
                    <div className="h-1 w-12 bg-slate-800 rounded-full mx-auto" />
                  </div>

                  {/* Button controllers */}
                  <div className="flex gap-1.5 mt-3 text-[10px] font-mono">
                    <button
                      onClick={() => setMobileMockScreen("onboarding")}
                      className={`px-2 py-1 rounded transition-colors ${mobileMockScreen === "onboarding" ? "bg-velicx-purple text-white" : "bg-white/5 text-gray-400 hover:text-white"}`}
                    >
                      Onboard
                    </button>
                    <button
                      onClick={() => setMobileMockScreen("dashboard")}
                      className={`px-2 py-1 rounded transition-colors ${mobileMockScreen === "dashboard" ? "bg-velicx-purple text-white" : "bg-white/5 text-gray-400 hover:text-white"}`}
                    >
                      Dash
                    </button>
                    <button
                      onClick={() => setMobileMockScreen("transaction")}
                      className={`px-2 py-1 rounded transition-colors ${mobileMockScreen === "transaction" ? "bg-velicx-purple text-white" : "bg-white/5 text-gray-400 hover:text-white"}`}
                    >
                      Token
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* PORTFOLIO RESUME BUILDER COMPONENT */}
        <section className="bg-velicx-dark border-b border-white/5 relative" id="resume-builder-suite">
          <ResumeBuilder />
        </section>

        {/* FUTURE SERVICE RELEASES SECTION (COMING SOON) */}
        <section className="bg-velicx-card/30 border-b border-white/5 no-print" id="coming-soon-section">
          <ComingSoon />
        </section>

        {/* COMPLIANT CONTACT US CORE INTAKE */}
        <section className="bg-velicx-dark/50 no-print" id="contact-us-section">
          <ContactForm />
        </section>

      </main>

      {/* FOOTER & POLICY PORTALS */}
      <footer className="bg-velicx-dark py-12 border-t border-white/5 font-sans relative z-10 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left space-y-8">

          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pb-8 border-b border-white/5">
            {/* Velicx Brand */}
            <div className="space-y-2">
              <Logo symbolSize={42} />
              <p className="text-xs text-gray-500 font-mono">
                Premium digital assets, robust code designs, custom templates.
              </p>
            </div>

            {/* Email mailto fallback as required by prompt */}
            <div className="flex flex-col sm:items-end text-sm text-gray-400 space-y-1">
              <p className="text-[10px] uppercase font-mono tracking-widest text-gray-500 font-bold">Contact Coordinates</p>
              <a
                href="mailto:tech.velicx@gmail.com"
                className="text-white hover:text-velicx-blue font-mono font-medium hover:underline flex items-center justify-center sm:justify-start gap-1.5"
                id="footer-mailto-link"
              >
                <span>tech.velicx@gmail.com</span>
                <ExternalLink size={12} />
              </a>
              <span className="text-[10px] font-mono text-gray-500">Uncompromised Software SLA</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-gray-500">
            {/* Regulatory and credits in footer */}
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              <span>&copy; {new Date().getFullYear()} Velicx Technology Inc. All rights reserved on device.</span>
            </div>

            {/* POLICY LINKS (Privacy, Terms, Cookies) */}
            <div className="flex flex-wrap justify-center gap-4 text-[11px] font-mono font-medium" id="footer-policy-links">
              <button
                onClick={() => openPolicy("privacy")}
                className="hover:text-white cursor-pointer hover:underline transition-colors block"
                id="privacy-policy-link"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => openPolicy("terms")}
                className="hover:text-white cursor-pointer hover:underline transition-colors block"
                id="terms-of-service-link"
              >
                Terms of Service
              </button>
              <span>•</span>
              <button
                onClick={() => openPolicy("cookie")}
                className="hover:text-white cursor-pointer hover:underline transition-colors block"
                id="cookie-policy-link"
              >
                Cookie Policy
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* POLICY SLIDE-OVER DRAWER MODAL CONTAINER */}
      <PolicyModals
        isOpen={isPolicyOpen}
        onClose={handleClosePolicy}
        type={activePolicy}
      />

    </div>
  );
}
