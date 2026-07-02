/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Car, Language, Currency } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Heart, RefreshCw, MessageSquare, ArrowRight, CheckCircle, Fuel, Disc, Users, ThermometerSnowflake } from 'lucide-react';

interface CarCardProps {
  key?: string;
  car: Car;
  language: Language;
  currency: Currency;
  onViewDetails: (car: Car) => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  compareList: string[];
  toggleCompare: (id: string) => void;
}

export default function CarCard({
  car,
  language,
  currency,
  onViewDetails,
  wishlist,
  toggleWishlist,
  compareList,
  toggleCompare,
}: CarCardProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';
  const isWishlisted = wishlist.includes(car.id);
  const isCompared = compareList.includes(car.id);

  // Convert price from MAD to chosen currency
  const getFormattedPrice = (priceInMad: number, curr: Currency) => {
    if (curr === 'EUR') {
      const converted = Math.round(priceInMad / 11);
      return `${converted} €`;
    }
    if (curr === 'USD') {
      const converted = Math.round(priceInMad / 10);
      return `${converted} $`;
    }
    return `${priceInMad} MAD`;
  };

  const formattedPrice = getFormattedPrice(car.pricePerDay, currency);

  // Pre-filled WhatsApp link for direct booking
  const getWhatsAppLink = (c: Car) => {
    const baseText = language === 'ar' 
      ? `مرحباً لوكس درايف، أود حجز سيارة ${c.brand} ${c.model} (${c.year}) في أقرب وقت ممكن.`
      : language === 'fr'
      ? `Bonjour LuxDrive, je souhaite réserver la ${c.brand} ${c.model} (${c.year}). Veuillez m'indiquer la disponibilité.`
      : `Hello LuxDrive, I would like to reserve the ${c.brand} ${c.model} (${c.year}). Please let me know the availability.`;
    return `https://wa.me/212600000000?text=${encodeURIComponent(baseText)}`;
  };

  return (
    <div 
      className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-orange-500/40 transition-all duration-300 flex flex-col group h-full relative"
      id={`car-card-${car.id}`}
    >
      {/* Badges / Overlay Triggers */}
      <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center pointer-events-none">
        {/* Availability Badge */}
        <span className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded-md tracking-wider shadow-sm pointer-events-auto ${
          car.availability 
            ? 'bg-emerald-500/15 text-emerald-600 border border-emerald-500/30' 
            : 'bg-rose-500/15 text-rose-600 border border-rose-500/30'
        }`}>
          {car.availability ? t.available : t.reserved}
        </span>

        <div className="flex gap-2 pointer-events-auto">
          {/* Compare Toggle */}
          <button
            onClick={() => toggleCompare(car.id)}
            className={`p-2 rounded-lg border backdrop-blur-md transition-colors cursor-pointer ${
              isCompared 
                ? 'bg-orange-500 border-orange-500 text-white shadow-sm' 
                : 'bg-white/80 border-slate-200 text-slate-600 hover:text-orange-500 hover:border-orange-500/50 shadow-sm'
            }`}
            title="Compare Vehicle"
            id={`compare-btn-${car.id}`}
          >
            <RefreshCw size={14} className={isCompared ? 'animate-spin-slow' : ''} />
          </button>

          {/* Wishlist Toggle */}
          <button
            onClick={() => toggleWishlist(car.id)}
            className={`p-2 rounded-lg border backdrop-blur-md transition-colors cursor-pointer ${
              isWishlisted 
                ? 'bg-orange-500 border-orange-500 text-white shadow-sm' 
                : 'bg-white/80 border-slate-200 text-slate-600 hover:text-orange-500 hover:border-orange-500/50 shadow-sm'
            }`}
            title="Add to Wishlist"
            id={`wishlist-btn-${car.id}`}
          >
            <Heart size={14} className={isWishlisted ? 'fill-white' : ''} />
          </button>
        </div>
      </div>

      {/* Hero Image Container */}
      <div 
        onClick={() => onViewDetails(car)}
        className="relative h-48 sm:h-56 bg-slate-100 overflow-hidden cursor-pointer"
      >
        <img 
          src={car.images[0]} 
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-[0.98]"
          loading="lazy"
        />
        {/* Category Label Overlay */}
        <span className="absolute bottom-3 left-3 bg-white/80 border border-slate-200/60 backdrop-blur-sm text-orange-500 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded shadow-sm">
          {t[car.category.toLowerCase() as keyof typeof t] || car.category}
        </span>
      </div>

      {/* Main Details Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand and Model */}
          <div className="flex justify-between items-start gap-2 mb-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-500 transition-colors leading-tight">
                {car.brand} {car.model}
              </h3>
              <span className="text-xs text-slate-500 font-medium">Model Year {car.year}</span>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-1 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded text-[11px] font-bold text-orange-500">
              <span>★</span>
              <span>{car.rating}</span>
            </div>
          </div>

          {/* Core Spec Icons */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 my-4 border-y border-slate-100 py-3 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <Disc size={13} className="text-orange-500" />
              <span>{car.transmission === 'Manual' ? t.manual : t.automatic}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Fuel size={13} className="text-orange-500" />
              <span>{car.fuel === 'Petrol' ? t.petrol : car.fuel === 'Diesel' ? t.diesel : car.fuel === 'Hybrid' ? t.hybrid : t.electric}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users size={13} className="text-orange-500" />
              <span>{car.seats} {t.seats}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ThermometerSnowflake size={13} className="text-orange-500" />
              <span>{car.ac ? t.ac : 'No A/C'}</span>
            </div>
          </div>
        </div>

        <div>
          {/* Price Label */}
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{t.bestPrices}</span>
            <div className="text-right">
              <span className="text-xl font-extrabold text-orange-500">{formattedPrice}</span>
              <span className="text-xs text-slate-500 font-light"> / {t.perDay}</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {/* View Details */}
            <button
              onClick={() => onViewDetails(car)}
              className="w-full py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-lg transition-colors border border-slate-200/60 flex items-center justify-center gap-1.5 cursor-pointer"
              id={`view-details-${car.id}`}
            >
              <span>{t.viewDetails.split(' ')[0]}</span>
              <ArrowRight size={12} className={isRtl ? 'rotate-180' : ''} />
            </button>

            {/* Direct WhatsApp Reserve */}
            <a
              href={getWhatsAppLink(car)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
              id={`whatsapp-reserve-${car.id}`}
            >
              <MessageSquare size={13} className="fill-white/10" />
              <span>{t.reserveWhatsApp.split(' ')[0]}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
