import React from 'react';
import { NavigationTab } from '../types/travel';

interface FooterProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#eff4ff] text-[#44474d] border-t border-[#dce9ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#dce9ff]">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#0d1c32] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#5bb8fe] text-[20px]">flight_takeoff</span>
              </div>
              <span className="font-extrabold text-[20px] text-[#0b1c30] tracking-tight uppercase">
                Asim Travel
              </span>
            </div>
            <p className="text-[13px] leading-relaxed text-[#44474d]">
              Premier East African and international travel agency specializing in flight ticketing, holy pilgrimage logistics, and corporate visa clearance across Nairobi and Mogadishu.
            </p>
            <div className="flex items-center gap-2 text-[#006398] text-[12px] font-bold">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <span>Licensed by KCAA, KATA &amp; IATA</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-3">
            <h3 className="font-bold text-[16px] text-[#0b1c30]">Quick Navigation</h3>
            <div className="flex flex-col space-y-2 text-[14px]">
              <button
                onClick={() => onNavigate('flights')}
                className="text-left text-[#44474d] hover:text-[#0b1c30] transition-colors cursor-pointer"
                type="button"
              >
                Flight Search Portal
              </button>
              <button
                onClick={() => onNavigate('umrah')}
                className="text-left text-[#44474d] hover:text-[#0b1c30] transition-colors cursor-pointer"
                type="button"
              >
                Umrah &amp; Hajj Packages
              </button>
              <button
                onClick={() => onNavigate('visas')}
                className="text-left text-[#44474d] hover:text-[#0b1c30] transition-colors cursor-pointer"
                type="button"
              >
                Visa &amp; Entry Permits
              </button>
              <button
                onClick={() => onNavigate('safaris')}
                className="text-left text-[#44474d] hover:text-[#0b1c30] transition-colors cursor-pointer"
                type="button"
              >
                East Africa Holiday Safaris
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-left text-[#44474d] hover:text-[#0b1c30] transition-colors cursor-pointer"
                type="button"
              >
                Branch Locator &amp; Desk
              </button>
            </div>
          </div>

          {/* Column 3: Regional Hubs */}
          <div className="space-y-3">
            <h3 className="font-bold text-[16px] text-[#0b1c30]">Regional Hubs</h3>
            <div className="space-y-4 text-[13px]">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#006398] text-[20px] mt-0.5">apartment</span>
                <div>
                  <p className="font-bold text-[14px] text-[#0b1c30]">Nairobi Operations</p>
                  <p className="text-[#44474d] leading-snug">Muhoho Avenue, South C &amp; Eastleigh 1st Ave, Nairobi, Kenya</p>
                  <a className="text-[#006398] font-bold hover:underline" href="tel:+254795227757">
                    +254 795 227 757
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#006398] text-[20px] mt-0.5">apartment</span>
                <div>
                  <p className="font-bold text-[14px] text-[#0b1c30]">Mogadishu Headquarters</p>
                  <p className="text-[#44474d] leading-snug">Maka Al Mukarama Road, KM4, Mogadishu, Somalia</p>
                  <a className="text-[#006398] font-bold hover:underline" href="tel:+252615098954">
                    +252 615 098 954
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: 24/7 Travel Desk & Payments */}
          <div className="space-y-3">
            <h3 className="font-bold text-[16px] text-[#0b1c30]">24/7 Travel Desk</h3>
            <p className="text-[13px] text-[#44474d]">
              Urgent re-ticketing, emergency visa dispatch, and flight delays support available round the clock.
            </p>
            <div className="bg-[#e5eeff] rounded-xl p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-[#0b1c30] text-[13px] font-bold">
                <span className="material-symbols-outlined text-[#006398] text-[18px]">support_agent</span>
                <span>Emergency Helpline</span>
              </div>
              <a className="block text-[20px] font-extrabold text-[#000000] hover:text-[#006398] transition-colors" href="tel:+254795227757">
                +254 795 227 757
              </a>
              <span className="text-[11px] font-semibold text-[#76849f]">NBO (JKIA) • MGQ (Aden Adde)</span>
            </div>

            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#76849f] mb-2">
                Secure Payments Accepted
              </p>
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#0b1c30] flex-wrap">
                <span className="px-2 py-1 bg-white rounded border border-[#dce9ff] shadow-2xs">M-PESA</span>
                <span className="px-2 py-1 bg-white rounded border border-[#dce9ff] shadow-2xs">EVC Plus</span>
                <span className="px-2 py-1 bg-white rounded border border-[#dce9ff] shadow-2xs">Visa / Master</span>
                <span className="px-2 py-1 bg-white rounded border border-[#dce9ff] shadow-2xs">Bank Wire</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#76849f]">
          <p>© 2025 Asim Travel Agency (asimtravel.net). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('contact')} className="hover:text-[#0b1c30] transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#0b1c30] transition-colors">
              Terms of Service
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#0b1c30] transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
