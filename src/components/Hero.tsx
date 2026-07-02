/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CARS_DATA } from '../data/cars';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { ArrowRight, MessageSquare, ShieldCheck, HelpCircle } from 'lucide-react';

interface HeroProps {
  language: Language;
  setActiveTab: (tab: 'home' | 'fleet' | 'about' | 'contact' | 'details') => void;
}

export default function Hero({ language, setActiveTab }: HeroProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  return (
    <div className="relative h-[85vh] sm:h-[90vh] flex items-center justify-center overflow-hidden" id="hero-section">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1920" 
          alt="Premium Rental Car" 
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow filter brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`max-w-2xl text-white ${isRtl ? 'text-right mr-auto ml-0' : 'text-left mr-auto'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full px-3 py-1 text-xs font-semibold text-orange-500 mb-6 uppercase tracking-wider animate-bounce">
            <ShieldCheck size={14} />
            <span>Morocco's #1 Fleet Service</span>
          </div>

          {/* Slogan */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-tight mb-6">
            {language === 'ar' ? (
              <>
                تأجير سيارات متميزة <span className="text-orange-500">بدون تعقيدات</span>
              </>
            ) : language === 'fr' ? (
              <>
                Location de Voitures <span className="text-orange-500">Premium & Simplifiée</span>
              </>
            ) : (
              <>
                Premium Car Rental <span className="text-orange-500">Made Simple</span>
              </>
            )}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light mb-8 max-w-xl leading-relaxed">
            {t.heroSub}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary Browse Button */}
            <button
              onClick={() => {
                setActiveTab('fleet');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2 bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 font-bold px-8 py-4 rounded-full shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 duration-200 text-base cursor-pointer"
              id="hero-browse-btn"
            >
              <span>{t.browseCars}</span>
              <ArrowRight size={18} className={isRtl ? 'rotate-180' : ''} />
            </button>

            {/* WhatsApp direct button */}
            <a
              href="https://wa.me/212600000000?text=Hello%20LuxDrive,%20I%20would%20like%20to%20inquire%20about%20renting%20a%20car%20in%20Morocco."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 font-bold px-8 py-4 rounded-full shadow-lg shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5 duration-200 text-base border border-emerald-500/30"
              id="hero-whatsapp-btn"
            >
              <MessageSquare size={20} className="fill-white/10" />
              <span>{t.reserveWhatsApp}</span>
            </a>
          </div>

          {/* Floating tags */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-xs sm:text-sm text-slate-400">
            <div>
              <span className="block text-xl font-bold text-white mb-1">0%</span>
              <span>Hidden Charges</span>
            </div>
            <div>
              <span className="block text-xl font-bold text-white mb-1">24/7</span>
              <span>WhatsApp Support</span>
            </div>
            <div>
              <span className="block text-xl font-bold text-white mb-1">Free</span>
              <span>Airport Deliveries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
