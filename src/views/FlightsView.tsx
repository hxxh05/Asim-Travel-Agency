import React, { useState, useMemo } from 'react';
import { FlightOption } from '../types/travel';
import { FLIGHT_SCHEDULES } from '../data/mockData';

interface FlightsViewProps {
  initialOrigin?: string;
  initialDestination?: string;
  onBookFlight: (flight: FlightOption) => void;
  currency: 'USD' | 'KES';
}

export const FlightsView: React.FC<FlightsViewProps> = ({
  initialOrigin = 'ALL',
  initialDestination = 'ALL',
  onBookFlight,
  currency,
}) => {
  const [origin, setOrigin] = useState(initialOrigin);
  const [destination, setDestination] = useState(initialDestination);
  const [selectedAirline, setSelectedAirline] = useState('ALL');
  const [directOnly, setDirectOnly] = useState(false);
  const [cabinClass, setCabinClass] = useState<'ALL' | 'Economy' | 'Business'>('ALL');
  const [sortBy, setSortBy] = useState<'price' | 'duration' | 'departure'>('price');
  const [expandedFlightId, setExpandedFlightId] = useState<string | null>(null);

  const formatPrice = (usd: number) => {
    if (currency === 'KES') {
      return `KES ${(usd * 130).toLocaleString()}`;
    }
    return `$${usd.toLocaleString()}`;
  };

  const filteredFlights = useMemo(() => {
    return FLIGHT_SCHEDULES.filter((flight) => {
      if (origin !== 'ALL' && flight.fromCode !== origin) return false;
      if (destination !== 'ALL' && flight.toCode !== destination) return false;
      if (selectedAirline !== 'ALL' && flight.airline !== selectedAirline) return false;
      if (directOnly && flight.stops > 0) return false;
      if (cabinClass !== 'ALL' && flight.cabinClass !== cabinClass) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price') return a.priceUSD - b.priceUSD;
      if (sortBy === 'departure') return a.departureTime.localeCompare(b.departureTime);
      return a.duration.localeCompare(b.duration);
    });
  }, [origin, destination, selectedAirline, directOnly, cabinClass, sortBy]);

  return (
    <div className="w-full bg-[#f8f9ff] py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Header */}
        <div className="bg-[#0d1c32] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#006398] opacity-30 blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-2">
            <span className="inline-block px-3 py-1 bg-[#006398] text-white text-[11px] font-bold uppercase tracking-wider rounded-full">
              Global GDS Flight Desk
            </span>
            <h1 className="text-[32px] lg:text-[42px] font-extrabold tracking-tight uppercase leading-tight">
              Real-Time Flight Schedules &amp; Rates
            </h1>
            <p className="text-[14px] text-[#76849f] leading-relaxed">
              Book direct flights between Nairobi, Mogadishu, Dubai, Jeddah, and worldwide destinations. All tickets include guaranteed luggage allowance and human rebooking support.
            </p>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#dce9ff] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 items-end">
          {/* Origin */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
              From (Origin)
            </label>
            <select
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
            >
              <option value="ALL">All Origins</option>
              <option value="NBO">Nairobi (NBO)</option>
              <option value="MGQ">Mogadishu (MGQ)</option>
              <option value="HGA">Hargeisa (HGA)</option>
              <option value="DXB">Dubai (DXB)</option>
            </select>
          </div>

          {/* Destination */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
              To (Destination)
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
            >
              <option value="ALL">All Destinations</option>
              <option value="DXB">Dubai (DXB)</option>
              <option value="MGQ">Mogadishu (MGQ)</option>
              <option value="JED">Jeddah / Makkah (JED)</option>
              <option value="NBO">Nairobi (NBO)</option>
              <option value="IST">Istanbul (IST)</option>
            </select>
          </div>

          {/* Airline */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
              Carrier / Airline
            </label>
            <select
              value={selectedAirline}
              onChange={(e) => setSelectedAirline(e.target.value)}
              className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
            >
              <option value="ALL">All Airlines</option>
              <option value="Emirates">Emirates</option>
              <option value="Qatar Airways">Qatar Airways</option>
              <option value="flydubai">flydubai</option>
              <option value="Ethiopian Airlines">Ethiopian Airlines</option>
              <option value="Kenya Airways">Kenya Airways</option>
              <option value="Turkish Airlines">Turkish Airlines</option>
            </select>
          </div>

          {/* Class */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
              Cabin Class
            </label>
            <select
              value={cabinClass}
              onChange={(e) => setCabinClass(e.target.value as any)}
              className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
            >
              <option value="ALL">Any Class</option>
              <option value="Economy">Economy Class</option>
              <option value="Business">Business Class</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="space-y-1">
            <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
            >
              <option value="price">Lowest Price First</option>
              <option value="duration">Fastest Travel Time</option>
              <option value="departure">Earliest Departure</option>
            </select>
          </div>

          {/* Direct Checkbox */}
          <div className="h-11 flex items-center">
            <label className="flex items-center gap-2 text-[13px] font-bold text-[#0b1c30] cursor-pointer">
              <input
                type="checkbox"
                checked={directOnly}
                onChange={(e) => setDirectOnly(e.target.checked)}
                className="w-4 h-4 text-[#006398] rounded cursor-pointer"
              />
              <span>Direct Non-Stop Only</span>
            </label>
          </div>
        </div>

        {/* Results Count Banner */}
        <div className="flex items-center justify-between text-[13px] text-[#44474d] px-1">
          <p>
            Showing <strong className="text-[#0b1c30]">{filteredFlights.length}</strong> available flight options
          </p>
          {(origin !== 'ALL' || destination !== 'ALL' || selectedAirline !== 'ALL' || directOnly) && (
            <button
              onClick={() => {
                setOrigin('ALL');
                setDestination('ALL');
                setSelectedAirline('ALL');
                setDirectOnly(false);
                setCabinClass('ALL');
              }}
              className="text-[#006398] font-bold hover:underline cursor-pointer"
              type="button"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Flight Cards List */}
        <div className="space-y-4">
          {filteredFlights.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center space-y-4 border border-[#dce9ff]">
              <div className="w-16 h-16 rounded-full bg-[#eff4ff] text-[#006398] mx-auto flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">flight_takeoff</span>
              </div>
              <h3 className="text-[20px] font-bold text-[#0b1c30]">No matching flights found</h3>
              <p className="text-[14px] text-[#44474d] max-w-md mx-auto">
                Try broadening your origin, destination, or airline filters to view more departures.
              </p>
              <button
                onClick={() => {
                  setOrigin('ALL');
                  setDestination('ALL');
                  setSelectedAirline('ALL');
                  setDirectOnly(false);
                }}
                className="px-6 py-2.5 bg-[#006398] text-white font-bold rounded-xl text-[14px]"
                type="button"
              >
                Show All Schedules
              </button>
            </div>
          ) : (
            filteredFlights.map((flight) => {
              const isExpanded = expandedFlightId === flight.id;
              return (
                <div
                  key={flight.id}
                  className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow border border-[#dce9ff]"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Airline & Route Details */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                      {/* Airline logo info */}
                      <div className="sm:col-span-3 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#eff4ff] flex items-center justify-center font-black text-[#006398] text-[18px] border border-[#dce9ff]">
                          {flight.airlineCode}
                        </div>
                        <div>
                          <p className="font-extrabold text-[15px] text-[#0b1c30] leading-tight">
                            {flight.airline}
                          </p>
                          <p className="text-[12px] font-mono text-[#76849f]">{flight.flightNumber}</p>
                          <span className="inline-block mt-0.5 px-2 py-0.5 bg-[#dce9ff] text-[#006398] text-[10px] font-bold rounded">
                            {flight.cabinClass}
                          </span>
                        </div>
                      </div>

                      {/* Origin */}
                      <div className="sm:col-span-3 text-left">
                        <p className="text-[24px] font-extrabold text-[#0b1c30] leading-none">
                          {flight.departureTime}
                        </p>
                        <p className="text-[14px] font-bold text-[#0b1c30] mt-1">{flight.fromCode}</p>
                        <p className="text-[11px] text-[#76849f] truncate">{flight.fromAirport}</p>
                      </div>

                      {/* Duration & Stops graphic */}
                      <div className="sm:col-span-3 flex flex-col items-center">
                        <span className="text-[12px] font-bold text-[#006398]">{flight.duration}</span>
                        <div className="w-full flex items-center my-1.5">
                          <div className="h-0.5 bg-[#dce9ff] flex-1" />
                          <div className="w-3 h-3 rounded-full border-2 border-[#006398] bg-white flex items-center justify-center">
                            {flight.stops > 0 && <span className="w-1 h-1 rounded-full bg-[#006398]" />}
                          </div>
                          <div className="h-0.5 bg-[#dce9ff] flex-1" />
                        </div>
                        <span className="text-[11px] font-medium text-[#44474d] text-center">
                          {flight.stops === 0 ? 'Non-Stop Direct' : flight.stopDetails}
                        </span>
                      </div>

                      {/* Destination */}
                      <div className="sm:col-span-3 text-left sm:text-right">
                        <p className="text-[24px] font-extrabold text-[#0b1c30] leading-none">
                          {flight.arrivalTime}
                        </p>
                        <p className="text-[14px] font-bold text-[#0b1c30] mt-1">{flight.toCode}</p>
                        <p className="text-[11px] text-[#76849f] truncate">{flight.toAirport}</p>
                      </div>
                    </div>

                    {/* Price & Booking Action */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-[#dce9ff] pt-4 sm:pt-0 sm:pl-8 flex-shrink-0">
                      <div>
                        <p className="text-[11px] text-[#76849f] sm:text-right">Per Passenger</p>
                        <p className="text-[24px] font-black text-[#0b1c30] sm:text-right leading-none">
                          {formatPrice(flight.priceUSD)}
                        </p>
                        <p className="text-[11px] text-emerald-700 font-bold sm:text-right mt-1 flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">luggage</span>
                          <span>{flight.baggage}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() => setExpandedFlightId(isExpanded ? null : flight.id)}
                          className="px-3 py-2 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] rounded-xl text-[12px] font-bold transition-colors cursor-pointer"
                          type="button"
                        >
                          {isExpanded ? 'Hide' : 'Details'}
                        </button>
                        <button
                          onClick={() => onBookFlight(flight)}
                          className="px-5 py-2.5 bg-[#006398] hover:bg-[#5bb8fe] hover:text-[#00476e] text-white rounded-xl text-[13px] font-bold shadow-md transition-all cursor-pointer flex items-center gap-1"
                          type="button"
                        >
                          <span>Book Now</span>
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Flight Details */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-[#eff4ff] grid grid-cols-1 sm:grid-cols-3 gap-4 text-[13px] animate-in fade-in duration-150">
                      <div className="bg-[#eff4ff] p-3.5 rounded-xl space-y-1">
                        <p className="font-bold text-[#0b1c30] flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px] text-[#006398]">luggage</span>
                          <span>Baggage Allowance</span>
                        </p>
                        <p className="text-[#44474d]">{flight.baggage}</p>
                        <p className="text-[11px] text-[#76849f]">Cabin bag: 1 x 7kg included</p>
                      </div>

                      <div className="bg-[#eff4ff] p-3.5 rounded-xl space-y-1">
                        <p className="font-bold text-[#0b1c30] flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px] text-[#006398]">calendar_clock</span>
                          <span>Flight Operations</span>
                        </p>
                        <p className="text-[#44474d]">Operating: {flight.daysAvailable.join(', ')}</p>
                        <p className="text-[11px] text-amber-700 font-bold">{flight.seatsLeft} seats remaining at this fare</p>
                      </div>

                      <div className="bg-[#eff4ff] p-3.5 rounded-xl space-y-1">
                        <p className="font-bold text-[#0b1c30] flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px] text-[#006398]">verified</span>
                          <span>Asim Travel Guarantee</span>
                        </p>
                        <p className="text-[#44474d]">Free re-issuance support &amp; 24/7 WhatsApp emergency assistance.</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
