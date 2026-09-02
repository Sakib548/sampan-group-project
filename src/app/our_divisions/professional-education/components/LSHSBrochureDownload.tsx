"use client";

import { useState } from "react";

export default function LSHSBrochureDownload() {
  const [downloaded, setDownloaded] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  return (
    <section id="brochure" className="py-20 px-6 sm:px-12 lg:px-20 bg-[#0c4a6e] text-white">
      <div className="max-w-5xl mx-auto bg-sky-950/60 border border-sky-800/40 rounded-3xl p-8 sm:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f4d210] bg-sky-900/80 px-3.5 py-1 rounded-full border border-sky-700">
              Download Official Prospectus
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white leading-tight">
              Get the LSHS CIPS 2026/2027 Course Brochure
            </h2>
            <p className="text-sm sm:text-base text-sky-100/80 leading-relaxed">
              Download the complete 28-page prospectus containing exam modules, MCIPS pathways, class schedules, and tuition waiver details.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-medium text-sky-200">
              <span>📄 28-Page PDF Guide</span>
              <span>🎓 CIPS Level 2 - 6 Syllabus</span>
              <span>🏷 25% Tuition Waiver Details</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-sky-900/50 p-6 rounded-2xl border border-sky-700/40">
            {downloaded ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-[#f4d210] text-slate-950 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-white font-serif">
                  Brochure Sent to Your Email!
                </h3>
                <p className="text-xs text-sky-200">
                  We have dispatched the PDF prospectus to <strong className="text-[#f4d210]">{emailInput}</strong>.
                </p>
                <button
                  onClick={() => setDownloaded(false)}
                  className="mt-2 text-xs font-bold text-[#f4d210] underline"
                >
                  Enter another email address
                </button>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="space-y-4">
                <label className="block text-xs font-bold text-sky-200 uppercase tracking-wider">
                  Enter Email to Receive Brochure *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-sky-950 border border-sky-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#f4d210]"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#f4d210] hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  Download Prospectus PDF ↓
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
