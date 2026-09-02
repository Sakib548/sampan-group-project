"use client";

import { useState } from "react";

export default function LSHSFeeStructure() {
  const [feeRequested, setFeeRequested] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("CIPS Level 4 Diploma");

  const feeItems = [
    { level: "CIPS Level 2 Certificate", standardFee: "65,000 BDT", discountedFee: "48,750 BDT", discount: "25% OFF" },
    { level: "CIPS Level 3 Advanced Cert.", standardFee: "75,000 BDT", discountedFee: "56,250 BDT", discount: "25% OFF" },
    { level: "CIPS Level 4 Diploma", standardFee: "120,000 BDT", discountedFee: "90,000 BDT", discount: "25% OFF", featured: true },
    { level: "CIPS Level 5 Advanced Dip.", standardFee: "140,000 BDT", discountedFee: "105,000 BDT", discount: "25% OFF" },
    { level: "CIPS Level 6 Professional Dip.", standardFee: "160,000 BDT", discountedFee: "120,000 BDT", discount: "25% OFF" },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b73b9] bg-sky-100 px-3.5 py-1 rounded-full">
            Transparent Tuition & Scholarships
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-slate-900">
            Fee Structure & 25% Early Bird Discount
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            All CIPS tuition packages include official textbook study guides, virtual learning access, mock exams, and flexible monthly installment options.
          </p>
        </div>

        {/* Discount Alert Banner */}
        <div className="bg-[#f4d210]/20 border-2 border-[#f4d210] rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-900 bg-[#f4d210] px-3 py-1 rounded-full shadow-sm">
              Limited Offer — Autumn 2026 Batch
            </span>
            <h3 className="text-2xl font-bold text-slate-900 font-serif mt-2">
              Save 25% OFF Tuition Fees on All CIPS Levels
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 mt-1">
              Pre-register before September 20, 2026 to lock in 25% early bird tuition savings and flexible installment plans.
            </p>
          </div>
          <a
            href="#enrollment-form"
            className="px-6 py-3.5 rounded-xl bg-[#0c4a6e] hover:bg-[#0b73b9] text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md flex-shrink-0"
          >
            Claim 25% Discount Now
          </a>
        </div>

        {/* Fee Table */}
        <div className="max-w-4xl mx-auto bg-sky-50/50 border border-sky-900/10 rounded-3xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-12 bg-[#0c4a6e] text-white p-4 sm:p-6 text-xs font-bold uppercase tracking-wider">
            <div className="col-span-6 sm:col-span-5">CIPS Qualification Level</div>
            <div className="col-span-3 text-right">Standard Fee</div>
            <div className="col-span-3 text-right font-mono text-[#f4d210]">25% Discounted Fee</div>
          </div>

          <div className="divide-y divide-sky-900/10 text-xs sm:text-sm">
            {feeItems.map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-12 p-4 sm:p-6 items-center transition-colors ${
                  item.featured ? "bg-amber-50/80 font-bold" : "hover:bg-sky-100/40"
                }`}
              >
                <div className="col-span-6 sm:col-span-5 font-semibold text-slate-900">
                  {item.level}
                  {item.featured && (
                    <span className="ml-2 text-[10px] font-bold uppercase tracking-wider text-slate-900 bg-[#f4d210] px-2 py-0.5 rounded-md">
                      Flagship
                    </span>
                  )}
                </div>

                <div className="col-span-3 text-right line-through text-slate-400 font-mono">
                  {item.standardFee}
                </div>

                <div className="col-span-3 text-right font-mono font-bold text-[#0b73b9] text-base">
                  {item.discountedFee}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
