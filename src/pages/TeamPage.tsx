import React from 'react';
import { TEAM_MEMBERS_DATA } from '../data/mockData';
import { PageType } from '../types';
import { Users, Award, ShieldCheck, ArrowRight } from 'lucide-react';

interface TeamPageProps {
  onNavigate: (page: PageType) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DCEAF8] rounded-full text-xs font-semibold text-[#0767DF] font-mono mb-3">
            Academic Faculty & Research
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B3A] tracking-tight">
            The Quantitative Minds Behind Power of Markets.
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#61748D] leading-relaxed">
            Led by founder Abhishek Upadhyay, our multidisciplinary team of derivatives analysts, quantitative modelers, and curriculum architects is committed to pedagogical excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {TEAM_MEMBERS_DATA.map((member) => (
            <div
              key={member.id}
              className="neu-card rounded-2xl p-6 bg-white border border-[#DCEAF8] flex flex-col justify-between"
            >
              <div>
                {/* Monogram Badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#071F49] to-[#0767DF] text-white flex items-center justify-center font-mono font-bold text-lg mb-4 shadow-sm">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>

                <div className="text-xs font-mono text-[#0767DF] font-bold mb-1">
                  {member.role}
                </div>

                <h3 className="text-lg font-bold text-[#071F49] mb-2">
                  {member.name}
                </h3>

                <p className="text-xs text-[#61748D] leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCEAF8] space-y-1 text-[11px] font-mono text-[#61748D]">
                <div>
                  <strong className="text-[#071F49]">Specialization:</strong> {member.specialization}
                </div>
                <div>
                  <strong className="text-[#071F49]">Experience:</strong> {member.experienceYears}+ Years
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the Team CTA */}
        <div className="neu-card rounded-3xl p-8 sm:p-10 bg-white border border-[#DCEAF8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-[#0767DF] font-bold uppercase">
              We are expanding
            </span>
            <h3 className="text-xl font-bold text-[#071F49] mt-1">
              Want to contribute to honest market education in India?
            </h3>
            <p className="text-xs sm:text-sm text-[#61748D] mt-1">
              We are actively hiring quantitative researchers, curriculum developers, and learner mentors.
            </p>
          </div>
          <button
            onClick={() => onNavigate('careers')}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl transition-all shadow-xs cursor-pointer flex items-center gap-2 shrink-0"
          >
            <span>Explore Open Roles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
