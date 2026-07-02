/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { CARS_DATA } from '../data/cars';
import { Car, Language, Currency } from '../types';
import { TRANSLATIONS } from '../data/translations';
import CarCard from './CarCard';
import { SlidersHorizontal, Search, RefreshCw, X, ArrowUpDown } from 'lucide-react';

interface FleetViewProps {
  language: Language;
  currency: Currency;
  onViewDetails: (car: Car) => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  compareList: string[];
  toggleCompare: (id: string) => void;
}

export default function FleetView({
  language,
  currency,
  onViewDetails,
  wishlist,
  toggleWishlist,
  compareList,
  toggleCompare,
}: FleetViewProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  // Filters State
  const [search, setSearch] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedTransmission, setSelectedTransmission] = useState('All');
  const [selectedFuel, setSelectedFuel] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState<number>(1200); // Max in dataset is 1100 MAD
  const [sortBy, setSortBy] = useState<'default' | 'priceAsc' | 'priceDesc' | 'rating'>('default');

  // Extract unique brands for dropdown
  const brands = useMemo(() => {
    const allBrands = CARS_DATA.map(car => car.brand);
    return ['All', ...Array.from(new Set(allBrands))];
  }, []);

  // Filter & Sort Logic
  const filteredCars = useMemo(() => {
    let result = [...CARS_DATA];

    // Search query
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        car => car.brand.toLowerCase().includes(q) || car.model.toLowerCase().includes(q)
      );
    }

    // Brand filter
    if (selectedBrand !== 'All') {
      result = result.filter(car => car.brand === selectedBrand);
    }

    // Transmission
    if (selectedTransmission !== 'All') {
      result = result.filter(car => car.transmission === selectedTransmission);
    }

    // Fuel Type
    if (selectedFuel !== 'All') {
      result = result.filter(car => car.fuel === selectedFuel);
    }

    // Category
    if (selectedCategory !== 'All') {
      result = result.filter(car => car.category === selectedCategory);
    }

    // Price Per Day (maxPrice)
    result = result.filter(car => car.pricePerDay <= maxPrice);

    // Sorting
    if (sortBy === 'priceAsc') {
      result.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (sortBy === 'priceDesc') {
      result.sort((a, b) => b.pricePerDay - a.pricePerDay);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, selectedBrand, selectedTransmission, selectedFuel, selectedCategory, maxPrice, sortBy]);

  const resetFilters = () => {
    setSearch('');
    setSelectedBrand('All');
    setSelectedTransmission('All');
    setSelectedFuel('All');
    setSelectedCategory('All');
    setMaxPrice(1200);
    setSortBy('default');
  };

  // Convert default price reference dynamically for currency text
  const currencyLabel = (val: number) => {
    if (currency === 'EUR') {
      return `${Math.round(val / 11)} €`;
    }
    if (currency === 'USD') {
      return `${Math.round(val / 10)} $`;
    }
    return `${val} MAD`;
  };

  return (
    <div className="py-12 bg-slate-50 text-slate-900 min-h-screen" id="fleet-view-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className={`mb-10 ${isRtl ? 'text-right' : 'text-left'}`}>
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-1">
            {t.fleet}
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-blue-900 tracking-tight">
            {t.allCars}
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-light">
            Filter through our catalog to find the exact match for your itinerary and passenger count.
          </p>
        </div>

        {/* Filters Panel Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-10 shadow-sm">
          <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2 text-slate-800">
              <SlidersHorizontal size={18} className="text-orange-500" />
              <span className="font-bold tracking-wide uppercase text-sm">Advanced Filter Console</span>
            </div>
            <button 
              onClick={resetFilters}
              className="text-xs text-orange-500 hover:text-orange-400 flex items-center gap-1 font-semibold transition-colors cursor-pointer"
              id="reset-filters-btn"
            >
              <RefreshCw size={12} />
              <span>Reset</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Search Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Search</label>
              <div className="relative">
                <input 
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm text-slate-800 focus:outline-none focus:border-orange-500 transition-colors"
                  id="filter-search-input"
                />
                <Search size={16} className="absolute left-3.5 top-3.5 text-slate-500" />
              </div>
            </div>

            {/* Brand Dropdown */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Brand</label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-sm text-slate-800 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer font-medium"
                id="filter-brand-select"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand} className="bg-white text-slate-900">
                    {brand === 'All' ? 'All Brands' : brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t.category}</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-sm text-slate-800 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer font-medium"
                id="filter-category-select"
              >
                <option value="All" className="bg-white text-slate-900">{t.allCategories}</option>
                <option value="Economy" className="bg-white text-slate-900">{t.economy}</option>
                <option value="Sedan" className="bg-white text-slate-900">{t.sedan}</option>
                <option value="SUV" className="bg-white text-slate-900">{t.suv}</option>
                <option value="Luxury" className="bg-white text-slate-900">{t.luxury}</option>
              </select>
            </div>

            {/* Transmission */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t.transmission}</label>
              <select
                value={selectedTransmission}
                onChange={(e) => setSelectedTransmission(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-sm text-slate-800 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer font-medium"
                id="filter-transmission-select"
              >
                <option value="All" className="bg-white text-slate-900">{t.allTransmissions}</option>
                <option value="Manual" className="bg-white text-slate-900">{t.manual}</option>
                <option value="Automatic" className="bg-white text-slate-900">{t.automatic}</option>
              </select>
            </div>

            {/* Fuel Type */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t.fuelType}</label>
              <select
                value={selectedFuel}
                onChange={(e) => setSelectedFuel(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-sm text-slate-800 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer font-medium"
                id="filter-fuel-select"
              >
                <option value="All" className="bg-white text-slate-900">{t.allFuels}</option>
                <option value="Diesel" className="bg-white text-slate-900">{t.diesel}</option>
                <option value="Petrol" className="bg-white text-slate-900">{t.petrol}</option>
                <option value="Hybrid" className="bg-white text-slate-900">{t.hybrid}</option>
              </select>
            </div>

            {/* Sorting */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-sm text-slate-800 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer font-medium"
                id="filter-sort-select"
              >
                <option value="default" className="bg-white text-slate-900">Default Catalog</option>
                <option value="priceAsc" className="bg-white text-slate-900">Price: Low to High</option>
                <option value="priceDesc" className="bg-white text-slate-900">Price: High to Low</option>
                <option value="rating" className="bg-white text-slate-900">Rating: Highest First</option>
              </select>
            </div>

            {/* Price Range Slider */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t.maxPrice}</label>
                <span className="text-sm font-bold text-orange-500 bg-orange-500/10 border border-orange-500/20 rounded px-2 py-0.5">
                  {currencyLabel(maxPrice)}
                </span>
              </div>
              <input 
                type="range"
                min="250"
                max="1200"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500 mt-2"
                id="filter-price-range"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-bold mt-1 uppercase">
                <span>{currencyLabel(250)}</span>
                <span>{currencyLabel(1200)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter / Badges */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-slate-500 font-medium">
            Showing <span className="text-slate-900 font-extrabold">{filteredCars.length}</span> luxury vehicles matching filters
          </p>
        </div>

        {/* Fleet Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCars.map((car) => (
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
        ) : (
          <div className="text-center py-20 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm" id="fleet-empty-state">
            <p className="text-slate-500 text-lg mb-4">No vehicles matching your selected criteria were found.</p>
            <button 
              onClick={resetFilters}
              className="bg-orange-500 text-white hover:bg-orange-600 font-extrabold px-6 py-3 rounded-full transition-colors cursor-pointer"
            >
              Clear Filter Console
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
