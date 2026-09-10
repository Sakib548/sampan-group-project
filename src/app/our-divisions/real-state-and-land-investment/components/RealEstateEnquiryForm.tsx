"use client";

import { useState } from "react";
import { FaUserTie, FaCheckCircle, FaPaperPlane, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export interface RealEstateEnquiryFormProps {
  title?: string;
  subtitle?: string;
  projectName?: string;
  submitButtonText?: string;
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  unitPreferences?: string[];
  phoneLabel?: string;
  advisoryServices?: string[];
}

export default function RealEstateEnquiryForm({
  title = "Private Consultation",
  subtitle = "Connect with our property advisors to secure your share and discuss equity models.",
  projectName = "Sampan Metro Square",
  submitButtonText = "Request Details",
  bgTheme = "divisions-green",
  unitPreferences,
  phoneLabel = "Phone Number",
  advisoryServices,
}: RealEstateEnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    unitPreference: unitPreferences ? unitPreferences[0] : "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="enquiry-form" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      {/* Radial Ambient Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="border border-current/15 bg-white p-8 sm:p-12 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 left-0 h-1.5 w-full bg-[#ca8a04]" />

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Column - Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 border border-[#ca8a04]/40 bg-[#ca8a04]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ca8a04]">
                <FaUserTie className="text-xs" />
                <span>Confidential Advisory</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current leading-tight">
                {title}
              </h2>

              <p className="text-sm leading-relaxed opacity-80 font-normal max-w-lg">
                {subtitle}
              </p>

              <div className="p-5 bg-[#f3f6f2] border border-current/10 font-mono text-xs space-y-3 mt-4">
                <div className="text-[#ca8a04] font-bold uppercase tracking-wider">
                  Investor Advisory Services
                </div>
                <ul className="space-y-2 opacity-85">
                  {(advisoryServices || [
                    "Direct equity allocation & share distribution",
                    "100% transparent construction cost model review",
                    "Verified clear land deed documentation inspection"
                  ]).map((srv, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#ca8a04] text-[11px]" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <p className="text-xs font-mono opacity-60 uppercase tracking-wider mb-2">Direct Advisory Line</p>
                <a
                  href="tel:+8801929918408"
                  className="inline-flex items-center gap-3 text-lg font-bold text-[#ca8a04] hover:underline"
                >
                  <FaPhoneAlt className="text-sm" />
                  <span>+880 1906 896 327</span>
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-7 bg-[#f3f6f2] border border-current/15 p-8 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <FaCheckCircle className="text-5xl text-emerald-700 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-neutral-950">Inquiry Received!</h3>
                  <p className="text-xs text-neutral-600 max-w-md mx-auto">
                    Thank you for reaching out regarding <span className="font-bold text-[#ca8a04]">{projectName}</span>. A senior property advisor will connect with you shortly to share comprehensive unit availability and pricing details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="border-b border-current/15 pb-3">
                    <span className="text-[#ca8a04] uppercase font-bold tracking-wider">Property Consultation</span>
                    <h3 className="text-lg font-bold text-neutral-950 mt-0.5">{projectName}</h3>
                  </div>

                  <div className="space-y-1">
                    <label className="block uppercase opacity-70">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Mahfuzar Rahman"
                      className="w-full bg-white border border-neutral-300 p-3.5 text-xs text-neutral-950 focus:border-[#ca8a04] focus:outline-none"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block uppercase opacity-70">{phoneLabel}</label>
                      <input
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+880 1711..."
                        className="w-full bg-white border border-neutral-300 p-3.5 text-xs text-neutral-950 focus:border-[#ca8a04] focus:outline-none"
                      />
                    </div>

                    {unitPreferences && unitPreferences.length > 0 ? (
                      <div className="space-y-1">
                        <label className="block uppercase opacity-70">Unit Preference</label>
                        <select
                          value={formData.unitPreference}
                          onChange={(e) => setFormData({ ...formData, unitPreference: e.target.value })}
                          className="w-full bg-white border border-neutral-300 p-3.5 text-xs text-neutral-950 focus:border-[#ca8a04] focus:outline-none cursor-pointer"
                        >
                          {unitPreferences.map((opt, idx) => (
                            <option key={idx} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <label className="block uppercase opacity-70">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="yourname@domain.com"
                          className="w-full bg-white border border-neutral-300 p-3.5 text-xs text-neutral-950 focus:border-[#ca8a04] focus:outline-none"
                        />
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="block uppercase opacity-70">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={`I am interested in securing a condominium unit at ${projectName} and would like to discuss unit availability, pricing, and shared amenity access...`}
                      className="w-full bg-white border border-neutral-300 p-3.5 text-xs text-neutral-950 focus:border-[#ca8a04] focus:outline-none resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#183b2b] hover:bg-[#ca8a04] text-white hover:text-neutral-950 py-4 font-bold uppercase tracking-[0.2em] transition-all shadow-md mt-2 cursor-pointer"
                  >
                    <FaPaperPlane className="text-xs" />
                    <span>{submitButtonText}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
