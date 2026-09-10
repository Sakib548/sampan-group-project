export default function PartyCenterTestimonials() {
  const reviews = [
    {
      quote: "We hosted our wedding reception for 450 guests at Sampan Highway Inn Party Center. The Mutton Kacchi Biryani and Chicken Roast were praised by every guest. The stage lighting and AC kept everyone comfortable.",
      name: "Engr. Tanvir Ahmed",
      event: "Wedding Reception (450 Guests)",
      rating: "★★★★★",
    },
    {
      quote: "Organized our corporate annual conference here. The sound system, high-speed Wi-Fi, and Chinese buffet catering were top notch. The staff managed valet parking flawlessly.",
      name: "Sabrina Rahman",
      event: "Corporate Annual Gala (200 Delegates)",
      rating: "★★★★★",
    },
    {
      quote: "Best party center along the Dhaka-Sylhet highway corridor! Clean VIP dining saloons, courteous waiters, and delicious food. Highly recommended for family events.",
      name: "Kazi Saifuddin",
      event: "Golden Anniversary Celebration",
      rating: "★★★★★",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full">
            Past Event Stories & Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-slate-900">
            Hear from Our Event Hosts
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Read reviews from families and corporate clients who celebrated their memorable occasions with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-amber-50/40 border border-amber-900/10 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="text-amber-500 text-2xl font-bold mb-4">
                  {r.rating}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-amber-900/10">
                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  {r.name}
                </h3>
                <p className="text-xs text-amber-800 font-medium mt-1">
                  {r.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
