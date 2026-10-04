import React, { useState } from 'react';
import { UMRAH_PACKAGES } from '../data/mockData';
import { UmrahPackage } from '../types/travel';

interface UmrahViewProps {
  onOpenConsultation: () => void;
  currency: 'USD' | 'KES';
}

export const UmrahView: React.FC<UmrahViewProps> = ({
  onOpenConsultation,
  currency,
}) => {
  const [selectedPkg, setSelectedPkg] = useState<UmrahPackage>(UMRAH_PACKAGES[0]);

  const formatPrice = (usd: number) => {
    if (currency === 'KES') {
      return `KES ${(usd * 130).toLocaleString()}`;
    }
    return `$${usd.toLocaleString()}`;
  };

  const itinerary = [
    {
      day: 'Days 1 – 5',
      title: 'Arrival in Madinah Al Munawwarah',
      desc: 'Land at Prince Mohammad bin Abdulaziz Airport. VIP airport pickup and transfer to 5-star hotel adjacent to Masjid An-Nabawi. Guided visits to the Rawdah Sharifah, Masjid Quba, and Mount Uhud.',
      badge: 'City of the Prophet (SAW)'
    },
    {
      day: 'Day 6',
      title: 'Haramain High-Speed Bullet Train Transfer to Makkah',
      desc: 'Enter state of Ihram at the Miqat (Dhul Hulaifah). Journey on the ultra-modern Haramain High-Speed Railway directly to Makkah Al Mukarramah. Check into Swissotel Al Maqam / Clock Tower.',
      badge: 'Miqat & High-Speed Transit'
    },
    {
      day: 'Days 7 – 12',
      title: 'Performing Umrah & Sacred Makkah Ziyarah',
      desc: 'Perform Umrah Tawaf and Sa’i accompanied by our scholar guides. Spiritual lectures, daily prayers in the Haram courtyard, and comprehensive Ziyarah to Jabal Al Noor (Cave of Hira), Mina, and Muzdalifah.',
      badge: 'Holy Sanctuary (Al Haram)'
    },
    {
      day: 'Days 13 – 14',
      title: 'Tawaf Al-Wada & Jeddah Departure with Zamzam',
      desc: 'Perform farewell Tawaf. Private coach transfer to King Abdulaziz International Airport (JED) in Jeddah. Collection of official 5-litre sealed Zamzam water boxes and direct return flights to Nairobi or Mogadishu.',
      badge: 'Completion & Return'
    }
  ];

  return (
    <div className="w-full bg-[#f8f9ff] py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Banner */}
        <div className="bg-[#0d1c32] text-white p-8 lg:p-12 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-[#c76c00] opacity-25 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 bg-[#c76c00] text-white text-[11px] font-bold uppercase tracking-wider rounded-full">
              Ministry of Hajj &amp; Umrah Authorized Desk
            </span>
            <h1 className="text-[34px] lg:text-[46px] font-extrabold tracking-tight uppercase leading-tight">
              Fursad Cumro &amp; Hajj 2025/2026
            </h1>
            <p className="text-[15px] text-[#76849f] leading-relaxed">
              Experience the spiritual journey of a lifetime. Direct departures from Nairobi JKIA and Mogadishu Aden Adde with guaranteed 5-star hotels right in the Haram precincts and experienced Somali &amp; Swahili guides.
            </p>
          </div>
        </div>

        {/* Package Selector Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {UMRAH_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPkg(pkg)}
              className={`bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer border flex flex-col justify-between ${
                selectedPkg.id === pkg.id ? 'border-[#006398] ring-2 ring-[#006398]/30' : 'border-[#dce9ff]'
              }`}
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src={pkg.imageUrl}
                    alt={pkg.name}
                  />
                  <div className="absolute top-4 left-4 bg-[#ffdcc3] text-[#2f1500] text-[11px] px-3 py-1 rounded-full font-bold uppercase">
                    {pkg.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl font-black text-[18px] text-[#0b1c30]">
                    {formatPrice(pkg.priceUSD)} <span className="text-[11px] font-normal text-[#44474d]">/ person</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-[18px] font-bold text-[#0b1c30] leading-snug">{pkg.name}</h3>
                  <p className="text-[12px] text-[#006398] font-bold">
                    {pkg.durationDays} Days • {pkg.season}
                  </p>

                  <div className="space-y-2 text-[13px] pt-2 border-t border-[#eff4ff]">
                    <div>
                      <span className="font-bold text-[#0b1c30]">Makkah Hotel:</span>
                      <p className="text-[#44474d] text-[12px]">{pkg.makkahHotel}</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#0b1c30]">Madinah Hotel:</span>
                      <p className="text-[#44474d] text-[12px]">{pkg.madinahHotel}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenConsultation();
                  }}
                  className="w-full py-3 bg-[#0d1c32] hover:bg-[#006398] text-white rounded-xl text-[13px] font-bold transition-colors cursor-pointer"
                  type="button"
                >
                  Reserve Package Seat
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Itinerary Timeline */}
        <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-[#dce9ff] space-y-8">
          <div className="border-b border-[#eff4ff] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase text-[#006398] tracking-widest">
                Sacred Pilgrimage Schedule
              </span>
              <h2 className="text-[26px] font-extrabold text-[#0b1c30] tracking-tight">
                {selectedPkg.name} — Full Itinerary
              </h2>
            </div>
            <a
              href={`https://wa.me/254795227757?text=Asalaam%20Alaykum,%20I%20would%20like%20the%20detailed%20itinerary%20PDF%20for%20${encodeURIComponent(selectedPkg.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25d366] text-white font-bold text-[13px] rounded-xl hover:opacity-95 transition-opacity"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Download via WhatsApp</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {itinerary.map((item, idx) => (
              <div key={idx} className="bg-[#eff4ff] p-5 rounded-2xl border border-[#dce9ff]/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold text-[#006398] uppercase tracking-wide">
                    {item.day}
                  </span>
                  <span className="px-2 py-0.5 bg-white text-[10px] font-bold text-[#0b1c30] rounded-md border border-[#dce9ff]">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-[16px] font-bold text-[#0b1c30]">{item.title}</h4>
                <p className="text-[13px] text-[#44474d] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Inclusions List */}
          <div className="bg-[#f8f9ff] p-6 rounded-2xl border border-[#dce9ff] space-y-3">
            <h4 className="text-[16px] font-bold text-[#0b1c30] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#006398]">task_alt</span>
              <span>What Is Included in {selectedPkg.name}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px] text-[#0b1c30]">
              {selectedPkg.inclusions.map((inc, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#006398] text-[18px] mt-0.5">check_circle</span>
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
