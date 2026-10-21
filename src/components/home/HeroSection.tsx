import React, { useState } from 'react';
import { PageType } from '../../types';
import { 
  ArrowRight, 
  BookOpen, 
  Compass, 
  ShieldCheck, 
  TrendingUp, 
  Activity, 
  Layers, 
  Play,
  TrendingDown,
  LineChart,
  BarChart3,
  Award,
  Clock
} from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageType, courseId?: string) => void;
  onOpenVideoModal?: (videoId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenVideoModal }) => {
  const [activeGreek, setActiveGreek] = useState<'delta' | 'gamma' | 'theta' | 'vega'>('delta');
  const [activeInstrument, setActiveInstrument] = useState<'nifty' | 'banknifty'>('nifty');

  const greekData = {
    delta: { 
      symbol: 'Δ Delta', 
      value: '+0.52', 
      desc: 'Directional sensitivity per 1-point index move. Quantifies hedge ratio.', 
      formula: '∂V / ∂S',
      action: 'Delta-Neutral Scalping' 
    },
    gamma: { 
      symbol: 'Γ Gamma', 
      value: '+0.038', 
      desc: 'Rate of change in Delta as spot price moves. Governs 0DTE velocity spikes.', 
      formula: '∂²V / ∂S²',
      action: 'Curvature Risk Hedge' 
    },
    theta: { 
      symbol: 'Θ Theta', 
      value: '-14.80', 
      desc: 'Time decay of option premium per calendar day. The option seller’s edge.', 
      formula: '∂V / ∂t',
      action: 'Daily Premium Capture' 
    },
    vega: { 
      symbol: 'ν Vega', 
      value: '+8.45', 
      desc: 'Sensitivity to a 1% shift in Implied Volatility (IV). Crucial around event risk.', 
      formula: '∂V / ∂σ',
      action: 'Volatility Crush Arbitrage' 
    },
  };

  const marketIndices = [
    { name: 'NIFTY 50', value: '24,852.15', change: '+142.30', pct: '+0.58%', isUp: true },
    { name: 'BANK NIFTY', value: '51,780.40', change: '+310.85', pct: '+0.60%', isUp: true },
    { name: 'INDIA VIX', value: '13.45', change: '-0.62', pct: '-4.41%', isUp: false, note: 'Low Vol Regime' },
    { name: 'SENSEX', value: '81,420.90', change: '+480.20', pct: '+0.59%', isUp: true },
    { name: 'FINNIFTY', value: '23,410.20', change: '+88.50', pct: '+0.38%', isUp: true },
    { name: 'NIFTY IT', value: '42,190.50', change: '+520.10', pct: '+1.25%', isUp: true },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#020713] via-[#051739] to-[#041026] text-white pt-3 pb-16 lg:pt-5 lg:pb-24 overflow-hidden border-b border-[#0AA8EF]/20">
      
      {/* Background radial ambient lights */}
      <div className="absolute top-0 left-1/4 w-[650px] h-[500px] bg-[#0767DF]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[450px] bg-[#0AA8EF]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[600px] h-[400px] bg-[#159B72]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />

      {/* 1. Real-time Indian Stock Market Live Ticker Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 relative z-20">
        <div className="bg-[#030B1C]/80 backdrop-blur-md rounded-2xl p-2.5 sm:px-4 border border-white/10 shadow-lg flex items-center justify-between gap-4 overflow-x-auto">
          {/* Market Status Indicator */}
          <div className="flex items-center gap-2 shrink-0 pr-3 border-r border-white/15 text-[11px] font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#159B72] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#159B72]" />
            </span>
            <span className="text-[#0AA8EF] font-bold">NSE / BSE LIVE</span>
          </div>

          {/* Scrolling / Flex Tickers */}
          <div className="flex items-center gap-6 text-xs font-mono shrink-0">
            {marketIndices.map((idx, i) => (
              <div key={i} className="flex items-center gap-2 shrink-0">
                <span className="text-[#DCEAF8]/75 font-semibold text-[11px]">{idx.name}</span>
                <span className="text-white font-bold tabular-nums">{idx.value}</span>
                <span className={`inline-flex items-center gap-0.5 text-[11px] font-bold tabular-nums ${idx.isUp ? 'text-[#159B72]' : 'text-[#0AA8EF]'}`}>
                  {idx.isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {idx.change} ({idx.pct})
                </span>
                {idx.note && (
                  <span className="hidden xl:inline text-[9px] px-1.5 py-0.5 rounded bg-[#0AA8EF]/20 text-[#0AA8EF] border border-[#0AA8EF]/30 font-sans">
                    {idx.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Desktop 2-Column Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Quantitative Stock Market Positioning */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full w-fit shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#159B72]" />
              <span className="text-xs font-semibold text-[#0AA8EF] uppercase tracking-wider font-mono">
                SEBI Standard Framework · 360° Financial Pedagogy
              </span>
            </div>

            {/* Main Headline with Vivid Gradient Accent */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-extrabold text-white leading-[1.12] tracking-tight text-balance">
              Master the Stock Market with{' '}
              <span className="bg-gradient-to-r from-[#0AA8EF] via-[#38BDF8] to-[#159B72] bg-clip-text text-transparent">
                Quantitative Discipline
              </span>{' '}
              & Mathematical Edge.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#DCEAF8]/90 leading-relaxed max-w-2xl text-balance">
              Dismantle emotional gambling and conflicting indicators. Learn mathematical Option Greeks, structured liquidity sweeps, and institutional risk management directly from Abhishek Upadhyay.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('courses')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-[#0767DF] hover:bg-[#0AA8EF] rounded-xl shadow-xl shadow-[#0767DF]/30 transition-all cursor-pointer hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <BookOpen className="w-5 h-5" />
                <span>Explore Verified Curriculums</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl backdrop-blur-md transition-all cursor-pointer hover:border-[#0AA8EF]/60 shadow-xs"
              >
                <Compass className="w-4 h-4 text-[#0AA8EF]" />
                <span>Discover POM Methodology</span>
              </button>

              {onOpenVideoModal && (
                <button
                  onClick={() => onOpenVideoModal('overview')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0AA8EF] hover:text-white transition-colors py-2 px-2 cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-[#0AA8EF]/20 flex items-center justify-center border border-[#0AA8EF]/40">
                    <Play className="w-3.5 h-3.5 fill-[#0AA8EF] text-[#0AA8EF]" />
                  </div>
                  <span>Watch Curriculum Tour (3 Min)</span>
                </button>
              )}
            </div>

            {/* Institutional Trust Indicators on Dark Surface */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#DCEAF8]/80 border-t border-white/15">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#159B72]" />
                <span className="font-semibold text-white">Strict Zero-Tip Policy</span>
              </div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-[#0AA8EF]" />
                <span className="font-semibold text-white">Mathematical Greeks Engine</span>
              </div>
              <span className="text-white/30">·</span>
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#38BDF8]" />
                <span className="font-semibold text-white">15,000+ Serious Market Learners</span>
              </div>
            </div>

          </div>

          {/* Right Column: Advanced FinTech Market & Options Terminal */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Glassmorphic Stock Market Terminal */}
            <div className="bg-[#030D22]/85 backdrop-blur-xl rounded-3xl p-6 border border-[#0AA8EF]/30 shadow-2xl relative overflow-hidden">
              
              {/* Header of Terminal */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#159B72] animate-pulse" />
                  <span className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                    POM Market Risk Terminal
                  </span>
                </div>
                <div className="flex items-center gap-1 p-0.5 bg-white/10 rounded-lg border border-white/15">
                  <button
                    onClick={() => setActiveInstrument('nifty')}
                    className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded transition-colors cursor-pointer ${
                      activeInstrument === 'nifty' ? 'bg-[#0767DF] text-white' : 'text-[#DCEAF8]/70 hover:text-white'
                    }`}
                  >
                    NIFTY
                  </button>
                  <button
                    onClick={() => setActiveInstrument('banknifty')}
                    className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded transition-colors cursor-pointer ${
                      activeInstrument === 'banknifty' ? 'bg-[#0767DF] text-white' : 'text-[#DCEAF8]/70 hover:text-white'
                    }`}
                  >
                    BANKNIFTY
                  </button>
                </div>
              </div>

              {/* Candlestick & Market Curve Graphic */}
              <div className="mt-4 relative h-48 w-full bg-[#020817] rounded-2xl p-4 overflow-hidden shadow-inner flex flex-col justify-between border border-white/10">
                
                {/* Background Grid inside terminal */}
                <div className="absolute inset-0 bg-grid-pattern-dark opacity-45" />

                {/* Top Info inside dark chart */}
                <div className="relative z-10 flex items-center justify-between text-xs text-[#DCEAF8]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-white text-sm">
                      {activeInstrument === 'nifty' ? 'NIFTY 24850 ATM STRADDLE' : 'BANKNIFTY 51800 STRADDLE'}
                    </span>
                    <span className="text-[#0AA8EF] text-[10px] font-mono bg-[#0AA8EF]/20 px-1.5 py-0.5 rounded border border-[#0AA8EF]/30">
                      WEEKLY
                    </span>
                  </div>
                  <span className="font-mono text-[#159B72] text-xs font-bold">
                    IV: 13.8% · IVR: 28
                  </span>
                </div>

                {/* SVG Candlestick & Volatility Curve Graph */}
                <div className="relative z-10 w-full h-28">
                  <svg className="w-full h-full" viewBox="0 0 360 110" fill="none">
                    {/* Horizontal Reference Lines */}
                    <line x1="0" y1="30" x2="360" y2="30" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                    <line x1="0" y1="60" x2="360" y2="60" stroke="rgba(255,255,255,0.12)" strokeDasharray="4 4" />
                    <line x1="0" y1="90" x2="360" y2="90" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />

                    {/* Candlesticks (Green bullish & Red pullbacks with wicks) */}
                    {/* Candle 1 (Bull) */}
                    <line x1="25" y1="50" x2="25" y2="85" stroke="#159B72" strokeWidth="1.5" />
                    <rect x="21" y="58" width="8" height="18" fill="#159B72" rx="1" />
                    
                    {/* Candle 2 (Bull) */}
                    <line x1="55" y1="45" x2="55" y2="78" stroke="#159B72" strokeWidth="1.5" />
                    <rect x="51" y="52" width="8" height="18" fill="#159B72" rx="1" />
                    
                    {/* Candle 3 (Pullback / Rejection) */}
                    <line x1="85" y1="48" x2="85" y2="82" stroke="#EF4444" strokeWidth="1.5" />
                    <rect x="81" y="56" width="8" height="16" fill="#EF4444" rx="1" />
                    
                    {/* Candle 4 (Bullish Order Block Test) */}
                    <line x1="120" y1="38" x2="120" y2="70" stroke="#159B72" strokeWidth="1.5" />
                    <rect x="116" y="44" width="8" height="20" fill="#159B72" rx="1" />
                    
                    {/* Candle 5 (Strong Breakout) */}
                    <line x1="155" y1="28" x2="155" y2="62" stroke="#159B72" strokeWidth="1.5" />
                    <rect x="151" y="32" width="8" height="24" fill="#159B72" rx="1" />
                    
                    {/* Candle 6 (Small Consolidation) */}
                    <line x1="190" y1="25" x2="190" y2="55" stroke="#0AA8EF" strokeWidth="1.5" />
                    <rect x="186" y="30" width="8" height="16" fill="#0AA8EF" rx="1" />
                    
                    {/* Candle 7 (Expansion High) */}
                    <line x1="225" y1="18" x2="225" y2="48" stroke="#159B72" strokeWidth="1.5" />
                    <rect x="221" y="22" width="8" height="20" fill="#159B72" rx="1" />

                    {/* Smooth Option Greeks Volatility Curve Path */}
                    <path
                      d="M 10 85 Q 90 75 170 40 T 350 20"
                      stroke="#0AA8EF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Area under curve */}
                    <path
                      d="M 10 85 Q 90 75 170 40 T 350 20 L 350 105 L 10 105 Z"
                      fill="url(#greekAreaGradDark)"
                      opacity="0.3"
                    />
                    <defs>
                      <linearGradient id="greekAreaGradDark" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0AA8EF" />
                        <stop offset="100%" stopColor="#020817" />
                      </linearGradient>
                    </defs>

                    {/* Institutional Order Block Highlight */}
                    <rect x="110" y="42" width="70" height="26" fill="rgba(10, 168, 239, 0.12)" stroke="#0AA8EF" strokeWidth="1" strokeDasharray="3 3" rx="2" />
                    <text x="115" y="58" fill="#0AA8EF" fontSize="9" fontFamily="monospace" fontWeight="bold">LIQUIDITY SWEEP</text>

                    {/* Floating Spot Node */}
                    <circle cx="225" cy="26" r="5" fill="#FFFFFF" stroke="#0767DF" strokeWidth="2.5" />
                  </svg>
                </div>

                {/* Bottom ticker line */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#DCEAF8]/80 pt-1 border-t border-white/10">
                  <span className="text-[#159B72] font-semibold">PCR: 1.15 (Bullish Bias)</span>
                  <span>Theta: +₹1,480/day</span>
                  <span className="text-[#0AA8EF]">Delta: 0.52 ATM</span>
                </div>
              </div>

              {/* Interactive Greek Selector Tabs */}
              <div className="mt-4">
                <div className="text-[11px] font-bold text-[#DCEAF8]/75 uppercase tracking-wider mb-2 flex items-center justify-between font-mono">
                  <span>Option Greeks Matrix:</span>
                  <span className="text-[#0AA8EF] font-semibold text-[10px]">Select Greek to inspect</span>
                </div>
                
                <div className="grid grid-cols-4 gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10">
                  {(['delta', 'gamma', 'theta', 'vega'] as const).map((key) => {
                    const item = greekData[key];
                    const isSelected = activeGreek === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveGreek(key)}
                        className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer text-center ${
                          isSelected
                            ? 'bg-[#0767DF] text-white shadow-md border border-[#0AA8EF]/40'
                            : 'text-[#DCEAF8]/70 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <div className="text-[10px] font-mono font-bold">{key.toUpperCase()}</div>
                        <div className="text-xs font-mono font-extrabold text-white mt-0.5">
                          {item.value}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Active Greek Explanation Card */}
                <div className="mt-3 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs flex items-center justify-between">
                  <div className="pr-2">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-bold text-white font-mono">{greekData[activeGreek].symbol}</span>
                      <span className="text-[10px] font-mono text-[#0AA8EF] bg-[#0AA8EF]/20 px-1.5 py-0.2 rounded border border-[#0AA8EF]/30">
                        {greekData[activeGreek].formula}
                      </span>
                    </div>
                    <p className="text-[#DCEAF8]/80 text-[11px] leading-relaxed">
                      {greekData[activeGreek].desc}
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate('course-detail', 'option-greeks')}
                    className="shrink-0 px-2.5 py-1.5 bg-[#0AA8EF]/20 hover:bg-[#0AA8EF]/30 text-[#0AA8EF] border border-[#0AA8EF]/40 rounded-lg text-[11px] font-bold cursor-pointer transition-colors whitespace-nowrap"
                  >
                    View in Course →
                  </button>
                </div>
              </div>

            </div>

            {/* Floating Glass Badge 1 (360° Knowledge) */}
            <div className="hidden sm:flex absolute -bottom-5 -left-4 bg-[#030D22]/95 backdrop-blur-md rounded-2xl p-3 border border-[#0AA8EF]/30 shadow-xl items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0767DF] text-white flex items-center justify-center font-bold font-mono text-sm shadow-sm">
                360°
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">Full Market Cycle</p>
                <p className="text-[#0AA8EF] text-[11px]">Equities · Derivatives · Risk</p>
              </div>
            </div>

            {/* Floating Glass Badge 2 (Abhishek Upadhyay) */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#030D22]/95 backdrop-blur-md rounded-2xl p-2.5 px-3.5 border border-[#0AA8EF]/30 shadow-xl items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#159B72] text-white flex items-center justify-center font-bold text-xs">
                AU
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">Abhishek Upadhyay</p>
                <p className="text-[#0AA8EF] text-[11px] font-medium">Head Educator</p>
              </div>
            </div>

          </div>

        </div>

        {/* Full-Width 4-Column KPI Strip in Dark Banner */}
        <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">15,000+</span>
            <span className="text-xs text-[#DCEAF8]/75 mt-1 font-medium">Disciplined Market Learners</span>
          </div>
          <div className="flex flex-col p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#0AA8EF] font-mono tabular-nums">100%</span>
            <span className="text-xs text-[#DCEAF8]/75 mt-1 font-medium">Mathematical & Risk Based</span>
          </div>
          <div className="flex flex-col p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#38BDF8] font-mono tabular-nums">360°</span>
            <span className="text-xs text-[#DCEAF8]/75 mt-1 font-medium">Derivatives & Technical Tracks</span>
          </div>
          <div className="flex flex-col p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#159B72] font-mono tabular-nums">Zero Tips</span>
            <span className="text-xs text-[#DCEAF8]/75 mt-1 font-medium">Zero Speculative Bias</span>
          </div>
        </div>

      </div>
    </section>
  );
};
