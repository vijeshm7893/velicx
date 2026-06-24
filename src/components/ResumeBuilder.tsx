import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Layers,
  Cpu,
  Monitor,
  CheckCircle2,
  Lock,
  Zap,
  Award
} from "lucide-react";
import { motion } from "motion/react";

export default function ResumeBuilder() {
  const features = [
    {
      icon: <Zap size={18} className="text-amber-400" />,
      title: "Real-Time Rendering Engine",
      description: "Watch your changes reflect instantly with precise typesetting on preview-perfect, modern PDF templates."
    },
    {
      icon: <Layers size={18} className="text-indigo-400" />,
      title: "Professional Layout Presets",
      description: "Toggle seamlessly between Creative, Executive, and Minimal styles without needing to re-enter data."
    },
    {
      icon: <Lock size={18} className="text-emerald-400" />,
      title: "100% Client-Side Privacy",
      description: "Your professional qualifications and personal history never leave your browser space or active session."
    },
    {
      icon: <Cpu size={18} className="text-blue-400" />,
      title: "Structured Schema Export",
      description: "Download lightweight JSON data maps of your resume to load and edit again in future career campaigns."
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="resume-builder-section">

      {/* Header Introduction */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-velicx-blue/15 to-velicx-indigo/15 border border-velicx-indigo/20 rounded-full text-xs font-mono font-medium text-velicx-indigo uppercase tracking-wider"
        >
          <Sparkles size={12} className="text-amber-400 animate-pulse" /> Executive Tool Released
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-white"
        >
          Portfolio Resume Builder
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm sm:text-base leading-relaxed"
        >
          We've graduated our dynamic builder tool into a fully standalone cloud suite so you can craft gorgeous corporate-ready developer resumes with custom styling widgets, responsive layouts, and zero configuration blockages.
        </motion.p>
      </div>

      {/* Main Bridge Launching Pad Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch select-none">

        {/* Left Side: Highlight list & Call to Action */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-white/5 border border-white/5 rounded-3xl p-6 sm:p-10 flex flex-col justify-between space-y-8 relative overflow-hidden"
        >
          {/* Subtle accent glow behind left panel */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-velicx-blue/10 rounded-full filter blur-3xl pointer-events-none" />

          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="p-1 px-2.5 bg-velicx-indigo/20 border border-velicx-indigo/30 rounded text-[9px] font-mono font-bold text-white uppercase tracking-wider">
                Active Release v2.4
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-mono text-green-400">
                <span className="h-1.5 w-1.5 bg-green-400 rounded-full animate-ping" />
                Build Server Online
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
              Craft beautiful modern PDFs with zero layout distortion.
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Tailored for software engineers, product architects, and technology leads. Feed your credentials into the interactive engine and download compliant, minimalist document templates optimized for modern applicant tracking networks.
            </p>

            {/* List of features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feat, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="shrink-0 mt-0.5">{feat.icon}</div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold text-white tracking-wide">{feat.title}</h4>
                    <p className="text-[11px] text-gray-500 leading-normal">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-gray-500 uppercase font-bold">
                <Monitor size={11} className="text-gray-400" /> Standalone Client Space
              </div>
              <p className="text-xs font-medium text-white">resume.velicx.in</p>
            </div>

            <a
              href="https://https://resume.velicx.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-velicx-blue to-velicx-indigo text-white hover:opacity-90 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer transform hover:-translate-y-0.5"
              id="resume-launcher-cta-btn"
            >
              <span>Launch Resume Builder</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Sleek Simulated Interactive Design Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 bg-gradient-to-br from-velicx-card/60 to-velicx-card/10 border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative"
        >
          {/* Subtle radial grid vector decoration */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-36 h-36 bg-velicx-purple/10 rounded-full filter blur-3xl pointer-events-none" />

          {/* Interactive Top Window Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/5 relative z-10">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400/80" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
              <span className="h-2 w-2 rounded-full bg-green-400/80" />
            </div>
            <div className="px-3.5 py-0.5 bg-white/5 rounded-md border border-white/5 text-[9px] font-mono text-gray-400">
              preview_minimalist_template.pdf
            </div>
            <Award size={14} className="text-indigo-400 animate-pulse" />
          </div>

          {/* Simulated Resume Frame */}
          <div className="my-6 bg-white rounded-xl shadow-2xl p-5 text-gray-800 space-y-4 text-[9px] transform rotate-1 hover:rotate-0 transition-transform duration-500 scale-95 relative z-10 select-none">
            <div className="flex justify-between items-start pb-3 border-b border-slate-100">
              <div>
                <h4 className="font-bold text-xs text-slate-900 leading-none">Christian Sterling</h4>
                <p className="font-semibold text-[8px] text-indigo-600 mt-1 uppercase tracking-wide">Principal Frontend Architect</p>
              </div>
              <div className="text-right text-slate-400 space-y-0.5">
                <p>sterling@velicx.io</p>
                <p>San Francisco, CA</p>
              </div>
            </div>

            <div className="space-y-1.5">
              <p className="font-bold text-[8px] uppercase tracking-wider text-slate-800 leading-none">Selected Works</p>
              <div className="space-y-1">
                <div className="flex justify-between font-semibold text-[8px]">
                  <span className="text-slate-900">Velicx Digital Suite</span>
                  <span className="text-slate-500">2024 - Present</span>
                </div>
                <p className="text-slate-500 leading-relaxed scale-y-95 origin-top">
                  Engineered atomic styling components using utility primitives. Rebuilt legacy dashboard streams to increase responsive animation performance by 3.5x.
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <p className="font-bold text-[8px] uppercase tracking-wider text-slate-800 leading-none">Technical Proficiencies</p>
              <div className="flex flex-wrap gap-1 pt-1">
                {["TypeScript", "React 19", "Tailwind CSS", "A/B Orchestration", "Motion Graphics"].map((tech, i) => (
                  <span key={i} className="px-1.5 py-0.5 bg-slate-50 text-slate-600 border border-slate-100 rounded text-[7px] font-medium leading-none">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center text-[7px] text-slate-400 border-t border-slate-100">
              <span>PDF Ready • 300 DPI Rendering</span>
              <span className="text-indigo-600 font-semibold flex items-center gap-0.5">
                <CheckCircle2 size={7} /> Verified Compliant
              </span>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/5 relative z-10 text-center">
            <div className="p-2 bg-white/5 rounded-xl border border-white/5">
              <p className="text-sm font-semibold text-white tracking-tight">3+</p>
              <p className="text-[8px] font-mono uppercase text-gray-500">Curated Themes</p>
            </div>
            <div className="p-2 bg-white/5 rounded-xl border border-white/5">
              <p className="text-sm font-semibold text-white tracking-tight">100%</p>
              <p className="text-[8px] font-mono uppercase text-gray-500">W3C PDF Compliant</p>
            </div>
            <div className="p-2 bg-white/5 rounded-xl border border-white/5">
              <p className="text-sm font-semibold text-white tracking-tight">Instant</p>
              <p className="text-[8px] font-mono uppercase text-gray-500">JSON Importer</p>
            </div>
          </div>

        </motion.div>

      </div>

    </div>
  );
}
