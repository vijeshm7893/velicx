import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "privacy" | "terms" | "cookie" | null;
}

export default function PolicyModals({ isOpen, onClose, type }: PolicyModalProps) {
  const titles = {
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookie: "Cookie Policy",
  };

  const currentTitle = type ? titles[type] : "";

  return (
    <AnimatePresence>
      {isOpen && type && (
        <div id="policy-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-end bg-black/75 backdrop-blur-sm pointer-events-auto">
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%", opacity: 0.9 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="relative h-full w-full max-w-2xl bg-velicx-card border-l border-white/10 shadow-2xl flex flex-col z-10"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-velicx-dark/30 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-velicx-indigo animate-pulse" />
                <h3 className="text-xl font-display font-semibold tracking-tight text-white">
                  {currentTitle}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                id="policy-close-btn"
                aria-label="Close policy"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6 text-gray-300 text-sm leading-relaxed no-scrollbar">
              <div className="p-4 bg-velicx-indigo/10 border border-velicx-indigo/20 rounded-xl mb-4">
                <p className="font-medium text-white mb-1">🔒 Local Data Privacy Guarantee</p>
                As a premium software firm, Velicx guarantees that all services (including the **Interactive Resume Builder**) operate entirely client-side. Your inputs, career histories, and documents are stored **only on your device** and are never transmitted to any external server.
              </div>

              {type === "privacy" && (
                <>
                  <section className="space-y-2">
                    <h4 className="text-base font-display font-medium text-white">1. Information Collection</h4>
                    <p>
                      Velicx does not collect, harvest, or transmit any personal data entered into our digital applications. Any resume data, portfolio details, or customization information is managed natively in your web browser via React component memory and standard `localStorage`.
                    </p>
                  </section>
                  <section className="space-y-2">
                    <h4 className="text-base font-display font-medium text-white">2. Local Storage Usage</h4>
                    <p>
                      We utilize browser local storage strictly to save your active drafts and draft templates so you can leaves and return to your editing session without losing progress. You can easily clear this data at any point by purging your website metadata.
                    </p>
                  </section>
                  <section className="space-y-2">
                    <h4 className="text-base font-display font-medium text-white">3. Third-Party Integrations</h4>
                    <p>
                      Our web app does not leverage ad trackers, profile harvesting suites, or aggressive analytical pixels. We believe in pristine, uncompromised, surveillance-free software.
                    </p>
                  </section>
                  <section className="space-y-2">
                    <h4 className="text-base font-display font-medium text-white">4. Updates and Compliance</h4>
                    <p>
                      This policy is kept entirely transparent, adhering to global security principles. For any personal data compliance questions, you can contact our technical architects directly.
                    </p>
                  </section>
                </>
              )}

              {type === "terms" && (
                <>
                  <section className="space-y-2">
                    <h4 className="text-base font-display font-medium text-white">1. Provision of Services</h4>
                    <p>
                      Velicx provides top-tier technology consulting, customized high-end web platforms, bespoke mobile development designs, and open-source professional tools like the interactive resume builder.
                    </p>
                  </section>
                  <section className="space-y-2">
                    <h4 className="text-base font-display font-medium text-white">2. Open Source & Tool Usage</h4>
                    <p>
                      Our Resume builder and styling templates are free for career advancement. Documents produced may be exported, shared, printed, or compiled freely for commercial and private recruiting pipelines.
                    </p>
                  </section>
                  <section className="space-y-2">
                    <h4 className="text-base font-display font-medium text-white">3. Platform Intellectual Property</h4>
                    <p>
                      All brand assets, custom coded layouts, and geometric design layouts are protected under trademark and software proprietary norms of Velicx digital agency.
                    </p>
                  </section>
                  <section className="space-y-2">
                    <h4 className="text-base font-display font-medium text-white">4. Absolute Limitation of Liability</h4>
                    <p>
                      Velicx provides these assets "as-is". We are not responsible for any local browser memory corruption, browser hardware performance limits, or recruiter results achieved through our open tools.
                    </p>
                  </section>
                </>
              )}

              {type === "cookie" && (
                <>
                  <section className="space-y-2">
                    <h4 className="text-base font-display font-medium text-white">1. What are Cookies?</h4>
                    <p>
                      Cookies are lightweight files stored in your web browser. Typically used to identify returning sessions or preserve configuration preferences.
                    </p>
                  </section>
                  <section className="space-y-2">
                    <h4 className="text-base font-display font-medium text-white">2. How Velicx Uses Cookies</h4>
                    <p>
                      Velicx avoids non-consensual session tracking entirely. We rely solely on stateful `localStorage` items to support theme configurations, active template selections, and drafted resume models.
                    </p>
                  </section>
                  <section className="space-y-2">
                    <h4 className="text-base font-display font-medium text-white">3. Deleting Local Storage Assets</h4>
                    <p>
                      You are in complete control of your data footprint. You can opt to reset your active draft or remove stored items instantly through your browser settings.
                    </p>
                  </section>
                </>
              )}

              <div className="border-t border-white/10 pt-6 mt-6">
                <span className="text-xs text-gray-500 font-mono">Velicx Legal Framework v1.4 • Effective June 2026</span>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-white/10 bg-velicx-dark/50 flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all font-medium text-sm"
                id="policy-accept-btn"
              >
                Understood & Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
