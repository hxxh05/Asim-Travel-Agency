import React, { useState } from 'react';
import { NavigationTab } from '../types/travel';

interface NavbarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  onOpenConsultation: () => void;
  onOpenLookup: () => void;
  currency: 'USD' | 'KES';
  setCurrency: (c: 'USD' | 'KES') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenConsultation,
  onOpenLookup,
  currency,
  setCurrency,
}) => {
  const [visaDropdownOpen, setVisaDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (tab: NavigationTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setVisaDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#ffffff]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all">
      {/* Top Announcement & Telephony Strip */}
      <div className="bg-[#0d1c32] text-white text-[11px] font-bold tracking-wider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-10 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5 text-white/90">
              <span className="material-symbols-outlined text-[15px] text-[#5bb8fe]">location_on</span>
              <span className="tracking-wide">Nairobi South C &amp; Mogadishu</span>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-[#5bb8fe]">call</span>
                <a className="text-white hover:text-[#cce5ff] transition-colors" href="tel:+254795227757">
                  +254 795 227 757
                </a>
              </div>
              <span className="text-[#75777e]">|</span>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-[#5bb8fe]">call</span>
                <a className="text-white hover:text-[#cce5ff] transition-colors" href="tel:+252615098954">
                  +252 615 098 954
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Currency toggle */}
            <button
              onClick={() => setCurrency(currency === 'USD' ? 'KES' : 'USD')}
              className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-[10px] tracking-normal transition-colors"
              title="Toggle Currency (USD / KES)"
              type="button"
            >
              Currency: <span className="text-[#5bb8fe] font-bold">{currency}</span>
            </button>

            {/* PNR Lookup button */}
            <button
              onClick={onOpenLookup}
              className="hidden sm:flex items-center gap-1 text-white/80 hover:text-white transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[14px]">confirmation_number</span>
              <span>Find PNR</span>
            </button>

            <div className="hidden sm:flex items-center gap-1 text-[#76849f]">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              <span>IATA &amp; KATA Accredited</span>
            </div>

            <a
              className="inline-flex items-center gap-1.5 bg-[#006398] px-3 py-1 rounded-full text-white text-[11px] font-bold hover:bg-[#5bb8fe] hover:text-[#00476e] transition-all shadow-sm"
              href="https://wa.me/254795227757"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[15px]">chat</span>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Wordmark */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3.5 flex-shrink-0 text-left cursor-pointer group"
          type="button"
        >
          <div className="w-11 h-11 rounded-xl bg-[#0d1c32] flex items-center justify-center shadow-[0_2px_10px_rgba(13,28,50,0.15)] group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[#5bb8fe] text-[24px]">flight_takeoff</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-[18px] tracking-tight uppercase text-[#0b1c30] leading-tight">
              Asim Travel
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#006398]">
              Aviation &amp; Pilgrimage
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5 text-[14px] font-medium text-[#44474d]">
          <button
            onClick={() => handleNav('home')}
            className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'home'
                ? 'bg-[#e5eeff] text-[#0b1c30] font-semibold'
                : 'hover:text-[#0b1c30] hover:bg-[#eff4ff]'
            }`}
            type="button"
          >
            Home
          </button>

          <button
            onClick={() => handleNav('flights')}
            className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'flights'
                ? 'bg-[#e5eeff] text-[#0b1c30] font-semibold'
                : 'hover:text-[#0b1c30] hover:bg-[#eff4ff]'
            }`}
            type="button"
          >
            Flights
          </button>

          <button
            onClick={() => handleNav('umrah')}
            className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
              activeTab === 'umrah'
                ? 'bg-[#e5eeff] text-[#0b1c30] font-semibold'
                : 'hover:text-[#0b1c30] hover:bg-[#eff4ff]'
            }`}
            type="button"
          >
            <span>Umrah &amp; Hajj</span>
            <span className="bg-[#ffdcc3] text-[#2f1500] text-[10px] font-bold px-1.5 py-0.2 rounded-full">2025</span>
          </button>

          {/* Visa Services with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setVisaDropdownOpen(true)}
            onMouseLeave={() => setVisaDropdownOpen(false)}
          >
            <button
              onClick={() => handleNav('visas')}
              className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1 ${
                activeTab === 'visas'
                  ? 'bg-[#e5eeff] text-[#0b1c30] font-semibold'
                  : 'hover:text-[#0b1c30] hover:bg-[#eff4ff]'
              }`}
              type="button"
            >
              <span>Visa Services</span>
              <span className="material-symbols-outlined text-[16px] text-[#75777e]">keyboard_arrow_down</span>
            </button>

            {visaDropdownOpen && (
              <div className="absolute left-0 top-full w-52 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-white rounded-xl shadow-[0_12px_32px_-4px_rgba(10,25,47,0.12)] p-2 border border-[#eff4ff] flex flex-col gap-1">
                  <button
                    onClick={() => handleNav('visas')}
                    className="text-left px-3 py-2 rounded-lg text-[13px] text-[#44474d] hover:bg-[#eff4ff] hover:text-[#0b1c30] transition-colors"
                    type="button"
                  >
                    Kenya eTA Concierge
                  </button>
                  <button
                    onClick={() => handleNav('visas')}
                    className="text-left px-3 py-2 rounded-lg text-[13px] text-[#44474d] hover:bg-[#eff4ff] hover:text-[#0b1c30] transition-colors"
                    type="button"
                  >
                    Dubai Express Transit
                  </button>
                  <button
                    onClick={() => handleNav('visas')}
                    className="text-left px-3 py-2 rounded-lg text-[13px] text-[#44474d] hover:bg-[#eff4ff] hover:text-[#0b1c30] transition-colors"
                    type="button"
                  >
                    Saudi Umrah &amp; Tourist eVisa
                  </button>
                  <button
                    onClick={() => handleNav('visas')}
                    className="text-left px-3 py-2 rounded-lg text-[13px] text-[#44474d] hover:bg-[#eff4ff] hover:text-[#0b1c30] transition-colors"
                    type="button"
                  >
                    Turkey &amp; Schengen Advisory
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav('safaris')}
            className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'safaris'
                ? 'bg-[#e5eeff] text-[#0b1c30] font-semibold'
                : 'hover:text-[#0b1c30] hover:bg-[#eff4ff]'
            }`}
            type="button"
          >
            Tour Packages
          </button>

          <button
            onClick={() => handleNav('contact')}
            className={`px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-[#e5eeff] text-[#0b1c30] font-semibold'
                : 'hover:text-[#0b1c30] hover:bg-[#eff4ff]'
            }`}
            type="button"
          >
            About Us / Contact
          </button>
        </nav>

        {/* Action Controls & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 bg-[#0d1c32] text-white px-4 py-2.5 rounded-lg text-[15px] font-semibold hover:bg-[#006398] shadow-[0_4px_16px_rgba(0,99,152,0.15)] transition-all cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            <span>Book Consultation</span>
          </button>

          <button
            onClick={onOpenLookup}
            className="w-9 h-9 rounded-full bg-[#0b1c30] hover:bg-[#006398] text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Account & Ticket Lookup"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#0b1c30] hover:bg-[#dce9ff] transition-colors"
            type="button"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#eff4ff] px-6 py-4 flex flex-col gap-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => handleNav('home')}
            className={`text-left px-3 py-2.5 rounded-lg text-[15px] font-medium ${
              activeTab === 'home' ? 'bg-[#e5eeff] text-[#0b1c30] font-bold' : 'text-[#44474d]'
            }`}
            type="button"
          >
            Home
          </button>
          <button
            onClick={() => handleNav('flights')}
            className={`text-left px-3 py-2.5 rounded-lg text-[15px] font-medium ${
              activeTab === 'flights' ? 'bg-[#e5eeff] text-[#0b1c30] font-bold' : 'text-[#44474d]'
            }`}
            type="button"
          >
            Flights
          </button>
          <button
            onClick={() => handleNav('umrah')}
            className={`text-left px-3 py-2.5 rounded-lg text-[15px] font-medium ${
              activeTab === 'umrah' ? 'bg-[#e5eeff] text-[#0b1c30] font-bold' : 'text-[#44474d]'
            }`}
            type="button"
          >
            Umrah &amp; Hajj Packages
          </button>
          <button
            onClick={() => handleNav('visas')}
            className={`text-left px-3 py-2.5 rounded-lg text-[15px] font-medium ${
              activeTab === 'visas' ? 'bg-[#e5eeff] text-[#0b1c30] font-bold' : 'text-[#44474d]'
            }`}
            type="button"
          >
            Visa Services (Dubai &amp; Kenya)
          </button>
          <button
            onClick={() => handleNav('safaris')}
            className={`text-left px-3 py-2.5 rounded-lg text-[15px] font-medium ${
              activeTab === 'safaris' ? 'bg-[#e5eeff] text-[#0b1c30] font-bold' : 'text-[#44474d]'
            }`}
            type="button"
          >
            Tour Packages &amp; Safaris
          </button>
          <button
            onClick={() => handleNav('contact')}
            className={`text-left px-3 py-2.5 rounded-lg text-[15px] font-medium ${
              activeTab === 'contact' ? 'bg-[#e5eeff] text-[#0b1c30] font-bold' : 'text-[#44474d]'
            }`}
            type="button"
          >
            About Us / Contact Hubs
          </button>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 bg-[#0d1c32] text-white rounded-xl font-bold text-center"
              type="button"
            >
              Book Consultation
            </button>
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <span>Emergency Desk:</span>
              <a href="tel:+254795227757" className="font-bold text-[#006398]">
                +254 795 227 757
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
