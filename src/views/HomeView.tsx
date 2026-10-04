import React from 'react';
import { NavigationTab, VisaProduct, FlightOption } from '../types/travel';
import { HeroSection } from '../components/HeroSection';
import { TrustStatsStrip } from '../components/TrustStatsStrip';
import { SignaturePackages } from '../components/SignaturePackages';
import { AirlinesTicker } from '../components/AirlinesTicker';
import { TrustBento } from '../components/TrustBento';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { InstantCtaBanner } from '../components/InstantCtaBanner';
import { VISA_PRODUCTS } from '../data/mockData';

interface HomeViewProps {
  onSearchFlights: (params: { origin: string; destination: string; date: string; travelers: string }) => void;
  onNavigate: (tab: NavigationTab) => void;
  onSelectFlight: (flight: FlightOption) => void;
  onSelectVisa: (visa: VisaProduct) => void;
  onSelectUmrah: () => void;
  currency: 'USD' | 'KES';
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSearchFlights,
  onNavigate,
  onSelectVisa,
  onSelectUmrah,
  currency,
}) => {
  const dubaiVisa = VISA_PRODUCTS.find((v) => v.id === 'visa-dxb-30') || VISA_PRODUCTS[0];
  const kenyaEta = VISA_PRODUCTS.find((v) => v.id === 'visa-kenya-eta') || VISA_PRODUCTS[2];

  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection
        onSearchFlights={onSearchFlights}
        onNavigate={onNavigate}
        currency={currency}
      />

      {/* 2. Trust Stats Strip */}
      <TrustStatsStrip />

      {/* 3. Signature Packages Grid */}
      <SignaturePackages
        onNavigate={onNavigate}
        onSelectUmrah={onSelectUmrah}
        onSelectDubaiVisa={() => onSelectVisa(dubaiVisa)}
        onSelectKenyaEta={() => onSelectVisa(kenyaEta)}
        currency={currency}
      />

      {/* 4. Airlines Ticker */}
      <AirlinesTicker />

      {/* 5. Trust & Dual Hub Bento */}
      <TrustBento />

      {/* 6. Testimonials Section */}
      <TestimonialsSection />

      {/* 7. Instant Call to Action Banner */}
      <InstantCtaBanner />
    </div>
  );
};
