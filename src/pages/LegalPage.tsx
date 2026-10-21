import React, { useState } from 'react';
import { Shield, FileText, AlertTriangle, RefreshCcw } from 'lucide-react';

export const LegalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'refund' | 'sebi'>('privacy');

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DCEAF8] rounded-full text-xs font-semibold text-[#0767DF] font-mono mb-3">
            Governance & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#081B3A] tracking-tight">
            Policies & Legal Disclosures
          </h1>
          <p className="mt-2 text-sm text-[#61748D]">
            Official legal documentation governing website usage, student privacy, digital course refunds, and SEBI regulatory risk warnings.
          </p>
        </div>

        {/* Policy Tab Switcher */}
        <div className="flex items-center gap-2 p-1.5 bg-[#EEF6FF] rounded-2xl border border-[#DCEAF8] w-fit mb-10 overflow-x-auto">
          {[
            { id: 'privacy', label: 'Privacy Policy', icon: Shield },
            { id: 'terms', label: 'Terms of Use', icon: FileText },
            { id: 'refund', label: 'Refund Policy', icon: RefreshCcw },
            { id: 'sebi', label: 'SEBI Risk Disclaimer', icon: AlertTriangle },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-[#071F49] shadow-xs border border-[#DCEAF8]'
                    : 'text-[#61748D] hover:text-[#071F49]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#0767DF]' : 'text-[#61748D]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Policy Content Card */}
        <div className="neu-card rounded-3xl p-8 sm:p-12 bg-white border border-[#DCEAF8]">
          
          {activeTab === 'privacy' && (
            <div className="space-y-6 text-xs sm:text-sm text-[#081B3A] leading-relaxed">
              <div className="pb-4 border-b border-[#DCEAF8]">
                <h2 className="text-2xl font-bold text-[#071F49]">Privacy Policy</h2>
                <p className="text-xs text-[#61748D] mt-1 font-mono">Last Updated: October 2026 · Power of Markets</p>
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#071F49]">1. Information We Collect</h3>
                <p className="text-[#61748D]">
                  When you enroll in courses, register for educational webinars, or contact Power of Markets (operated by Abhishek Upadhyay), we collect personal details including your name, email address, contact phone number, and transaction identifiers. We do not store raw credit/debit card numbers on our servers; payments are processed securely via verified gateways (Razorpay, UPI, or Stripe).
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#071F49]">2. Purpose of Data Processing</h3>
                <p className="text-[#61748D]">
                  We utilize your data strictly to: (a) Provision course lectures, video streams, and downloadable risk modeling spreadsheets; (b) Transmit webinar access links and class schedules; (c) Respond to curriculum doubts; and (d) Meet regulatory tax and accounting obligations under Indian jurisdiction.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#071F49]">3. Zero Sale of Personal Data</h3>
                <p className="text-[#61748D]">
                  Power of Markets maintains a strict privacy discipline. We never sell, rent, or trade student contact information to third-party telemarketers, brokers, or advisory call services.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#071F49]">4. Contact Our Data Compliance Officer</h3>
                <p className="text-[#61748D]">
                  For data access or deletion requests, please email <a href="mailto:support@powerofmarket.com" className="text-[#0767DF] font-mono">support@powerofmarket.com</a>.
                </p>
              </section>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-6 text-xs sm:text-sm text-[#081B3A] leading-relaxed">
              <div className="pb-4 border-b border-[#DCEAF8]">
                <h2 className="text-2xl font-bold text-[#071F49]">Terms of Use</h2>
                <p className="text-xs text-[#61748D] mt-1 font-mono">Applicable to all visitors and students</p>
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#071F49]">1. Educational Nature of Services</h3>
                <p className="text-[#61748D]">
                  Power of Markets provides financial literacy and mathematical education regarding capital markets and derivatives. Enrolling in our courses does not establish an advisory or fiduciary relationship. All case studies are illustrative and backward-looking.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#071F49]">2. Proprietary Intellectual Property</h3>
                <p className="text-[#61748D]">
                  All course recordings, Option Greeks spreadsheets, syllabus notes, slide decks, and audio-visual presentations are the exclusive intellectual property of Power of Markets and Abhishek Upadhyay. Unauthorized screen recording, distribution, piracy, or resale is strictly prohibited under Indian Copyright Law and will result in permanent account termination and legal action.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#071F49]">3. User Conduct</h3>
                <p className="text-[#61748D]">
                  Students participating in live webinars and private community groups must maintain professional conduct. Promoting outside schemes, sharing unofficial stock tips, or harassing faculty members will lead to immediate expulsion without refund.
                </p>
              </section>
            </div>
          )}

          {activeTab === 'refund' && (
            <div className="space-y-6 text-xs sm:text-sm text-[#081B3A] leading-relaxed">
              <div className="pb-4 border-b border-[#DCEAF8]">
                <h2 className="text-2xl font-bold text-[#071F49]">Refund & Cancellation Policy</h2>
                <p className="text-xs text-[#61748D] mt-1 font-mono">Official institutional policy · Power of Markets</p>
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#071F49]">1. Digital Content Delivery</h3>
                <p className="text-[#61748D]">
                  Because all Power of Markets masterclasses grant immediate digital access to proprietary video lessons, downloadable Excel spreadsheets, and intellectual property upon purchase, <strong>course fees are generally non-refundable once enrollment is confirmed</strong>.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#071F49]">2. Evaluation via Free Previews</h3>
                <p className="text-[#61748D]">
                  We provide free video previews, detailed syllabus breakdowns, and open webinar sessions so prospective learners can evaluate the pedagogical quality prior to making any financial commitment.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#071F49]">3. Exceptional Billing Queries</h3>
                <p className="text-[#61748D]">
                  If you experienced accidental duplicate charges during gateway processing, please submit your bank transaction receipt to <a href="mailto:support@powerofmarket.com" className="text-[#0767DF] font-mono">support@powerofmarket.com</a> within 48 hours for immediate verification and reversal.
                </p>
              </section>
            </div>
          )}

          {activeTab === 'sebi' && (
            <div className="space-y-6 text-xs sm:text-sm text-[#081B3A] leading-relaxed">
              <div className="pb-4 border-b border-[#DCEAF8]">
                <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase font-mono mb-1">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Mandatory Regulatory Warning</span>
                </div>
                <h2 className="text-2xl font-bold text-[#071F49]">SEBI Risk Disclosure on Derivatives</h2>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed space-y-2">
                <p className="font-bold">
                  SEBI Study Findings on Equity Futures & Options Segment:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>9 out of 10 individual traders in equity Futures and Options segment incurred net losses.</li>
                  <li>On an average, loss-makers registered net trading loss close to ₹50,000.</li>
                  <li>Over and above the net trading losses, loss-makers expended an additional 28% of net trading losses as transaction costs.</li>
                  <li>Those making net trading profits incurred between 15% to 50% of such profits as transaction costs.</li>
                </ul>
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-bold text-[#071F49]">Power of Markets Non-Advisory Declaration</h3>
                <p className="text-[#61748D]">
                  Power of Markets and its educators, including Abhishek Upadhyay, are market educators and NOT SEBI-registered Investment Advisors or Research Analysts. We do not provide trading calls, recommendations, or capital management. Past educational performance is no guarantee of future trading success. All participants must trade with capital they can afford to lose.
                </p>
              </section>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
