"use client";

import { FaShieldAlt, FaBath, FaDoorOpen, FaThLarge, FaUtensils, FaBolt, FaBuilding, FaTint } from "react-icons/fa";

export interface SpecificationCategory {
  categoryName: string;
  iconName: "structure" | "bath" | "doors" | "floors" | "kitchen" | "utility" | "lift" | "walls";
  items: string[];
}

export interface BuildingSpecificationsModuleProps {
  projectName: string;
  subheading?: string;
  categories: SpecificationCategory[];
  developerInfo?: {
    companyName: string;
    tagline?: string;
    corporateOffice?: string;
    phones?: string[];
    website?: string;
    rehabMember?: boolean;
  };
  bgTheme?: "divisions-green" | "about-ivory" | "dark";
}

const getCategoryIcon = (iconName: SpecificationCategory["iconName"]) => {
  switch (iconName) {
    case "structure":
      return <FaShieldAlt className="text-emerald-600 text-lg sm:text-xl" />;
    case "bath":
      return <FaBath className="text-emerald-600 text-lg sm:text-xl" />;
    case "doors":
      return <FaDoorOpen className="text-emerald-600 text-lg sm:text-xl" />;
    case "floors":
      return <FaThLarge className="text-emerald-600 text-lg sm:text-xl" />;
    case "kitchen":
      return <FaUtensils className="text-emerald-600 text-lg sm:text-xl" />;
    case "utility":
      return <FaBolt className="text-emerald-600 text-lg sm:text-xl" />;
    case "lift":
      return <FaBuilding className="text-emerald-600 text-lg sm:text-xl" />;
    case "walls":
      return <FaTint className="text-emerald-600 text-lg sm:text-xl" />;
    default:
      return <FaShieldAlt className="text-emerald-600 text-lg sm:text-xl" />;
  }
};

export default function BuildingSpecificationsModule({
  projectName,
  subheading = "Official Engineering & Architectural Specifications",
  categories,
  developerInfo,
  bgTheme = "about-ivory",
}: BuildingSpecificationsModuleProps) {
  const isGreen = bgTheme === "divisions-green";

  return (
    <section
      className={`py-20 sm:py-28 relative border-t ${
        isGreen
          ? "bg-[#183b2b] text-white border-white/10"
          : "bg-[#f8faf7] text-[#183b2b] border-[#183b2b]/10"
      }`}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mb-4 rounded-full">
            <span>Project Specifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {projectName} <span className="font-light text-emerald-600">Building Standards</span>
          </h2>
          <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isGreen ? "text-white/70" : "text-[#183b2b]/70"}`}>
            {subheading}
          </p>
        </div>

        {/* Specification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                isGreen
                  ? "bg-white/[0.04] border-white/10 hover:border-emerald-400/40 hover:bg-white/[0.07]"
                  : "bg-white border-[#183b2b]/10 hover:border-emerald-600/40 shadow-sm hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-emerald-500/20">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="font-bold text-base tracking-tight leading-snug">
                    {cat.categoryName}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span className={isGreen ? "text-white/80" : "text-[#183b2b]/85"}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Info Card */}
        {developerInfo && (
          <div
            className={`mt-14 p-8 rounded-3xl border ${
              isGreen
                ? "bg-white/[0.05] border-white/15 text-white"
                : "bg-white border-[#183b2b]/15 text-[#183b2b] shadow-md"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold tracking-tight text-emerald-600">
                    {developerInfo.companyName}
                  </h3>
                  {developerInfo.rehabMember && (
                    <span className="bg-emerald-600 text-white font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Member REHAB
                    </span>
                  )}
                </div>
                {developerInfo.tagline && (
                  <p className="text-xs font-medium text-emerald-600/80 italic mt-0.5">
                    "{developerInfo.tagline}"
                  </p>
                )}
                {developerInfo.corporateOffice && (
                  <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${isGreen ? "text-white/70" : "text-[#183b2b]/70"}`}>
                    <strong className="font-semibold text-emerald-600">Corporate Office:</strong> {developerInfo.corporateOffice}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-8 border-t lg:border-t-0 lg:border-l border-emerald-500/20 pt-4 lg:pt-0 lg:pl-8">
                {developerInfo.phones && developerInfo.phones.length > 0 && (
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 block">
                      Phone Enquiries
                    </span>
                    <span className="text-xs sm:text-sm font-medium">
                      {developerInfo.phones.join(" • ")}
                    </span>
                  </div>
                )}
                {developerInfo.website && (
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 block">
                      Official Portal
                    </span>
                    <a
                      href={`https://${developerInfo.website.replace(/^https?:\/\//, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs sm:text-sm font-semibold text-emerald-600 hover:underline"
                    >
                      {developerInfo.website}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
