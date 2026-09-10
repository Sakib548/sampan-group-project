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
  image?: string;
  facts?: FactItem[];
}

export default function PartyCenterHero({
  title = "Sampan Highway Inn Restaurant & Party Center",
  subtitle = "Premier Highway Dining, Grand Banquet Halls & Celebration Venue",
  concernName = "Sampan Highway Inn Restaurant & Party Center",
  statusBadge = "Now Booking for Weddings & Corporate Events 2026",
  description = "Bangladesh's leading highway event venue and multi-cuisine restaurant - featuring central air-conditioned banquet halls accommodating up to 500+ guests, gourmet catering, and live BBQ dining.",
  image = "/images/our-divisions/sampan-highway-inn-party-center/hero.jpg",
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
    <section className="relative overflow-hidden bg-[#1e1b18] text-white pt-20 pb-10 lg:pt-24 lg:pb-14 px-6 sm:px-12 lg:px-20 border-b border-white/10">
      {/* Background Image with Cinematic Dark Gradient Overlay */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark gradient for text legibility and smooth contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
        </div>
      )}

      {/* Background Radial Glow */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 rounded-full bg-red-700/15 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="max-w-4xl space-y-5 sm:space-y-6">
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

          <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-amber-400/60 pl-4">
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
      </div>
    </section>
  );
}
