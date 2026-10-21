import React from 'react';
import { PageType } from '../types';
import { ShieldCheck, Compass, Target, BookOpen, ArrowRight, Award, CheckCircle } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DCEAF8] rounded-full text-xs font-semibold text-[#0767DF] font-mono mb-4">
            About Power of Markets (POM)
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B3A] tracking-tight leading-tight">
            Institutional Market Education Engineered for Independent Learners.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#61748D] leading-relaxed">
            Power of Markets was established by quantitative derivatives specialist Abhishek Upadhyay with a resolute mission: to replace speculative gambling habits with first-principles mathematical discipline.
          </p>
        </div>

        {/* Mission & Vision Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="neu-card rounded-3xl p-8 bg-white border border-[#DCEAF8] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EEF6FF] text-[#0767DF] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#071F49] mb-3">
                Our Core Mission
              </h2>
              <p className="text-sm text-[#61748D] leading-relaxed">
                To equip Indian market participants with institutional-grade analytical frameworks—Option Greeks, statistical volatility modeling, naked price action, and balance sheet valuation—enabling them to evaluate risk objectively and preserve capital across shifting market regimes.
              </p>
            </div>
            <div className="pt-6 border-t border-[#DCEAF8] mt-6 flex items-center gap-2 text-xs font-mono text-[#0767DF]">
              <ShieldCheck className="w-4 h-4 text-[#159B72]" />
              <span>Zero-Tip Policy · Strictly Educational</span>
            </div>
          </div>

          <div className="neu-card rounded-3xl p-8 bg-white border border-[#DCEAF8] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EEF6FF] text-[#0AA8EF] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#071F49] mb-3">
                Our 360° Vision
              </h2>
              <p className="text-sm text-[#61748D] leading-relaxed">
                A financial ecosystem where retail traders no longer rely on unverified social media tipsters or emotional sentiment. By establishing mathematical literacy as the standard entry requirement, we aspire to build a generation of disciplined, self-reliant Indian investors and derivative specialists.
              </p>
            </div>
            <div className="pt-6 border-t border-[#DCEAF8] mt-6 flex items-center gap-2 text-xs font-mono text-[#071F49]">
              <Award className="w-4 h-4 text-[#0767DF]" />
              <span>Continuous Research & Mentorship</span>
            </div>
          </div>
        </div>

        {/* Educational Philosophy & Principles */}
        <div className="mb-20 bg-[#071F49] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-mono text-[#0AA8EF] uppercase tracking-wider font-bold">
              Pedagogical Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
              The 360° Market Knowledge Framework
            </h2>
            <p className="text-sm text-[#DCEAF8]/85 leading-relaxed mb-8">
              True market mastery cannot exist in silos. An options trader who ignores macro liquidity will be blinded by sudden central bank policy shifts; an investor who neglects derivatives cannot cost-effectively hedge downside risk.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#DCEAF8]">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#159B72] shrink-0 mt-0.5" />
                <span>Mathematical pricing models instead of indicator clutter</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#159B72] shrink-0 mt-0.5" />
                <span>Downloadable risk matrices and volatility spreadsheets</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#159B72] shrink-0 mt-0.5" />
                <span>Weekly live market reviews with founder Abhishek Upadhyay</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#159B72] shrink-0 mt-0.5" />
                <span>Strict adherence to SEBI compliance and regulatory guidelines</span>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Spotlight Quick Link */}
        <div className="neu-card rounded-3xl p-8 bg-white border border-[#DCEAF8] flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono text-[#0767DF] font-bold uppercase mb-1">
              Leadership
            </div>
            <h3 className="text-xl font-bold text-[#071F49]">
              Meet Abhishek Upadhyay, Founder & Head Educator
            </h3>
            <p className="text-xs sm:text-sm text-[#61748D] mt-1 max-w-xl">
              Over a decade of quantitative derivatives experience synthesizing complex options dynamics into intuitive, actionable frameworks for over 15,000 students.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('founder')}
              className="px-5 py-2.5 text-xs font-semibold text-[#071F49] bg-[#EEF6FF] hover:bg-[#DCEAF8] rounded-xl transition-colors cursor-pointer"
            >
              View Biography
            </button>
            <button
              onClick={() => onNavigate('courses')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
