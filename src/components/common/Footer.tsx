import React from 'react';
import { PomLogo } from '../brand/PomLogo';
import { PageType } from '../../types';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#071F49] text-white pt-16 pb-12 border-t border-[#0AA8EF]/20 relative overflow-hidden">
      {/* Background subtle visual lines */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0767DF]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none w-fit cursor-pointer"
            >
              <PomLogo variant="horizontal" theme="light" size="md" />
            </button>
            <p className="text-sm text-[#DCEAF8]/80 leading-relaxed max-w-sm mt-1">
              Power of Markets (POM) delivers 360° financial market education. Founded by Abhishek Upadhyay, we teach mathematical derivatives pricing, disciplined price action, and institutional risk management without speculative noise.
            </p>
            <div className="flex items-center gap-3 mt-2 text-xs text-[#0AA8EF]">
              <span className="flex items-center gap-1.5 font-mono">
                <ShieldCheck className="w-4 h-4 text-[#159B72]" />
                SEBI Education Compliant
              </span>
              <span>·</span>
              <span className="font-mono">Dalal Street Analytics</span>
            </div>
          </div>

          {/* Column 3: Learning Paths */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase font-mono">
              Learning Paths
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[#DCEAF8]/75">
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-[#0AA8EF] transition-colors cursor-pointer text-left"
                >
                  Option Greeks Masterclass
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-[#0AA8EF] transition-colors cursor-pointer text-left"
                >
                  Price Action & Market Structure
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-[#0AA8EF] transition-colors cursor-pointer text-left"
                >
                  Long-Term Value Investing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-[#0AA8EF] transition-colors cursor-pointer text-left"
                >
                  Derivatives Hedging Strategies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('webinars')}
                  className="hover:text-[#0AA8EF] transition-colors cursor-pointer text-left"
                >
                  Live Educational Webinars
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Platform & Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase font-mono">
              Company & People
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[#DCEAF8]/75">
              <li>
                <button
                  onClick={() => onNavigate('founder')}
                  className="hover:text-[#0AA8EF] transition-colors cursor-pointer text-left"
                >
                  Abhishek Upadhyay (Founder)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#0AA8EF] transition-colors cursor-pointer text-left"
                >
                  About Power of Markets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('team')}
                  className="hover:text-[#0AA8EF] transition-colors cursor-pointer text-left"
                >
                  Research & Faculty Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careers')}
                  className="hover:text-[#0AA8EF] transition-colors cursor-pointer text-left"
                >
                  Careers at POM
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('membership')}
                  className="hover:text-[#0AA8EF] transition-colors cursor-pointer text-left"
                >
                  POM Pro Membership
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Verified Portal */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase font-mono">
              Direct Contact
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-[#DCEAF8]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0AA8EF] shrink-0 mt-0.5" />
                <span>Sector 62, Institutional Area, Noida, Uttar Pradesh 201309, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0AA8EF] shrink-0" />
                <a href="mailto:support@powerofmarket.com" className="hover:text-white transition-colors">
                  support@powerofmarket.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0AA8EF] shrink-0" />
                <span>+91 98112 04510</span>
              </div>
              <div className="mt-2 pt-2 border-t border-white/10">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="inline-flex items-center gap-1.5 text-xs text-[#0AA8EF] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Student LMS Learning Dashboard</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Policies & SEBI Educational Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#DCEAF8]/60">
          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => onNavigate('legal')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('legal')} className="hover:text-white transition-colors">
              Terms of Use
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('legal')} className="hover:text-white transition-colors">
              Refund Policy
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('legal')} className="hover:text-white transition-colors">
              SEBI Risk Disclaimer
            </button>
          </div>

          <p className="font-mono text-center md:text-right">
            © {new Date().getFullYear()} Power of Markets. All rights reserved.
          </p>
        </div>

        {/* Regulatory Risk Notice Banner */}
        <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-[11px] leading-relaxed text-[#DCEAF8]/70">
          <strong className="text-white font-semibold">Important Regulatory Notice: </strong>
          Trading in equity derivatives (Futures & Options) carries significant market risk. As per SEBI study, 9 out of 10 individual traders in the equity Futures and Options segment incurred net losses. Power of Markets and Abhishek Upadhyay provide educational instruction only and do not offer investment advice, buy/sell recommendations, or guaranteed profit models.
        </div>
      </div>
    </footer>
  );
};
