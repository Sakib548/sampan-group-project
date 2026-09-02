export default function MaritimeRouteOverview() {
  const ports = [
    { name: "Chittagong Port Terminal", detail: "Primary Home Port & Maintenance Hub", schedule: "Weekly Departure Base" },
    { name: "Cox's Bazar Sea Terminal", detail: "Tourist Passenger Boarding & Sunset Cruises", schedule: "Daily Scheduled Stops" },
    { name: "St. Martin's Coral Island", detail: "Luxury Eco-Tour Resort Anchor Drop", schedule: "Overnight Island Anchorage" },
    { name: "Bay of Bengal Offshore Zone", detail: "International Waters Deep-Sea Charter Route", schedule: "Exclusive Private Charters" },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f8fafc] text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0077b6] bg-cyan-100 px-3.5 py-1 rounded-full">
            Coastal Navigation Corridor
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#07162c]">
            Route & Operating Area Overview
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Sampan Floating Pearl navigates the lucrative Bay of Bengal coastal corridor, serving premium tourist traffic and high-yield commercial charters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {ports.map((port, idx) => (
            <div
              key={idx}
              className="bg-white border border-cyan-900/10 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#07162c] text-amber-400 font-mono font-bold flex items-center justify-center mb-4">
                ⚓
              </div>

              <h3 className="text-lg font-bold text-[#07162c] font-serif mb-2">
                {port.name}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {port.detail}
              </p>

              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0077b6] bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200 inline-block">
                {port.schedule}
              </span>
            </div>
          ))}
        </div>

        {/* Route Map Card */}
        <div className="bg-[#07162c] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-cyan-800/40 text-center max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-cyan-950 px-3.5 py-1 rounded-full border border-cyan-800">
            Bay of Bengal Maritime Corridor
          </span>
          <h3 className="text-2xl font-bold font-serif text-white mt-3">
            Strategic High-Yield Coastal Route
          </h3>
          <p className="text-xs sm:text-sm text-cyan-100/80 mt-2 max-w-xl mx-auto leading-relaxed">
            Connecting Bangladesh&apos;s primary commercial port (Chittagong) to the world&apos;s longest natural sea beach (Cox&apos;s Bazar) and coral paradise (St. Martin&apos;s Island).
          </p>
        </div>
      </div>
    </section>
  );
}
