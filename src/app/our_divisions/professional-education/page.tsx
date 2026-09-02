import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LSHSHero from "./components/LSHSHero";
import LSHSAccreditationProof from "./components/LSHSAccreditationProof";
import LSHSCourseList from "./components/LSHSCourseList";
import LSHSIntakeCountdown from "./components/LSHSIntakeCountdown";
import LSHSEnquiryForm from "./components/LSHSEnquiryForm";
import LSHSLiveChatWidget from "./components/LSHSLiveChatWidget";

export const metadata: Metadata = {
  title: "Professional Education Division Archive | London School of Higher Studies (LSHS)",
  description:
    "Explore Sampan Group's Professional Education division featuring London School of Higher Studies (LSHS) - CIPS accredited qualifications and hospitality courses.",
};

const eduConcerns = [
  {
    id: "london-school-of-higher-studies",
    name: "London School of Higher Studies (LSHS)",
    category: "CIPS Qualifications & Hospitality",
    status: "CIPS Accredited Study Centre",
    location: "London, UK & Dhaka, Bangladesh",
    description: "Prestigious UK-accredited study centre providing Chartered Institute of Procurement & Supply (CIPS) qualifications from Level 2 to Level 6 MCIPS, alongside International Hospitality Management diplomas.",
    image: "/images/brand/lshs.png",
    link: "/our_divisions/professional-education/london-school-of-higher-studies",
    highlights: [
      "CIPS UK Accredited Tuition Centre",
      "Level 2 to Level 6 MCIPS Pathway",
      "98% First-Time Exam Pass Rate",
      "25% OFF Early Bird Tuition Waiver",
    ],
  },
];

export default function ProfessionalEducationArchivePage() {
  return (
    <main className="bg-[#f8fafc] text-[#183b2b] min-h-screen">
      {/* Hero Header */}
      <LSHSHero
        title="Professional Education Division"
        subtitle="London School of Higher Studies (LSHS) Archive & Academic Hub"
        description="Developing global procurement leaders and hospitality professionals through accredited UK qualifications, expert tuition, and chartered career pathways."
      />

      {/* Concerns Grid Section */}
      <section className="py-20 bg-white text-[#183b2b]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0b73b9] bg-sky-100 px-3.5 py-1 rounded-full">
              Division Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-slate-900">
              Flagship Education Institution
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Explore London School of Higher Studies (LSHS) academic programs, CIPS accreditations, and student support channels.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {eduConcerns.map((concern) => (
              <div
                key={concern.id}
                className="bg-sky-50/50 border border-sky-900/10 rounded-3xl p-8 sm:p-12 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 bg-[#f4d210] px-3.5 py-1 rounded-full shadow-sm">
                      {concern.status}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      📍 {concern.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 mb-6">
                    <div className="relative w-24 h-24 bg-white p-2 rounded-2xl border border-sky-200 flex-shrink-0 shadow-sm">
                      <Image
                        src={concern.image}
                        alt={concern.name}
                        fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif group-hover:text-[#0b73b9] transition-colors">
                        {concern.name}
                      </h3>
                      <p className="text-xs font-medium text-[#0b73b9] mt-1 uppercase tracking-wider">
                        {concern.category}
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-slate-600 leading-relaxed mb-6">
                    {concern.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-sky-900/10">
                    {concern.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center text-xs sm:text-sm text-slate-900 font-medium">
                        <span className="text-[#0b73b9] font-bold mr-2">✓</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6">
                  <Link
                    href={concern.link}
                    className="block w-full py-4 rounded-xl bg-[#0c4a6e] hover:bg-[#0b73b9] text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-lg group-hover:scale-[1.01]"
                  >
                    View Full Institution Page & Requirements →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course List Teaser */}
      <LSHSCourseList />

      {/* UK Accreditation Proof */}
      <LSHSAccreditationProof />

      {/* Intake Countdown */}
      <LSHSIntakeCountdown />

      {/* Student Enrollment CTA Form */}
      <LSHSEnquiryForm />

      {/* Live Chat Support Widget */}
      <LSHSLiveChatWidget />
    </main>
  );
}
