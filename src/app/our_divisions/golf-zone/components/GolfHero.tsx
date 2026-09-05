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
  statusBadge = "Coming Soon — Launching Q4 2026",
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
    <section className="relative overflow-hidden bg-[#091e15] text-white pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-24 lg:pb-16 px-6 sm:px-12 lg:px-20 border-b border-white/10">
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
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text Content */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          {/* <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Golf Zone Division
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              {statusBadge}
            </span>
          </div> */}

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

          <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-amber-400/60 pl-4">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="#enquiry-form"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02]"
            >
              Express Interest / Pre-Register
            </a>
            <a
              href="#facilities"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all"
            >
              Explore Facilities
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="pt-6 border-t border-emerald-800/40 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {facts.map((fact, idx) => (
              <div key={idx} className="bg-emerald-950/40 border border-emerald-800/30 rounded-xl p-4">
                <div className="text-2xl font-bold text-amber-400">{fact.value}</div>
                <div className="text-xs text-emerald-200/70 mt-1 font-medium">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column Crest/Logo Display */}
        {emblemImage && (
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-b from-emerald-900/50 to-emerald-950/85 backdrop-blur-md rounded-3xl border border-emerald-700/40 p-8 shadow-2xl flex flex-col items-center justify-center group hover:border-emerald-500/60 transition-all">
              <div className="absolute inset-4 rounded-2xl border border-emerald-500/20 pointer-events-none" />

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={emblemImage}
                  alt={concernName}
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  priority
                  className="object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
                />
              </div>

              <div className="mt-4 text-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300/80">
                  Official Brand Emblem
                </span>
                <p className="text-sm font-semibold text-white mt-0.5">
                  {concernName}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
