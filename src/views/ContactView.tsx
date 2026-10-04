import React, { useState } from 'react';
import { BRANCH_HUBS } from '../data/mockData';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+254 ');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="w-full bg-[#f8f9ff] py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Header */}
        <div className="bg-[#0d1c32] text-white p-8 lg:p-12 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-[#006398] opacity-25 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 bg-[#006398] text-white text-[11px] font-bold uppercase tracking-wider rounded-full">
              Physical Walk-In Hubs &amp; 24/7 Virtual Desk
            </span>
            <h1 className="text-[34px] lg:text-[46px] font-extrabold tracking-tight uppercase leading-tight">
              Contact Asim Travel Desks
            </h1>
            <p className="text-[15px] text-[#76849f] leading-relaxed">
              Visit our customer centers in Nairobi (South C &amp; Eastleigh) or Mogadishu (KM4 Maka Al Mukarama Road). Our senior flight and pilgrimage consultants are ready to assist you.
            </p>
          </div>
        </div>

        {/* Dual Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BRANCH_HUBS.map((hub, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md border border-[#dce9ff] space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#0d1c32] text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-[24px]">apartment</span>
                    </div>
                    <div>
                      <h3 className="text-[20px] font-bold text-[#0b1c30]">{hub.name}</h3>
                      <p className="text-[12px] text-[#006398] font-bold">{hub.subtitle}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-[#dce9ff] text-[#006398] rounded-full text-[12px] font-bold">
                    {hub.status}
                  </span>
                </div>

                <div className="space-y-3 text-[14px] text-[#44474d] pt-2">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#006398] text-[20px] mt-0.5">location_on</span>
                    <div>
                      <p className="font-bold text-[#0b1c30]">Office Address</p>
                      <p>{hub.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#006398] text-[20px] mt-0.5">schedule</span>
                    <div>
                      <p className="font-bold text-[#0b1c30]">Opening Hours</p>
                      <p>{hub.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#006398] text-[20px] mt-0.5">badge</span>
                    <div>
                      <p className="font-bold text-[#0b1c30]">Desk Management</p>
                      <p>{hub.directStaff}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#eff4ff]">
                <a
                  href={`tel:${hub.phone.replace(/\s+/g, '')}`}
                  className="flex-1 py-3 px-4 bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <span className="material-symbols-outlined text-[#006398] text-[18px]">call</span>
                  <span>{hub.phone}</span>
                </a>
                <a
                  href={hub.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-[#25d366] hover:opacity-95 text-white rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 transition-opacity shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Inquiry Form */}
        <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-[#dce9ff] max-w-2xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <span className="text-[12px] font-bold uppercase text-[#006398] tracking-widest">
              Direct Inquiries
            </span>
            <h2 className="text-[26px] font-extrabold text-[#0b1c30]">
              Send a Message to our Travel Officers
            </h2>
            <p className="text-[14px] text-[#44474d]">
              Have a custom itinerary, group booking, or urgent passport query? Leave your message below.
            </p>
          </div>

          {sent ? (
            <div className="text-center p-8 bg-[#eff4ff] rounded-2xl border border-[#dce9ff] space-y-3">
              <span className="material-symbols-outlined text-[42px] text-emerald-600">check_circle</span>
              <h4 className="text-[20px] font-bold text-[#0b1c30]">Message Received!</h4>
              <p className="text-[13px] text-[#44474d]">
                Thank you, <strong>{name}</strong>. An Asim Travel consultant will contact your number <strong>{phone}</strong> shortly.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-3 px-5 py-2 bg-[#006398] text-white text-[13px] font-bold rounded-xl"
                type="button"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hassan Nur"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Mobile / WhatsApp Number
                </label>
                <input
                  type="tel"
                  placeholder="+254 7XX XXX XXX or +252 61X"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Inquiry Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your flight dates, Umrah family group, or visa requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-[#006398] hover:bg-[#5bb8fe] hover:text-[#00476e] text-white rounded-xl text-[14px] font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>Send Message to Travel Desk</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
