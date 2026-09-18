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
  titleEmphasis: string;
  paragraphs: string[];
  list?: string[];
  footerParagraph?: string;
  image: string;
};

const termsSections: Section[] = [
  {
    id: "about-website",
    num: "01",
    titlePrefix: "About This",
    titleEmphasis: "Website",
    paragraphs: [
      "This website is provided to give visitors general information about Sampan Group, its businesses, projects, properties, hospitality offerings, memberships, services, and other related activities.",
      "The information provided on this website is intended for general informational purposes and does not necessarily constitute a contractual offer, promise, guarantee, or commitment by Sampan Group unless expressly stated otherwise.",
    ],
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "use-of-website",
    num: "02",
    titlePrefix: "Use of the",
    titleEmphasis: "Website",
    paragraphs: ["You may use this website for lawful and legitimate purposes only. You agree not to:"],
    list: [
      "Use the website for any unlawful or fraudulent purpose",
      "Attempt to gain unauthorised access to the website or its systems",
      "Interfere with the website's security, functionality, or operation",
      "Introduce malicious software, viruses, or harmful code",
      "Copy, reproduce, modify, distribute, or exploit website content without permission",
      "Use automated systems to collect or extract information from the website without our prior written consent",
      "Misrepresent your identity or provide false information through any enquiry or submission form",
      "Use the website in a manner that could damage Sampan Group or its reputation",
    ],
    footerParagraph: "We reserve the right to restrict or terminate access to the website where we reasonably believe these Terms & Conditions have been violated.",
    image: "https://images.unsplash.com/photo-1517407580609-7a1ed3c1d9b1?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "website-information",
    num: "03",
    titlePrefix: "Website",
    titleEmphasis: "Information",
    paragraphs: [
      "We make reasonable efforts to ensure that information published on this website is accurate and up to date. However, information may change from time to time, including information relating to:",
    ],
    list: [
      "Projects and developments",
      "Properties and land",
      "Prices and payment information",
      "Availability and Memberships",
      "Hospitality facilities and services",
      "Project specifications and completion schedules",
      "Images, illustrations, and visual representations",
    ],
    footerParagraph: "Sampan Group reserves the right to modify, update, or remove website content at any time without prior notice.",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "property-information",
    num: "04",
    titlePrefix: "Property & Project",
    titleEmphasis: "Information",
    paragraphs: [
      "Information relating to properties, developments, land shares, projects, investment opportunities, facilities, specifications, dimensions, layouts, prices, availability, and other project details is provided for general information only.",
      "Images, architectural visualisations, illustrations, floor plans, landscaping, furniture, fixtures, amenities, and other visual materials may represent proposed or conceptual designs and may differ from the final development. Actual specifications, availability, pricing, terms, conditions, and facilities may be subject to change.",
    ],
    footerParagraph: "Users should contact Sampan Group directly for current and official information before making any financial, investment, purchasing, booking, or contractual decision.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "no-financial-advice",
    num: "05",
    titlePrefix: "No Investment or",
    titleEmphasis: "Financial Advice",
    paragraphs: [
      "Information published on this website should not be interpreted as financial, investment, legal, tax, or professional advice. Any reference to investment opportunities, returns, appreciation, business opportunities, property values, or future developments is provided for general informational purposes only.",
    ],
    footerParagraph: "Potential customers, investors, or members should obtain independent professional advice where appropriate before making financial or contractual decisions.",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "enquiries-communications",
    num: "06",
    titlePrefix: "Enquiries &",
    titleEmphasis: "Communications",
    paragraphs: [
      "Submitting an enquiry, contact form, membership request, or other communication through this website does not automatically create a contractual relationship between you and Sampan Group.",
      "Information submitted through the website may be reviewed by relevant members of our team for the purpose of responding to your enquiry. We may contact you using the information you provide where reasonably necessary to respond to your request or provide relevant information.",
    ],
    image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "intellectual-property",
    num: "07",
    titlePrefix: "Intellectual",
    titleEmphasis: "Property",
    paragraphs: [
      "Unless otherwise stated, all content and materials available on this website are owned by or licensed to Sampan Group. This may include logos, text, photographs, videos, graphics, architectural visualisations, designs, and documents. These materials are protected by applicable intellectual property laws.",
    ],
    footerParagraph: "You may view and use the website for personal and legitimate informational purposes. You may not reproduce, republish, distribute, modify, sell, or commercially exploit any website content without prior written permission from Sampan Group.",
    image: "https://images.unsplash.com/photo-1488998427799-e3362cec88c5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "trademarks-brands",
    num: "08",
    titlePrefix: "Trademarks &",
    titleEmphasis: "Brand Names",
    paragraphs: [
      "Sampan Group names, logos, trademarks, service marks, project names, and associated brand elements may belong to Sampan Group or their respective owners. Nothing on this website grants you any licence or right to use any trademark, logo, or brand identity without appropriate written permission.",
    ],
    image: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "third-party-links",
    num: "09",
    titlePrefix: "Third-Party",
    titleEmphasis: "Links",
    paragraphs: [
      "Our website may contain links to external websites, platforms, services, or organisations. These links may be provided for convenience or additional information. Sampan Group does not necessarily endorse or control third-party websites and is not responsible for their content, availability, security, accuracy, privacy practices, terms, products, or services.",
    ],
    footerParagraph: "Your use of third-party websites is subject to the terms and policies of those websites.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc7c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "website-availability",
    num: "10",
    titlePrefix: "Website",
    titleEmphasis: "Availability",
    paragraphs: [
      "We aim to keep our website available and functioning properly. However, we do not guarantee that the website will always be available without interruption, free from technical errors, viruses, or compatible with every device. The website may occasionally be unavailable due to maintenance, updates, technical issues, security measures, or circumstances beyond our reasonable control.",
    ],
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "disclaimer",
    num: "11",
    titlePrefix: "",
    titleEmphasis: "Disclaimer",
    paragraphs: [
      "To the extent permitted by applicable law, the website and its content are provided on an “as available” basis. Sampan Group makes no guarantee that all information on the website will always be complete, accurate, current, or suitable for a particular purpose.",
    ],
    footerParagraph: "Nothing on the website should be interpreted as a guarantee regarding future performance, availability, project completion, property value, investment return, or commercial outcome unless expressly confirmed through a formal written agreement.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "limitation-liability",
    num: "12",
    titlePrefix: "Limitation of",
    titleEmphasis: "Liability",
    paragraphs: [
      "To the extent permitted by applicable law, Sampan Group shall not be responsible for losses or damages arising directly or indirectly from reliance on website information, temporary unavailability, technical errors, unauthorised access, use of third-party websites, or changes to project, property, service, or membership information.",
    ],
    footerParagraph: "Nothing in these Terms & Conditions excludes or limits any liability that cannot legally be excluded or limited under applicable law.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "user-submitted-info",
    num: "13",
    titlePrefix: "User-Submitted",
    titleEmphasis: "Information",
    paragraphs: [
      "Where the website allows you to submit information, you are responsible for ensuring that the information you provide is accurate, lawful, and does not infringe the rights of another person. You should not submit confidential, sensitive, or proprietary information through a general enquiry form unless specifically requested by Sampan Group.",
    ],
    footerParagraph: "We reserve the right to remove or disregard submissions that are unlawful, abusive, misleading, inappropriate, or unrelated to the purpose of the website.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "privacy",
    num: "14",
    titlePrefix: "",
    titleEmphasis: "Privacy",
    paragraphs: [
      "Your use of this website may involve the collection and processing of personal information. Our handling of personal information is described in our Privacy Policy. By using the website, you acknowledge that you have reviewed the applicable privacy information.",
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33b4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "changes-to-terms",
    num: "15",
    titlePrefix: "Changes to",
    titleEmphasis: "These Terms",
    paragraphs: [
      "Sampan Group may revise these Terms & Conditions from time to time to reflect changes to our business, website updates, new features, or changes in applicable laws or regulations. Updated Terms & Conditions will be published on this page with a revised “Last Updated” date.",
    ],
    footerParagraph: "Your continued use of the website after changes are published constitutes your acceptance of the updated terms, to the extent permitted by applicable law.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "governing-law",
    num: "16",
    titlePrefix: "Governing",
    titleEmphasis: "Law",
    paragraphs: [
      "These Terms & Conditions shall be governed by and interpreted in accordance with the laws applicable in Bangladesh, unless otherwise required by applicable law or expressly agreed in a separate written agreement. Any dispute relating to the use of this website shall be subject to the jurisdiction of the appropriate courts of Bangladesh.",
    ],
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "severability",
    num: "17",
    titlePrefix: "",
    titleEmphasis: "Severability",
    paragraphs: [
      "If any provision of these Terms & Conditions is found to be invalid, unlawful, or unenforceable, that provision shall be interpreted or modified to the extent necessary to make it enforceable, where legally permitted. The remaining provisions shall continue to remain in effect.",
    ],
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "entire-agreement",
    num: "18",
    titlePrefix: "Entire",
    titleEmphasis: "Agreement",
    paragraphs: [
      "These Terms & Conditions, together with our Privacy Policy and any other policies or notices expressly referenced on this website, constitute the general terms governing your use of the website. Specific products, properties, memberships, services, or transactions may be subject to additional terms, agreements, contracts, or conditions.",
    ],
    footerParagraph: "Where a separate written agreement exists, the terms of that agreement will govern the relevant transaction or relationship.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "contact-us",
    num: "19",
    titlePrefix: "Contact",
    titleEmphasis: "Us",
    paragraphs: [
      "If you have any questions regarding these Terms & Conditions, please contact us. Sampan Group, Head Office: Sampan 21st Century Tower, H 284, Rd 1/A, Block B, Bashundhara R/A, Dhaka, Bangladesh, 1229.",
    ],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "acceptance",
    num: "20",
    titlePrefix: "",
    titleEmphasis: "Acceptance",
    paragraphs: [
      "By accessing and using the Sampan Group website, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.",
    ],
    footerParagraph: "Sampan Group. Building Experiences. Creating Possibilities.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function TermsConditionsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string>(termsSections[0].id);

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

        // Enhanced Section Image Parallax (Scrolling effect)
        gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -15 }, // Starts slightly up
            {
              yPercent: 15, // Moves down as you scroll
              ease: "none",
              scrollTrigger: {
                trigger: img.closest(".section-grid"),
                start: "top bottom",
                end: "bottom top",
                scrub: 1, // Smooth scrubbing
              },
            }
          );
        });

        // Active State Tracking
        termsSections.forEach((section) => {
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
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80"
            alt="Sampan Group Terms"
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
            Terms & <br />
            <span className="font-serif italic font-normal text-white/70">Conditions.</span>
          </h1>
          
          <p className="hero-anim opacity-0 max-w-2xl text-base md:text-lg leading-[1.8] text-white/50 font-light mb-16">
            Welcome to the official website of Sampan Group. These Terms & Conditions govern your access to and use of our website and its content.
          </p>
          
          <div className="hero-anim opacity-0 flex flex-wrap gap-8 border-t border-white/10 pt-6 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-white/30">
            <span>Last Updated: 27 August 2026</span>
            <span className="hidden md:block w-px h-4 bg-white/20 self-center"></span>
            <span>20 Sections</span>
          </div>
        </div>
      </section>

      {/* 02. EDITORIAL GALLERY CONTENT LAYOUT */}
      <section className="relative bg-[#FAF8F5] py-20 lg:py-40">
        <div className="mx-auto max-w-[1600px] px-[5vw]">
          
          {termsSections.map((section, i) => {
            const isEven = i % 2 === 0;
            return (
              <article 
                key={section.id} 
                id={section.id} 
                className={`section-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center border-t border-[#E5E2DD] py-20 lg:py-32 first:border-t-0 first:pt-0 scroll-mt-32`}
              >
                {/* Image Column - Alternates Left/Right */}
                <div className={`reveal-up relative w-full aspect-[4/5] overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Parallax Wrapper - Extended height for smooth scroll movement */}
                  <div className="parallax-img absolute inset-x-0 -top-[15%] h-[130%]">
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
                    Section {section.num} / 20
                  </span>
                  
                  <h2 className="hidden lg:block font-mono text-[11px] font-semibold text-[#1F5B45] mb-8 tracking-[0.4em] uppercase">
                    Section {section.num} / 20
                  </h2>
                  
                  <h3 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extralight leading-[0.95] tracking-[-0.04em] text-[#0A0A0A] mb-12">
                    {section.titlePrefix} {section.titlePrefix && <br />}
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
          Terms & Conditions
        </span>
        <div className="relative h-40 w-px bg-[#E5E2DD] overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full bg-[#1F5B45] transition-all duration-700 ease-out" 
            style={{ height: `${(parseInt(activeId.split('-')[0] || '0') / termsSections.length) * 100}%` }}
          ></div>
        </div>
        <span className="font-serif text-[14px] text-[#0A0A0A] italic tracking-wider">
          {activeId.split('-')[0].padStart(2, '0')} / {termsSections.length}
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
            Questions about these terms?
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