import React, { useState } from 'react';
import { WEBINARS_DATA } from '../../data/mockData';
import { Webinar, PageType } from '../../types';
import { Calendar, Clock, Globe, User, ArrowRight, CheckCircle2, Ticket } from 'lucide-react';

interface UpcomingWebinarsSectionProps {
  onNavigate: (page: PageType) => void;
  onRegisterWebinar: (webinar: Webinar) => void;
}

export const UpcomingWebinarsSection: React.FC<UpcomingWebinarsSectionProps> = ({
  onNavigate,
  onRegisterWebinar,
}) => {
  const upcomingWebinars = WEBINARS_DATA.filter((w) => w.status === 'upcoming');

  return (
    <section className="py-16 sm:py-24 bg-[#EEF6FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-bold text-[#0767DF] uppercase tracking-wider font-mono mb-2">
              Interactive Masterclasses
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#081B3A] tracking-tight">
              Upcoming Live Webinars
            </h2>
          </div>
          <button
            onClick={() => onNavigate('webinars')}
            className="text-xs sm:text-sm font-semibold text-[#0767DF] hover:underline flex items-center gap-1 cursor-pointer"
          >
            Browse Past Recordings & Schedule <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Webinar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingWebinars.map((webinar) => (
            <div
              key={webinar.id}
              className="neu-card rounded-2xl p-7 bg-white border border-[#DCEAF8] flex flex-col justify-between"
            >
              <div>
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="font-mono text-[#0767DF] font-semibold bg-[#EEF6FF] px-2.5 py-1 rounded-md border border-[#DCEAF8]">
                    Live Interactive Session
                  </span>
                  {webinar.seatsLeft && (
                    <span className="text-[11px] font-mono text-[#159B72] font-semibold">
                      {webinar.seatsLeft} Seats Remaining
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#071F49] leading-snug mb-3">
                  {webinar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#61748D] leading-relaxed mb-6">
                  {webinar.description}
                </p>

                {/* Date & Time metadata (no pills, unboxed with separators) */}
                <div className="p-4 rounded-xl bg-[#EEF6FF] border border-[#DCEAF8] mb-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#081B3A]">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-4 h-4 text-[#0767DF]" />
                    <span>{webinar.date}</span>
                  </div>
                  <span className="text-slate-300">·</span>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-4 h-4 text-[#0767DF]" />
                    <span>{webinar.timeIST}</span>
                  </div>
                  <span className="text-slate-300">·</span>
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-[#0AA8EF]" />
                    <span>{webinar.language}</span>
                  </div>
                </div>

                {/* Key Outcomes */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-bold text-[#071F49] uppercase font-mono tracking-wider">
                    Key Topics Covered:
                  </div>
                  {webinar.learningOutcomes.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#61748D]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#159B72] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-[#DCEAF8] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#61748D]">
                  <User className="w-4 h-4 text-[#0767DF]" />
                  <span>Faculty: <strong className="text-[#071F49]">{webinar.instructor}</strong></span>
                </div>

                <button
                  onClick={() => onRegisterWebinar(webinar)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl transition-all shadow-xs cursor-pointer hover:shadow-sm"
                >
                  <Ticket className="w-3.5 h-3.5" />
                  <span>Reserve Seat (Free)</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
