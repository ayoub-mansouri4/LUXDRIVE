/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Car, Testimonial, FAQItem } from '../types';

export const CARS_DATA: Car[] = [
  {
    id: 'dacia-sandero',
    brand: 'Dacia',
    model: 'Sandero Stepway',
    year: 2024,
    category: 'Economy',
    fuel: 'Diesel',
    transmission: 'Manual',
    seats: 5,
    ac: true,
    pricePerDay: 250, // MAD per day (~23 EUR, ~25 USD)
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&q=80&w=800'
    ],
    features: [
      'Bluetooth connectivity',
      'USB charger',
      'Rear parking sensors',
      'LED daytime running lights',
      'ABS & ESP',
      'Cruise control'
    ],
    rating: 4.7,
    reviewsCount: 18,
    description: 'The Dacia Sandero Stepway is a perfect hatchback for city travel and light off-road explorations. Extremely fuel-efficient and spacious, it offers an incredible quality-to-price ratio for your travels in Morocco.',
    specs: {
      engine: '1.5 dCi 95 hp',
      acceleration: '11.5s',
      baggage: '2 Medium Bags',
      fuelConsumption: '4.2L/100km'
    }
  },
  {
    id: 'renault-clio-5',
    brand: 'Renault',
    model: 'Clio 5',
    year: 2024,
    category: 'Economy',
    fuel: 'Diesel',
    transmission: 'Manual',
    seats: 5,
    ac: true,
    pricePerDay: 280,
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800'
    ],
    features: [
      'Apple CarPlay & Android Auto',
      'Touchscreen Media display',
      'Lane departure warning',
      'Parking sensors',
      'Full LED headlights',
      'Hill start assist'
    ],
    rating: 4.8,
    reviewsCount: 26,
    description: 'The iconic Renault Clio 5 combines modern, sporty dynamics with high fuel economy and premium French design. It is quiet, agile, and equipped with state-of-the-art tech.',
    specs: {
      engine: '1.5 dCi 115 hp',
      acceleration: '10.2s',
      baggage: '2 Medium Bags',
      fuelConsumption: '3.9L/100km'
    }
  },
  {
    id: 'peugeot-208',
    brand: 'Peugeot',
    model: '208 GT-Line',
    year: 2024,
    category: 'Economy',
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: 5,
    ac: true,
    pricePerDay: 320,
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800'
    ],
    features: [
      '3D i-Cockpit',
      'Panoramic glass roof',
      'Apple CarPlay & Android Auto',
      '180-degree backup camera',
      'Sport seats',
      'Wireless phone charger'
    ],
    rating: 4.9,
    reviewsCount: 31,
    description: 'With its bold, aggressive styling and premium GT-Line trim, the Peugeot 208 is an absolute head-turner. Enjoy automatic transmission luxury combined with incredible diesel efficiency.',
    specs: {
      engine: '1.5 BlueHDi 130 hp',
      acceleration: '9.3s',
      baggage: '2 Medium Bags',
      fuelConsumption: '3.7L/100km'
    }
  },
  {
    id: 'citroen-c-elysee',
    brand: 'Citroën',
    model: 'C-Elysée',
    year: 2023,
    category: 'Sedan',
    fuel: 'Diesel',
    transmission: 'Manual',
    seats: 5,
    ac: true,
    pricePerDay: 270,
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800'
    ],
    features: [
      'Generous trunk size (506L)',
      'Touchscreen Media Navigation',
      'Speed limiter & Cruise control',
      'Bluetooth Hands-free',
      'Reinforced body structure',
      'Excellent climate A/C'
    ],
    rating: 4.6,
    reviewsCount: 14,
    description: 'The Citroën C-Elysée is a spacious, robust family sedan designed to deliver utmost passenger comfort. Ideal for long highway drives across Morocco with heavy luggage.',
    specs: {
      engine: '1.6 BlueHDi 100 hp',
      acceleration: '10.8s',
      baggage: '3 Large Bags',
      fuelConsumption: '4.3L/100km'
    }
  },
  {
    id: 'volkswagen-golf-8',
    brand: 'Volkswagen',
    model: 'Golf 8 R-Line',
    year: 2024,
    category: 'Economy',
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: 5,
    ac: true,
    pricePerDay: 450,
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800'
    ],
    features: [
      'Digital Cockpit Pro',
      'DSG Automatic gearbox',
      'Ambient lighting (30 colors)',
      'Harman Kardon sound system',
      'Wireless charging & Carplay',
      'Matrix LED headlights'
    ],
    rating: 4.9,
    reviewsCount: 42,
    description: 'Experience German precision at its best with the Volkswagen Golf 8 R-Line. It offers an dynamic, high-tech driving experience with the highly regarded DSG automatic transmission and a striking interior.',
    specs: {
      engine: '2.0 TDI 150 hp',
      acceleration: '8.4s',
      baggage: '2 Medium Bags',
      fuelConsumption: '4.5L/100km'
    }
  },
  {
    id: 'hyundai-tucson',
    brand: 'Hyundai',
    model: 'Tucson Premium',
    year: 2024,
    category: 'SUV',
    fuel: 'Hybrid',
    transmission: 'Automatic',
    seats: 5,
    ac: true,
    pricePerDay: 550,
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800'
    ],
    features: [
      'Panoramic sunroof',
      'Heated and ventilated seats',
      '360-degree surround camera',
      'Smart power tailgate',
      'Hybrid power efficiency',
      'Premium leather interior'
    ],
    rating: 4.8,
    reviewsCount: 37,
    description: 'The Hyundai Tucson Premium Hybrid delivers cutting-edge design and eco-friendly performance. This futuristic SUV provides superior legroom, a robust engine, and premium luxury for active families.',
    specs: {
      engine: '1.6 T-GDI Hybrid 230 hp',
      acceleration: '8.0s',
      baggage: '4 Large Bags',
      fuelConsumption: '5.6L/100km'
    }
  },
  {
    id: 'kia-sportage',
    brand: 'Kia',
    model: 'Sportage GT-Line',
    year: 2024,
    category: 'SUV',
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: 5,
    ac: true,
    pricePerDay: 530,
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800'
    ],
    features: [
      'Dual 12.3-inch curved screens',
      'Harman Kardon sound',
      'Smart adaptive cruise control',
      'Full black leather GT interior',
      'Keyless Entry & Push-to-Start',
      'Blind-spot view monitor'
    ],
    rating: 4.8,
    reviewsCount: 29,
    description: 'The Kia Sportage GT-Line defines contemporary adventure with its dramatic exterior design, cutting-edge dual screen dashboard, and highly capable diesel drivetrain.',
    specs: {
      engine: '1.6 CRDi 136 hp',
      acceleration: '11.4s',
      baggage: '4 Large Bags',
      fuelConsumption: '5.2L/100km'
    }
  },
  {
    id: 'toyota-corolla',
    brand: 'Toyota',
    model: 'Corolla Sedan Hybrid',
    year: 2024,
    category: 'Sedan',
    fuel: 'Hybrid',
    transmission: 'Automatic',
    seats: 5,
    ac: true,
    pricePerDay: 400,
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1621007947382-cc34aa8668c2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800'
    ],
    features: [
      'Ultra-quiet EV driving mode',
      'Toyota Safety Sense 3.0',
      'Excellent fuel economy',
      'Smart entry and start system',
      'Wireless charging pad',
      'Reverse guide camera'
    ],
    rating: 4.7,
    reviewsCount: 19,
    description: 'World-renowned for unmatched reliability and quiet comfort, the Toyota Corolla Hybrid is the ultimate sedan for long trips. Silent in heavy traffic and extremely efficient on fuel.',
    specs: {
      engine: '1.8L Hybrid 140 hp',
      acceleration: '9.2s',
      baggage: '3 Large Bags',
      fuelConsumption: '4.1L/100km'
    }
  },
  {
    id: 'mercedes-c-class',
    brand: 'Mercedes-Benz',
    model: 'C-Class AMG Line',
    year: 2024,
    category: 'Luxury',
    fuel: 'Hybrid',
    transmission: 'Automatic',
    seats: 5,
    ac: true,
    pricePerDay: 1100,
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&q=80&w=800'
    ],
    features: [
      'AMG premium sports body kit',
      'Burmester Surround Sound system',
      '11.9-inch central touchscreen',
      'MBUX voice control with AI',
      'Digital Light headlamps',
      'Nappa leather active seats'
    ],
    rating: 5.0,
    reviewsCount: 52,
    description: 'Enter the world of absolute luxury with the Mercedes-Benz C-Class AMG Line. Featuring first-class technology, bespoke leather seats, and a silent hybrid powertrain to elevate your journey in ultimate style.',
    specs: {
      engine: '2.0L Hybrid 204 hp',
      acceleration: '7.3s',
      baggage: '3 Large Bags',
      fuelConsumption: '6.2L/100km'
    }
  },
  {
    id: 'bmw-3-series',
    brand: 'BMW',
    model: '3 Series M Sport',
    year: 2024,
    category: 'Luxury',
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: 5,
    ac: true,
    pricePerDay: 1050,
    availability: true,
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800'
    ],
    features: [
      'M Sport aerodynamics package',
      'BMW Curved Display screen',
      'Steptronic Sport Transmission',
      'Variable sports steering',
      'Park Assist Active pilot',
      'M leather steering wheel'
    ],
    rating: 4.9,
    reviewsCount: 45,
    description: 'The definitive executive sports sedan. The BMW 3 Series M Sport offers razor-sharp handling, state-of-the-art curve displays, and a roaring mild-hybrid diesel engine with massive torque.',
    specs: {
      engine: '2.0L M Mild-Hybrid 190 hp',
      acceleration: '6.9s',
      baggage: '3 Large Bags',
      fuelConsumption: '4.8L/100km'
    }
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'United Kingdom',
    rating: 5,
    comment: 'The Renault Clio 5 we rented was brand new and spotless. Booking via WhatsApp was incredibly convenient—the team responded within 2 minutes and brought the car directly to Marrakesh Airport!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    name: 'Karim Bensalah',
    location: 'Casablanca, Morocco',
    rating: 5,
    comment: 'Excellente agence! J\'ai loué le Mercedes C-Class pour un déplacement d\'affaires. Véhicule impeccable, service professionnel et rapide par WhatsApp. Je recommande fortement.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '3',
    name: 'Jean-Pierre Laurent',
    location: 'France',
    rating: 5,
    comment: 'Location d\'un Dacia Sandero Stepway pour 10 jours à Agadir. Service irréprochable, voiture très propre et économique. Le contact WhatsApp à tout moment est d\'une grande aide!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: '1',
    question: 'How do I book a car?',
    answer: 'Simply choose your favorite car, specify your desired pickup and return dates on the details page, and click the "Reserve on WhatsApp" button. A pre-filled WhatsApp message will open, and our 24/7 client team will immediately confirm the availability and finalize your booking.'
  },
  {
    id: '2',
    question: 'What documents are required to rent?',
    answer: 'You will need a valid driver\'s license (held for at least 2 years), an identity card or passport, and to be at least 21 years old. These can be sent securely through WhatsApp.'
  },
  {
    id: '3',
    question: 'Is airport pickup and delivery free?',
    answer: 'Yes! We deliver and collect the rented vehicles directly at the airport terminal (Casablanca, Marrakech, Agadir, Tangier, Rabat) or your hotel of choice completely free of charge.'
  },
  {
    id: '4',
    question: 'How does payment and deposit work?',
    answer: 'Payment is settled in cash (MAD, EUR, or USD) or by credit card upon delivery of the vehicle. A standard deposit is blocked via pre-authorization on your credit card and released immediately when the car is returned.'
  },
  {
    id: '5',
    question: 'Are insurance and roadside assistance included?',
    answer: 'All our cars come with comprehensive civil responsibility insurance and free 24/7 roadside assistance across Morocco. Optional premium CDW (Collision Damage Waiver) zero-deductible insurance can be added on request.'
  }
];
