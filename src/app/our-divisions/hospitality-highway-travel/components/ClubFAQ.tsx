"use client";

import { useState } from "react";

export default function ClubFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What are the eligibility requirements for SAGCL membership?",
      a: "SAGCL membership is open to individuals, families, and corporate enterprises. Applicants undergo a standard membership committee review to ensure alignment with club standards.",
    },
    {
      q: "Are membership equity shares transferable?",
      a: "Yes. Founding Member Lifetime Shares and Corporate Trustee Shares become fully transferable after a 3-year holding period, subject to club transfer approval.",
    },
    {
      q: "How many guests can a primary member bring to the SAGCL VIP Lounge?",
      a: "Primary Gold & Platinum members receive complimentary guest lounge passes allowing up to 4 accompanied guests per visit. Additional guest passes can be booked via the digital member portal.",
    },
    {
      q: "What are the rules regarding dress code on the fairway and lounge?",
      a: "Standard golf attire (collared polo shirts, golf trousers/shorts, soft-spike shoes) is required on the fairways and driving range. Smart casual attire is required in the main dining lounge.",
    },
    {
      q: "Can corporate members substitute executive designees?",
      a: "Yes. Corporate Platinum & Trustee memberships allow designees to be updated annually to accommodate executive leadership changes.",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f8faf6] text-[#183b2b]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#071d13]">
            SAGCL Membership FAQ
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Find answers to common questions regarding membership shares, guest privileges, and club rules.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-amber-900/10 rounded-2xl overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left font-serif font-bold text-lg text-[#071d13] flex items-center justify-between gap-4 hover:text-amber-700 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-[#071d13] font-mono text-xl">{openIdx === idx ? "−" : "+"}</span>
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
