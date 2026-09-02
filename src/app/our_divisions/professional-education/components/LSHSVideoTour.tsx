export default function LSHSVideoTour() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#0c4a6e] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#f4d210] bg-sky-950 px-3.5 py-1 rounded-full border border-sky-800">
          Virtual Campus Tour
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-white">
          Explore LSHS London & Online Learning Studio
        </h2>
        <p className="text-base sm:text-lg text-sky-100/70 mt-4 leading-relaxed max-w-2xl mx-auto">
          Watch our virtual campus tour video demonstrating our Camden High Street classrooms, digital study portal, and CIPS student support ecosystem.
        </p>

        <div className="mt-12 relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden border-2 border-sky-700/40 shadow-2xl bg-sky-950 flex items-center justify-center group">
          <div className="text-center p-8 space-y-4">
            <div className="w-20 h-20 rounded-full bg-[#f4d210] text-slate-950 flex items-center justify-center font-bold text-3xl mx-auto shadow-xl group-hover:scale-110 transition-transform cursor-pointer">
              ▶
            </div>
            <h3 className="text-xl font-bold font-serif text-white">
              London School of Higher Studies Virtual Tour Video
            </h3>
            <p className="text-xs text-sky-200">
              Duration: 3 Mins 45 Secs • 4K High Definition
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
