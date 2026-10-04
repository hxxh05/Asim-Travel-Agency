import React from 'react';
import { NavigationTab } from '../types/travel';

interface SignaturePackagesProps {
  onNavigate: (tab: NavigationTab) => void;
  onSelectUmrah: () => void;
  onSelectDubaiVisa: () => void;
  onSelectKenyaEta: () => void;
  currency: 'USD' | 'KES';
}

export const SignaturePackages: React.FC<SignaturePackagesProps> = ({
  onNavigate,
  onSelectUmrah,
  onSelectDubaiVisa,
  onSelectKenyaEta,
  currency,
}) => {
  const formatPrice = (usd: number) => {
    if (currency === 'KES') {
      return `KES ${(usd * 130).toLocaleString()}`;
    }
    return `$${usd.toLocaleString()}`;
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-[#006398] text-[12px] uppercase tracking-wider mb-2 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#006398]" />
              Exclusive Travel Offerings
            </div>
            <h2 className="text-[28px] lg:text-[40px] font-extrabold text-[#0b1c30] tracking-tight uppercase leading-tight">
              Signature Journeys &amp; Visa Clearances
            </h2>
            <p className="text-[15px] lg:text-[16px] text-[#44474d] max-w-2xl mt-1 leading-relaxed">
              Carefully curated pilgrimage and city packages with transparent pricing, official clearances, and airport support.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-1.5 text-[#006398] font-bold text-[15px] hover:underline cursor-pointer"
            type="button"
          >
            <span>Inquire about custom dates</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CARD 1: FURSAD CUMRO */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group border border-[#dce9ff]">
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpGoRaXjAktaNoniSVg9bbq_pWd7CW0NbJbwlDZWtU7sjJnT3tMQXv_3onzUu_MPE2HUo1UL3Z66w8PsTHph1J4i0xFUe3fMTAQKtv5keiz0f-So8rWKUSetNosAC1oZY7t9Vy1DTXNETGysERom2brrssuFa95QJj15COm_-Q4Hr3EyAG6u_LXLO160Udrx6WbSvTtKu6yqirD6ZNRUs238R25LJNPJL2L0UBqQfqSa0k2aC6XZW-"
                alt="Holy Kaaba at twilight in Makkah with Clock Tower"
              />
              <div className="absolute top-4 left-4 bg-[#ffdcc3] text-[#2f1500] text-[11px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px]">verified</span>
                <span>All-Inclusive Umrah</span>
              </div>
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md">
                <span className="text-[11px] text-[#44474d]">From </span>
                <span className="text-[18px] text-[#0b1c30] font-extrabold">{formatPrice(1350)}</span>
                <span className="text-[11px] text-[#44474d]"> / person</span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#c76c00] mb-2">
                  <span className="material-symbols-outlined text-[18px] text-[#c76c00]">star</span>
                  <span className="material-symbols-outlined text-[18px] text-[#c76c00]">star</span>
                  <span className="material-symbols-outlined text-[18px] text-[#c76c00]">star</span>
                  <span className="material-symbols-outlined text-[18px] text-[#c76c00]">star</span>
                  <span className="material-symbols-outlined text-[18px] text-[#c76c00]">star</span>
                  <span className="text-[12px] text-[#44474d] ml-1 font-semibold">5-Star Luxury Accommodations</span>
                </div>

                <h3 className="text-[20px] font-bold text-[#0b1c30] tracking-tight mb-2">
                  Fursad Cumro — Makkah &amp; Madinah Full Package
                </h3>

                <p className="text-[13px] text-[#44474d] leading-relaxed mb-6">
                  Comprehensive 14-day spiritual journey departure from Nairobi JKIA or Mogadishu Aden Adde. Hassle-free sacred pilgrimage with full agency concierge.
                </p>

                <ul className="space-y-2.5 text-[13px] text-[#0b1c30] mb-6">
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#006398] text-[20px]">check_circle</span>
                    <span>Direct Flight Tickets (Return with Luggage)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#006398] text-[20px]">check_circle</span>
                    <span>5-Star Hotels within walking distance of Haram</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#006398] text-[20px]">check_circle</span>
                    <span>Saudi Umrah Electronic Visa Processing</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#006398] text-[20px]">check_circle</span>
                    <span>Guided Ziyarah in Makkah &amp; Madinah • 5L Zamzam</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#eff4ff] flex items-center justify-between gap-3">
                <button
                  onClick={onSelectUmrah}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#0d1c32] text-white text-[14px] font-bold text-center hover:bg-[#006398] transition-colors shadow-sm cursor-pointer"
                  type="button"
                >
                  Reserve Seat Now
                </button>
                <a
                  className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#0b1c30] hover:bg-[#dce9ff] transition-colors"
                  href="tel:+254795227757"
                  title="Call Pilgrimage Desk"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2: DUBAI VISA & TOURS */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group border border-[#dce9ff]">
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3O2nMgBr9blt2F9sFAyFF8eEezPAiF8jahwLzijyurhPIfNn909vmslBLucXZcSFwGTn1PEJ-b2BYlVAh3uN81GXPLFRsj8iJug7mkh9vygBAt8tlc3KJpgSmASDrg0jVTxXE5S1M6opk0eP4K2gPpzZ9COugRcSvb8rRAwUu6DAncgJniZBV-nWQHENpv8M766oq0ZqEfXafe48dzRE6r11mv2Ajq9cSJBasfjvAxTpUmACrp5cz"
                alt="Dubai traveler with flight boarding passes and Burj Al Arab view"
              />
              <div className="absolute top-4 left-4 bg-[#006398] text-white text-[11px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px]">bolt</span>
                <span>Express Visa (24-48 Hours)</span>
              </div>

              {/* Fast Book Badge */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-[#ba1a1a] text-white flex flex-col items-center justify-center font-bold text-center leading-none shadow-lg transform -rotate-12 border-2 border-white">
                <span className="text-[9px] tracking-widest uppercase">Fast</span>
                <span className="text-[13px] font-extrabold">BOOK</span>
                <span className="text-[9px]">NOW</span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#006398] text-[13px] font-bold mb-2">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Somali &amp; Kenyan Passports Welcomed</span>
                </div>

                <h3 className="text-[20px] font-bold text-[#0b1c30] tracking-tight mb-2">
                  Dubai Visa Processing &amp; Holiday Tours
                </h3>

                <p className="text-[13px] text-[#44474d] leading-relaxed mb-6">
                  Turnkey UAE entry clearance, ticket reservation, and 4-star Deira/Downtown hotel arrangements for business executives, traders, and vacationers.
                </p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="bg-[#eff4ff] p-3 rounded-xl border border-[#dce9ff]/50">
                    <p className="text-[11px] font-semibold text-[#44474d]">30-Day Tourist</p>
                    <p className="text-[18px] text-[#0b1c30] font-extrabold">{formatPrice(145)}</p>
                  </div>
                  <div className="bg-[#eff4ff] p-3 rounded-xl border border-[#dce9ff]/50">
                    <p className="text-[11px] font-semibold text-[#44474d]">60-Day Multiple</p>
                    <p className="text-[18px] text-[#0b1c30] font-extrabold">{formatPrice(290)}</p>
                  </div>
                </div>

                <ul className="space-y-2.5 text-[13px] text-[#0b1c30] mb-6">
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#006398] text-[20px]">check_circle</span>
                    <span>Instant Entry Permit Dispatch to WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#006398] text-[20px]">check_circle</span>
                    <span>Confirmed Flight Itinerary for Airport Immigration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#006398] text-[20px]">check_circle</span>
                    <span>Optional Desert Safari &amp; Dhow Cruise add-on</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#eff4ff] flex items-center justify-between gap-3">
                <button
                  onClick={onSelectDubaiVisa}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#006398] text-white text-[14px] font-bold text-center hover:bg-[#5bb8fe] hover:text-[#00476e] transition-colors shadow-sm cursor-pointer"
                  type="button"
                >
                  Apply for Dubai Visa
                </button>
                <a
                  className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#0b1c30] hover:bg-[#dce9ff] transition-colors"
                  href="tel:+252615098954"
                  title="Call Mogadishu Office"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </a>
              </div>
            </div>
          </div>

          {/* CARD 3: KENYA VISA & TRANSIT */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group border border-[#dce9ff]">
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDClf62KM9x-9c0OVTNaQbevJP0aEpFcwqVK6NF3dWW1LUusU80dnZEZJ3-g_SpAD785Ry9d-wByKIGn9622ygsvKaj0FT0xAOACd0MNXJ87hoB5XW1PDl3pxb9CsSRjKpkLtCwvpyvIr0QkXyEwnh8TuefRfYxSDCyGKsGlG7y6o_4d00zPAC8b7plfjt3VF2XUD0VJdCzv0lsULBxZNrCgdEBGmvSQMzD2WnONpgprni6lNbHdusu"
                alt="Nairobi skyline with natural park and sunset scenery"
              />
              <div className="absolute top-4 left-4 bg-[#d3e4fe] text-[#0b1c30] text-[11px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px]">badge</span>
                <span>Kenya Entry Permit</span>
              </div>
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md">
                <span className="text-[16px] text-[#0b1c30] font-extrabold">Instant eTA Desk</span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#006398] text-[13px] font-bold mb-2">
                  <span className="material-symbols-outlined text-[18px]">security</span>
                  <span>Official Immigration Compliance</span>
                </div>

                <h3 className="text-[20px] font-bold text-[#0b1c30] tracking-tight mb-2">
                  Kenya eTA &amp; Transit Concierge
                </h3>

                <p className="text-[13px] text-[#44474d] leading-relaxed mb-6">
                  Fast-track Kenya Electronic Travel Authorization (eTA) for visitors landing at JKIA Nairobi or connecting onwards to Europe, North America, or Somalia.
                </p>

                <ul className="space-y-2.5 text-[13px] text-[#0b1c30] mb-6">
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#006398] text-[20px]">check_circle</span>
                    <span>Complete document validation &amp; submission</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#006398] text-[20px]">check_circle</span>
                    <span>Urgent 12-hour turnaround priority service</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#006398] text-[20px]">check_circle</span>
                    <span>JKIA Nairobi Airport VIP meet &amp; assist upon arrival</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#006398] text-[20px]">check_circle</span>
                    <span>Direct South C &amp; Eastleigh branch pickup option</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#eff4ff] flex items-center justify-between gap-3">
                <button
                  onClick={onSelectKenyaEta}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#eff4ff] text-[#0b1c30] text-[14px] font-bold text-center hover:bg-[#dce9ff] transition-colors cursor-pointer"
                  type="button"
                >
                  Apply for Kenya eTA
                </button>
                <a
                  className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#0b1c30] hover:bg-[#dce9ff] transition-colors"
                  href="tel:+254795227757"
                  title="Call Nairobi Office"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
