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
  FiDownload,
  FiX,
  FiChevronDown,
} from "react-icons/fi";

// Register plugins only on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

// --- Provided Gallery Images ---
const galleryImages = [
  { id: "img-01", src: "/images/awards/Our-Curated-Gallery-Photo-Frame.webp" },
  {
    id: "img-02",
    src: "/images/awards/Our-Curated-Gallery-Photo-Frame-1.webp",
  },
  {
    id: "img-03",
    src: "/images/awards/Our-Curated-Gallery-Photo-Frame-2.webp",
  },
  {
    id: "img-04",
    src: "/images/awards/Our-Curated-Gallery-Photo-Frame-3.webp",
  },
  {
    id: "img-05",
    src: "/images/awards/Our-Curated-Gallery-Photo-Frame-4.webp",
  },
  {
    id: "img-06",
    src: "/images/awards/Our-Curated-Gallery-Photo-Frame-5.webp",
  },
  { id: "img-07", src: "/images/awards/boss.jpeg" },
  { id: "img-08", src: "/images/awards/purple.jpeg" },
  { id: "img-09", src: "/images/awards/mou.jpeg" },
  { id: "img-10", src: "/images/awards/express.jpeg" },
];

// --- Mock Data ---
const stats = [
  { value: "15+", label: "Accreditations" },
  { value: "20+", label: "Honors" },
  { value: "10+", label: "Awards" },
  { value: "1998-2026", label: "Years of Recognition" },
];

const timelineData = [
  {
    year: "2026",
    title: "Excellence in Real Estate",
    org: "Bangladesh Property Awards",
    desc: "Recognized for innovative urban development and sustainable construction practices.",
  },
  {
    year: "2024",
    title: "Best Hospitality Provider",
    org: "South Asian Travel Awards",
    desc: "Honored for delivering world-class service and premium guest experiences.",
  },
  {
    year: "2022",
    title: "Sustainable Business Award",
    org: "Ministry of Environment",
    desc: "Awarded for implementing green energy solutions across industrial operations.",
  },
  {
    year: "2020",
    title: "Corporate Governance Recognition",
    org: "ICAB",
    desc: "Achieved top tier status for transparency and financial accountability.",
  },
  {
    year: "2018",
    title: "Agro Innovation Award",
    org: "Agro Tech Bangladesh",
    desc: "Recognized for advancing sustainable agriculture and farmer empowerment.",
  },
];

const archiveDocs = [
  {
    name: "ISO 9001:2015 Certificate",
    org: "International Organization for Standardization",
    year: "2026",
  },
  {
    name: "RJSC Incorporation Certificate",
    org: "Registrar of Joint Stock Companies",
    year: "2025",
  },
  {
    name: "Environmental Compliance Report",
    org: "Department of Environment",
    year: "2024",
  },
  {
    name: "Fire Safety Certification",
    org: "Bangladesh Fire Service",
    year: "2024",
  },
];

const pressMentions = [
  {
    year: "2026",
    award: "Excellence in Real Estate",
    quote:
      "Sampan Group redefines luxury living with their new sustainable urban project.",
    publication: "The Daily Star",
  },
  {
    year: "2024",
    award: "Best Hospitality Provider",
    quote: "Setting a new benchmark for premium hospitality in the region.",
    publication: "Dhaka Tribune",
  },
];

// --- Main Component ---

export default function AccreditationHonorsAwardsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Hero Entrance
        const heroTl = gsap.timeline({ delay: 0.3 });
        heroTl
          .fromTo(
            ".hero-bg",
            { scale: 1.05, autoAlpha: 0 },
            { scale: 1.0, autoAlpha: 1, duration: 2.5, ease: "power3.out" },
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

        // 3. Image Clip Reveals
        gsap.utils
          .toArray<HTMLElement>(".img-reveal-wrapper")
          .forEach((wrapper) => {
            const img = wrapper.querySelector(".img-reveal");
            gsap.fromTo(
              wrapper,
              { clipPath: "inset(0 0 100% 0)" },
              {
                clipPath: "inset(0 0 0% 0)",
                duration: 1.4,
                ease: "power4.out",
                scrollTrigger: { trigger: wrapper, start: "top 85%" },
              },
            );
            if (img) {
              gsap.fromTo(
                img,
                { scale: 1.2 },
                {
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
            }
          });

        // 4. Final Statement Split Reveal
        gsap.fromTo(
          ".statement-line",
          { yPercent: 100, autoAlpha: 0 },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: { trigger: ".statement-section", start: "top 70%" },
          },
        );

        // 5. Horizontal Timeline (Desktop Only)
        mm.add("(min-width: 1024px)", () => {
          const track = document.querySelector(".timeline-track");
          if (track) {
            const totalWidth = (track as HTMLElement).scrollWidth;
            const dist = totalWidth - window.innerWidth + 200; // offset for padding

            gsap.to(track, {
              x: -dist,
              ease: "none",
              scrollTrigger: {
                trigger: "#timeline-section",
                start: "top top",
                end: () => `+=${dist}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
              },
            });
          }
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ".hero-line",
            ".hero-desc",
            ".hero-eyebrow",
            ".hero-cta",
            ".reveal-up",
            ".statement-line",
          ],
          { autoAlpha: 1, y: 0 },
        );
        gsap.set([".img-reveal-wrapper"], { clipPath: "none" });
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
      {/* 01. HERO */}
      <section className="hero-section relative h-screen min-h-[700px] w-full flex items-end bg-[#071018] text-white overflow-hidden">
        <div className="hero-bg absolute inset-0 opacity-0 will-change-transform">
          <Image
            src="/images/recognition-hero.jpg"
            alt="Recognition"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-[#071018]/60 to-[#071018]/30 z-[1]"></div>

        <div className="relative z-10 w-full pb-16 md:pb-24">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <p className="hero-eyebrow mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] opacity-0">
              Recognition
            </p>
            <h1 className="flex flex-col overflow-hidden text-[clamp(3.5rem,7vw,8rem)] font-semibold leading-[0.9] tracking-tighter">
              <span className="hero-line block">Accreditation,</span>
              <span className="hero-line block">Honors & Awards</span>
            </h1>
            <p className="hero-desc mt-8 max-w-xl text-lg leading-relaxed text-white/70 opacity-0">
              A record of trust, excellence, and achievement built through years
              of commitment to quality and responsible growth.
            </p>
            <div className="hero-cta mt-10 opacity-0">
              <button className="group inline-flex items-center gap-4 border border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#071018] transition-colors duration-300">
                Explore Recognition{" "}
                <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 02. OVERVIEW */}
      <section className="bg-white py-24 lg:py-32 border-b border-[#E4E9ED]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="col-span-12 lg:col-span-6">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-6">
              The Standard
            </p>
            <h2 className="reveal-up text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.05] tracking-tight">
              A Standard Built <br /> Over Time.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
            <p className="reveal-up text-lg text-neutral-700 leading-relaxed">
              Sampan Group&apos;s journey has been shaped by an unwavering
              commitment to excellence, operational quality, and responsible
              growth.
            </p>
            <p className="reveal-up text-lg text-neutral-700 leading-relaxed">
              The recognition we receive is not merely a celebration of success,
              but a validation of the standards we uphold across every division,
              every project, and every partnership.
            </p>
          </div>
        </div>
      </section>

      {/* 03. RECOGNITION AT A GLANCE */}
      <section className="bg-white py-16 lg:py-24 border-b border-[#E4E9ED]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E4E9ED]">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="reveal-up flex flex-col items-center text-center px-4"
              >
                <span className="text-[clamp(2.5rem,4vw,4rem)] font-bold text-[#071018] mb-2">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-neutral-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. HONORS & AWARDS (Using Provided Gallery Images) */}
      <section className="bg-[#F5F7F8] py-24 lg:py-32 border-y border-[#E4E9ED]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-16">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              Honors & Awards
            </p>
            <h2 className="reveal-up text-[clamp(2.8rem,5vw,5.5rem)] font-semibold tracking-tight">
              Milestones of Excellence
            </h2>
          </div>

          {/* Featured Award */}
          <div className="grid grid-cols-12 gap-8 mb-16 items-center">
            <div className="col-span-12 lg:col-span-8">
              <div
                className="img-reveal-wrapper relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 cursor-pointer"
                onClick={() => setSelectedImage(galleryImages[0].src)}
              >
                <Image
                  src={galleryImages[0].src}
                  alt="Featured Award"
                  fill
                  className="img-reveal object-cover will-change-transform"
                  sizes="80vw"
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <span className="text-[clamp(3rem,5vw,5rem)] font-bold text-[#007DC5] block mb-4">
                2026
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 mb-2">
                Featured Recognition
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                Excellence in Real Estate
              </h3>
              <p className="text-sm text-neutral-500 mb-6">
                Presented by Bangladesh Property Awards
              </p>
              <p className="text-neutral-600 mb-8">
                Recognized for innovative urban development and setting new
                benchmarks in sustainable construction.
              </p>
              <button className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#071018] hover:text-[#007DC5] transition-colors">
                Explore Award{" "}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.slice(1, 7).map((img, i) => (
              <div
                key={img.id}
                className="reveal-up group cursor-pointer"
                onClick={() => setSelectedImage(img.src)}
              >
                <div className="img-reveal-wrapper relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 mb-4">
                  <Image
                    src={img.src}
                    alt={`Award ${i + 2}`}
                    fill
                    className="img-reveal object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
                    sizes="33vw"
                  />
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#007DC5] group-hover:w-full transition-all duration-500"></div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-xl font-bold text-[#007DC5] block mb-1">
                      2025
                    </span>
                    <h3 className="text-lg font-semibold">
                      Honor Recognition {i + 1}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      Awarding Organization
                    </p>
                  </div>
                  <FiArrowRight className="text-xl text-[#071018] group-hover:text-[#007DC5] group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. YEAR-BY-YEAR TIMELINE */}
      <section
        id="timeline-section"
        className="bg-white h-screen w-full overflow-hidden hidden lg:block"
      >
        <div className="flex flex-col h-full justify-center">
          <div className="px-12 mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              A Journey of Recognition
            </p>
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
              A timeline of milestones.
            </h2>
          </div>
          <div className="timeline-track flex gap-16 px-12 will-change-transform">
            {timelineData.map((item, i) => (
              <div key={i} className="w-[500px] shrink-0 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-4 w-4 rounded-full border-2 border-[#007DC5] bg-white"></div>
                  <div className="h-px w-32 bg-[#007DC5]"></div>
                </div>
                <span className="text-[clamp(4rem,8vw,8rem)] font-bold text-[#F5F7F8] group-hover:text-[#007DC5] transition-colors duration-500 block mb-4">
                  {item.year}
                </span>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#007DC5] uppercase tracking-widest mb-4">
                  {item.org}
                </p>
                <p className="text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Timeline */}
      <section className="bg-white py-24 lg:hidden">
        <div className="mx-auto max-w-[800px] px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
            A Journey of Recognition
          </p>
          <h2 className="text-3xl font-semibold tracking-tight mb-12">
            A timeline of milestones.
          </h2>
          <div className="space-y-12">
            {timelineData.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-[#007DC5] mt-2"></div>
                  {i < timelineData.length - 1 && (
                    <div className="w-px h-full bg-neutral-200 mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-3xl font-bold text-[#007DC5] block mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-[#007DC5] uppercase tracking-widest mb-2">
                    {item.org}
                  </p>
                  <p className="text-neutral-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. RECOGNITION ARCHIVE */}
      <section className="bg-white py-24 lg:py-32 border-t border-[#E4E9ED]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="mb-16">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              Document Archive
            </p>
            <h2 className="reveal-up text-[clamp(2.8rem,5vw,5.5rem)] font-semibold tracking-tight">
              Recognition Archive
            </h2>
          </div>

          <div className="flex flex-col">
            {archiveDocs.map((doc, i) => (
              <div
                key={i}
                className="reveal-up group border-t border-[#E4E9EC] py-8 grid grid-cols-12 gap-8 items-center hover:bg-[#F5F7F8] transition-colors duration-300 px-4 -mx-4 cursor-pointer"
              >
                <div className="col-span-12 md:col-span-7">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-1 group-hover:translate-x-2 transition-transform duration-300">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-neutral-500">{doc.org}</p>
                </div>
                <div className="col-span-6 md:col-span-3 text-sm text-neutral-500 uppercase tracking-widest">
                  {doc.year}
                </div>
                <div className="col-span-6 md:col-span-2 flex justify-end items-center gap-3 text-[#007DC5] font-bold text-sm uppercase tracking-widest">
                  PDF{" "}
                  <FiDownload className="group-hover:translate-y-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. PRESS MENTIONS */}
      <section className="bg-[#F5F7F8] py-24 lg:py-32 border-y border-[#E4E9ED]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div className="mb-16">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              In the Press
            </p>
            <h2 className="reveal-up text-[clamp(2.8rem,5vw,5.5rem)] font-semibold tracking-tight">
              Recognition in the Press
            </h2>
          </div>

          <div className="flex flex-col gap-12">
            {pressMentions.map((press, i) => (
              <div
                key={i}
                className="reveal-up grid grid-cols-12 gap-8 border-t border-[#E4E9EC] pt-8"
              >
                <div className="col-span-12 md:col-span-3">
                  <span className="text-4xl font-bold text-[#007DC5] block mb-2">
                    {press.year}
                  </span>
                  <p className="text-xs uppercase tracking-widest text-neutral-500">
                    {press.award}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <blockquote className="text-[clamp(1.2rem,2vw,1.8rem)] font-medium leading-[1.4] tracking-tight text-neutral-800 mb-4">
                    “{press.quote}”
                  </blockquote>
                  <p className="text-sm text-neutral-500 mb-6">
                    — {press.publication}
                  </p>
                  <Link
                    href="#"
                    className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#071018] hover:text-[#007DC5] transition-colors"
                  >
                    Read Press Coverage{" "}
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. FINAL STATEMENT */}
      <section className="statement-section bg-[#071018] text-white py-32 lg:py-40 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 text-center">
          <div className="text-[clamp(2.5rem,6vw,6rem)] font-semibold leading-[1.1] tracking-tight mb-12">
            <div className="overflow-hidden">
              <span className="statement-line block">
                Recognition Is Not the Destination.
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="statement-line block text-[#007DC5]">
                It Is a Reflection of the Standard We Pursue.
              </span>
            </div>
          </div>
          <p className="reveal-up text-lg text-white/60 max-w-2xl mx-auto">
            We remain committed to raising the standards of every business we
            build, every service we deliver, and every community we serve.
          </p>
        </div>
      </section>

      {/* 09. CONTACT / VERIFICATION */}
      <section className="bg-white py-24 lg:py-32 border-b border-[#E4E9ED]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-8">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              Need More Information?
            </p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tight mb-6">
              Contact our communications team.
            </h2>
            <p className="reveal-up text-lg text-neutral-600 max-w-2xl">
              For media enquiries, recognition verification, or additional
              corporate information, please reach out to us.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex justify-start md:justify-end">
            <Link
              href="/contact"
              className="reveal-up group inline-flex items-center gap-4 bg-[#071018] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#007DC5] transition-colors duration-300"
            >
              Contact Sampan Group{" "}
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-[#071018] text-white pt-24 pb-12">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-16 border-b border-white/10">
            <h2 className="text-[clamp(3rem,5vw,6rem)] font-bold tracking-tighter">
              SAMPAN GROUP
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
              <div className="flex flex-col gap-3">
                <span className="text-white/40 uppercase tracking-widest text-xs mb-2">
                  Company
                </span>
                <Link
                  href="/about"
                  className="hover:text-[#007DC5] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/businesses"
                  className="hover:text-[#007DC5] transition-colors"
                >
                  Businesses
                </Link>
                <Link
                  href="/projects"
                  className="hover:text-[#007DC5] transition-colors"
                >
                  Projects
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-white/40 uppercase tracking-widest text-xs mb-2">
                  Recognition
                </span>
                <Link
                  href="/recognition"
                  className="hover:text-[#007DC5] transition-colors"
                >
                  Accreditations
                </Link>
                <Link
                  href="/recognition"
                  className="hover:text-[#007DC5] transition-colors"
                >
                  Honors & Awards
                </Link>
                <Link
                  href="/newsroom"
                  className="hover:text-[#007DC5] transition-colors"
                >
                  Newsroom
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
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

      {/* LIGHTBOX / CERTIFICATE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setSelectedImage(null)}
          >
            <FiX />
          </button>
          <div
            className="relative w-full max-w-4xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Certificate Preview"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button className="mt-8 group inline-flex items-center gap-4 bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#007DC5] hover:text-white transition-colors duration-300">
            Download PDF{" "}
            <FiDownload className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      )}
    </main>
  );
}
