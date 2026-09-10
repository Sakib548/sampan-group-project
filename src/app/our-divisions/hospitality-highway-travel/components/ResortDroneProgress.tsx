export default function ResortDroneProgress() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#071d13] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
          On-Site Construction Telemetry
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-white">
          Drone Footage of On-Site Progress
        </h2>
        <p className="text-base sm:text-lg text-emerald-100/70 mt-4 leading-relaxed max-w-2xl mx-auto">
          Watch 4K aerial drone telemetry tracking fairway grading, agro greenhouse construction, lake pier excavation, and villa foundations.
        </p>

        <div className="mt-12 relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden border-2 border-emerald-700/40 shadow-2xl bg-emerald-950 flex items-center justify-center group">
          <div className="text-center p-8 space-y-4">
            <div className="w-20 h-20 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center font-bold text-3xl mx-auto shadow-xl group-hover:scale-110 transition-transform cursor-pointer">
              ▶
            </div>
            <h3 className="text-xl font-bold font-serif text-white">
              Sampan Agro & Golf Resort Aerial Progress Report (Q3 2026)
            </h3>
            <p className="text-xs text-emerald-200/80">
              Shot in 4K Ultra HD • Updated Bi-Weekly by On-Site Survey Engineers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
