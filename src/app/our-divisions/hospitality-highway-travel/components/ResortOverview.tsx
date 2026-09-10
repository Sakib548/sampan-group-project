export default function ResortOverview() {
  const pillars = [
    {
      title: "Championship Fairways & Driving Green",
      description: "Expansive green landscapes, PGA-calibrated practice fairways, and floodlit driving ranges for golfers of all handicap levels.",
      tag: "Golf & Leisure",
    },
    {
      title: "Organic Farm-to-Table Ecosystem",
      description: "Integrated chemical-free crop fields, fruit orchards, and organic livestock farming providing fresh ingredients for resort dining.",
      tag: "Agro Harmony",
    },
    {
      title: "VVIP Luxury Villas & Private Pools",
      description: "Bespoke eco-villas featuring private infinity pools, garden verandas, butler service, and unhindered natural views.",
      tag: "Luxury Living",
    },
    {
      title: "Wellness Spa, Lake & Recreation Hub",
      description: "Rejuvenating wellness spa, natural lake boating, billiards lounge, and family recreation complexes.",
      tag: "Recreation",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
            Resort Overview
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#071d13]">
            Where Nature, Comfort & Recreation Converge
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Sampan Agro & Golf Resort is Bangladesh&apos;s premier multi-hectare destination combining championship golf fairways with organic farm-to-table hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-emerald-50/50 border border-emerald-900/10 rounded-3xl p-8 transition-all hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200 inline-block mb-4">
                  {p.tag}
                </span>

                <h3 className="text-xl font-bold text-[#071d13] group-hover:text-emerald-800 transition-colors font-serif mb-3">
                  {p.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-900/10 text-xs font-semibold text-emerald-800 flex items-center justify-between">
                <span>SAGR Standard</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
