"use client";

import { useState } from "react";

export default function PartyCenterDateCheckForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    eventDate: "",
    eventType: "Wedding / Reception",
    guestCount: "250 - 300 Guests",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking-form" className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f8faf6] text-[#183b2b]">
      <div className="max-w-4xl mx-auto bg-white border border-amber-900/10 rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
            Online Date-Check & Booking Request
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-4 text-slate-900">
            Check Event Date & Request Booking
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Fill in your event details below. Our banquet manager will verify date availability and provide customized per-head pricing within 2 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#1e1b18] text-white rounded-2xl p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-amber-400 text-slate-950 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold font-serif text-white">
              Booking Enquiry Submitted!
            </h3>
            <p className="text-amber-100/90 text-sm max-w-md mx-auto">
              Thank you <strong className="text-amber-400">{formData.fullName}</strong>. We have logged your request for <strong className="text-amber-400">{formData.eventType}</strong> on <strong className="text-amber-400">{formData.eventDate}</strong>. Our manager will call <strong className="text-amber-400">{formData.phone}</strong> shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Submit Another Date Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Mahmudul Hasan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+880 1700-000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-slate-900 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Preferred Event Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-slate-900 text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Event Type *
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-slate-900 text-sm font-medium"
                >
                  <option value="Wedding / Reception">Wedding / Reception</option>
                  <option value="Corporate Seminar / Dinner">Corporate Seminar / Dinner</option>
                  <option value="Birthday / Anniversary">Birthday / Anniversary</option>
                  <option value="Engagement / Holud">Engagement / Gaye Holud</option>
                  <option value="Catering Only Order">Catering Only Service</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Estimated Guest Count *
                </label>
                <select
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-slate-900 text-sm font-medium"
                >
                  <option value="50 - 100 Guests">50 - 100 Guests</option>
                  <option value="150 - 250 Guests">150 - 250 Guests</option>
                  <option value="250 - 350 Guests">250 - 350 Guests</option>
                  <option value="400 - 500+ Guests">400 - 500+ Guests (Full Hall)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Special Requests / Custom Menu Preferences
              </label>
              <textarea
                rows={3}
                placeholder="Specify preferred feast items, stage decor theme, or catering delivery location..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-slate-900 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#1e1b18] hover:bg-amber-700 text-white font-bold text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-[1.01]"
            >
              Submit Date Check & Request Quote
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
