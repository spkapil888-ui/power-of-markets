import React from 'react';
import { PageType } from '../../types';
import { TrendingUp, Activity, PieChart, CandlestickChart, ArrowRight } from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategory: (category: string) => void;
  onNavigate: (page: PageType) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategory,
  onNavigate,
}) => {
  const categories = [
    {
      id: 'derivatives',
      name: 'Derivatives & Options',
      shortName: 'Derivatives',
      coursesCount: 2,
      description: 'Master Delta, Gamma, Theta, Vega, implied volatility skew, and non-directional strategies.',
      accent: '#0767DF',
      icon: Activity,
      stat: 'Quantitative Edge',
    },
    {
      id: 'stock-market',
      name: 'Stock Market Foundations',
      shortName: 'Stock Market',
      coursesCount: 3,
      description: 'Indian market infrastructure, NSE/BSE indices, auction mechanics, and order book dynamics.',
      accent: '#071F49',
      icon: TrendingUp,
      stat: 'Market Mechanics',
    },
    {
      id: 'trading',
      name: 'Trading & Price Action',
      shortName: 'Trading',
      coursesCount: 2,
      description: 'Institutional market structure, liquidity sweeps, fair value gaps, and disciplined trade journaling.',
      accent: '#0AA8EF',
      icon: CandlestickChart,
      stat: 'Execution & Psychology',
    },
    {
      id: 'investing',
      name: 'Long-Term Investing',
      shortName: 'Investing',
      coursesCount: 1,
      description: 'Fundamental valuation, ROCE analysis, balance sheet deconstruction, and asset allocation.',
      accent: '#159B72',
      icon: PieChart,
      stat: 'Wealth Compounding',
    },
  ];

  const handleCategoryClick = (categoryName: string) => {
    onSelectCategory(categoryName);
    onNavigate('courses');
  };

  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-bold text-[#0767DF] uppercase tracking-wider font-mono mb-2">
              Structured Curriculum
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#081B3A] tracking-tight">
              Market Education Categories
            </h2>
          </div>
          <p className="text-sm text-[#61748D] max-w-md">
            Four targeted educational pathways designed to build systematic confidence from foundational concepts to advanced quantitative execution.
          </p>
        </div>

        {/* 4 Interactive Category Tiles (Neumorphic) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.shortName)}
                className="group relative neu-card rounded-2xl p-6 bg-white cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${cat.accent}15`, color: cat.accent }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-[#61748D] bg-[#EEF6FF] px-2 py-0.5 rounded border border-[#DCEAF8]">
                      {cat.coursesCount} Programs
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#071F49] mb-2 group-hover:text-[#0767DF] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#61748D] leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Bottom Action strip */}
                <div className="pt-4 border-t border-[#DCEAF8] flex items-center justify-between text-xs font-semibold text-[#0767DF]">
                  <span className="text-[11px] font-mono text-[#071F49]">{cat.stat}</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
