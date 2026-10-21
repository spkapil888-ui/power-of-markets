import React from 'react';
import { ShieldCheck, BrainCircuit, BarChart3, Calculator, Award, Users } from 'lucide-react';

export const WhyPomSection: React.FC = () => {
  const benefits = [
    {
      icon: BrainCircuit,
      title: 'First-Principles Math, Not Luck',
      description: 'We demystify the Black-Scholes formula into tangible intuition. You learn exactly why options decay, how volatility regimes shift, and where risk spikes.',
    },
    {
      icon: ShieldCheck,
      title: 'Strict Zero-Tip Policy',
      description: 'We do not sell telegram calls or advisory buy/sell tips. Our singular mission is to build independent, intellectually confident market participants.',
    },
    {
      icon: Calculator,
      title: 'Proprietary Risk Spreadsheets',
      description: 'Every student receives downloadable Excel and Google Sheets calculators for Delta-neutral position sizing, Theta capture, and portfolio Beta weighting.',
    },
    {
      icon: BarChart3,
      title: 'Indicator-Free Price Action',
      description: 'Strip away confusing lagging oscillators. Learn to identify institutional liquidity sweeps, order blocks, and market structure on clean naked charts.',
    },
    {
      icon: Users,
      title: 'Direct Access to Abhishek Upadhyay',
      description: 'Weekly interactive market Q&A sessions allow learners to review real-world trade adjustments and get questions clarified directly by our founder.',
    },
    {
      icon: Award,
      title: 'Institutional Grade Pedagogy',
      description: 'Over a decade of Indian derivatives research synthesized into systematic, modular video curriculums structured for lasting retention.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#EEF6FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold text-[#0767DF] uppercase tracking-wider font-mono mb-2">
            Institutional Principles
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#081B3A] tracking-tight">
            Why Power of Markets?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#61748D] leading-relaxed">
            In an industry dominated by speculative noise and get-rich-quick claims, Power of Markets stands as a sanctuary of mathematical discipline and authentic education.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="neu-card rounded-2xl p-7 bg-white transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EEF6FF] border border-[#DCEAF8] flex items-center justify-center text-[#0767DF] shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#071F49] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#61748D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
