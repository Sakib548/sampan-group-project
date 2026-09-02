export default function ClubMembershipTiers() {
  const tiers = [
    {
      name: "SAGCL Silver Individual Tier",
      badge: "Individual Golfer",
      price: "180,000 BDT",
      duration: "Annual Renewable Membership",
      features: [
        "1 Primary Member Card with full SAGCL Lounge access",
        "Preferred fairway green fee rates & tee times",
        "Access to TrackMan 4 Golf Academy bays",
        "10% Discount on resort villa bookings & dining",
        "Access to SAGCL Member-Only digital portal",
      ],
    },
    {
      name: "SAGCL Gold Family Privilege Tier",
      badge: "Family Legacy",
      price: "350,000 BDT",
      duration: "Annual Family Membership",
      featured: true,
      features: [
        "Primary Member + Spouse + Children Under 21",
        "Unlimited SAGCL VIP Lounge & Pool Deck access",
        "20% Discount on resort dining, spa & villa stays",
        "2 Free guest lounge passes per month",
        "Priority reservation for annual Club Gala Dinner",
      ],
    },
    {
      name: "SAGCL Platinum Corporate Tier",
      badge: "Corporate Enterprise",
      price: "750,000 BDT",
      duration: "Annual Corporate (4 Designees)",
      features: [
        "4 Transferable Corporate Executive Member Cards",
        "Private VIP Lounge meeting room reservation",
        "30% Discount on corporate event bay rentals",
        "Free participation in Corporate Golf Scramble",
        "Concierge airport transport arrangement",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
            SAGCL Membership Tiers & Privileges
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#071d13]">
            Membership Tiers & Unlocked Benefits
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Select your membership tier to unlock luxury lounge access, priority golf tee-times, villa discounts, and executive networking privileges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.featured
                  ? "bg-[#071d13] text-white border-2 border-amber-400 shadow-2xl scale-[1.03]"
                  : "bg-amber-50/40 border border-amber-900/10 text-slate-900 hover:shadow-xl"
              }`}
            >
              {tier.badge && (
                <span
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full ${
                    tier.featured
                      ? "bg-amber-400 text-emerald-950 shadow-md"
                      : "bg-[#071d13] text-amber-300"
                  }`}
                >
                  {tier.badge}
                </span>
              )}

              <div>
                <h3
                  className={`text-2xl font-bold font-serif mb-2 ${
                    tier.featured ? "text-white" : "text-[#071d13]"
                  }`}
                >
                  {tier.name}
                </h3>

                <div className="my-6">
                  <span
                    className={`text-3xl sm:text-4xl font-bold font-serif ${
                      tier.featured ? "text-amber-400" : "text-emerald-800"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-xs font-semibold block mt-1 ${
                      tier.featured ? "text-emerald-200" : "text-slate-500"
                    }`}
                  >
                    / {tier.duration}
                  </span>
                </div>

                <div className="space-y-3 pt-4 border-t border-amber-900/10">
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start text-xs sm:text-sm">
                      <span
                        className={`mr-2.5 font-bold ${
                          tier.featured ? "text-amber-400" : "text-emerald-700"
                        }`}
                      >
                        ✓
                      </span>
                      <span className={tier.featured ? "text-emerald-100" : "text-slate-700"}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6">
                <a
                  href="#club-signup"
                  className={`block w-full py-3.5 rounded-xl text-center font-bold text-xs uppercase tracking-wider transition-all ${
                    tier.featured
                      ? "bg-amber-400 hover:bg-amber-300 text-emerald-950 shadow-lg"
                      : "bg-[#071d13] hover:bg-emerald-900 text-white"
                  }`}
                >
                  Apply For Membership
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
