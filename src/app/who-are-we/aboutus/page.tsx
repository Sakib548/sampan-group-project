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

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

// --- Mock Data ---
const milestones = [
  { year: "1998", title: "The Foundation", desc: "Sampan Group is established, beginning its journey in real estate development.", image: "https://images.unsplash.com/photo-1486406146926-c1240e1c7d8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { year: "2005", title: "Expansion into Hospitality", desc: "Launched our first resort, marking our entry into the premium hospitality sector.", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { year: "2012", title: "Diversification", desc: "Expanded into agro and retail, building a diversified business portfolio.", image: "https://images.unsplash.com/photo-1625246333195-58573705c6f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { year: "2016", title: "Maritime & Energy", desc: "Ventured into alternative assets and green energy infrastructure.", image: "https://images.unsplash.com/photo-1577416412292-747c6607f0c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { year: "2026", title: "Global Footprint", desc: "Strengthening international partnerships and NRB investment desks.", image: "https://images.unsplash.com/photo-1517407580609-7a1ed3c1d9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

const leaders = [
  { name: "MD. EMAMUL HASAN", role: "Managing Director & CEO", image: "/images/leadership/Md._EMAMUL_HASAN.png" },
  { name: "Major Md. Zahidul Islam (Retd)", role: "Executive Director", image: "/images/leadership/Major_Md._Zahidul_Islam_(Retd).png" },
  { name: "Shohidul Islam", role: "Director", image: "/images/leadership/Shohidul_Islam.png" },
];

const values = [
  { title: "Integrity", desc: "We uphold the highest ethical standards in every business endeavor, ensuring transparency and trust." },
  { title: "Innovation", desc: "Continuously seeking modern solutions to complex industry challenges through technology and creativity." },
  { title: "Excellence", desc: "Delivering premium quality across all our properties, services, and stakeholder interactions." },
  { title: "Responsibility", desc: "Committed to sustainable growth, environmental stewardship, and community development." },
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
  const timelineProgressRef = useRef<HTMLDivElement>(null);
  const [activeValue, setActiveValue] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Hero Entrance
        const heroTl = gsap.timeline({ delay: 0.3 });
        heroTl
          .fromTo(".hero-bg", { scale: 1.15, autoAlpha: 0 }, { scale: 1.0, autoAlpha: 1, duration: 2, ease: "power3.out" })
          .fromTo(".hero-eyebrow", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=1")
          .fromTo(".hero-line", { yPercent: 100 }, { yPercent: 0, duration: 1.2, stagger: 0.15, ease: "power4.out" }, "-=0.8")
          .fromTo(".hero-desc", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.6")
          .fromTo(".hero-bottom", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.4");

        // Hero Parallax
        gsap.to(".hero-bg", { yPercent: 20, ease: "none", scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 1 } });
        gsap.to(".hero-content", { yPercent: -15, autoAlpha: 0, ease: "none", scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 1 } });

        // 2. General Reveals
        gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
          gsap.fromTo(el, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%" } });
        });

        // 3. Image Clip Reveals
        gsap.utils.toArray<HTMLElement>(".img-reveal-wrapper").forEach((wrapper) => {
          const img = wrapper.querySelector(".img-reveal");
          gsap.fromTo(wrapper, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.4, ease: "power4.out", scrollTrigger: { trigger: wrapper, start: "top 85%" } });
          if (img) {
            gsap.fromTo(img, { scale: 1.3 }, { scale: 1.0, ease: "none", scrollTrigger: { trigger: wrapper, start: "top bottom", end: "bottom top", scrub: 1 } });
          }
        });

        // 4. Count Up Stats
        gsap.utils.toArray<HTMLElement>(".count-up").forEach((el) => {
          const target = parseInt(el.dataset.value || "0");
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target, duration: 2, ease: "power2.out",
            onUpdate: () => (el.textContent = Math.floor(obj.val) + (el.dataset.suffix || "")),
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });

        // 5. Horizontal Timeline (Desktop Only)
        mm.add("(min-width: 1024px)", () => {
          const track = document.querySelector(".timeline-track");
          const progressBar = timelineProgressRef.current;
          if (track) {
            const totalWidth = (track as HTMLElement).scrollWidth;
            const dist = totalWidth - window.innerWidth + 200;
            gsap.to(track, {
              x: -dist, ease: "none",
              scrollTrigger: {
                trigger: "#heritage-section", start: "top top", end: () => `+=${dist}`,
                pin: true, scrub: 1, invalidateOnRefresh: true,
                onUpdate: (self) => { if (progressBar) gsap.to(progressBar, { scaleX: self.progress, duration: 0.1, overwrite: true }); },
              },
            });
          }
        });

        // 6. Global Map SVG Draw
        const path = document.querySelector(".map-path") as SVGPathElement;
        if (path) {
          const pathLength = path.getTotalLength();
          gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
          gsap.to(path, { strokeDashoffset: 0, duration: 2, ease: "power2.inOut", scrollTrigger: { trigger: ".map-container", start: "top 70%" } });
        }

        // 7. MD Video Reveal
        gsap.fromTo(".md-video-wrapper", { scale: 0.95, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: ".md-video-wrapper", start: "top 80%" } });

        // Magnetic Play Button
        const videoWrap = document.querySelector(".md-video-wrapper");
        if (videoWrap) {
          const handleMouseMove = (e: Event) => {
            const playBtn = document.querySelector(".play-btn");
            if (!playBtn) return;
            const mouseEvent = e as MouseEvent;
            const rect = videoWrap.getBoundingClientRect();
            const x = mouseEvent.clientX - rect.left - rect.width / 2;
            const y = mouseEvent.clientY - rect.top - rect.height / 2;
            gsap.to(playBtn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: "power2.out" });
          };
          const handleMouseLeave = () => {
            const playBtn = document.querySelector(".play-btn");
            if (!playBtn) return;
            gsap.to(playBtn, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
          };
          videoWrap.addEventListener("mousemove", handleMouseMove);
          videoWrap.addEventListener("mouseleave", handleMouseLeave);
        }

        // 8. Press Quote Reveal
        gsap.fromTo(".quote-line", { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: ".quote-section", start: "top 70%" } });

        // 9. Infinite Marquee for Accreditations
        gsap.to(".marquee-track", { xPercent: -50, repeat: -1, duration: 40, ease: "none" });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".hero-line", ".hero-desc", ".hero-eyebrow", ".hero-bottom", ".reveal-up", ".quote-line", ".md-video-wrapper"], { autoAlpha: 1, y: 0, scale: 1 });
        gsap.set([".img-reveal-wrapper"], { clipPath: "none" });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} className="bg-[#F5F5F2] text-neutral-950 overflow-x-hidden font-sans antialiased selection:bg-emerald-500 selection:text-white">
      
      {/* 01. CINEMATIC HERO */}
      <section className="hero-section relative h-screen min-h-[700px] w-full flex items-end bg-[#050505] text-white overflow-hidden">
        <div className="hero-bg absolute inset-0 opacity-0 will-change-transform">
          <Image src="/images/about/About-Our-Company-2.png" alt="Sampan Group Architecture" fill className="object-fit" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent z-[1]"></div>
        <div className="absolute inset-0 z-[2] opacity-[0.15]" ></div>

        <div className="hero-content relative z-10 w-full pb-16 md:pb-24">
          <div className="mx-auto max-w-[1600px] px-[5vw]">
            <p className="hero-eyebrow mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-500 opacity-0 flex items-center gap-3">
              <span className="block w-8 h-px bg-emerald-500"></span>
              About Sampan Group
            </p>
            <h1 className="flex flex-col overflow-hidden text-[clamp(3rem,9vw,9rem)] font-semibold leading-[0.85] tracking-[-0.04em]">
              <span className="hero-line block">Building Businesses.</span>
              <span className="hero-line block text-white/40">Creating Possibilities.</span>
            </h1>
            <p className="hero-desc mt-8 max-w-xl text-lg leading-relaxed text-white/60 opacity-0">
              A diversified business group committed to creating sustainable enterprises, developing meaningful opportunities, and contributing to the economic and social progress of Bangladesh.
            </p>
          </div>
        </div>

        <div className="hero-bottom absolute bottom-8 left-0 right-0 z-10 flex justify-between items-end px-[5vw] opacity-0">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">EST. 1998</div>
          <div className="flex flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            Scroll To Explore
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-emerald-500 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* 02. COMPANY OVERVIEW / STORY */}
      <section className="bg-[#F5F5F2] py-24 lg:py-32 relative">
        <div className="mx-auto max-w-[1600px] ">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 lg:col-span-5">
              <p className="reveal-up font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700 mb-6 flex items-center gap-3">
                <span className="block w-8 h-px bg-emerald-700"></span>
                Our Story
              </p>
              <h2 className="reveal-up text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
                More Than a Group. <br /> 
                <span className="text-neutral-400">A Growing Legacy.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-end gap-6">
              <p className="reveal-up text-xl text-neutral-800 leading-relaxed font-light">
                From our inception, we set out to do more than just build businesses. We aimed to construct a legacy of excellence, innovation, and trust.
              </p>
              <p className="reveal-up text-base text-neutral-600 leading-relaxed">
                Today, Sampan Group stands as a testament to that vision, encompassing a diverse portfolio of industries. Our journey is driven by a commitment to sustainable growth and a passion for creating value that extends beyond balance sheets—enriching the lives of our employees, partners, and the communities we serve.
              </p>
            </div>
          </div>

          <div className="relative w-full mt-24">
            <div className="img-reveal-wrapper relative aspect-[16/9] w-full overflow-hidden bg-neutral-200 border border-neutral-300">
              <Image src="/images/about/legacy.avif" alt="Group Headquarters" fill className="img-reveal object-cover will-change-transform" sizes="100vw" />
            </div>
            <div className="img-reveal-wrapper absolute -bottom-16 right-8 md:right-20 w-[40%] aspect-[4/3] overflow-hidden border-8 border-[#F5F5F2] shadow-2xl hidden md:block">
              <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Secondary" fill className="img-reveal object-cover will-change-transform" sizes="33vw" />
            </div>
          </div>
        </div>
      </section>

      {/* 03. HERITAGE / MILESTONES TIMELINE */}
      {/* Desktop Version (Horizontal Scroll) */}
      {/* <section id="heritage-section" className="bg-[#050505] h-screen w-full overflow-hidden hidden lg:block text-white relative">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 z-10">
          <div ref={timelineProgressRef} className="h-full w-full bg-emerald-500 origin-left scale-x-0"></div>
        </div>

        <div className="flex flex-col h-full justify-center">
          <div className=" mb-12 mx-auto max-w-[1600px] px-[5vw]">
            <p className="reveal-up font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-500 mb-4 flex items-center gap-3">
              <span className="block w-8 h-px bg-emerald-500"></span>
              Our Journey
            </p>
            <h2 className="reveal-up text-[clamp(2.5rem,5vw,5rem)] font-semibold tracking-[-0.03em] leading-none">
              A Journey of Progress.
            </h2>
          </div>
          <div className="timeline-track flex gap-12 px-[5vw] will-change-transform">
            {milestones.map((m, i) => (
              <div key={i} className="w-[450px] shrink-0 group flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-white/5 border border-white/10">
                  <Image src={m.image} alt={m.title} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" sizes="450px" />
                </div>
                <div className="flex items-center gap-4 mb-4 relative">
                  <span className="text-6xl font-bold text-white/[0.02] absolute -ml-4 -mt-4 pointer-events-none">{m.year}</span>
                  <div className="h-px w-12 bg-emerald-500"></div>
                  <span className="text-4xl font-semibold text-emerald-500 relative z-10">{m.year}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 tracking-[-0.02em]">{m.title}</h3>
                <p className="text-white/50 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mobile Version (Vertical Timeline) */}
      <section className="bg-[#050505] py-24 lg:hidden text-white">
        <div className="mx-auto mmx-auto max-w-[1600px] px-[5vw]">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-500 mb-4 flex items-center gap-3">
            <span className="block w-8 h-px bg-emerald-500"></span>
            Our Journey
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] mb-16 leading-none">A Journey of Progress.</h2>
          <div className="space-y-16 relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10"></div>
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-8 relative">
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-emerald-500 z-10 shadow-[0_0_0_4px_#050505]"></div>
                </div>
                <div className="pb-8 flex-1">
                  <span className="text-5xl font-bold text-emerald-500 block mb-3">{m.year}</span>
                  <h3 className="text-2xl font-semibold mb-3 tracking-[-0.02em]">{m.title}</h3>
                  <p className="text-white/60 mb-6">{m.desc}</p>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 border border-white/10">
                    <Image src={m.image} alt={m.title} fill className="object-cover" sizes="100vw" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. REDESIGNED MD VIDEO MESSAGE */}
      <section className="bg-[#F5F5F2] py-24 lg:py-32 relative overflow-hidden">
        {/* Giant Ghost Background Text */}
        <span className="pointer-events-none absolute -right-6 top-10 select-none text-[14rem] font-black leading-none text-neutral-950 opacity-[0.02] md:text-[20rem]">
          MD
        </span>

        <div className="mx-auto max-w-[1600px] px-[5vw] grid grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Video Stage */}
          <div className="col-span-12 lg:col-span-7">
            <div className="md-video-wrapper relative aspect-[16/10] w-full overflow-hidden border border-neutral-300 bg-black cursor-pointer group opacity-0 shadow-xl">
              {!isPlaying ? (
                <>
                  <img 
                    src="https://img.youtube.com/vi/YjhMZwyZZ_Y/maxresdefault.jpg" 
                    alt="MD Emamul Hasan" 
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />
                  
                  {/* Magnetic Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="play-btn relative h-24 w-24 rounded-full border border-white/80 bg-black/30 backdrop-blur-md flex items-center justify-center transition-all duration-500 hover:bg-emerald-500 hover:border-emerald-500 pointer-events-auto"
                    >
                      {/* Pulse rings */}
                      <span className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-75"></span>
                      <FiPlay className="text-white text-3xl group-hover:text-black transition-colors duration-300 ml-1" />
                    </button>
                  </div>

                  {/* Bottom Metadata */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 flex items-end justify-between pointer-events-none">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-400 mb-2">Leadership Message</p>
                      <p className="text-lg text-white/80 font-medium">The vision behind Sampan Group.</p>
                    </div>
                    <div className="font-mono text-[10px] text-white/40">02:48 Min</div>
                  </div>
                </>
              ) : (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/YjhMZwyZZ_Y?autoplay=1&rel=0"
                  title="A Message From Our Managing Director"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>

          {/* Editorial Content */}
          <div className="col-span-12 lg:col-span-5 lg:pl-8">
            <p className="reveal-up font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700 mb-6 flex items-center gap-3">
              <span className="block w-8 h-px bg-emerald-700"></span>
              Leadership
            </p>
            <h2 className="reveal-up text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] mb-8 text-neutral-950">
              A Message From Our <br /><span className="text-neutral-400">Managing Director.</span>
            </h2>
            
            {/* Premium Quote Block */}
            <blockquote className="reveal-up border-l border-emerald-500 pl-6 mb-10 text-neutral-600 text-lg leading-relaxed italic">
              "We didn’t start as a real estate company or a hospitality brand. We started as a highway stop — and grew because we listened to what the road needed next."
            </blockquote>

            <div className="reveal-up flex items-center gap-4">
              <div className="h-px w-12 bg-neutral-300" />
              <div>
                <h3 className="text-xl font-bold tracking-tight text-neutral-950">MD. EMAMUL HASAN</h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] mt-1 font-semibold text-emerald-700">Managing Director & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. GLOBAL FOOTPRINT */}
      <section className="bg-white py-24 lg:py-32 border-y border-neutral-200">
        <div className="mx-auto max-w-[1600px] px-[5vw] grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-7">
            <p className="reveal-up font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700 mb-4 flex items-center gap-3">
              <span className="block w-8 h-px bg-emerald-700"></span>
              Global Footprint
            </p>
            <h2 className="reveal-up text-[clamp(2.5rem,5vw,5rem)] font-semibold tracking-[-0.03em] mb-12 leading-none">
              From Bangladesh to a <br /> <span className="text-neutral-400">Broader Horizon.</span>
            </h2>

            <div className="map-container relative w-full h-[500px] bg-[#F5F5F2] border border-neutral-200 overflow-hidden shadow-sm">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
                <path d="M150,200 Q300,50 500,180 T700,150" fill="none" stroke="#E5E7EB" strokeWidth="2" />
                <path className="map-path" d="M150,200 Q300,50 500,180 T700,150" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                <circle cx="150" cy="200" r="8" fill="#10b981" />
                <circle cx="150" cy="200" r="20" fill="#10b981" opacity="0.1" />
                <text x="170" y="205" fill="#050505" fontSize="14" fontWeight="bold" className="uppercase tracking-wider">Bangladesh</text>
                <circle cx="500" cy="180" r="6" fill="#050505" />
                <circle cx="700" cy="150" r="6" fill="#050505" />
                <text x="520" y="185" fill="#050505" fontSize="12" className="uppercase tracking-wider">Europe</text>
                <text x="620" y="155" fill="#050505" fontSize="12" className="uppercase tracking-wider">Americas</text>
              </svg>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-8">
            {stats.map((s, i) => (
              <div key={i} className={`reveal-up pl-6 ${i % 2 === 0 ? "border-l-2 border-emerald-500" : "border-l-2 border-transparent"}`}>
                <span className="count-up text-6xl md:text-7xl font-bold block text-neutral-950 tracking-[-0.04em]" data-value={s.value} data-suffix={s.suffix}>0{s.suffix}</span>
                <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500 block font-semibold">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. MISSION / VISION / VALUES */}
      <section className="bg-[#F5F5F2] py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-[5vw]">
          <h2 className="reveal-up text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.03em] mb-20 text-center">
            Driven by Purpose. <br /> <span className="text-neutral-400">Defined by Values.</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 border-t border-b border-neutral-300/60 py-16">
            <div className="reveal-up lg:border-r lg:border-neutral-300/60 lg:pr-12 pb-8 lg:pb-0">
              <span className="text-6xl font-bold text-neutral-950/[0.03] block mb-6 tracking-[-0.04em]">01</span>
              <h3 className="text-2xl font-semibold mb-6 tracking-[-0.02em]">Mission</h3>
              <p className="text-neutral-600 leading-relaxed text-lg">To build sustainable, industry-leading enterprises that drive economic growth and create lasting value for our stakeholders.</p>
            </div>
            <div className="reveal-up lg:border-r lg:border-neutral-300/60 lg:pr-12 lg:pl-12 pb-8 lg:pb-0">
              <span className="text-6xl font-bold text-neutral-950/[0.03] block mb-6 tracking-[-0.04em]">02</span>
              <h3 className="text-2xl font-semibold mb-6 tracking-[-0.02em]">Vision</h3>
              <p className="text-neutral-600 leading-relaxed text-lg">To be the most trusted and diversified business group in Bangladesh, recognized globally for our innovation and integrity.</p>
            </div>
            <div className="reveal-up lg:pl-12">
              <span className="text-6xl font-bold text-neutral-950/[0.03] block mb-6 tracking-[-0.04em]">03</span>
              <h3 className="text-2xl font-semibold mb-6 tracking-[-0.02em]">Values</h3>
              <div className="flex flex-col mt-4">
                {values.map((v, i) => (
                  <div key={i} onMouseEnter={() => setActiveValue(i)} className="border-b border-neutral-300/60 py-4 cursor-pointer group">
                    <div className="flex justify-between items-center">
                      <h4 className={`text-lg transition-colors ${activeValue === i ? "text-emerald-700" : "text-neutral-950"}`}>{v.title}</h4>
                      <FiPlus className={`transition-transform duration-300 ${activeValue === i ? "rotate-45 text-emerald-700" : ""}`} />
                    </div>
                    <p className={`text-sm text-neutral-600 transition-all duration-300 overflow-hidden ${activeValue === i ? "max-h-20 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07. LEADERSHIP TEAM */}
      <section className="bg-[#050505] py-24 lg:py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 bg-emerald-500 blur-[200px]"></div>
        
        <div className="mx-auto max-w-[1600px] px-[5vw] relative z-10">
          <div className="mb-20">
            <p className="reveal-up font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-500 mb-4 flex items-center gap-3">
              <span className="block w-8 h-px bg-emerald-500"></span>
              Leadership
            </p>
            <h2 className="reveal-up text-[clamp(2.5rem,5vw,5rem)] font-semibold tracking-[-0.03em] leading-none">
              The People Shaping <br /> <span className="text-white/40">The Future.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {leaders.map((l, i) => (
              <div key={i} className={`group cursor-pointer ${i === 1 ? "md:translate-y-12" : ""}`}>
                <div className="relative aspect-[3/4] w-full overflow-hidden mb-6 bg-white/5 border border-white/10">
                  <Image src={l.image} alt={l.name} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" sizes="33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-2xl font-semibold transition-transform duration-500 group-hover:-translate-y-1 tracking-[-0.02em]">{l.name}</h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] mt-2 font-semibold text-emerald-500">{l.role}</p>
                <div className="h-[2px] w-0 group-hover:w-full bg-emerald-500 transition-all duration-500 mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. DOWNLOADABLE COMPANY PROFILE (REDESIGNED) */}
      <section className="bg-[#F5F5F2] py-24 lg:py-32 relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-[5vw] grid grid-cols-12 gap-12 items-center relative z-10">
          <div className="col-span-12 lg:col-span-7">
            <p className="reveal-up font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700 mb-4 flex items-center gap-3">
              <span className="block w-8 h-px bg-emerald-700"></span>
              Company Profile
            </p>
            <h2 className="reveal-up text-[clamp(3rem,7vw,7rem)] font-semibold tracking-[-0.04em] mb-8 leading-[0.9]">
              Explore the <br /> <span className="text-neutral-400">Sampan Group Story.</span>
            </h2>
            <p className="reveal-up text-lg text-neutral-600 mb-12 max-w-md leading-relaxed">
              Discover our businesses, projects, leadership, achievements and vision through our official company profile.
            </p>
            <div className="reveal-up flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center gap-4 bg-neutral-950 text-white px-8 py-5 hover:bg-emerald-600 transition-colors duration-300">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em]">Download Profile</span>
                <FiDownload className="transition-transform group-hover:translate-y-1" />
              </button>
              <button className="group inline-flex items-center gap-4 border border-neutral-300 px-8 py-5 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-all duration-300">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em]">View Online</span>
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 flex justify-center mt-12 lg:mt-0">
            <div className="relative w-72 h-96 bg-white border border-neutral-200 shadow-xl flex flex-col p-10 transition-transform duration-700 hover:scale-105 hover:-rotate-2">
              <div className="border-b border-neutral-200 pb-6 mb-6">
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-[0.3em]">Sampan Group</span>
              </div>
              <h3 className="text-4xl font-bold text-neutral-950 mb-auto tracking-[-0.03em]">Corporate <br /> Profile</h3>
              <div className="text-right mt-10">
                <span className="text-7xl font-bold text-emerald-600 tracking-[-0.04em]">2026</span>
              </div>
              <div className="mt-4 font-mono text-[10px] text-neutral-400 uppercase tracking-[0.3em]">Edition 01</div>
            </div>
          </div>
        </div>
      </section>

      {/* 09. ACCREDITATION & HONORS SUMMARY */}
      <section className="bg-[#050505] py-24 lg:py-32 text-white overflow-hidden relative">
        <div className="mx-auto max-w-[1600px] px-[5vw] text-center mb-16">
          <p className="reveal-up font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-500 mb-4 flex items-center gap-3 justify-center">
            <span className="block w-8 h-px bg-emerald-500"></span>
            Trust & Recognition
            <span className="block w-8 h-px bg-emerald-500"></span>
          </p>
          <h2 className="reveal-up text-[clamp(2.5rem,5vw,5rem)] font-semibold tracking-[-0.03em] leading-none">
            Recognized for <span className="text-white/40">Excellence.</span>
          </h2>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

          <div className="marquee-track flex gap-24 whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-24 items-center">
                {["RJSC", "ISO 9001", "BIDA", "ICAB", "FBCCI", "BASIS"].map((logo, j) => (
                  <span key={j} className="text-5xl font-bold text-white/15 hover:text-emerald-500 transition-colors cursor-pointer flex-shrink-0 tracking-[-0.03em]">{logo}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRESS QUOTE STRIP */}
      <section className="quote-section bg-emerald-600 text-white py-32 lg:py-48 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/4 h-full opacity-10 bg-white blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-20 bg-black blur-[100px]"></div>

        <div className="mx-auto max-w-[1600px] px-[5vw] text-center relative z-10">
          <div className="text-[clamp(2.5rem,7vw,8rem)] leading-[1.05] font-semibold tracking-[-0.04em]">
            <span className="quote-line block">“Building businesses</span>
            <span className="quote-line block">that create lasting value</span>
            <span className="quote-line block">for people, partners</span>
            <span className="quote-line block">and communities.”</span>
          </div>
          <p className="quote-line mt-16 font-mono text-[11px] uppercase tracking-[0.4em] text-white/60 flex items-center gap-3 justify-center">
            <span className="block w-12 h-px bg-white/60"></span>
            - Sampan Group
            <span className="block w-12 h-px bg-white/60"></span>
          </p>
        </div>
      </section>

      {/* 11. CONTACT / OFFICE FOOTER */}
      <section className="bg-[#050505] text-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-[5vw]">
          <div className="grid grid-cols-12 gap-12 mb-24">
            <div className="col-span-12 lg:col-span-7">
              <p className="reveal-up font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-500 mb-6 flex items-center gap-3">
                <span className="block w-8 h-px bg-emerald-500"></span>
                Let&apos;s Connect
              </p>
              <h2 className="reveal-up text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.04em]">
                Let&apos;s Build <br /> <span className="text-white/40">What Comes Next.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-end">
              <p className="reveal-up text-white/60 text-xl leading-relaxed">For partnerships, investments, careers, or general enquiries, reach out to our team.</p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-12 border-t border-white/10 pt-16">
            <div className="col-span-12 lg:col-span-4 space-y-10">
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-semibold">Head Office</h4>
                <p className="flex items-start gap-4 text-white/80 text-lg leading-relaxed">
                  <FiMapPin className="mt-1 text-emerald-500 flex-shrink-0" />
                  <span>SAMPAN 21ST CENTURY TOWER, House# 284, Block B, Road# 1/A, Bashundhara, Dhaka, Bangladesh, 1229</span>
                </p>
              </div>
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-semibold">Business Enquiries</h4>
                <a href="mailto:info@sampangroup.com.bd" className="flex items-center gap-4 text-white/80 hover:text-emerald-500 transition-colors mb-2 text-lg">
                  <FiMail className="text-emerald-500" /><span>info@sampangroup.com.bd</span>
                </a>
                <a href="tel:+8801912234588">
                  <p className="flex items-center gap-4 text-white/80 text-lg">
                    <FiPhone className="text-emerald-500" /><span>+880 1912-234588</span>
                  </p>
                </a>
              </div>
              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-semibold">Career Enquiries</h4>
                <a href="mailto:careers@sampangroup.com" className="flex items-center gap-4 text-white/80 hover:text-emerald-500 transition-colors text-lg">
                  <FiMail className="text-emerald-500" /><span>careers@sampangroup.com</span>
                </a>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6 h-64 lg:h-96 bg-white/5 relative overflow-hidden border border-white/10 rounded-sm group">
              <iframe
                src="https://www.google.com/maps?q=SAMPAN%2021ST%20CENTURY%20TOWER%2C%20House%23284%2C%20Block%20B%2C%20Road%23%201%2FA%2C%20Bashundhara%2C%20Dhaka%2C%20Bangladesh%2C%201229&z=15&output=embed"
                className="absolute inset-0 w-full h-full scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(160deg) brightness(0.9) contrast(0.9) saturate(0.5)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none opacity-40"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <div className="relative">
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-emerald-500/30 animate-ping -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="relative w-4 h-4 rounded-full bg-emerald-500 border-2 border-white -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}