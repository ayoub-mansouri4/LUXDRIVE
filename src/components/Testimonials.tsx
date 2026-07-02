/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TESTIMONIALS_DATA } from '../data/cars';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { Quote, Star } from 'lucide-react';

interface TestimonialsProps {
  language: Language;
}

export default function Testimonials({ language }: TestimonialsProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-100" id="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-3xl mb-16 ${isRtl ? 'text-right' : 'text-left'}`}>
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-2">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-blue-900 tracking-tight mb-4">
            {t.customerReviews}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light">
            {t.reviewsSub}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div 
              key={item.id}
              className={`bg-slate-50 border border-slate-200 rounded-2xl p-8 relative flex flex-col justify-between hover:border-orange-500/30 hover:shadow-sm transition-all duration-300 ${
                isRtl ? 'text-right' : 'text-left'
              }`}
              id={`testimonial-card-${item.id}`}
            >
              {/* Quote Icon watermark */}
              <Quote size={48} className="absolute top-6 right-6 text-slate-200/60 rotate-180 z-0 pointer-events-none" />

              <div className="relative z-10">
                {/* Rating stars */}
                <div className="flex gap-1 mb-5 justify-start">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-orange-500 fill-orange-500" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-light italic">
                  "{item.comment}"
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-4 border-t border-slate-200 pt-5 relative z-10">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{item.name}</h4>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
