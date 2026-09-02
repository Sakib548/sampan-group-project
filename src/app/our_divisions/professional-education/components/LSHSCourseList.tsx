"use client";

import { useState } from "react";

interface Course {
  id: string;
  code: string;
  level: string;
  title: string;
  tag?: string;
  duration: string;
  entryRequirement: string;
  description: string;
  modules: string[];
  careerOutcome: string;
}

export default function LSHSCourseList() {
  const [activeTab, setActiveTab] = useState<"cips" | "hospitality">("cips");

  const cipsCourses: Course[] = [
    {
      id: "cips-l2",
      code: "CIPS-L2",
      level: "Level 2 | Certificate",
      title: "Certificate in Procurement & Supply Operations",
      duration: "3 - 6 Months",
      entryRequirement: "Complete beginners. No degree or experience needed.",
      description: "Learn what procurement is and why it matters to business. Master effective supplier relationships, sourcing goods and services, and supply chain risk reduction.",
      modules: [
        "What Procurement Is & Why It Matters",
        "Managing Supplier Relationships Effectively",
        "Sourcing Goods & Services Operations",
        "Identifying & Reducing Supply Chain Risk",
      ],
      careerOutcome: "Assistant Buyer, Junior Procurement Clerk, Logistics Assistant",
    },
    {
      id: "cips-l3",
      code: "CIPS-L3",
      level: "Level 3 | Advanced Certificate",
      title: "Advanced Certificate in Procurement & Supply Operations",
      duration: "6 Months",
      entryRequirement: "Completed Level 2 or some procurement experience",
      description: "Develop operational tactical skills in advanced sourcing, managing stakeholders and internal business needs, ethical procurement, and data analysis for buying decisions.",
      modules: [
        "Advanced Sourcing & Procurement Strategy",
        "Managing Stakeholders & Internal Business Needs",
        "Ethical Procurement & Legal Principles",
        "Data Analysis for Better Buying Decisions",
      ],
      careerOutcome: "Procurement Specialist, Operational Buyer, Supply Chain Technician",
    },
    {
      id: "cips-l4",
      code: "CIPS-L4",
      level: "Level 4 | Diploma (Go Professional)",
      title: "Diploma in Procurement & Supply",
      tag: "Flagship Diploma (60 Credits)",
      duration: "9 - 12 Months",
      entryRequirement: "2+ Years Procurement Experience or A-Levels / Degree",
      description: "The pivot point for professionals with industry experience. Pass all 8 module exams to earn 60 credits and complete your official Diploma.",
      modules: [
        "Scope and Influence of Procurement & Supply",
        "Defining Business Need & Specifications",
        "Commercial Contracting & Terms",
        "Ethical Sourcing & Supplier Relationship Management",
        "Commercial Negotiation & Whole Life Asset Management",
        "Procurement in Practice",
      ],
      careerOutcome: "Buyer / Senior Buyer, Procurement Specialist, Contract Administrator, Supply Chain Coordinator",
    },
    {
      id: "cips-l5",
      code: "CIPS-L5",
      level: "Level 5 | Advanced Diploma",
      title: "Advanced Diploma in Procurement & Supply",
      duration: "12 Months",
      entryRequirement: "Mid-to-Senior Managers who completed Level 4",
      description: "Focus on strategic category management across business units, managing and developing procurement teams, supply chain risk, resilience, and sustainability.",
      modules: [
        "Strategic Category Management Across Business Units",
        "Managing & Developing Procurement Teams",
        "Supply Chain Risk, Resilience & Sustainability",
        "Advanced Contract Evaluation & Management",
      ],
      careerOutcome: "Head of Procurement, Supply Chain Director, Category Sourcing Lead",
    },
    {
      id: "cips-l6",
      code: "CIPS-L6",
      level: "Level 6 | Professional Diploma",
      title: "Professional Diploma in Procurement & Supply (MCIPS)",
      tag: "MCIPS Chartered Status",
      duration: "12 Months",
      entryRequirement: "Senior Professionals ready for strategic leadership",
      description: "Strategic ethical leadership in procurement, global supply chain management, commercial strategy, value creation, and financial risk management leading to MCIPS Chartered Status.",
      modules: [
        "Strategic Ethical Leadership in Procurement",
        "Global Supply Chain Management & Resilience",
        "Commercial Strategy & Value Creation",
        "Financial Risk Management & Advanced Contracting",
      ],
      careerOutcome: "Chief Procurement Officer (CPO), VP Global Supply Chain, Managing Director",
    },
  ];

  const hospitalityCourses: Course[] = [
    {
      id: "hosp-l4",
      code: "LSHS-HTM",
      level: "Diploma Level 4",
      title: "Diploma in International Hospitality & Tourism Management",
      duration: "1 Year",
      entryRequirement: "HSC / A-Levels or equivalent",
      description: "Comprehensive UK vocational diploma preparing students for leadership roles in luxury hotel management, resort operations, and event hosting.",
      modules: [
        "Front Office & Concierge Management",
        "Food & Beverage Revenue Strategy",
        "Hotel Marketing & Guest Relations",
        "Events & Conference Operations",
      ],
      careerOutcome: "Hotel Assistant Manager, Guest Relations Director, Resort Operations Executive",
    },
  ];

  const currentCourses = activeTab === "cips" ? cipsCourses : hospitalityCourses;

  return (
    <section id="courses" className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b73b9] bg-sky-100 px-3.5 py-1 rounded-full">
            Official CIPS Qualification Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-slate-900">
            Build Your Foundation with CIPS
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Start at the level that matches your experience. Each builds on the last — all the way to MCIPS Chartered Status.
          </p>

          {/* Catalog Filter Tabs */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab("cips")}
              className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "cips"
                  ? "bg-[#0c4a6e] text-[#f4d210] shadow-lg scale-[1.02]"
                  : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-sky-50"
              }`}
            >
              🎓 CIPS Procurement & Supply Chain (Level 2 - 6)
            </button>
            <button
              onClick={() => setActiveTab("hospitality")}
              className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "hospitality"
                  ? "bg-[#0c4a6e] text-[#f4d210] shadow-lg scale-[1.02]"
                  : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-sky-50"
              }`}
            >
              🏨 Hospitality & Tourism Management
            </button>
          </div>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {currentCourses.map((course) => (
            <div
              key={course.id}
              className="bg-sky-50/50 border border-sky-900/10 hover:border-[#0b73b9]/40 rounded-3xl p-8 transition-all hover:shadow-xl group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-white bg-[#0c4a6e] px-3 py-1 rounded-md">
                    {course.code}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0b73b9] bg-sky-100 px-3 py-1 rounded-md">
                    {course.level}
                  </span>
                  {course.tag && (
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 bg-[#f4d210] px-3 py-1 rounded-md shadow-sm">
                      {course.tag}
                    </span>
                  )}
                </div>

                <div className="text-xs font-semibold text-slate-500">
                  ⏱ Duration: <strong className="text-slate-900">{course.duration}</strong>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 font-serif group-hover:text-[#0b73b9] transition-colors">
                {course.title}
              </h3>

              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                {course.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-sky-900/10 text-xs">
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-slate-400 mb-2">
                    What You Learn
                  </h4>
                  <div className="space-y-1.5">
                    {course.modules.map((m, i) => (
                      <div key={i} className="flex items-center text-slate-700 font-medium">
                        <span className="text-[#0b73b9] font-bold mr-2">✓</span>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Career Progression & Entry
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">Career Outcome:</strong> {course.careerOutcome}
                  </p>
                  <p className="text-slate-700 leading-relaxed mt-2">
                    <strong className="text-slate-900">For:</strong> {course.entryRequirement}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 flex items-center justify-between">
                <a
                  href="#enrollment-form"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0c4a6e] hover:bg-[#0b73b9] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  Apply For This Course →
                </a>
                <a
                  href="#brochure"
                  className="text-xs font-bold text-[#0b73b9] hover:underline"
                >
                  Download Syllabus PDF ↓
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
