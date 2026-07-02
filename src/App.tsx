/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedCars from './components/FeaturedCars';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import FleetView from './components/FleetView';
import CarDetailsView from './components/CarDetailsView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import { WishlistModal, CompareModal } from './components/Modals';
import { Car, Language, Currency } from './types';

export default function App() {
  // Navigation & Page State
  const [activeTab, setActiveTab] = useState<'home' | 'fleet' | 'about' | 'contact' | 'details'>('home');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  // Settings state
  const [language, setLanguage] = useState<Language>('en');
  const [currency, setCurrency] = useState<Currency>('MAD');

  // Modals state
  const [showWishlistModal, setShowWishlistModal] = useState(false);
  const [showCompareModal, setShowCompareModal] = useState(false);

  // Wishlist state (persists in localStorage)
  const [wishlist, setWishlist] = useState<string[]>([]);
  // Compare state (up to 3 cars)
  const [compareList, setCompareList] = useState<string[]>([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('luxdrive_wishlist');
      if (stored) {
        setWishlist(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error reading localStorage wishlist:', e);
    }
  }, []);

  // Save wishlist to localStorage when updated
  const toggleWishlist = (id: string) => {
    setWishlist((prev) => {
      const updated = prev.includes(id) 
        ? prev.filter((item) => item !== id) 
        : [...prev, id];
      try {
        localStorage.setItem('luxdrive_wishlist', JSON.stringify(updated));
      } catch (e) {
        console.error('Error writing localStorage wishlist:', e);
      }
      return updated;
    });
  };

  const toggleCompare = (id: string) => {
    setCompareList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        if (prev.length >= 3) {
          // If already 3, notify user or swap first one
          return [...prev.slice(1), id];
        }
        return [...prev, id];
      }
    });
  };

  const handleViewDetails = (car: Car) => {
    setSelectedCar(car);
    setActiveTab('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="bg-slate-50 min-h-screen text-slate-900 selection:bg-orange-500 selection:text-white font-sans"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Navbar Component */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
        currency={currency}
        setCurrency={setCurrency}
        wishlistCount={wishlist.length}
        compareCount={compareList.length}
        setShowWishlistModal={setShowWishlistModal}
        setShowCompareModal={setShowCompareModal}
      />

      {/* Main Dynamic View Controller */}
      <main className="relative">
        {activeTab === 'home' && (
          <div className="animate-fade-in">
            {/* Full-Screen Hero */}
            <Hero language={language} setActiveTab={setActiveTab} />
            
            {/* Value Proposition Grid */}
            <WhyChooseUs language={language} />
            
            {/* Featured Car List Grid */}
            <FeaturedCars
              language={language}
              currency={currency}
              onViewDetails={handleViewDetails}
              setActiveTab={setActiveTab}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              compareList={compareList}
              toggleCompare={toggleCompare}
            />
            
            {/* Reviews */}
            <Testimonials language={language} />
            
            {/* Accordion FAQ list */}
            <Faq language={language} />
          </div>
        )}

        {activeTab === 'fleet' && (
          <div className="animate-fade-in">
            <FleetView
              language={language}
              currency={currency}
              onViewDetails={handleViewDetails}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              compareList={compareList}
              toggleCompare={toggleCompare}
            />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="animate-fade-in">
            <AboutView language={language} />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="animate-fade-in">
            <ContactView language={language} />
          </div>
        )}

        {activeTab === 'details' && selectedCar && (
          <div className="animate-fade-in">
            <CarDetailsView
              car={selectedCar}
              language={language}
              currency={currency}
              onBackToFleet={() => setActiveTab('fleet')}
              onViewDetails={handleViewDetails}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              compareList={compareList}
              toggleCompare={toggleCompare}
            />
          </div>
        )}
      </main>

      {/* Footer Section */}
      <Footer language={language} setActiveTab={setActiveTab} />

      {/* Persistent Floating Utilities (WhatsApp, Call, Scroll to Top) */}
      <FloatingButtons language={language} />

      {/* Wishlist Sidebar/Modal Overlays */}
      {showWishlistModal && (
        <WishlistModal
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
          language={language}
          currency={currency}
          onViewCar={handleViewDetails}
          onClose={() => setShowWishlistModal(false)}
        />
      )}

      {/* Compare Side-by-Side Specifications Modal */}
      {showCompareModal && (
        <CompareModal
          compareList={compareList}
          toggleCompare={toggleCompare}
          language={language}
          currency={currency}
          onViewCar={handleViewDetails}
          onClose={() => setShowCompareModal(false)}
        />
      )}
    </div>
  );
}
