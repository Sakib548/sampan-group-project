export default function MaritimeShipShareWorks() {
  const steps = [
    {
      step: "01",
      title: "Fractional Vessel Equity Purchase",
      description: "Investors acquire legally registered fractional equity share units in the Sampan Floating Pearl luxury vessel, backed by official maritime deed titles.",
      tag: "Asset Backed",
    },
    {
      step: "02",
      title: "Commercial Charter & Passenger Operations",
      description: "The vessel operates scheduled passenger cruises, luxury private charters, and corporate events across Bay of Bengal coastal corridors.",
      tag: "Revenue Engine",
    },
    {
      step: "03",
      title: "Quarterly Revenue Dividend Payouts",
      description: "Net operating profits from passenger ticket sales, charter rentals, and luxury onboard dining are distributed as quarterly bank dividends.",
      tag: "14.5% - 18% Target IRR",
    },
    {
      step: "04",
      title: "Asset Appreciation & Share Exit Flexibility",
      description: "As vessel valuation and charter demand grow, owners benefit from capital appreciation with secondary market reselling rights after 24 months.",
      tag: "Capital Growth",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0077b6] bg-cyan-100 px-3.5 py-1 rounded-full">
            Plain Language Model
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#07162c]">
            How Ship Space & Fractional Share Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Understanding fractional maritime asset ownership — a simple, transparent alternative investment model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-cyan-50/40 border border-cyan-900/10 rounded-3xl p-8 transition-all hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-2xl bg-[#07162c] text-amber-400 font-mono font-bold text-xl flex items-center justify-center shadow-md">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100 px-2.5 py-1 rounded-md">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#07162c] font-serif mb-3 group-hover:text-[#0077b6] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cyan-900/10 text-xs font-semibold text-[#0077b6] flex items-center justify-between">
                <span>Step {idx + 1} of 4</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
