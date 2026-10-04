import React, { useState } from 'react';
import { VisaProduct } from '../types/travel';

interface VisaApplicationModalProps {
  visa: VisaProduct | null;
  isOpen: boolean;
  onClose: () => void;
  currency: 'USD' | 'KES';
}

export const VisaApplicationModal: React.FC<VisaApplicationModalProps> = ({
  visa,
  isOpen,
  onClose,
  currency,
}) => {
  const [fullName, setFullName] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [passportExpiry, setPassportExpiry] = useState('');
  const [nationality, setNationality] = useState('Somali');
  const [whatsapp, setWhatsapp] = useState('+254 ');
  const [hasPassportCopy, setHasPassportCopy] = useState(true);
  const [hasPhoto, setHasPhoto] = useState(true);
  const [applicationRef, setApplicationRef] = useState<string | null>(null);

  if (!isOpen || !visa) return null;

  const formatPrice = (usd: number) => {
    if (currency === 'KES') {
      return `KES ${(usd * 130).toLocaleString()}`;
    }
    return `$${usd.toLocaleString()}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `ASM-VISA-${Math.floor(10000 + Math.random() * 90000)}`;
    setApplicationRef(ref);
  };

  const handleDone = () => {
    setApplicationRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#dce9ff] my-8">
        {/* Header */}
        <div className="bg-[#0d1c32] text-white p-6 relative">
          <div className="flex items-center justify-between pr-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#006398] flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5bb8fe]">
                  Expedited Visa Concierge
                </span>
                <h3 className="font-extrabold text-[17px] text-white">
                  {visa.title}
                </h3>
              </div>
            </div>

            <div className="text-right">
              <p className="text-[11px] text-[#76849f]">Processing Fee</p>
              <p className="text-[20px] font-extrabold text-[#5bb8fe]">
                {formatPrice(visa.priceUSD)}
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

        {/* Content */}
        {applicationRef ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>
            <h4 className="text-[22px] font-extrabold text-[#0b1c30]">Visa Application Submitted!</h4>
            <p className="text-[13px] text-[#44474d] max-w-md mx-auto">
              Your application has been received by our Nairobi &amp; Mogadishu immigration clearance desk. Expected turnaround: <strong className="text-[#0b1c30]">{visa.processingTime}</strong>.
            </p>

            <div className="bg-[#eff4ff] p-4 rounded-2xl border border-[#dce9ff] text-left text-[13px] space-y-2">
              <div className="flex justify-between">
                <span className="text-[#44474d]">Tracking Reference:</span>
                <span className="font-mono font-extrabold text-[#006398]">{applicationRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#44474d]">Visa Type:</span>
                <span className="font-bold text-[#0b1c30]">{visa.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#44474d]">Applicant:</span>
                <span className="font-bold text-[#0b1c30]">{fullName} ({nationality})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#44474d]">Dispatch Target:</span>
                <span className="font-bold text-emerald-700">Direct to WhatsApp ({whatsapp})</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/254795227757?text=Hello%20Asim%20Travel,%20I%20have%20submitted%20visa%20application%20ref:%20${applicationRef}%20for%20${encodeURIComponent(visa.title)}%20(${encodeURIComponent(fullName)})`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#25d366] text-white rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 hover:opacity-95 shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Send Documents via WhatsApp</span>
              </a>
              <button
                onClick={handleDone}
                className="py-3 px-6 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] rounded-xl text-[14px] font-bold transition-colors cursor-pointer"
                type="button"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="space-y-1">
              <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                Applicant Full Name (As in Passport)
              </label>
              <input
                type="text"
                placeholder="e.g. Marian Hassan Gedi"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Passport Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. P1048291"
                  value={passportNumber}
                  onChange={(e) => setPassportNumber(e.target.value)}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Passport Expiry Date
                </label>
                <input
                  type="date"
                  value={passportExpiry}
                  onChange={(e) => setPassportExpiry(e.target.value)}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Passport Nationality
                </label>
                <select
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                >
                  <option value="Somali">Somalia</option>
                  <option value="Kenyan">Kenya</option>
                  <option value="Ethiopian">Ethiopia</option>
                  <option value="Djiboutian">Djibouti</option>
                  <option value="UK/US Diaspora">UK / US / European Diaspora</option>
                  <option value="Other">Other Country</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  WhatsApp Contact for Visa PDF
                </label>
                <input
                  type="tel"
                  placeholder="+254 7XX XXX XXX or +252 61X"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                  required
                />
              </div>
            </div>

            {/* Document Readiness Checklist */}
            <div className="bg-[#eff4ff] p-4 rounded-2xl border border-[#dce9ff] space-y-2">
              <p className="text-[12px] font-bold text-[#0b1c30]">Required Document Verification:</p>
              <label className="flex items-center gap-2 text-[12px] text-[#44474d] cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasPassportCopy}
                  onChange={(e) => setHasPassportCopy(e.target.checked)}
                  className="w-4 h-4 text-[#006398] rounded"
                />
                <span>I have a clear color photo/scan of my passport bio-data page (valid 6+ months)</span>
              </label>

              <label className="flex items-center gap-2 text-[12px] text-[#44474d] cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasPhoto}
                  onChange={(e) => setHasPhoto(e.target.checked)}
                  className="w-4 h-4 text-[#006398] rounded"
                />
                <span>I have a passport-style selfie or photo with plain background</span>
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-12 bg-[#006398] hover:bg-[#5bb8fe] hover:text-[#00476e] text-white rounded-xl text-[14px] font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Submit Visa Application ({formatPrice(visa.priceUSD)})</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
