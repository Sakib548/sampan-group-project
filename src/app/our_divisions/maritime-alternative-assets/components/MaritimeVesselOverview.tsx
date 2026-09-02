export default function MaritimeVesselOverview() {
  const specs = [
    { title: "Gross Registered Tonnage", value: "3,200 GRT", detail: "Steel-hulled ocean-going passenger vessel" },
    { title: "Passenger Capacity", value: "250 Guests", detail: "150 Cruise Passengers + 100 Day Charter Guests" },
    { title: "Luxury Staterooms & Suites", value: "24 VIP Suites", detail: "Ocean-view balconies, en-suite baths, 24/7 room service" },
    { title: "Cruising Speed & Propulsion", value: "18 Knots", detail: "Twin Caterpillar 3516C Marine Diesel Engines" },
  ];

  const decks = [
    { name: "Sun Deck & Sky Bar", desc: "Open-air panoramic lounge, jacuzzi, cocktail bar, and sunset observation deck." },
    { name: "Pearl Dining Saloon & Casino Lounge", desc: "Fine dining seafood restaurant, live music stage, and VIP member lounge." },
    { name: "Stateroom Deck", desc: "24 luxury ocean-view suites with private balconies and concierge butler access." },
    { name: "Lower Cargo & Machinery Deck", desc: "Temperature-controlled cargo hold for high-value maritime cargo and engine control room." },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f8fafc] text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0077b6] bg-cyan-100 px-3.5 py-1 rounded-full">
            Vessel Architecture & Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#07162c]">
            Sampan Floating Pearl Vessel Specs
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Engineered to international maritime classification standards for coastal cruising, passenger comfort, and high-yield charter operations.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {specs.map((s, idx) => (
            <div
              key={idx}
              className="bg-white border border-cyan-900/10 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-[#0077b6] mb-1">
                {s.title}
              </div>
              <div className="text-3xl font-bold font-serif text-[#07162c] my-2">
                {s.value}
              </div>
              <div className="text-xs text-slate-500 leading-relaxed">
                {s.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Deck Layout Breakdown */}
        <div className="bg-[#07162c] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-cyan-800/40">
          <h3 className="text-2xl font-bold font-serif text-amber-400 mb-6 pb-4 border-b border-cyan-800/40">
            Multi-Tier Deck Layout & Facilities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {decks.map((deck, i) => (
              <div key={i} className="bg-cyan-950/60 border border-cyan-800/40 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-white font-serif mb-2">
                  ⚓ {deck.name}
                </h4>
                <p className="text-xs text-cyan-100/80 leading-relaxed">
                  {deck.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
