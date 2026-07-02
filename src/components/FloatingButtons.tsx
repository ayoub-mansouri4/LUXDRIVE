/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { MessageSquare, Phone, ChevronUp } from 'lucide-react';

interface FloatingButtonsProps {
  language: Language;
}

export default function FloatingButtons({ language }: FloatingButtonsProps) {
  const t = TRANSLATIONS[language];
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end" id="floating-buttons-container">
      
      {/* Call Now Button */}
      <a
        href="tel:+212600000000"
        className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 p-3.5 rounded-full shadow-lg transition-all transform hover:-translate-y-1 group"
        title={t.floatingCall}
        id="floating-call-btn"
      >
        <Phone size={18} className="text-orange-500" />
        <span className="text-xs font-bold uppercase tracking-wider max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 pr-0 group-hover:pr-1 whitespace-nowrap">
          {t.floatingCall}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/212600000000?text=Hello%20LuxDrive,%20I%20am%20visiting%2520your%2520website%2520and%2520would%2520like%2520to%2520inquire%2520about%2520booking%2520a%2520car."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-lg transition-all transform hover:-translate-y-1 group border border-emerald-500/30"
        title={t.floatingWhatsApp}
        id="floating-whatsapp-btn"
      >
        <MessageSquare size={18} className="fill-white/10" />
        <span className="text-xs font-bold uppercase tracking-wider max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 pr-0 group-hover:pr-1 whitespace-nowrap">
          {t.floatingWhatsApp}
        </span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
      </a>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center bg-white border border-slate-200 text-slate-500 hover:text-orange-500 p-3.5 rounded-full shadow-lg transition-all transform hover:-translate-y-1 animate-fade-in cursor-pointer"
          title={t.backToTop}
          id="floating-back-to-top"
        >
          <ChevronUp size={18} />
        </button>
      )}

    </div>
  );
}
