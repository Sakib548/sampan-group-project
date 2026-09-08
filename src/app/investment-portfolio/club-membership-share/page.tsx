"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

// --- Types ---
interface Tier {
  num: string;
  name: string;
  desc: string;
  img: string;
}

interface Faq {
  q: string;
  a: string;
}

// --- Main Component ---
export default function ClubMembershipPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTier, setActiveTier] = useState<number>(0);
  const [mobileTier, setMobileTier] = useState<number | null>(0);
  const [calc, setCalc] = useState({ value: 1000000, initial: 20, duration: 36 });

  // --- GSAP Setup ---
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Line mask reveal for headings
        gsap.utils.toArray<HTMLElement>(".line-mask").forEach((line) => {
          gsap.fromTo(
            line,
            { yPercent: 100 },
            {
              yPercent: 0,
              duration: 1.4,
              ease: "power4.out",
              scrollTrigger: { trigger: line.parentElement!, start: "top 85%" },
            }
          );
        });

        // 2. Generic fade up
        gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 40, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%" },
            }
          );
        });

        // 3. Count Up Stats (Run once)
        gsap.utils.toArray<HTMLElement>(".count-up").forEach((el) => {
          const target = { val: 0 };
          const finalVal = parseInt(el.dataset.value || "0");
          gsap.to(target, {
            val: finalVal,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = Math.floor(target.val).toString();
            },
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });

        // Desktop specific animations
        mm.add("(min-width: 1024px)", () => {
          // 4. Parallax images
          gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((el) => {
            gsap.to(el, {
              yPercent: 15,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          });

          // 5. Facility Experience Horizontal Scroll
          const track = containerRef.current?.querySelector(".facility-track");
          if (track) {
            const totalWidth = (track as HTMLElement).scrollWidth - window.innerWidth;

            const tween = gsap.to(track, {
              x: -totalWidth,
              ease: "none",
              scrollTrigger: {
                trigger: ".facility-section",
                pin: true,
                scrub: 1,
                end: () => `+=${totalWidth}`,
                invalidateOnRefresh: true,
              },
            });

            return () => {
              tween.kill();
            };
          }
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".line-mask", ".fade-up"], { y: 0, yPercent: 0, autoAlpha: 1 });
        gsap.set([".parallax-img", ".facility-track"], { y: 0, yPercent: 0, x: 0 });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  // --- Data ---
  const tiers: Tier[] = [
    { num: "01", name: "Essential", desc: "Entry into the Sampan ecosystem. Core hospitality access, member events, and introductory privileges.", img: "/images/club/tier-essential.jpg" },
    { num: "02", name: "Premium", desc: "Expanded hospitality, lifestyle and partner privileges. Priority booking, lounge access, and guest privileges.", img: "/images/club/tier-premium.jpg" },
    { num: "03", name: "Privilege", desc: "Exclusive access to premium facilities and investment opportunities. Bespoke experiences and dedicated concierge.", img: "/images/club/tier-privilege.jpg" },
  ];

  const facilities = [
    { num: "01", title: "Premium Lounges", img: "/images/club/facility-lounges.jpg" },
    { num: "02", title: "Golf & Recreation", img: "/images/club/facility-golf.jpg" },
    { num: "03", title: "Fine Dining", img: "/images/club/facility-dining.jpg" },
    { num: "04", title: "Private Events", img: "/images/club/facility-events.jpg" },
  ];

  const benefits = ["Priority Hospitality Access", "Club & Lounge Privileges", "Golf & Leisure Access", "Exclusive Events", "Investment Opportunities", "Member-only Experiences", "Partner Benefits", "Priority Booking"];

  const stats = [
    { num: 15, suffix: "+", label: "Years of Experience" },
    { num: 500, suffix: "+", label: "Investors & Members" },
    { num: 10, suffix: "+", label: "Premium Assets" },
    { num: 100, suffix: "%", label: "Transparent Process" },
  ];

  const faqs: Faq[] = [
    { q: "What is Sampan Club & Membership?", a: "Sampan Club & Membership is a private gateway offering curated access to Sampan Group's premium hospitality, lifestyle, leisure, and investment ecosystem. It is designed for individuals seeking deeper engagement with high-value assets and exclusive experiences." },
    { q: "What membership tiers are available?", a: "We offer three distinct tiers: Essential, Premium, and Privilege. Each tier is structured to accommodate different levels of engagement, from core facility access to bespoke concierge services and exclusive investment opportunities." },
    { q: "What does each membership unlock?", a: "Members unlock priority access to hospitality venues, corporate lounges, golf resorts, fine dining, and private events. Higher tiers also include dedicated concierge support, guest privileges, and access to private investment deals." },
    { q: "What are EHCL and SAGCL?", a: "EHCL (Express Highway Company Ltd.) and SAGCL (Sampan Agro & Golf Company Ltd.) are flagship entities under Sampan Group. They manage our highway hospitality networks and agro-golf resort ecosystems, respectively, forming the core of our membership offerings." },
    { q: "How can I apply for membership?", a: "Prospective members can apply by submitting an inquiry through our website or contacting our membership advisory team. Following an initial consultation, a formal application and KYC process will be initiated." },
    { q: "Can NRB / overseas members participate?", a: "Absolutely. We have a dedicated desk for Non-Resident Bangladeshis (NRBs) and overseas investors. Our team assists with remote documentation, digital fund transfers, and international legal compliance to ensure a seamless onboarding process." },
    { q: "Can I visit the facilities before joining?", a: "Yes, we highly encourage prospective members to experience our facilities firsthand. You can book a guided site visit through our advisory team to inspect the properties and understand the ecosystem before making a commitment." },
    { q: "Is membership transferable?", a: "Memberships are generally personal but can be transferred to immediate family members subject to management approval and compliance with our terms and conditions. Corporate memberships may have specific transfer clauses." },
  ];

  const initialPayment = (calc.value * calc.initial) / 100;
  const monthlyPayment = (calc.value - initialPayment) / calc.duration;

  return (
    <main ref={containerRef} className="bg-[#FAFAF8] font-sans text-[#07131A] overflow-x-hidden antialiased">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen lg:h-screen w-full bg-[#07131A] flex flex-col lg:flex-row">
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 order-2 lg:order-1">
          <span className="text-[#007DC5] tracking-[0.3em] text-xs uppercase mb-8 font-medium fade-up">
            Sampan Group / Club & Membership
          </span>
          <h1 className="text-[#FAFAF8] font-light leading-[0.9] tracking-tighter mb-10" style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}>
            <div className="overflow-hidden"><div className="line-mask">PRIVATE</div></div>
            <div className="overflow-hidden"><div className="line-mask">ACCESS.</div></div>
            <div className="overflow-hidden"><div className="line-mask italic font-serif text-[#007DC5]">EXCEPTIONAL.</div></div>
          </h1>
          <p className="text-[#EAF3F8]/70 max-w-md text-lg font-light leading-relaxed fade-up mb-12">
            A private gateway to Sampan&apos;s hospitality, lifestyle, and investment ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-[#007DC5] text-[#FAFAF8] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#FAFAF8] hover:text-[#07131A] transition-colors duration-500 flex items-center justify-center w-full sm:w-auto">
              Explore Membership
              <span className="ml-4 group-hover:translate-x-2 transition-transform duration-500">→</span>
            </button>
            <button className="text-[#FAFAF8] border border-[#FAFAF8]/30 px-8 py-4 text-xs tracking-[0.2em] uppercase hover:border-[#007DC5] hover:text-[#007DC5] transition-colors duration-500 flex items-center justify-center w-full sm:w-auto">
              Talk to an Advisor
              <span className="ml-4">→</span>
            </button>
          </div>
        </div>

        <div className="relative w-full h-[40vh] lg:h-full lg:w-1/2 order-1 lg:order-2 overflow-hidden">
          <div className="parallax-img absolute inset-0 w-full h-[120%] scale-110">
            <Image
              src="/images/club/hero.png"
              alt="Sampan Club Premium Interior"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#07131A] via-[#07131A]/20 to-transparent"></div>
        </div>

        <div className="absolute bottom-8 left-8 right-8 md:left-16 lg:left-24 z-20 flex justify-between items-center text-[10px] tracking-[0.3em] uppercase text-[#7A8388] hidden md:flex">
          <div className="fade-up flex gap-8">
            <span>EHCL</span>
            <span>SAGCL</span>
            <span>Private Membership</span>
          </div>
          <div className="fade-up">Scroll Down ↓</div>
        </div>
      </section>

      {/* 2. PHILOSOPHY */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-[#FAFAF8] overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4">
            <span className="text-xs tracking-[0.3em] uppercase text-[#7A8388] block fade-up">The Sampan Membership</span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-[#07131A] font-light leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              <div className="overflow-hidden"><div className="line-mask">A membership designed around</div></div>
              <div className="overflow-hidden"><div className="line-mask italic font-serif text-[#007DC5]">access</div></div>
              <div className="overflow-hidden"><div className="line-mask">not simply benefits.</div></div>
            </h2>
          </div>
        </div>
        
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4"></div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl">
            <p className="text-lg text-[#111719] leading-relaxed fade-up">
              Members gain curated entry into selected Sampan hospitality, lifestyle, leisure, and investment opportunities. It is a framework designed for those who seek a deeper relationship with premium assets.
            </p>
            <div className="fade-up">
              <div className="border-t border-[#07131A] pt-4">
                <h3 className="text-4xl font-light text-[#07131A]">01</h3>
                <p className="text-sm uppercase tracking-wider text-[#7A8388] mt-2">Curated Access</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1600px] mx-auto border-t border-b border-[#EAF3F8] py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {["ACCESS", "EXPERIENCE", "OPPORTUNITY"].map((word) => (
              <div key={word} className="overflow-hidden">
                <h3 className="line-mask text-[#07131A] font-light tracking-tighter hover:text-[#007DC5] transition-colors duration-500 cursor-default" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}>
                  {word}.
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MEMBERSHIP TIERS */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-[#F4F5F2] overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-4">
              <span className="text-xs tracking-[0.3em] uppercase text-[#7A8388] block fade-up">Membership Tiers</span>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-[#07131A] font-light leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                <div className="overflow-hidden"><div className="line-mask">Choose your level</div></div>
                <div className="overflow-hidden"><div className="line-mask italic font-serif text-[#007DC5]">of access.</div></div>
              </h2>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-12 gap-8" onMouseLeave={() => setActiveTier(0)}>
            <div className="col-span-7 border-t border-[#07131A]/20">
              {tiers.map((tier, i) => (
                <div 
                  key={tier.num} 
                  className="fade-up border-b border-[#07131A]/20 cursor-pointer transition-all duration-500 relative"
                  onMouseEnter={() => setActiveTier(i)}
                >
                  <div className={`absolute left-0 top-0 h-full w-1 bg-[#007DC5] transition-transform duration-500 origin-top ${activeTier === i ? "scale-y-100" : "scale-y-0"}`}></div>
                  
                  <div className={`flex justify-between items-center py-8 transition-all duration-500 ${activeTier === i ? "pl-8" : "pl-0"}`}>
                    <div className="flex items-baseline gap-8">
                      <span className="text-sm text-[#7A8388]">{tier.num}</span>
                      <h3 className="text-5xl font-light transition-colors duration-500" style={{ color: activeTier === i ? "#007DC5" : "#07131A" }}>
                        {tier.name}
                      </h3>
                    </div>
                    <span className={`text-2xl transition-all duration-500 ${activeTier === i ? "translate-x-0 opacity-100 text-[#007DC5]" : "translate-x-4 opacity-0"}`}>→</span>
                  </div>
                  <div className={`overflow-hidden transition-all duration-700 ${activeTier === i ? "max-h-[200px] opacity-100 pb-8" : "max-h-0 opacity-0"}`}>
                    <p className="text-lg text-[#111719] max-w-2xl pl-20">{tier.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-5 h-[500px] sticky top-32 overflow-hidden">
              {tiers.map((tier, i) => (
                <div key={tier.num} className="absolute inset-0 transition-all duration-700" style={{ opacity: activeTier === i ? 1 : 0, transform: activeTier === i ? "scale(1)" : "scale(1.1)" }}>
                  <Image src={tier.img} alt={`${tier.name} Tier`} fill className="object-cover" sizes="50vw" />
                  <div className="absolute inset-0 bg-[#07131A]/50"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-12 text-[#FAFAF8]">
                    <span className="text-xs tracking-[0.3em] uppercase text-[#007DC5]">Tier {tier.num}</span>
                    <h4 className="text-4xl mt-4 font-light">{tier.name} Membership</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:hidden border-t border-[#07131A]/20">
            {tiers.map((tier, i) => (
              <div key={tier.num} className="border-b border-[#07131A]/20">
                <button 
                  className="w-full flex justify-between items-center py-8 text-left"
                  onClick={() => setMobileTier(mobileTier === i ? null : i)}
                  aria-expanded={mobileTier === i}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm text-[#7A8388]">{tier.num}</span>
                    <h3 className={`text-3xl font-light transition-colors duration-300 ${mobileTier === i ? "text-[#007DC5]" : "text-[#07131A]"}`}>
                      {tier.name}
                    </h3>
                  </div>
                  <span className={`text-2xl transition-transform duration-300 ${mobileTier === i ? "rotate-45 text-[#007DC5]" : "text-[#7A8388]"}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${mobileTier === i ? "max-h-[600px] opacity-100 pb-8" : "max-h-0 opacity-0"}`}>
                  <div className="relative w-full h-48 mb-6 overflow-hidden">
                    <Image src={tier.img} alt={`${tier.name} Tier`} fill className="object-cover" sizes="100vw" />
                    <div className="absolute inset-0 bg-[#07131A]/40"></div>
                  </div>
                  <p className="text-base text-[#111719] leading-relaxed">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CURRENT OPPORTUNITIES */}
      <section className="bg-[#07131A] text-[#FAFAF8] py-24 md:py-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            <div className="lg:col-span-4">
              <span className="text-xs tracking-[0.3em] uppercase text-[#007DC5] block fade-up">Currently Open</span>
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-light leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                <div className="overflow-hidden"><div className="line-mask">Featured Membership</div></div>
                <div className="overflow-hidden"><div className="line-mask italic font-serif">Opportunities.</div></div>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { tag: "EHCL Project", title: "Express Highway Inn", desc: "Premium highway hospitality and corporate lounge access. A strategic leisure asset.", img: "/images/club/hero.png" },
              { tag: "SAGCL Project", title: "Agro & Golf Resort", desc: "Leisure, lifestyle, and investment access to a premium golf and resort ecosystem.", img: "/images/club-membership/agrogolf.jpg" }
            ].map((op) => (
              <div key={op.title} className="fade-up group relative h-[500px] overflow-hidden border border-white/10">
                <div className="parallax-img absolute inset-0 w-full h-[120%]">
                  <Image src={op.img} alt={op.title} fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.2s] ease-out" sizes="50vw" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#07131A] via-[#07131A]/50 to-transparent"></div>
                
                <div className="relative h-full flex flex-col justify-between p-8 md:p-10 z-10">
                  <div className="flex justify-between items-start">
                    <span className="text-xs tracking-[0.3em] uppercase text-[#FAFAF8]/80">{op.tag}</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase bg-[#007DC5] px-3 py-1 text-[#FAFAF8]">Open For Enquiry</span>
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-light mb-4">{op.title}</h3>
                    <div className="w-12 h-px bg-[#007DC5] mb-6"></div>
                    <p className="text-[#EAF3F8]/80 max-w-md mb-8 text-sm md:text-base leading-relaxed">{op.desc}</p>
                    <button className="flex items-center text-xs tracking-[0.2em] uppercase text-[#FAFAF8] group-hover:text-[#007DC5] transition-colors duration-300">
                      View Opportunity <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FACILITY EXPERIENCE (Desktop) */}
      <section className="facility-section relative h-screen bg-[#07131A] hidden lg:block overflow-hidden">
        <div className="absolute top-10 left-10 z-20 text-[#FAFAF8] flex justify-between w-[calc(100%-80px)]">
          <span className="text-xs tracking-[0.3em] uppercase text-[#007DC5] block">What Members Unlock</span>
          <span className="text-xs tracking-[0.3em] uppercase text-[#7A8388]">01 / 04</span>
        </div>
        
        <div className="facility-track flex h-full">
          {facilities.map((s) => (
            <div key={s.num} className="facility-panel w-screen h-full flex items-center justify-center relative px-10">
              <div className="relative w-[65vw] h-[70vh] overflow-hidden group">
                <div className="parallax-img absolute inset-0 w-full h-[120%]">
                  <Image src={s.img} alt={s.title} fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.2s] ease-out" sizes="100vw" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#07131A] to-transparent opacity-40"></div>
                <div className="absolute bottom-10 left-10 z-10 text-[#FAFAF8]">
                  <span className="text-sm tracking-[0.3em] text-[#007DC5]">{s.num}</span>
                  <h3 className="text-6xl mt-4 font-light tracking-tight">{s.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FACILITY EXPERIENCE (Mobile) */}
      <section className="lg:hidden bg-[#07131A] py-20 px-4">
        <div className="max-w-[1600px] mx-auto mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-[#007DC5] block mb-4">What Members Unlock</span>
        </div>
        <div className="space-y-6">
          {facilities.map((t) => (
            <div key={t.num} className="relative h-[400px] overflow-hidden">
              <Image src={t.img} alt={t.title} fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07131A] via-[#07131A]/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-[#FAFAF8]">
                <span className="text-sm tracking-[0.3em] text-[#007DC5]">{t.num}</span>
                <h3 className="text-3xl font-light mt-2">{t.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BENEFITS */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-[#FAFAF8]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-4">
              <span className="text-xs tracking-[0.3em] uppercase text-[#7A8388] block fade-up">The Ecosystem</span>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-[#07131A] font-light leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                <div className="overflow-hidden"><div className="line-mask">Your membership</div></div>
                <div className="overflow-hidden"><div className="line-mask italic font-serif text-[#007DC5]">unlocks more.</div></div>
              </h2>
            </div>
          </div>

          <div className="border-t border-[#EAF3F8]">
            {benefits.map((b, i) => (
              <div key={b} className="fade-up group border-b border-[#EAF3F8] py-6 md:py-8 flex justify-between items-center hover:px-4 transition-all duration-500 cursor-pointer">
                <div className="flex items-center gap-6 md:gap-8">
                  <span className="text-sm text-[#7A8388] w-8">0{i + 1}</span>
                  <h3 className="text-xl md:text-3xl font-light text-[#07131A] group-hover:text-[#007DC5] transition-colors duration-500">{b}</h3>
                </div>
                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-500 text-[#007DC5] text-xl">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TRUST SIGNALS */}
      <section className="py-24 md:py-32 bg-[#07131A] text-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-2 gap-12 md:gap-16">
            {stats.map((stat, i) => (
              <div key={i} className="fade-up border-t border-white/20 pt-8">
                <h3 className="font-light tracking-tighter mb-4 flex items-baseline" style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}>
                  <span className="count-up" data-value={stat.num}>0</span>
                  <span className="text-[#007DC5]">{stat.suffix}</span>
                </h3>
                <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#7A8388]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-[#7A8388] block mb-16 fade-up">Trusted by those who participate</span>
          <blockquote className="text-[#07131A] font-light leading-[1.3] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            <div className="overflow-hidden"><div className="line-mask">&ldquo;Membership has given us</div></div>
            <div className="overflow-hidden"><div className="line-mask italic font-serif text-[#007DC5]">access to experiences</div></div>
            <div className="overflow-hidden"><div className="line-mask">that feel genuinely different.&rdquo;</div></div>
          </blockquote>
          <div className="mt-16 flex flex-col items-center fade-up">
            <div className="relative w-16 h-16 rounded-full bg-[#EAF3F8] mb-4 overflow-hidden">
              <Image src="/images/club/member-avatar.jpg" alt="Premium Member" fill className="object-cover" sizes="64px" />
            </div>
            <h4 className="text-lg font-medium text-[#07131A]">Member Name</h4>
            <p className="text-sm text-[#7A8388] tracking-wider uppercase mt-1">Premium Member / 5 Year Tenure</p>
          </div>
        </div>
      </section>

      {/* 9. PAYMENT CALCULATOR */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-[#F4F5F2]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 fade-up">
            <span className="text-xs tracking-[0.3em] uppercase text-[#7A8388] block mb-8">Financial Planning</span>
            <h2 className="text-[#07131A] font-light leading-[1.05] tracking-tight mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              <div className="overflow-hidden"><div className="line-mask">Plan your</div></div>
              <div className="overflow-hidden"><div className="line-mask italic font-serif text-[#007DC5]">membership.</div></div>
            </h2>
            <p className="text-base text-[#7A8388] mb-12 max-w-md">
              A transparent framework for understanding your membership commitment.
            </p>
            
            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label htmlFor="value" className="text-xs tracking-[0.2em] uppercase text-[#7A8388]">Membership Value</label>
                  <span className="text-sm font-medium text-[#07131A]">{calc.value.toLocaleString("en-US")} BDT</span>
                </div>
                <input 
                  id="value"
                  type="range" 
                  min="500000" 
                  max="5000000" 
                  step="100000"
                  value={calc.value} 
                  onChange={(e) => setCalc({ ...calc, value: Number(e.target.value) })} 
                  className="w-full accent-[#007DC5] cursor-pointer" 
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label htmlFor="initial" className="text-xs tracking-[0.2em] uppercase text-[#7A8388]">Initial Payment</label>
                  <span className="text-sm font-medium text-[#07131A]">{calc.initial}%</span>
                </div>
                <input 
                  id="initial"
                  type="range" 
                  min="10" 
                  max="80" 
                  value={calc.initial} 
                  onChange={(e) => setCalc({ ...calc, initial: Number(e.target.value) })} 
                  className="w-full accent-[#007DC5] cursor-pointer" 
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label htmlFor="duration" className="text-xs tracking-[0.2em] uppercase text-[#7A8388]">Payment Duration</label>
                  <span className="text-sm font-medium text-[#07131A]">{calc.duration} Months</span>
                </div>
                <input 
                  id="duration"
                  type="range" 
                  min="12" 
                  max="60" 
                  value={calc.duration} 
                  onChange={(e) => setCalc({ ...calc, duration: Number(e.target.value) })} 
                  className="w-full accent-[#007DC5] cursor-pointer" 
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-16 fade-up">
            <div className="border-t border-[#07131A]/20 pt-12">
              <div className="grid grid-cols-2 gap-8 md:gap-12 mb-12">
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-[#7A8388]">Initial Payment</span>
                  <h3 className="text-3xl md:text-4xl text-[#07131A] mt-4 font-light">{initialPayment.toLocaleString("en-US")} BDT</h3>
                </div>
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-[#7A8388]">Monthly Payment</span>
                  <h3 className="text-3xl md:text-4xl text-[#07131A] mt-4 font-light">{monthlyPayment.toLocaleString("en-US", { maximumFractionDigits: 0 })} BDT</h3>
                </div>
              </div>
              
              <div className="bg-[#07131A] text-[#FAFAF8] p-10 md:p-16">
                <span className="text-xs tracking-[0.2em] uppercase text-[#007DC5] block mb-6">Total Commitment</span>
                <h3 className="text-5xl md:text-7xl font-light tracking-tighter text-[#007DC5] mb-10">{calc.value.toLocaleString("en-US")} BDT</h3>
                <p className="text-[#EAF3F8]/70 text-xs leading-relaxed mb-10 max-w-md">
                  *This is an estimate and does not imply guaranteed investment returns. Speak with an advisor for exact figures, terms, and conditions.
                </p>
                <button className="group flex items-center text-xs tracking-[0.2em] uppercase text-[#FAFAF8] border-b border-[#007DC5] pb-2 hover:text-[#007DC5] transition-colors duration-300">
                  Speak with an Advisor <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SITE VISIT */}
      <section className="bg-[#07131A] text-[#FAFAF8] grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative h-[40vh] lg:h-auto overflow-hidden">
          <div className="parallax-img absolute inset-0 w-full h-[120%]">
            <Image src="/images/club/sampangroup.jpg" alt="Sampan Group Facility" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="absolute inset-0 bg-[#07131A]/30"></div>
          <div className="absolute bottom-12 left-12 z-10">
            <span className="text-xs tracking-[0.3em] uppercase text-[#007DC5] block mb-4">Experience</span>
            <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">See it for <br />yourself.</h2>
          </div>
        </div>

        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <p className="text-[#EAF3F8] text-base md:text-lg mb-12 max-w-md fade-up">
            Experience the facilities, meet our team and understand the membership opportunity before making your decision.
          </p>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 max-w-xl">
            <div className="relative">
              <input id="name" type="text" placeholder=" " className="peer w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#007DC5] placeholder:text-transparent text-[#FAFAF8] text-lg font-light" />
              <label htmlFor="name" className="absolute left-0 top-3 text-[#7A8388] text-lg font-light transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:tracking-[0.2em] peer-focus:uppercase peer-focus:text-[#007DC5] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-[0.2em] peer-[:not(:placeholder-shown)]:uppercase">Name</label>
            </div>
            <div className="relative">
              <input id="phone" type="tel" placeholder=" " className="peer w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#007DC5] placeholder:text-transparent text-[#FAFAF8] text-lg font-light" />
              <label htmlFor="phone" className="absolute left-0 top-3 text-[#7A8388] text-lg font-light transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:tracking-[0.2em] peer-focus:uppercase peer-focus:text-[#007DC5] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-[0.2em] peer-[:not(:placeholder-shown)]:uppercase">Phone</label>
            </div>
            <div className="relative md:col-span-2">
              <input id="email" type="email" placeholder=" " className="peer w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#007DC5] placeholder:text-transparent text-[#FAFAF8] text-lg font-light" />
              <label htmlFor="email" className="absolute left-0 top-3 text-[#7A8388] text-lg font-light transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:tracking-[0.2em] peer-focus:uppercase peer-focus:text-[#007DC5] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:tracking-[0.2em] peer-[:not(:placeholder-shown)]:uppercase">Email</label>
            </div>
            <select className="bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#007DC5] text-[#FAFAF8] text-lg font-light">
              <option className="text-[#07131A]">Essential Tier</option>
              <option className="text-[#07131A]">Premium Tier</option>
              <option className="text-[#07131A]">Privilege Tier</option>
            </select>
            <input type="date" className="bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#007DC5] text-[#FAFAF8] text-lg font-light" />
            <textarea placeholder="Message" rows={3} className="md:col-span-2 bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#007DC5] placeholder:text-[#7A8388] text-[#FAFAF8] text-lg font-light resize-none"></textarea>
          </form>
          
          <button className="mt-16 flex items-center text-sm tracking-[0.2em] uppercase text-[#FAFAF8] border-b border-[#007DC5] pb-2 hover:text-[#007DC5] transition-colors duration-300 w-fit fade-up">
            Book a Site Visit <span className="ml-3">→</span>
          </button>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs tracking-[0.3em] uppercase text-[#7A8388] block mb-8 fade-up">Questions</span>
            <h2 className="text-[#07131A] font-light leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              <div className="overflow-hidden"><div className="line-mask">Things to</div></div>
              <div className="overflow-hidden"><div className="line-mask italic font-serif text-[#007DC5]">know.</div></div>
            </h2>
          </div>
          <div className="lg:col-span-8 border-t border-[#EAF3F8]">
            {faqs.map((faq, i) => (
              <div key={i} className="fade-up border-b border-[#EAF3F8]">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)} 
                  className="w-full flex justify-between items-center py-6 md:py-8 text-left group"
                  aria-expanded={activeFaq === i}
                  aria-controls={`faq-content-${i}`}
                >
                  <h3 className={`text-lg md:text-2xl font-light transition-colors duration-300 ${activeFaq === i ? "text-[#007DC5]" : "text-[#07131A] group-hover:text-[#007DC5]"}`}>{faq.q}</h3>
                  <span className={`text-2xl md:text-3xl font-light transition-all duration-300 ${activeFaq === i ? "rotate-45 text-[#007DC5]" : "text-[#7A8388]"}`}>+</span>
                </button>
                <div 
                  id={`faq-content-${i}`}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: activeFaq === i ? '300px' : '0px', opacity: activeFaq === i ? 1 : 0 }}
                >
                  <p className="pb-8 text-base text-[#7A8388] max-w-2xl leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="parallax-img absolute inset-0 w-full h-[120%]">
          <Image 
            src="/images/club/cta-bg.jpg" 
            alt="Luxury Background" 
            fill 
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[#07131A]/80"></div>
        
        <div className="relative z-10 p-8 max-w-5xl">
          <h2 className="text-[#FAFAF8] font-light leading-[0.85] tracking-tighter mb-12" style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}>
            <div className="overflow-hidden"><div className="line-mask">YOUR ACCESS</div></div>
            <div className="overflow-hidden"><div className="line-mask italic font-serif text-[#007DC5]">STARTS HERE.</div></div>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up">
            <button className="group bg-[#007DC5] text-[#FAFAF8] px-8 md:px-10 py-4 md:py-5 text-xs tracking-[0.2em] uppercase hover:bg-[#FAFAF8] hover:text-[#07131A] transition-colors duration-500 flex items-center justify-center">
              Explore Membership <span className="ml-4 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
            <button className="text-[#FAFAF8] border border-[#FAFAF8]/30 px-8 md:px-10 py-4 md:py-5 text-xs tracking-[0.2em] uppercase hover:border-[#007DC5] hover:text-[#007DC5] transition-colors duration-500 flex items-center justify-center">
              Talk to an Advisor <span className="ml-4">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/8801712345678" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#007DC5] text-[#FAFAF8] p-4 shadow-xl flex items-center gap-3 hover:bg-[#111719] transition-colors duration-300 group md:bottom-8 md:right-8"
        aria-label="Talk to an Advisor on WhatsApp"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        <span className="hidden md:block text-xs tracking-[0.2em] uppercase">Talk to an Advisor</span>
      </a>

    </main>
  );
}