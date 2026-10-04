import React, { useState } from 'react';
import { NavigationTab } from '../types/travel';

interface HeroSectionProps {
  onSearchFlights: (params: { origin: string; destination: string; date: string; travelers: string }) => void;
  onNavigate: (tab: NavigationTab) => void;
  currency: 'USD' | 'KES';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearchFlights,
  onNavigate,
}) => {
  const [activeSearchTab, setActiveSearchTab] = useState<'flights' | 'umrah' | 'visa' | 'hotels'>('flights');

  // Flight form state
  const [flightOrigin, setFlightOrigin] = useState('NBO');
  const [flightDestination, setFlightDestination] = useState('DXB');
  const [flightDate, setFlightDate] = useState('2025-04-15');
  const [flightTravelers, setFlightTravelers] = useState('1 Adult, Economy');

  // Umrah form state
  const [umrahProgram, setUmrahProgram] = useState('Fursad Cumro (Makkah & Madinah 14 Days)');
  const [umrahAirport, setUmrahAirport] = useState('Nairobi JKIA (Kenya)');
  const [umrahMonth, setUmrahMonth] = useState('April / Shawwal 2025');

  // Visa form state
  const [visaType, setVisaType] = useState('Dubai 30-Day Express Tourist Visa');
  const [visaNationality, setVisaNationality] = useState('Somali Passport Holder');

  // Hotels form state
  const [hotelDestination, setHotelDestination] = useState('Dubai Marina & Downtown');
  const [hotelDuration, setHotelDuration] = useState('5 Nights');

  const handleFlightSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSearchFlights({
      origin: flightOrigin,
      destination: flightDestination,
      date: flightDate,
      travelers: flightTravelers,
    });
  };

  const handleRoutePillClick = (origin: string, destination: string) => {
    setFlightOrigin(origin);
    setFlightDestination(destination);
    onSearchFlights({
      origin,
      destination,
      date: flightDate,
      travelers: flightTravelers,
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#dce9ff] via-[#eff4ff] to-[#f8f9ff] pt-6 pb-20 lg:pb-28">
      {/* Background Atmospheric Radiance */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#cce5ff] opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#5bb8fe] opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Hub Badge & Trust Guarantee */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-xs">
            <span className="material-symbols-outlined text-[#006398] text-[20px]">flight_takeoff</span>
            <span className="text-[12px] text-[#0b1c30] uppercase tracking-wider font-bold">
              Nairobi JKIA • Mogadishu Aden Adde • Hargeisa • Dubai
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#44474d] text-[12px]">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#cce5ff] text-[#006398]">
              <span className="material-symbols-outlined text-[14px]">shield</span>
            </span>
            <span className="font-semibold text-[#0b1c30]">IATA Authorized • 100% Visa Assistance Guarantee</span>
          </div>
        </div>

        {/* Main Headline & Aviation Montage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-block bg-[#006398] px-3.5 py-1 rounded-full text-white text-[12px] font-bold uppercase tracking-widest shadow-xs">
              Asim Travel Agency
            </div>

            <h1 className="font-extrabold text-[36px] sm:text-[48px] lg:text-[56px] text-[#0b1c30] tracking-tight uppercase leading-none">
              Ku Rumee <br />
              <span className="text-[#006398] drop-shadow-[0_2px_12px_rgba(0,99,152,0.25)]">
                Riyadaada
              </span>
            </h1>

            <p className="text-[18px] lg:text-[22px] text-[#44474d] font-medium leading-snug">
              Explore The World With Confidence •{' '}
              <span className="text-[#006398] font-bold">Adeeg Hufan Iyo Qiima Ku Raali Geliya</span>
            </p>

            <p className="text-[15px] lg:text-[16px] text-[#44474d] max-w-2xl leading-relaxed">
              East Africa's premier pilgrimage logistics, dual-hub flight desk, and expedited visa service. Bridging Nairobi, Mogadishu, the Holy Sanctuary in Saudi Arabia, and the Arabian Gulf with bespoke care.
            </p>
          </div>

          {/* Aviation Collage Hero Vignette */}
          <div className="lg:col-span-4 relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-[#0d1c32] p-1.5 border border-[#5bb8fe]/30">
              <img
                className="w-full h-full object-cover rounded-[22px]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVB8dVLMyIc1FZQYcTFLhEi7q9SdDB5Y3Fq39bLaOTW4LIiaILaECpmn4G2r3nifYQ233_B4tQxYxb4VTWVNaKQTea1bImXHnhLpuLtFQD_LsSg_8ESgMIedu2ZqIvZelEq96RuXJqKDPztfu_ZQ8CEz-KtZiUYzD4hglnJjwTXqCrH7yYT4FEpyOzbWk0Xsj2NcuxUFyDuMy-hBOAdlwvv8chdD7A2-CXYRSA1yRkSyPigMGIREP8"
                alt="Modern commercial airliner soaring in azure sky over Kaaba and Burj Al Arab"
                loading="eager"
              />
              <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-md p-3 rounded-2xl flex items-center justify-between shadow-md">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#006398] text-[24px]">verified</span>
                  <div>
                    <p className="text-[13px] text-[#0b1c30] leading-tight font-extrabold">10,000+ Journeys Booked</p>
                    <p className="text-[11px] text-[#44474d]">Kenya • Somalia • Gulf • Global</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-[#dce9ff] text-[#006398] rounded-lg text-[11px] font-bold">
                  Direct Desk
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Multi-Tab Travel Booking Console */}
        <div className="w-full bg-white rounded-3xl shadow-xl p-5 sm:p-6 lg:p-8 border border-[#dce9ff]">
          {/* Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-6 border-b border-[#dce9ff]">
            <button
              onClick={() => setActiveSearchTab('flights')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeSearchTab === 'flights'
                  ? 'bg-[#0d1c32] text-white shadow-md'
                  : 'bg-[#eff4ff] text-[#44474d] hover:bg-[#e5eeff] hover:text-[#0b1c30]'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">flight</span>
              <span>Flights</span>
            </button>

            <button
              onClick={() => setActiveSearchTab('umrah')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeSearchTab === 'umrah'
                  ? 'bg-[#0d1c32] text-white shadow-md'
                  : 'bg-[#eff4ff] text-[#44474d] hover:bg-[#e5eeff] hover:text-[#0b1c30]'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px] text-[#ffb77d]">mosque</span>
              <span>Umrah &amp; Hajj</span>
              <span className="hidden sm:inline-block bg-[#ffdcc3] text-[#2f1500] text-[10px] px-2 py-0.5 rounded-full font-bold">
                2025 Open
              </span>
            </button>

            <button
              onClick={() => setActiveSearchTab('visa')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeSearchTab === 'visa'
                  ? 'bg-[#0d1c32] text-white shadow-md'
                  : 'bg-[#eff4ff] text-[#44474d] hover:bg-[#e5eeff] hover:text-[#0b1c30]'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px] text-[#006398]">approval</span>
              <span>Visa Services (Dubai &amp; Kenya)</span>
            </button>

            <button
              onClick={() => setActiveSearchTab('hotels')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeSearchTab === 'hotels'
                  ? 'bg-[#0d1c32] text-white shadow-md'
                  : 'bg-[#eff4ff] text-[#44474d] hover:bg-[#e5eeff] hover:text-[#0b1c30]'
              }`}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">hotel</span>
              <span>Hotels &amp; Safaris</span>
            </button>
          </div>

          {/* TAB 1: FLIGHTS SEARCH */}
          {activeSearchTab === 'flights' && (
            <div>
              <form onSubmit={handleFlightSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                {/* From */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                    From (Origin)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3.5 material-symbols-outlined text-[#75777e] text-[20px]">
                      flight_takeoff
                    </span>
                    <select
                      value={flightOrigin}
                      onChange={(e) => setFlightOrigin(e.target.value)}
                      className="w-full h-12 pl-11 pr-8 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[14px] font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006398] transition-all appearance-none cursor-pointer"
                    >
                      <option value="NBO">Nairobi, Kenya (NBO - JKIA)</option>
                      <option value="MGQ">Mogadishu, Somalia (MGQ - Aden Adde)</option>
                      <option value="HGA">Hargeisa, Somaliland (HGA)</option>
                      <option value="DXB">Dubai, UAE (DXB)</option>
                      <option value="JED">Jeddah, KSA (JED)</option>
                      <option value="IST">Istanbul, Turkey (IST)</option>
                    </select>
                    <span className="absolute right-3.5 top-3.5 material-symbols-outlined text-[#75777e] pointer-events-none text-[18px]">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* To */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                    To (Destination)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3.5 material-symbols-outlined text-[#75777e] text-[20px]">
                      flight_land
                    </span>
                    <select
                      value={flightDestination}
                      onChange={(e) => setFlightDestination(e.target.value)}
                      className="w-full h-12 pl-11 pr-8 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[14px] font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006398] transition-all appearance-none cursor-pointer"
                    >
                      <option value="DXB">Dubai, UAE (DXB)</option>
                      <option value="JED">Jeddah / Makkah, KSA (JED)</option>
                      <option value="MED">Madinah, KSA (MED)</option>
                      <option value="MGQ">Mogadishu, Somalia (MGQ)</option>
                      <option value="NBO">Nairobi, Kenya (NBO)</option>
                      <option value="DOH">Doha, Qatar (DOH)</option>
                      <option value="CAN">Guangzhou, China (CAN)</option>
                      <option value="IST">Istanbul, Turkey (IST)</option>
                      <option value="LHR">London Heathrow, UK (LHR)</option>
                    </select>
                    <span className="absolute right-3.5 top-3.5 material-symbols-outlined text-[#75777e] pointer-events-none text-[18px]">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Departure Date */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                    Departure Date
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3.5 material-symbols-outlined text-[#75777e] text-[20px]">
                      calendar_today
                    </span>
                    <input
                      type="date"
                      value={flightDate}
                      onChange={(e) => setFlightDate(e.target.value)}
                      className="w-full h-12 pl-11 pr-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[14px] font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006398] transition-all cursor-pointer"
                    />
                  </div>
                </div>

                {/* Travelers & Class */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                    Travelers &amp; Class
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3.5 material-symbols-outlined text-[#75777e] text-[20px]">
                      group
                    </span>
                    <select
                      value={flightTravelers}
                      onChange={(e) => setFlightTravelers(e.target.value)}
                      className="w-full h-12 pl-11 pr-8 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[14px] font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006398] transition-all appearance-none cursor-pointer"
                    >
                      <option>1 Adult, Economy</option>
                      <option>2 Adults, Economy</option>
                      <option>Family (2 Adults, 2 Kids)</option>
                      <option>1 Adult, Business Class</option>
                      <option>Group Booking (10+)</option>
                    </select>
                    <span className="absolute right-3.5 top-3.5 material-symbols-outlined text-[#75777e] pointer-events-none text-[18px]">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    className="w-full h-12 bg-[#006398] text-white rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 hover:bg-[#5bb8fe] hover:text-[#00476e] shadow-md transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">search</span>
                    <span>Find Flights &amp; Rates</span>
                  </button>
                </div>
              </form>

              {/* Direct Route Shortcuts */}
              <div className="flex items-center gap-2 flex-wrap pt-4 text-[12px] text-[#44474d]">
                <span className="font-bold text-[#0b1c30]">Popular Direct Routes:</span>
                <button
                  onClick={() => handleRoutePillClick('NBO', 'MGQ')}
                  className="px-2.5 py-1 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] rounded-lg transition-colors font-medium cursor-pointer"
                  type="button"
                >
                  NBO ↔ MGQ ($280+)
                </button>
                <button
                  onClick={() => handleRoutePillClick('NBO', 'DXB')}
                  className="px-2.5 py-1 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] rounded-lg transition-colors font-medium cursor-pointer"
                  type="button"
                >
                  NBO → DXB ($395+)
                </button>
                <button
                  onClick={() => handleRoutePillClick('MGQ', 'JED')}
                  className="px-2.5 py-1 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] rounded-lg transition-colors font-medium cursor-pointer"
                  type="button"
                >
                  MGQ → JED (Umrah Direct)
                </button>
                <button
                  onClick={() => handleRoutePillClick('NBO', 'IST')}
                  className="px-2.5 py-1 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] rounded-lg transition-colors font-medium cursor-pointer"
                  type="button"
                >
                  NBO → IST (Turkish)
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: UMRAH & HAJJ */}
          {activeSearchTab === 'umrah' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Pilgrimage Program
                </label>
                <select
                  value={umrahProgram}
                  onChange={(e) => setUmrahProgram(e.target.value)}
                  className="w-full h-12 px-4 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-[#006398]"
                >
                  <option>Fursad Cumro (Makkah &amp; Madinah 14 Days)</option>
                  <option>VIP Ramadan Last 10 Days Special</option>
                  <option>Express 10-Day Umrah Package</option>
                  <option>Hajj 2025 Pre-Registration</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Departure Airport
                </label>
                <select
                  value={umrahAirport}
                  onChange={(e) => setUmrahAirport(e.target.value)}
                  className="w-full h-12 px-4 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-[#006398]"
                >
                  <option>Nairobi JKIA (Kenya)</option>
                  <option>Mogadishu Aden Adde (Somalia)</option>
                  <option>Hargeisa Egal (Somaliland)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Preferred Month
                </label>
                <select
                  value={umrahMonth}
                  onChange={(e) => setUmrahMonth(e.target.value)}
                  className="w-full h-12 px-4 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-[#006398]"
                >
                  <option>April / Shawwal 2025</option>
                  <option>May / Dhul Qadah 2025</option>
                  <option>June 2025</option>
                  <option>Year-Round Flexi</option>
                </select>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => onNavigate('umrah')}
                  className="flex-1 h-12 bg-[#c76c00] hover:bg-[#e07b00] text-white rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">mosque</span>
                  <span>Explore Packages</span>
                </button>
                <a
                  className="h-12 px-4 bg-[#25d366] text-white rounded-xl text-[14px] font-bold flex items-center justify-center hover:opacity-90 transition-all shadow-md"
                  href={`https://wa.me/254795227757?text=Asalaam%20Alaykum,%20I%20am%20inquiring%20about%20the%20${encodeURIComponent(umrahProgram)}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="WhatsApp Inquiry"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                </a>
              </div>
            </div>
          )}

          {/* TAB 3: VISA SERVICES */}
          {activeSearchTab === 'visa' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Destination Visa Type
                </label>
                <select
                  value={visaType}
                  onChange={(e) => setVisaType(e.target.value)}
                  className="w-full h-12 px-4 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-[#006398]"
                >
                  <option>Dubai 30-Day Express Tourist Visa</option>
                  <option>Dubai 60-Day Multiple Entry Visa</option>
                  <option>Kenya Electronic Travel Auth (eTA)</option>
                  <option>Turkey E-Visa &amp; Sticker Assistance</option>
                  <option>Saudi Umrah / Tourist Visa</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Passport Holder Nationality
                </label>
                <select
                  value={visaNationality}
                  onChange={(e) => setVisaNationality(e.target.value)}
                  className="w-full h-12 px-4 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-[#006398]"
                >
                  <option>Somali Passport Holder</option>
                  <option>Kenyan Passport Holder</option>
                  <option>Ethiopian / Djibouti</option>
                  <option>Other Foreign Nationals</option>
                </select>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => onNavigate('visas')}
                  className="flex-1 h-12 bg-[#006398] text-white rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 hover:bg-[#5bb8fe] hover:text-[#00476e] transition-all shadow-md cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                  <span>View Visa Desk</span>
                </button>
                <a
                  className="h-12 px-4 bg-[#25d366] text-white rounded-xl flex items-center justify-center hover:opacity-90 transition-all shadow-md"
                  href={`https://wa.me/254795227757?text=Hello%20Asim%20Travel,%20I%20need%20urgent%20visa%20processing%20for%20${encodeURIComponent(visaType)}%20(${encodeURIComponent(visaNationality)})`}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="WhatsApp Visa Desk"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                </a>
              </div>
            </div>
          )}

          {/* TAB 4: HOTELS & SAFARIS */}
          {activeSearchTab === 'hotels' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Destination / Safari
                </label>
                <input
                  type="text"
                  value={hotelDestination}
                  onChange={(e) => setHotelDestination(e.target.value)}
                  className="w-full h-12 px-4 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-[#006398]"
                  placeholder="e.g. Dubai Marina, Maasai Mara, Zanzibar"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Duration / Stay
                </label>
                <input
                  type="text"
                  value={hotelDuration}
                  onChange={(e) => setHotelDuration(e.target.value)}
                  className="w-full h-12 px-4 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[14px] font-medium focus:outline-none focus:ring-2 focus:ring-[#006398]"
                  placeholder="e.g. 3 - 7 Nights"
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => onNavigate('safaris')}
                  className="flex-1 h-12 bg-[#0d1c32] text-white rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 hover:bg-[#006398] transition-all shadow-md cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">travel_explore</span>
                  <span>Browse Safaris &amp; Tours</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
