import React, { useState } from 'react';
import { VISA_PRODUCTS } from '../data/mockData';
import { VisaProduct } from '../types/travel';

interface VisaViewProps {
  onApplyVisa: (visa: VisaProduct) => void;
  currency: 'USD' | 'KES';
}

export const VisaView: React.FC<VisaViewProps> = ({
  onApplyVisa,
  currency,
}) => {
  const [selectedNationality, setSelectedNationality] = useState('Somali Passport');
  const [selectedDestination, setSelectedDestination] = useState('All');

  const formatPrice = (usd: number) => {
    if (currency === 'KES') {
      return `KES ${(usd * 130).toLocaleString()}`;
    }
    return `$${usd.toLocaleString()}`;
  };

  const filteredVisas = VISA_PRODUCTS.filter((v) => {
    if (selectedDestination !== 'All' && !v.destination.toLowerCase().includes(selectedDestination.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="w-full bg-[#f8f9ff] py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header */}
        <div className="bg-[#0d1c32] text-white p-8 lg:p-12 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-[#006398] opacity-25 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 bg-[#006398] text-white text-[11px] font-bold uppercase tracking-wider rounded-full">
              Government Immigrations Liaison Desk
            </span>
            <h1 className="text-[34px] lg:text-[46px] font-extrabold tracking-tight uppercase leading-tight">
              Expedited Visa Clearances &amp; eTA
            </h1>
            <p className="text-[15px] text-[#76849f] leading-relaxed">
              Fast-track visa processing for Dubai (UAE), Kenya (eTA), Saudi Arabia, and Turkey. Turnkey document validation with 99.8% approval rate and direct dispatch to your WhatsApp.
            </p>
          </div>
        </div>

        {/* Interactive Eligibility & Document Checker Bar */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#dce9ff] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#eff4ff] pb-3">
            <div>
              <h3 className="text-[16px] font-bold text-[#0b1c30]">Quick Eligibility &amp; Requirements Filter</h3>
              <p className="text-[12px] text-[#44474d]">Select your passport and target country for instant document checklists</p>
            </div>
            <span className="text-[11px] font-bold text-[#006398] bg-[#eff4ff] px-3 py-1 rounded-full">
              100% Pre-Check Guarantee
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                Select Your Passport Country
              </label>
              <select
                value={selectedNationality}
                onChange={(e) => setSelectedNationality(e.target.value)}
                className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
              >
                <option value="Somali Passport">Somalia (Passport &amp; Travel Document)</option>
                <option value="Kenyan Passport">Kenya</option>
                <option value="Ethiopian Passport">Ethiopia</option>
                <option value="Djibouti Passport">Djibouti</option>
                <option value="US/UK/EU Diaspora">US / UK / EU Diaspora Dual National</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                Destination Filter
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
              >
                <option value="All">All Visa Destinations</option>
                <option value="Dubai">Dubai &amp; UAE</option>
                <option value="Kenya">Kenya (eTA)</option>
                <option value="Saudi">Saudi Arabia</option>
              </select>
            </div>
          </div>
        </div>

        {/* Visa Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredVisas.map((visa) => (
            <div
              key={visa.id}
              className="bg-white p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-[#dce9ff] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    {visa.badge && (
                      <span className="inline-block px-2.5 py-0.5 bg-[#eff4ff] text-[#006398] text-[11px] font-bold rounded-md mb-2 border border-[#dce9ff]">
                        {visa.badge}
                      </span>
                    )}
                    <h3 className="text-[20px] font-bold text-[#0b1c30] leading-snug">{visa.title}</h3>
                    <p className="text-[12px] font-semibold text-[#76849f]">{visa.destination}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[24px] font-black text-[#0b1c30] leading-none">
                      {formatPrice(visa.priceUSD)}
                    </p>
                    <p className="text-[11px] text-[#76849f] mt-1 font-mono">{visa.processingTime}</p>
                  </div>
                </div>

                <p className="text-[13px] text-[#44474d] leading-relaxed">{visa.description}</p>

                {/* Requirements */}
                <div className="bg-[#eff4ff] p-4 rounded-2xl border border-[#dce9ff]/60 space-y-2">
                  <p className="text-[12px] font-bold text-[#0b1c30] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#006398]">task</span>
                    <span>Document Checklist:</span>
                  </p>
                  <ul className="space-y-1 text-[12px] text-[#44474d]">
                    {visa.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#006398] font-bold">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-[11px] text-[#76849f]">
                  <strong>Validity:</strong> {visa.validity}
                </div>
              </div>

              <div className="pt-6 border-t border-[#eff4ff] flex items-center gap-3">
                <button
                  onClick={() => onApplyVisa(visa)}
                  className="flex-1 py-3 bg-[#006398] hover:bg-[#5bb8fe] hover:text-[#00476e] text-white rounded-xl text-[13px] font-bold transition-all shadow-sm cursor-pointer"
                  type="button"
                >
                  Apply Online Now
                </button>
                <a
                  href={`https://wa.me/254795227757?text=Hello%20Asim%20Travel,%20I%20am%20applying%20for%20the%20${encodeURIComponent(visa.title)}%20(${encodeURIComponent(selectedNationality)})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#25d366] text-white rounded-xl hover:opacity-90 transition-opacity"
                  title="WhatsApp Express Submission"
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
