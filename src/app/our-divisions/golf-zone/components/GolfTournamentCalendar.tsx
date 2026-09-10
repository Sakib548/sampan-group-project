export default function GolfTournamentCalendar() {
  const events = [
    {
      date: "OCT 24, 2026",
      title: "Sampan Academy Autumn Open Medal",
      category: "Stroke Play Competition",
      format: "18-Hole Simulator Stroke Play",
      eligibility: "Open to Academy Members & Guests",
      status: "Registration Open",
    },
    {
      date: "NOV 12, 2026",
      title: "TrackMan Long Drive Championship",
      category: "Power Driving Challenge",
      format: "3-Ball Longest Drive Elimination",
      eligibility: "All Handicap Levels",
      status: "Pre-Registration",
    },
    {
      date: "DEC 05, 2026",
      title: "PGA Swing Optics Masterclass",
      category: "Coaching Clinic",
      format: "Interactive Workshop with Coach David Ross",
      eligibility: "Limited to 15 Participants",
      status: "Filling Fast",
    },
    {
      date: "JAN 18, 2027",
      title: "Junior Winter Trophy 2027",
      category: "Youth Tournament",
      format: "9-Hole Scramble & Skills Challenge",
      eligibility: "Junior Golfers Under 18",
      status: "Upcoming",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
            Tournament & Event Calendar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#091e15]">
            Upcoming Academy Competitions & Clinics
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Test your skills in monthly medal stroke plays, swing analysis workshops, and seasonal member tournaments.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {events.map((evt, idx) => (
            <div
              key={idx}
              className="bg-emerald-50/60 border border-emerald-900/10 hover:border-emerald-600/30 rounded-2xl p-6 transition-all hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-6">
                <div className="w-24 h-20 rounded-xl bg-[#091e15] text-amber-400 flex flex-col items-center justify-center font-mono font-bold text-center p-2 flex-shrink-0">
                  <span className="text-xs text-emerald-300 font-semibold">{evt.date.split(" ")[0]}</span>
                  <span className="text-2xl text-amber-400">{evt.date.split(" ")[1].replace(",", "")}</span>
                  <span className="text-[10px] text-emerald-300/80">{evt.date.split(" ")[2]}</span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                      {evt.category}
                    </span>
                    <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      {evt.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#091e15] font-serif">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Format: {evt.format} • {evt.eligibility}
                  </p>
                </div>
              </div>

              <a
                href="#enquiry-form"
                className="px-5 py-2.5 rounded-xl bg-[#091e15] hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider text-center flex-shrink-0 transition-colors"
              >
                Register Event
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
