import React from 'react';
import { Play, Clock, Sparkles } from 'lucide-react';

interface VideoLibrarySectionProps {
  onPlayVideo: (video: { title: string; duration: string; description: string; topic: string }) => void;
}

export const VideoLibrarySection: React.FC<VideoLibrarySectionProps> = ({ onPlayVideo }) => {
  const videos = [
    {
      id: 'vid-1',
      title: 'Deconstructing Option Greeks: Delta vs Gamma Intuitively',
      topic: 'Derivatives Theory',
      duration: '14:20',
      description: 'Abhishek Upadhyay walks through the mechanical difference between first-order directional slope and second-order acceleration curves.',
      views: '4.8k Views',
    },
    {
      id: 'vid-2',
      title: 'Why Weekly Expiry Theta Decay is Non-Linear',
      topic: 'Options Mechanics',
      duration: '18:45',
      description: 'Visualizing the square-root of time decay curve and why holding OTM options through the weekend destroys expectancy.',
      views: '6.2k Views',
    },
    {
      id: 'vid-3',
      title: 'Liquidity Pools & Stop Runs on Indian Benchmarks',
      topic: 'Market Structure',
      duration: '12:10',
      description: 'Case study on Dalal Street order book dynamics and identifying algorithmic liquidity sweeps around round strikes.',
      views: '5.1k Views',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-bold text-[#0767DF] uppercase tracking-wider font-mono mb-2">
              Free Open Access
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#081B3A] tracking-tight">
              Educational Video Library
            </h2>
          </div>
          <p className="text-sm text-[#61748D] max-w-md">
            Preview core conceptual frameworks taught across our comprehensive masterclasses directly without registration.
          </p>
        </div>

        {/* 3 Video Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => onPlayVideo(vid)}
              className="group neu-card rounded-2xl overflow-hidden bg-white border border-[#DCEAF8] cursor-pointer flex flex-col justify-between"
            >
              {/* Video Thumbnail Graphic */}
              <div className="relative aspect-video bg-gradient-to-tr from-[#071F49] to-[#0767DF] flex items-center justify-center p-4 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />
                
                {/* Play Button Icon */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-white/90 text-[#0767DF] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-115">
                  <Play className="w-5 h-5 fill-[#0767DF] translate-x-0.5" />
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 z-10 px-2 py-0.5 rounded bg-black/70 text-white font-mono text-[10px] flex items-center gap-1 backdrop-blur-xs">
                  <Clock className="w-3 h-3 text-[#0AA8EF]" />
                  <span>{vid.duration}</span>
                </div>

                {/* Topic Top Left */}
                <div className="absolute top-3 left-3 z-10 text-[10px] font-mono text-[#0AA8EF] bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                  {vid.topic}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#071F49] mb-2 group-hover:text-[#0767DF] transition-colors leading-snug">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-[#61748D] line-clamp-2 leading-relaxed">
                    {vid.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#DCEAF8] flex items-center justify-between text-[11px] text-[#61748D] font-mono">
                  <span>{vid.views}</span>
                  <span className="text-[#0767DF] font-semibold flex items-center gap-1 group-hover:underline">
                    Watch Masterclass Clip →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
