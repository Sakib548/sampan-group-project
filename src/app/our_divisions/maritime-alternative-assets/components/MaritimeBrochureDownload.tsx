"use client";

import { useState } from "react";

export default function MaritimeBrochureDownload() {
  const [downloaded, setDownloaded] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f8fafc] text-[#183b2b]">
      <div className="max-w-5xl mx-auto bg-[#07162c] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-cyan-800/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-cyan-950 px-3.5 py-1 rounded-full border border-cyan-700">
              Official Investment Prospectus
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white leading-tight">
              Download Sampan Floating Pearl Maritime Prospectus PDF
            </h2>
            <p className="text-sm sm:text-base text-cyan-100/80 leading-relaxed">
              Get the complete 24-page confidential investment memo containing financial forecasts, charter rate models, vessel blueprints, and deed registration legal contracts.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-medium text-cyan-200">
              <span>📄 24-Page Financial Model</span>
              <span>🚢 Vessel Deck Plans & Specs</span>
              <span>⚓ Dividend Forecast Matrix</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-cyan-950/60 p-6 rounded-2xl border border-cyan-700/40">
            {downloaded ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-amber-400 text-slate-950 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-white font-serif">
                  Prospectus Dispatched!
                </h3>
                <p className="text-xs text-cyan-200">
                  We have sent the PDF prospectus to <strong className="text-amber-400">{emailInput}</strong>.
                </p>
                <button
                  onClick={() => setDownloaded(false)}
                  className="mt-2 text-xs font-bold text-amber-400 underline"
                >
                  Enter another email address
                </button>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="space-y-4">
                <label className="block text-xs font-bold text-cyan-200 uppercase tracking-wider">
                  Enter Email to Receive Prospectus *
                </label>
                <input
                  type="email"
                  required
                  placeholder="investor@example.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#07162c] border border-cyan-700 text-white text-xs focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
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
