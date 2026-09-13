import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaShieldAlt, FaMapMarkerAlt, FaArrowRight, FaCheckCircle, FaLock } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Defense & Security Division | Sampan Group",
  description:
    "Explore Sampan Group's Defense & Security division portfolio, featuring government licensed defense importers and authorized dealerships operating under Ministry of Home Affairs compliance.",
};

const defenseConcerns = [
  {
    id: "sampan-fire-arms-co",
    name: "Sampan Fire Arms Co.",
    category: "Defense Importer",
    status: "Government Enlisted",
    statusType: "licensed",
    location: "Dhaka, Bangladesh",
    description: "Premier government-enlisted defense importer and licensed firearms concern operating under statutory regulatory authorization and official compliance.",
    image: "/images/our-divisions/sampan-firearms/banner.jpg",
    link: "/our-divisions/defense-security/sampan-fire-arms-co",
    accentColor: "#b91c1c",
    highlights: ["Ministry of Home Affairs License", "Biometric Audit Ledger", "Licensed Institutional Supply"],
  },
  {
    id: "nagar-arms-ammunition",
    name: "Nagar Arms & Ammunition",
    category: "Authorized Dealership",
    status: "Government Licensed",
    statusType: "licensed",
    location: "Dhaka, Bangladesh",
    description: "Authorized government-certified armory dealership providing compliant sporting, defense, and armory services strictly to verified license holders.",
    image: "/images/our-divisions/nagar-firearms/banner.jpg",
    link: "/our-divisions/defense-security/nagar-arms-ammunition",
    accentColor: "#c2410c",
    highlights: ["Government Enlisted Armory", "Statutory Compliance Audit", "Authorized Client Services"],
  },
];

export default function DefenseSecurityArchivePage() {
  return (
    <main className="bg-[#fcfbf9] text-[#183b2b] antialiased min-h-screen selection:bg-[#b91c1c] selection:text-white">

      {/* Archive Dark Hero Header */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 border-b border-white/10 overflow-hidden bg-[#0c0808] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-white">
              Defense &amp; <br />
              <span className="text-red-500">Security Division</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light max-w-2xl border-l-2 border-red-500/80 pl-4">
              Sampan Group’s Defense &amp; Security concerns represent trusted government-enlisted defense contractors and authorized arms dealers, operating under strict Ministry of Home Affairs compliance and the statutory Arms Act in Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Concerns Grid Section */}
      <section className="py-20 bg-[#fcfbf9] text-[#183b2b] relative overflow-hidden border-b border-neutral-200">
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {defenseConcerns.map((concern) => (
              <article
                key={concern.id}
                className="group border border-neutral-200 bg-white flex flex-col justify-between overflow-hidden hover:border-neutral-900 transition-all duration-300 shadow-sm hover:shadow-md rounded-none"
              >
                <div>
                  {/* Photo Header Box */}
                  <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={concern.image}
                      alt={concern.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-white/20 font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 text-white rounded-none">
                      {concern.category}
                    </span>

                    <span className="absolute top-4 right-4 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border backdrop-blur-md flex items-center gap-1 bg-red-950/70 text-red-300 border-red-500/40 rounded-none">
                      <FaLock className="text-[9px]" />
                      <span>{concern.status}</span>
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                      <FaMapMarkerAlt style={{ color: concern.accentColor }} />
                      <span>{concern.location}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-neutral-950 leading-snug">
                      {concern.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {concern.description}
                    </p>

                    <div className="pt-3 border-t border-neutral-100 space-y-2">
                      {concern.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-700 font-mono">
                          <FaCheckCircle className="text-red-700 text-[10px] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <Link
                    href={concern.link}
                    className="w-full inline-flex items-center justify-between text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-none cursor-pointer"
                    style={{ backgroundColor: concern.accentColor }}
                  >
                    <span>Explore Concern</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
