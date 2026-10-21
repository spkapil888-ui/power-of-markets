import React, { useState } from 'react';
import { WEBINARS_DATA } from '../data/mockData';
import { Webinar, PageType } from '../types';
import { Calendar, Clock, Globe, User, CheckCircle2, Ticket, Play, Video } from 'lucide-react';

interface WebinarsPageProps {
  onRegisterWebinar: (webinar: Webinar) => void;
  onNavigate: (page: PageType) => void;
}

export const WebinarsPage: React.FC<WebinarsPageProps> = ({ onRegisterWebinar, onNavigate }) => {
  const [filterTab, setFilterTab] = useState<'all' | 'upcoming' | 'past'>('all');

  const filtered = WEBINARS_DATA.filter((w) => {
    if (filterTab === 'upcoming') return w.status === 'upcoming';
    if (filterTab === 'past') return w.status === 'past';
    return true;
  });

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DCEAF8] rounded-full text-xs font-semibold text-[#0767DF] font-mono mb-3">
            Interactive Learning Events
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#081B3A] tracking-tight">
            Live Market Masterclasses & Webinars
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#61748D]">
            Join Abhishek Upadhyay for live deep dives into market regimes, volatility shifts, and practical trade adjustments.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-[#EEF6FF] rounded-xl border border-[#DCEAF8] w-fit mb-10">
          {(['all', 'upcoming', 'past'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilterTab(tab)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg capitalize transition-all cursor-pointer ${
                filterTab === tab
                  ? 'bg-white text-[#071F49] shadow-xs border border-[#DCEAF8]'
                  : 'text-[#61748D] hover:text-[#071F49]'
              }`}
            >
              {tab === 'all' ? 'All Sessions' : tab === 'upcoming' ? 'Upcoming Live' : 'Past Recordings'}
            </button>
          ))}
        </div>

        {/* Webinar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filtered.map((w) => (
            <div
              key={w.id}
              className="neu-card rounded-2xl p-7 bg-white border border-[#DCEAF8] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span
                    className={`font-mono font-semibold px-2.5 py-0.5 rounded ${
                      w.status === 'upcoming'
                        ? 'bg-[#159B72]/10 text-[#159B72]'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {w.status === 'upcoming' ? '● Upcoming Session' : 'Archived Recording'}
                  </span>
                  {w.seatsLeft && (
                    <span className="text-[11px] font-mono text-[#0767DF] font-semibold">
                      {w.seatsLeft} Seats Left
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#071F49] leading-snug mb-3">
                  {w.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#61748D] leading-relaxed mb-6">
                  {w.description}
                </p>

                {/* Details unboxed metadata with separators */}
                <div className="p-4 rounded-xl bg-[#EEF6FF] border border-[#DCEAF8] mb-6 flex flex-wrap items-center gap-3 text-xs text-[#081B3A]">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-4 h-4 text-[#0767DF]" />
                    <span>{w.date}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-4 h-4 text-[#0767DF]" />
                    <span>{w.timeIST}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-[#0AA8EF]" />
                    <span>{w.language}</span>
                  </div>
                </div>

                {/* Topics */}
                <div className="space-y-1.5 mb-6">
                  {w.learningOutcomes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#61748D]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#159B72] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row */}
              <div className="pt-4 border-t border-[#DCEAF8] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#61748D]">
                  <User className="w-4 h-4 text-[#0767DF]" />
                  <span>{w.instructor}</span>
                </div>

                {w.status === 'upcoming' ? (
                  <button
                    onClick={() => onRegisterWebinar(w)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl transition-all shadow-xs cursor-pointer"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Reserve Seat</span>
                  </button>
                ) : (
                  <button
                    onClick={() => onRegisterWebinar(w)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#071F49] bg-[#EEF6FF] hover:bg-[#DCEAF8] rounded-xl transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 text-[#0767DF]" />
                    <span>Watch Archive Session</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
