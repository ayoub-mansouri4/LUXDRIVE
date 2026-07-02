/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { Compass, Users, Star, Award, ShieldCheck, Heart } from 'lucide-react';

interface AboutViewProps {
  language: Language;
}

export default function AboutView({ language }: AboutViewProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  const stats = [
    { value: '12+', label: t.experience },
    { value: '10k+', label: 'Happy Clients' },
    { value: '100%', label: 'Pristine Cars' },
    { value: '24/7', label: 'VIP Delivery' }
  ];

  return (
    <div className="py-16 bg-slate-50 text-slate-900 min-h-screen" id="about-us-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text block */}
          <div className={`lg:col-span-7 space-y-6 ${isRtl ? 'text-right lg:order-2' : 'text-left'}`}>
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block">
              {t.about}
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-blue-900 tracking-tight leading-tight">
              {t.companyPresentation}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              {t.presentationText1}
            </p>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              {t.presentationText2}
            </p>

            {/* Mission Box */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 mt-6 shadow-sm">
              <h3 className="font-extrabold text-orange-500 mb-2 uppercase text-xs tracking-wider flex items-center gap-1.5">
                <Compass size={16} />
                <span>{t.mission}</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                {t.missionText}
              </p>
            </div>
          </div>

          {/* Visual block */}
          <div className="lg:col-span-5 relative lg:order-1">
            <div className="relative h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&q=80&w=800" 
                alt="LuxDrive Corporate" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl border border-orange-400/40 hidden sm:block">
              <span className="block text-3xl font-display font-extrabold leading-none">100%</span>
              <span className="text-xs font-extrabold uppercase tracking-wider text-white/95">Moroccan Owned</span>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="block text-3xl sm:text-5xl font-display font-extrabold text-orange-500">{stat.value}</span>
                <span className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core values */}
        <div className="space-y-10">
          <div className={`max-w-2xl ${isRtl ? 'text-right' : 'text-left'}`}>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-blue-900 tracking-tight">
              {t.whyTrustUs}
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed mt-1">
              Our business model relies entirely on customer recommendations and repeat bookings. That is why transparency is our core foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-4 shadow-sm">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-orange-500 inline-block">
                <ShieldCheck size={20} />
              </div>
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Real Car Photos</h4>
              <p className="text-slate-600 text-xs font-light leading-relaxed">
                No mock generic images. What you inspect on our website is the exact brand, model, and year delivered to you.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-4 shadow-sm">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-orange-500 inline-block">
                <Heart size={20} />
              </div>
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Zero Card Deposits</h4>
              <p className="text-slate-600 text-xs font-light leading-relaxed">
                Enjoy flexible rental options on select compact city vehicles without blocking huge sums on your credit cards.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-4 shadow-sm">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-orange-500 inline-block">
                <Star size={20} />
              </div>
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Inclusive Pricing</h4>
              <p className="text-slate-600 text-xs font-light leading-relaxed">
                Airport fees, local taxes, civil liability, and second drivers are automatically pre-included in your quote.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-4 shadow-sm">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-orange-500 inline-block">
                <Award size={20} />
              </div>
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Complimentary Extras</h4>
              <p className="text-slate-600 text-xs font-light leading-relaxed">
                Add baby seats, child boosters, or GPS navigations to your request completely free of extra daily charges.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
