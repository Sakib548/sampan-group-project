"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact-cta"
      className="relative isolate overflow-hidden bg-emerald-800 px-6 py-16 text-white sm:px-12 lg:px-20 lg:py-24"
    >
      {/* Background Decorative Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-24 h-[30rem] w-[30rem] rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Left Column: Text & Buttons */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100">
            Let&apos;s build what comes next
          </p>

          <h2 className="mt-5 text-[clamp(2.25rem,3.7vw,4rem)] font-semibold leading-tight tracking-tight">
            Have a vision for tomorrow?
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Whether you are looking to work with Sampan, explore a concern, or
            start a conversation, our team is ready to hear from you.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-between gap-8 bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-900 transition-colors hover:bg-neutral-950 hover:text-white"
            >
              Contact Sampan
              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            <Link
              href="/concerns"
              className="group inline-flex items-center justify-between gap-8 border border-white/50 px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Explore concerns
              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1"
              >
                ↗
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full bg-white/5 p-8 backdrop-blur-md border border-white/10 lg:p-10">
          <p className="text-sm text-white/80 mb-8 leading-relaxed">
            Have a question? Tell us what you&apos;re interested in and
            we&apos;ll point you the right way.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-xs uppercase tracking-[0.2em] text-emerald-100/70"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors duration-300"
              />
            </div>

            {/* Phone Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-xs uppercase tracking-[0.2em] text-emerald-100/70"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+880 1XXX XXXXXX"
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors duration-300"
              />
            </div>

            {/* Interest Dropdown */}
            <div className="flex flex-col gap-2 relative">
              <label
                htmlFor="interest"
                className="text-xs uppercase tracking-[0.2em] text-emerald-100/70"
              >
                What are you interested in?
              </label>
              <select
                id="interest"
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className="w-full appearance-none bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300 cursor-pointer [&>option]:bg-emerald-800 [&>option]:text-white"
              >
                <option value="" disabled>
                  Select an option...
                </option>
                <option value="booking">Booking</option>
                <option value="investment">Investment</option>
                <option value="careers">Careers</option>
                <option value="general">General</option>
              </select>
              {/* Custom Dropdown Arrow */}
              <span className="pointer-events-none absolute right-0 bottom-4 text-white/50">
                ↓
              </span>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-emerald-900 transition-colors hover:bg-neutral-950 hover:text-white"
              >
                Send
                <span
                  aria-hidden="true"
                  className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
