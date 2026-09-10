"use client";

import { useState } from "react";

export default function LSHSEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    courseLevel: "CIPS Level 4 Diploma in Procurement & Supply",
    preferredIntake: "Autumn Intake (Oct 2026)",
    educationBackground: "Bachelor Degree",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enrollment-form" className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-sky-50 to-white border border-sky-900/10 rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b73b9] bg-sky-100 px-3 py-1 rounded-full">
            Enquiry & Enrollment CTA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mt-4 text-slate-900">
            Apply for LSHS Admission & 25% Discount
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Submit your application details below to consult with our LSHS academic advisors and claim your 25% early bird tuition waiver.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#0c4a6e] text-white rounded-2xl p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#0b73b9] text-[#f4d210] rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold font-serif text-white">
              Application Submitted Successfully!
            </h3>
            <p className="text-sky-100/90 text-sm max-w-md mx-auto">
              Thank you, <strong className="text-[#f4d210]">{formData.fullName}</strong>. An LSHS admissions officer will contact you at <strong className="text-[#f4d210]">{formData.phone}</strong> with your CIPS prospectus and fee structure.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#f4d210] hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
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
                  placeholder="e.g. Mahfuzur Rahman"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b73b9] bg-white text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+880 1906-896326"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b73b9] bg-white text-slate-900 text-sm"
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
                  placeholder="student@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b73b9] bg-white text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Academic Background
                </label>
                <select
                  value={formData.educationBackground}
                  onChange={(e) => setFormData({ ...formData, educationBackground: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b73b9] bg-white text-slate-900 text-sm"
                >
                  <option value="HSC / A-Levels">HSC / A-Levels</option>
                  <option value="Bachelor Degree">Bachelor Degree / Honours</option>
                  <option value="Master Degree">Master Degree / MBA</option>
                  <option value="Working Professional">Working Supply Chain Professional</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Target Course Level *
                </label>
                <select
                  value={formData.courseLevel}
                  onChange={(e) => setFormData({ ...formData, courseLevel: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b73b9] bg-white text-slate-900 text-sm font-medium"
                >
                  <option value="CIPS Level 2 Certificate">CIPS Level 2 Certificate</option>
                  <option value="CIPS Level 3 Advanced Certificate">CIPS Level 3 Advanced Certificate</option>
                  <option value="CIPS Level 4 Diploma in Procurement & Supply">CIPS Level 4 Diploma (Most Popular)</option>
                  <option value="CIPS Level 5 Advanced Diploma">CIPS Level 5 Advanced Diploma</option>
                  <option value="CIPS Level 6 Professional Diploma (MCIPS)">CIPS Level 6 Professional Diploma (MCIPS)</option>
                  <option value="Hospitality & Tourism Management">Diploma in Hospitality & Tourism</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Preferred Exam Intake
                </label>
                <select
                  value={formData.preferredIntake}
                  onChange={(e) => setFormData({ ...formData, preferredIntake: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b73b9] bg-white text-slate-900 text-sm font-medium"
                >
                  <option value="Autumn Intake (Oct 2026)">Autumn Intake (October 2026)</option>
                  <option value="Winter Intake (Jan 2027)">Winter Intake (January 2027)</option>
                  <option value="Spring Intake (May 2027)">Spring Intake (May 2027)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Additional Questions / Sponsorship Notes
              </label>
              <textarea
                rows={3}
                placeholder="Specify employer sponsorship details, installment payment queries, or weekend class preferences..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0b73b9] bg-white text-slate-900 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#0c4a6e] hover:bg-[#0b73b9] text-white font-bold text-sm uppercase tracking-wider shadow-lg transition-all hover:scale-[1.01]"
            >
              Submit Admission Application & Claim 25% OFF
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
