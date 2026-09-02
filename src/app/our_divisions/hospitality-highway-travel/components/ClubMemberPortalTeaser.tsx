export default function ClubMemberPortalTeaser() {
  const portalFeatures = [
    { title: "Instant Tee-Time Reservations", desc: "Book TrackMan simulator bays and golf fairway slots in seconds." },
    { title: "Digital Member ID & Guest Passes", desc: "Digital QR gate access for members and pre-approved guest passes." },
    { title: "Account Statement & Bill Settlement", desc: "Track lounge dining charges, annual dues, and instant online payments." },
    { title: "Exclusive Executive Member Directory", desc: "Network with fellow SAGCL members and business trustees." },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#071d13] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-950/80 px-3.5 py-1 rounded-full border border-amber-800">
            Digital Member Portal Teaser
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-white">
            Exclusive SAGCL Member Digital Hub
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/70 mt-4 leading-relaxed">
            Every SAGCL member gains access to our private web portal and mobile app for seamless reservation management and concierge requests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portalFeatures.map((f, idx) => (
            <div
              key={idx}
              className="bg-emerald-950/60 border border-emerald-800/40 hover:border-amber-400/50 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 border border-amber-400/30 flex items-center justify-center font-bold text-lg mb-4">
                  0{idx + 1}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-serif">
                  {f.title}
                </h3>

                <p className="text-xs text-emerald-100/70 mt-2 leading-relaxed">
                  {f.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-800/30 text-[10px] font-mono text-amber-400 font-bold">
                ✓ Member Only Access
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
