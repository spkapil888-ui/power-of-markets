import React, { useState } from 'react';
import { COURSES_DATA } from '../data/mockData';
import { Course, PageType } from '../types';
import { Clock, BookOpen, User, CheckCircle2, ShoppingBag, ShieldCheck, ChevronDown, Play, FileSpreadsheet, ArrowLeft, ExternalLink, Award } from 'lucide-react';

interface CourseDetailPageProps {
  courseId: string;
  onNavigate: (page: PageType, courseId?: string) => void;
  onAddToCart: (course: Course) => void;
  onPlayPreview?: (lesson: { title: string; duration: string; description: string; topic: string }) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  courseId,
  onNavigate,
  onAddToCart,
  onPlayPreview,
}) => {
  const course = COURSES_DATA.find((c) => c.id === courseId) || COURSES_DATA[0];
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);

  const relatedCourses = COURSES_DATA.filter((c) => c.id !== course.id).slice(0, 2);

  return (
    <div className="py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <button
          onClick={() => onNavigate('courses')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0767DF] hover:underline mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Courses</span>
        </button>

        {/* Hero Banner (Deep Navy & Royal Blue) */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#071F49] via-[#081B3A] to-[#0767DF] text-white p-6 sm:p-10 mb-10 border border-white/10 shadow-xl">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-mono">
              <span className="bg-[#0AA8EF]/20 text-[#0AA8EF] px-2.5 py-1 rounded-md border border-[#0AA8EF]/30 font-semibold">
                {course.category}
              </span>
              <span className="bg-[#0AA8EF]/20 text-[#0AA8EF] px-2.5 py-1 rounded-md border border-[#0AA8EF]/30 font-semibold">
                {course.level} Level
              </span>
              <span className="bg-[#0AA8EF]/20 text-[#0AA8EF] px-2.5 py-1 rounded-md border border-[#0AA8EF]/30 font-semibold">
                {course.language}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {course.title}
            </h1>

            <p className="text-sm sm:text-base text-[#DCEAF8]/90 leading-relaxed mb-6">
              {course.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#DCEAF8]/80 font-mono">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#0AA8EF]" />
                <span>{course.durationHours} Hours On-Demand</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#0AA8EF]" />
                <span>{course.lessonsCount} Structured Lessons</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#0AA8EF]" />
                <span>Instructor: {course.instructor.name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Body Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Column (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* About This Masterclass */}
            <div className="neu-card rounded-2xl p-6 sm:p-8 bg-white border border-[#DCEAF8]">
              <h2 className="text-xl font-bold text-[#071F49] mb-4">
                Curriculum Overview
              </h2>
              <p className="text-xs sm:text-sm text-[#61748D] leading-relaxed mb-4">
                {course.description}
              </p>
              <p className="text-xs sm:text-sm text-[#61748D] leading-relaxed">
                {course.summary}
              </p>
            </div>

            {/* What You Will Learn Grid */}
            <div className="neu-card rounded-2xl p-6 sm:p-8 bg-white border border-[#DCEAF8]">
              <h2 className="text-xl font-bold text-[#071F49] mb-4">
                What You Will Master
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {course.whatYouWillLearn.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#081B3A]">
                    <CheckCircle2 className="w-4 h-4 text-[#159B72] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Syllabus Accordion */}
            <div className="neu-card rounded-2xl p-6 sm:p-8 bg-white border border-[#DCEAF8]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-[#071F49]">
                    Detailed Syllabus & Modules
                  </h2>
                  <p className="text-xs text-[#61748D] mt-0.5">
                    {course.syllabus.length} Modules · Progressive Mastery
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {course.syllabus.map((mod, modIdx) => {
                  const isOpen = openModuleIndex === modIdx;
                  return (
                    <div
                      key={modIdx}
                      className="border border-[#DCEAF8] rounded-xl overflow-hidden bg-[#EEF6FF]/30 transition-all"
                    >
                      <button
                        onClick={() => setOpenModuleIndex(isOpen ? null : modIdx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#EEF6FF]/60"
                      >
                        <div>
                          <div className="text-sm font-bold text-[#071F49]">
                            {mod.moduleTitle}
                          </div>
                          <div className="text-[11px] text-[#61748D] font-mono mt-0.5">
                            {mod.lessons.length} Lessons · {mod.moduleDuration}
                          </div>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#DCEAF8] transition-transform ${
                            isOpen ? 'rotate-180 bg-[#0767DF] text-white' : 'text-[#61748D]'
                          }`}
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="p-4 pt-1 border-t border-[#DCEAF8] bg-white divide-y divide-[#EEF6FF]">
                          {mod.lessons.map((lesson, lIdx) => (
                            <div
                              key={lIdx}
                              className="py-2.5 flex items-center justify-between gap-3 text-xs"
                            >
                              <div className="flex items-center gap-2 text-[#081B3A]">
                                <Play className="w-3.5 h-3.5 text-[#0767DF] shrink-0" />
                                <span>{lesson.title}</span>
                              </div>
                              <div className="flex items-center gap-2 shrink-0 font-mono text-[11px] text-[#61748D]">
                                <span>{lesson.duration}</span>
                                {lesson.freePreview && (
                                  <button
                                    onClick={() =>
                                      onPlayPreview &&
                                      onPlayPreview({
                                        title: lesson.title,
                                        duration: lesson.duration,
                                        description: `Lecture preview from ${mod.moduleTitle} of ${course.title}.`,
                                        topic: course.category,
                                      })
                                    }
                                    className="px-2 py-0.5 bg-[#EEF6FF] text-[#0767DF] hover:bg-[#DCEAF8] rounded text-[10px] font-bold cursor-pointer"
                                  >
                                    Free Preview
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Course Prerequisites & Requirements */}
            <div className="neu-card rounded-2xl p-6 sm:p-8 bg-white border border-[#DCEAF8]">
              <h2 className="text-lg font-bold text-[#071F49] mb-3">
                Course Prerequisites
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-[#61748D]">
                {course.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#0767DF] font-bold">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Sticky Sidebar (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 neu-card rounded-2xl p-6 sm:p-7 bg-white border border-[#DCEAF8] shadow-md flex flex-col justify-between">
              
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-3xl font-extrabold text-[#071F49] font-mono">
                      ₹{course.priceINR.toLocaleString('en-IN')}
                    </span>
                    <span className="ml-2 text-sm text-[#61748D] line-through font-mono">
                      ₹{course.originalPriceINR.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#159B72] bg-[#159B72]/10 px-2 py-0.5 rounded font-mono">
                    Special Offer
                  </span>
                </div>

                <div className="space-y-3 mb-6 pt-2 border-t border-[#EEF6FF]">
                  <button
                    onClick={() => onAddToCart(course)}
                    className="w-full py-3.5 px-4 text-sm font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] active:bg-[#071F49] rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Enroll & Get Instant Access</span>
                  </button>

                  <button
                    onClick={() => setOpenModuleIndex(openModuleIndex === null ? 0 : null)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-[#071F49] bg-[#EEF6FF] hover:bg-[#DCEAF8] rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{openModuleIndex !== null ? 'Collapse Detailed Syllabus' : 'Expand All Modules'}</span>
                  </button>
                </div>

                {/* What's Included In Enrollment */}
                <div className="space-y-2.5 pt-4 border-t border-[#DCEAF8] text-xs text-[#081B3A]">
                  <div className="text-[11px] font-bold text-[#61748D] uppercase font-mono tracking-wider mb-2">
                    Enrollment Package:
                  </div>
                  {course.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#159B72] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Instructor Capsule */}
                <div className="mt-6 pt-4 border-t border-[#DCEAF8] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#071F49] text-white flex items-center justify-center font-bold font-mono text-xs">
                    AU
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#071F49]">{course.instructor.name}</div>
                    <div className="text-[11px] text-[#61748D]">{course.instructor.role}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#EEF6FF] text-[11px] text-[#61748D] text-center font-mono">
                12 Months On-Demand LMS Streaming
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
