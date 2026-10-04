import React from 'react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#eff4ff] border-y border-[#dce9ff]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[12px] text-[#006398] uppercase tracking-widest font-bold">
            Pilgrim &amp; Traveler Voices
          </span>
          <h2 className="text-[26px] lg:text-[32px] font-extrabold text-[#0b1c30] uppercase tracking-tight mt-1">
            Words from our Valued Guests
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-2xl shadow-xs border border-[#dce9ff]/70 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-1 text-[#c76c00] mb-3">
                  {[...Array(t.stars)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[18px]">
                      star
                    </span>
                  ))}
                </div>
                <p className="text-[14px] text-[#44474d] italic mb-5 leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#eff4ff]">
                <div className="w-9 h-9 rounded-full bg-[#cce5ff] text-[#006398] flex items-center justify-center font-bold text-[13px]">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[14px] text-[#0b1c30] font-bold leading-tight">{t.author}</p>
                  <p className="text-[11px] text-[#44474d]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
