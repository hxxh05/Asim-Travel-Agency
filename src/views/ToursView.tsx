import React from 'react';
import { TOUR_PACKAGES } from '../data/mockData';

interface ToursViewProps {
  onOpenConsultation: () => void;
  currency: 'USD' | 'KES';
}

export const ToursView: React.FC<ToursViewProps> = ({
  onOpenConsultation,
  currency,
}) => {
  const formatPrice = (usd: number) => {
    if (currency === 'KES') {
      return `KES ${(usd * 130).toLocaleString()}`;
    }
    return `$${usd.toLocaleString()}`;
  };

  return (
    <div className="w-full bg-[#f8f9ff] py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Header */}
        <div className="bg-[#0d1c32] text-white p-8 lg:p-12 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-[#5bb8fe] opacity-20 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 bg-[#006398] text-white text-[11px] font-bold uppercase tracking-wider rounded-full">
              East Africa &amp; Arabian Gulf Holidays
            </span>
            <h1 className="text-[34px] lg:text-[46px] font-extrabold tracking-tight uppercase leading-tight">
              Curated Safari &amp; Holiday Tours
            </h1>
            <p className="text-[15px] text-[#76849f] leading-relaxed">
              Explore the breathtaking savannas of Kenya, turquoise coastlines of Zanzibar, and modern skyline wonders of Dubai. Turnkey travel itineraries with luxury accommodation and private transfers.
            </p>
          </div>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TOUR_PACKAGES.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-[#dce9ff] flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src={tour.imageUrl}
                    alt={tour.title}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#0b1c30] uppercase shadow-xs">
                    {tour.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl font-extrabold text-[18px] text-[#0b1c30]">
                    From {formatPrice(tour.priceUSD)} <span className="text-[11px] font-normal text-[#44474d]">/ person</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[12px] font-bold text-[#006398] uppercase tracking-wide">
                      {tour.location} • {tour.duration}
                    </span>
                    <h3 className="text-[20px] font-bold text-[#0b1c30] mt-1">{tour.title}</h3>
                  </div>

                  <div className="space-y-2 text-[13px] text-[#44474d]">
                    <p className="font-bold text-[#0b1c30]">Highlights Included:</p>
                    {tour.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[#006398] text-[18px] mt-0.5">check_circle</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-3">
                <button
                  onClick={onOpenConsultation}
                  className="flex-1 py-3 bg-[#0d1c32] hover:bg-[#006398] text-white rounded-xl text-[13px] font-bold transition-colors cursor-pointer"
                  type="button"
                >
                  Book Safari Consultation
                </button>
                <a
                  href={`https://wa.me/254795227757?text=Hello%20Asim%20Travel,%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(tour.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#25d366] text-white rounded-xl hover:opacity-90 transition-opacity"
                  title="WhatsApp Inquiry"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
