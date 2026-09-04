"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FiArrowRight,
  FiArrowDown,
  FiPlay,
  FiPlus,
  FiChevronLeft,
  FiChevronRight,
  FiUpload,
} from "react-icons/fi";

// Register plugins only on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

// --- Mock Data ---

const cultureKeywords = ["PEOPLE", "PURPOSE", "GROWTH", "IMPACT"];

const testimonials = [
  {
    name: "Tahsin Rahman",
    role: "Project Manager, Development",
    quote:
      "Sampan has given me the opportunity to learn, contribute, and grow in ways I never imagined.",
    image: "/images/emp-1.jpg",
  },
  {
    name: "Anika Tabassum",
    role: "Hospitality Lead",
    quote:
      "Every day is a chance to create premium experiences. The team feels more like a family.",
    image: "/images/emp-2.jpg",
  },
  {
    name: "Arif Hossain",
    role: "Agro Specialist",
    quote:
      "Working towards sustainable agriculture here gives my work real meaning and impact.",
    image: "/images/emp-3.jpg",
  },
];

const photoWall = [
  {
    src: "/images/culture-1.jpg",
    size: "col-span-2 row-span-2",
    label: "TEAM",
  },
  {
    src: "/images/culture-2.jpg",
    size: "col-span-1 row-span-1",
    label: "EVENTS",
  },
  {
    src: "/images/culture-3.jpg",
    size: "col-span-1 row-span-2",
    label: "SITES",
  },
  {
    src: "/images/culture-4.jpg",
    size: "col-span-2 row-span-1",
    label: "TRAINING",
  },
  {
    src: "/images/culture-5.jpg",
    size: "col-span-1 row-span-1",
    label: "OFFICE",
  },
];

const benefits = [
  {
    num: "01",
    title: "CAREER GROWTH",
    desc: "Explore opportunities to learn, advance, and shape your career path within our diverse divisions.",
  },
  {
    num: "02",
    title: "LEARNING & DEVELOPMENT",
    desc: "We invest in your skills through continuous training, workshops, and mentorship programs.",
  },
  {
    num: "03",
    title: "HEALTH & WELLBEING",
    desc: "Comprehensive health benefits and wellness initiatives to keep you and your family safe.",
  },
  {
    num: "04",
    title: "COMPENSATION & REWARDS",
    desc: "Competitive salaries and performance-based rewards that recognize your contribution.",
  },
  {
    num: "05",
    title: "WORK-LIFE BALANCE",
    desc: "Flexible working arrangements that respect your time and life outside the office.",
  },
  {
    num: "06",
    title: "TEAM & COMMUNITY",
    desc: "Be part of a collaborative culture that celebrates milestones and supports each other.",
  },
];

const divisions = [
  {
    name: "Development & Construction",
    desc: "Build the future of real estate.",
    image: "/images/div-1.jpg",
  },
  {
    name: "Hospitality & Leisure",
    desc: "Create premium experiences.",
    image: "/images/div-2.jpg",
  },
  {
    name: "Agriculture",
    desc: "Drive sustainable food solutions.",
    image: "/images/div-3.jpg",
  },
  {
    name: "Logistics & Maritime",
    desc: "Move global trade forward.",
    image: "/images/div-4.jpg",
  },
];

const internshipSteps = [
  {
    num: "01",
    title: "LEARN",
    desc: "Gain hands-on experience from industry experts.",
  },
  {
    num: "02",
    title: "CONTRIBUTE",
    desc: "Work on real projects that impact the business.",
  },
  {
    num: "03",
    title: "GROW",
    desc: "Build skills that matter for your future career.",
  },
];

// --- Main Component ---

export default function CareersPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState<number | null>(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Hero Entrance
        const heroTl = gsap.timeline({ delay: 0.3 });
        heroTl
          .fromTo(
            ".hero-bg",
            { scale: 1.15, autoAlpha: 0 },
            { scale: 1.0, autoAlpha: 1, duration: 2, ease: "power3.out" },
          )
          .fromTo(
            ".hero-eyebrow",
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.6 },
            "-=1",
          )
          .fromTo(
            ".hero-line",
            { yPercent: 100 },
            { yPercent: 0, duration: 1.2, stagger: 0.15, ease: "power4.out" },
            "-=0.8",
          )
          .fromTo(
            ".hero-desc",
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.8 },
            "-=0.6",
          )
          .fromTo(
            ".hero-cta",
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.8 },
            "-=0.4",
          )
          .fromTo(
            ".hero-status",
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 1 },
            "-=0.4",
          );

        // Hero Parallax
        gsap.to(".hero-bg", {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to(".hero-content", {
          yPercent: -10,
          autoAlpha: 0,
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
            { y: 40, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%" },
            },
          );
        });

        // 3. Culture Statement Split Reveal
        gsap.fromTo(
          ".culture-line",
          { yPercent: 100, autoAlpha: 0 },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: { trigger: ".culture-section", start: "top 70%" },
          },
        );

        // 4. Video Scale-in
        gsap.fromTo(
          ".video-wrapper",
          { scale: 0.92, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: { trigger: ".video-wrapper", start: "top 80%" },
          },
        );

        // 5. Marquee Animation
        gsap.to(".marquee-track", {
          xPercent: -50,
          duration: 20,
          ease: "none",
          repeat: -1,
        });

        // 6. Final CTA Parallax
        gsap.to(".cta-bg-text", {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ".hero-line",
            ".hero-desc",
            ".hero-eyebrow",
            ".hero-cta",
            ".hero-status",
            ".reveal-up",
            ".culture-line",
            ".video-wrapper",
          ],
          { autoAlpha: 1, y: 0, scale: 1 },
        );
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <main
      ref={containerRef}
      className="bg-white text-[#071018] overflow-x-hidden font-sans"
    >
      {/* 01. CAREERS HERO */}
      <section className="hero-section relative h-screen min-h-[700px] w-full flex items-end bg-[#071018] text-white overflow-hidden">
        <div className="hero-bg absolute inset-0 opacity-0 will-change-transform">
          <Image
            src="/images/careers-hero.jpg"
            alt="Life at Sampan"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-[#071018]/40 to-transparent z-[1]"></div>

        <div className="hero-content relative z-10 w-full pb-16 md:pb-24">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <p className="hero-eyebrow mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] opacity-0">
              Careers / Sampan Group
            </p>
            <h1 className="flex flex-col overflow-hidden text-[clamp(3.5rem,7vw,8rem)] font-semibold leading-[0.9] tracking-tighter">
              <span className="hero-line block">Build the Future.</span>
              <span className="hero-line block">Build Your Career.</span>
            </h1>
            <p className="hero-desc mt-8 max-w-xl text-lg leading-relaxed text-white/70 opacity-0">
              A new chapter of opportunities at Sampan Group is coming soon. Be
              part of a team that builds value across industries.
            </p>
            <div className="hero-cta mt-10 flex flex-col sm:flex-row gap-4 opacity-0">
              <button className="group inline-flex items-center justify-center gap-4 bg-[#007DC5] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#071018] transition-colors duration-300">
                Join Our Talent Community{" "}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group inline-flex items-center justify-center gap-4 border border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300">
                Explore Life at Sampan{" "}
                <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="hero-status absolute top-8 right-6 md:right-12 z-10 flex flex-col items-end gap-2 opacity-0">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">
            Status
          </span>
          <span className="text-sm font-bold uppercase tracking-widest text-[#007DC5] flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#007DC5] animate-pulse"></span>{" "}
            Coming Soon
          </span>
        </div>
      </section>

      {/* 02. LIFE AT SAMPAN */}
      <section className="bg-white py-24 lg:py-32 border-b border-[#E5E9EC]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
              <Image
                src="/images/life-sampan.jpg"
                alt="Life at Sampan"
                fill
                className="object-cover will-change-transform"
                sizes="50vw"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-6">
              Life at Sampan
            </p>
            <h2 className="reveal-up text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.05] tracking-tight mb-6">
              More than a workplace. <br /> A place to learn and grow.
            </h2>
            <p className="reveal-up text-lg text-neutral-700 leading-relaxed">
              We believe people are at the heart of every business we build. We
              foster an environment where ambition meets opportunity, and where
              every individual can find purpose in their work.
            </p>
          </div>
        </div>
      </section>

      {/* 03. CULTURE STATEMENT */}
      <section className="culture-section bg-[#0B1B27] text-white py-32 lg:py-40 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="text-[clamp(2.5rem,6vw,7rem)] font-semibold leading-[1.1] tracking-tight">
            <div className="overflow-hidden">
              <span className="culture-line block">
                We create an environment
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="culture-line block">where ambitious people</span>
            </div>
            <div className="overflow-hidden">
              <span className="culture-line block text-[#007DC5]">
                can do meaningful work.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Marquee */}
      <div className="bg-[#0B1B27] border-y border-white/10 py-8 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-12 px-6 text-white/20 text-4xl font-bold uppercase tracking-widest"
            >
              {cultureKeywords.map((word, j) => (
                <span key={j} className="flex items-center gap-12">
                  {word} <span className="text-[#007DC5]">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 04. DAY IN THE LIFE VIDEO */}
      <section className="bg-[#0B1B27] py-24 lg:py-32 text-white">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              A Day at Sampan
            </p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
              See the moments that make us unique.
            </h2>
          </div>

          <div className="video-wrapper relative w-full max-w-5xl mx-auto aspect-video bg-black cursor-pointer group opacity-0">
            <Image
              src="/images/day-video.jpg"
              alt="Day in the Life"
              fill
              className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              sizes="100vw"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="h-20 w-20 md:h-24 md:w-24 rounded-full border border-white/80 flex items-center justify-center group-hover:bg-[#007DC5] group-hover:border-[#007DC5] transition-all duration-300">
                <FiPlay className="ml-1 text-white text-2xl" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                A Day in the Life at Sampan Group
              </h3>
              <span className="mt-2 text-sm text-white/50 font-mono">
                04:12
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 05. EMPLOYEE TESTIMONIALS */}
      <section className="bg-white py-24 lg:py-32 border-b border-[#E5E9EC]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 grid grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
              <Image
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].name}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-6">
              Voices of Sampan
            </p>
            <blockquote className="text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-[1.3] tracking-tight text-neutral-800 mb-8">
              “{testimonials[activeTestimonial].quote}”
            </blockquote>
            <div className="mt-auto">
              <p className="font-bold text-lg">
                {testimonials[activeTestimonial].name}
              </p>
              <p className="text-sm text-neutral-500 uppercase tracking-widest">
                {testimonials[activeTestimonial].role}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1,
                    )
                  }
                  className="p-2 border border-[#E5E9EC] hover:bg-[#071018] hover:text-white transition-colors"
                >
                  <FiChevronLeft />
                </button>
                <span className="text-sm font-mono text-neutral-500">
                  0{activeTestimonial + 1} / 0{testimonials.length}
                </span>
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === testimonials.length - 1 ? 0 : prev + 1,
                    )
                  }
                  className="p-2 border border-[#E5E9EC] hover:bg-[#071018] hover:text-white transition-colors"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. EMPLOYEE PHOTO WALL */}
      <section className="bg-[#F5F7F8] py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-16 text-center">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              People Behind the Progress
            </p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
              The faces of our future.
            </h2>
          </div>
          <div className="grid grid-cols-3 grid-rows-[200px] md:grid-rows-[250px] gap-4">
            {photoWall.map((photo, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group bg-neutral-100 ${photo.size}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500 flex items-end p-6 z-[1]">
                  <span className="text-white text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. BENEFITS OVERVIEW */}
      <section className="bg-white py-24 lg:py-32 border-b border-[#E5E9EC]">
        <div className="mx-auto max-w-[1000px] px-6 md:px-12">
          <div className="mb-16 text-center">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              Why Sampan?
            </p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
              We invest in people.
            </h2>
          </div>

          <div className="flex flex-col">
            {benefits.map((b, i) => (
              <div key={i} className="border-b border-[#E5E9EC]">
                <button
                  onClick={() =>
                    setActiveBenefit(activeBenefit === i ? null : i)
                  }
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-sm font-mono text-neutral-400">
                      {b.num}
                    </span>
                    <h3
                      className={`text-2xl md:text-3xl font-semibold tracking-tight transition-colors ${activeBenefit === i ? "text-[#007DC5]" : "text-[#071018] group-hover:text-[#007DC5]"}`}
                    >
                      {b.title}
                    </h3>
                  </div>
                  <FiPlus
                    className={`text-2xl transition-transform duration-300 ${activeBenefit === i ? "rotate-45 text-[#007DC5]" : "text-neutral-400"}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${activeBenefit === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pl-12 text-lg text-neutral-600">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. CAREER DIVISIONS */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-16">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              Find Your Place
            </p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
              Explore opportunities across the group.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {divisions.map((div, i) => (
              <div
                key={i}
                className="group relative aspect-[16/10] overflow-hidden bg-neutral-100 cursor-pointer"
              >
                <Image
                  src={div.image}
                  alt={div.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 will-change-transform"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071018]/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white z-10">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                    {div.name}
                  </h3>
                  <p className="text-white/70 mb-4">{div.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-white pb-1">
                    Explore Careers{" "}
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09. OPEN POSITIONS (COMING SOON) */}
      <section className="bg-[#F5F7F8] py-24 lg:py-32 border-y border-[#E5E9EC]">
        <div className="mx-auto max-w-[1000px] px-6 md:px-12 text-center">
          <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
            Open Positions
          </p>
          <h2 className="reveal-up text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight mb-12">
            Opportunities Ahead
          </h2>

          <div className="border border-[#E5E9EC] bg-white p-12 md:p-16">
            <h3 className="text-2xl font-semibold mb-4">
              We&apos;re Getting Ready
            </h3>
            <p className="text-neutral-600 mb-8 max-w-md mx-auto">
              New opportunities across Sampan Group will be listed here soon.
              Stay tuned for roles that shape the future.
            </p>
            <button className="group inline-flex items-center gap-4 bg-[#071018] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#007DC5] transition-colors duration-300">
              Get Job Alerts{" "}
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 10. INTERNSHIP / GRADUATE PROGRAM */}
      <section className="bg-white py-24 lg:py-32 border-b border-[#E5E9EC]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
              <Image
                src="/images/internship.jpg"
                alt="Internship"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              Internships & Graduate Programs
            </p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight mb-6">
              Start Your Journey
            </h2>
            <p className="reveal-up text-lg text-neutral-700 mb-10 max-w-lg">
              Build your first professional experience with Sampan Group. Work
              on real challenges and build skills that matter.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#E5E9EC] pt-8">
              {internshipSteps.map((step) => (
                <div key={step.num}>
                  <span className="text-sm font-mono text-neutral-400 block mb-2">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. TALENT COMMUNITY / CV BANK */}
      <section className="bg-[#007DC5] text-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1000px] px-6 md:px-12 text-center">
          <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-white/70 mb-4">
            Stay Connected
          </p>
          <h2 className="reveal-up text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.05] tracking-tight mb-6">
            Join Our Talent Community
          </h2>
          <p className="reveal-up text-lg text-white/80 max-w-lg mx-auto mb-12">
            Be among the first to hear about new opportunities. Submit your CV
            and we&apos;ll keep your profile in our talent network.
          </p>

          <form className="reveal-up grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent border-b border-white/40 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-b border-white/40 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-transparent border-b border-white/40 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
            />
            <select className="bg-transparent border-b border-white/40 py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none">
              <option value="" className="text-[#071018]">
                Area of Interest
              </option>
              <option value="dev" className="text-[#071018]">
                Development
              </option>
              <option value="hosp" className="text-[#071018]">
                Hospitality
              </option>
              <option value="agro" className="text-[#071018]">
                Agriculture
              </option>
            </select>
            <div className="col-span-1 md:col-span-2 mt-4 border border-dashed border-white/40 p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
              <FiUpload className="text-2xl mb-2" />
              <span className="font-bold uppercase tracking-widest text-sm">
                Drop Your CV Here
              </span>
              <span className="text-xs text-white/60 mt-1">
                PDF, DOC or DOCX · Max 10MB
              </span>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="group inline-flex items-center gap-4 bg-[#071018] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#007DC5] transition-colors duration-300"
              >
                Join Talent Community{" "}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="cta-section relative bg-[#071018] text-white py-32 lg:py-40 overflow-hidden">
        <div className="cta-bg-text absolute inset-0 flex flex-col items-center justify-center opacity-[0.03] pointer-events-none will-change-transform">
          <span className="text-[20vw] font-bold leading-none tracking-tighter">
            FUTURE
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="reveal-up text-[clamp(2.5rem,6vw,6rem)] font-semibold leading-[1.05] tracking-tight mb-8">
            Your Future Starts <br /> With One Step.
          </h2>
          <p className="reveal-up text-lg text-white/60 max-w-md mx-auto mb-10">
            Explore what a career at Sampan Group could look like.
          </p>
          <div className="reveal-up flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group inline-flex items-center justify-center gap-4 bg-[#007DC5] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#071018] transition-colors duration-300">
              Join Our Talent Community <FiArrowRight />
            </button>
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-4 border border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300"
            >
              Explore Sampan Group <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-[#071018] text-white pt-24 pb-12 border-t border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 pb-16 border-b border-white/10">
            <div className="col-span-12 md:col-span-6">
              <span className="text-[clamp(2rem,4vw,4rem)] font-bold tracking-tighter block">
                SAMPAN GROUP
              </span>
              <p className="mt-4 text-white/60 max-w-sm">
                Building businesses, creating possibilities, and fostering
                talent across Bangladesh.
              </p>
            </div>
            <div className="col-span-6 md:col-span-3">
              <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">
                Careers
              </h4>
              <div className="flex flex-col gap-3 text-sm">
                <Link
                  href="#"
                  className="hover:text-[#007DC5] transition-colors"
                >
                  Life at Sampan
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#007DC5] transition-colors"
                >
                  Open Positions
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#007DC5] transition-colors"
                >
                  Internships
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#007DC5] transition-colors"
                >
                  Talent Community
                </Link>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3">
              <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">
                Company
              </h4>
              <div className="flex flex-col gap-3 text-sm">
                <Link
                  href="/about"
                  className="hover:text-[#007DC5] transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/businesses"
                  className="hover:text-[#007DC5] transition-colors"
                >
                  Businesses
                </Link>
                <Link
                  href="/newsroom"
                  className="hover:text-[#007DC5] transition-colors"
                >
                  Newsroom
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-[#007DC5] transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <span>© 2026 Sampan Group. All rights reserved.</span>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
