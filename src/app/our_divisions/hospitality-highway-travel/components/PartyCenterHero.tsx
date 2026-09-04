import Image from "next/image";

interface FactItem {
  value: string;
  label: string;
}

interface PartyCenterHeroProps {
  title?: string;
  subtitle?: string;
  concernName?: string;
  statusBadge?: string;
  description?: string;
  facts?: FactItem[];
}

export default function PartyCenterHero({
  title = "Sampan Highway Inn Restaurant & Party Center",
  subtitle = "Premier Highway Dining, Grand Banquet Halls & Celebration Venue",
  concernName = "Sampan Highway Inn Restaurant & Party Center",
  statusBadge = "Now Booking for Weddings & Corporate Events 2026",
  description = "Bangladesh's leading highway event venue and multi-cuisine restaurant — featuring central air-conditioned banquet halls accommodating up to 500+ guests, gourmet catering, and live BBQ dining.",
  facts = [
    { value: "500+ Capacity", label: "Grand Banquet Hall" },
    { value: "Multi-Cuisine", label: "Feast & Buffet Menus" },
    { value: "24/7 Power", label: "Full Generator Backup" },
    { value: "Valet Parking", label: "Spacious Parking Ground" },
  ],
}: PartyCenterHeroProps) {
  const titleWords = title.trim().split(" ");
  const firstWord = titleWords[0];
  const remainingTitle = titleWords.slice(1).join(" ");

  return (
    <section className="relative overflow-hidden bg-[#1e1b18] text-white pt-20 pb-10 lg:pt-24 lg:pb-14 px-6 sm:px-12 lg:px-20">
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 rounded-full bg-red-700/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text Content */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Hospitality &amp; Leisure Division
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-red-500/20 text-red-300 border border-red-500/40">
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

          <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed max-w-md font-light tracking-wide border-l-2 border-amber-400/60 pl-4">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="#booking-form"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg transition-all hover:scale-[1.02]"
            >
              Check Hall Availability & Book Date →
            </a>
            <a
              href="#menu-section"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all"
            >
              View Catering & Feast Menus
            </a>
          </div>

          {/* Quick Facts Grid */}
          <div className="pt-6 border-t border-amber-900/40 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {facts.map((fact, idx) => (
              <div key={idx} className="bg-amber-950/40 border border-amber-800/40 rounded-xl p-4">
                <div className="text-2xl font-bold text-amber-400">{fact.value}</div>
                <div className="text-xs text-amber-200/70 mt-1 font-medium">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Logo Display */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md bg-gradient-to-b from-[#2a241e] to-[#141210] rounded-3xl border border-amber-700/40 p-8 shadow-2xl flex flex-col items-center justify-center group hover:border-amber-400/60 transition-all">
            <div className="absolute inset-4 rounded-2xl border border-amber-500/20 pointer-events-none" />

            <div className="relative w-full h-40 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/images/brand/sampanhighwayinnresturant.png"
                alt={concernName}
                fill sizes="100vw"
                priority
                className="object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
              />
            </div>

            <div className="mt-6 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
                Official Brand Emblem
              </span>
              <p className="text-sm font-semibold text-white mt-2 font-serif">
                {concernName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
