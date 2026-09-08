"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowRight, FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import Lenis from "lenis";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const filters = ["ALL", "LAND", "HOSPITALITY", "MARITIME"] as const;
type Filter = (typeof filters)[number];

const portfolio = [
  {
    num: "01",
    category: "Real Estate Investment",
    title: "Land Share",
    description: "A structured opportunity to participate in strategically positioned land assets with long-term growth potential.",
    cta: "Explore Land Share",
    href: "/investment-portfolio/land-share",
    filter: "LAND" as Filter,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
  },
  {
    num: "02",
    category: "Hospitality & Lifestyle",
    title: "Club & Membership",
    description: "Exclusive membership opportunities designed around premium hospitality, lifestyle experiences, private facilities, and curated privileges.",
    cta: "Explore Membership",
    href: "/investment-portfolio/club-membership-share",
    filter: "HOSPITALITY" as Filter,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    num: "03",
    category: "Maritime Investment",
    title: "Ship Space Share",
    description: "A distinctive maritime investment opportunity offering participation in vessel-related assets and the evolving world of marine commerce.",
    cta: "Explore Ship Space Share",
    href: "/investment-portfolio/ship-share",
    filter: "MARITIME" as Filter,
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=2000&q=80",
  },
] as const;

const heroImage = "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2000&q=80";
const ctaImage = "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=2000&q=80";

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function InvestmentArchivePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<Filter>("ALL");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      /* ======== REDUCED MOTION FALLBACK ======== */
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".hero-anim", ".portfolio-anim", ".statement-anim", ".cta-anim"], { opacity: 1, y: 0, clipPath: "none" });
      });

      /* ======== CINEMATIC ANIMATIONS ======== */
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* --- Lenis Smooth Scroll --- */
        const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        lenis.on("scroll", ScrollTrigger.update);
        const rafCallback = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(rafCallback);
        gsap.ticker.lagSmoothing(0);

        /* --- Scroll Progress Bar --- */
        if (progressRef.current) {
          gsap.to(progressRef.current, {
            scaleX: 1, ease: "none",
            scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
          });
        }

        /* --- Hero Entrance --- */
        gsap.fromTo(".hero-anim", { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.3,
        });

        /* --- Portfolio Items: Image Reveal & Text Stagger --- */
        gsap.utils.toArray<HTMLElement>(".portfolio-item").forEach((item) => {
          const img = item.querySelector(".p-img-inner");
          const texts = item.querySelectorAll(".portfolio-anim");

          if (img) {
            gsap.fromTo(img, 
              { clipPath: "inset(0 100% 0 0)" }, 
              {
                clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power4.out",
                scrollTrigger: { trigger: item, start: "top 80%", once: true },
              }
            );
          }

          if (texts.length) {
            gsap.from(texts, {
              y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
              scrollTrigger: { trigger: item, start: "top 75%", once: true },
            });
          }
        });

        /* --- Background Numbers Horizontal Drift --- */
        gsap.utils.toArray<HTMLElement>(".bg-number-anim").forEach((num) => {
          gsap.fromTo(num, { x: -60 }, {
            x: 60, ease: "none",
            scrollTrigger: { trigger: num, start: "top bottom", end: "bottom top", scrub: 2 },
          });
        });

        /* --- Statement & CTA Sections --- */
        gsap.from(".statement-anim", {
          y: 60, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".statement-section", start: "top 70%", once: true },
        });

        gsap.from(".cta-anim", {
          y: 50, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".cta-section", start: "top 70%", once: true },
        });

        /* --- CTA Background Parallax --- */
        gsap.fromTo(".cta-bg", { y: -60 }, {
          y: 60, ease: "none",
          scrollTrigger: { trigger: ".cta-section", start: "top bottom", end: "bottom top", scrub: 1 },
        });

        return () => {
          gsap.ticker.remove(rafCallback);
          lenis.destroy();
        };
      });
    },
    { scope: containerRef }
  );

  const isDimmed = (itemFilter: string) => {
    if (activeFilter === "ALL") return false;
    return activeFilter !== itemFilter;
  };

  return (
    <div ref={containerRef} className="bg-[#F5F5F2] text-neutral-950 overflow-x-hidden">
      {/* CSS for custom scrollbar and selection */}
      <style>{`
        html { background: #F5F5F2; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #F5F5F2; }
        ::-webkit-scrollbar-thumb { background: #dcdcdc; }
        ::-webkit-scrollbar-thumb:hover { background: #bdbdbd; }
        ::selection { background: #10b981; color: #ffffff; }
      `}</style>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-neutral-200">
        <div ref={progressRef} className="h-full bg-emerald-600 origin-left scale-x-0" />
      </div>

      {/* Film Grain Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[200] opacity-[0.02] mix-blend-multiply">
        <svg width="100%" height="100%">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
          {/* Adjusted Gradients for White Background Transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#F5F5F2]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        {/* Giant Ghost Background Text */}
        <span className="pointer-events-none absolute -right-6 top-10 select-none text-[14rem] font-black leading-none text-neutral-950 opacity-[0.02] md:text-[20rem]">
          Assets
        </span>

        <div className="relative z-10 flex h-full flex-col px-[5vw]">
          <div className="h-20 md:h-24" />

          <div className="flex-1 flex flex-col justify-end max-w-5xl pb-16 md:pb-20">
            <div className="hero-anim mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-600 md:mb-8">
              Investment Portfolio
            </div>
            <h1 className="hero-anim text-[clamp(2.5rem,6vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] mb-8 text-white">
              Investing in
              <br />
              <span className="text-white/50">What Moves Tomorrow.</span>
            </h1>
            <p className="hero-anim max-w-xl text-base leading-[1.8] text-white/70 mb-8 md:mb-10 lg:text-lg">
              Explore Sampan Group&apos;s curated investment opportunities across land, hospitality, membership, and maritime assets — designed around real value, strategic growth, and long-term potential.
            </p>
            <div className="hero-anim">
              <Link href="#portfolio" className="group inline-flex items-center gap-5 border-b border-white/30 pb-3 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all duration-500 hover:border-emerald-400 hover:text-emerald-400">
                Explore Portfolio
                <FiArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-end justify-between pb-6 md:pb-8">
            <div className="hero-anim flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
              Scroll to Explore
              <FiChevronDown className="h-4 w-4 animate-pulse" />
            </div>
            <div className="hero-anim font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
              01 / 03
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ARCHIVE NAVIGATION & FILTERS                                 */}
      {/* ============================================================ */}
      <section id="portfolio" className="bg-[#F5F5F2] py-24 lg:py-32 px-[5vw]">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 flex flex-col justify-between gap-8 border-b border-neutral-300/60 pb-8 lg:mb-24 lg:flex-row lg:items-end">
            <div>
              <p className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700">
                The Portfolio
              </p>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
                Three ways to participate
                <br />
                <span className="text-neutral-400">in Sampan&apos;s growth.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-neutral-500 lg:text-right">
              Our investment portfolio brings together carefully structured opportunities across land, hospitality, membership, and maritime assets.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-1 border-t border-neutral-200 pt-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`relative px-5 md:px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] transition-colors duration-300 ${
                  activeFilter === f ? "text-emerald-700" : "text-neutral-400 hover:text-neutral-800"
                }`}
              >
                {f}
                {activeFilter === f && (
                  <span className="absolute bottom-0 left-5 right-5 h-px bg-emerald-600 md:left-6 md:right-6" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PORTFOLIO ITEMS                                              */}
      {/* ============================================================ */}
      
      {/* Item 01: Land Share */}
      <section className={`portfolio-item relative py-8 md:py-12 overflow-hidden transition-opacity duration-700 ${isDimmed("LAND") ? "opacity-20" : "opacity-100"}`}>
        <div className="bg-number-anim absolute top-0 right-0 pointer-events-none select-none">
          <span className="text-[18rem] font-black leading-none text-neutral-950/[0.02] md:text-[28rem] lg:text-[34rem]">01</span>
        </div>
        <div className="relative mx-auto max-w-[1400px] px-[5vw]">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 group relative overflow-hidden border border-neutral-200">
              <div className="p-img-inner aspect-[5/4] w-full bg-cover bg-center transition-transform duration-[1.2s] ease-out group-hover:scale-105" style={{ backgroundImage: `url(${portfolio[0].image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="portfolio-anim font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-700 mb-5">{portfolio[0].category}</div>
              <h3 className="portfolio-anim text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1] mb-6 tracking-[-0.03em] text-neutral-950">{portfolio[0].title}</h3>
              <p className="portfolio-anim text-neutral-600 mb-8 leading-relaxed text-sm md:text-base">{portfolio[0].description}</p>
              <Link href={portfolio[0].href} className="portfolio-anim group/btn inline-flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.25em] relative pb-1 text-neutral-950">
                <span className="relative">
                  {portfolio[0].cta}
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-neutral-300" />
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-emerald-600 origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500" />
                </span>
                <FiArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[1400px] px-[5vw] mt-24 md:mt-32">
        <div className="flex items-center gap-6 py-6">
          <span className="flex-1 h-px bg-neutral-200" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-400">02 / 03</span>
          <span className="flex-1 h-px bg-neutral-200" />
        </div>
      </div>

      {/* Item 02: Club & Membership (Reverse Layout) */}
      <section className={`portfolio-item relative py-8 md:py-12 overflow-hidden transition-opacity duration-700 ${isDimmed("HOSPITALITY") ? "opacity-20" : "opacity-100"}`}>
        <div className="bg-number-anim absolute top-0 left-0 pointer-events-none select-none">
          <span className="text-[18rem] font-black leading-none text-neutral-950/[0.02] md:text-[28rem] lg:text-[34rem]">02</span>
        </div>
        <div className="relative mx-auto max-w-[1400px] px-[5vw]">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-4 lg:order-1 order-2">
              <div className="portfolio-anim font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-700 mb-5">{portfolio[1].category}</div>
              <h3 className="portfolio-anim text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1] mb-6 tracking-[-0.03em] text-neutral-950">{portfolio[1].title}</h3>
              <p className="portfolio-anim text-neutral-600 mb-8 leading-relaxed text-sm md:text-base">{portfolio[1].description}</p>
              <Link href={portfolio[1].href} className="portfolio-anim group/btn inline-flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.25em] relative pb-1 text-neutral-950">
                <span className="relative">
                  {portfolio[1].cta}
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-neutral-300" />
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-emerald-600 origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500" />
                </span>
                <FiArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 lg:order-2 order-1 group relative overflow-hidden border border-neutral-200">
              <div className="p-img-inner aspect-[5/4] w-full bg-cover bg-center transition-transform duration-[1.2s] ease-out group-hover:scale-105" style={{ backgroundImage: `url(${portfolio[1].image})` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[1400px] px-[5vw] mt-24 md:mt-32">
        <div className="flex items-center gap-6 py-6">
          <span className="flex-1 h-px bg-neutral-200" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-400">03 / 03</span>
          <span className="flex-1 h-px bg-neutral-200" />
        </div>
      </div>

      {/* Item 03: Ship Space Share (Full-width Cinema) */}
      <section className={`portfolio-item relative py-8 md:py-12 overflow-hidden transition-opacity duration-700 ${isDimmed("MARITIME") ? "opacity-20" : "opacity-100"}`}>
        <div className="bg-number-anim absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
          <span className="text-[22rem] font-black leading-none text-neutral-950/[0.015] md:text-[35rem] lg:text-[45rem]">03</span>
        </div>
        <div className="relative z-10 mx-auto max-w-[1600px] px-[5vw]">
          <div className="group relative overflow-hidden border border-neutral-200">
            <div className="p-img-inner aspect-[16/10] md:aspect-[2.2/1] w-full bg-cover bg-center" style={{ backgroundImage: `url(${portfolio[2].image})` }} />
            {/* Adjusted overlay for legibility on light bg */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16">
              <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-end">
                <div className="md:col-span-8">
                  <div className="portfolio-anim font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-400 mb-4">{portfolio[2].category}</div>
                  <h3 className="portfolio-anim text-[clamp(2rem,5vw,5rem)] font-semibold leading-[0.95] mb-5 tracking-[-0.03em] text-white">{portfolio[2].title}</h3>
                  <p className="portfolio-anim max-w-xl text-white/70 leading-relaxed text-sm md:text-base">{portfolio[2].description}</p>
                </div>
                <div className="md:col-span-4 md:text-right">
                  <Link href={portfolio[2].href} className="portfolio-anim group/btn inline-flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.25em] relative pb-1 text-white">
                    <span className="relative">
                      {portfolio[2].cta}
                      <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/40" />
                      <span className="absolute -bottom-1 left-0 right-0 h-px bg-emerald-400 origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500" />
                    </span>
                    <FiArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* STATEMENT SECTION                                            */}
      {/* ============================================================ */}
      <section className="statement-section relative bg-white py-32 lg:py-48 px-[5vw] overflow-hidden border-t border-neutral-200 mt-24 md:mt-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="statement-anim mb-10 font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700 md:mb-12">
            The Sampan Approach
          </div>
          <h2 className="statement-anim text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.1] mb-10 tracking-[-0.03em] md:mb-12 text-neutral-950">
            Built around real assets.
            <br />
            <span className="text-neutral-400">Designed for long-term value.</span>
          </h2>
          <p className="statement-anim text-neutral-500 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Sampan Group brings together real estate, hospitality and maritime opportunities through a diversified portfolio designed to create meaningful participation in tangible assets.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA                                                    */}
      {/* ============================================================ */}
      <section className="cta-section relative py-32 lg:py-48 px-[5vw] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="cta-bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${ctaImage})`, transform: "scale(1.1)" }} />
          {/* Kept dark for text legibility over image */}
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="cta-anim text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.98] mb-8 tracking-[-0.03em] text-white">
            Find Your <span className="text-white/50">Opportunity.</span>
          </h2>
          <p className="cta-anim text-white/70 text-sm md:text-base lg:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Explore the investment opportunity that aligns with your vision for the future.
          </p>
          <div className="cta-anim flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="#" className="group inline-flex items-center gap-3 bg-white text-neutral-950 px-7 md:px-8 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-emerald-400 hover:text-white">
              Explore All Opportunities
              <FiArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link href="/contact" className="group inline-flex items-center gap-3 border border-white/40 px-7 md:px-8 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:border-white hover:bg-white/10">
              Contact Investment Team
              <FiArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}