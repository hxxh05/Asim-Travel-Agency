import React from 'react';

export const InstantCtaBanner: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#0d1c32] text-white relative overflow-hidden">
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#006398] opacity-20 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-3 text-center lg:text-left">
          <span className="inline-block bg-[#006398] text-white px-3.5 py-1 rounded-full text-[12px] uppercase font-bold tracking-wider">
            Instant Booking Concierge
          </span>
          <h2 className="text-[28px] lg:text-[40px] font-extrabold text-white tracking-tight uppercase leading-tight">
            Ready to Fly or Perform Umrah?
          </h2>
          <p className="text-[15px] lg:text-[16px] text-[#76849f] max-w-xl leading-relaxed">
            Connect directly with our senior travel ticketing officers in Nairobi or Mogadishu right now. Immediate price quotes and fast approvals.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            className="w-full sm:w-auto px-8 py-4 bg-[#006398] text-white rounded-2xl text-[15px] font-bold flex items-center justify-center gap-3 hover:bg-[#5bb8fe] hover:text-[#00476e] transition-all shadow-lg"
            href="https://wa.me/254795227757?text=Hello%20Asim%20Travel,%20I%20would%20like%20to%20book%20a%20flight%20or%20travel%20service"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[24px]">chat</span>
            <span>WhatsApp Nairobi Desk (+254 795 227 757)</span>
          </a>

          <a
            className="w-full sm:w-auto px-6 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl text-[15px] font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
            href="tel:+252615098954"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            <span>Mogadishu Line</span>
          </a>
        </div>
      </div>
    </section>
  );
};
