/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';
import { MessageSquare, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

interface FooterProps {
  language: Language;
  setActiveTab: (tab: any) => void;
}

export default function Footer({ language, setActiveTab }: FooterProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 py-16 text-xs sm:text-sm" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          
          {/* Logo brand (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div 
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2 cursor-pointer inline-flex"
            >
              <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center font-bold text-base text-white">
                LD
              </div>
              <span className="font-display font-extrabold text-lg text-blue-900 tracking-wider">{t.appName}</span>
            </div>
            <p className="text-slate-500 font-light leading-relaxed max-w-xs">
              {t.footerSlogan}
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-500 hover:text-orange-500 hover:border-orange-500/30 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-500 hover:text-orange-500 hover:border-orange-500/30 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-500 hover:text-orange-500 hover:border-orange-500/30 transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick links (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-blue-900 text-xs uppercase tracking-widest">{t.quickLinks}</h4>
            <ul className="space-y-2.5 font-light">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-orange-500 text-slate-600 transition-colors cursor-pointer">
                  {t.home}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('fleet')} className="hover:text-orange-500 text-slate-600 transition-colors cursor-pointer">
                  {t.fleet}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-orange-500 text-slate-600 transition-colors cursor-pointer">
                  {t.about}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-orange-500 text-slate-600 transition-colors cursor-pointer">
                  {t.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-blue-900 text-xs uppercase tracking-widest">{t.contactInfo}</h4>
            <ul className="space-y-3 font-light text-slate-500">
              <li className="flex gap-2.5 items-start">
                <Phone size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <a href="tel:+212600000000" className="text-slate-600 hover:text-orange-500 transition-colors font-semibold">
                  +212 600 000 000
                </a>
              </li>
              <li className="flex gap-2.5 items-start">
                <MessageSquare size={14} className="text-emerald-500 flex-shrink-0 mt-0.5 fill-emerald-500/10" />
                <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-emerald-500 transition-colors font-semibold">
                  +212 600 000 000
                </a>
              </li>
              <li className="flex gap-2.5 items-start">
                <Mail size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@luxdrive.ma" className="text-slate-600 hover:text-orange-500 transition-colors font-semibold">
                  info@luxdrive.ma
                </a>
              </li>
              <li className="flex gap-2.5 items-start">
                <MapPin size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-500">{t.officeAddress}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-slate-400">
          <div>
            <span>&copy; {new Date().getFullYear()} LUXDRIVE Morocco. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1 font-light text-slate-400">
            <span>Crafted for premium travelers in Morocco</span>
            <Heart size={10} className="text-orange-500 fill-orange-500" />
          </div>
        </div>

      </div>
    </footer>
  );
}
