import React, { useState } from 'react';
import { COURSES_DATA } from '../data/mockData';
import { Course, PageType } from '../types';
import { Search, SlidersHorizontal, BookOpen, Clock, User, CheckCircle2, ShoppingBag, ArrowRight, ExternalLink } from 'lucide-react';

interface CoursesPageProps {
  onNavigate: (page: PageType, courseId?: string) => void;
  onAddToCart: (course: Course) => void;
  initialCategory?: string;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  onNavigate,
  onAddToCart,
  initialCategory = 'All',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'duration'>('featured');

  // Filter Logic
  const filtered = COURSES_DATA.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.summary.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === 'All' || course.category.toLowerCase() === selectedCategory.toLowerCase();
    
    const matchesLevel =
      selectedLevel === 'All' || course.level === selectedLevel;

    const matchesLanguage =
      selectedLanguage === 'All' || course.language === selectedLanguage;

    return matchesSearch && matchesCategory && matchesLevel && matchesLanguage;
  });

  // Sort Logic
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.priceINR - b.priceINR;
    if (sortBy === 'price-high') return b.priceINR - a.priceINR;
    if (sortBy === 'duration') return b.durationHours - a.durationHours;
    return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
  });

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedLevel('All');
    setSelectedLanguage('All');
    setSortBy('featured');
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DCEAF8] rounded-full text-xs font-semibold text-[#0767DF] font-mono mb-3">
            Academic Curriculum
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#081B3A] tracking-tight">
            Financial Education Programs
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#61748D] max-w-2xl">
            Explore verified curriculums across derivatives, price action, and balance sheet investing taught by Abhishek Upadhyay.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="neu-card rounded-2xl p-4 sm:p-5 bg-white border border-[#DCEAF8] mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-[#61748D] absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Option Greeks, Price Action, Investing..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF] focus:bg-white transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF]"
              >
                <option value="All">All Categories</option>
                <option value="Derivatives">Derivatives</option>
                <option value="Stock Market">Stock Market</option>
                <option value="Trading">Trading</option>
                <option value="Investing">Investing</option>
              </select>
            </div>

            {/* Level Filter */}
            <div className="md:col-span-2">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF]"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Sort Filter */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF]"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Longest Duration</option>
              </select>
            </div>

          </div>

          {/* Active Results Summary & Reset */}
          <div className="mt-4 pt-3 border-t border-[#EEF6FF] flex items-center justify-between text-xs text-[#61748D]">
            <span>
              Showing <strong className="text-[#071F49] font-mono">{sorted.length}</strong> verified courses
            </span>
            {(searchQuery || selectedCategory !== 'All' || selectedLevel !== 'All' || sortBy !== 'featured') && (
              <button
                onClick={handleResetFilters}
                className="text-[#0767DF] hover:underline font-semibold cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Courses Grid */}
        {sorted.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.map((course) => (
              <div
                key={course.id}
                className="neu-card rounded-2xl overflow-hidden bg-white flex flex-col justify-between border border-[#DCEAF8]"
              >
                {/* Header Banner */}
                <div className="relative p-6 bg-gradient-to-br from-[#071F49] via-[#081B3A] to-[#0767DF] text-white">
                  <div className="flex items-center justify-between text-xs text-[#0AA8EF] font-mono mb-2">
                    <span>{course.category}</span>
                    <span className="bg-[#0AA8EF]/20 text-[#0AA8EF] border border-[#0AA8EF]/30 px-2 py-0.5 rounded text-[11px] font-mono font-semibold">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug mb-2">
                    {course.title}
                  </h3>
                  <p className="text-xs text-[#DCEAF8]/80 line-clamp-2">
                    {course.subtitle}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#DCEAF8]/70">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0AA8EF]" />
                      {course.durationHours} Hours
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-[#0AA8EF]" />
                      {course.lessonsCount} Modules
                    </span>
                    <span>{course.language}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-xs text-[#61748D]">
                      <User className="w-4 h-4 text-[#0767DF]" />
                      <span className="font-medium text-[#081B3A]">{course.instructor.name}</span>
                    </div>

                    <div className="space-y-2 mb-6">
                      {course.whatYouWillLearn.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#081B3A]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#159B72] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#DCEAF8]">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-xl font-extrabold text-[#071F49] font-mono">
                        ₹{course.priceINR.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-[#61748D] line-through font-mono">
                        ₹{course.originalPriceINR.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onNavigate('course-detail', course.id)}
                        className="py-2.5 px-3 text-xs font-semibold text-[#071F49] bg-[#EEF6FF] hover:bg-[#DCEAF8] rounded-xl transition-colors cursor-pointer text-center"
                      >
                        Syllabus & Info
                      </button>
                      <button
                        onClick={() => onAddToCart(course)}
                        className="py-2.5 px-3 text-xs font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Enroll</span>
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-[#159B72] font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>12 Months LMS Access · Q&A Included</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 neu-card rounded-3xl p-8 bg-white border border-[#DCEAF8]">
            <BookOpen className="w-12 h-12 text-[#61748D] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-[#071F49]">No Courses Found</h3>
            <p className="text-xs sm:text-sm text-[#61748D] mt-1 max-w-sm mx-auto">
              We couldn't find any courses matching your current search or filter combination.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-[#0767DF] rounded-xl hover:bg-[#0654b7]"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
