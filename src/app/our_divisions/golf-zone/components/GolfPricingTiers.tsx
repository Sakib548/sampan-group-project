interface PlanTier {
  name: string;
  priceBDT: string;
  duration: string;
  tag?: string;
  featured?: boolean;
  features: string[];
}

interface GolfPricingTiersProps {
  title?: string;
  subtitle?: string;
  tiers: PlanTier[];
}

export default function GolfPricingTiers({
  title = "Program Pricing & Package Tiers",
  subtitle = "Transparent pricing models tailored for individual golfers, junior talent, and corporate members.",
  tiers,
}: GolfPricingTiersProps) {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
            Pricing & Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#091e15]">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.featured
                  ? "bg-[#091e15] text-white border-2 border-amber-400 shadow-2xl scale-[1.03]"
                  : "bg-emerald-50/50 border border-emerald-900/10 text-slate-900 hover:shadow-xl"
              }`}
            >
              {tier.tag && (
                <span
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full ${
                    tier.featured
                      ? "bg-amber-400 text-emerald-950 shadow-md"
                      : "bg-emerald-700 text-white"
                  }`}
                >
                  {tier.tag}
                </span>
              )}

              <div>
                <h3
                  className={`text-2xl font-bold font-serif mb-2 ${
                    tier.featured ? "text-white" : "text-[#091e15]"
                  }`}
                >
                  {tier.name}
                </h3>

                <div className="my-6">
                  <span
                    className={`text-4xl font-bold font-serif ${
                      tier.featured ? "text-amber-400" : "text-emerald-800"
                    }`}
                  >
                    {tier.priceBDT}
                  </span>
                  <span
                    className={`text-xs font-semibold ml-2 ${
                      tier.featured ? "text-emerald-200" : "text-slate-500"
                    }`}
                  >
                    / {tier.duration}
                  </span>
                </div>

                <div className="space-y-3 pt-4 border-t border-emerald-900/10">
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
                  href="#enquiry-form"
                  className={`block w-full py-3.5 rounded-xl text-center font-bold text-xs uppercase tracking-wider transition-all ${
                    tier.featured
                      ? "bg-amber-400 hover:bg-amber-300 text-emerald-950 shadow-lg"
                      : "bg-[#091e15] hover:bg-emerald-900 text-white"
                  }`}
                >
                  Select Package
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
