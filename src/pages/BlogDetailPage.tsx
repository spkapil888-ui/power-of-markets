import React, { useState } from 'react';
import { BLOG_POSTS_DATA } from '../data/mockData';
import { PageType } from '../types';
import { ArrowLeft, Clock, Calendar, User, Share2, Check, Bookmark, ArrowRight, ShieldCheck } from 'lucide-react';

interface BlogDetailPageProps {
  blogId?: string;
  onNavigate: (page: PageType, courseId?: string, blogId?: string) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ blogId, onNavigate }) => {
  const post = BLOG_POSTS_DATA.find((p) => p.id === blogId) || BLOG_POSTS_DATA[0];
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const related = BLOG_POSTS_DATA.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <button
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0767DF] hover:underline mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </button>

        {/* Article Header */}
        <header className="mb-10 text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-[#0767DF] mb-3">
            <span className="bg-[#EEF6FF] px-2.5 py-0.5 rounded border border-[#DCEAF8] font-bold">
              {post.category}
            </span>
            <span>·</span>
            <span>{post.readTimeMinutes} min read</span>
            <span>·</span>
            <span>{post.publishedDate}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#081B3A] tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-4 border-y border-[#DCEAF8] text-xs text-[#61748D]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#071F49] text-white flex items-center justify-center font-bold font-mono text-xs">
                AU
              </div>
              <div>
                <div className="font-bold text-[#071F49]">{post.author.name}</div>
                <div className="text-[11px] text-[#61748D]">{post.author.role}</div>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EEF6FF] hover:bg-[#DCEAF8] text-[#071F49] rounded-lg transition-colors cursor-pointer text-xs font-semibold"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-[#159B72]" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Link Copied' : 'Share Article'}</span>
            </button>
          </div>
        </header>

        {/* Key Takeaways Box */}
        <div className="neu-card rounded-2xl p-6 bg-[#EEF6FF] border border-[#DCEAF8] mb-10">
          <div className="flex items-center gap-2 text-xs font-bold text-[#071F49] uppercase font-mono tracking-wider mb-3">
            <Bookmark className="w-4 h-4 text-[#0767DF]" />
            <span>Executive Takeaways</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-[#081B3A]">
            {post.keyTakeaways.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#0767DF] font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body */}
        <article className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#081B3A] space-y-6">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-[#DCEAF8] flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="text-[#61748D] font-bold">Tags:</span>
          {post.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 bg-white border border-[#DCEAF8] rounded-md text-[#071F49]">
              #{tag}
            </span>
          ))}
        </div>

        {/* Regulatory Disclaimer Box */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-[#DCEAF8] text-[11px] leading-relaxed text-[#61748D]">
          <div className="flex items-center gap-1.5 font-bold text-[#071F49] mb-1">
            <ShieldCheck className="w-4 h-4 text-[#159B72]" />
            <span>Educational Research Disclosure:</span>
          </div>
          This article is published strictly for financial education and quantitative literacy. Nothing herein constitutes investment advice, securities recommendation, or trade endorsement. Dalal Street derivatives carry substantial market risk.
        </div>

        {/* Related Articles */}
        <div className="mt-14 pt-10 border-t border-[#DCEAF8]">
          <h3 className="text-xl font-bold text-[#071F49] mb-6">
            Related Research & Articles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigate('blog-detail', undefined, rel.id)}
                className="neu-card rounded-2xl p-5 bg-white border border-[#DCEAF8] cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-[#0767DF] font-bold">{rel.category}</span>
                  <h4 className="text-sm font-bold text-[#071F49] mt-1 mb-2 hover:text-[#0767DF] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#61748D] line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#EEF6FF] flex items-center justify-between text-[11px] text-[#0767DF] font-semibold">
                  <span>{rel.readTimeMinutes} min read</span>
                  <span className="flex items-center gap-1">Read →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
