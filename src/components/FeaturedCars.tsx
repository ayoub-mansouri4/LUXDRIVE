/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CARS_DATA } from '../data/cars';
import { Car, Language, Currency } from '../types';
import { TRANSLATIONS } from '../data/translations';
import CarCard from './CarCard';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedCarsProps {
  language: Language;
  currency: Currency;
  onViewDetails: (car: Car) => void;
  setActiveTab: (tab: any) => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  compareList: string[];
  toggleCompare: (id: string) => void;
}

export default function FeaturedCars({
  language,
  currency,
  onViewDetails,
  setActiveTab,
  wishlist,
  toggleWishlist,
  compareList,
  toggleCompare,
}: FeaturedCarsProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  // Highlight 4 distinct models spanning all our key classes
  const featuredIds = ['peugeot-208', 'volkswagen-golf-8', 'hyundai-tucson', 'mercedes-c-class'];
  const featuredCars = CARS_DATA.filter(car => featuredIds.includes(car.id));

  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-100" id="featured-cars-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className={isRtl ? 'text-right' : 'text-left'}>
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-2">
              {t.featuredCars}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-blue-900 tracking-tight">
              {language === 'ar' ? 'اختر سيارتك الفاخرة المفضلة' : language === 'fr' ? 'Sélection de Véhicules d\'Exception' : 'Experience First-Class Comfort'}
            </h2>
            <p className="text-slate-500 text-sm mt-2 font-light">
              {t.featuredSub}
            </p>
          </div>

          <button
            onClick={() => {
              setActiveTab('fleet');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center justify-center gap-1.5 self-start md:self-auto text-orange-500 hover:text-orange-450 font-bold text-sm tracking-wide transition-colors group cursor-pointer"
            id="featured-see-all-btn"
          >
            <span>{t.browseCars}</span>
            <ArrowRight size={16} className={`transition-transform duration-300 group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
          </button>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              language={language}
              currency={currency}
              onViewDetails={onViewDetails}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              compareList={compareList}
              toggleCompare={toggleCompare}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
