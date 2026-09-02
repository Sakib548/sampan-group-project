export default function LSHSContactDetails() {
  const contacts = [
    {
      title: "CIPS UK & Admissions Office",
      flag: "🇬🇧 UK Office",
      address: "123-125 Camden High Street, London, NW1 7JH, United Kingdom",
      phone: "+44 7515 106586",
      phoneHref: "tel:+447515106586",
      email: "info@lshs.co.uk",
      website: "www.lshs.co.uk",
      centreNo: "Centre #10005967",
      hours: "09:00 AM - 05:30 PM (BST)",
    },
    {
      title: "Bangladesh Admissions & Exam Desk",
      flag: "🇧🇩 BD Admissions",
      address: "Dhaka & Kashiani Study Centres, Bangladesh",
      phone: "+880 1906 896326",
      phoneHref: "tel:+8801906896326",
      email: "info@lshs.co.uk",
      website: "www.lshs.co.uk",
      license: "License: TRAD/DNCC/034723/2025",
      hours: "09:00 AM - 06:00 PM (BST)",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f8fafc] text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b73b9] bg-sky-100 px-3.5 py-1 rounded-full">
            Start Your CIPS Journey Today
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-slate-900">
            Get in Touch with LSHS Admissions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Quality education should be easy to access. Connect directly with our UK admissions team and local CIPS counselors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {contacts.map((c, idx) => (
            <div
              key={idx}
              className="bg-white border border-sky-900/10 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 bg-[#f4d210] px-3 py-1 rounded-md shadow-sm">
                    {c.flag}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#0b73b9]">
                    {c.centreNo || c.license}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 font-serif mb-2">
                  {c.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  📍 {c.address}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-100 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Direct Phone / WhatsApp:</span>
                    <a href={c.phoneHref} className="font-bold text-[#0b73b9] hover:underline">
                      {c.phone}
                    </a>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Official Email:</span>
                    <a href={`mailto:${c.email}`} className="font-bold text-slate-900 hover:underline">
                      {c.email}
                    </a>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Official Website:</span>
                    <a href="https://www.lshs.co.uk" target="_blank" rel="noreferrer" className="font-bold text-[#0b73b9] hover:underline">
                      {c.website}
                    </a>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Admissions Hours:</span>
                    <span className="font-mono text-xs text-slate-700">{c.hours}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={c.phoneHref}
                  className="block w-full py-3.5 rounded-xl bg-[#0c4a6e] hover:bg-[#0b73b9] text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md"
                >
                  Call Admissions Counselors
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
