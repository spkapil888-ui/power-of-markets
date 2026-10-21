import React from 'react';
import { FOUNDER_DATA } from '../../data/mockData';
import { PageType } from '../../types';
import { Award, ArrowRight, Quote, CheckCircle, ShieldCheck } from 'lucide-react';

interface FounderSectionProps {
  onNavigate: (page: PageType) => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#EEF6FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Founder Visual & Trust Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Portrait Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white bg-gradient-to-br from-[#071F49] via-[#081B3A] to-[#0767DF] p-8 text-white">
              
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />

              {/* Founder Monogram & Badge */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center font-mono font-bold text-2xl text-white shadow-inner">
                  AU
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0AA8EF]/20 border border-[#0AA8EF]/40 text-[#0AA8EF] text-xs font-mono font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Founder</span>
                </div>
              </div>

              {/* Name & Title */}
              <div className="relative z-10 mb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {FOUNDER_DATA.name}
                </h3>
                <p className="text-sm text-[#0AA8EF] font-medium mt-1">
                  {FOUNDER_DATA.role} · Power of Markets
                </p>
              </div>

              {/* Direct Founder Quote */}
              <div className="relative z-10 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-[#DCEAF8] leading-relaxed mb-6">
                <Quote className="w-5 h-5 text-[#0AA8EF] mb-2 opacity-80" />
                <p className="italic">"{FOUNDER_DATA.philosophy}"</p>
              </div>

              {/* Quick Metrics */}
              <div className="relative z-10 grid grid-cols-2 gap-4 pt-4 border-t border-white/15 text-xs">
                <div>
                  <span className="block font-mono text-lg font-bold text-white">10+ Years</span>
                  <span className="text-[#DCEAF8]/70 text-[11px]">Derivatives Experience</span>
                </div>
                <div>
                  <span className="block font-mono text-lg font-bold text-[#0AA8EF]">15,000+</span>
                  <span className="text-[#DCEAF8]/70 text-[11px]">Learners Mentored</span>
                </div>
              </div>
            </div>

            {/* Subtle Glass Floating Element */}
            <div className="hidden sm:flex absolute -bottom-4 -right-4 glass-panel rounded-2xl p-3 border border-white shadow-lg items-center gap-2 text-xs">
              <Award className="w-5 h-5 text-[#159B72]" />
              <span className="font-bold text-[#071F49]">Black-Scholes Mathematical Edge</span>
            </div>

          </div>

          {/* Right Column: Founder Story & Pedagogy */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            <div className="text-xs font-bold text-[#0767DF] uppercase tracking-wider font-mono">
              The Mind Behind POM
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#081B3A] tracking-tight">
              Demystifying Indian Markets Through First-Principles Logic
            </h2>

            <p className="text-sm sm:text-base text-[#61748D] leading-relaxed">
              {FOUNDER_DATA.bio}
            </p>

            {/* Verified Credentials Checklist */}
            <div className="space-y-3 pt-2">
              {FOUNDER_DATA.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#081B3A]">
                  <CheckCircle className="w-4 h-4 text-[#0767DF] shrink-0 mt-0.5" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>

            {/* Navigation Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('founder')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl shadow-xs transition-all cursor-pointer hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Read Full Biography</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#071F49] bg-white hover:bg-[#EEF6FF] border border-[#DCEAF8] rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <span>Explore Our Story</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
