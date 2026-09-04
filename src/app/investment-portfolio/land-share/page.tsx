"use client";

import React, { useState } from "react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FiArrowRight,
  FiMapPin,
  FiDownload,
  FiMessageCircle,
  FiPlay,
  FiCheckCircle,
  FiChevronDown,
} from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// --- Data Mapping from Image ---

const openOpportunities = [
  {
    num: "01",
    name: "Sampan Metro Square (SMS)",
    location: "Ashulia",
    shares: "12 Shares Available",
    price: "Tk 1,50,000 / share",
  },
  {
    num: "02",
    name: "Sampan Motalib Skyline",
    location: "Dhaka",
    shares: "8 Shares Available",
    price: "Tk 2,20,000 / share",
  },
];

const trustSignals = [
  { value: "15+", label: "Years of Development" },
  { value: "100%", label: "Legal Transparency" },
  { value: "500+", label: "Active Investors" },
  { value: "10M sqft", label: "Land Under Management" },
];

const legalCredentials = [
  "RJSC & F Registered Entity",
  "Fully Approved Land Surveys",
  "Mutated & Mutated Khatian Properties",
  "Verified Bank Escrow Accounts",
];

const faqItems = [
  {
    q: "How does Land Share generate returns?",
    a: "As the land appreciates in value due to development and infrastructure growth, the value of your share increases. Returns are realized upon project completion or land sale.",
  },
  {
    q: "Is Land Share legally secure for NRBs?",
    a: "Yes. We handle all RJSC registrations, mutation, and tax compliance specifically tailored for Non-Resident Bangladeshis, ensuring absolute legal security.",
  },
  {
    q: "What is the minimum investment?",
    a: "The minimum investment varies by project but typically starts at 1 share, designed to be accessible while maintaining premium asset quality.",
  },
];

// --- Main Component ---

export default function LandSharePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Hero Multi-Layer Entrance
        const heroTl = gsap.timeline({ delay: 0.3 });
        heroTl
          .fromTo(
            ".hero-title-line",
            { yPercent: 100 },
            { yPercent: 0, duration: 1.2, stagger: 0.15, ease: "power4.out" },
          )
          .fromTo(
            ".hero-sub",
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.8 },
            "-=0.6",
          )
          .fromTo(
            ".hero-number",
            { autoAlpha: 0, scale: 0.8 },
            { autoAlpha: 0.1, scale: 1, duration: 1.5, ease: "power2.out" },
            "-=1.2",
          );

        // Hero Cinematic Parallax (Background slower than content)
        gsap.to(".hero-bg-image", {
          yPercent: 15,
          scale: 1.0,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        // Hero Content Depth (Moves slightly faster than background)
        gsap.to(".hero-content", {
          yPercent: -10,
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        // 2. General Reveals
        gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 60, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%" },
            },
          );
        });

        // 3. Cinematic Image Reveal & Parallax System
        gsap.utils
          .toArray<HTMLElement>(".aa-parallax-image-wrapper")
          .forEach((wrapper) => {
            const img = wrapper.querySelector(".aa-parallax-image");
            if (!img) return;

            // Clip-path Reveal
            gsap.fromTo(
              wrapper,
              { clipPath: "inset(0 100% 0 0)" },
              {
                clipPath: "inset(0 0% 0 0)",
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: { trigger: wrapper, start: "top 85%" },
              },
            );

            // Parallax + Subtle Scale
            gsap.fromTo(
              img,
              { yPercent: -8, scale: 1.1 },
              {
                yPercent: 8,
                scale: 1.0,
                ease: "none",
                scrollTrigger: {
                  trigger: wrapper,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              },
            );
          });

        // 4. Map Subtle Horizontal Movement (Signature Interaction)
        gsap.fromTo(
          ".map-container",
          { xPercent: -3 },
          {
            xPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: ".map-container",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );

        // 5. NRB Cinematic Background
        gsap.fromTo(
          ".nrb-bg-image",
          { scale: 1.08, xPercent: -3 },
          {
            scale: 1.0,
            xPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: ".nrb-section",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );

        // 6. Final CTA Cinematic Background
        gsap.fromTo(
          ".cta-bg-image",
          { scale: 1.12, xPercent: -3 },
          {
            scale: 1.0,
            xPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: ".cta-section",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [".hero-title-line", ".hero-sub", ".hero-number", ".reveal-up"],
          { autoAlpha: 1, y: 0, x: 0, clipPath: "none" },
        );
        gsap.set(
          [
            ".aa-parallax-image-wrapper",
            ".nrb-bg-image",
            ".cta-bg-image",
            ".hero-bg-image",
            ".map-container",
          ],
          { clipPath: "none", scale: 1, xPercent: 0, yPercent: 0 },
        );
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="bg-white text-neutral-950 overflow-x-hidden"
    >
      {/* 1. HERO SECTION */}
      <section className="hero-section relative h-screen w-full flex items-center bg-neutral-950 text-white overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hero-banner.jpg"
            alt="Land Share Background"
            fill
            className="hero-bg-image object-cover scale-110 will-change-transform"
            priority
            sizes="100vw"
          />
        </div>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60 z-[1]"></div>

        {/* Giant Ghost Number */}
        <span className="hero-number absolute right-4 top-4 z-[2] text-[clamp(8rem,20vw,20rem)] font-bold leading-none text-white/10">
          01
        </span>

        <div className="hero-content relative z-10 mx-auto max-w-350p px-5vw w-full will-change-transform">
          <p className="hero-sub mb-8 text-xs font-medium uppercase tracking-[0.3em] text-emerald-400">
            Investment Model
          </p>
          <h1 className="flex flex-col overflow-hidden text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.9] tracking-tighter">
            <span className="hero-title-line block">LAND</span>
            <span className="hero-title-line block text-emerald-500">
              SHARE
            </span>
          </h1>
          <div className="hero-sub mt-12">
            <p className="text-lg leading-relaxed text-white/60">
              Own a fraction of prime real estate. We break down high-value land
              into manageable shares, making premium property investment
              accessible, secure, and transparent.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PLAIN LANGUAGE EXPLANATION */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 mb-4">
              How it Works
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="reveal-up text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
              Own a piece of the land, without buying the whole plot.
            </h2>
            <p className="reveal-up mt-8 text-lg leading-7 text-neutral-600 max-w-3xl">
              Instead of needing millions to buy an entire commercial plot, you
              purchase &quot;shares&quot; of the land—much like buying shares in
              a company. As the land appreciates in value due to development and
              market growth, the value of your share increases. You can hold it
              for passive appreciation or sell your shares when the project
              completes.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OPEN OPPORTUNITIES & BROCHURE */}
      <section className="bg-[#f8f8f8] py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <p className="reveal-up mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Current Openings (SMS)
          </p>
          <h2 className="reveal-up text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight mb-16">
            Available Opportunities
          </h2>

          <div className="grid grid-cols-12 gap-8">
            {/* Open Projects */}
            <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
              {openOpportunities.map((project) => (
                <div
                  key={project.num}
                  className="reveal-up group border border-neutral-200 p-8 hover:border-emerald-500 transition-all duration-300 cursor-pointer bg-white"
                >
                  <div className="flex items-baseline gap-6 mb-6">
                    <span className="text-xl font-semibold text-neutral-300 group-hover:text-emerald-600 transition-colors">
                      {project.num}
                    </span>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center pl-0 md:pl-12 gap-4">
                    <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500">
                      <FiMapPin /> {project.location}
                    </p>
                    <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1">
                      {project.shares}
                    </span>
                    <span className="text-lg font-semibold text-neutral-900">
                      {project.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Brochure Download */}
            <div className="col-span-12 md:col-span-5">
              <div className="reveal-up bg-neutral-950 text-white p-12 h-full flex flex-col justify-center">
                <h3 className="text-3xl font-semibold leading-tight mb-6">
                  Download the Investment Prospectus
                </h3>
                <p className="text-white/60 mb-10">
                  Get detailed financial models, land surveys, and exit
                  strategies for all current Land Share projects.
                </p>
                <button className="group flex items-center justify-between w-full border border-white/30 px-6 py-4 hover:bg-emerald-500 hover:border-emerald-500 hover:text-black transition-all">
                  <span className="text-sm font-bold uppercase tracking-[0.2em]">
                    Download Brochure
                  </span>
                  <FiDownload className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUST SIGNALS & TESTIMONIALS */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-b border-neutral-200 pb-16">
            {trustSignals.map((stat, i) => (
              <div key={i} className="reveal-up flex flex-col">
                <span className="text-4xl md:text-6xl font-bold text-neutral-900">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs uppercase tracking-widest text-neutral-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-2">
              <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                Investor Voice
              </p>
            </div>
            <div className="col-span-12 md:col-span-10">
              <blockquote className="reveal-up text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-[1.3] tracking-tight text-neutral-800">
                “Investing in Land Share was seamless. I always thought real
                estate required massive capital, but Sampan Development made it
                accessible. The legal transparency gave me absolute confidence.”
              </blockquote>
              <div className="reveal-up mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-neutral-300" />
                <div>
                  <p className="font-bold">Rahim Uddin</p>
                  <p className="text-sm text-neutral-500">
                    Investor since 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEGAL & REGISTRATION */}
      <section className="bg-neutral-950 py-20 lg:py-32 text-white">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <p className="reveal-up mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Trust & Security
            </p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
              Legal & Registration Credentials
            </h2>
            <p className="reveal-up mt-6 text-white/60 max-w-md">
              Every square foot is legally vetted, government-registered, and
              secured against fraud.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <ul className="space-y-6">
              {legalCredentials.map((cred, i) => (
                <li
                  key={i}
                  className="reveal-up flex items-center justify-between border-b border-white/10 pb-6"
                >
                  <span className="text-lg md:text-xl font-medium">{cred}</span>
                  <FiCheckCircle className="h-6 w-6 text-emerald-400" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. LOCATION MAP & VIDEO TOUR */}
      <section className="bg-[#f8f8f8] py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <p className="reveal-up mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Site Inspection
          </p>
          <h2 className="reveal-up text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight mb-16">
            Locations & Video Tours
          </h2>

          <div className="grid grid-cols-12 gap-8">
            {/* Abstract Map with Horizontal Movement */}
            <div className="reveal-up col-span-12 md:col-span-6 overflow-hidden">
              <div className="map-container relative h-[400px] w-full border border-neutral-300 bg-white overflow-hidden will-change-transform">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-cover opacity-20"></div>
                <div className="absolute left-[30%] top-[40%] flex flex-col items-center">
                  <span className="h-4 w-4 animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="mt-4 text-xs uppercase tracking-widest text-neutral-700 font-bold">
                    Ashulia SMS
                  </span>
                </div>
                <div className="absolute left-[70%] top-[60%] flex flex-col items-center">
                  <span className="h-4 w-4 animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="mt-4 text-xs uppercase tracking-widest text-neutral-700 font-bold">
                    Mawna Nexus
                  </span>
                </div>
                <span className="absolute bottom-4 left-4 text-[10px] font-mono text-neutral-400">
                  23.8728° N, 90.3984° E
                </span>
              </div>
            </div>

            {/* Video Tour with Cinematic Parallax + Hover */}
            <div className="reveal-up col-span-12 md:col-span-6 space-y-6">
              <div className="aa-parallax-image-wrapper group relative aspect-video w-full overflow-hidden bg-neutral-900 cursor-pointer">
                <Image
                  src="/images.jpg"
                  alt="Video Tour"
                  fill
                  className="aa-parallax-image object-cover opacity-60 group-hover:scale-[1.14] transition-transform duration-700 ease-out will-change-transform"
                  sizes="50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="h-16 w-16 rounded-full border border-white/80 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300">
                    <FiPlay className="ml-1 text-white text-xl" />
                  </div>
                </div>
                <h3 className="absolute bottom-4 left-4 z-10 text-lg font-semibold text-white">
                  Skyline Construction Tour
                </h3>
              </div>
              <p className="text-neutral-600">
                Watch our completed and ongoing projects to see the quality of
                infrastructure and development speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PAYMENT CALCULATOR & SITE VISIT */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid grid-cols-12 gap-8 items-center">
          {/* Calculator */}
          <div className="reveal-up col-span-12 md:col-span-7 bg-neutral-950 text-white p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">
              Payment Plan Calculator
            </h3>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm uppercase tracking-widest text-white/50">
                    Shares
                  </label>
                  <span className="font-bold text-emerald-400">2 Shares</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  defaultValue="2"
                  className="w-full accent-emerald-500"
                />
              </div>
              <div className="border-t border-white/10 pt-8 flex justify-between items-end">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-1">
                    Total Investment
                  </p>
                  <span className="text-4xl md:text-5xl font-bold">
                    Tk 3,00,000
                  </span>
                </div>
                <span className="text-xs text-white/40">
                  *Excludes reg. fees
                </span>
              </div>
            </div>
          </div>

          {/* Site Visit */}
          <div className="reveal-up col-span-12 md:col-span-5 flex flex-col justify-center pl-0 md:pl-8">
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
              See the land before you invest.
            </h3>
            <p className="text-neutral-600 mb-8">
              Book a guided site visit with our investment advisors to inspect
              the properties physically.
            </p>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-4 text-lg font-bold border-b-2 border-emerald-500 pb-2 w-fit text-neutral-900 hover:text-emerald-600 transition-colors"
            >
              Book Site Visit{" "}
              <FiArrowRight className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. NRB SECTION & WHATSAPP CTA */}
      <section className="nrb-section relative bg-[#080808] py-20 lg:py-32 text-white overflow-hidden">
        {/* NRB Cinematic Background */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/nrb-bg.jpg"
            alt="Global Investors"
            fill
            className="nrb-bg-image object-cover opacity-20 scale-110 will-change-transform"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[#080808]/80 z-[1]"></div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-12 grid grid-cols-12 gap-8">
          <div className="reveal-up col-span-12 md:col-span-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Global Investors
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
              NRB / Diaspora Investment Desk
            </h2>
            <p className="mt-6 text-white/60 max-w-lg">
              Dedicated support for Non-Resident Bangladeshis. We handle remote
              paperwork, international fund transfers, and power of attorney
              (POA) formalities.
            </p>
          </div>
          <div className="reveal-up col-span-12 md:col-span-6 flex flex-col justify-center gap-4">
            <a
              href="https://wa.me/8801000000000"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between bg-emerald-500 text-black px-8 py-6 hover:bg-white transition-colors"
            >
              <span className="text-lg font-bold uppercase tracking-widest flex items-center gap-3">
                <FiMessageCircle className="text-2xl" /> Direct WhatsApp Advisor
              </span>
              <FiArrowRight className="transition-transform group-hover:translate-x-2" />
            </a>
            <Link
              href="/crm-enquiry"
              className="group flex items-center justify-between border border-white/30 px-8 py-6 hover:border-emerald-500 hover:text-emerald-400 transition-colors"
            >
              <span className="text-lg font-bold uppercase tracking-widest">
                CRM Enquiry Form
              </span>
              <FiArrowRight className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-[800px] px-6">
          <p className="reveal-up mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 text-center">
            FAQ
          </p>
          <h2 className="reveal-up text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="reveal-up border border-neutral-200 overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-neutral-50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="text-lg font-semibold">{item.q}</span>
                  <FiChevronDown
                    className={`h-5 w-5 text-emerald-600 transition-transform duration-300 ${
                      activeFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    activeFaq === i
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="p-6 pt-0 text-neutral-600 leading-7">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="cta-section relative min-h-[60vh] bg-black text-white flex flex-col justify-center overflow-hidden">
        {/* CTA Cinematic Background */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/cta-bg.jpg"
            alt="Ready to Invest"
            fill
            className="cta-bg-image object-cover opacity-30 scale-110 will-change-transform"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 z-[1]"></div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-12 w-full">
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-tight">
            READY TO <br />
            <span className="text-emerald-500">INVEST</span>?
          </h2>
          <div className="reveal-up mt-16">
            <Link
              href="/contact"
              className="group flex items-center gap-6 text-xl font-semibold border-b border-white/20 pb-4 transition-colors hover:border-emerald-500 hover:text-emerald-400 md:text-2xl w-fit"
            >
              START YOUR APPLICATION
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-all group-hover:border-emerald-500 group-hover:bg-emerald-500">
                <FiArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
