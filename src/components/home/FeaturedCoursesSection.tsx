import React, { useState } from 'react';
import { COURSES_DATA } from '../../data/mockData';
import { Course, PageType } from '../../types';
import { Clock, BookOpen, User, CheckCircle2, ShoppingBag, ArrowRight, ExternalLink } from 'lucide-react';

interface FeaturedCoursesSectionProps {
  onNavigate: (page: PageType, courseId?: string) => void;
  onAddToCart: (course: Course) => void;
}

export const FeaturedCoursesSection: React.FC<FeaturedCoursesSectionProps> = ({
  onNavigate,
  onAddToCart,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Derivatives' | 'Trading' | 'Investing'>('All');

  const filteredCourses = COURSES_DATA.filter(
    (c) => selectedFilter === 'All' || c.category === selectedFilter
  );

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Segmented Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold text-[#0767DF] uppercase tracking-wider font-mono mb-2">
              Verified Curriculums
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#081B3A] tracking-tight">
              Featured Market Programs
            </h2>
            <p className="mt-2 text-sm text-[#61748D] max-w-xl">
              Engineered with practical case studies, real Indian market execution breakdowns, and proprietary risk models.
            </p>
          </div>

          {/* Interactive Filter Tabs (Button Segmented Control) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EEF6FF] rounded-xl border border-[#DCEAF8] overflow-x-auto">
            {(['All', 'Derivatives', 'Trading', 'Investing'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedFilter === filter
                    ? 'bg-white text-[#071F49] shadow-xs border border-[#DCEAF8]'
                    : 'text-[#61748D] hover:text-[#071F49]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="neu-card rounded-2xl overflow-hidden bg-white flex flex-col justify-between border border-[#DCEAF8]"
            >
              {/* Card Header / Visual Banner */}
              <div className="relative p-6 bg-gradient-to-br from-[#071F49] via-[#081B3A] to-[#0767DF] text-white">
                <div className="flex items-center justify-between text-xs text-[#0AA8EF] font-mono mb-3">
                  <span>{course.category}</span>
                  <span className="bg-[#0AA8EF]/20 text-[#0AA8EF] border border-[#0AA8EF]/30 px-2 py-0.5 rounded text-[11px] font-mono font-semibold">
                    {course.level}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white leading-snug mb-2">
                  {course.title}
                </h3>
                
                <p className="text-xs text-[#DCEAF8]/80 line-clamp-2 leading-relaxed">
                  {course.subtitle}
                </p>

                {/* Subtle Visual SVG lines */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#DCEAF8]/70">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#0AA8EF]" />
                    {course.durationHours} Hours
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-[#0AA8EF]" />
                    {course.lessonsCount} Lessons
                  </span>
                  <span>{course.language}</span>
                </div>
              </div>

              {/* Card Content & Highlights */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Instructor Info */}
                  <div className="flex items-center gap-2 mb-4 text-xs text-[#61748D]">
                    <User className="w-4 h-4 text-[#0767DF]" />
                    <span className="font-medium text-[#081B3A]">{course.instructor.name}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.instructor.role}</span>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {course.whatYouWillLearn.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#081B3A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#159B72] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Action Buttons */}
                <div className="pt-4 border-t border-[#DCEAF8]">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-xl font-extrabold text-[#071F49] font-mono">
                        ₹{course.priceINR.toLocaleString('en-IN')}
                      </span>
                      <span className="ml-2 text-xs text-[#61748D] line-through font-mono">
                        ₹{course.originalPriceINR.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#159B72] font-mono">
                      Save {Math.round((1 - course.priceINR / course.originalPriceINR) * 100)}%
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onNavigate('course-detail', course.id)}
                      className="w-full py-2.5 px-3 text-xs font-semibold text-[#071F49] bg-[#EEF6FF] hover:bg-[#DCEAF8] rounded-xl transition-colors cursor-pointer text-center"
                    >
                      View Syllabus
                    </button>
                    <button
                      onClick={() => onAddToCart(course)}
                      className="w-full py-2.5 px-3 text-xs font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer hover:shadow-sm"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Enroll Now</span>
                    </button>
                  </div>
                  
                  {/* Instant Access Indicator */}
                  <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-[#159B72] font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Instant LMS Access & Downloadable Models</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('courses')}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0767DF] bg-[#EEF6FF] hover:bg-[#DCEAF8] border border-[#DCEAF8] rounded-xl transition-all cursor-pointer hover:-translate-y-0.5"
          >
            <span>View All Courses & Learning Tracks</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
