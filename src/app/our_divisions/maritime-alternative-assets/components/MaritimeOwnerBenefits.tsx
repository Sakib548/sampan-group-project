export default function MaritimeOwnerBenefits() {
  const benefits = [
    {
      title: "Quarterly Dividend Payouts",
      badge: "Financial Yield",
      description: "Direct bank distribution of net charter revenues paid out every 3 months. Projected annual return of 14.5% - 18% IRR.",
    },
    {
      title: "Complimentary VIP Cruise Days",
      badge: "Lifestyle Perk",
      description: "Shareholders receive 7 complimentary nights annually aboard the Sampan Floating Pearl with VIP suite upgrades.",
    },
    {
      title: "Asset-Backed Legal Title",
      badge: "Security & Safety",
      description: "Your share investment is backed by a registered maritime deed title recorded with government shipping authorities.",
    },
    {
      title: "Secondary Market Liquidity",
      badge: "Exit Rights",
      description: "Flexible resale rights after 24 months through Sampan's investor registry or secondary asset exchange.",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0077b6] bg-cyan-100 px-3.5 py-1 rounded-full">
            Investor Privileges
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#07162c]">
            Vessel Shareholder Benefits Breakdown
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Enjoy a dual advantage — strong quarterly financial yields combined with luxury maritime lifestyle perks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="bg-cyan-50/40 border border-cyan-900/10 rounded-3xl p-8 transition-all hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200 inline-block mb-4">
                  {b.badge}
                </span>

                <h3 className="text-2xl font-bold text-[#07162c] font-serif mb-3 group-hover:text-[#0077b6] transition-colors">
                  {b.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {b.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cyan-900/10 text-xs font-semibold text-[#0077b6] flex items-center justify-between">
                <span>Verified Benefit</span>
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
