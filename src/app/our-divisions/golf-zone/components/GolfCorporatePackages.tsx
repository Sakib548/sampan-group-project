export default function GolfCorporatePackages() {
  const packages = [
    {
      title: "Corporate Team Scramble",
      badge: "Ideal for 15 - 30 Guests",
      price: "45,000 BDT",
      duration: "3 Hours Exclusive Bay Rental",
      features: [
        "4 Reserved Toptracer Driving Bays side-by-side",
        "Toptracer Leaderboard Tournament Setup",
        "Artisanal Finger Food & Mocktail Buffet",
        "Dedicated Event Host & Range Marshal",
        "Trophy Presentation & Winner Vouchers",
      ],
    },
    {
      title: "VIP Executive Night Out",
      badge: "Ideal for 30 - 60 Guests",
      price: "95,000 BDT",
      duration: "4 Hours Floodlit Lounge Access",
      features: [
        "Private VIP Deck & 8 Toptracer Bays",
        "Live DJ & Ambient Lounge Lighting Setup",
        "Full BBQ Grill Buffet & Premium Refreshments",
        "Longest Drive & Closest-to-Pin Competitions",
        "Complimentary Custom Branded Golf Polo Shirts",
      ],
    },
    {
      title: "Full Range Takeover / Brand Event",
      badge: "Exclusive Facility Booking (Up to 150 Guests)",
      price: "Custom Quote",
      duration: "Full Evening / Custom Duration",
      features: [
        "Complete 35-Bay Facility Exclusive Access",
        "Custom Toptracer Screen Branding & LED Signage",
        "5-Course Gourmet Dinner & Live Music Stage",
        "Professional Photographer & Drone Coverage",
        "VIP Transport Shuttle Arrangement",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
            Group & Corporate Event Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#091e15]">
            Corporate Team Building & VIP Celebrations
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Host unforgettable corporate golf tournaments, client networking evenings, birthday bashes, and private lounge parties at Sampan Short Drive Range.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-emerald-50/50 border border-emerald-900/10 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200 inline-block mb-3">
                  {pkg.badge}
                </span>

                <h3 className="text-2xl font-bold text-[#091e15] font-serif group-hover:text-emerald-800 transition-colors">
                  {pkg.title}
                </h3>

                <div className="my-4">
                  <span className="text-3xl font-bold font-serif text-emerald-800">
                    {pkg.price}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 ml-2">
                    / {pkg.duration}
                  </span>
                </div>

                <div className="space-y-3 pt-4 border-t border-emerald-900/10">
                  {pkg.features.map((f, i) => (
                    <div key={i} className="flex items-start text-xs sm:text-sm text-slate-700">
                      <span className="text-emerald-700 font-bold mr-2">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#enquiry-form"
                  className="block w-full py-3.5 rounded-xl bg-[#091e15] hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md"
                >
                  Inquire Corporate Event
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
