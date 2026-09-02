export default function ResortPhasedTimeline() {
  const phases = [
    {
      phase: "Phase 1 (Completed)",
      date: "Q1 2025 - Q4 2025",
      title: "Land Reclamation & Agro Estate Setup",
      description: "Acquisition of 160 acres, soil reclamation, installation of solar drip irrigation, and initial crop orchard planting.",
      status: "Operational",
    },
    {
      phase: "Phase 2 (Current Active Phase)",
      date: "Q1 2026 - Q4 2026",
      title: "Golf Academy, Range & SAGCL Lounge",
      description: "Construction of TrackMan 4 Golf Academy, Toptracer Short Drive Range, SAGCL VIP Lounge, and initial 9-hole fairway grading.",
      status: "In Progress",
      active: true,
    },
    {
      phase: "Phase 3 (Upcoming)",
      date: "Q1 2027 - Q3 2027",
      title: "VVIP Eco-Villas, Wellness Spa & Boating Lake",
      description: "Erection of 40 luxury guest villas, infinity pool complex, Ayurvedic wellness spa, and natural boating lake pier.",
      status: "Upcoming",
    },
    {
      phase: "Phase 4 (Grand Launch)",
      date: "Q4 2027",
      title: "Full Resort Grand Opening & International Launch",
      description: "Complete 160-acre destination integration, full hotel service launch, and inaugural SAGR Masters Golf Tournament.",
      status: "Target Launch",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
            Development Milestone Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#071d13]">
            Phased-Opening Timeline
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Follow our structured development roadmap as we transform 160 acres into Bangladesh&apos;s flagship agro-golf resort.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {phases.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 transition-all duration-300 border flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                item.active
                  ? "bg-[#071d13] text-white border-2 border-amber-400 shadow-2xl scale-[1.02]"
                  : "bg-emerald-50/50 border-emerald-900/10 text-slate-900 hover:shadow-md"
              }`}
            >
              <div className="flex items-start gap-6">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-serif text-xl font-bold flex-shrink-0 shadow-md ${
                    item.active ? "bg-amber-400 text-emerald-950" : "bg-emerald-800 text-white"
                  }`}
                >
                  0{idx + 1}
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                        item.active
                          ? "bg-amber-400/20 text-amber-300 border border-amber-400/40"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {item.phase}
                    </span>
                    <span
                      className={`text-xs font-mono font-semibold ${
                        item.active ? "text-emerald-200" : "text-slate-500"
                      }`}
                    >
                      {item.date}
                    </span>
                  </div>

                  <h3
                    className={`text-2xl font-bold font-serif ${
                      item.active ? "text-white" : "text-[#071d13]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm mt-2 leading-relaxed ${
                      item.active ? "text-emerald-100/80" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="text-right flex-shrink-0">
                <span
                  className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    item.active
                      ? "bg-amber-400 text-emerald-950"
                      : "bg-emerald-900/10 text-emerald-900"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
