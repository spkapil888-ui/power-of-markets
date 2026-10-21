import React, { useState } from 'react';
import { UserAccount, PageType } from '../types';
import { COURSES_DATA } from '../data/mockData';
import { BookOpen, CheckCircle, Download, Play, Award, User, LogOut, Settings, Clock, FileSpreadsheet, Sparkles } from 'lucide-react';

interface StudentDashboardPageProps {
  user: UserAccount;
  onLogout: () => void;
  onNavigate: (page: PageType, courseId?: string) => void;
}

export const StudentDashboardPage: React.FC<StudentDashboardPageProps> = ({
  user,
  onLogout,
  onNavigate,
}) => {
  const [activeCourseId, setActiveCourseId] = useState<string>('option-greeks');
  const [activeLessonIndex, setActiveLessonIndex] = useState<number>(0);
  const [completedLessons, setCompletedLessons] = useState<string[]>([
    'lesson-1',
    'lesson-2',
  ]);
  const [activeTab, setActiveTab] = useState<'learning' | 'resources' | 'certificate' | 'profile'>('learning');
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const currentCourse = COURSES_DATA.find((c) => c.id === activeCourseId) || COURSES_DATA[0];
  const allLessons = currentCourse.syllabus.flatMap((m) => m.lessons);
  const currentLesson = allLessons[activeLessonIndex] || allLessons[0];

  const toggleLessonComplete = (lessonTitle: string) => {
    if (completedLessons.includes(lessonTitle)) {
      setCompletedLessons(completedLessons.filter((l) => l !== lessonTitle));
    } else {
      setCompletedLessons([...completedLessons, lessonTitle]);
    }
  };

  const progressPercent = Math.min(
    100,
    Math.round((completedLessons.length / Math.max(1, allLessons.length)) * 100)
  );

  return (
    <div className="py-8 sm:py-12 bg-[#EEF6FF] min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toast Notification */}
        {downloadToast && (
          <div className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-[#071F49] text-white text-xs font-semibold rounded-2xl shadow-2xl border border-white/20 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
            <CheckCircle className="w-4 h-4 text-[#159B72]" />
            <span>{downloadToast}</span>
          </div>
        )}

        {/* Top Student Welcome Banner */}
        <div className="neu-card rounded-3xl p-6 sm:p-8 bg-white border border-[#DCEAF8] mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#071F49] text-white flex items-center justify-center font-bold font-mono text-xl shadow-xs">
              {user.name.split(' ').map((n) => n[0]).join('') || 'U'}
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-[#0767DF] uppercase">
                Student Learning Portal
              </div>
              <h1 className="text-2xl font-extrabold text-[#071F49]">
                Welcome back, {user.name}
              </h1>
              <p className="text-xs text-[#61748D] mt-0.5 font-mono">
                Member ID: {user.id} · Enrolled in {user.enrolledCourseIds.length} Programs
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('learning')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'learning'
                  ? 'bg-[#0767DF] text-white'
                  : 'bg-[#EEF6FF] text-[#071F49] hover:bg-[#DCEAF8]'
              }`}
            >
              My Curriculums
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'resources'
                  ? 'bg-[#0767DF] text-white'
                  : 'bg-[#EEF6FF] text-[#071F49] hover:bg-[#DCEAF8]'
              }`}
            >
              Spreadsheets & Tools
            </button>
            <button
              onClick={() => setActiveTab('certificate')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'certificate'
                  ? 'bg-[#0767DF] text-white'
                  : 'bg-[#EEF6FF] text-[#071F49] hover:bg-[#DCEAF8]'
              }`}
            >
              Certificates
            </button>
            <button
              onClick={onLogout}
              className="p-2 text-[#61748D] hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab 1: Active Learning Experience */}
        {activeTab === 'learning' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Main Interactive Video / Lesson Stage (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* Dynamic Video Stage */}
              <div className="neu-card rounded-3xl overflow-hidden bg-[#071F49] border border-white/20 text-white shadow-xl">
                {/* Visual Video Frame */}
                <div className="aspect-video relative bg-gradient-to-tr from-[#071F49] to-[#081B3A] p-6 flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern-dark opacity-35" />

                  <div className="relative z-10 flex items-center justify-between text-xs text-[#0AA8EF] font-mono">
                    <span>{currentCourse.title}</span>
                    <span>HD 1080p Stream</span>
                  </div>

                  {/* Dynamic Curve Diagram in stage */}
                  <div className="relative z-10 flex flex-col items-center justify-center py-6">
                    <div className="w-full max-w-md h-28 relative">
                      <svg className="w-full h-full" viewBox="0 0 320 80" fill="none">
                        <line x1="0" y1="40" x2="320" y2="40" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
                        <path
                          d="M 10 65 Q 120 60 180 25 T 310 15"
                          stroke="#0AA8EF"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <circle cx="180" cy="25" r="5" fill="#159B72" stroke="#FFFFFF" strokeWidth="2" />
                      </svg>
                    </div>
                    <div className="text-center font-bold text-white text-base sm:text-lg mt-2">
                      {currentLesson?.title || 'Interactive Lesson'}
                    </div>
                    <p className="text-xs text-[#DCEAF8]/75 mt-1 font-mono">
                      Faculty: Abhishek Upadhyay · Duration: {currentLesson?.duration}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                    <span className="font-mono text-[#DCEAF8]/70">Chapter {activeLessonIndex + 1} of {allLessons.length}</span>
                    <button
                      onClick={() => toggleLessonComplete(currentLesson.title)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                        completedLessons.includes(currentLesson.title)
                          ? 'bg-[#159B72] text-white shadow-xs'
                          : 'bg-[#0AA8EF]/20 hover:bg-[#0AA8EF]/30 text-[#0AA8EF] border border-[#0AA8EF]/30'
                      }`}
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>
                        {completedLessons.includes(currentLesson.title) ? 'Completed' : 'Mark as Complete'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress Bar & Current Lesson Notes */}
              <div className="neu-card rounded-2xl p-6 bg-white border border-[#DCEAF8]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#071F49]">
                    Curriculum Progress: {progressPercent}%
                  </span>
                  <span className="text-xs font-mono text-[#61748D]">
                    {completedLessons.length} of {allLessons.length} Lessons Finished
                  </span>
                </div>
                <div className="w-full h-2.5 bg-[#EEF6FF] rounded-full overflow-hidden border border-[#DCEAF8]">
                  <div
                    className="h-full bg-gradient-to-r from-[#0767DF] to-[#0AA8EF] transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

            </div>

            {/* Sidebar: Course Playlist & Lessons (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              <div className="neu-card rounded-2xl p-5 bg-white border border-[#DCEAF8]">
                <h3 className="font-bold text-[#071F49] text-sm mb-3">
                  Switch Active Program
                </h3>
                <div className="space-y-2">
                  {COURSES_DATA.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setActiveCourseId(c.id);
                        setActiveLessonIndex(0);
                      }}
                      className={`w-full p-2.5 rounded-xl text-left text-xs transition-colors flex items-center justify-between cursor-pointer ${
                        activeCourseId === c.id
                          ? 'bg-[#EEF6FF] text-[#0767DF] font-bold border border-[#DCEAF8]'
                          : 'text-[#61748D] hover:bg-[#EEF6FF]/50'
                      }`}
                    >
                      <span className="truncate max-w-[200px]">{c.title}</span>
                      <span className="text-[10px] font-mono shrink-0">{c.category}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="neu-card rounded-2xl p-5 bg-white border border-[#DCEAF8] max-h-[500px] overflow-y-auto">
                <h3 className="font-bold text-[#071F49] text-sm mb-3">
                  Lesson Playlist ({allLessons.length})
                </h3>
                <div className="space-y-1.5">
                  {allLessons.map((lesson, idx) => {
                    const isSelected = activeLessonIndex === idx;
                    const isDone = completedLessons.includes(lesson.title);
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveLessonIndex(idx)}
                        className={`w-full p-2.5 rounded-xl text-left text-xs transition-all flex items-center justify-between gap-2 cursor-pointer ${
                          isSelected
                            ? 'bg-[#0767DF] text-white shadow-xs font-semibold'
                            : 'hover:bg-[#EEF6FF] text-[#081B3A]'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          {isDone ? (
                            <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-[#159B72]'}`} />
                          ) : (
                            <Play className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-[#0767DF]'}`} />
                          )}
                          <span className="truncate">{lesson.title}</span>
                        </div>
                        <span className="font-mono text-[10px] shrink-0 opacity-80">
                          {lesson.duration}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Spreadsheets & Downloads */}
        {activeTab === 'resources' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'POM Option Greeks Risk Matrix Calculator',
                type: 'Excel (.xlsx)',
                size: '2.4 MB',
                description: 'Pre-programmed formulas for Delta, Gamma, Theta, Vega and Breakeven strikes across Nifty & Bank Nifty.',
              },
              {
                title: 'Volatility Regimes & IV Percentile Model',
                type: 'Google Sheets & Excel',
                size: '1.8 MB',
                description: 'Historical volatility distribution tracker to systematically identify overpriced options.',
              },
              {
                title: 'Institutional Trade Journal & Expectancy Log',
                type: 'Excel (.xlsx)',
                size: '1.1 MB',
                description: 'Log and audit your trades by setup, R:R ratio, drawdown, and psychological discipline metrics.',
              },
            ].map((res, i) => (
              <div key={i} className="neu-card rounded-2xl p-6 bg-white border border-[#DCEAF8] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#159B72]/15 text-[#159B72] flex items-center justify-center mb-4">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#071F49] text-base mb-2">{res.title}</h3>
                  <p className="text-xs text-[#61748D] leading-relaxed mb-4">{res.description}</p>
                </div>
                <div className="pt-4 border-t border-[#DCEAF8] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#61748D]">{res.type} · {res.size}</span>
                  <button
                    onClick={() => {
                      setDownloadToast(`Initiating download for ${res.title}`);
                      setTimeout(() => setDownloadToast(null), 3000);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EEF6FF] hover:bg-[#DCEAF8] text-[#0767DF] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Certificate Preview */}
        {activeTab === 'certificate' && (
          <div className="neu-card rounded-3xl p-8 sm:p-12 bg-white border border-[#DCEAF8] max-w-3xl mx-auto text-center">
            <div className="p-8 border-4 border-double border-[#0767DF]/30 rounded-2xl bg-[#EEF6FF]/30 relative overflow-hidden">
              <Award className="w-16 h-16 text-[#0767DF] mx-auto mb-4" />
              <div className="text-xs font-mono uppercase tracking-widest text-[#0767DF] font-bold">
                Certificate of Academic Completion
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071F49] mt-3">
                Power of Markets
              </h2>
              <p className="text-xs text-[#61748D] mt-2 font-mono">
                This is to certify that
              </p>
              <div className="text-2xl font-bold text-[#071F49] my-4 underline decoration-[#0AA8EF] decoration-2">
                {user.name}
              </div>
              <p className="text-xs text-[#61748D] max-w-md mx-auto leading-relaxed">
                has successfully completed the comprehensive curriculum on <strong>Option Greeks & Quantitative Risk Architecture</strong> under the direction of Abhishek Upadhyay.
              </p>

              <div className="mt-8 pt-6 border-t border-[#DCEAF8] flex items-center justify-between text-xs font-mono text-[#071F49]">
                <div>
                  <div className="font-bold">Abhishek Upadhyay</div>
                  <div className="text-[10px] text-[#61748D]">Founder & Head Educator</div>
                </div>
                <div>
                  <div className="font-bold">POM Verified Credential</div>
                  <div className="text-[10px] text-[#159B72]">ID: POM-{user.id.toUpperCase()}-2026</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => alert('Certificate PDF downloaded!')}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0767DF] text-white text-xs font-semibold rounded-xl hover:bg-[#0654b7] cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Certificate (PDF)</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
