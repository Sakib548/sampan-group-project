export default function LSHSAccreditationProof() {
  const recognitionFeatures = [
    {
      title: "Recognised Standard",
      icon: "🎖️",
      desc: "CIPS qualifications are used as a benchmark by employers across procurement and supply chain roles.",
    },
    {
      title: "Syllabus-Aligned Training",
      icon: "📖",
      desc: "Our courses are built directly around the current CIPS syllabus and assessment criteria.",
    },
    {
      title: "Career-Relevant Skills",
      icon: "📈",
      desc: "Each level builds practical capability, from operational buying to strategic sourcing.",
    },
    {
      title: "Pathway to Membership",
      icon: "🛡️",
      desc: "Structured progression toward MCIPS Chartered status, with guidance at every level.",
    },
  ];

  return (
    <section id="accreditation" className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Header Block matching reference site */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0b73b9] bg-sky-100 px-3.5 py-1 rounded-full">
                ACCREDITATION & RECOGNITION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 leading-tight">
              A CIPS Approved Study Centre and Exam Centre
            </h2>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0c4a6e]">
              <span className="bg-sky-100 px-3 py-1 rounded-md border border-sky-200">
                STUDY CENTRE (DISTANCE LEARNING)
              </span>
              <span className="bg-sky-100 px-3 py-1 rounded-md border border-sky-200">
                STUDY CENTRE (CLASSROOM-BASED)
              </span>
              <span className="bg-[#f4d210] text-slate-950 px-3 py-1 rounded-md shadow-sm">
                EXAM CENTRE
              </span>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              London School of Higher Studies (LSHS) is a UK-based training provider with a dedicated centre in Dhaka, Bangladesh, delivering CIPS qualifications exclusively. We support learners at every stage of the procurement career journey with structured, industry-aligned courses, flexible study options and qualified tutors — built around practical, real-world application of the CIPS syllabus.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              As an Approved Centre, LSHS is recognised to deliver CIPS qualifications and host CIPS examinations, meaning students can study and sit their exams through the same centre.
            </p>
          </div>

          {/* Right CIPS Certificate Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-b from-sky-50 to-white border-2 border-sky-600/30 rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="bg-[#0c4a6e] text-white p-4 rounded-2xl flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-bold text-sm font-serif">CIPS Awarding Body UK</h4>
                  <p className="text-[10px] text-sky-200">Official Approval Certificate</p>
                </div>
                <span className="text-xs font-mono font-bold bg-[#f4d210] text-slate-950 px-2.5 py-1 rounded">
                  No: 10005967
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-700 bg-white p-4 rounded-xl border border-sky-100 shadow-inner">
                <p className="text-slate-500 font-medium">This is to certify that:</p>
                <p className="text-lg font-bold text-slate-900 font-serif">
                  London School of Higher Studies
                </p>
                <p className="text-[#0b73b9] font-bold">is an Approved Centre for:</p>
                <ul className="space-y-1 text-[11px] font-medium text-slate-600 pt-1">
                  <li>• Certificate in Procurement & Supply Operations</li>
                  <li>• Advanced Certificate in Procurement & Supply Operations</li>
                  <li>• Diploma in Procurement & Supply</li>
                  <li>• Advanced Diploma in Procurement & Supply</li>
                  <li>• Professional Diploma in Procurement & Supply</li>
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 font-medium">Valid until: <strong className="text-slate-900">25th November 2026</strong></span>
                <span className="font-bold text-[#0b73b9]">Centre #: 10005967</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
          {recognitionFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-sky-50/50 border border-sky-900/10 rounded-2xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-sky-200 text-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                {feat.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-serif mb-1">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Official Verification Button */}
        <div className="text-center pt-4">
          <a
            href="https://study.cips.org/countries/bangladesh/london-school-of-higher-studies/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0c4a6e] hover:bg-[#0b73b9] text-[#f4d210] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02]"
          >
            VERIFY LSHS WITH CIPS OFFICIAL WEBSITE ↗
          </a>
        </div>
      </div>
    </section>
  );
}
