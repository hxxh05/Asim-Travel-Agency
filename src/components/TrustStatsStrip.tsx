import React from 'react';

export const TrustStatsStrip: React.FC = () => {
  return (
    <section className="w-full bg-white py-8 border-b border-[#dce9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#eff4ff] flex items-center justify-center flex-shrink-0 text-[#006398]">
            <span className="material-symbols-outlined text-[28px]">flight</span>
          </div>
          <div>
            <p className="font-extrabold text-[20px] lg:text-[22px] text-[#0b1c30] leading-tight">100+ Airlines</p>
            <p className="text-[12px] font-semibold text-[#44474d]">Global Ticketing GDS</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#eff4ff] flex items-center justify-center flex-shrink-0 text-[#006398]">
            <span className="material-symbols-outlined text-[28px]">verified_user</span>
          </div>
          <div>
            <p className="font-extrabold text-[20px] lg:text-[22px] text-[#0b1c30] leading-tight">99.8%</p>
            <p className="text-[12px] font-semibold text-[#44474d]">Visa Approval Rate</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#eff4ff] flex items-center justify-center flex-shrink-0 text-[#006398]">
            <span className="material-symbols-outlined text-[28px]">mosque</span>
          </div>
          <div>
            <p className="font-extrabold text-[20px] lg:text-[22px] text-[#0b1c30] leading-tight">5-Star</p>
            <p className="text-[12px] font-semibold text-[#44474d]">Makkah &amp; Madinah Hotels</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#eff4ff] flex items-center justify-center flex-shrink-0 text-[#006398]">
            <span className="material-symbols-outlined text-[28px]">support_agent</span>
          </div>
          <div>
            <p className="font-extrabold text-[20px] lg:text-[22px] text-[#0b1c30] leading-tight">24/7 Desk</p>
            <p className="text-[12px] font-semibold text-[#44474d]">Nairobi &amp; Mogadishu Hubs</p>
          </div>
        </div>
      </div>
    </section>
  );
};
