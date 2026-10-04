import React from 'react';

export const TrustBento: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Why Travelers Trust Us */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#006398] text-[12px] uppercase tracking-wider font-bold">
              <span className="material-symbols-outlined text-[18px]">handshake</span>
              <span>Why Travelers Trust Us</span>
            </div>

            <h2 className="text-[28px] lg:text-[40px] font-extrabold text-[#0b1c30] tracking-tight uppercase leading-snug">
              Bridging East Africa &amp; The Diaspora with Absolute Integrity
            </h2>

            <p className="text-[15px] lg:text-[16px] text-[#44474d] leading-relaxed">
              From our dual headquarters in Nairobi and Mogadishu, Asim Travel provides end-to-end travel peace of mind. We eliminate stressful airline rebooking fees, coordinate complex visa paperwork, and manage every step of sacred pilgrims journeying to the holy sanctuaries.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-xs border border-[#dce9ff]/60">
                <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#006398] flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">support_agent</span>
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0b1c30]">Direct Human Dispatch (No Bot Queues)</h4>
                  <p className="text-[13px] text-[#44474d] mt-1 leading-relaxed">
                    Instant resolution via WhatsApp or regional cell phones. When flights delay or change, our desk acts immediately on your behalf.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-xs border border-[#dce9ff]/60">
                <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#006398] flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">payments</span>
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0b1c30]">Flexible East African Payment Channels</h4>
                  <p className="text-[13px] text-[#44474d] mt-1 leading-relaxed">
                    Pay effortlessly via M-PESA (Kenya), EVC Plus (Somalia), Sahal, Zaad, international credit cards, or direct bank transfer in USD/KES.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-xs border border-[#dce9ff]/60">
                <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#006398] flex-shrink-0">
                  <span className="material-symbols-outlined text-[24px]">location_city</span>
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0b1c30]">Physical Walk-in Offices</h4>
                  <p className="text-[13px] text-[#44474d] mt-1 leading-relaxed">
                    Visit our welcoming consultants in South C / Eastleigh (Nairobi) or KM4 Maka Al Mukarama Road (Mogadishu).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dual Hub Bento Cards */}
          <div className="lg:col-span-6 space-y-6">
            {/* Hub 1: Nairobi */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-[#dce9ff]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#0d1c32] flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-[22px]">apartment</span>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#0b1c30]">Nairobi Operations Center</h3>
                    <p className="text-[12px] text-[#44474d]">Kenya • Regional Aviation Desk</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-[#dce9ff] text-[#006398] rounded-full text-[12px] font-bold">
                  Open Daily
                </span>
              </div>

              <p className="text-[14px] text-[#44474d] mb-4 leading-relaxed">
                Muhoho Avenue, South C &amp; Eastleigh 1st Avenue Business Complex, Nairobi, Kenya.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#eff4ff] text-[#0b1c30] text-[14px] font-bold hover:bg-[#dce9ff] transition-colors"
                  href="tel:+254795227757"
                >
                  <span className="material-symbols-outlined text-[#006398] text-[18px]">call</span>
                  <span>+254 795 227 757</span>
                </a>

                <a
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#006398] text-white text-[14px] font-bold hover:opacity-95 transition-all shadow-sm"
                  href="https://wa.me/254795227757"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>

            {/* Hub 2: Mogadishu */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-[#dce9ff]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#0d1c32] flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-[22px]">flight_takeoff</span>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#0b1c30]">Mogadishu Headquarters</h3>
                    <p className="text-[12px] text-[#44474d]">Somalia • Aden Adde Hub</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-[#dce9ff] text-[#006398] rounded-full text-[12px] font-bold">
                  Open Daily
                </span>
              </div>

              <p className="text-[14px] text-[#44474d] mb-4 leading-relaxed">
                KM4 Maka Al Mukarama Road, Hodan District, Mogadishu, Somalia.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#eff4ff] text-[#0b1c30] text-[14px] font-bold hover:bg-[#dce9ff] transition-colors"
                  href="tel:+252615098954"
                >
                  <span className="material-symbols-outlined text-[#006398] text-[18px]">call</span>
                  <span>+252 615 098 954</span>
                </a>

                <a
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#006398] text-white text-[14px] font-bold hover:opacity-95 transition-all shadow-sm"
                  href="https://wa.me/252615098954"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp Mogadishu</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
