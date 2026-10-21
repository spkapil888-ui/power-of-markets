import React, { useState } from 'react';
import { FAQS_DATA } from '../../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqAccordionSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#EEF6FF] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-[#0767DF] uppercase tracking-wider font-mono mb-2">
            Clear Answers
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#081B3A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-[#61748D]">
            Transparent answers regarding our curriculum structure, delivery format, and educational policies.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="neu-card rounded-2xl bg-white border border-[#DCEAF8] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#071F49]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#EEF6FF] text-[#0767DF] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0767DF] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#61748D] leading-relaxed border-t border-[#EEF6FF]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
