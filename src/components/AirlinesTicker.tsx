import React from 'react';

export const AirlinesTicker: React.FC = () => {
  const airlines = [
    'Qatar Airways',
    'Emirates',
    'Ethiopian Airlines',
    'flydubai',
    'Turkish Airlines',
    'Kenya Airways',
  ];

  return (
    <section className="w-full bg-[#eff4ff] py-12 border-y border-[#dce9ff]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <p className="text-[12px] font-bold text-[#44474d] uppercase tracking-widest mb-6">
          Authorized Direct Ticketing For World-Class Carriers
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-85">
          {airlines.map((airline) => (
            <div
              key={airline}
              className="flex items-center gap-2.5 text-[17px] font-bold text-[#0b1c30] tracking-tight hover:text-[#006398] transition-colors"
            >
              <span className="material-symbols-outlined text-[#006398] text-[20px]">flight</span>
              <span>{airline}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
