interface FactItem {
  value: string;
  label: string;
}

interface MaritimeHeroProps {
  title?: string;
  subtitle?: string;
  concernName?: string;
  statusBadge?: string;
  description?: string;
  facts?: FactItem[];
}

export default function MaritimeHero({
  title = "Sampan Floating Pearl",
  subtitle = "Fractional Luxury Vessel & Maritime Alternative Asset Investment Shares",
  concernName = "Sampan Floating Pearl Venture",
  statusBadge = "Coming Soon — Launching Q4 2026",
  description = "Bangladesh's premier fractional maritime asset opportunity — allowing private investors to own equity shares in a state-of-the-art luxury passenger & cruise vessel operating across coastal Bay of Bengal routes.",
  facts = [
    { value: "Q4 2026", label: "Pre-Launch Tranche" },
    { value: "14.5% - 18%", label: "Target Annual IRR" },
    { value: "Quarterly", label: "Dividend Distribution" },
    { value: "Department of Shipping", label: "Government Registered" },
  ],
}: MaritimeHeroProps) {
  const titleWords = title.trim().split(" ");
  const firstWord = titleWords[0];
  const remainingTitle = titleWords.slice(1).join(" ");

  return (
    <section className="relative overflow-hidden bg-[#072432] text-white pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-24 lg:pb-16 px-6 sm:px-12 lg:px-20">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-[#0ea5e9]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 rounded-full bg-[#f59e0b]/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Text Column */}
        <div className="max-w-4xl space-y-4 sm:space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0ea5e9]/20 text-cyan-300 border border-[#0ea5e9]/30">
              Maritime &amp; Asset Division
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              {statusBadge}
            </span>
          </div>

          <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white font-serif leading-[0.98]">
            <span>{firstWord}</span>
            {remainingTitle && (
              <>
                <br />
                <span className="block mt-1">{remainingTitle}</span>
              </>
            )}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg lg:text-xl font-medium text-amber-400 tracking-wide leading-snug max-w-3xl">
              {subtitle}
            </p>
          )}

          <p className="text-xs sm:text-sm text-cyan-100/80 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-amber-400/60 pl-4">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="#enquiry-form"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-cyan-950/50 transition-all hover:scale-[1.02]"
            >
              Pre-Register Share Tranche →
            </a>
            <a
              href="https://wa.me/8801700000000?text=Hello%20Sampan%20Maritime%20Team%2C%20I%20am%20interested%20in%20Sampan%20Floating%20Pearl%20ship-share%20investment."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all"
            >
              💬 Talk to Investment Advisor
            </a>
          </div>

          {/* Facts Grid */}
          <div className="pt-6 border-t border-cyan-800/40 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {facts.map((fact, idx) => (
              <div key={idx} className="bg-cyan-950/50 border border-cyan-800/40 rounded-xl p-4">
                <div className="text-2xl font-bold text-amber-400">{fact.value}</div>
                <div className="text-xs text-cyan-200/70 mt-1 font-medium">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
