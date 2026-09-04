"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FiArrowRight,
  FiPlay,
  FiDownload,
  FiPlus,
  FiMapPin,
  FiMail,
  FiPhone,
} from "react-icons/fi";

// Register plugins only on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

// --- Mock Data ---
const milestones = [
  {
    year: "1998",
    title: "The Foundation",
    desc: "Sampan Group is established, beginning its journey in real estate development.",
    image: "/images/about/m1.jpg",
  },
  {
    year: "2005",
    title: "Expansion into Hospitality",
    desc: "Launched our first resort, marking our entry into the premium hospitality sector.",
    image: "/images/about/m2.jpg",
  },
  {
    year: "2012",
    title: "Diversification",
    desc: "Expanded into agro and retail, building a diversified business portfolio.",
    image: "/images/about/m3.jpg",
  },
  {
    year: "2018",
    title: "Maritime & Energy",
    desc: "Ventured into alternative assets and green energy infrastructure.",
    image: "/images/about/m4.jpg",
  },
  {
    year: "2026",
    title: "Global Footprint",
    desc: "Strengthening international partnerships and NRB investment desks.",
    image: "/images/about/m5.jpg",
  },
];

const leaders = [
  {
    name: "MD. Sampan Hossain",
    role: "Chairman & Managing Director",
    image: "/images/leader1.jpg",
  },
  {
    name: "Tahsin Rahman",
    role: "Chief Executive Officer",
    image: "/images/leader2.jpg",
  },
  {
    name: "Anika Tabassum",
    role: "Chief Financial Officer",
    image: "/images/leader3.jpg",
  },
];

const values = [
  {
    title: "Integrity",
    desc: "We uphold the highest ethical standards in every business endeavor.",
  },
  {
    title: "Innovation",
    desc: "Continuously seeking modern solutions to complex industry challenges.",
  },
  {
    title: "Excellence",
    desc: "Delivering premium quality across all our properties and services.",
  },
  {
    title: "Responsibility",
    desc: "Committed to sustainable growth and community development.",
  },
];

const stats = [
  { value: 1, suffix: "+", label: "Countries" },
  { value: 10, suffix: "+", label: "Businesses" },
  { value: 50, suffix: "+", label: "Projects" },
  { value: 25, suffix: "+", label: "Years of Growth" },
];

// --- Main Component ---
export default function AboutUsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeValue, setActiveValue] = useState<number>(0);

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
            ".hero-bottom",
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

        // 4. Count Up Stats
        gsap.utils.toArray<HTMLElement>(".count-up").forEach((el) => {
          const target = parseInt(el.dataset.value || "0");
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: "power2.out",
            onUpdate: () =>
              (el.textContent =
                Math.floor(obj.val) + (el.dataset.suffix || "")),
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });

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
                trigger: "#heritage-section",
                start: "top top",
                end: () => `+=${dist}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
              },
            });
          }
        });

        // 6. Global Map SVG Draw
        const path = document.querySelector(".map-path") as SVGPathElement;
        if (path) {
          const pathLength = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: { trigger: ".map-container", start: "top 70%" },
          });
        }

        // 7. MD Video Scale
        gsap.fromTo(
          ".md-video-wrapper",
          { scale: 0.92, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: { trigger: ".md-video-wrapper", start: "top 80%" },
          },
        );

        // 8. Press Quote Reveal
        gsap.fromTo(
          ".quote-line",
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: { trigger: ".quote-section", start: "top 70%" },
          },
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ".hero-line",
            ".hero-desc",
            ".hero-eyebrow",
            ".hero-bottom",
            ".reveal-up",
            ".quote-line",
            ".md-video-wrapper",
          ],
          { autoAlpha: 1, y: 0, scale: 1 },
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
      {/* 01. CINEMATIC HERO */}
      <section className="hero-section relative h-screen min-h-[700px] w-full flex items-end bg-[#071018] text-white overflow-hidden">
        <div className="hero-bg absolute inset-0 opacity-0 will-change-transform">
          <Image
            src="/images/about-hero.jpg"
            alt="Sampan Group Architecture"
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
              About Sampan Group
            </p>
            <h1 className="flex flex-col overflow-hidden text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.9] tracking-tighter">
              <span className="hero-line block">Building Businesses.</span>
              <span className="hero-line block">Creating Possibilities.</span>
            </h1>
            <p className="hero-desc mt-8 max-w-xl text-lg leading-relaxed text-white/70 opacity-0">
              Sampan Group is a diversified business group committed to building
              sustainable enterprises, creating meaningful value and
              contributing to the communities we serve.
            </p>
          </div>
        </div>

        <div className="hero-bottom absolute bottom-8 left-0 right-0 z-10 flex justify-between items-end px-6 md:px-12 opacity-0">
          <div className="text-sm uppercase tracking-widest text-white/60">
            EST. 1998
          </div>
          <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
            Explore Our Story
            <FiArrowRight className="rotate-90 animate-pulse" />
          </div>
        </div>
      </section>

      {/* 02. COMPANY OVERVIEW */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 lg:col-span-5">
              <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-6">
                Our Story
              </p>
              <h2 className="reveal-up text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.05] tracking-tight">
                More Than a Group. <br /> A Growing Legacy.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-end gap-6">
              <p className="reveal-up text-lg text-neutral-700 leading-relaxed">
                From our inception, we set out to do more than just build
                businesses. We aimed to construct a legacy of excellence,
                innovation, and trust. Today, Sampan Group stands as a testament
                to that vision, encompassing a diverse portfolio of industries.
              </p>
              <p className="reveal-up text-lg text-neutral-700 leading-relaxed">
                Our journey is driven by a commitment to sustainable growth and
                a passion for creating value that extends beyond balance
                sheets—enriching the lives of our employees, partners, and the
                communities we serve.
              </p>
            </div>
          </div>

          <div className="relative w-full">
            <div className="img-reveal-wrapper relative aspect-[21/9] w-full overflow-hidden bg-neutral-100">
              <Image
                src="/images/about-large.jpg"
                alt="Group Headquarters"
                fill
                className="img-reveal object-cover will-change-transform"
                sizes="100vw"
              />
            </div>
            <div className="img-reveal-wrapper absolute -bottom-12 right-8 md:right-20 w-1/3 aspect-[4/3] overflow-hidden border-8 border-white shadow-2xl hidden md:block">
              <Image
                src="/images/about-small.jpg"
                alt="Secondary"
                fill
                className="img-reveal object-cover will-change-transform"
                sizes="33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 03. MD VIDEO MESSAGE */}
      <section className="bg-[#0B1B27] py-24 lg:py-32 text-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              Leadership
            </p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
              A Message From Our Managing Director
            </h2>
          </div>

          <div className="md-video-wrapper relative w-full max-w-5xl mx-auto aspect-video bg-black cursor-pointer group opacity-0">
            <Image
              src="/images/md-video.jpg"
              alt="MD Video"
              fill
              className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              sizes="100vw"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 md:h-24 md:w-24 rounded-full border border-white/80 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                <FiPlay className="ml-1 text-white text-2xl group-hover:text-[#0B1B27]" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 flex items-center gap-4">
              <span className="text-xs uppercase tracking-widest text-white/80">
                Watch Message
              </span>
              <span className="text-xs text-white/50">02:48</span>
            </div>
          </div>
        </div>
      </section>

      {/* 04. HERITAGE / MILESTONES */}
      <section
        id="heritage-section"
        className="bg-white h-screen w-full overflow-hidden hidden lg:block"
      >
        <div className="flex flex-col h-full justify-center">
          <div className="px-12 mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              Our Journey
            </p>
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
              From a vision to a growing group.
            </h2>
          </div>
          <div className="timeline-track flex gap-8 px-12 will-change-transform">
            {milestones.map((m, i) => (
              <div key={i} className="w-[500px] shrink-0 group">
                <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-neutral-100">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="500px"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-12 bg-[#007DC5]"></div>
                  <span className="text-4xl font-bold text-[#007DC5]">
                    {m.year}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{m.title}</h3>
                <p className="text-neutral-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Timeline */}
      <section className="bg-white py-24 lg:hidden">
        <div className="mx-auto max-w-[800px] px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
            Our Journey
          </p>
          <h2 className="text-3xl font-semibold tracking-tight mb-12">
            From a vision to a growing group.
          </h2>
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-[#007DC5] mt-2"></div>
                  {i < milestones.length - 1 && (
                    <div className="w-px h-full bg-neutral-200 mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-2xl font-bold text-[#007DC5] block mb-2">
                    {m.year}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{m.title}</h3>
                  <p className="text-neutral-600 mb-4">{m.desc}</p>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={m.image}
                      alt={m.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. GLOBAL FOOTPRINT */}
      <section className="bg-[#F5F7F8] py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-7">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              Global Footprint
            </p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight mb-12">
              From Bangladesh to a Broader Horizon
            </h2>

            <div className="map-container relative w-full h-[400px] bg-white border border-[#E8ECEF] overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 400"
              >
                <path
                  d="M150,200 Q300,50 500,180 T700,150"
                  fill="none"
                  stroke="#E8ECEF"
                  strokeWidth="2"
                />
                <path
                  className="map-path"
                  d="M150,200 Q300,50 500,180 T700,150"
                  fill="none"
                  stroke="#007DC5"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <circle cx="150" cy="200" r="8" fill="#007DC5" />
                <text
                  x="170"
                  y="205"
                  fill="#071018"
                  fontSize="14"
                  fontWeight="bold"
                >
                  Bangladesh
                </text>

                <circle cx="500" cy="180" r="6" fill="#0B1B27" />
                <circle cx="700" cy="150" r="6" fill="#0B1B27" />
                <text x="520" y="185" fill="#0B1B27" fontSize="12">
                  Europe
                </text>
                <text x="620" y="155" fill="#0B1B27" fontSize="12">
                  Americas
                </text>
              </svg>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className="reveal-up border-l-2 border-[#007DC5] pl-6"
              >
                <span
                  className="count-up text-5xl md:text-6xl font-bold block"
                  data-value={s.value}
                  data-suffix={s.suffix}
                >
                  0{s.suffix}
                </span>
                <span className="mt-2 text-xs uppercase tracking-widest text-neutral-500">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. MISSION / VISION / VALUES */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <h2 className="reveal-up text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.05] tracking-tight mb-16 text-center">
            Driven by Purpose. Defined by Values.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-b border-neutral-200 py-12">
            <div className="reveal-up lg:border-r lg:border-neutral-200 lg:pr-12">
              <span className="text-5xl font-bold text-[#E8ECEF] block mb-4">
                01
              </span>
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p className="text-neutral-600">
                To build sustainable, industry-leading enterprises that drive
                economic growth and create lasting value for our stakeholders.
              </p>
            </div>
            <div className="reveal-up lg:border-r lg:border-neutral-200 lg:pr-12">
              <span className="text-5xl font-bold text-[#E8ECEF] block mb-4">
                02
              </span>
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-neutral-600">
                To be the most trusted and diversified business group in
                Bangladesh, recognized globally for our innovation and
                integrity.
              </p>
            </div>
            <div className="reveal-up">
              <span className="text-5xl font-bold text-[#E8ECEF] block mb-4">
                03
              </span>
              <h3 className="text-2xl font-semibold mb-4">Values</h3>
              <div className="flex flex-col mt-4">
                {values.map((v, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setActiveValue(i)}
                    className="border-b border-neutral-200 py-3 cursor-pointer group"
                  >
                    <div className="flex justify-between items-center">
                      <h4
                        className={`text-xl transition-colors ${activeValue === i ? "text-[#007DC5]" : "text-[#071018]"}`}
                      >
                        {v.title}
                      </h4>
                      <FiPlus
                        className={`transition-transform ${activeValue === i ? "rotate-45 text-[#007DC5]" : ""}`}
                      />
                    </div>
                    <p
                      className={`text-sm text-neutral-600 transition-all duration-300 overflow-hidden ${activeValue === i ? "max-h-20 mt-2 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07. COMPANY PROFILE PDF */}
      <section className="bg-[#071018] py-24 lg:py-32 text-white">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-6">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              Publication
            </p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight mb-6">
              Download Our Company Profile
            </h2>
            <p className="reveal-up text-lg text-white/60 mb-10 max-w-md">
              Discover our businesses, journey, leadership and vision for the
              future in our official corporate profile.
            </p>
            <button className="group inline-flex items-center gap-4 border border-white px-8 py-4 hover:bg-white hover:text-[#071018] transition-colors duration-300">
              <span className="text-sm font-bold uppercase tracking-widest">
                Download Company Profile
              </span>
              <FiDownload className="transition-transform group-hover:translate-y-1" />
            </button>
          </div>
          <div className="col-span-12 lg:col-span-6 flex justify-center">
            <div
              className="group relative w-64 h-80 transition-transform duration-500 [transform:rotateY(0deg)] hover:[transform:rotateY(-15deg)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-white shadow-2xl flex flex-col p-8 border border-white/20">
                <div className="border-b border-neutral-200 pb-4 mb-4">
                  <span className="text-xs text-neutral-500 uppercase tracking-widest">
                    Sampan Group
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-[#071018] mb-auto">
                  Company Profile
                </h3>
                <div className="text-right">
                  <span className="text-6xl font-bold text-[#007DC5]">
                    2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08. LEADERSHIP TEAM */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              Leadership
            </p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
              The people shaping the future
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((l, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 mb-4">
                  <Image
                    src={l.image}
                    alt={l.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    sizes="33vw"
                  />
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#007DC5] group-hover:w-full transition-all duration-500"></div>
                </div>
                <h3 className="text-2xl font-semibold">{l.name}</h3>
                <p className="text-sm text-neutral-500 uppercase tracking-widest mt-1">
                  {l.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09. ACCREDITATION & HONORS */}
      <section className="bg-[#F5F7F8] py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 text-center mb-12">
          <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
            Accreditation & Honors
          </p>
          <h2 className="reveal-up text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
            Recognized for Excellence
          </h2>
        </div>
        <div className="relative w-full">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center">
                {["RJSC", "ISO 9001", "BIDA", "ICAB", "FBCCI", " BASIS"].map(
                  (logo, j) => (
                    <span
                      key={j}
                      className="text-4xl font-bold text-neutral-300 hover:text-[#007DC5] transition-colors cursor-pointer"
                    >
                      {logo}
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRESS QUOTE STRIP */}
      <section className="quote-section bg-[#007DC5] text-white py-32 lg:py-40">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <div className="text-[clamp(3rem,7vw,8rem)] leading-[1.1] font-semibold tracking-tight">
            <span className="quote-line block">“Building businesses</span>
            <span className="quote-line block">that create lasting value</span>
            <span className="quote-line block">for people, partners</span>
            <span className="quote-line block">and communities.”</span>
          </div>
          <p className="quote-line mt-12 text-sm uppercase tracking-[0.3em] text-white/70">
            — Sampan Group
          </p>
        </div>
      </section>

      {/* 11. CONTACT / OFFICE FOOTER */}
      <section className="bg-[#071018] text-white pt-24 pb-12">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 pb-16 border-b border-white/10">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.05] tracking-tight mb-6">
                Let&apos;s Build What&apos;s Next.
              </h2>
              <p className="text-lg text-white/60 max-w-lg mb-10">
                Connect with Sampan Group to explore opportunities, partnerships
                and our growing portfolio of businesses.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 bg-[#007DC5] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#071018] transition-colors"
              >
                Contact Sampan Group <FiArrowRight />
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">
                  Head Office
                </h4>
                <p className="text-white/80 mb-2">Sampan Group</p>
                <p className="text-white/60 text-sm">
                  Gulshan, Dhaka, Bangladesh
                </p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">
                  Contact
                </h4>
                <p className="flex items-center gap-2 text-white/60 text-sm mb-2">
                  <FiMail /> info@sampangroup.com
                </p>
                <p className="flex items-center gap-2 text-white/60 text-sm">
                  <FiPhone /> +880 1000 00000
                </p>
              </div>
            </div>
          </div>

          <div className="pt-12 grid grid-cols-12 gap-8 items-center">
            <div className="col-span-6">
              <span className="text-2xl font-bold tracking-tight">
                SAMPAN GROUP
              </span>
            </div>
            <div className="col-span-6 flex justify-end gap-6 text-xs uppercase tracking-widest text-white/60">
              <Link href="#" className="hover:text-white">
                About
              </Link>
              <Link href="#" className="hover:text-white">
                Businesses
              </Link>
              <Link href="#" className="hover:text-white">
                Projects
              </Link>
              <Link href="#" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex justify-between text-xs text-white/40">
            <span>© 2026 Sampan Group. All rights reserved.</span>
            <div className="flex gap-6">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
