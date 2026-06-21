import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  CheckCircle,
  HelpCircle,
  MessageSquare,
  Globe,
  Smartphone,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  Clock,
  History
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ContactMessage } from "../types";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "web",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [sentMessages, setSentMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem("velicx_sent_messages");
    return saved ? JSON.parse(saved) : [];
  });

  const [showHistory, setShowHistory] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const constructMailtoLink = () => {
    const subjectLine = encodeURIComponent(formData.subject || `Inquiry from ${formData.fullName || "Web Guest"}`);
    const bodyContent = encodeURIComponent(
      `Hi Velicx Team,\n\nI would like to discuss a project with you.\n\nProject Scope: ${formData.service.toUpperCase()}\n\nDetails:\n${formData.message}\n\nWarm regards,\n${formData.fullName}\nEmail Contact: ${formData.email}`
    );
    return `mailto:tech.velicx@gmail.com?subject=${subjectLine}&body=${bodyContent}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate luxury response sequence
    setTimeout(() => {
      const newMessage: ContactMessage = {
        fullName: formData.fullName,
        email: formData.email,
        subject: formData.subject || `Partnership Discussion (${formData.service})`,
        message: formData.message,
        createdAt: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
      };

      const updatedHistory = [newMessage, ...sentMessages];
      setSentMessages(updatedHistory);
      localStorage.setItem("velicx_sent_messages", JSON.stringify(updatedHistory));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Auto trigger the mailto sequence as requested top priority, so they can directly send it!
      const link = document.createElement("a");
      link.href = constructMailtoLink();
      link.id = "mailto-trigger";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  const clearInquiryHistory = () => {
    if (window.confirm("Purge local inquiry submissions history? This does not alter emails sent via your device client.")) {
      setSentMessages([]);
      localStorage.removeItem("velicx_sent_messages");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24" id="contact-us-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: Brand SLA and Direct Details (Grid 5 on large) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-velicx-blue/15 border border-velicx-blue/20 rounded-full text-xs font-mono font-medium text-velicx-blue uppercase tracking-wider">
              <Clock size={12} /> Live response team
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium tracking-tight text-white">
              Let's Co-create Your Next Masterpiece
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Have a custom website, high-end mobile application, or technical portfolio product to build? Our technical architects are standing by to engineer your digital edge. Securely submit your prompt coordinates here.
            </p>
          </div>

          {/* Quick SLA and Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Primary Action Card: Mailto direct link */}
            <a 
              href="mailto:tech.velicx@gmail.com?subject=Partnership%20with%20Velicx&body=Hi%20Velicx%20Team%2C%0A%0AI'd%20love%20to%20discuss%20our%20branding%20goals..."
              className="p-5 bg-gradient-to-br from-velicx-card to-velicx-dark border border-white/10 hover:border-velicx-indigo/50 rounded-2xl block group transition-all"
              id="direct-mailto-link-card"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-velicx-blue group-hover:bg-velicx-blue/10 transition-colors">
                  <Mail size={18} />
                </div>
                <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="font-display font-medium text-white text-sm mb-1">Direct Outreach</p>
              <p className="text-xs text-velicx-blue group-hover:underline break-all font-mono">tech.velicx@gmail.com</p>
              <p className="text-[10px] text-gray-500 font-mono mt-2">Open instantly in your local mail client</p>
            </a>

            <div className="p-5 bg-velicx-card/60 border border-white/5 rounded-2xl">
              <div className="p-2.5 rounded-xl bg-white/5 text-velicx-purple w-fit mb-3">
                <Clock size={18} />
              </div>
              <p className="font-display font-medium text-white text-sm mb-1">Response Guarantee</p>
              <p className="text-xs text-gray-300 font-semibold">&lt; 4 Hours Response SLA</p>
              <p className="text-[10px] text-gray-500 font-mono mt-3">High-Priority Priority queues for enterprise clients</p>
            </div>
          </div>

          {/* Inquiry History Log */}
          {sentMessages.length > 0 && (
            <div className="p-5 bg-velicx-card/40 border border-white/5 rounded-2xl space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                  <History size={13} /> Saved Sent Tickets ({sentMessages.length})
                </p>
                <button
                  type="button"
                  onClick={clearInquiryHistory}
                  className="text-[10px] font-mono text-gray-500 hover:text-red-400 underline transition-colors"
                >
                  Purge List
                </button>
              </div>

              <div className="max-h-40 overflow-y-auto space-y-2 pr-1 no-scrollbar">
                {sentMessages.map((msg, idx) => (
                  <div key={idx} className="p-3 bg-white/5 rounded-xl border border-white/5 text-xs space-y-1">
                    <div className="flex justify-between text-gray-400">
                      <span className="font-semibold text-white truncate max-w-[150px]">{msg.fullName}</span>
                      <span className="font-mono text-[10px]">{msg.createdAt}</span>
                    </div>
                    <p className="text-gray-400 truncate"><strong className="text-gray-300">Topic:</strong> {msg.subject}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Contact Us Form Frame (Grid 7 on large) */}
        <div className="lg:col-span-7 bg-velicx-card border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 h-44 w-44 bg-velicx-blue/5 rounded-full filter blur-3xl pointer-events-none" />

          {submitSuccess ? (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-10 space-y-6"
            >
              <div className="h-14 w-14 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-400">
                <CheckCircle size={32} />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-display font-semibold text-white">Project Ticket Formulated</h3>
                <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                  Excellent work! We have structured your partnership document. To confirm transmission, we have triggered your native email mailto client targeting **tech.velicx@gmail.com**.
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 max-w-sm mx-auto space-y-2 text-xs font-mono text-gray-300">
                <p className="text-yellow-400 font-bold mb-1">📬 Default Mail Client Opened?</p>
                Please verify you clicked "Send" in the external mail app that popped up to conclude delivery. If it did not emerge, you can manually compose to:
                <p className="text-white hover:underline mt-1">tech.velicx@gmail.com</p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmitSuccess(false);
                  setFormData({ fullName: "", email: "", service: "web", subject: "", message: "" });
                }}
                className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 font-mono text-xs transition-all"
              >
                Draft another inquiry ticket
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6" id="contact-ticket-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-mono text-gray-400 uppercase mb-2">My Full Name</label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:border-velicx-indigo focus:outline-none focus:ring-1 focus:ring-velicx-indigo transition-all"
                    placeholder="John Doe"
                    id="contact-fullname-input"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-400 uppercase mb-2">My Coordinates (Email)</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:border-velicx-indigo focus:outline-none focus:ring-1 focus:ring-velicx-indigo font-mono transition-all"
                    placeholder="john@company.com"
                    id="contact-email-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-mono text-gray-400 uppercase mb-2">I Want to Build</label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-velicx-dark border border-white/10 rounded-xl text-white text-sm focus:border-velicx-indigo focus:outline-none transition-all appearance-none cursor-pointer"
                      id="contact-service-select"
                    >
                      <option value="web">Custom Website for Brand</option>
                      <option value="mobile">Premium Mobile Application</option>
                      <option value="builder">Portfolio Resume Tool Custom</option>
                      <option value="other">General Tech Consulting SLA</option>
                    </select>
                    {/* SVG Arrow */}
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-400 uppercase mb-2">Inquiry Subject (Optional)</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:border-velicx-indigo focus:outline-none focus:ring-1 focus:ring-velicx-indigo transition-all"
                    placeholder="e.g. Website Overhaul Design"
                    id="contact-subject-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase mb-2">My Message / Project Prompt</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:border-velicx-indigo focus:outline-none focus:ring-1 focus:ring-velicx-indigo transition-all resize-none"
                  placeholder="Outline your project scope, ideal deadlines, target audiences, or integrations needed..."
                  id="contact-message-input"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <span className="text-[10px] font-mono text-gray-500 flex items-center gap-1.5">
                  🛡️ Local Security Protection Complete
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3.5 bg-white hover:bg-white/90 text-velicx-dark text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg disabled:opacity-50 inline-flex"
                  id="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 border-2 border-velicx-dark border-t-transparent rounded-full animate-spin" />
                      <span>Formulating Ticket...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Launch Inquiry Ticket</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
