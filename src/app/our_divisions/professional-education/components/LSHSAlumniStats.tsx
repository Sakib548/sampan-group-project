export default function LSHSAlumniStats() {
  const stats = [
    { value: "20%", label: "Higher Salary Premium", detail: "Certified CIPS professionals command up to 20% higher average salaries globally" },
    { value: "65%", label: "Employer Preference", detail: "Of top multinational & corporate employers prefer CIPS-qualified candidates" },
    { value: "200K+", label: "Global Professional Network", detail: "Elite network of over 200,000 certified experts across leading industries worldwide" },
    { value: "80%+", label: "Expense Savings vs UK", detail: "Zero airfare & zero UK rent — exact same UK curriculum delivered locally in Bangladesh" },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f8fafc] text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b73b9] bg-sky-100 px-3.5 py-1 rounded-full">
            What You Gain as a Professional
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-slate-900">
            Measurable Career & Financial Impact
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            A CIPS qualification doesn&apos;t just teach you. It opens doors globally and delivers proven salary progression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((st, idx) => (
            <div
              key={idx}
              className="bg-white border border-sky-900/10 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-bold font-serif text-[#0b73b9]">
                  {st.value}
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-3">
                  {st.label}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {st.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[10px] font-bold text-[#0b73b9] uppercase tracking-wider">
                ✓ Official CIPS Global Fact
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
