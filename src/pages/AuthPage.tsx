import React, { useState } from 'react';
import { PageType, UserAccount } from '../types';
import { ShieldCheck, Mail, Lock, User, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PomLogo } from '../components/brand/PomLogo';

interface AuthPageProps {
  onLoginSuccess: (user: UserAccount) => void;
  onNavigate: (page: PageType) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onLoginSuccess, onNavigate }) => {
  const [tab, setTab] = useState<'login' | 'register' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const user: UserAccount = {
        id: 'user-demo-1',
        name: name || (email.split('@')[0] || 'Learner'),
        email: email || 'student@powerofmarket.com',
        role: 'student',
        enrolledCourseIds: ['option-greeks', 'market-structure-price-action'],
        completedLessonIds: ['lesson-1', 'lesson-2'],
        joinedDate: 'October 2026',
      };
      onLoginSuccess(user);
      onNavigate('dashboard');
    }, 600);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const user: UserAccount = {
        id: 'user-new-1',
        name: name || 'Market Learner',
        email: email || 'newstudent@powerofmarket.com',
        role: 'student',
        enrolledCourseIds: ['option-greeks'],
        completedLessonIds: ['lesson-1'],
        joinedDate: 'October 2026',
      };
      onLoginSuccess(user);
      onNavigate('dashboard');
    }, 600);
  };

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFeedbackMsg(`A password reset link has been dispatched to ${email}. Check your inbox.`);
    }, 500);
  };

  return (
    <div className="py-12 sm:py-20 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen Container */}
        <div className="neu-card rounded-3xl overflow-hidden bg-white border border-[#DCEAF8] shadow-xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Visual Column (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#071F49] via-[#081B3A] to-[#0767DF] p-8 sm:p-10 text-white flex flex-col justify-between relative">
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

            <div className="relative z-10">
              <PomLogo variant="horizontal" theme="light" size="md" className="mb-8" />

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
                Access Your Structured Learning Portal
              </h2>

              <p className="text-xs sm:text-sm text-[#DCEAF8]/85 leading-relaxed">
                Stream on-demand HD lecture modules, download quantitative Option Greeks spreadsheets, and participate in live weekly Q&A sessions.
              </p>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/15 space-y-3 text-xs text-[#DCEAF8]/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#159B72]" />
                <span>Option Greeks Mathematical Engine</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#159B72]" />
                <span>Naked Price Action & Order Flow</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#159B72]" />
                <span>Proprietary Cloud LMS & HD Video Streaming</span>
              </div>
            </div>
          </div>

          {/* Right Form Column (7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
            
            {/* Tabs */}
            <div className="flex items-center gap-2 p-1 bg-[#EEF6FF] rounded-xl border border-[#DCEAF8] w-fit mb-8">
              <button
                onClick={() => { setTab('login'); setFeedbackMsg(''); }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  tab === 'login'
                    ? 'bg-white text-[#071F49] shadow-xs border border-[#DCEAF8]'
                    : 'text-[#61748D] hover:text-[#071F49]'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => { setTab('register'); setFeedbackMsg(''); }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  tab === 'register'
                    ? 'bg-white text-[#071F49] shadow-xs border border-[#DCEAF8]'
                    : 'text-[#61748D] hover:text-[#071F49]'
                }`}
              >
                Register New Account
              </button>
            </div>

            {feedbackMsg && (
              <div className="mb-6 p-3 bg-[#159B72]/10 text-[#159B72] border border-[#159B72]/20 rounded-xl text-xs font-medium">
                {feedbackMsg}
              </div>
            )}

            {/* Login Form */}
            {tab === 'login' && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#071F49] mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#61748D] absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@powerofmarket.com"
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#EEF6FF]/50 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-semibold text-[#071F49]">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setTab('forgot')}
                      className="text-[11px] text-[#0767DF] hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-[#61748D] absolute left-3.5 top-3" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#EEF6FF]/50 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isLoading ? 'Authenticating...' : 'Sign In to Student Portal'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* Registration Form */}
            {tab === 'register' && (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#071F49] mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#61748D] absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vikram Singhania"
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#EEF6FF]/50 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#071F49] mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#61748D] absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vikram@example.com"
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#EEF6FF]/50 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#071F49] mb-1">
                    Create Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-[#61748D] absolute left-3.5 top-3" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="At least 8 characters"
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#EEF6FF]/50 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isLoading ? 'Creating Account...' : 'Create Student Account'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* Forgot Password */}
            {tab === 'forgot' && (
              <form onSubmit={handleForgot} className="space-y-4">
                <p className="text-xs text-[#61748D] mb-4">
                  Enter the email address registered with your Power of Markets account and we'll send you recovery instructions.
                </p>
                <div>
                  <label className="block text-xs font-semibold text-[#071F49] mb-1">
                    Registered Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@powerofmarket.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#EEF6FF]/50 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF] focus:bg-white"
                  />
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl cursor-pointer"
                  >
                    Send Reset Link
                  </button>
                  <button
                    type="button"
                    onClick={() => setTab('login')}
                    className="px-4 py-2.5 text-xs font-semibold text-[#61748D] hover:text-[#071F49]"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            <div className="mt-8 pt-4 border-t border-[#DCEAF8] flex items-center justify-between text-[11px] text-[#61748D]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#159B72]" />
                <span>SSL Encrypted</span>
              </span>
              <span>Power of Markets Portal</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
