import Image from "next/image";

interface FactItem {
  value: string;
  label: string;
}

interface GolfHeroProps {
  title: string;
  subtitle: string;
  concernName: string;
  statusBadge?: string;
  description: string;
  facts: FactItem[];
  bannerImage?: string;
  logo?: string;
  backgroundImage?: string;
}

export default function GolfHero({
  title,
  subtitle,
  concernName,
  statusBadge = "Coming Soon - Launching Q4 2026",
  description,
  facts,
  bannerImage,
  logo,
  backgroundImage,
}: GolfHeroProps) {
  const titleWords = title.trim().split(" ");
  const firstWord = titleWords[0];
  const remainingTitle = titleWords.slice(1).join(" ");

  const heroBackground = backgroundImage || (logo ? bannerImage : undefined);
  const emblemImage = logo || bannerImage || "/images/brand/golfacademy.png";

  return (
    <section className="relative overflow-hidden bg-[#091e15] text-white pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-24 lg:pb-16 px-4 sm:px-12 lg:px-20 border-b border-white/10">
      {/* Background Hero Banner with Dark Gradient Overlay */}
      {heroBackground && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Cinematic dark emerald gradient overlay for legibility & contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#091e15]/95 via-[#091e15]/85 to-[#091e15]/55" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      )}

      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-72 sm:w-96 h-72 sm:h-96 rounded-none bg-emerald-600/10 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-72 sm:w-96 h-72 sm:h-96 rounded-none bg-amber-500/10 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Text Content */}
        <div className="max-w-4xl space-y-4 sm:space-y-5">
          <h1 className="text-[clamp(2.2rem,4.8vw,4.2rem)] font-bold tracking-tight text-white font-serif leading-[1.02]">
            <span>{firstWord}</span>
            {remainingTitle && (
              <>
                <br />
                <span className="block mt-1">{remainingTitle}</span>
              </>
            )}
          </h1>

          {subtitle && (
            <p className="text-sm sm:text-lg lg:text-xl font-medium text-amber-400 tracking-wide leading-snug max-w-3xl">
              {subtitle}
            </p>
          )}

          <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-amber-400/60 pl-3 sm:pl-4">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <a
              href="#concerns"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-none font-semibold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/50 transition-all uppercase tracking-wider text-center"
            >
              Explore Facilities
            </a>
            <a
              href="#nearby"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-none font-semibold text-xs sm:text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all uppercase tracking-wider text-center"
            >
              Nearby Locations
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="pt-6 border-t border-emerald-800/40 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {facts.map((fact, idx) => (
              <div key={idx} className="bg-emerald-950/40 border border-emerald-800/30 rounded-none p-3.5 sm:p-4 min-w-0">
                <div className="text-xl sm:text-2xl font-bold text-amber-400">{fact.value}</div>
                <div className="text-[10px] sm:text-xs text-emerald-200/70 mt-1 font-medium truncate sm:whitespace-normal">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
