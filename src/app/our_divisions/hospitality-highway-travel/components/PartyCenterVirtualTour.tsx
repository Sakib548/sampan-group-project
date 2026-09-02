export default function PartyCenterVirtualTour() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#1e1b18] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950 px-3.5 py-1 rounded-full border border-amber-800">
          Virtual Venue Exploration
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-white">
          Virtual Hall & Restaurant Tour
        </h2>
        <p className="text-base sm:text-lg text-amber-100/70 mt-4 leading-relaxed max-w-2xl mx-auto">
          Explore our central AC banquet hall, wedding stage setups, VIP dining saloons, and kitchen hygiene standards in 4K resolution.
        </p>

        <div className="mt-12 relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden border-2 border-amber-700/40 shadow-2xl bg-amber-950 flex items-center justify-center group">
          <div className="text-center p-8 space-y-4">
            <div className="w-20 h-20 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-3xl mx-auto shadow-xl group-hover:scale-110 transition-transform cursor-pointer">
              ▶
            </div>
            <h3 className="text-xl font-bold font-serif text-white">
              Sampan Highway Inn Restaurant & Party Center Virtual Hall Tour
            </h3>
            <p className="text-xs text-amber-200/80">
              Duration: 3 Mins 20 Secs • 4K High Definition Stage & Lighting Tour
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
