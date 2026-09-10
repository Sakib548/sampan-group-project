"use client";

import { useState } from "react";

interface ResortPreLaunchWaitlistProps {
  title?: string;
  subtitle?: string;
  projectName?: string;
}

export default function ResortPreLaunchWaitlist({
  title = "Pre-Launch Waitlist & Priority Signup",
  subtitle = "Register your interest today to lock in founding member pricing, VIP preview stay invitations, and priority golf tee-time allocations.",
  projectName = "Sampan Agro & Golf Resort",
}: ResortPreLaunchWaitlistProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    interestedCategory: "Founding Family Share",
    guestCount: "4 Family Members",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="waitlist-form" className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-emerald-50 to-white border border-emerald-900/10 rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Pre-Launch Priority Waitlist
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-4 text-[#071d13]">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#071d13] text-white rounded-2xl p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-800 text-amber-400 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold font-serif text-white">
              Waitlist Pre-Registration Confirmed!
            </h3>
            <p className="text-emerald-100/90 text-sm max-w-md mx-auto">
              Your priority code for <strong className="text-amber-400">{projectName}</strong> is <code className="bg-emerald-950 px-2 py-1 rounded font-mono text-amber-300">SAGR-2026-VIP</code>. Our resort concierge will reach out to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Submit Another Registration
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
                  placeholder="e.g. Chowdhury Al-Mamun"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+880 1700-000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white text-slate-900 text-sm"
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
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Interest Category *
                </label>
                <select
                  value={formData.interestedCategory}
                  onChange={(e) => setFormData({ ...formData, interestedCategory: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white text-slate-900 text-sm font-medium"
                >
                  <option value="Founding Family Share">Founding Family Share (Lifetime)</option>
                  <option value="Founding Individual Share">Founding Individual Share</option>
                  <option value="Corporate Trustee Share">Corporate Trustee Share</option>
                  <option value="VVIP Villa Day Pass">VVIP Villa Weekend Stay</option>
                  <option value="General Resort Visitor">General Resort Visitor</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Special Requirements / VIP Request
              </label>
              <textarea
                rows={3}
                placeholder="Specify preferred villa layout, golf handicap status, or corporate event dates..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white text-slate-900 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#071d13] hover:bg-emerald-900 text-white font-bold text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-[1.01]"
            >
              Submit Pre-Launch Waitlist Signup
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
