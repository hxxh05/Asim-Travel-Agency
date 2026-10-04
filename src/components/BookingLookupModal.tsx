import React, { useState } from 'react';

interface BookingLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingLookupModal: React.FC<BookingLookupModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [pnrInput, setPnrInput] = useState('');
  const [searched, setSearched] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  const samplePnrs = ['ASM-EK-7203', 'ASM-QR-1336', 'ASM-FZ-6520', 'ASM-VISA-8821'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#dce9ff]">
        {/* Header */}
        <div className="bg-[#0d1c32] text-white p-6 relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#006398] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[20px]">manage_search</span>
            </div>
            <div>
              <h3 className="font-bold text-[18px] text-white">Booking &amp; PNR Status Lookup</h3>
              <p className="text-[12px] text-[#76849f]">Verify ticket confirmation and visa dispatch</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-6 space-y-4">
          <form onSubmit={handleSearch} className="space-y-3">
            <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
              Enter 6-to-12 Character PNR or Reference Code
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={pnrInput}
                onChange={(e) => {
                  setPnrInput(e.target.value.toUpperCase());
                  setSearched(false);
                }}
                placeholder="e.g. ASM-EK-7203"
                className="flex-1 h-11 px-3 bg-[#eff4ff] text-[#0b1c30] font-mono text-[14px] uppercase font-bold rounded-xl border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                required
              />
              <button
                type="submit"
                className="px-5 bg-[#006398] hover:bg-[#5bb8fe] hover:text-[#00476e] text-white text-[13px] font-bold rounded-xl transition-all shadow-sm cursor-pointer"
              >
                Track
              </button>
            </div>

            {/* Quick Demo Pins */}
            <div className="flex items-center gap-1.5 flex-wrap text-[11px] text-[#44474d]">
              <span>Sample PNRs:</span>
              {samplePnrs.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => {
                    setPnrInput(p);
                    setSearched(true);
                  }}
                  className="px-2 py-0.5 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#006398] font-mono rounded cursor-pointer transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>
          </form>

          {searched && (
            <div className="bg-[#eff4ff] rounded-2xl p-4 border border-[#dce9ff] space-y-3 animate-in fade-in duration-150">
              <div className="flex items-center justify-between border-b border-[#dce9ff] pb-2">
                <div>
                  <span className="text-[10px] text-[#76849f] uppercase font-bold">Reference</span>
                  <p className="font-mono text-[16px] font-extrabold text-[#006398]">
                    {pnrInput || 'ASM-EK-7203'}
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Confirmed &amp; Valid
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[12px]">
                <div>
                  <span className="text-[#76849f]">Passenger / Client:</span>
                  <p className="font-bold text-[#0b1c30]">A. Warsame (Somali)</p>
                </div>
                <div>
                  <span className="text-[#76849f]">Flight / Desk:</span>
                  <p className="font-bold text-[#0b1c30]">Emirates EK 720 (NBO → DXB)</p>
                </div>
                <div>
                  <span className="text-[#76849f]">Baggage Status:</span>
                  <p className="font-bold text-[#0b1c30]">2 x 23kg Checked</p>
                </div>
                <div>
                  <span className="text-[#76849f]">Ticketing Office:</span>
                  <p className="font-bold text-[#006398]">Nairobi South C Desk</p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#dce9ff] flex items-center justify-between text-[12px]">
                <span className="text-[#44474d]">Need urgent rebooking or schedule changes?</span>
                <a
                  href={`https://wa.me/254795227757?text=Hello%20Asim%20Travel,%20I%20am%20inquiring%20about%20my%20booking%20ref:%20${pnrInput || 'ASM-EK-7203'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#006398] hover:underline"
                >
                  WhatsApp Agent
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
