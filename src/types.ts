/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  category: 'Economy' | 'Sedan' | 'SUV' | 'Luxury';
  fuel: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Manual' | 'Automatic';
  seats: number;
  ac: boolean;
  pricePerDay: number; // in MAD (e.g., 300 MAD to 1200 MAD)
  availability: boolean;
  images: string[]; // array of image URLs
  features: string[]; // e.g. ["GPS", "Bluetooth", "Apple CarPlay", "Backup Camera", "Cruise Control"]
  rating: number; // e.g. 4.8
  reviewsCount: number; // e.g. 24
  description: string;
  specs: {
    engine: string;
    acceleration: string; // e.g. "8.2s"
    baggage: string; // e.g. "2 Bags"
    fuelConsumption: string; // e.g. "5.2L/100km"
  };
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export type Language = 'en' | 'fr' | 'ar';
export type Currency = 'MAD' | 'EUR' | 'USD';

