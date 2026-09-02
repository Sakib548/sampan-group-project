export default function MaritimeLegalCredentials() {
  const credentials = [
    {
      title: "Department of Shipping (Bangladesh)",
      badge: "Government Registration",
      desc: "Vessel ownership deeds legally registered under the Inland & Coastal Shipping Act of Bangladesh.",
      code: "DoS Reg No: BD-DOS-MAR-2026-981",
    },
    {
      title: "Lloyd's Register / Bureau Veritas Class",
      badge: "Maritime Classification",
      desc: "Steel hull structural integrity and seaworthiness certified by international maritime classification societies.",
      code: "Class Notation: 100A1 Passenger",
    },
    {
      title: "Admiralty & Maritime Escrow Charter",
      badge: "Legal Protection",
      desc: "Investor capital held in regulated maritime escrow accounts until sea trials and final vessel registration.",
      code: "Legal Escrow Trust Charter",
    },
    {
      title: "ISO 9001:2015 Safety & Operations",
      badge: "Safety Management",
      desc: "Operating under International Maritime Organization (IMO) SOLAS safety at sea guidelines.",
      code: "IMO SOLAS Compliant",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#07162c] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-cyan-950 px-3.5 py-1 rounded-full border border-cyan-800">
            Legal Governance & Accreditations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-white">
            Legal & Registration Credentials
          </h2>
          <p className="text-base sm:text-lg text-cyan-100/70 mt-4 leading-relaxed">
            Sampan Floating Pearl operates under strict government shipping licenses, maritime classification societies, and admiralty trust charters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((c, idx) => (
            <div
              key={idx}
              className="bg-cyan-950/60 border border-cyan-800/40 hover:border-amber-400/50 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-800/50 block mb-4 w-fit">
                  {c.badge}
                </span>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-serif">
                  {c.title}
                </h3>

                <p className="text-xs text-cyan-100/70 mt-3 leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cyan-800/40 text-[10px] font-mono text-cyan-300 font-bold">
                ✓ {c.code}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
