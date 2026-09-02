export default function MaritimeOpportunityStatus() {
  const tranches = [
    {
      name: "Phase 1 Pre-Launch Tranche",
      status: "Open for Pre-Registration",
      minShare: "500,000 BDT per Unit",
      targetIRR: "18.5% Annualized",
      payout: "Quarterly Bank Direct Deposit",
      badge: "Founding Investor Discount",
      featured: true,
    },
    {
      name: "Phase 2 Commercial Tranche",
      status: "Opening Q1 2027",
      minShare: "750,000 BDT per Unit",
      targetIRR: "15.0% Annualized",
      payout: "Quarterly Bank Direct Deposit",
      badge: "Commercial Phase",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f8fafc] text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0077b6] bg-cyan-100 px-3.5 py-1 rounded-full">
            Investment Status
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#07162c]">
            Current Opportunity Status & Tranches
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Pre-register your interest for the Phase 1 Pre-Launch Tranche to secure founding investor rates before commercial allocation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tranches.map((t, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative border ${
                t.featured
                  ? "bg-[#07162c] text-white border-2 border-amber-400 shadow-2xl scale-[1.02]"
                  : "bg-white border-cyan-900/10 text-slate-900 hover:shadow-xl"
              }`}
            >
              {t.badge && (
                <span
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full ${
                    t.featured
                      ? "bg-amber-400 text-slate-950 shadow-md"
                      : "bg-[#07162c] text-cyan-200"
                  }`}
                >
                  {t.badge}
                </span>
              )}

              <div>
                <span
                  className={`text-xs font-bold uppercase tracking-wider block mb-2 ${
                    t.featured ? "text-cyan-300" : "text-[#0077b6]"
                  }`}
                >
                  ● {t.status}
                </span>

                <h3
                  className={`text-2xl font-bold font-serif mb-4 ${
                    t.featured ? "text-white" : "text-[#07162c]"
                  }`}
                >
                  {t.name}
                </h3>

                <div className="space-y-4 pt-4 border-t border-cyan-900/10 text-xs sm:text-sm">
                  <div>
                    <span className={t.featured ? "text-cyan-200 block" : "text-slate-500 block"}>
                      Minimum Share Unit:
                    </span>
                    <span className={`text-xl font-bold font-serif ${t.featured ? "text-amber-400" : "text-[#07162c]"}`}>
                      {t.minShare}
                    </span>
                  </div>

                  <div>
                    <span className={t.featured ? "text-cyan-200 block" : "text-slate-500 block"}>
                      Target Annual Return (IRR):
                    </span>
                    <span className={`font-mono font-bold ${t.featured ? "text-white" : "text-[#0077b6]"}`}>
                      {t.targetIRR}
                    </span>
                  </div>

                  <div>
                    <span className={t.featured ? "text-cyan-200 block" : "text-slate-500 block"}>
                      Distribution Frequency:
                    </span>
                    <span className={t.featured ? "text-white font-medium" : "text-slate-700 font-medium"}>
                      {t.payout}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6">
                <a
                  href="#enquiry-form"
                  className={`block w-full py-3.5 rounded-xl text-center font-bold text-xs uppercase tracking-wider transition-all ${
                    t.featured
                      ? "bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg"
                      : "bg-[#07162c] hover:bg-[#0077b6] text-white"
                  }`}
                >
                  Pre-Register Tranche
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
