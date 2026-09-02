export default function PartyCenterFacilities() {
  const facilities = [
    {
      title: "Grand Air-Conditioned Banquet Hall",
      detail: "Column-free banquet space with central AC, crystal chandeliers, and 500+ seated guest capacity.",
      icon: "🏰",
    },
    {
      title: "VIP Private Dining Saloons",
      detail: "Private family dining suites and executive boardroom tables for private meetings and family gatherings.",
      icon: "🛋️",
    },
    {
      title: "Elevated Stage & Pro Acoustic Sound",
      detail: "Customizable wedding stage, LED ambient backdrop lighting, and pro-grade sound system with microphones.",
      icon: "🎤",
    },
    {
      title: "Dedicated Bride & Groom Prep Suites",
      detail: "Private air-conditioned dressing rooms with full mirrors, en-suite washrooms, and security safes.",
      icon: "👑",
    },
    {
      title: "High-Capacity Generator Backup",
      detail: "100% uninterrupted 24/7 power backup guaranteed throughout your entire event.",
      icon: "⚡",
    },
    {
      title: "Valet Parking & Security",
      detail: "Spacious paved parking lot for 100+ vehicles with dedicated valet drivers and CCTV security.",
      icon: "🅿️",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f8faf6] text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full">
            Venue Amenities & Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-slate-900">
            Facilities & Guest Amenities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Every detail is designed for your guests&apos; comfort, seamless event execution, and unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="bg-white border border-amber-900/10 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-2xl flex items-center justify-center flex-shrink-0 border border-amber-200">
                {fac.icon}
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 font-serif mb-2">
                  {fac.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {fac.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
