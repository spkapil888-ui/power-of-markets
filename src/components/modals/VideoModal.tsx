import React, { useState } from 'react';
import { X, Play, Pause, RotateCcw, Volume2, Maximize, CheckCircle2, Bookmark } from 'lucide-react';

interface VideoModalProps {
  video: {
    title: string;
    duration: string;
    description: string;
    topic: string;
  } | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(35);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [studentNote, setStudentNote] = useState('');
  const [savedNotes, setSavedNotes] = useState<string[]>([
    'Delta = Rate of change of price per 1 pt move in underlying.',
    'Gamma spikes dramatically in the last 45 minutes on 0DTE expiries.'
  ]);

  if (!video) return null;

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentNote.trim()) return;
    setSavedNotes([...savedNotes, studentNote.trim()]);
    setStudentNote('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#071F49] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col text-white max-h-[92vh]">
        
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#0AA8EF] bg-white/10 px-2 py-0.5 rounded">
              {video.topic}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-md">
              {video.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Area */}
        <div className="relative aspect-video bg-[#081B3A] flex flex-col justify-between p-6 overflow-hidden">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />

          {/* Educational Visual Simulation inside player */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
            {/* Dynamic Market Curve Visualizer */}
            <div className="w-full max-w-xl h-36 relative">
              <svg className="w-full h-full" viewBox="0 0 400 120" fill="none">
                <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.15)" strokeDasharray="4 4" />
                <path
                  d="M 20 90 Q 150 85 240 30 T 380 20"
                  stroke="#0AA8EF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="240" cy="30" r="6" fill="#159B72" stroke="#FFFFFF" strokeWidth="2" />
                <text x="250" y="32" fill="#DCEAF8" fontSize="10" fontFamily="JetBrains Mono">
                  Gamma Inflection Point
                </text>
              </svg>
            </div>
            <div className="text-xs text-[#DCEAF8]/75 font-mono mt-2 text-center">
              Abhishek Upadhyay: "Notice the exponential convex slope as time approaches 0DTE."
            </div>
          </div>

          {/* Player Controls Bar */}
          <div className="relative z-10 pt-4 flex flex-col gap-2 bg-gradient-to-t from-black/80 to-transparent p-3 rounded-2xl">
            {/* Scrubber Bar */}
            <div className="relative w-full h-1.5 bg-white/20 rounded-full cursor-pointer overflow-hidden">
              <div
                className="h-full bg-[#0767DF] relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
              </div>
            </div>

            {/* Buttons Row */}
            <div className="flex items-center justify-between text-xs text-white pt-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setProgress(0)}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                  title="Rewind"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <span className="font-mono text-[11px] text-[#DCEAF8]/80">
                  05:12 / {video.duration}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Speed Toggle */}
                <button
                  onClick={() => setPlaybackSpeed(playbackSpeed === 1 ? 1.25 : playbackSpeed === 1.25 ? 1.5 : 1)}
                  className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[11px] font-mono cursor-pointer"
                >
                  {playbackSpeed}x Speed
                </button>
                <Volume2 className="w-4 h-4 text-white/70" />
                <Maximize className="w-4 h-4 text-white/70" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Student Study Deck & Notes */}
        <div className="p-6 overflow-y-auto bg-[#071F49] flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold text-[#0AA8EF] uppercase font-mono tracking-wider mb-2">
                Lesson Overview
              </h4>
              <p className="text-xs text-[#DCEAF8] leading-relaxed">
                {video.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-[#159B72]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Curriculum Clip · Power of Markets</span>
              </div>
            </div>

            {/* Interactive Student Notes Pad */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
                  <span className="flex items-center gap-1.5">
                    <Bookmark className="w-3.5 h-3.5 text-[#0AA8EF]" />
                    Learner Scratchpad
                  </span>
                  <span className="text-[10px] font-mono text-[#DCEAF8]/60">{savedNotes.length} Notes</span>
                </div>
                
                <div className="space-y-1.5 max-h-24 overflow-y-auto pr-1 mb-3">
                  {savedNotes.map((note, i) => (
                    <div key={i} className="text-[11px] text-[#DCEAF8] bg-white/5 p-1.5 rounded border border-white/5">
                      • {note}
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleAddNote} className="flex gap-2">
                <input
                  type="text"
                  value={studentNote}
                  onChange={(e) => setStudentNote(e.target.value)}
                  placeholder="Jot down a quick insight..."
                  className="flex-1 px-3 py-1.5 text-xs bg-black/30 border border-white/15 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#0AA8EF]"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 text-xs font-semibold bg-[#0767DF] hover:bg-[#0654b7] text-white rounded-lg transition-colors cursor-pointer"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
