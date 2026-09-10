export default function PartyCenterOverview() {
  const pillars = [
    {
      title: "Grand Air-Conditioned Banquet Hall",
      description: "Spacious central AC hall accommodating 500+ guests for weddings, receptions, corporate galas, and anniversary celebrations.",
      tag: "500+ Guest Hall",
    },
    {
      title: "Master Chefs & Gourmet Catering",
      description: "Traditional Kacchi Biryani, Polao, Roast, Chinese & Continental buffets prepared by veteran executive culinary chefs.",
      tag: "Gourmet Catering",
    },
    {
      title: "Stage, Lighting & Audio Infrastructure",
      description: "Built-in elevated stage, LED ambient lighting, surround acoustic sound system, and dedicated bride & groom preparation rooms.",
      tag: "Event Setup",
    },
    {
      title: "Highway Accessibility & Valet Parking",
      description: "Convenient highway location with dedicated valet parking for 100+ vehicles and 24/7 security surveillance.",
      tag: "Parking & Security",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full">
            Venue Overview
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-slate-900">
            Unforgettable Celebrations & Fine Highway Dining
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Sampan Highway Inn Restaurant & Party Center combines traditional hospitality, grand banquet spaces, and master culinary feasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-amber-50/40 border border-amber-900/10 rounded-3xl p-8 transition-all hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-md inline-block mb-4">
                  {p.tag}
                </span>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors font-serif mb-3">
                  {p.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-900/10 text-xs font-semibold text-amber-700 flex items-center justify-between">
                <span>Standard Feature</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
