import React from 'react';
import { Compass, BookOpen, Laptop, Trophy, ArrowRight } from 'lucide-react';
import { PageType } from '../../types';

interface LearningJourneySectionProps {
  onNavigate: (page: PageType) => void;
}

export const LearningJourneySection: React.FC<LearningJourneySectionProps> = ({ onNavigate }) => {
  const steps = [
    {
      number: '01',
      title: 'Explore',
      subtitle: 'Identify Knowledge Gaps',
      description: 'Audit your current market orientation. Uncover hidden behavioral biases, unpack index mechanics, and select a focused learning track.',
      icon: Compass,
      accent: '#0767DF',
    },
    {
      number: '02',
      title: 'Learn',
      subtitle: 'Master Mathematical Greeks',
      description: 'Work through structured video lectures deconstructing Delta, Gamma, Theta decay, and implied volatility surfaces step-by-step.',
      icon: BookOpen,
      accent: '#0AA8EF',
    },
    {
      number: '03',
      title: 'Practice',
      subtitle: 'Excel Modeling & Simulation',
      description: 'Deploy our proprietary spreadsheets to model payoff curves, simulate extreme IV crush regimes, and run stress tests safely.',
      icon: Laptop,
      accent: '#159B72',
    },
    {
      number: '04',
      title: 'Build Knowledge',
      subtitle: 'Continuous Mentorship',
      description: 'Participate in live weekly market reviews with Abhishek Upadhyay to solidify disciplined execution and risk longevity.',
      icon: Trophy,
      accent: '#071F49',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold text-[#0767DF] uppercase tracking-wider font-mono mb-2">
            Pedagogical Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#081B3A] tracking-tight">
            The 360° Learning Journey
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#61748D]">
            A systematic progression engineered to transform chaotic speculation into structured, probabilistic market execution.
          </p>
        </div>

        {/* 4 Connected Milestone Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#DCEAF8] -translate-y-8 z-0 pointer-events-none" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative z-10 neu-card rounded-2xl p-6 bg-white flex flex-col justify-between border border-[#DCEAF8]"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xl font-extrabold text-[#0767DF]">
                      {step.number}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs"
                      style={{ backgroundColor: `${step.accent}15`, color: step.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#071F49] mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-medium text-[#0767DF] font-mono mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-[#61748D] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCEAF8] flex items-center justify-between text-xs text-[#61748D]">
                  <span className="font-mono text-[11px]">Phase {idx + 1}</span>
                  <button
                    onClick={() => onNavigate('courses')}
                    className="text-[#0767DF] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    Start <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
