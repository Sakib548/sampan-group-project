interface Instructor {
  name: string;
  role: string;
  certification: string;
  experience: string;
  specialty: string;
  bio: string;
  highlights: string[];
}

interface GolfInstructorProfilesProps {
  instructors?: Instructor[];
}

export default function GolfInstructorProfiles({
  instructors = [
    {
      name: "David Ross, PGA",
      role: "Head Master Golf Instructor",
      certification: "Class A PGA Master Professional",
      experience: "18+ Years International Coaching",
      specialty: "Swing Biomechanics & TrackMan 4 Analysis",
      bio: "Former Asian Tour competitor specializing in elite swing mechanics, Launch Monitor telemetry, and customized player development pipelines.",
      highlights: ["TrackMan Certified Master", "Asian Tour Veteran", "Coached 12+ National Champions"],
    },
    {
      name: "Zainab Chowdhury",
      role: "Director of Junior Golf & Youth Development",
      certification: "USGTF Certified Master Instructor",
      experience: "12+ Years Youth Coaching",
      specialty: "Junior Talent Pathways & Kinetic Fundamentals",
      bio: "Dedicated to nurturing Bangladesh's next generation of golfers with structured fundamental clinics, mental toughness training, and tournament prep.",
      highlights: ["USGTF Master Certified", "Youth Scholarship Director", "BioSwing Dynamics Level 2"],
    },
    {
      name: "Mahmudul Hasan",
      role: "Senior Fitting & Short Game Specialist",
      certification: "Titleist Performance Institute (TPI) Certified",
      experience: "10+ Years Equipment Fitting",
      specialty: "Precision Fitting & Wedge Matrix Systems",
      bio: "Expert in bespoke club fitting, putter alignment optics, and short-game scramble strategies tailored for all handicap levels.",
      highlights: ["TPI Level 3 Certified", "Custom Club Master Fitter", "Short Game Scoring Guru"],
    },
  ],
}: GolfInstructorProfilesProps) {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f8faf6] text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
            Instructor Profiles & Coaching Staff
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#091e15]">
            PGA-Certified Masters & Fitting Specialists
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Train under international PGA-certified professionals and sports scientists dedicated to elevating your golf performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((coach, idx) => (
            <div
              key={idx}
              className="bg-white border border-emerald-900/10 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#091e15] to-emerald-800 text-amber-400 flex items-center justify-center font-serif text-3xl font-bold mb-6 shadow-md">
                  {coach.name.split(" ")[0][0]}
                  {coach.name.split(" ")[1]?.[0] || ""}
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200 inline-block mb-3">
                  {coach.certification}
                </span>

                <h3 className="text-2xl font-bold text-[#091e15] group-hover:text-emerald-800 transition-colors font-serif">
                  {coach.name}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mt-1 uppercase tracking-wider">
                  {coach.role} • {coach.experience}
                </p>

                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  {coach.bio}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Core Specialization: {coach.specialty}
                </span>
                <div className="space-y-1.5">
                  {coach.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center text-xs font-medium text-emerald-950">
                      <span className="text-amber-500 mr-2">★</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
