"use client";

import { useState } from "react";

export default function MaritimeFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How is my ownership in Sampan Floating Pearl legally documented?",
      a: "Each investor receives an official registered maritime equity share certificate legally recorded with the Department of Shipping Bangladesh and Sampan Group's corporate registrar.",
    },
    {
      q: "When and how are quarterly dividends distributed?",
      a: "Dividends are audited and calculated at the end of each quarter (March, June, September, December) and deposited directly into your designated bank account via Electronic Fund Transfer (EFT).",
    },
    {
      q: "Can I transfer or sell my share unit in the future?",
      a: "Yes. Share units carry full secondary market transferability after a 24-month lock-in period. Investors can sell via Sampan's investor registry or private transfer deeds.",
    },
    {
      q: "What happens during annual dry-dock maintenance?",
      a: "A dedicated 5% Dry-Dock Maintenance Reserve Fund is maintained from gross operational charter revenues, ensuring vessel classification certifications and insurance coverage remain active without diluting investor yields.",
    },
    {
      q: "Are non-resident Bangladeshis (NRBs) eligible to invest?",
      a: "Yes! NRB investors can pre-register and invest via foreign currency accounts (FC Accounts) or NITA accounts with full profit repatriation rights.",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0077b6] bg-cyan-100 px-3.5 py-1 rounded-full">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#07162c]">
            Maritime Asset Investment FAQ
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Find detailed answers regarding legal titles, dividend payouts, dry-dock maintenance, and exit strategies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-cyan-50/40 border border-cyan-900/10 rounded-2xl overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left font-serif font-bold text-lg text-[#07162c] flex items-center justify-between gap-4 hover:text-[#0077b6] transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-[#07162c] font-mono text-xl">{openIdx === idx ? "−" : "+"}</span>
              </button>

              {openIdx === idx && (
                <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
