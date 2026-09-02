export default function PartyCenterPackagePricing() {
  const packages = [
    {
      name: "Royal Wedding & Reception Package",
      rate: "850 BDT / Person",
      guestMin: "Minimum 200 Guests",
      tag: "Most Popular",
      featured: true,
      items: [
        "Full 5-Hour Hall Rental with Central AC",
        "Shahi Mutton Kacchi OR Chicken Roast + Polao",
        "Beef Bhuna + Jali Kabab + Borhani + Firni",
        "Stage Setup & Basic Floral Decoration",
        "Bride & Groom VIP Dressing Suites",
        "Dedicated Waiting Lounge for Guest Elders",
      ],
    },
    {
      name: "Corporate Seminar & Dinner Package",
      rate: "650 BDT / Person",
      guestMin: "Minimum 50 Guests",
      tag: "Corporate",
      items: [
        "Full Day Hall Access (8 Hours)",
        "Buffet Lunch / Dinner (Chinese & Continental)",
        "Mid-day Tea & Snack Break with Biscuits",
        "HD Projector & Sound System with Microphones",
        "High-Speed Wi-Fi & Executive Stage Setup",
        "Podium & Notepad Setup for Delegates",
      ],
    },
    {
      name: "Family Birthday & Celebration Package",
      rate: "550 BDT / Person",
      guestMin: "Minimum 30 Guests",
      tag: "Family Special",
      items: [
        "3-Hour Private Banquet Suite Access",
        "Fried Rice + Chili Chicken + Prawn Fry + Soup",
        "Custom Cake Table & Balloon Backdrop Arch",
        "Music System & Lighting Setup",
        "Complimentary Soft Drinks & Desserts",
        "Dedicated Banquet Waitstaff",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f8faf6] text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-slate-900">
            Event Package Pricing
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            All-inclusive event packages covering AC hall rental, gourmet catering, stage lighting, and service staff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative border ${
                pkg.featured
                  ? "bg-[#1e1b18] text-white border-2 border-amber-400 shadow-2xl scale-[1.03]"
                  : "bg-white border-amber-900/10 text-slate-900 hover:shadow-xl"
              }`}
            >
              {pkg.tag && (
                <span
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full ${
                    pkg.featured
                      ? "bg-amber-400 text-slate-950 shadow-md"
                      : "bg-[#1e1b18] text-amber-300"
                  }`}
                >
                  {pkg.tag}
                </span>
              )}

              <div>
                <h3
                  className={`text-2xl font-bold font-serif mb-2 ${
                    pkg.featured ? "text-white" : "text-slate-900"
                  }`}
                >
                  {pkg.name}
                </h3>

                <div className="my-6">
                  <span
                    className={`text-3xl sm:text-4xl font-bold font-serif ${
                      pkg.featured ? "text-amber-400" : "text-amber-700"
                    }`}
                  >
                    {pkg.rate}
                  </span>
                  <span
                    className={`text-xs font-semibold block mt-1 ${
                      pkg.featured ? "text-amber-200" : "text-slate-500"
                    }`}
                  >
                    ({pkg.guestMin})
                  </span>
                </div>

                <div className="space-y-3 pt-4 border-t border-amber-900/10">
                  {pkg.items.map((it, i) => (
                    <div key={i} className="flex items-start text-xs sm:text-sm">
                      <span
                        className={`mr-2.5 font-bold ${
                          pkg.featured ? "text-amber-400" : "text-amber-700"
                        }`}
                      >
                        ✓
                      </span>
                      <span className={pkg.featured ? "text-amber-100" : "text-slate-700"}>
                        {it}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6">
                <a
                  href="#booking-form"
                  className={`block w-full py-3.5 rounded-xl text-center font-bold text-xs uppercase tracking-wider transition-all ${
                    pkg.featured
                      ? "bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg"
                      : "bg-[#1e1b18] hover:bg-amber-700 text-white"
                  }`}
                >
                  Book Package Date
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
