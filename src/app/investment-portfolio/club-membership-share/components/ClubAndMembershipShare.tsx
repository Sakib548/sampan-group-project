"use client";

import React, { useState, useRef } from "react";
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
  FiAnchor,
} from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// --- Data Mapping ---

const processSteps = [
  { num: "01", title: "OWN", desc: "Purchase fractional shares of a commercial vessel." },
  { num: "02", title: "OPERATE", desc: "Our team manages logistics, maintenance, and chartering." },
  { num: "03", title: "EARN", desc: "Receive passive revenue from shipping operations." },
  { num: "04", title: "EXIT", desc: "Sell your shares after the asset appreciates or at project end." },
];

const timelinePhases = [
  { phase: "Concept", status: "Completed" },
  { phase: "Vessel Selection", status: "Completed" },
  { phase: "Legal & Registration", status: "In Progress" },
  { phase: "Investment Open", status: "Pre-Launch" },
  { phase: "Operation", status: "Upcoming" },
];

const trustSignals = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "%", label: "Legal Transparency" },
  { value: 500, suffix: "+", label: "Active Investors" },
  { value: 10, suffix: "M+", label: "Assets Under Management" },
];

const legalCredentials = [
  "RJSC Registration",
  "Verified Ownership Structure",
  "Vessel Documentation",
  "Regulatory Compliance",
  "Transparent Investment Model",
];

const galleryImages = [
  { src: "/images/ship-1.jpg", size: "col-span-12 md:col-span-8 row-span-2", alt: "Cargo Vessel" },
  { src: "/images/port-1.jpg", size: "col-span-6 md:col-span-4", alt: "Port Operations" },
  { src: "/images/bridge-1.jpg", size: "col-span-6 md:col-span-4", alt: "Ship Bridge" },
  { src: "/images/cargo-1.jpg", size: "col-span-12 md:col-span-4", alt: "Container Cargo" },
  { src: "/images/deck-1.jpg", size: "col-span-12 md:col-span-8", alt: "Vessel Deck" },
];

const faqItems = [
  {
    q: "How does Ship Space Share generate returns?",
    a: "Revenue is generated through chartering the vessel to global logistics companies. As an investor, you receive a proportional share of the operating revenue and asset appreciation.",
  },
  {
    q: "What is the minimum investment?",
    a: "The minimum investment threshold will be announced closer to the pre-launch date. It is designed to be accessible while maintaining the quality of a premium asset class.",
  },
  {
    q: "Who manages the vessel operations?",
    a: "Our experienced maritime management team handles all technical operations, crew management, maintenance, and chartering logistics. Investors do not need any maritime expertise.",
  },
];

// --- Main Component ---

export default function ShipSpaceSharePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Hero Cinematic Entrance
        const heroTl = gsap.timeline({ delay: 0.3 });
        heroTl
          .fromTo(
            ".hero-bg-image",
            { scale: 1.1, xPercent: -2, autoAlpha: 0.8 },
            { scale: 1.0, xPercent: 0, autoAlpha: 1, duration: 2, ease: "power3.out" }
          )
          .fromTo(
            ".hero-title-line",
            { yPercent: 100 },
            { yPercent: 0, duration: 1.2, stagger: 0.15, ease: "power4.out" },
            "-=1.5"
          )
          .fromTo(
            ".hero-sub",
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.8 },
            "-=0.6"
          );

        // Hero Scroll Parallax
        gsap.to(".hero-bg-image", {
          yPercent: 15,
          ease: "none",
          scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 1 },
        });
        gsap.to(".hero-content", {
          yPercent: -15,
          opacity: 0.3,
          ease: "none",
          scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 1 },
        });

        // 2. General Reveals
        gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
          gsap.fromTo(el, { y: 60, autoAlpha: 0 }, {
            y: 0, autoAlpha: 1, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });

        // 3. Reusable Cinematic Image Reveal & Parallax
        gsap.utils.toArray<HTMLElement>(".aa-parallax-image-wrapper").forEach((wrapper) => {
          const img = wrapper.querySelector(".aa-parallax-image");
          if (!img) return;

          gsap.fromTo(wrapper, { clipPath: "inset(0 100% 0 0)" }, {
            clipPath: "inset(0 0% 0 0)", duration: 1.4, ease: "power4.out",
            scrollTrigger: { trigger: wrapper, start: "top 85%" },
          });

          gsap.fromTo(img, { yPercent: -8, scale: 1.1 }, {
            yPercent: 8, scale: 1.0, ease: "none",
            scrollTrigger: { trigger: wrapper, start: "top bottom", end: "bottom top", scrub: 1 },
          });
        });

        // 4. Count Up Animation
        gsap.utils.toArray<HTMLElement>(".count-up").forEach((el) => {
          const target = { val: 0 };
          const finalVal = parseInt(el.dataset.value || "0");
          gsap.to(target, {
            val: finalVal,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = Math.floor(target.val) + (el.dataset.suffix || "");
            },
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });

        // 5. Gallery Alternating Parallax
        gsap.utils.toArray<HTMLElement>(".gallery-parallax").forEach((img, i) => {
          gsap.fromTo(img, 
            { yPercent: i % 2 === 0 ? -10 : 10 }, 
            {
              yPercent: i % 2 === 0 ? 10 : -10,
              ease: "none",
              scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: 1 }
            }
          );
        });

        // 6. Timeline Line Draw
        gsap.fromTo(".timeline-line", 
          { scaleY: 0 }, 
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top",
            scrollTrigger: { trigger: ".timeline-container", start: "top 70%", end: "bottom 50%", scrub: 1 }
          }
        );

        // 7. Maritime Route Map Animation
        const path = containerRef.current?.querySelector(".route-path") as SVGPathElement;
        if (path) {
          const pathLength = path.getTotalLength();
          gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
          
          const mapTl = gsap.timeline({
            scrollTrigger: { trigger: ".map-container", start: "top 70%", end: "bottom 60%", scrub: 1 }
          });

          mapTl.to(path, { strokeDashoffset: 0, duration: 2 })
               .fromTo(".ship-marker", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 }, 0)
               .fromTo(".ship-marker", 
                  { x: 0, y: 0 }, 
                  { 
                    x: 350, // Approximate end X coordinate based on SVG layout
                    y: 120, // Approximate end Y coordinate based on SVG layout
                    duration: 2, 
                    ease: "none" 
                  }, 0);
        }

        // 8. Final CTA Background
        gsap.fromTo(".cta-bg-image", { scale: 1.12, xPercent: -3 }, {
          scale: 1.0, xPercent: 3, ease: "none",
          scrollTrigger: { trigger: ".cta-section", start: "top bottom", end: "bottom top", scrub: 1 }
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".hero-title-line", ".hero-sub", ".reveal-up"], { autoAlpha: 1, y: 0 });
        gsap.set([".aa-parallax-image-wrapper", ".cta-bg-image", ".hero-bg-image"], { clipPath: "none", scale: 1, xPercent: 0, yPercent: 0 });
        gsap.utils.toArray<HTMLElement>(".count-up").forEach(el => {
          el.textContent = el.dataset.value + (el.dataset.suffix || "");
        });
        gsap.set([".timeline-line", ".route-path"], { scaleY: 1, strokeDashoffset: 0 });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} className="bg-white text-neutral-950 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="hero-section relative h-screen w-full flex items-center bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/images/ship-hero.jpg" alt="Maritime Vessel" fill className="hero-bg-image object-cover will-change-transform" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/70 z-[1]"></div>

        <div className="hero-content relative z-10 mx-auto max-w-[1600px] px-6 md:px-12 w-full will-change-transform">
          <p className="hero-sub mb-8 text-xs font-medium uppercase tracking-[0.3em] text-emerald-400">
            Investment Model
          </p>
          <h1 className="flex flex-col overflow-hidden text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.9] tracking-tighter">
            <span className="hero-title-line block">SHIP</span>
            <span className="hero-title-line block">SPACE</span>
            <span className="hero-title-line block text-emerald-500">SHARE</span>
          </h1>
          <div className="hero-sub mt-12 flex flex-col md:flex-row items-start gap-8">
            <div className="max-w-md">
              <p className="text-lg leading-relaxed text-white/60">
                Own a share of the infrastructure that moves the world. Premium maritime investment made accessible.
              </p>
            </div>
            <div className="flex flex-col border-l border-white/20 pl-6">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">Coming Soon</span>
              <div className="w-12 h-px bg-white/30 my-2"></div>
              <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span> Pre-Launch Phase
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-4">
              <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 mb-4">How it Works</p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2 className="reveal-up text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
                A transparent path to maritime ownership.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.num} className="reveal-up border-t border-neutral-200 pt-6">
                <span className="text-6xl font-bold text-neutral-200 block mb-4">{step.num}</span>
                <h3 className="text-2xl font-semibold tracking-tight mb-3">{step.title}</h3>
                <p className="text-neutral-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VESSEL OVERVIEW */}
      <section className="bg-[#f8f8f8] py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="aa-parallax-image-wrapper relative aspect-[21/9] w-full overflow-hidden mb-12 bg-neutral-200">
            <Image src="/images/vessel-overview.jpg" alt="Vessel Overview" fill className="aa-parallax-image object-cover will-change-transform" sizes="100vw" />
          </div>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5 reveal-up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 mb-4">Project Details</p>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight mb-6">
                MV Sampan Voyager
              </h2>
              <p className="text-lg text-neutral-600">
                A 45,000 DWT Handymax bulk carrier designed for global trade. Equipped with modern fuel-efficient engines and optimized for diverse cargo operations.
              </p>
            </div>
            <div className="col-span-12 md:col-span-7 reveal-up grid grid-cols-2 gap-8">
              <div className="border-t border-neutral-300 pt-4">
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Vessel Type</p>
                <p className="text-xl font-semibold">Handymax Bulk Carrier</p>
              </div>
              <div className="border-t border-neutral-300 pt-4">
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Capacity</p>
                <p className="text-xl font-semibold">45,000 DWT</p>
              </div>
              <div className="border-t border-neutral-300 pt-4">
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Operating Region</p>
                <p className="text-xl font-semibold">Asia / Europe</p>
              </div>
              <div className="border-t border-neutral-300 pt-4">
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Project Status</p>
                <p className="text-xl font-semibold text-emerald-600">Pre-Launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OPPORTUNITY STATUS & TIMELINE */}
      <section className="bg-neutral-950 py-20 lg:py-32 text-white">
        <div className="mx-auto max-w-[800px] px-6 text-center mb-20">
          <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400 mb-4">Project Status</p>
          <h2 className="reveal-up text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
            Pre-Launch <br/> <span className="text-white/50">Investment opportunities will open soon.</span>
          </h2>
        </div>

        <div className="mx-auto max-w-[800px] px-6 timeline-container relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
          <div className="timeline-line absolute left-1/2 top-0 bottom-0 w-px bg-emerald-500 -translate-x-1/2 will-change-transform"></div>
          
          <div className="space-y-16">
            {timelinePhases.map((item, i) => (
              <div key={i} className={`reveal-up flex items-center ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${i % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <h3 className="text-2xl font-semibold tracking-tight">{item.phase}</h3>
                  <p className="text-sm uppercase tracking-widest text-emerald-400 mt-2">{item.status}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-emerald-500 bg-neutral-950 z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BROCHURE DOWNLOAD */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-5 reveal-up">
            <div className="aa-parallax-image-wrapper relative aspect-[3/4] w-full overflow-hidden bg-neutral-900 group">
              <Image src="/images/prospectus.jpg" alt="Prospectus" fill className="aa-parallax-image object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform" sizes="33vw" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 reveal-up md:pl-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 mb-4">Publication</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight mb-6">
              Ship Space Share Investment Prospectus
            </h2>
            <p className="text-lg text-neutral-600 mb-10 max-w-xl">
              Explore the vessel specifications, investment model, legal structure, and project roadmap in our official prospectus.
            </p>
            <button className="group inline-flex items-center gap-4 border border-neutral-950 px-8 py-4 hover:bg-neutral-950 hover:text-white transition-colors duration-300">
              <span className="text-sm font-bold uppercase tracking-widest">Download Prospectus</span>
              <FiDownload className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. TRUST SIGNALS */}
      <section className="bg-[#f8f8f8] py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustSignals.map((stat, i) => (
            <div key={i} className="reveal-up flex flex-col border-l border-neutral-300 pl-6">
              <span className="count-up text-5xl md:text-7xl font-bold text-neutral-900" data-value={stat.value} data-suffix={stat.suffix}>0{stat.suffix}</span>
              <span className="mt-2 text-xs uppercase tracking-widest text-neutral-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-12 gap-8 items-center">
          <div className="aa-parallax-image-wrapper col-span-12 md:col-span-4 overflow-hidden">
            <div className="relative aspect-square w-full rounded-full overflow-hidden">
              <Image src="/images/investor.jpg" alt="Investor" fill className="aa-parallax-image object-cover will-change-transform" sizes="33vw" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 reveal-up">
            <blockquote className="text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-[1.3] tracking-tight text-neutral-800">
              “Ship Space Share gives investors access to an asset class that was traditionally difficult to enter. It’s a tangible investment in global infrastructure.”
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div>
                <p className="font-bold text-lg">Tahsin Rahman</p>
                <p className="text-sm text-neutral-500">Maritime Investor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PHOTO GALLERY */}
      <section className="bg-[#f8f8f8] py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <p className="reveal-up mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Gallery</p>
          <h2 className="reveal-up text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight mb-16">
            Vessel & Infrastructure
          </h2>

          <div className="grid grid-cols-12 grid-rows-[300px] md:grid-rows-[400px] gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className={`${img.size} relative overflow-hidden group bg-neutral-200`}>
                <div className="absolute inset-0 overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="gallery-parallax object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform" sizes="50vw" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 z-[1]"></div>
                <div className="absolute bottom-6 left-6 z-[2] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-xl font-semibold flex items-center gap-2"><FiAnchor /> {img.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LEGAL & CREDENTIALS */}
      <section className="bg-neutral-950 py-20 lg:py-32 text-white">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="reveal-up mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">Trust & Security</p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
              Legal & Registration
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul>
              {legalCredentials.map((cred, i) => (
                <li key={i} className="reveal-up flex items-center justify-between border-b border-white/10 py-6 group">
                  <span className="text-lg md:text-xl font-medium group-hover:translate-x-2 transition-transform duration-300">{cred}</span>
                  <FiCheckCircle className="h-6 w-6 text-emerald-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 10. ROUTE MAP OVERVIEW */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 text-center mb-12">
          <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 mb-4">Operating Route</p>
          <h2 className="reveal-up text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
            Global Trade Network
          </h2>
        </div>

        <div className="map-container relative w-full h-[500px] bg-[#f8f8f8] overflow-hidden border-y border-neutral-200">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
            {/* Grid Lines */}
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e5e5" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Route Path */}
            <path 
              className="route-path"
              d="M150,350 Q300,50 450,250 T650,150" 
              fill="none" 
              stroke="#10b981" 
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
            
            {/* Port A */}
            <circle cx="150" cy="350" r="6" fill="#10b981" />
            <text x="170" y="355" fill="#171717" fontSize="14" fontWeight="bold" fontFamily="monospace">PORT A (Chittagong)</text>
            <text x="170" y="370" fill="#737373" fontSize="10" fontFamily="monospace">22.3564° N, 91.8211° E</text>
            
            {/* Port B */}
            <circle cx="650" cy="150" r="6" fill="#10b981" />
            <text x="580" y="135" fill="#171717" fontSize="14" fontWeight="bold" fontFamily="monospace">PORT B (Rotterdam)</text>
            <text x="580" y="150" fill="#737373" fontSize="10" fontFamily="monospace">51.9244° N, 4.4777° E</text>

            {/* Ship Marker */}
            <g className="ship-marker">
              <rect x="-8" y="-4" width="16" height="8" fill="#171717" rx="2" />
              <rect x="-4" y="-8" width="8" height="4" fill="#171717" rx="1" />
            </g>
          </svg>
        </div>
      </section>

      {/* 11. VIDEO WALKTHROUGH */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="aa-parallax-image-wrapper relative aspect-video w-full overflow-hidden bg-neutral-900 cursor-pointer group">
            <Image src="/images/ship-video.jpg" alt="Video Tour" fill className="aa-parallax-image object-cover opacity-70 group-hover:scale-[1.12] transition-transform duration-700 will-change-transform" sizes="100vw" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <div className="h-20 w-20 rounded-full border border-white/80 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300">
                <FiPlay className="ml-1 text-white text-2xl" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">Experience the Vessel</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 12. SITE VISIT & WHATSAPP CTA */}
      <section className="bg-[#f8f8f8] py-20 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid grid-cols-12 gap-8 items-center">
          <div className="reveal-up col-span-12 md:col-span-5 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
              See the operation before you invest.
            </h3>
            <p className="text-neutral-600 mb-8">
              Book a guided site visit with our maritime advisors to inspect the vessel and port operations.
            </p>
            <Link href="#contact" className="group inline-flex items-center gap-4 text-lg font-bold border-b-2 border-emerald-500 pb-2 w-fit text-neutral-900 hover:text-emerald-600 transition-colors">
              Book a Site Visit <FiArrowRight className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
          
          <div className="reveal-up col-span-12 md:col-span-7 bg-neutral-950 text-white p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Want to understand the opportunity before launch?</h3>
            <p className="text-white/60 mb-8">Speak directly with an investment advisor and receive early access information.</p>
            <a href="https://wa.me/8801000000000" target="_blank" rel="noreferrer" className="group bg-emerald-500 text-black px-8 py-4 font-bold uppercase tracking-widest text-sm flex items-center gap-3 hover:bg-white transition-colors w-fit">
              <FiMessageCircle className="text-xl" /> Talk to an Advisor <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-[800px] px-6">
          <p className="reveal-up mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 text-center">FAQ</p>
          <h2 className="reveal-up text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="reveal-up border border-neutral-200 overflow-hidden">
                <button className="w-full flex justify-between items-center p-6 text-left hover:bg-neutral-50 transition-colors" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <span className="text-lg font-semibold">{item.q}</span>
                  <FiChevronDown className={`h-5 w-5 text-emerald-600 transition-transform duration-300 ${activeFaq === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${activeFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="p-6 pt-0 text-neutral-600 leading-7">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA */}
      <section className="cta-section relative min-h-[90vh] bg-black text-white flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/images/ship-cta.jpg" alt="Ocean Horizon" fill className="cta-bg-image object-cover opacity-40 will-change-transform" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-black/50 z-[1]"></div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-12 w-full">
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-tight">
            BE FIRST <br />
            TO KNOW. <br />
            <span className="text-emerald-500">GET EARLY ACCESS.</span>
          </h2>
          <p className="mt-8 text-xl text-white/60 max-w-lg">
            Ship Space Share is coming soon. Register today to secure your position in this premium maritime investment opportunity.
          </p>
          <div className="reveal-up mt-12">
            <Link href="/contact" className="group bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest flex items-center gap-4 hover:bg-emerald-500 transition-colors w-fit">
              Get Early Access <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}