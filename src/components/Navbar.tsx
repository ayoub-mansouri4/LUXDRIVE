/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Heart, RefreshCw, Phone, MessageSquare, Globe, DollarSign } from 'lucide-react';
import { Language, Currency } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  wishlistCount: number;
  compareCount: number;
  setShowWishlistModal: (show: boolean) => void;
  setShowCompareModal: (show: boolean) => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  language,
  setLanguage,
  currency,
  setCurrency,
  wishlistCount,
  compareCount,
  setShowWishlistModal,
  setShowCompareModal,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  const navLinks = [
    { id: 'home', label: t.home },
    { id: 'fleet', label: t.fleet },
    { id: 'about', label: t.about },
    { id: 'contact', label: t.contact }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white text-slate-900 shadow-sm border-b border-slate-200">
      {/* Top bar with quick contact info */}
      <div className="bg-slate-50 text-slate-600 py-1.5 px-4 sm:px-6 lg:px-8 text-xs border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-4">
            <a href="tel:+212600000000" className="flex items-center gap-1 hover:text-orange-500 transition-colors">
              <Phone size={12} className="text-orange-500" />
              <span>+212 600 000 000</span>
            </a>
            <span className="hidden sm:inline text-slate-300">|</span>
            <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-600 transition-colors">
              <MessageSquare size={12} className="text-green-500 fill-green-500/10" />
              <span>WhatsApp 24/7</span>
            </a>
          </div>
          <div className="flex items-center gap-3 font-medium text-slate-500">
            <span>Morocco's Finest Airport Car Rental Service</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 cursor-pointer group"
          id="nav-logo"
        >
          <div className="relative w-9 h-9 rounded-lg bg-blue-900 flex items-center justify-center font-bold text-lg text-white tracking-wider overflow-hidden transition-transform duration-300 group-hover:scale-105">
            LD
            <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 transition-opacity" />
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-wider text-blue-900 group-hover:text-orange-500 transition-colors">
              {t.appName}
            </span>
            <span className="block text-[9px] text-orange-500 tracking-widest uppercase font-semibold leading-none">
              {t.tagline}
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative py-2 text-sm tracking-wide transition-colors ${
                activeTab === link.id 
                  ? 'text-orange-500 font-bold' 
                  : 'text-slate-600 hover:text-orange-500'
              }`}
              id={`nav-link-${link.id}`}
            >
              {link.label}
              {activeTab === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Desktop Settings & Tools */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Wishlist Trigger */}
          <button 
            onClick={() => setShowWishlistModal(true)}
            className="p-2 text-slate-600 hover:text-orange-500 relative transition-colors"
            title="Wishlist"
            id="nav-wishlist-btn"
          >
            <Heart size={20} className={wishlistCount > 0 ? "fill-orange-500 text-orange-500" : ""} />
            {wishlistCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Compare Trigger */}
          <button 
            onClick={() => setShowCompareModal(true)}
            className="p-2 text-slate-600 hover:text-orange-500 relative transition-colors"
            title="Compare Vehicles"
            id="nav-compare-btn"
          >
            <RefreshCw size={20} className={compareCount > 0 ? "animate-spin-slow text-orange-500" : ""} />
            {compareCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {compareCount}
              </span>
            )}
          </button>

          {/* Divider */}
          <span className="h-6 w-px bg-slate-200" />

          {/* Currency Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 border border-slate-200 rounded-md px-2 py-1 text-xs">
            <DollarSign size={13} className="text-orange-500" />
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className="bg-transparent text-slate-800 outline-none cursor-pointer pr-1 font-semibold"
              id="currency-selector"
            >
              <option value="MAD" className="bg-white text-slate-900">MAD</option>
              <option value="EUR" className="bg-white text-slate-900">EUR (€)</option>
              <option value="USD" className="bg-white text-slate-900">USD ($)</option>
            </select>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 border border-slate-200 rounded-md px-2 py-1 text-xs">
            <Globe size={13} className="text-orange-500" />
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent text-slate-800 outline-none cursor-pointer pr-1 font-semibold"
              id="language-selector"
            >
              <option value="en" className="bg-white text-slate-900">EN</option>
              <option value="fr" className="bg-white text-slate-900">FR</option>
              <option value="ar" className="bg-white text-slate-900">العربية</option>
            </select>
          </div>
        </div>

        {/* Mobile Menu Controls */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Wishlist Button Mobile */}
          <button 
            onClick={() => setShowWishlistModal(true)}
            className="p-1.5 text-slate-600 hover:text-orange-500 relative transition-colors"
          >
            <Heart size={20} className={wishlistCount > 0 ? "fill-orange-500 text-orange-500" : ""} />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-orange-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Compare Button Mobile */}
          <button 
            onClick={() => setShowCompareModal(true)}
            className="p-1.5 text-slate-600 hover:text-orange-500 relative transition-colors"
          >
            <RefreshCw size={18} className={compareCount > 0 ? "text-orange-500" : ""} />
            {compareCount > 0 && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-orange-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {compareCount}
              </span>
            )}
          </button>

          {/* Language Switcher Mobile */}
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="bg-slate-100 border border-slate-200 text-slate-700 text-xs rounded px-1.5 py-1 outline-none"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="ar">AR</option>
          </select>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-slate-100 text-slate-700 transition-colors"
            id="mobile-menu-hamburger"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-4 shadow-lg animate-fade-in" id="mobile-menu-drawer">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full py-2.5 px-4 text-left rounded-md text-sm font-semibold transition-all ${
                  activeTab === link.id 
                    ? 'bg-orange-500 text-white' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="h-px bg-slate-100" />

          {/* Currency Switcher Mobile */}
          <div className="flex items-center justify-between px-4">
            <span className="text-sm text-slate-500 font-medium">Currency</span>
            <div className="flex items-center gap-1 bg-slate-100 border border-slate-200 rounded-md px-2.5 py-1 text-sm">
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value as Currency)}
                className="bg-transparent text-slate-800 outline-none cursor-pointer font-bold"
              >
                <option value="MAD" className="bg-white text-slate-900 font-normal">MAD</option>
                <option value="EUR" className="bg-white text-slate-900 font-normal">EUR (€)</option>
                <option value="USD" className="bg-white text-slate-900 font-normal">USD ($)</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
