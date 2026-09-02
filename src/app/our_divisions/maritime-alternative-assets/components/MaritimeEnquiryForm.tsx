"use client";

import { useState } from "react";

export default function MaritimeEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    shareUnits: "1 Unit (500,000 BDT)",
    investorType: "Individual Investor",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquiry-form" className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-cyan-50 to-white border border-cyan-900/10 rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0077b6] bg-cyan-100 px-3 py-1 rounded-full">
            CRM-Linked Investment Enquiry
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-4 text-[#07162c]">
            Pre-Register Vessel Share Tranche
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Submit your share reservation request below to receive the complete maritime prospectus and consult with a Sampan Maritime Asset Advisor.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#07162c] text-white rounded-2xl p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#0077b6] text-amber-400 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold font-serif text-white">
              Investment Reservation Received!
            </h3>
            <p className="text-cyan-100/90 text-sm max-w-md mx-auto">
              Thank you, <strong className="text-amber-400">{formData.fullName}</strong>. Your CRM ticket for <strong className="text-amber-400">{formData.shareUnits}</strong> has been logged. Our Maritime Asset Desk will call you at <strong className="text-amber-400">{formData.phone}</strong>.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Submit Another Reservation
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
                  placeholder="e.g. Architect Nazmul Huda"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0077b6] bg-white text-slate-900 text-sm"
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
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0077b6] bg-white text-slate-900 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="investor@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0077b6] bg-white text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Investor Classification
                </label>
                <select
                  value={formData.investorType}
                  onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0077b6] bg-white text-slate-900 text-sm"
                >
                  <option value="Individual Investor">Individual High Net-Worth Investor</option>
                  <option value="Corporate / Enterprise">Corporate Entity / Business Trust</option>
                  <option value="Institutional Asset Manager">Institutional Asset Manager</option>
                  <option value="NRB Investor">NRB (Non-Resident Bangladeshi) Investor</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Target Share Unit Allocation *
              </label>
              <select
                value={formData.shareUnits}
                onChange={(e) => setFormData({ ...formData, shareUnits: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0077b6] bg-white text-slate-900 text-sm font-medium"
              >
                <option value="1 Unit (500,000 BDT)">1 Unit — 500,000 BDT</option>
                <option value="2 Units (1,000,000 BDT)">2 Units — 1,000,000 BDT</option>
                <option value="5 Units (2,500,000 BDT)">5 Units — 2,500,000 BDT (VIP Tranche)</option>
                <option value="10+ Units (Institutional Block)">10+ Units — Institutional Block Allocation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Investment Notes / Portfolio Queries
              </label>
              <textarea
                rows={3}
                placeholder="Specify preferred dividend payout account, secondary resale conditions, or corporate entity title..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0077b6] bg-white text-slate-900 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#07162c] hover:bg-[#0077b6] text-white font-bold text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-[1.01]"
            >
              Submit Share Reservation to CRM Desk
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
