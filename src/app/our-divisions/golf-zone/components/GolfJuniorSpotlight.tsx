export default function GolfJuniorSpotlight() {
  const pillars = [
    {
      title: "Little Swingers (Ages 5 - 9)",
      badge: "Grassroots Foundation",
      description: "Fun, game-based learning introducing fundamental posture, hand-eye coordination, balance, and etiquette.",
      highlights: ["SNAG Golf Training Aids", "Weekly Mini Competitions", "Parents-Participate Days"],
    },
    {
      title: "Junior Academy Tour Squad (Ages 10 - 15)",
      badge: "Competitive Development",
      description: "Structured swing mechanics, video trajectory analysis, course management, and physical conditioning.",
      highlights: ["TrackMan Youth Metrics", "Quarterly Junior Medals", "Golf Fitness & Core Strength"],
    },
    {
      title: "Elite Collegiate Pathway (Ages 16 - 18)",
      badge: "Tournament & Scholarship Prep",
      description: "High-performance tournament prep, national handicap building, and international college scholarship advisory.",
      highlights: ["WAGR Ranking Guidance", "Mental Game Coaching", "1-on-1 PGA Mentorship"],
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-emerald-950 to-[#091e15] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-950/80 px-3.5 py-1 rounded-full border border-amber-800">
            Junior & Youth Program Spotlight
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-white">
            Nurturing Bangladesh&apos;s Next Generation of Champions
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/70 mt-4 leading-relaxed">
            Our structured junior pathway equips young athletes with athletic fundamentals, discipline, sportsmanship, and competitive edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-emerald-900/40 border border-emerald-700/40 hover:border-amber-400/50 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-3 py-1 rounded-md border border-amber-800/60 inline-block mb-4">
                  {p.badge}
                </span>

                <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors font-serif">
                  {p.title}
                </h3>

                <p className="text-sm text-emerald-100/80 mt-3 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-emerald-800/40 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300/80 block">
                  Program Highlights
                </span>
                {p.highlights.map((h, i) => (
                  <div key={i} className="flex items-center text-xs text-emerald-100 font-medium">
                    <span className="text-amber-400 mr-2">✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summer Camp Banner Callout */}
        <div className="mt-12 bg-amber-400/10 border border-amber-400/30 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
              Annual Event
            </span>
            <h4 className="text-xl font-bold text-white font-serif mt-2">
              Sampan Junior Summer Golf Camp 2026
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100/80 mt-1 max-w-xl">
              5-day intensive bootcamp covering swing analysis, short game scramble, rules of golf, and junior tournament showcase.
            </p>
          </div>
          <a
            href="#enquiry-form"
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow-lg flex-shrink-0 transition-all"
          >
            Enroll Child in Summer Camp
          </a>
        </div>
      </div>
    </section>
  );
}
