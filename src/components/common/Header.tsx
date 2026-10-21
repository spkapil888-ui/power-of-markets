import React, { useState } from 'react';
import { PomLogo } from '../brand/PomLogo';
import { PageType } from '../../types';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ArrowRight, 
  User, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';

interface HeaderProps {
  currentPage?: PageType;
  onNavigate: (page: PageType, courseId?: string, blogId?: string) => void;
  cartCount?: number;
  userLoggedIn?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage = 'home',
  onNavigate,
  cartCount = 0,
  userLoggedIn = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Courses', page: 'courses' },
    { label: 'Webinars', page: 'webinars' },
    { label: 'Memberships', page: 'membership' },
    { label: 'About', page: 'about' },
    { label: 'Blog', page: 'blog' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-3.5 transition-all duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between border border-[#DCEAF8] shadow-xs">
          
          {/* 1. Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0767DF] rounded-lg cursor-pointer transition-opacity hover:opacity-90 shrink-0"
            aria-label="Power of Markets Homepage"
          >
            <PomLogo variant="horizontal" theme="dark" size="md" />
          </button>

          {/* 2. Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#EEF6FF] text-[#0767DF] border border-[#DCEAF8]'
                      : 'text-[#61748D] hover:text-[#071F49] hover:bg-[#EEF6FF]/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* 3. CTA Buttons & Cart (Right Side) */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Cart Button */}
            <button
              onClick={() => handleNavClick('checkout')}
              className="relative p-2 rounded-xl text-[#071F49] hover:bg-[#EEF6FF] hover:text-[#0767DF] transition-colors cursor-pointer"
              aria-label={`View Cart (${cartCount} items)`}
              title="Cart / Checkout"
            >
              <ShoppingBag className="w-5 h-5 text-[#071F49]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#0767DF] text-white text-[10px] font-bold font-mono flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Student Portal / Login CTA */}
            <button
              onClick={() => handleNavClick(userLoggedIn ? 'dashboard' : 'auth')}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#071F49] hover:text-[#0767DF] bg-[#EEF6FF] hover:bg-[#DCEAF8] rounded-xl transition-colors cursor-pointer border border-[#DCEAF8]"
            >
              <User className="w-3.5 h-3.5 text-[#0767DF]" />
              <span>{userLoggedIn ? 'Student Portal' : 'Login'}</span>
            </button>

            {/* Primary High-Converting CTA Button */}
            <button
              onClick={() => handleNavClick('courses')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#0767DF] hover:bg-[#0654b7] active:bg-[#071F49] rounded-xl shadow-xs transition-all cursor-pointer hover:shadow-sm hover:-translate-y-0.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Explore Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Controls: Cart & Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNavClick('checkout')}
              className="relative p-2 rounded-xl text-[#071F49] hover:bg-[#EEF6FF] transition-colors cursor-pointer"
              aria-label={`View Cart (${cartCount} items)`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#0767DF] text-white text-[10px] font-bold font-mono flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#071F49] hover:bg-[#EEF6FF] border border-[#DCEAF8] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 glass-panel rounded-2xl p-4 border border-[#DCEAF8] shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1 pb-3 border-b border-[#DCEAF8]" aria-label="Mobile Navigation">
              {navLinks.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.page}
                    onClick={() => handleNavClick(item.page)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-[#EEF6FF] text-[#0767DF] font-bold border border-[#DCEAF8]'
                        : 'text-[#081B3A] hover:bg-[#EEF6FF]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0767DF]" />}
                  </button>
                );
              })}
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('courses')}
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Explore Courses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleNavClick(userLoggedIn ? 'dashboard' : 'auth')}
                className="w-full py-2.5 px-4 text-xs font-semibold text-[#071F49] bg-[#EEF6FF] hover:bg-[#DCEAF8] rounded-xl flex items-center justify-center gap-2 border border-[#DCEAF8] cursor-pointer"
              >
                <User className="w-3.5 h-3.5 text-[#0767DF]" />
                <span>{userLoggedIn ? 'Student Portal (Logged In)' : 'Sign In to Student Portal'}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
