"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight } from "react-icons/fi";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

type Section = {
  id: string;
  num: string;
  titlePrefix: string;
  titleEmphasis: string; // Serif italic part
  paragraphs: string[];
  list?: string[];
  footerParagraph?: string;
  image: string;
};

const policySections: Section[] = [
  {
    id: "information-we-collect",
    num: "01",
    titlePrefix: "Information We",
    titleEmphasis: "Collect",
    paragraphs: [
      "We may collect information that you voluntarily provide when you interact with our website, including when you:",
    ],
    list: [
      "Submit a contact or enquiry form",
      "Request information about our properties, projects, memberships, or hospitality services",
      "Submit a membership or business enquiry",
      "Contact us by email, telephone, WhatsApp, or other communication channels",
      "Subscribe to updates or communications from us",
      "Participate in surveys, promotions, or other website activities",
    ],
    footerParagraph:
      "Depending on how you interact with us, this information may include your full name, email address, telephone or mobile number, company or organisation name, address, and enquiry details. You should only provide information that is necessary and relevant to your enquiry.",
    image: "https://images.unsplash.com/photo-1486406146926-c1240e1c7d8f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "automatic-information",
    num: "02",
    titlePrefix: "Automatically",
    titleEmphasis: "Collected",
    paragraphs: [
      "When you visit our website, certain technical information may be collected automatically. This may include:",
    ],
    list: [
      "IP address",
      "Browser type and version",
      "Device type and Operating system",
      "General location information",
      "Pages visited and time spent on pages",
      "Referring website or source",
    ],
    footerParagraph:
      "This information helps us understand how visitors use our website, maintain website security, improve performance, and provide a better digital experience.",
    image: "https://images.unsplash.com/photo-1517407580609-7a1ed3c1d9b1?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "cookies-technologies",
    num: "03",
    titlePrefix: "Cookies &",
    titleEmphasis: "Technologies",
    paragraphs: [
      "Our website may use cookies and similar technologies to improve functionality, understand website usage, and enhance your experience. Cookies may be used for purposes such as remembering preferences, improving website functionality, understanding website traffic, and maintaining website security.",
      "You can manage or disable cookies through your browser settings. However, disabling certain cookies may affect some website functionality.",
    ],
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "how-we-use-info",
    num: "04",
    titlePrefix: "How We Use",
    titleEmphasis: "Information",
    paragraphs: ["We may use the information we collect to:"],
    list: [
      "Respond to your enquiries and requests",
      "Provide information about our services, projects, and properties",
      "Process and manage relevant requests or applications",
      "Improve our website, services, and customer experience",
      "Maintain website security and prevent fraudulent activity",
      "Comply with applicable legal and regulatory requirements",
    ],
    footerParagraph:
      "We will only use your information for legitimate business purposes and in accordance with applicable laws.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "sharing-info",
    num: "05",
    titlePrefix: "Sharing of",
    titleEmphasis: "Information",
    paragraphs: [
      "We do not sell or rent your personal information to third parties. We may share information with trusted service providers, contractors, or professional advisers where reasonably necessary to operate our website, provide requested services, or fulfil legitimate business and legal requirements. Where third parties process information on our behalf, we expect them to handle that information appropriately and maintain reasonable security measures.",
      "We may also disclose information where required by law, regulation, court order, or a lawful request from an appropriate authority.",
    ],
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "data-security",
    num: "06",
    titlePrefix: "Data",
    titleEmphasis: "Security",
    paragraphs: [
      "We take reasonable technical and organisational measures to protect personal information against unauthorised access, alteration, disclosure, loss, or misuse. However, no method of transmitting information over the internet or storing information electronically can be guaranteed to be completely secure.",
      "While we take appropriate steps to protect your information, we cannot guarantee absolute security of information transmitted to or through our website.",
    ],
    image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "data-retention",
    num: "07",
    titlePrefix: "Data",
    titleEmphasis: "Retention",
    paragraphs: [
      "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including to respond to enquiries, provide requested services, maintain business records, and meet legal, regulatory, accounting, or reporting requirements.",
      "When information is no longer required, we may securely delete, anonymise, or otherwise dispose of it in accordance with applicable requirements.",
    ],
    image: "https://images.unsplash.com/photo-1488998427799-e3362cec88c5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "privacy-rights",
    num: "08",
    titlePrefix: "Your Privacy",
    titleEmphasis: "Rights",
    paragraphs: ["Depending on applicable law, you may have rights regarding your personal information, including the right to:"],
    list: [
      "Request access to personal information we hold about you",
      "Request correction of inaccurate or incomplete information",
      "Request deletion of information where legally permitted",
      "Object to or request restriction of certain processing",
      "Withdraw consent where processing is based on consent",
    ],
    footerParagraph:
      "Requests relating to your personal information should be submitted using the contact details provided below. We may need to verify your identity before processing certain requests.",
    image: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "international-transfers",
    num: "09",
    titlePrefix: "International",
    titleEmphasis: "Transfers",
    paragraphs: [
      "Depending on the technology and service providers used by our website, personal information may be processed or stored in countries outside Bangladesh.",
      "Where information is transferred or processed internationally, we take reasonable steps to ensure that appropriate safeguards are in place and that the information is handled in accordance with applicable privacy and data protection requirements.",
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc7c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "policy-changes",
    num: "10",
    titlePrefix: "Changes to",
    titleEmphasis: "Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, website functionality, technology, legal requirements, or business practices. When we make changes, we will update the 'Last Updated' date at the top of this page.",
      "We encourage you to review this Privacy Policy periodically to remain informed about how we handle personal information.",
    ],
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function PrivacyPolicyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string>(policySections[0].id);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".hero-anim", ".reveal-up", ".parallax-img"], { opacity: 1, y: 0, scale: 1 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Hero Entrance
        gsap.fromTo(
          ".hero-anim",
          { y: 60, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1.8, stagger: 0.2, ease: "power4.out", delay: 0.3 }
        );

        // Hero Background Parallax
        gsap.to(".hero-bg", {
          yPercent: 20,
          ease: "none",
          scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 1 },
        });

        // Content Reveals
        gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 40, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%" },
            }
          );
        });

        // Section Image Parallax
        gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((img) => {
          gsap.to(img, {
            yPercent: -15,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest(".section-grid"),
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });

        // TOC Active State Tracking
        policySections.forEach((section) => {
          ScrollTrigger.create({
            trigger: `#${section.id}`,
            start: "top 50%",
            end: "bottom 50%",
            onToggle: (self) => {
              if (self.isActive) {
                setActiveId(section.id);
              }
            },
          });
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} className="bg-[#FAF8F5] text-[#0A0A0A] overflow-x-hidden font-sans antialiased selection:bg-[#1F5B45] selection:text-white">
      
      {/* 01. HERO SECTION */}
      <section className="hero-section relative h-screen min-h-[700px] w-full flex items-end overflow-hidden bg-[#0A0A0A] text-white">
        <div className="hero-bg absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2000&q=80"
            alt="Sampan Group Architecture"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A]/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-[5vw] w-full pb-16 md:pb-24 pt-28">
          <p className="hero-anim opacity-0 mb-8 font-mono text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.4em] text-[#C5A572] flex items-center gap-3">
            <span className="block w-8 h-px bg-[#C5A572]"></span>
            Sampan Group / Legal
          </p>
          
          <h1 className="hero-anim opacity-0 text-[clamp(4rem,12vw,12rem)] font-extralight leading-[0.85] tracking-[-0.05em] mb-10">
            Privacy <br />
            <span className="font-serif italic font-normal text-white/70">Policy.</span>
          </h1>
          
          <p className="hero-anim opacity-0 max-w-2xl text-base md:text-lg leading-[1.8] text-white/50 font-light mb-16">
            Your privacy matters. This policy explains how we collect, use, and protect information when you interact with Sampan Group.
          </p>
          
          <div className="hero-anim opacity-0 flex flex-wrap gap-8 border-t border-white/10 pt-6 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-white/30">
            <span>Last Updated: 27 August 2026</span>
            <span className="hidden md:block w-px h-4 bg-white/20 self-center"></span>
            <span>10 Sections</span>
          </div>
        </div>
      </section>

      {/* 02. EDITORIAL GALLERY CONTENT LAYOUT */}
      <section className="relative bg-[#FAF8F5] py-20 lg:py-40">
        <div className="mx-auto max-w-[1600px] px-[5vw]">
          
          {policySections.map((section, i) => {
            const isEven = i % 2 === 0;
            return (
              <article 
                key={section.id} 
                id={section.id} 
                className={`section-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center border-t border-[#E5E2DD] py-20 lg:py-32 first:border-t-0 first:pt-0 scroll-mt-32`}
              >
                {/* Image Column - Alternates Left/Right */}
                <div className={`reveal-up relative w-full aspect-[4/5] overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="parallax-img absolute inset-0 h-[120%] -top-[10%]">
                    <Image
                      src={section.image}
                      alt={section.titlePrefix + section.titleEmphasis}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  {/* Vignette overlay for luxury feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Number overlay on image */}
                  <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-10 flex items-end gap-4">
                    <span className="font-serif text-[clamp(5rem,10vw,10rem)] font-thin text-white/90 leading-none tracking-tighter mix-blend-difference">
                      {section.num}
                    </span>
                  </div>
                </div>

                {/* Text Column */}
                <div className={`reveal-up flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Mobile Number (hidden on desktop) */}
                  <span className="lg:hidden font-mono text-[11px] font-semibold text-[#1F5B45] mb-6 tracking-[0.3em] uppercase">
                    Section {section.num} / 10
                  </span>
                  
                  <h2 className="hidden lg:block font-mono text-[11px] font-semibold text-[#1F5B45] mb-8 tracking-[0.4em] uppercase">
                    Section {section.num} / 10
                  </h2>
                  
                  <h3 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extralight leading-[0.95] tracking-[-0.04em] text-[#0A0A0A] mb-12">
                    {section.titlePrefix} <br />
                    <span className="font-serif italic font-light text-[#1F5B45]">{section.titleEmphasis}</span>
                  </h3>
                  
                  <div className="space-y-8 max-w-xl">
                    {section.paragraphs.map((para, j) => (
                      <p key={j} className="text-base md:text-lg text-[#5A5A5A] leading-[1.9] font-light">
                        {para}
                      </p>
                    ))}

                    {section.list && (
                      <ul className="space-y-5 py-2 border-l border-[#E5E2DD] pl-8 my-10">
                        {section.list.map((item, j) => (
                          <li key={j} className="flex gap-4 text-[#0A0A0A]">
                            <span className="mt-[12px] h-px w-6 bg-[#C5A572] shrink-0"></span>
                            <span className="text-base md:text-lg leading-relaxed text-[#5A5A5A] font-light">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.footerParagraph && (
                      <p className="text-base md:text-lg text-[#5A5A5A] leading-[1.9] pt-2 font-light">
                        {section.footerParagraph}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
          
        </div>
      </section>

      {/* Fixed Vertical Progress Indicator (Right Side) */}
      <aside className="hidden xl:flex fixed top-1/2 right-8 -translate-y-1/2 z-40 flex-col items-center gap-6">
        <span className="font-mono text-[10px] text-[#5A5A5A] tracking-[0.3em] [writing-mode:vertical-rl] uppercase">
          Privacy Policy
        </span>
        <div className="relative h-40 w-px bg-[#E5E2DD] overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full bg-[#1F5B45] transition-all duration-700 ease-out" 
            style={{ height: `${(parseInt(activeId.split('-')[0] || '0') / policySections.length) * 100}%` }}
          ></div>
        </div>
        <span className="font-serif text-[14px] text-[#0A0A0A] italic tracking-wider">
          {activeId.split('-')[0]} / {policySections.length}
        </span>
      </aside>

      {/* 03. FINAL CONTACT / CTA SECTION */}
      <section className="bg-[#0A0A0A] text-white py-32 md:py-40 lg:py-56 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[24vw] font-serif italic font-thin text-white opacity-[0.03] leading-none select-none">
            Sampan
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-[5vw] text-center">
          <p className="reveal-up font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-[#C5A572] mb-12 flex items-center gap-4 justify-center">
            <span className="block w-12 h-px bg-[#C5A572]"></span>
            Questions about your privacy?
            <span className="block w-12 h-px bg-[#C5A572]"></span>
          </p>
          
          <h2 className="reveal-up text-[clamp(2.5rem,6vw,5.5rem)] font-extralight leading-[1.05] tracking-[-0.04em] mb-16">
            If you have questions about this Privacy Policy <br />
            <span className="font-serif italic text-white/40">or how your information is handled, our team is here to help.</span>
          </h2>
          
          <div className="reveal-up">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-6 border-b border-[#C5A572] pb-4 font-mono text-[12px] font-semibold uppercase tracking-[0.3em] text-white transition-all duration-500 hover:border-[#1F5B45] hover:text-[#1F5B45]"
            >
              Contact Sampan Group
              <FiArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}