/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Car, Language, Currency } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { CARS_DATA } from '../data/cars';
import CarCard from './CarCard';
import { 
  ChevronLeft, MessageSquare, Calendar, HelpCircle, Shield, ArrowRight,
  Disc, Fuel, Users, ThermometerSnowflake, Sparkles, CheckCircle2, Star,
  Heart, RefreshCw
} from 'lucide-react';

interface CarDetailsViewProps {
  car: Car;
  language: Language;
  currency: Currency;
  onBackToFleet: () => void;
  onViewDetails: (car: Car) => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  compareList: string[];
  toggleCompare: (id: string) => void;
}

export default function CarDetailsView({
  car,
  language,
  currency,
  onBackToFleet,
  onViewDetails,
  wishlist,
  toggleWishlist,
  compareList,
  toggleCompare,
}: CarDetailsViewProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';
  
  // Gallery active index state
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Booking details state
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const isWishlisted = wishlist.includes(car.id);
  const isCompared = compareList.includes(car.id);

  // Convert price
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

  // Filter similar vehicles (same category, or nearby price, excluding current car)
  const similarCars = useMemo(() => {
    return CARS_DATA.filter(
      item => item.id !== car.id && (item.category === car.category || Math.abs(item.pricePerDay - car.pricePerDay) < 200)
    ).slice(0, 3);
  }, [car]);

  // Handle dynamic WhatsApp text injection
  const getWhatsAppBookingLink = () => {
    const formattedPickup = pickupDate || '[Choose Pickup Date]';
    const formattedReturn = returnDate || '[Choose Return Date]';

    const baseText = language === 'ar'
      ? `مرحباً لوكس درايف، أود حجز سيارة ${car.brand} ${car.model} (${car.year}) من تاريخ ${formattedPickup} إلى تاريخ ${formattedReturn}.`
      : language === 'fr'
      ? `Bonjour LuxDrive, je souhaite réserver la ${car.brand} ${car.model} (${car.year}) du ${formattedPickup} au ${formattedReturn}.`
      : `Hello LuxDrive, I would like to reserve the ${car.brand} ${car.model} (${car.year}) from ${formattedPickup} to ${formattedReturn}.`;
    
    return `https://wa.me/212600000000?text=${encodeURIComponent(baseText)}`;
  };

  return (
    <div className="py-12 bg-slate-50 text-slate-900 min-h-screen" id="car-details-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button Link */}
        <button
          onClick={onBackToFleet}
          className="flex items-center gap-1 text-slate-500 hover:text-orange-500 font-bold text-sm tracking-wide mb-8 transition-colors group cursor-pointer"
          id="back-to-fleet-btn"
        >
          <ChevronLeft size={18} className={`transition-transform group-hover:-translate-x-1 ${isRtl ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
          <span>{t.backToFleet}</span>
        </button>

        {/* Dynamic Detail Body Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: Gallery, Specs & Features (8 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-10">
            {/* Gallery Card */}
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden p-4 sm:p-6 shadow-sm relative">
              {/* Overlay Tags */}
              <div className="absolute top-8 left-8 z-10 flex gap-2">
                <span className="bg-orange-500 text-white font-extrabold text-xs px-3 py-1 rounded-md uppercase tracking-wider shadow-sm">
                  {t[car.category.toLowerCase() as keyof typeof t] || car.category}
                </span>
                <span className={`px-2.5 py-1 text-xs font-bold uppercase rounded-md tracking-wider border shadow-sm ${
                  car.availability 
                    ? 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30' 
                    : 'bg-rose-500/15 text-rose-600 border-rose-500/30'
                }`}>
                  {car.availability ? t.available : t.reserved}
                </span>
              </div>

              {/* Action Buttons Overlay */}
              <div className="absolute top-8 right-8 z-10 flex gap-2">
                <button
                  onClick={() => toggleCompare(car.id)}
                  className={`p-2.5 rounded-xl border backdrop-blur-md transition-colors cursor-pointer ${
                    isCompared 
                      ? 'bg-orange-500 border-orange-500 text-white shadow-sm' 
                      : 'bg-white/80 border-slate-200 text-slate-600 hover:text-orange-500 shadow-sm'
                  }`}
                  title="Compare Vehicle"
                >
                  <RefreshCw size={16} className={isCompared ? 'animate-spin-slow' : ''} />
                </button>
                <button
                  onClick={() => toggleWishlist(car.id)}
                  className={`p-2.5 rounded-xl border backdrop-blur-md transition-colors cursor-pointer ${
                    isWishlisted 
                      ? 'bg-orange-500 border-orange-500 text-white shadow-sm' 
                      : 'bg-white/80 border-slate-200 text-slate-600 hover:text-orange-500 shadow-sm'
                  }`}
                  title="Add to Wishlist"
                >
                  <Heart size={16} className={isWishlisted ? 'fill-white' : ''} />
                </button>
              </div>

              {/* Large Image Frame */}
              <div className="h-64 sm:h-[450px] bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200 mb-4">
                <img 
                  src={car.images[activeImageIdx]} 
                  alt={`${car.brand} ${car.model}`} 
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
              </div>

              {/* Thumbnails list */}
              <div className="grid grid-cols-3 gap-3">
                {car.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`h-20 sm:h-28 bg-slate-100 rounded-xl overflow-hidden border-2 transition-all relative cursor-pointer ${
                      activeImageIdx === idx ? 'border-orange-500 scale-95 shadow-md' : 'border-slate-200 hover:border-slate-300 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="car view thumbnail" className="w-full h-full object-cover object-center" />
                  </button>
                ))}
              </div>
            </div>

            {/* Description & Technical Specs */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-8 shadow-sm">
              <div>
                <h2 className="text-xl sm:text-2xl font-display font-extrabold mb-3 text-blue-900">About This Vehicle</h2>
                <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
                  {car.description}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h3 className="text-lg font-display font-extrabold mb-5 text-blue-900">{t.specifications}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                    <span className="block text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">Engine</span>
                    <span className="block text-sm font-extrabold text-orange-500">{car.specs.engine}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                    <span className="block text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">Consumption</span>
                    <span className="block text-sm font-extrabold text-orange-500">{car.specs.fuelConsumption}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                    <span className="block text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">0-100 km/h</span>
                    <span className="block text-sm font-extrabold text-orange-500">{car.specs.acceleration}</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                    <span className="block text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">Luggage</span>
                    <span className="block text-sm font-extrabold text-orange-500">{car.specs.baggage}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Features list */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-display font-extrabold mb-6 text-blue-900">{t.features}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {car.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-slate-600 text-sm">
                    <CheckCircle2 size={16} className="text-orange-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms and conditions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 text-orange-500 mb-4">
                  <Shield size={18} />
                  <h4 className="font-bold text-blue-900 text-sm uppercase tracking-wide">{t.conditions}</h4>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  {t.rentalConditionsText}
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 text-orange-500 mb-4">
                  <Sparkles size={18} />
                  <h4 className="font-bold text-blue-900 text-sm uppercase tracking-wide">{t.includedServices}</h4>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  {t.includedServicesText}
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Price box & Date inputs Form (4 cols) */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 space-y-6">
            
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold block mb-1">Rental Price Per Day</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-orange-500">{formattedPrice}</span>
                  <span className="text-slate-500 text-sm">/ {t.perDay}</span>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 space-y-4">
                <h4 className="font-bold text-blue-900 text-sm tracking-wide uppercase flex items-center gap-2">
                  <Calendar size={16} className="text-orange-500" />
                  <span>{t.chooseDates}</span>
                </h4>

                {/* Dates Inputs */}
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t.pickupDate}</label>
                    <input 
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer"
                      id="details-pickup-date"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t.returnDate}</label>
                    <input 
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-slate-800 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer"
                      id="details-return-date"
                    />
                  </div>
                </div>
              </div>

              {/* Total Calculation Preview (If both dates chosen) */}
              {pickupDate && returnDate && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm space-y-2 animate-fade-in">
                  <div className="flex justify-between text-slate-500">
                    <span>Base rate per day</span>
                    <span className="text-slate-900 font-bold">{formattedPrice}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Selected vehicle</span>
                    <span className="text-slate-900 font-bold">{car.brand} {car.model}</span>
                  </div>
                  <div className="h-px bg-slate-200 my-2" />
                  <div className="flex justify-between font-extrabold text-slate-900 text-base">
                    <span>Total Estimate</span>
                    <span className="text-orange-500">Contact via WhatsApp</span>
                  </div>
                </div>
              )}

              {/* Major WhatsApp Reserve Button */}
              <a
                href={getWhatsAppBookingLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm text-base cursor-pointer"
                id="details-whatsapp-reserve-btn"
              >
                <MessageSquare size={20} className="fill-white/10" />
                <span>{t.reserveBtn}</span>
              </a>

              <div className="text-center">
                <span className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold">⚡ Instant response • No pre-payment required</span>
              </div>
            </div>

            {/* Contact quick assistance box */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 text-center space-y-4 shadow-sm">
              <span className="text-3xl block">✈</span>
              <h4 className="font-extrabold text-blue-900 text-sm uppercase tracking-wide">Airport VIP Pickup Included</h4>
              <p className="text-slate-600 text-xs leading-relaxed font-light">
                Our airport representative will meet you right in front of the exit gate with a personalized name card.
              </p>
            </div>

          </div>

        </div>

        {/* SECTION: Similar Vehicles */}
        <div className="mt-20 border-t border-slate-200 pt-16">
          <h3 className="text-2xl font-display font-extrabold mb-8 text-blue-900">{t.similarCars}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {similarCars.map(item => (
              <CarCard
                key={item.id}
                car={item}
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
      </div>
    </div>
  );
}
