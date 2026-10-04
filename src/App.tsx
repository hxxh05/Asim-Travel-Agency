import React, { useState } from 'react';
import { NavigationTab, FlightOption, VisaProduct } from './types/travel';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { FlightsView } from './views/FlightsView';
import { UmrahView } from './views/UmrahView';
import { VisaView } from './views/VisaView';
import { ToursView } from './views/ToursView';
import { ContactView } from './views/ContactView';
import { BookingConsultationModal } from './components/BookingConsultationModal';
import { FlightBookingModal } from './components/FlightBookingModal';
import { VisaApplicationModal } from './components/VisaApplicationModal';
import { BookingLookupModal } from './components/BookingLookupModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [currency, setCurrency] = useState<'USD' | 'KES'>('USD');

  // Modal States
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isLookupModalOpen, setIsLookupModalOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState<FlightOption | null>(null);
  const [selectedVisa, setSelectedVisa] = useState<VisaProduct | null>(null);

  // Search parameters for flight view
  const [flightOriginFilter, setFlightOriginFilter] = useState('ALL');
  const [flightDestFilter, setFlightDestFilter] = useState('ALL');

  const handleHeroFlightSearch = (params: {
    origin: string;
    destination: string;
    date: string;
    travelers: string;
  }) => {
    setFlightOriginFilter(params.origin);
    setFlightDestFilter(params.destination);
    setActiveTab('flights');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (tab: NavigationTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col font-sans">
      {/* 1. Global Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenConsultation={() => setIsConsultationModalOpen(true)}
        onOpenLookup={() => setIsLookupModalOpen(true)}
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* 2. Main Content Body (Offset for fixed 120px top navbar) */}
      <main className="flex-1 w-full pt-[120px]">
        {activeTab === 'home' && (
          <HomeView
            onSearchFlights={handleHeroFlightSearch}
            onNavigate={handleNavigate}
            onSelectFlight={(flight) => setSelectedFlight(flight)}
            onSelectVisa={(visa) => setSelectedVisa(visa)}
            onSelectUmrah={() => handleNavigate('umrah')}
            currency={currency}
          />
        )}

        {activeTab === 'flights' && (
          <FlightsView
            initialOrigin={flightOriginFilter}
            initialDestination={flightDestFilter}
            onBookFlight={(flight) => setSelectedFlight(flight)}
            currency={currency}
          />
        )}

        {activeTab === 'umrah' && (
          <UmrahView
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
            currency={currency}
          />
        )}

        {activeTab === 'visas' && (
          <VisaView
            onApplyVisa={(visa) => setSelectedVisa(visa)}
            currency={currency}
          />
        )}

        {activeTab === 'safaris' && (
          <ToursView
            onOpenConsultation={() => setIsConsultationModalOpen(true)}
            currency={currency}
          />
        )}

        {activeTab === 'contact' && <ContactView />}
      </main>

      {/* 3. Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 4. Floating WhatsApp Emergency Dispatch Button */}
      <aside aria-label="Customer support channels">
        <a
          href="https://wa.me/254795227757?text=Asalaam%20Alaykum%20Asim%20Travel.%20I%20am%20inquiring%20about%20a%20ticket/visa"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-[#25d366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 transition-all group"
          title="Direct WhatsApp Ticketing Desk"
        >
          <span className="material-symbols-outlined text-[26px]">chat</span>
          <span className="hidden sm:inline-block pr-1 font-bold text-[13px] whitespace-nowrap">
            WhatsApp Desk
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping absolute top-2 right-2" />
        </a>
      </aside>

      {/* 5. Modals */}
      <BookingConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />

      <FlightBookingModal
        flight={selectedFlight}
        isOpen={!!selectedFlight}
        onClose={() => setSelectedFlight(null)}
        currency={currency}
      />

      <VisaApplicationModal
        visa={selectedVisa}
        isOpen={!!selectedVisa}
        onClose={() => setSelectedVisa(null)}
        currency={currency}
      />

      <BookingLookupModal
        isOpen={isLookupModalOpen}
        onClose={() => setIsLookupModalOpen(false)}
      />
    </div>
  );
}
