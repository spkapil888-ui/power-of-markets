import React from 'react';
import { PageType } from '../../types';
import { BookOpen, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

interface ContactCtaSectionProps {
  onNavigate: (page: PageType) => void;
}

export const ContactCtaSection: React.FC<ContactCtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#071F49] via-[#081B3A] to-[#0767DF] text-white relative overflow-hidden">
      {/* Background radial lines and grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0AA8EF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0767DF]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#0AA8EF] text-xs font-mono mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-[#159B72]" />
          <span>Disciplined Quantitative Pedagogy</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto text-balance">
          Take the Next Step in Your Financial Learning Journey.
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base text-[#DCEAF8]/85 max-w-2xl mx-auto leading-relaxed text-balance">
          Stop gambling on emotional intuition and conflicting indicators. Master mathematical Option Greeks, structured risk containment, and institutional market structure.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('courses')}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#071F49] bg-white hover:bg-[#EEF6FF] rounded-xl shadow-lg transition-all cursor-pointer hover:shadow-xl hover:-translate-y-0.5"
          >
            <BookOpen className="w-4 h-4 text-[#0767DF]" />
            <span>Explore Courses</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl backdrop-blur-md transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#0AA8EF]" />
            <span>Contact Learner Support</span>
          </button>
        </div>

        {/* Bottom guarantee/clarity note */}
        <p className="mt-6 text-xs text-[#DCEAF8]/60 font-mono">
          Immediate LMS access upon enrollment · 100% Educational · No buy/sell tips
        </p>

      </div>
    </section>
  );
};
