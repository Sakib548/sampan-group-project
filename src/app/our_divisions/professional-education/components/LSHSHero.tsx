import Image from "next/image";

interface FactItem {
  value: string;
  label: string;
}

interface LSHSHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  facts?: FactItem[];
}

export default function LSHSHero({
  title = "London School of Higher Studies (LSHS)",
  subtitle = "Build A Stronger Business with CIPS — The World's Leading Procurement Qualification",
  description = "LSHS is an officially approved CIPS UK Study and Exam Centre (Centre No: 10005967). Receive identical UK qualifications in Bangladesh, taught by a 25-year CIPS Fellow while saving over 80% on overall expenses.",
  facts = [
    { value: "No: 10005967", label: "Official CIPS Approved Centre" },
    { value: "25-Yr Fellow", label: "Expert CIPS Tutor Support" },
    { value: "Save 80%+", label: "Expense Savings vs UK Study" },
    { value: "20% Higher", label: "Average Salary Boost" },
  ],
}: LSHSHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0c4a6e] text-white pt-32 pb-20 px-6 sm:px-12 lg:px-20">
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-[#0b73b9]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 rounded-full bg-[#f4d210]/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Text Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#0b73b9]/30 text-sky-200 border border-sky-400/30">
              CIPS UK Approved Centre • Centre No: 10005967
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#f4d210]/20 text-[#f4d210] border border-[#f4d210]/40">
              <span className="w-2 h-2 rounded-full bg-[#f4d210] animate-pulse" />
              A Sampan Group Concern
            </span>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif leading-tight">
              {title}
            </h1>
            <p className="mt-3 text-lg sm:text-xl font-medium text-sky-100/90">
              {subtitle}
            </p>
          </div>

          <p className="text-base sm:text-lg text-sky-100/80 leading-relaxed max-w-2xl">
            {description}
          </p>

          {/* Quick Contact & Action Buttons */}
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="#enrollment-form"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm bg-[#f4d210] hover:bg-amber-300 text-slate-900 shadow-lg shadow-sky-950/50 transition-all hover:scale-[1.02]"
            >
              Apply for CIPS Admission →
            </a>
            <a
              href="#courses"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all"
            >
              Explore Level 2 to MCIPS Pathway
            </a>
          </div>

          {/* Official Accreditation Badges & Social Links */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-sky-100/90 font-medium border-t border-sky-800/40">
            <span className="flex items-center gap-1.5">
              🌐 <a href="https://www.lshs.co.uk" target="_blank" rel="noreferrer" className="text-[#f4d210] hover:underline font-bold">www.lshs.co.uk</a>
            </span>
            <span className="flex items-center gap-1.5">
              📜 License: <strong className="text-white font-mono">TRAD/DNCC/034723/2025</strong>
            </span>
            <span className="flex items-center gap-3">
              <a href="https://facebook.com/lshs.co.uk/" target="_blank" rel="noreferrer" className="text-sky-200 hover:text-[#f4d210]">Facebook</a>
              <span>•</span>
              <a href="https://linkedin.com/company/lshs.co.uk" target="_blank" rel="noreferrer" className="text-sky-200 hover:text-[#f4d210]">LinkedIn</a>
            </span>
          </div>

          {/* Facts Grid */}
          <div className="pt-6 border-t border-sky-800/50 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {facts.map((fact, idx) => (
              <div key={idx} className="bg-sky-950/50 border border-sky-800/40 rounded-xl p-4">
                <div className="text-xl sm:text-2xl font-bold text-[#f4d210]">{fact.value}</div>
                <div className="text-xs text-sky-200/70 mt-1 font-medium">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Crest Display */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md aspect-square bg-gradient-to-b from-sky-900/50 to-sky-950/90 rounded-3xl border border-sky-700/40 p-8 shadow-2xl flex flex-col items-center justify-center group hover:border-[#0b73b9] transition-all">
            <div className="absolute inset-4 rounded-2xl border border-sky-500/20 pointer-events-none" />

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/images/brand/lshs.png"
                alt="London School of Higher Studies Logo"
                fill sizes="100vw"
                priority
                className="object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
              />
            </div>

            <div className="mt-4 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#f4d210]">
                CIPS UK Approved Centre #10005967
              </span>
              <p className="text-sm font-semibold text-white mt-0.5">
                London School of Higher Studies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
