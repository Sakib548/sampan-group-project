export default function GolfHoursOfOperation() {
  const schedule = [
    {
      session: "Early Bird Dawn Practice",
      hours: "06:00 AM - 09:30 AM",
      days: "Daily (Monday - Sunday)",
      details: "Fresh morning air, automated tee setups, complimentary warm-up green access.",
      badge: "Quiet Hours",
    },
    {
      session: "Daytime Open Driving & Clinics",
      hours: "10:00 AM - 05:00 PM",
      days: "Daily (Monday - Sunday)",
      details: "Full Toptracer ball tracking active, pro shop open, sports cafe service.",
      badge: "Standard Rates",
    },
    {
      session: "Floodlit Night Driving & Lounge",
      hours: "05:30 PM - 11:30 PM",
      days: "Daily (Monday - Sunday)",
      details: "High-lumen LED target lights active, DJ music, sports bar, VIP lounge seating.",
      badge: "Peak Hours & Night Atmosphere",
    },
    {
      session: "Weekend Midnight Scramble",
      hours: "11:30 PM - 02:00 AM",
      days: "Friday & Saturday Nights",
      details: "Late-night corporate bay rentals, glowing target balls, private lounge bookings.",
      badge: "Late Night Special",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f8faf6] text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
            Hours of Operation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#091e15]">
            Daily Range & Floodlit Schedule
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Open 7 days a week from early dawn practice to late-night floodlit sports lounge sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {schedule.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-emerald-900/10 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                    {item.badge}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {item.days}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#091e15] font-serif mb-2">
                  {item.session}
                </h3>

                <div className="text-3xl font-bold font-mono text-emerald-800 my-4">
                  ⏰ {item.hours}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-800 flex items-center justify-between">
                <span>Automated Bay Booking Active</span>
                <span className="text-amber-600">✓ Reserved Slots Available</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
