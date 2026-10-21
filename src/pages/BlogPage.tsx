import React, { useState } from 'react';
import { BLOG_POSTS_DATA } from '../data/mockData';
import { BlogPost, PageType } from '../types';
import { Search, BookOpen, Clock, Calendar, ArrowRight, Mail, ShieldCheck } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: PageType, courseId?: string, blogId?: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const featuredPost = BLOG_POSTS_DATA[0];

  const filteredPosts = BLOG_POSTS_DATA.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat =
      selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#DCEAF8] rounded-full text-xs font-semibold text-[#0767DF] font-mono mb-3">
            Financial Education Hub
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#081B3A] tracking-tight">
            Market Insights & Quantitative Research
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#61748D]">
            Rigorous educational analysis deconstructing Option Greeks, Dalal Street order flow, and probabilistic risk management.
          </p>
        </div>

        {/* Featured Post Card */}
        {featuredPost && (
          <div
            onClick={() => onNavigate('blog-detail', undefined, featuredPost.id)}
            className="neu-card rounded-3xl overflow-hidden bg-gradient-to-br from-[#071F49] to-[#0767DF] text-white p-8 sm:p-10 mb-14 cursor-pointer transition-all hover:shadow-xl relative"
          >
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#0AA8EF] mb-4">
                <span>Featured Research</span>
                <span>·</span>
                <span>{featuredPost.category}</span>
                <span>·</span>
                <span>{featuredPost.readTimeMinutes} min read</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4 hover:text-[#0AA8EF] transition-colors">
                {featuredPost.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#DCEAF8]/85 leading-relaxed mb-6 line-clamp-3">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/15 text-xs text-[#DCEAF8]/80 font-mono">
                <span>By {featuredPost.author.name}</span>
                <span className="text-[#0AA8EF] font-bold flex items-center gap-1 group-hover:translate-x-1">
                  Read Full Analysis <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Search & Categories Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#DCEAF8]">
          <div className="flex items-center gap-1.5 p-1 bg-[#EEF6FF] rounded-xl border border-[#DCEAF8] overflow-x-auto w-full md:w-auto">
            {['All', 'Derivatives', 'Market Structure', 'Risk Management'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white text-[#071F49] shadow-xs border border-[#DCEAF8]'
                    : 'text-[#61748D] hover:text-[#071F49]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#61748D] absolute left-3.5 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research topics..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF]"
            />
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onNavigate('blog-detail', undefined, post.id)}
              className="neu-card rounded-2xl p-6 bg-white border border-[#DCEAF8] cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#61748D] mb-3">
                  <span className="text-[#0767DF] font-bold">{post.category}</span>
                  <span>·</span>
                  <span>{post.readTimeMinutes} min read</span>
                </div>

                <h3 className="text-lg font-bold text-[#071F49] leading-snug mb-3 hover:text-[#0767DF] transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs text-[#61748D] line-clamp-3 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCEAF8] flex items-center justify-between text-xs text-[#61748D]">
                <span className="font-mono text-[11px]">{post.publishedDate}</span>
                <span className="text-[#0767DF] font-semibold flex items-center gap-1">
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription Card */}
        <div className="neu-card rounded-3xl p-8 sm:p-10 bg-white border border-[#DCEAF8] text-center max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-[#EEF6FF] text-[#0767DF] flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-bold text-[#071F49] mb-2">
            The Weekly Market Research Dispatch
          </h3>
          <p className="text-xs sm:text-sm text-[#61748D] mb-6 max-w-md mx-auto">
            Zero noise, zero speculative tips. Receive deep quantitative breakdowns of Indian market structure and volatility directly in your inbox.
          </p>

          {!newsletterSubscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-[#EEF6FF]/60 border border-[#DCEAF8] rounded-xl text-[#081B3A] focus:outline-none focus:border-[#0767DF] focus:bg-white"
              />
              <button
                type="submit"
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0767DF] hover:bg-[#0654b7] rounded-xl transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="p-3 bg-[#159B72]/10 text-[#159B72] rounded-xl text-xs font-mono font-semibold">
              ✓ You are subscribed to POM Research. Welcome aboard!
            </div>
          )}

          <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-[#61748D]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#159B72]" />
            <span>Unsubscribe anytime · No marketing spam</span>
          </div>
        </div>

      </div>
    </div>
  );
};
