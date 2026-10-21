import React, { useState } from 'react';
import { MEMBERSHIP_PLANS_DATA } from '../data/mockData';
import { MembershipPlan, PageType } from '../types';
import { Check, X, ShieldCheck, Zap, ArrowRight, MessageSquare } from 'lucide-react';

interface MembershipPageProps {
  onNavigate: (page: PageType) => void;
  onEnquire: (planName: string) => void;
}

export const MembershipPage: React.FC<MembershipPageProps> = ({ onNavigate, onEnquire }) => {
  const [billingCycle, setBillingCycle] = useState<'quarterly' | 'annual'>('quarterly');

  const comparisonRows = [
    { feature: 'Core Foundation Courses', starter: true, pro: true, inst: true },
    { feature: 'Option Greeks Masterclass', starter: false, pro: true, inst: true },
    { feature: 'Excel Risk Modeling Spreadsheets', starter: 'Basic', pro: 'Full Suite', inst: 'Custom Built' },
    { feature: 'Weekly Live Q&A with Abhishek', starter: false, pro: true, inst: true },
    { feature: 'Private Student Community Access', starter: 'Public', pro: 'Pro Discord', inst: 'VIP Cohort' },
    { feature: '1-on-1 Portfolio Risk Audit', starter: false, pro: false, inst: 'Quarterly' },
    { feature: 'Annual POM Financial Symposium', starter: false, pro: false, inst: 'VIP Pass' },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DCEAF8] rounded-full text-xs font-semibold text-[#0767DF] font-mono mb-3">
            Continuous Education Ecosystem
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#081B3A] tracking-tight">
            POM Pro Trader Memberships
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#61748D] leading-relaxed">
            Choose a structured membership level for continuous market mentoring, weekly quantitative reviews, and proprietary risk models.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {MEMBERSHIP_PLANS_DATA.map((plan) => (
            <div
              key={plan.id}
              className={`neu-card rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-white to-[#EEF6FF] border-2 border-[#0767DF] shadow-xl lg:-translate-y-2'
                  : 'bg-white border border-[#DCEAF8]'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0767DF] text-white text-[11px] font-bold uppercase tracking-wider rounded-full font-mono shadow-xs">
                  Most Popular for Active Traders
                </div>
              )}

              <div>
                <div className="text-xs font-mono font-bold text-[#0767DF] uppercase mb-1">
                  {plan.tier} Tier
                </div>
                <h3 className="text-2xl font-bold text-[#071F49] mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-[#61748D] leading-relaxed mb-6 min-h-[36px]">
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-[#DCEAF8]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#071F49] font-mono">
                      ₹{plan.pricePerMonthINR.toLocaleString('en-IN')}
                    </span>
                    {plan.pricePerMonthINR > 0 && (
                      <span className="text-xs text-[#61748D] font-mono">/ Month</span>
                    )}
                  </div>
                  <span className="text-xs text-[#61748D] font-mono">{plan.billingPeriod}</span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-bold text-[#071F49] uppercase font-mono">
                    Included Benefits:
                  </div>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#081B3A]">
                      <Check className="w-4 h-4 text-[#159B72] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                  {plan.notIncluded?.map((notFeat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#61748D]/60 line-through">
                      <X className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                      <span>{notFeat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#DCEAF8]">
                <button
                  onClick={() => onEnquire(plan.name)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    plan.isPopular
                      ? 'bg-[#0767DF] hover:bg-[#0654b7] text-white shadow-md hover:shadow-lg'
                      : 'bg-[#EEF6FF] hover:bg-[#DCEAF8] text-[#071F49]'
                  }`}
                >
                  <span>{plan.pricePerMonthINR === 0 ? 'Start Free Access' : 'Enquire & Join'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Matrix Table */}
        <div className="neu-card rounded-3xl p-6 sm:p-10 bg-white border border-[#DCEAF8] mb-16 overflow-x-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-[#071F49] mb-6">
            Detailed Tier Feature Comparison
          </h2>

          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-[#DCEAF8] text-xs font-mono text-[#071F49]">
                <th className="py-3 px-4 font-bold">Curriculum & Support Feature</th>
                <th className="py-3 px-4 text-center">Starter</th>
                <th className="py-3 px-4 text-center text-[#0767DF]">POM Pro Trader</th>
                <th className="py-3 px-4 text-center">Institutional</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EEF6FF] text-xs">
              {comparisonRows.map((row, i) => (
                <tr key={i} className="hover:bg-[#EEF6FF]/30">
                  <td className="py-3.5 px-4 font-medium text-[#081B3A]">{row.feature}</td>
                  <td className="py-3.5 px-4 text-center text-[#61748D]">
                    {typeof row.starter === 'boolean' ? (
                      row.starter ? (
                        <Check className="w-4 h-4 text-[#159B72] mx-auto" />
                      ) : (
                        <span className="text-slate-300">—</span>
                      )
                    ) : (
                      row.starter
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-center font-semibold text-[#0767DF]">
                    {typeof row.pro === 'boolean' ? (
                      row.pro ? (
                        <Check className="w-4 h-4 text-[#159B72] mx-auto" />
                      ) : (
                        <span className="text-slate-300">—</span>
                      )
                    ) : (
                      row.pro
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-center text-[#071F49] font-medium">
                    {typeof row.inst === 'boolean' ? (
                      row.inst ? (
                        <Check className="w-4 h-4 text-[#159B72] mx-auto" />
                      ) : (
                        <span className="text-slate-300">—</span>
                      )
                    ) : (
                      row.inst
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};
