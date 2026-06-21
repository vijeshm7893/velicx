import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles, Send } from "lucide-react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Our Services", href: "#services-section" },
    { label: "Resume Builder", href: "https://resume-builder-flame-beta.vercel.app/", highlight: true, external: true },
    { label: "Future Releases", href: "#coming-soon-section" },
    { label: "Contact Us", href: "#contact-us-section" }
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
        scrolled
          ? "bg-velicx-dark/85 backdrop-blur-md py-4 border-b border-white/5 shadow-lg"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Velicx Brand Logo */}
          <a href="#" className="flex-shrink-0 cursor-pointer" id="logo-nav-link" aria-label="Velicx Home">
            <Logo symbolSize={38} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8" id="desktop-nav-menu">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`text-sm tracking-wide font-sans font-medium relative group cursor-pointer transition-colors ${
                  item.highlight
                    ? "text-white select-none whitespace-nowrap bg-gradient-to-r from-velicx-blue/10 to-velicx-purple/10 border border-velicx-indigo/30 hover:border-velicx-indigo/80 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-xs uppercase"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.highlight && <Sparkles size={11} className="text-yellow-400 shrink-0" />}
                <span>{item.label}</span>
                {item.highlight && (
                  <span className="absolute -top-1.5 -right-2 bg-gradient-to-r from-velicx-blue to-velicx-purple text-[8px] font-bold text-white font-mono px-1 py-0.2 px-1.5 rounded-full uppercase leading-none">
                    New
                  </span>
                )}
                {!item.highlight && (
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-velicx-indigo transition-all group-hover:w-full" />
                )}
              </a>
            ))}
          </div>

          {/* Desktop Right Call to Action */}
          <div className="hidden md:block">
            <a
              href="#contact-us-section"
              className="px-5 py-2.5 bg-white text-velicx-dark hover:bg-white/90 text-xs font-semibold rounded-xl flex items-center gap-2 transition-all shadow-md shrink-0 cursor-pointer"
              id="cta-nav-btn"
            >
              <span>Build My Brand</span>
              <ArrowRight size={13} />
            </a>
          </div>

          {/* Mobile Hamburguer Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white bg-white/5 rounded-xl border border-white/5"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Sidebar Navigation Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[73px] z-30 bg-black/95 backdrop-blur-lg flex flex-col justify-between p-6 md:hidden select-none"
            id="mobile-nav-panel"
          >
            {/* Nav List */}
            <div className="space-y-6 pt-4 flex-1">
              <p className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest px-2">Navigation Matrix</p>
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`p-4 rounded-xl text-base font-display font-medium border transition-all flex items-center justify-between ${
                      item.highlight
                        ? "bg-gradient-to-r from-velicx-blue/10 to-velicx-purple/10 border-velicx-indigo/30 text-white"
                        : "bg-white/5 border-transparent text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {item.highlight && <Sparkles size={16} className="text-yellow-400" />}
                      <span>{item.label}</span>
                    </div>
                    {item.highlight ? (
                      <span className="text-[9px] font-mono uppercase bg-velicx-indigo px-2 py-0.5 rounded text-white tracking-widest font-bold">New Editor</span>
                    ) : (
                      <ArrowRight size={14} className="text-gray-500" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom contact CTA card */}
            <div className="p-5 bg-velicx-card border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wide">Client Portal Online</p>
              </div>
              <p className="text-xs text-gray-400">Our senior software architects are available to review your custom mobile/web scope details.</p>
              <a
                href="#contact-us-section"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-white text-velicx-dark hover:bg-white/90 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <span>Initiate SLA Discussion</span>
                <Send size={12} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
