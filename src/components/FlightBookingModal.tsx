import React, { useState } from 'react';
import { FlightOption } from '../types/travel';

interface FlightBookingModalProps {
  flight: FlightOption | null;
  isOpen: boolean;
  onClose: () => void;
  currency: 'USD' | 'KES';
}

export const FlightBookingModal: React.FC<FlightBookingModalProps> = ({
  flight,
  isOpen,
  onClose,
  currency,
}) => {
  const [passengerName, setPassengerName] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [nationality, setNationality] = useState('Somali');
  const [phone, setPhone] = useState('+254 ');
  const [email, setEmail] = useState('');
  const [passengersCount, setPassengersCount] = useState(1);
  const [addExtraLuggage, setAddExtraLuggage] = useState(false);
  const [mealPreference, setMealPreference] = useState('Standard Halal Meal');
  const [confirmedPnr, setConfirmedPnr] = useState<string | null>(null);

  if (!isOpen || !flight) return null;

  const basePriceUSD = flight.priceUSD * passengersCount;
  const luggageUSD = addExtraLuggage ? 70 * passengersCount : 0;
  const totalUSD = basePriceUSD + luggageUSD;

  const formatPrice = (usd: number) => {
    if (currency === 'KES') {
      return `KES ${(usd * 130).toLocaleString()}`;
    }
    return `$${usd.toLocaleString()}`;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pnr = `ASM-${flight.airlineCode}-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedPnr(pnr);
  };

  const handleDone = () => {
    setConfirmedPnr(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#dce9ff] my-8">
        {/* Header */}
        <div className="bg-[#0d1c32] text-white p-6 relative">
          <div className="flex items-center justify-between pr-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#006398] flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[22px]">airplane_ticket</span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5bb8fe]">
                  Direct Ticketing Desk
                </span>
                <h3 className="font-extrabold text-[18px] text-white">
                  {flight.airline} • {flight.flightNumber}
                </h3>
              </div>
            </div>

            <div className="text-right">
              <p className="text-[11px] text-[#76849f]">Total Fare</p>
              <p className="text-[20px] font-extrabold text-[#5bb8fe]">
                {formatPrice(totalUSD)}
              </p>
            </div>
          </div>

          <button
            onClick={handleDone}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Itinerary Preview Ribbon */}
        <div className="bg-[#eff4ff] px-6 py-4 border-b border-[#dce9ff] flex items-center justify-between text-[13px] text-[#0b1c30]">
          <div>
            <span className="font-extrabold text-[16px]">{flight.fromCode}</span>
            <span className="text-[#44474d] ml-1">({flight.fromCity})</span>
            <p className="text-[11px] text-[#76849f]">{flight.departureTime}</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[11px] font-bold text-[#006398]">{flight.duration}</span>
            <div className="w-24 h-0.5 bg-[#006398] relative my-1">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#006398]" />
            </div>
            <span className="text-[10px] text-[#76849f]">{flight.stops === 0 ? 'Non-Stop Direct' : flight.stopDetails}</span>
          </div>

          <div className="text-right">
            <span className="font-extrabold text-[16px]">{flight.toCode}</span>
            <span className="text-[#44474d] ml-1">({flight.toCity})</span>
            <p className="text-[11px] text-[#76849f]">{flight.arrivalTime}</p>
          </div>
        </div>

        {/* Content */}
        {confirmedPnr ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h4 className="text-[22px] font-extrabold text-[#0b1c30]">Flight Reservation Confirmed!</h4>
            <p className="text-[14px] text-[#44474d] max-w-md mx-auto">
              Your flight booking request has been submitted to the Asim Travel GDS ticketing terminal. Our ticketing officer will issue your e-ticket within minutes.
            </p>

            {/* Simulated Boarding Pass / E-Ticket */}
            <div className="bg-gradient-to-r from-[#0d1c32] to-[#122b4d] text-white rounded-2xl p-6 text-left shadow-lg relative overflow-hidden">
              <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#5bb8fe]">Electronic Ticket / PNR</p>
                  <p className="font-mono text-[22px] font-extrabold text-white">{confirmedPnr}</p>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 bg-[#5bb8fe]/20 text-[#5bb8fe] text-[11px] font-bold rounded-lg border border-[#5bb8fe]/30">
                    Confirmed
                  </span>
                  <p className="text-[11px] text-white/70 mt-1">{flight.airline} • {flight.flightNumber}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[12px]">
                <div>
                  <p className="text-white/60">Primary Passenger</p>
                  <p className="font-bold text-white text-[13px]">{passengerName || 'Traveler'}</p>
                </div>
                <div>
                  <p className="text-white/60">Route</p>
                  <p className="font-bold text-white text-[13px]">{flight.fromCode} → {flight.toCode}</p>
                </div>
                <div>
                  <p className="text-white/60">Baggage</p>
                  <p className="font-bold text-white text-[13px]">{flight.baggage}</p>
                </div>
                <div>
                  <p className="text-white/60">Total Fare</p>
                  <p className="font-bold text-[#5bb8fe] text-[13px]">{formatPrice(totalUSD)}</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/254795227757?text=Asalaam%20Alaykum,%20I%20have%20booked%20flight%20PNR:%20${confirmedPnr}%20(${flight.fromCode}%20to%20${flight.toCode})%20for%20passenger%20${encodeURIComponent(passengerName)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#25d366] text-white rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 hover:opacity-95 shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Send to WhatsApp Desk for Instant E-Ticket</span>
              </a>
              <button
                onClick={handleDone}
                className="py-3 px-6 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] rounded-xl text-[14px] font-bold transition-colors cursor-pointer"
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1 sm:col-span-2">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Passenger Full Name (as shown on passport)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Abdirahman Shire Warsame"
                  value={passengerName}
                  onChange={(e) => setPassengerName(e.target.value)}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Number of Passengers
                </label>
                <select
                  value={passengersCount}
                  onChange={(e) => setPassengersCount(Number(e.target.value))}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                >
                  <option value={1}>1 Passenger</option>
                  <option value={2}>2 Passengers</option>
                  <option value={3}>3 Passengers</option>
                  <option value={4}>4 Passengers</option>
                  <option value={5}>5 Passengers</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Passport Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. P00284918"
                  value={passportNumber}
                  onChange={(e) => setPassportNumber(e.target.value)}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Nationality / Passport Country
                </label>
                <select
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                >
                  <option value="Somali">Somalia (Federal Republic)</option>
                  <option value="Kenyan">Kenya</option>
                  <option value="Ethiopian">Ethiopia</option>
                  <option value="Djiboutian">Djibouti</option>
                  <option value="British">United Kingdom (Diaspora)</option>
                  <option value="American">United States (Diaspora)</option>
                  <option value="Canadian">Canada (Diaspora)</option>
                  <option value="Other">Other International Passport</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+254 7XX XXX XXX or +252 61X XXX XXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Email Address (for e-ticket receipt)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                  required
                />
              </div>
            </div>

            {/* Add-ons & Amenities */}
            <div className="bg-[#eff4ff] p-4 rounded-2xl border border-[#dce9ff] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#006398]">luggage</span>
                  <div>
                    <p className="text-[13px] font-bold text-[#0b1c30]">Additional 23kg Checked Bag</p>
                    <p className="text-[11px] text-[#44474d]">Standard airline rate: +$70 / passenger</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={addExtraLuggage}
                  onChange={(e) => setAddExtraLuggage(e.target.checked)}
                  className="w-5 h-5 rounded text-[#006398] cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#dce9ff]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#006398]">restaurant</span>
                  <div>
                    <p className="text-[13px] font-bold text-[#0b1c30]">In-Flight Meal Request</p>
                    <p className="text-[11px] text-[#44474d]">Complimentary on all flights</p>
                  </div>
                </div>
                <select
                  value={mealPreference}
                  onChange={(e) => setMealPreference(e.target.value)}
                  className="h-8 px-2 bg-white text-[12px] font-medium rounded-lg border border-[#dce9ff]"
                >
                  <option>Standard Halal Meal</option>
                  <option>Vegetarian Jain / Hindu</option>
                  <option>Diabetic / Low Sodium</option>
                  <option>Child Friendly Meal</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-12 bg-[#006398] hover:bg-[#5bb8fe] hover:text-[#00476e] text-white rounded-xl text-[14px] font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                <span>Generate Official PNR &amp; Request Ticket ({formatPrice(totalUSD)})</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
