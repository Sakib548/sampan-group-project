interface Facility {
  title: string;
  category: string;
  specs: string;
  description: string;
  highlights: string[];
}

interface GolfFacilitiesOverviewProps {
  title?: string;
  subtitle?: string;
  facilities: Facility[];
}

export default function GolfFacilitiesOverview({
  title = "World-Class Golf Facilities & Amenities",
  subtitle = "Engineered for excellence with state-of-the-art simulators, floodlit target ranges, and luxury member amenities.",
  facilities,
}: GolfFacilitiesOverviewProps) {
  return (
    <section id="facilities" className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f8faf6] text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
              Facilities & Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#091e15]">
              {title}
            </h2>
          </div>
          <p className="text-base text-slate-600 max-w-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="bg-white border border-emerald-900/10 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                  {fac.category}
                </span>
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                  {fac.specs}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#091e15] mb-3 group-hover:text-emerald-800 transition-colors font-serif">
                {fac.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {fac.description}
              </p>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Specifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {fac.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-emerald-900 bg-emerald-50/80 border border-emerald-200/60 px-3 py-1 rounded-full"
                    >
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
