/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Car, Language, Currency } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { CARS_DATA } from '../data/cars';
import { X, Trash2, Heart, RefreshCw, Star, Check, ExternalLink } from 'lucide-react';

interface WishlistModalProps {
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  language: Language;
  currency: Currency;
  onViewCar: (car: Car) => void;
  onClose: () => void;
}

export function WishlistModal({
  wishlist,
  toggleWishlist,
  language,
  currency,
  onViewCar,
  onClose,
}: WishlistModalProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  const wishlistedCars = CARS_DATA.filter(car => wishlist.includes(car.id));

  // Convert price
  const getFormattedPrice = (priceInMad: number, curr: Currency) => {
    if (curr === 'EUR') {
      return `${Math.round(priceInMad / 11)} €`;
    }
    if (curr === 'USD') {
      return `${Math.round(priceInMad / 10)} $`;
    }
    return `${priceInMad} MAD`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fade-in" id="wishlist-overlay-modal">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
          <div className="flex items-center gap-2">
            <Heart className="text-orange-500 fill-orange-500/10" size={20} />
            <h3 className="font-display font-extrabold text-blue-900 text-lg tracking-wide uppercase">Your Wishlist ({wishlistedCars.length})</h3>
          </div>
          <button onClick={onClose} className="p-1.5 bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-800 rounded-lg transition-colors cursor-pointer">
            <X size={16} />
          </button>
        </div>

        {/* Wishlist body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {wishlistedCars.length > 0 ? (
            wishlistedCars.map((car) => (
              <div 
                key={car.id} 
                className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-orange-500/20 transition-all duration-300 shadow-sm"
                id={`wishlist-item-${car.id}`}
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img src={car.images[0]} alt={car.model} className="w-20 h-14 object-cover rounded-lg border border-slate-200" />
                  <div className={isRtl ? 'text-right' : 'text-left'}>
                    <h4 className="font-bold text-slate-900 text-sm leading-tight">{car.brand} {car.model}</h4>
                    <span className="text-xs text-slate-500">{t[car.category.toLowerCase() as keyof typeof t] || car.category} • {car.year}</span>
                    <div className="text-orange-500 font-extrabold text-sm mt-1">{getFormattedPrice(car.pricePerDay, currency)} / {t.perDay}</div>
                  </div>
                </div>

                <div className="flex gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => {
                      onViewCar(car);
                      onClose();
                    }}
                    className="py-2 px-4 bg-white hover:bg-slate-50 text-slate-700 hover:text-orange-500 text-xs font-bold rounded-lg border border-slate-200 transition-colors flex items-center gap-1 cursor-pointer shadow-sm"
                  >
                    <span>View Detail</span>
                    <ExternalLink size={12} />
                  </button>
                  <button
                    onClick={() => toggleWishlist(car.id)}
                    className="p-2 bg-white hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-lg border border-slate-200 hover:border-rose-300 transition-colors cursor-pointer shadow-sm"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 space-y-3">
              <span className="text-4xl block">🖤</span>
              <p className="text-slate-500 text-sm font-light">Your wishlist is currently empty. Explore our fleet to save your favorites!</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

interface CompareModalProps {
  compareList: string[];
  toggleCompare: (id: string) => void;
  language: Language;
  currency: Currency;
  onViewCar: (car: Car) => void;
  onClose: () => void;
}

export function CompareModal({
  compareList,
  toggleCompare,
  language,
  currency,
  onViewCar,
  onClose,
}: CompareModalProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  const comparedCars = CARS_DATA.filter(car => compareList.includes(car.id));

  const getFormattedPrice = (priceInMad: number, curr: Currency) => {
    if (curr === 'EUR') {
      return `${Math.round(priceInMad / 11)} €`;
    }
    if (curr === 'USD') {
      return `${Math.round(priceInMad / 10)} $`;
    }
    return `${priceInMad} MAD`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fade-in" id="compare-overlay-modal">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
          <div className="flex items-center gap-2">
            <RefreshCw className="text-orange-500 animate-spin-slow" size={20} />
            <h3 className="font-display font-extrabold text-blue-900 text-lg tracking-wide uppercase">Compare Vehicles ({comparedCars.length}/3)</h3>
          </div>
          <button onClick={onClose} className="p-1.5 bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-800 rounded-lg transition-colors cursor-pointer">
            <X size={16} />
          </button>
        </div>

        {/* Compare Body */}
        <div className="p-6 overflow-x-auto flex-1 bg-white">
          {comparedCars.length > 0 ? (
            <div className="min-w-[600px] space-y-6">
              {/* Grid representation */}
              <table className="w-full text-slate-700 text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="p-3 text-left text-slate-500 font-bold uppercase w-1/4">Specification</th>
                    {comparedCars.map((car) => (
                      <th key={car.id} className="p-3 text-center w-1/4">
                        <div className="flex flex-col items-center gap-2">
                          <img src={car.images[0]} alt={car.model} className="w-24 h-16 object-cover rounded-lg border border-slate-200 shadow-sm" />
                          <div>
                            <div className="font-bold text-slate-900">{car.brand} {car.model}</div>
                            <button 
                              onClick={() => toggleCompare(car.id)}
                              className="text-[10px] text-rose-500 hover:underline mt-1 cursor-pointer"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {/* Category */}
                  <tr>
                    <td className="p-3 text-left font-bold text-slate-500">Class / Category</td>
                    {comparedCars.map((car) => (
                      <td key={car.id} className="p-3 text-center font-bold text-orange-500">
                        {t[car.category.toLowerCase() as keyof typeof t] || car.category}
                      </td>
                    ))}
                  </tr>
                  {/* Price */}
                  <tr>
                    <td className="p-3 text-left font-bold text-slate-500">Price / Day</td>
                    {comparedCars.map((car) => (
                      <td key={car.id} className="p-3 text-center text-lg font-extrabold text-blue-900">
                        {getFormattedPrice(car.pricePerDay, currency)}
                      </td>
                    ))}
                  </tr>
                  {/* Transmission */}
                  <tr>
                    <td className="p-3 text-left font-bold text-slate-500">Gearbox</td>
                    {comparedCars.map((car) => (
                      <td key={car.id} className="p-3 text-center font-medium">
                        {car.transmission === 'Manual' ? t.manual : t.automatic}
                      </td>
                    ))}
                  </tr>
                  {/* Fuel */}
                  <tr>
                    <td className="p-3 text-left font-bold text-slate-500">Engine / Fuel</td>
                    {comparedCars.map((car) => (
                      <td key={car.id} className="p-3 text-center font-medium">
                        {car.fuel} ({car.specs.engine})
                      </td>
                    ))}
                  </tr>
                  {/* Seats */}
                  <tr>
                    <td className="p-3 text-left font-bold text-slate-500">Passenger Seats</td>
                    {comparedCars.map((car) => (
                      <td key={car.id} className="p-3 text-center font-bold text-slate-800">
                        {car.seats} {t.seats}
                      </td>
                    ))}
                  </tr>
                  {/* Fuel Consumption */}
                  <tr>
                    <td className="p-3 text-left font-bold text-slate-500">Fuel Consumption</td>
                    {comparedCars.map((car) => (
                      <td key={car.id} className="p-3 text-center text-slate-600 font-medium">
                        {car.specs.fuelConsumption}
                      </td>
                    ))}
                  </tr>
                  {/* Rating */}
                  <tr>
                    <td className="p-3 text-left font-bold text-slate-500">Customer Rating</td>
                    {comparedCars.map((car) => (
                      <td key={car.id} className="p-3 text-center font-bold text-yellow-500">
                        ★ {car.rating} ({car.reviewsCount} reviews)
                      </td>
                    ))}
                  </tr>
                  {/* Action row */}
                  <tr>
                    <td className="p-3 text-left font-bold text-slate-500">Actions</td>
                    {comparedCars.map((car) => (
                      <td key={car.id} className="p-3 text-center">
                        <button
                          onClick={() => {
                            onViewCar(car);
                            onClose();
                          }}
                          className="py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 mx-auto cursor-pointer shadow-sm"
                        >
                          <span>Explore Details</span>
                          <ExternalLink size={12} />
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 space-y-3 bg-white">
              <span className="text-4xl block">📊</span>
              <p className="text-slate-500 text-sm font-light">Choose up to 3 cars from the fleet to compare specifications side-by-side!</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
