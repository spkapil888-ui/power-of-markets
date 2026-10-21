import React from 'react';
import { FOUNDER_DATA } from '../data/mockData';
import { PageType } from '../types';
import { ShieldCheck, Award, BookOpen, Quote, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

interface FounderProfilePageProps {
  onNavigate: (page: PageType, courseId?: string) => void;
}

export const FounderProfilePage: React.FC<FounderProfilePageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Card Header */}
        <div className="neu-card rounded-3xl p-8 sm:p-12 bg-white border border-[#DCEAF8] mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Portrait / Monogram Emblem */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-br from-[#071F49] via-[#081B3A] to-[#0767DF] text-white flex flex-col items-center justify-center shadow-xl border-4 border-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern-dark opacity-35" />
                <span className="relative z-10 text-4xl sm:text-5xl font-mono font-extrabold tracking-tight">
                  AU
                </span>
                <span className="relative z-10 text-[11px] font-mono text-[#0AA8EF] mt-1">
                  Abhishek Upadhyay
                </span>
              </div>
              
              <div className="mt-4 flex items-center gap-1.5 px-3 py-1 bg-[#EEF6FF] rounded-full border border-[#DCEAF8] text-xs font-mono text-[#0767DF]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#159B72]" />
                <span>Verified Founder & CEO</span>
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-8 flex flex-col gap-3 text-left">
              <div className="text-xs font-bold text-[#0767DF] uppercase font-mono tracking-wider">
                Executive Profile
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#081B3A] tracking-tight">
                {FOUNDER_DATA.name}
              </h1>
              <p className="text-base text-[#0767DF] font-semibold">
                {FOUNDER_DATA.title}
              </p>
              <p className="text-sm text-[#61748D] leading-relaxed mt-2">
                {FOUNDER_DATA.bio}
              </p>

              {/* Action */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('course-detail', 'option-greeks')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Option Greeks Masterclass</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#071F49] bg-[#EEF6FF] hover:bg-[#DCEAF8] rounded-xl transition-colors cursor-pointer"
                >
                  Contact Abhishek
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Philosophy Callout */}
        <div className="p-8 rounded-3xl bg-[#071F49] text-white border border-white/10 relative overflow-hidden mb-14 shadow-lg">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
          <Quote className="w-8 h-8 text-[#0AA8EF] mb-4 opacity-80" />
          <blockquote className="relative z-10 text-base sm:text-lg text-[#DCEAF8] leading-relaxed italic max-w-3xl">
            "{FOUNDER_DATA.philosophy}"
          </blockquote>
          <div className="mt-4 pt-4 border-t border-white/10 text-xs font-mono text-[#0AA8EF]">
            — Abhishek Upadhyay, Founder & CEO
          </div>
        </div>

        {/* 2-Column Trajectory & Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="neu-card rounded-2xl p-7 bg-white border border-[#DCEAF8]">
            <h3 className="text-lg font-bold text-[#071F49] mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#0767DF]" />
              <span>Verified Qualifications & Credentials</span>
            </h3>
            <div className="space-y-3">
              {FOUNDER_DATA.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#081B3A]">
                  <CheckCircle2 className="w-4 h-4 text-[#159B72] shrink-0 mt-0.5" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="neu-card rounded-2xl p-7 bg-white border border-[#DCEAF8]">
            <h3 className="text-lg font-bold text-[#071F49] mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#0AA8EF]" />
              <span>Media Quotes & Industry Perspectives</span>
            </h3>
            <div className="space-y-4">
              {FOUNDER_DATA.mediaQuotes.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#EEF6FF] border border-[#DCEAF8]">
                  <p className="text-xs text-[#081B3A] italic leading-relaxed">
                    "{item.quote}"
                  </p>
                  <div className="mt-2 text-[11px] font-mono font-bold text-[#0767DF]">
                    — {item.source}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
