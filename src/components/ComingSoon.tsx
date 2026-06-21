import React, { useState } from "react";
import { 
  Sparkles, 
  Calendar, 
  Mail, 
  ArrowRight, 
  Megaphone, 
  MonitorPlay, 
  MailWarning, 
  Activity,
  Heart,
  User,
  PartyPopper
} from "lucide-react";
import { motion } from "motion/react";

export default function ComingSoon() {
  const [emailInput, setEmailInput] = useState("");
  const [selectedService, setSelectedService] = useState<string>("all");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribersCount, setSubscribersCount] = useState(() => {
    // randomized starting placeholder or saved count
    const saved = localStorage.getItem("velicx_subscribers_count");
    if (saved) return parseInt(saved, 10);
    const mockStart = Math.floor(Math.random() * 85) + 340;
    localStorage.setItem("velicx_subscribers_count", mockStart.toString());
    return mockStart;
  });

  const [activeTab, setActiveTab] = useState<"invitation" | "portfolios" | "email" | null>(null);

  const upcomingServices = [
    {
      id: "invitation",
      title: "Interactive Invitation Websites",
      desc: "Immersive, customized, state-of-the-art invitation pages for luxury weddings, corporate galas, and brand launch events. Tailored layouts complete with real-time RSVPs, customized digital maps, and interactive guest books.",
      badge: "Q3 Release",
      icon: MonitorPlay,
      color: "from-velicx-blue to-cyan-500",
      features: ["Custom RSVP Triggers", "Google Maps Integration", "Digital Music Backdrops", "Personalized QR Entry Codes"]
    },
    {
      id: "portfolios",
      title: "Creative Portfolio Pages",
      desc: "Tailored showcase spaces constructed specifically for photographers, product designers, technical writers, and digital consultants. Dynamic grid templates focused on typography, content spacing, and speed.",
      badge: "In Development",
      icon: User,
      color: "from-velicx-indigo to-velicx-purple",
      features: ["Advanced Gallery Sliders", "Lighthouse Score 100", "Custom Markdown Blogs", "Instant Contact Inquiries"]
    },
    {
      id: "email",
      title: "Automated Email Marketing",
      desc: "A frictionless, high-throughput transmission system designed to broadcast promotional updates, periodic newsletters, and brand triggers. Integrates directly with client analytics pipelines.",
      badge: "Beta Testing",
      icon: Megaphone,
      color: "from-velicx-purple to-pink-500",
      features: ["Drop-and-Drag Editors", "Detailed Engagement Metrics", "Dynamic A/B Testing", "Instant CRM Handshakes"]
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !validateEmail(emailInput)) {
      alert("Please specify a fully qualified email coordinate.");
      return;
    }

    // Save in local storage
    const existingEmails = JSON.parse(localStorage.getItem("velicx_newsletter_list") || "[]");
    if (!existingEmails.includes(emailInput)) {
      existingEmails.push(emailInput);
      localStorage.setItem("velicx_newsletter_list", JSON.stringify(existingEmails));
      
      const newCount = subscribersCount + 1;
      setSubscribersCount(newCount);
      localStorage.setItem("velicx_subscribers_count", newCount.toString());
    }

    setIsSubscribed(true);
    setEmailInput("");
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-8]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24" id="coming-soon-section">
      
      {/* Dynamic Header Block */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-velicx-purple/15 border border-velicx-purple/20 rounded-full text-xs font-mono font-medium text-velicx-purple mb-4 uppercase tracking-wider">
          <Calendar size={12} className="text-purple-400" /> Upcoming Architectural Suite
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-white mb-6">
          Velicx Future Launches
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          We are actively crafting next-generation tools to extend your brand's digital footprints. Preview our in-progress service releases below and reserve your pioneer spot for the closed beta releases.
        </p>
      </div>

      {/* Grid of Coming Soon items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {upcomingServices.map((service) => {
          const IconComponent = service.icon;
          const isActive = activeTab === service.id;

          return (
            <motion.div
              key={service.id}
              whileHover={{ y: -6 }}
              className="bg-velicx-card border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group transition-all duration-300 hover:border-white/10"
            >
              {/* Corner Glow Effect */}
              <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-velicx-indigo/10 to-transparent blur-2xl group-hover:from-velicx-indigo/20 pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 text-white shrink-0 shadow-lg`}>
                    <IconComponent size={22} />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-gray-400 px-2.5 py-1 bg-white/5 rounded-full border border-white/10">
                    {service.badge}
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-lg font-display font-semibold text-white mb-3 group-hover:text-velicx-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="text-[11px] sm:text-xs text-gray-300 font-mono flex items-center gap-2">
                      <span className="h-1 w-1 bg-velicx-indigo rounded-full" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <button
                onClick={() => setActiveTab(isActive ? null : (service.id as any))}
                className={`w-full py-2.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 ${
                  isActive
                    ? "bg-white/10 text-white border border-white/10"
                    : "bg-white/5 text-gray-400 hover:text-white border border-transparent hover:bg-white/10"
                }`}
              >
                <span>{isActive ? "Collapse Spec Sheet" : "Inspect Specifications"}</span>
                <ArrowRight size={13} className={`transform transition-transform ${isActive ? "rotate-90" : "group-hover:translate-x-1"}`} />
              </button>

              {/* Collapsible Details */}
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-4 pt-4 border-t border-white/5 space-y-3"
                >
                  <div className="p-3 bg-velicx-dark/50 rounded-xl space-y-1">
                    <p className="text-[10px] uppercase tracking-wider font-mono text-gray-500 font-bold">Engineering Stacks</p>
                    <p className="text-[11px] text-gray-300 font-mono">React v19, Tailwind Native CSS grid layouts, Secure SMTP handshakes, Redis queue backlogs.</p>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                    <span>Beta Entry: Restricted</span>
                    <span className="text-green-400">Pre-registration Open</span>
                  </div>
                </motion.div>
              )}

            </motion.div>
          );
        })}
      </div>

      {/* interactive Subscription Box */}
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-velicx-card to-velicx-dark border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center group shadow-2xl">
        {/* Glow ambient background circles */}
        <div className="absolute -left-20 -bottom-20 h-64 w-64 bg-velicx-indigo/15 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute -right-20 -top-20 h-64 w-64 bg-velicx-purple/15 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <div className="h-12 w-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
            <Sparkles size={20} className="text-yellow-400" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
            Reserve Your Closed Beta Coordinate
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Specify your business email below to register for direct priority updates, free launch invitations, and developer-stage testing passes.
          </p>

          <div className="px-4 py-2 bg-white/5 rounded-full border border-white/5 inline-flex items-center gap-2 max-w-xs mx-auto text-xs text-gray-300 font-mono">
            <Activity size={12} className="text-green-400 animate-pulse" />
            <span>Join <strong>{subscribersCount}</strong> registered tech leaders</span>
          </div>

          {/* Form */}
          {isSubscribed ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl max-w-md mx-auto space-y-3"
            >
              <div className="flex justify-center text-green-400">
                <PartyPopper size={32} />
              </div>
              <p className="font-semibold text-white">Coordinate Registered Successfully!</p>
              <p className="text-xs text-gray-400">
                You've been successfully entered into the Velicx Pioneer list. We'll broadcast closed beta access tokens directly to your coordinates upon rollout.
              </p>
              <button
                onClick={() => setIsSubscribed(false)}
                className="text-[10px] font-mono text-gray-400 underline hover:text-white transition-colors mt-2"
              >
                Register another email address
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" id="beta-subscribe-form">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-3.5 text-gray-400 shrink-0" size={16} />
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-velicx-dark/80 border border-white/10 rounded-xl text-white text-sm focus:border-velicx-indigo focus:outline-none focus:ring-1 focus:ring-velicx-indigo font-mono transition-all"
                  placeholder="Enter your business email"
                  id="beta-email-input"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3.5 bg-white text-velicx-dark hover:bg-white/90 text-sm font-semibold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                id="beta-subscribe-submit"
              >
                <span>Notify Me</span>
                <ArrowRight size={14} />
              </button>
            </form>
          )}

          <p className="text-[11px] text-gray-500 font-mono mt-4">
            🔒 Pure utility. NO promotional spam. Zero tracking pixels. Opt-out dynamically at any point.
          </p>
        </div>
      </div>

    </div>
  );
}
