"use client";

import React, { useState, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowRight, FiSearch } from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// --- Existing Data ---
const concerns = [
  {
    id: 1,
    name: "Sampan Metro Square",
    category: "Development & Construction",
    tagline: "Residential condominium project in Ashulia",
    logo: "/images/brand/sampan-metro-square.png",
    href: "/projects/sms",
  },
  {
    id: 2,
    name: "Sampan Motalib Skyline",
    category: "Development & Construction",
    tagline: "Premium urban real estate development",
    logo: "/images/brand/sampan-motalib-skyline.webp",
    href: "/projects/skyline",
  },
  {
    id: 3,
    name: "Sampan Golf Academy",
    category: "Golf Zone",
    tagline: "World-class golf training & facilities",
    logo: "/images/brand/golf-academy.png",
    href: "/golf",
  },
  {
    id: 4,
    name: "Sampan Resort & Spa",
    category: "Hospitality & Leisure",
    tagline: "Luxury hospitality and resort experience",
    logo: "/images/brand/resort.png",
    href: "/hospitality",
  },
  {
    id: 5,
    name: "Sampan Agro Ltd.",
    category: "Agro & Fresh Produce",
    tagline: "Sustainable agriculture and food supply",
    logo: "/images/brand/agro.png",
    href: "/agro",
  },
  {
    id: 6,
    name: "Sampan Fresh",
    category: "Retail Shop & Super Shop",
    tagline: "Daily groceries and premium retail",
    logo: "/images/brand/fresh.png",
    href: "/retail",
  },
  {
    id: 7,
    name: "Sampan Energy",
    category: "Automotive & Energy",
    tagline: "Future mobility and power solutions",
    logo: "/images/brand/energy.png",
    href: "/energy",
  },
  {
    id: 8,
    name: "Sampan Security",
    category: "Security",
    tagline: "Comprehensive property & digital security",
    logo: "/images/brand/security.png",
    href: "/security",
  },
  {
    id: 9,
    name: "Sampan Maritime",
    category: "Maritime / Alternative Assets",
    tagline: "Ship space share and global logistics",
    logo: "/images/brand/maritime.png",
    href: "/maritime",
  },
  {
    id: 10,
    name: "Sampan Institute",
    category: "Professional Education",
    tagline: "Developing the next generation of leaders",
    logo: "/images/brand/institute.png",
    href: "/education",
  },
  {
    id: 11,
    name: "Sampan Highway Travel",
    category: "Hospitality & Leisure",
    tagline: "Premium rest stops and travel amenities",
    logo: "/images/brand/highway.png",
    href: "/hospitality",
  },
  {
    id: 12,
    name: "Sampan EV Mobility",
    category: "Automotive & Energy",
    tagline: "Electric vehicle infrastructure network",
    logo: "/images/brand/ev.png",
    href: "/energy",
  },
];

// --- Main Component ---

export default function BusinessArchivePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Dynamic Categories
  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(concerns.map((item) => item.category))),
    ];
  }, []);

  // Dynamic Filtering
  const filteredConcerns = useMemo(() => {
    return concerns.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // GSAP Animation Logic
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Hero Entrance
        const heroTl = gsap.timeline({ delay: 0.3 });
        heroTl
          .fromTo(
            ".hero-bg-image",
            { scale: 1.15, autoAlpha: 0 },
            { scale: 1.08, autoAlpha: 1, duration: 2.5, ease: "power3.out" },
          )
          .fromTo(
            ".hero-line",
            { yPercent: 100 },
            { yPercent: 0, duration: 1.2, stagger: 0.15, ease: "power4.out" },
            "-=1.5",
          )
          .fromTo(
            ".hero-sub",
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1 },
            "-=0.6",
          );

        // 2. Hero Scroll Parallax Layers
        const heroSection =
          containerRef.current?.querySelector(".hero-section");
        if (heroSection) {
          gsap.to(".hero-bg-image", {
            yPercent: 15,
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
          gsap.to(".hero-grid", {
            yPercent: -5,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
          gsap.to(".hero-ghost-text", {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
          gsap.to(".hero-content", {
            yPercent: -10,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        // Scroll Indicator
        gsap.to(".scroll-line", {
          scaleY: 1,
          opacity: 1,
          transformOrigin: "top",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });

        // 3. General Reveals
        gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 40, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 90%" },
            },
          );
        });

        // 4. Counters
        gsap.utils.toArray<HTMLElement>(".counter").forEach((el) => {
          const target = parseInt(el.dataset.value || "0");
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent =
                Math.floor(obj.val).toString().padStart(2, "0") +
                (el.dataset.suffix || "");
            },
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });

        // 5. Archive Cards Batch Reveal
        gsap.set(".archive-card", { autoAlpha: 0, y: 40 });
        ScrollTrigger.batch(".archive-card", {
          start: "top 85%",
          onEnter: (elements) => {
            gsap.to(elements, {
              autoAlpha: 1,
              y: 0,
              duration: 1.2,
              stagger: 0.1,
              ease: "power3.out",
              overwrite: true,
            });
            elements.forEach((card) => {
              const imgWrap = card.querySelector(".archive-image-wrapper");
              if (imgWrap) {
                gsap.fromTo(
                  imgWrap,
                  { clipPath: "inset(0 0 100% 0)" },
                  {
                    clipPath: "inset(0 0 0% 0)",
                    duration: 1.4,
                    ease: "power4.out",
                    overwrite: true,
                  },
                );
              }
            });
          },
        });

        // 6. Continuous Image Internal Parallax
        const parallaxSpeeds = [-8, -12, -10, -15, -9, -11];
        gsap.utils
          .toArray<HTMLElement>(".archive-image-inner")
          .forEach((img, i) => {
            const speed = parallaxSpeeds[i % parallaxSpeeds.length];
            gsap.fromTo(
              img,
              { yPercent: speed * -1 },
              {
                yPercent: speed,
                ease: "none",
                scrollTrigger: {
                  trigger: img.parentElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              },
            );
          });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ".hero-line",
            ".hero-sub",
            ".reveal-up",
            ".archive-card",
            ".hero-bg-image",
          ],
          { autoAlpha: 1, y: 0, scale: 1, clipPath: "none" },
        );
        gsap.utils.toArray<HTMLElement>(".counter").forEach((el) => {
          el.textContent = el.dataset.value + (el.dataset.suffix || "");
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [activeCategory, searchQuery] }, // Re-init on filter change
  );

  return (
    <main
      ref={containerRef}
      className="bg-white text-neutral-950 overflow-x-hidden"
    >
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="hero-section relative h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-business-archive.jpg" // Replace with your architectural hero image
            alt="Sampan Group Architecture"
            fill
            className="hero-bg-image object-cover opacity-0 will-change-transform"
            priority
            sizes="100vw"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 z-[1]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40 z-[1]"></div>

        {/* Architectural Grid */}
        <div
          className="hero-grid absolute inset-0 z-[2] opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Ghost Typography */}
        <span className="hero-ghost-text absolute z-[2] text-[clamp(8rem,20vw,22rem)] font-bold leading-none text-white/5 -left-10 top-1/4 will-change-transform pointer-events-none">
          ARCHIVE
        </span>

        {/* Main Content */}
        <div className="hero-content relative z-10 mx-auto max-w-[1600px] px-[5vw] w-full will-change-transform">
          <p className="hero-sub mb-8 text-xs font-medium uppercase tracking-[0.3em] text-emerald-400 opacity-0">
            Sampan Group / Business Archive
          </p>
          <h1 className="flex flex-col overflow-hidden text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.9] tracking-tighter">
            <span className="hero-line block">EXPLORE OUR</span>
            <span className="hero-line block">BUSINESS</span>
            <span className="hero-line block text-emerald-500">ECOSYSTEM</span>
          </h1>
          <div className="hero-sub mt-12 flex flex-col md:flex-row items-start gap-12 opacity-0">
            <p className="text-lg leading-relaxed text-white/60 max-w-md">
              Explore the companies, projects, brands and ventures shaping the
              Sampan Group ecosystem.
            </p>
            <div className="flex gap-12 border-l border-white/20 pl-12">
              <div>
                <span
                  className="counter text-3xl font-bold text-white"
                  data-value={concerns.length}
                  data-suffix="+"
                >
                  00+
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/40">
                  Businesses
                </p>
              </div>
              <div>
                <span
                  className="counter text-3xl font-bold text-white"
                  data-value={categories.length - 1}
                  data-suffix=""
                >
                  00
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/40">
                  Industries
                </p>
              </div>
              <div>
                <span
                  className="counter text-3xl font-bold text-white"
                  data-value={1}
                  data-suffix=""
                >
                  00
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/40">
                  Group
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
            Scroll to Explore
          </span>
          <div className="relative h-12 w-px bg-white/20 overflow-hidden">
            <div className="scroll-line absolute top-0 left-0 w-full h-full bg-emerald-500 scale-y-0 opacity-0"></div>
          </div>
        </div>
      </section>

      {/* 2. ARCHIVE INTRO SECTION */}
      <section className="bg-white py-24 lg:py-32 border-b border-neutral-100">
        <div className="mx-auto max-w-[1600px] px-[5vw] grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-4">
              01 / The Archive
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="reveal-up text-2xl md:text-4xl font-medium leading-tight tracking-tight text-neutral-800 max-w-4xl">
              From property and hospitality to mobility, agriculture and
              alternative assets, Sampan Group continues to build across
              industries.
            </h2>
          </div>
        </div>
      </section>

      {/* 3. STICKY CATEGORY NAVIGATION & SEARCH */}
      <section className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-neutral-200">
        <div className="mx-auto max-w-[1600px] px-[5vw] py-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`group relative text-[11px] font-semibold uppercase tracking-widest transition-colors duration-300 ${
                  activeCategory === cat
                    ? "text-neutral-900"
                    : "text-neutral-400 hover:text-neutral-700"
                }`}
              >
                {cat}
                <span className="ml-2 text-[10px] text-neutral-400">
                  {cat === "All"
                    ? concerns.length
                    : concerns.filter((c) => c.category === cat).length}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-emerald-500 transition-all duration-300 ${
                    activeCategory === cat ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-64 flex items-center border-b border-neutral-300 pb-1">
            <FiSearch className="text-neutral-400 mr-2" />
            <input
              type="text"
              placeholder="SEARCH THE ARCHIVE"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-[11px] uppercase tracking-widest placeholder-neutral-400 focus:outline-none text-neutral-900"
            />
          </div>
        </div>
      </section>

      {/* 4. ARCHIVE GRID */}
      <section className="bg-[#F6F6F4] py-20 lg:py-32 min-h-screen">
        <div className="mx-auto max-w-[1600px] px-[5vw]">
          <div className="mb-12 text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Showing {filteredConcerns.length} of {concerns.length} businesses
          </div>

          {filteredConcerns.length === 0 ? (
            <div className="text-center py-32 text-neutral-500 text-lg tracking-widest uppercase">
              No Current Archive Entries
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredConcerns.map((item, i) => {
                // Editorial layout variations
                const isFeatured = i === 0 || i === 5;
                const aspectClass = isFeatured
                  ? "aspect-[16/10]"
                  : i % 2 === 0
                    ? "aspect-[4/3]"
                    : "aspect-[3/2]";
                const colSpan = isFeatured ? "lg:col-span-2" : "";
                const indexNum = String(i + 1).padStart(2, "0");

                return (
                  <Link
                    href={item.href || "#"}
                    key={item.id}
                    className={`archive-card group block ${colSpan}`}
                  >
                    <div
                      className={`archive-image-wrapper relative ${aspectClass} w-full overflow-hidden bg-[#EFEFED]`}
                    >
                      <div className="archive-image-inner absolute inset-0 will-change-transform">
                        <Image
                          src={item.logo}
                          alt={item.name}
                          fill
                          loading="lazy"
                          className="object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-[1]"></div>
                    </div>

                    <div className="mt-6 border-t border-neutral-300 pt-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[11px] tracking-[0.2em] text-neutral-400 font-mono">
                          {indexNum}
                        </span>
                        <span className="text-[11px] tracking-[0.2em] text-neutral-500 uppercase">
                          {item.category}
                        </span>
                      </div>
                      <h3
                        className={`group-hover:text-emerald-600 transition-colors duration-300 font-semibold tracking-tight text-neutral-900 ${
                          isFeatured ? "text-3xl md:text-4xl" : "text-2xl"
                        }`}
                      >
                        {item.name}
                      </h3>
                      <p className="mt-2 text-neutral-600 text-sm leading-relaxed">
                        {item.tagline}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-neutral-900 group-hover:text-emerald-600 transition-colors">
                        Explore
                        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="bg-black text-white py-32 lg:py-40">
        <div className="mx-auto max-w-[1600px] px-[5vw] grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <h2 className="reveal-up text-[clamp(2.5rem,6vw,6rem)] font-semibold leading-[1.05] tracking-tight">
              ONE GROUP. <br />
              MANY <span className="text-emerald-500">POSSIBILITIES.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-col justify-end">
            <p className="reveal-up text-lg text-white/60 mb-10 max-w-md">
              Discover the businesses, projects and ventures shaping the Sampan
              Group ecosystem.
            </p>
            <div className="reveal-up flex flex-col sm:flex-row gap-6">
              <Link
                href="/about"
                className="group inline-flex items-center gap-4 text-lg font-bold border-b-2 border-white pb-2 w-fit text-white hover:text-emerald-500 hover:border-emerald-500 transition-colors"
              >
                Explore Sampan Group{" "}
                <FiArrowRight className="transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
