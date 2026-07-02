/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { ShieldCheck, Anchor, Compass, Award, Gem, Sparkles } from 'lucide-react';

interface WhyChooseUsProps {
  language: Language;
}

export default function WhyChooseUs({ language }: WhyChooseUsProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  const cards = [
    {
      icon: <Gem className="text-orange-500 w-8 h-8" />,
      title: t.bestPrices,
      sub: t.bestPricesSub,
    },
    {
      icon: <Compass className="text-orange-500 w-8 h-8" />,
      title: t.airportDelivery,
      sub: t.airportDeliverySub,
    },
    {
      icon: <Anchor className="text-orange-500 w-8 h-8" />,
      title: t.assistance,
      sub: t.assistanceSub,
    },
    {
      icon: <Sparkles className="text-orange-500 w-8 h-8" />,
      title: t.newCars,
      sub: t.newCarsSub,
    },
  ];

  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-100" id="why-choose-us-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className={`max-w-3xl mb-16 ${isRtl ? 'text-right' : 'text-left'}`}>
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-2">
            {t.whyChooseUs}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-blue-900 tracking-tight mb-4">
            {language === 'ar' ? 'رحلة مريحة مخصصة لك بالكامل' : language === 'fr' ? 'La tranquillité d\'esprit absolue à chaque trajet' : 'Unmatched Peace of Mind in Every Journey'}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light">
            {t.whyChooseSub}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className={`bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-orange-500/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden ${
                isRtl ? 'text-right' : 'text-left'
              }`}
              id={`why-choose-card-${idx}`}
            >
              {/* Card Icon Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-3 bg-white border border-slate-200 rounded-xl inline-flex mb-6 group-hover:border-orange-500/30 transition-colors duration-300">
                {card.icon}
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-wide group-hover:text-orange-500 transition-colors duration-300">
                {card.title}
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                {card.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic Counter Banner */}
        <div className="mt-16 bg-slate-50 border border-slate-200/80 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-3xl sm:text-4xl font-display font-extrabold text-orange-500 mb-2">12+</span>
              <span className="text-slate-500 text-xs sm:text-sm font-semibold tracking-wide uppercase">{t.experience}</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-display font-extrabold text-orange-500 mb-2">10,000+</span>
              <span className="text-slate-500 text-xs sm:text-sm font-semibold tracking-wide uppercase">Happy Customers</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-display font-extrabold text-orange-500 mb-2">100%</span>
              <span className="text-slate-500 text-xs sm:text-sm font-semibold tracking-wide uppercase">Real Car Pictures</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-display font-extrabold text-orange-500 mb-2">4.9/5</span>
              <span className="text-slate-500 text-xs sm:text-sm font-semibold tracking-wide uppercase">Google Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
