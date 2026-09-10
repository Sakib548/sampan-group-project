export default function MaritimeVideoWalkthrough() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#07162c] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-cyan-950 px-3.5 py-1 rounded-full border border-cyan-800">
          Virtual Vessel Exploration
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-white">
          4K Video Walkthrough of Sampan Floating Pearl
        </h2>
        <p className="text-base sm:text-lg text-cyan-100/70 mt-4 leading-relaxed max-w-2xl mx-auto">
          Explore the luxury staterooms, dining saloons, sun deck lounges, and engine control rooms in our virtual 3D vessel tour.
        </p>

        <div className="mt-12 relative aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden border-2 border-cyan-700/40 shadow-2xl bg-cyan-950 flex items-center justify-center group">
          <div className="text-center p-8 space-y-4">
            <div className="w-20 h-20 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-3xl mx-auto shadow-xl group-hover:scale-110 transition-transform cursor-pointer">
              ▶
            </div>
            <h3 className="text-xl font-bold font-serif text-white">
              Sampan Floating Pearl 3D Virtual Walkthrough
            </h3>
            <p className="text-xs text-cyan-200/80">
              Duration: 4 Mins 15 Secs • 4K Ultra HD Spatial Audio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
