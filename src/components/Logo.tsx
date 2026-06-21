import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  symbolSize?: number;
  hideText?: boolean;
}

export default function Logo({ className = "", symbolSize = 40, hideText = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Velicx V-Wing Symbol */}
      <motion.svg
        width={symbolSize}
        height={symbolSize}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.05, rotate: [0, -3, 3, 0] }}
        transition={{ duration: 0.4 }}
      >
        <defs>
          <linearGradient id="v-wing-grad" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#0052FF" />
            <stop offset="40%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Slanted Left Arm of V */}
        <path
          d="M32 30 C32 26 35 24 39 24 L52 24 C55 24 57 26 59 29 L74 65 C77 71 81 74 87 74 L92 74 C97 74 101 70 101 65 C101 60 97 56 92 56 L85 56 C81 56 78 53 78 49 C78 45 81 42 85 42 L95 42 C103 42 109 48 109 56 C109 71 97 83 82 83 C67 83 58 74 54 66 L34 33 C33 31 32 30 32 30 Z"
          fill="url(#v-wing-grad)"
        />

        {/* Top Wing Feather (Right) */}
        <path
          d="M66 26 C66 26 72 25 78 25 L106 25 C111 25 115 29 113 34 C111 39 106 42 101 42 L76 42 C72 42 66 36 66 26 Z"
          fill="url(#v-wing-grad)"
        />

        {/* Middle Wing Feather (Right) */}
        <path
          d="M58 46 C58 46 64 45 70 45 L94 45 C99 45 103 49 101 54 C99 59 94 62 89 62 L68 62 C64 62 58 56 58 46 Z"
          fill="url(#v-wing-grad)"
        />
      </motion.svg>

      {/* Velicx Full Wordmark - Designed with clean, crisp matching geometric SVG characters */}
      {!hideText && (
        <svg
          height={symbolSize * 0.45}
          viewBox="0 0 200 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white dark:text-white"
        >
          <defs>
            <linearGradient id="gradient-x" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>

          {/* v */}
          <path d="M12 12 L22 32 C23 34 25 34 26 32 L36 12" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* e */}
          <path d="M64 22 L46 22 C46 15 51 11 56 11 C62 11 65 15 65 18 M46 22 C46 29 51 33 57 33 C62 33 65 30 65 28" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* l */}
          <path d="M80 8 L80 32" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* i */}
          <path d="M96 17 L96 32" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
          <circle cx="96" cy="10" r="2.5" fill="currentColor" />
          
          {/* c */}
          <path d="M128 12 C120 12 114 17 114 22 C114 27 120 32 128 32" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
          
          {/* x */}
          {/* Right-down stroke (slate/grey theme colored) */}
          <path d="M145 13 L163 31" stroke="currentColor" strokeWidth="4.8" strokeLinecap="round" />
          {/* Left-down violet gradient stroke (this is the special branding accent on the X!) */}
          <path d="M163 13 L145 31" stroke="url(#gradient-x)" strokeWidth="4.8" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
}
