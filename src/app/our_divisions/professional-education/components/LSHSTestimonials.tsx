export default function LSHSTestimonials() {
  const testimonials = [
    {
      quote: "Studying CIPS Level 4 and Level 5 through LSHS transformed my supply chain career. The instructors provided real-world UK procurement case studies and exam techniques that helped me pass every module on my first attempt.",
      name: "Tariqul Alam, MCIPS",
      role: "Head of Procurement",
      company: "Multinational FMCG Group",
      qualification: "CIPS Level 6 Graduate",
    },
    {
      quote: "LSHS offered flexible weekend study schedules and guidance that allowed me to balance my full-time job while preparing for CIPS exams. Achieving MCIPS status opened global doors for my career.",
      name: "Farhana Yasmin",
      role: "Senior Supply Chain Analyst",
      company: "International Energy Enterprise",
      qualification: "CIPS Level 5 Advanced Diploma",
    },
    {
      quote: "The faculty at LSHS Camden campus and online portal are top notch. Their structured tuition and mock exam question banks gave me immense confidence during my CIPS assessments.",
      name: "Kazi Sajjad Hossain",
      role: "Category Sourcing Manager",
      company: "Pharmaceutical Industry",
      qualification: "CIPS Level 4 Diploma",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b73b9] bg-sky-100 px-3.5 py-1 rounded-full">
            Student Testimonials & Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-slate-900">
            Hear from LSHS & CIPS Graduates
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Read how LSHS tuition and CIPS qualifications elevated the careers of procurement leaders across Bangladesh and international markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-sky-50/50 border border-sky-900/10 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="text-amber-500 text-2xl font-bold mb-4">
                  ★★★★★
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-sky-900/10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0b73b9] block">
                  {t.qualification}
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-serif mt-1">
                  {t.name}
                </h3>
                <p className="text-xs text-slate-500">
                  {t.role} • {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
