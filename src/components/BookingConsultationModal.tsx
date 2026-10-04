import React, { useState } from 'react';

interface BookingConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingConsultationModal: React.FC<BookingConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [branch, setBranch] = useState('Nairobi South C Office');
  const [service, setService] = useState('Flight Ticketing & Rebooking');
  const [date, setDate] = useState('2025-04-20');
  const [time, setTime] = useState('10:30 AM');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+254 ');
  const [notes, setNotes] = useState('');
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `ASM-CONS-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedCode(code);
  };

  const handleReset = () => {
    setSubmittedCode(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#dce9ff]">
        {/* Header */}
        <div className="bg-[#0d1c32] text-white p-6 relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#006398] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            </div>
            <div>
              <h3 className="font-bold text-[18px] text-white">Schedule Travel Consultation</h3>
              <p className="text-[12px] text-[#76849f]">Connect with senior desk officers in Nairobi or Mogadishu</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content */}
        {submittedCode ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h4 className="text-[20px] font-extrabold text-[#0b1c30]">Consultation Confirmed!</h4>
            <p className="text-[13px] text-[#44474d] max-w-sm mx-auto">
              Your appointment request has been scheduled with the <strong className="text-[#0b1c30]">{branch}</strong> travel desk.
            </p>

            <div className="bg-[#eff4ff] p-4 rounded-2xl border border-[#dce9ff] text-left text-[13px] space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#44474d]">Booking Reference:</span>
                <span className="font-mono font-extrabold text-[#006398]">{submittedCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#44474d]">Date &amp; Time:</span>
                <span className="font-bold text-[#0b1c30]">{date} at {time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#44474d]">Service:</span>
                <span className="font-semibold text-[#0b1c30]">{service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#44474d]">Consultant Contact:</span>
                <span className="font-bold text-[#006398]">+254 795 227 757</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/254795227757?text=Hello%20Asim%20Travel,%20I%20have%20scheduled%20consultation%20ref:%20${submittedCode}%20for%20${encodeURIComponent(service)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#25d366] text-white rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 hover:opacity-95 shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Open in WhatsApp</span>
              </a>
              <button
                onClick={handleReset}
                className="py-3 px-6 bg-[#eff4ff] text-[#0b1c30] hover:bg-[#dce9ff] rounded-xl text-[14px] font-bold transition-colors cursor-pointer"
                type="button"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Preferred Hub
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                >
                  <option>Nairobi South C Office</option>
                  <option>Eastleigh 1st Ave Hub (Nairobi)</option>
                  <option>Mogadishu KM4 Headquarters</option>
                  <option>Virtual / WhatsApp Desk</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Service Topic
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                >
                  <option>Flight Ticketing &amp; Rebooking</option>
                  <option>Umrah &amp; Hajj Pilgrimage 2025</option>
                  <option>Dubai Express Tourist Visa</option>
                  <option>Kenya eTA Rapid Approval</option>
                  <option>Corporate &amp; Group Travel</option>
                  <option>Baggage &amp; Transit Consultation</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Appointment Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                  Preferred Time Window
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                >
                  <option>09:00 AM – 11:00 AM</option>
                  <option>11:00 AM – 01:00 PM</option>
                  <option>02:00 PM – 04:00 PM</option>
                  <option>04:00 PM – 06:30 PM</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                Your Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. Mahad Ibrahim Warsame"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                WhatsApp / Mobile Number
              </label>
              <input
                type="tel"
                placeholder="+254 7XX XXX XXX or +252 61X XXX XXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-11 px-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[11px] font-bold text-[#0b1c30] uppercase tracking-wider">
                Specific Requests or Details (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Number of travelers, preferred dates, passport types..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3 bg-[#eff4ff] text-[#0b1c30] rounded-xl text-[13px] font-medium border border-[#dce9ff] focus:outline-none focus:ring-2 focus:ring-[#006398]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-12 bg-[#006398] hover:bg-[#5bb8fe] hover:text-[#00476e] text-white rounded-xl text-[14px] font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Confirm Consultation Appointment</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
