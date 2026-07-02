/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQS_DATA } from '../data/cars';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FaqProps {
  language: Language;
}

export default function Faq({ language }: FaqProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-100" id="faqs-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16`}>
          <div className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full text-xs text-orange-500 font-semibold uppercase mb-4 tracking-wider">
            <HelpCircle size={14} />
            <span>{t.faqs}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-blue-900 tracking-tight mb-4">
            {t.faqTitle}
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto font-light">
            {t.faqSub}
          </p>
        </div>

        {/* Collapsible Accordion Grid */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-all duration-300"
                id={`faq-accordion-${faq.id}`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className={`w-full py-5 px-6 flex justify-between items-center text-left font-bold text-sm sm:text-base text-slate-800 hover:text-orange-500 transition-colors gap-4 cursor-pointer ${
                    isRtl ? 'text-right flex-row-reverse' : ''
                  }`}
                  id={`faq-trigger-${faq.id}`}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className="flex-shrink-0 p-1 bg-white rounded border border-slate-200 text-orange-500 shadow-sm">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                
                {/* Expandable Panel */}
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-60 border-t border-slate-200' : 'max-h-0'
                  }`}
                  id={`faq-content-${faq.id}`}
                >
                  <p className={`p-6 text-slate-600 text-xs sm:text-sm leading-relaxed font-light ${
                    isRtl ? 'text-right' : 'text-left'
                  }`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
