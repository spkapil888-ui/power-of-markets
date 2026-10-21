import React, { useState, useEffect } from 'react';
import { PageType, Course, Webinar, CartItem, UserAccount } from './types';
import { COURSES_DATA } from './data/mockData';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { VideoModal } from './components/modals/VideoModal';
import { WebinarRegisterModal } from './components/modals/WebinarRegisterModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { CareersPage } from './pages/CareersPage';
import { FounderProfilePage } from './pages/FounderProfilePage';
import { TeamPage } from './pages/TeamPage';
import { WebinarsPage } from './pages/WebinarsPage';
import { MembershipPage } from './pages/MembershipPage';
import { ContactPage } from './pages/ContactPage';
import { AuthPage } from './pages/AuthPage';
import { StudentDashboardPage } from './pages/StudentDashboardPage';
import { CartCheckoutPage } from './pages/CartCheckoutPage';
import { LegalPage } from './pages/LegalPage';

import { CheckCircle2, Layers } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('option-greeks');
  const [selectedBlogId, setSelectedBlogId] = useState<string>('delta-gamma-trap-zero-dte');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  // Cart State (pre-loaded with Option Greeks for realistic checkout preview)
  const [cart, setCart] = useState<CartItem[]>([
    {
      courseId: 'option-greeks',
      title: 'Option Greeks: The Mathematical Edge',
      priceINR: 4999,
      category: 'Derivatives',
    },
  ]);

  // User Authentication State
  const [user, setUser] = useState<UserAccount | null>({
    id: 'pom-student-891',
    name: 'Abhishek Student',
    email: 'learner@powerofmarket.com',
    role: 'student',
    enrolledCourseIds: ['option-greeks', 'market-structure-price-action'],
    completedLessonIds: ['lesson-1', 'lesson-2'],
    joinedDate: 'October 2026',
  });

  // Modals
  const [activeVideo, setActiveVideo] = useState<{
    title: string;
    duration: string;
    description: string;
    topic: string;
  } | null>(null);

  const [activeWebinar, setActiveWebinar] = useState<Webinar | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleNavigate = (page: PageType, courseId?: string, blogId?: string) => {
    if (courseId) setSelectedCourseId(courseId);
    if (blogId) setSelectedBlogId(blogId);
    setCurrentPage(page);
  };

  const handleAddToCart = (course: Course) => {
    const existing = cart.find((i) => i.courseId === course.id);
    if (!existing) {
      setCart([
        ...cart,
        {
          courseId: course.id,
          title: course.title,
          priceINR: course.priceINR,
          category: course.category,
        },
      ]);
      showToast(`Added "${course.title}" to cart!`);
    } else {
      showToast(`"${course.title}" is already in your cart.`);
    }
  };

  const handleRemoveFromCart = (courseId: string) => {
    setCart(cart.filter((i) => i.courseId !== courseId));
    showToast('Course removed from cart.');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleSelectCategory = (category: string) => {
    setCategoryFilter(category);
    setCurrentPage('courses');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EEF6FF] text-[#081B3A] font-sans antialiased selection:bg-[#0767DF]/20 selection:text-[#071F49]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 bg-[#071F49] text-white text-xs font-semibold rounded-2xl shadow-2xl border border-white/20 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-[#159B72]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={cart.length}
        userLoggedIn={!!user}
      />

      {/* Main Page Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onRegisterWebinar={(w) => setActiveWebinar(w)}
            onPlayVideo={(v) => setActiveVideo(v)}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

        {currentPage === 'courses' && (
          <CoursesPage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            initialCategory={categoryFilter}
          />
        )}

        {currentPage === 'course-detail' && (
          <CourseDetailPage
            courseId={selectedCourseId}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onPlayPreview={(v) => setActiveVideo(v)}
          />
        )}

        {currentPage === 'blog' && <BlogPage onNavigate={handleNavigate} />}

        {currentPage === 'blog-detail' && (
          <BlogDetailPage blogId={selectedBlogId} onNavigate={handleNavigate} />
        )}

        {currentPage === 'careers' && <CareersPage />}

        {currentPage === 'founder' && (
          <FounderProfilePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'team' && <TeamPage onNavigate={handleNavigate} />}

        {currentPage === 'webinars' && (
          <WebinarsPage
            onRegisterWebinar={(w) => setActiveWebinar(w)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'membership' && (
          <MembershipPage
            onNavigate={handleNavigate}
            onEnquire={(plan) => {
              showToast(`Inquiry for ${plan} sent. Our faculty will reach out!`);
              handleNavigate('contact');
            }}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}

        {currentPage === 'auth' && (
          <AuthPage
            onLoginSuccess={(u) => {
              setUser(u);
              showToast(`Welcome back, ${u.name}!`);
            }}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'dashboard' && user && (
          <StudentDashboardPage
            user={user}
            onLogout={() => {
              setUser(null);
              showToast('Logged out successfully.');
              setCurrentPage('home');
            }}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'checkout' && (
          <CartCheckoutPage
            items={cart}
            onRemoveItem={handleRemoveFromCart}
            onClearCart={handleClearCart}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'legal' && <LegalPage />}
      </main>

      {/* Shared Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

      {/* Modals */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      <WebinarRegisterModal
        webinar={activeWebinar}
        onClose={() => setActiveWebinar(null)}
      />

      {/* Floating Bottom Page-Jumper Pill (Quick Access for Review & QA across all Pages) */}
      <aside aria-label="Page switcher" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#071F49]/95 backdrop-blur-md border border-white/20 text-white text-[11px] shadow-2xl">
        <span className="font-mono text-[#0AA8EF] font-bold flex items-center gap-1 pr-1 border-r border-white/20">
          <Layers className="w-3.5 h-3.5 text-[#0AA8EF]" />
          POM Pages:
        </span>
        <button
          onClick={() => handleNavigate('home')}
          className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${currentPage === 'home' ? 'bg-[#0767DF] text-white font-bold' : 'text-[#DCEAF8]/75 hover:text-white'}`}
        >
          Home
        </button>
        <button
          onClick={() => handleNavigate('about')}
          className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${currentPage === 'about' ? 'bg-[#0767DF] text-white font-bold' : 'text-[#DCEAF8]/75 hover:text-white'}`}
        >
          About
        </button>
        <button
          onClick={() => handleNavigate('courses')}
          className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${currentPage === 'courses' ? 'bg-[#0767DF] text-white font-bold' : 'text-[#DCEAF8]/75 hover:text-white'}`}
        >
          Courses
        </button>
        <button
          onClick={() => handleNavigate('course-detail', 'option-greeks')}
          className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${currentPage === 'course-detail' ? 'bg-[#0767DF] text-white font-bold' : 'text-[#DCEAF8]/75 hover:text-white'}`}
        >
          Course Detail
        </button>
        <button
          onClick={() => handleNavigate('blog')}
          className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${currentPage === 'blog' || currentPage === 'blog-detail' ? 'bg-[#0767DF] text-white font-bold' : 'text-[#DCEAF8]/75 hover:text-white'}`}
        >
          Blog
        </button>
        <button
          onClick={() => handleNavigate('careers')}
          className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${currentPage === 'careers' ? 'bg-[#0767DF] text-white font-bold' : 'text-[#DCEAF8]/75 hover:text-white'}`}
        >
          Careers
        </button>
        <button
          onClick={() => handleNavigate('founder')}
          className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${currentPage === 'founder' ? 'bg-[#0767DF] text-white font-bold' : 'text-[#DCEAF8]/75 hover:text-white'}`}
        >
          Founder
        </button>
        <button
          onClick={() => handleNavigate('team')}
          className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${currentPage === 'team' ? 'bg-[#0767DF] text-white font-bold' : 'text-[#DCEAF8]/75 hover:text-white'}`}
        >
          Team
        </button>
        <button
          onClick={() => handleNavigate('webinars')}
          className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${currentPage === 'webinars' ? 'bg-[#0767DF] text-white font-bold' : 'text-[#DCEAF8]/75 hover:text-white'}`}
        >
          Webinars
        </button>
        <button
          onClick={() => handleNavigate('membership')}
          className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${currentPage === 'membership' ? 'bg-[#0767DF] text-white font-bold' : 'text-[#DCEAF8]/75 hover:text-white'}`}
        >
          Memberships
        </button>
        <button
          onClick={() => handleNavigate('dashboard')}
          className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${currentPage === 'dashboard' ? 'bg-[#0767DF] text-white font-bold' : 'text-[#DCEAF8]/75 hover:text-white'}`}
        >
          LMS Dashboard
        </button>
        <button
          onClick={() => handleNavigate('checkout')}
          className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${currentPage === 'checkout' ? 'bg-[#0767DF] text-white font-bold' : 'text-[#DCEAF8]/75 hover:text-white'}`}
        >
          Cart ({cart.length})
        </button>
      </aside>

    </div>
  );
}
