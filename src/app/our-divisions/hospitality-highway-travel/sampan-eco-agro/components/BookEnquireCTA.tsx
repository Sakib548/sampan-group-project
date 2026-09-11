"use client";

import { useState } from "react";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaFacebook, 
  FaCheckCircle, 
  FaTimes, 
  FaEnvelope, 
  FaUser, 
  FaUsers, 
  FaCalendarAlt,
  FaLeaf,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function BookEnquireCTA({ onOpenBookingWidget }: { onOpenBookingWidget?: () => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
    }, 2500);
  };

  return (
    <section id="book-enquire-cta" className="py-20 bg-[#173326] text-white relative overflow-hidden border-b border-white/10">
      
      {/* Glow Backdrops */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-[#b9e583]/15 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 bg-[#2f6b45]/25 rounded-full blur-[120px]" />

      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="border border-[#b9e583]/30 bg-[#0c1c14]/90 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          {/* Top Leaf Accent Line */}
          <div className="absolute top-0 left-0 h-1.5 w-full bg-[#b9e583]" />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading & Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 border border-[#b9e583]/40 bg-[#b9e583]/15 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#b9e583]">
                <FaLeaf className="text-xs" />
                <span>Plan Your Visit</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
                Connect with <br />
                <span className="font-semibold text-[#b9e583]">Sampan Eco &amp; Agro Resort</span>
              </h2>

              <p className="text-base text-white/80 leading-relaxed max-w-xl font-normal">
                Whether you are planning a relaxing weekend in a lakeview cottage, an open-air lakeside dining outing, 
                or a family day trip, our team is happy to assist you with reservations and directions.
              </p>

              {/* Verified Location Box */}
              <div className="p-4 border border-[#b9e583]/30 bg-black/40 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#b9e583] uppercase tracking-wider">
                  <FaMapMarkerAlt />
                  <span>Resort Address</span>
                </div>
                <p className="text-sm font-medium text-white">
                  Joydebpur, Boroga, Borice, Alphadanga-7870, Faridpur, Bangladesh
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-white/80">
                  <FaCheckCircle className="text-[#b9e583]" />
                  <span>Direct Hotline</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <FaCheckCircle className="text-[#b9e583]" />
                  <span>WhatsApp Concierge</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <FaCheckCircle className="text-[#b9e583]" />
                  <span>Official Facebook Page</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Quick Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-3 bg-[#b9e583] hover:bg-[#a6db6c] py-4 px-6 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0c1c14] transition-all duration-300 shadow-xl shadow-[#b9e583]/20 cursor-pointer"
              >
                <FaEnvelope className="text-base" />
                <span>Send Quick Inquiry Message</span>
              </button>

              <a
                href="https://www.facebook.com/sampanecoandagro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#166fe5] py-4 px-6 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-md cursor-pointer"
              >
                <FaFacebook className="text-base" />
                <span>Visit Official Facebook Page</span>
              </a>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="tel:+8801929918408"
                  className="inline-flex items-center justify-center gap-2 border border-[#b9e583]/40 bg-[#b9e583]/10 hover:bg-[#b9e583]/20 py-3.5 px-4 font-mono text-xs font-bold uppercase tracking-wider text-[#b9e583] transition-colors"
                >
                  <FaPhoneAlt className="text-xs" />
                  <span>+880 1929-918408</span>
                </a>

                <a
                  href="https://wa.me/8801929918408?text=Hello%20Sampan%20Eco%20%26%20Agro%20Resort,%20I%20would%20like%20to%20inquire%20about%20a%20visit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] py-3.5 px-4 font-mono text-xs font-bold uppercase tracking-wider text-black transition-colors"
                >
                  <FaWhatsapp className="text-base text-black" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-[#0c1c14] border border-[#b9e583]/50 w-full max-w-lg p-8 relative text-white shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <FaCheckCircle className="text-5xl text-[#b9e583] mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                <p className="text-xs text-white/70">
                  Our team will contact you via phone or WhatsApp shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <span className="font-mono text-xs text-[#b9e583] uppercase tracking-wider">Direct Inquiry</span>
                  <h3 className="text-xl font-bold text-white">Sampan Eco &amp; Agro Resort</h3>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase text-white/70">Full Name</label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3.5 text-white/40 text-xs" />
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      className="w-full bg-black/40 border border-white/20 pl-9 pr-4 py-2.5 text-xs text-white placeholder-white/40 focus:border-[#b9e583] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-mono uppercase text-white/70">Phone Number</label>
                    <div className="relative">
                      <FaPhoneAlt className="absolute left-3 top-3.5 text-white/40 text-xs" />
                      <input
                        type="tel"
                        required
                        placeholder="+880 1..."
                        className="w-full bg-black/40 border border-white/20 pl-9 pr-4 py-2.5 text-xs text-white placeholder-white/40 focus:border-[#b9e583] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-mono uppercase text-white/70">Guest Count</label>
                    <div className="relative">
                      <FaUsers className="absolute left-3 top-3.5 text-white/40 text-xs" />
                      <input
                        type="number"
                        min="1"
                        defaultValue="2"
                        className="w-full bg-black/40 border border-white/20 pl-9 pr-4 py-2.5 text-xs text-white placeholder-white/40 focus:border-[#b9e583] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase text-white/70">Inquiry Type</label>
                  <select className="w-full bg-[#10251b] border border-white/20 px-3 py-2.5 text-xs text-white focus:border-[#b9e583] focus:outline-none">
                    <option>Overnight Cottage Stay</option>
                    <option>Day Visit &amp; Lakeside Dining</option>
                    <option>Family Weekend Getaway</option>
                    <option>Group / Corporate Outing</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase text-white/70">Preferred Date</label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-3.5 text-white/40 text-xs" />
                    <input
                      type="date"
                      className="w-full bg-black/40 border border-white/20 pl-9 pr-4 py-2.5 text-xs text-white focus:border-[#b9e583] focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#b9e583] hover:bg-[#a6db6c] py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0c1c14] transition-all cursor-pointer shadow-lg mt-4"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
