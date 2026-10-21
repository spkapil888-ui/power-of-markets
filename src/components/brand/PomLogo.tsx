import React from 'react';

interface PomLogoProps {
  variant?: 'horizontal' | 'compact' | 'icon-only';
  theme?: 'light' | 'dark' | 'auto';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PomLogo: React.FC<PomLogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  className = '',
  size = 'md',
}) => {
  // Dimensions
  const iconSizes = {
    sm: 32,
    md: 40,
    lg: 52,
  };

  const currentSize = iconSizes[size];

  // Colors based on theme
  const isLight = theme === 'light'; // Light text for dark navy background
  const textPrimary = isLight ? '#FFFFFF' : '#071F49';
  const textMuted = isLight ? '#0AA8EF' : '#0767DF';

  return (
    <div className={`inline-flex items-center gap-2.5 font-sans select-none ${className}`}>
      {/* Precision Vector Emblem: Interconnected 360° Orbit, P-O-M geometry and upward trajectory */}
      <svg
        width={currentSize}
        height={currentSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:rotate-6"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="pomGradient" x1="10" y1="90" x2="90" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#071F49" />
            <stop offset="50%" stopColor="#0767DF" />
            <stop offset="100%" stopColor="#0AA8EF" />
          </linearGradient>
          <linearGradient id="pomAccent" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0AA8EF" />
            <stop offset="100%" stopColor="#0767DF" />
          </linearGradient>
        </defs>

        {/* 360° Knowledge Outer Orbit Ring with subtle break */}
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke="url(#pomGradient)"
          strokeWidth="3.5"
          strokeDasharray="210 25"
          strokeLinecap="round"
        />

        {/* Inner Precision Grid Node */}
        <circle cx="50" cy="50" r="30" stroke={isLight ? 'rgba(255,255,255,0.18)' : 'rgba(7, 31, 73, 0.12)'} strokeWidth="1.5" />

        {/* Flat Modern 'P-O-M' Interlocking Path & Ascending Growth Vector */}
        {/* 'P' stem and loop */}
        <path
          d="M 28 68 V 32 H 42 C 48 32 52 36 52 42 C 52 48 48 52 42 52 H 28"
          stroke="#0767DF"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 'O' Core 360° Center Circle */}
        <circle
          cx="50"
          cy="50"
          r="10"
          fill={isLight ? '#071F49' : '#FFFFFF'}
          stroke="#0AA8EF"
          strokeWidth="4"
        />

        {/* 'M' Ascending Bridge to New Highs */}
        <path
          d="M 50 68 V 44 L 62 58 L 74 44 V 68"
          stroke="#0AA8EF"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Upward Growth Arrow Vector at Top Right */}
        <path
          d="M 66 22 L 78 22 L 78 34 M 78 22 L 60 40"
          stroke="#159B72"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Typography Label */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col tracking-tight leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`text-lg md:text-xl font-extrabold tracking-tight ${isLight ? 'text-white' : 'text-[#071F49]'}`}
              style={{ color: textPrimary, fontFamily: "'Manrope', sans-serif" }}
            >
              POWER OF MARKETS
            </span>
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase font-mono ${isLight ? 'bg-[#0AA8EF]/20 text-[#0AA8EF]' : 'bg-[#DCEAF8] text-[#0767DF]'}`}
              style={{
                backgroundColor: isLight ? 'rgba(10, 168, 239, 0.2)' : '#DCEAF8',
                color: isLight ? '#0AA8EF' : '#0767DF',
              }}
            >
              POM
            </span>
          </div>
          {variant === 'horizontal' && (
            <span
              className={`text-[11px] font-medium tracking-normal mt-0.5 ${isLight ? 'text-[#0AA8EF]' : 'text-[#0767DF]'}`}
              style={{ color: textMuted }}
            >
              360° Financial Education
            </span>
          )}
        </div>
      )}
    </div>
  );
};
