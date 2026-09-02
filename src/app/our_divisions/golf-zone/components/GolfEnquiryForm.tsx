"use client";

import { useState } from "react";

interface GolfEnquiryFormProps {
  title?: string;
  subtitle?: string;
  projectName: string;
  packageOptions?: string[];
}

export default function GolfEnquiryForm({
  title = "Pre-Enrollment & VIP Inquiry",
  subtitle = "Register your interest early to unlock priority membership packages, founding member discounts, and VIP preview access.",
  projectName,
  packageOptions = [
    "PGA Academy 1-on-1 Coaching",
    "Junior Golf Development Program",
    "Corporate Bay Membership",
    "Toptracer Bay VIP Booking",
    "General Membership Inquiry",
  ],
}: GolfEnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    selectedPackage: packageOptions[0],
    handicapLevel: "Beginner",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquiry-form" className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-emerald-50 to-white border border-emerald-900/10 rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Enquiry & Enrollment CTA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-4 text-[#091e15]">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {submitted ? (
          <div className="bg-emerald-900 text-white rounded-2xl p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-700 text-amber-400 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold font-serif text-white">
              Thank You for Registering!
            </h3>
            <p className="text-emerald-100/90 text-sm max-w-md mx-auto">
              Your inquiry for <strong className="text-amber-400">{projectName}</strong> has been received. Our Golf Academy & Concierge team will reach out to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Submit Another Inquiry
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
                  placeholder="e.g. Tanvir Ahmed"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-slate-900 text-sm"
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
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-slate-900 text-sm"
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
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Experience Level
                </label>
                <select
                  value={formData.handicapLevel}
                  onChange={(e) => setFormData({ ...formData, handicapLevel: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-slate-900 text-sm"
                >
                  <option value="Beginner">First Time / Complete Beginner</option>
                  <option value="Intermediate">Intermediate (Handicap 15-28)</option>
                  <option value="Advanced">Advanced (Single-Digit Handicap)</option>
                  <option value="Junior">Junior Golfer (Under 18)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Preferred Program / Interest *
              </label>
              <select
                value={formData.selectedPackage}
                onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-slate-900 text-sm font-medium"
              >
                {packageOptions.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Additional Requirements / Notes
              </label>
              <textarea
                rows={3}
                placeholder="Specify preferred clinic times, custom club fitting queries, or corporate group sizes..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-slate-900 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#091e15] hover:bg-emerald-900 text-white font-bold text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-[1.01]"
            >
              Submit Pre-Enrollment Enquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
