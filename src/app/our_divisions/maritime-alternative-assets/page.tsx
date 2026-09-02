import type { Metadata } from "next";
import Link from "next/link";
import MaritimeHero from "./components/MaritimeHero";
import MaritimeShipShareWorks from "./components/MaritimeShipShareWorks";
import MaritimeOpportunityStatus from "./components/MaritimeOpportunityStatus";
import MaritimeLegalCredentials from "./components/MaritimeLegalCredentials";
import MaritimeEnquiryForm from "./components/MaritimeEnquiryForm";
import MaritimeWhatsAppCTA from "./components/MaritimeWhatsAppCTA";

export const metadata: Metadata = {
  title: "Maritime & Alternative Assets Division Archive | Sampan Group",
  description:
    "Explore Sampan Group's Maritime / Alternative Assets division featuring Sampan Floating Pearl - fractional luxury vessel equity and coastal charter investments.",
};

const maritimeConcerns = [
  {
    id: "sampan-floating-pearl",
    name: "Sampan Floating Pearl",
    category: "Fractional Maritime Venture",
    status: "Coming Soon — Pre-Launch Phase 1",
    location: "Chittagong - Cox's Bazar - Bay of Bengal Corridor",
    description: "Bangladesh's premier fractional maritime vessel asset opportunity — allowing private investors to hold legal equity share units in a 3,200 GRT luxury cruise vessel operating across coastal Bay of Bengal routes.",
    link: "/our_divisions/maritime-alternative-assets/sampan-floating-pearl",
    highlights: [
      "14.5% - 18% Target Annualized IRR",
      "Quarterly Bank Dividend Payouts",
      "Department of Shipping Registered Title",
      "Complimentary VIP Cruise Stateroom Days",
    ],
  },
];

export default function MaritimeAlternativeAssetsArchivePage() {
  return (
    <main className="bg-[#f8fafc] text-[#183b2b] min-h-screen">
      {/* Hero Header */}
      <MaritimeHero
        title="Maritime / Alternative Assets Division"
        subtitle="Fractional Vessel Equity & High-Yield Alternative Asset Ventures"
        description="Pioneering fractional maritime ownership in Bangladesh — providing institutional-grade transparency, asset-backed security, and quarterly dividend payouts."
      />

      {/* Concerns Grid Section */}
      <section className="py-20 bg-white text-[#183b2b]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0077b6] bg-cyan-100 px-3.5 py-1 rounded-full">
              Division Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#07162c]">
              Flagship Maritime Venture
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Explore Sampan Floating Pearl fractional vessel share opportunity and investment credentials.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {maritimeConcerns.map((concern) => (
              <div
                key={concern.id}
                className="bg-cyan-50/40 border border-cyan-900/10 rounded-3xl p-8 sm:p-12 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 px-3.5 py-1 rounded-full shadow-sm">
                      {concern.status}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      📍 {concern.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 bg-[#07162c] text-amber-400 rounded-2xl border border-cyan-700/50 flex items-center justify-center font-bold text-3xl flex-shrink-0 shadow-md">
                      ⚓
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#07162c] font-serif group-hover:text-[#0077b6] transition-colors">
                        {concern.name}
                      </h3>
                      <p className="text-xs font-medium text-[#0077b6] mt-1 uppercase tracking-wider">
                        {concern.category}
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-slate-600 leading-relaxed mb-6">
                    {concern.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-cyan-900/10">
                    {concern.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center text-xs sm:text-sm text-slate-900 font-medium">
                        <span className="text-[#0077b6] font-bold mr-2">✓</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6">
                  <Link
                    href={concern.link}
                    className="block w-full py-4 rounded-xl bg-[#07162c] hover:bg-[#0077b6] text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-lg group-hover:scale-[1.01]"
                  >
                    View Full Venture Page & Requirements →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Ship Share Works Teaser */}
      <MaritimeShipShareWorks />

      {/* Opportunity Tranches */}
      <MaritimeOpportunityStatus />

      {/* Legal Credentials */}
      <MaritimeLegalCredentials />

      {/* Enquiry Form */}
      <MaritimeEnquiryForm />

      {/* WhatsApp Advisor Trigger */}
      <MaritimeWhatsAppCTA />
    </main>
  );
}
