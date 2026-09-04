"use client";

import React, { useState, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FiSearch,
  FiArrowRight,
  FiPlay,
  FiChevronDown,
  FiMail,
  FiPhone,
} from "react-icons/fi";

// Register plugins only on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

// --- Mock Data ---

const featuredStory = {
  category: "CORPORATE",
  title: "Sampan Group Announces New Chapter of Sustainable Growth",
  excerpt:
    "As part of our 2026 vision, we are expanding our investments in green infrastructure and community development across all divisions.",
  date: "02 September 2026",
  image: "/images/about/sampangroupteam.png",
};

const allPosts = [
  {
    id: 1,
    type: "PRESS RELEASE",
    division: "Corporate",
    title:
      "Sampan Group Announces Strategic Expansion Across Key Business Divisions",
    date: "02 SEP 2026",
    image: "/images/news-1.jpg",
  },
  {
    id: 2,
    type: "PRESS RELEASE",
    division: "Development",
    title: "Sampan Development Introduces New Premium Project in Dhaka",
    date: "28 AUG 2026",
    image: "/images/news-2.jpg",
  },
  {
    id: 3,
    type: "BLOG",
    division: "Hospitality",
    title: "Redefining Luxury: The Architecture Behind Sampan Resorts",
    date: "15 AUG 2026",
    image: "/images/news-3.jpg",
  },
  {
    id: 4,
    type: "PRESS RELEASE",
    division: "Agro",
    title: "Sampan Agro Reaches 10,000 Farmer Milestone in Sustainable Farming",
    date: "01 AUG 2026",
    image: "/images/news-4.jpg",
  },
  {
    id: 5,
    type: "BLOG",
    division: "Automotive",
    title:
      "The Future of Mobility: Electric Vehicle Infrastructure in Bangladesh",
    date: "22 JUL 2026",
    image: "/images/news-5.jpg",
  },
  {
    id: 6,
    type: "PRESS RELEASE",
    division: "Logistics",
    title: "Sampan Maritime Acquires New Vessel to Expand Global Routes",
    date: "10 JUL 2026",
    image: "/images/news-6.jpg",
  },
];

const blogPosts = [
  {
    id: 1,
    category: "INSIGHTS",
    title: "Building Sustainable Businesses for the Next Generation",
    excerpt:
      "How long-term vision and ESG principles guide our investment strategy.",
    date: "12 AUG 2026",
    image: "/images/blog-1.jpg",
    size: "lg",
  },
  {
    id: 2,
    category: "INNOVATION",
    title: "Integrating Smart Technology in Modern Real Estate",
    excerpt: "From IoT to AI, exploring the tech shaping our properties.",
    date: "05 AUG 2026",
    image: "/images/blog-2.jpg",
    size: "sm",
  },
  {
    id: 3,
    category: "LEADERSHIP",
    title: "Fostering a Culture of Excellence and Integrity",
    excerpt: "An inside look at our human resources philosophy.",
    date: "28 JUL 2026",
    image: "/images/blog-3.jpg",
    size: "sm",
  },
];

const photos = [
  {
    src: "/images/photo-1.jpg",
    category: "Corporate Event",
    size: "row-span-2",
  },
  { src: "/images/photo-2.jpg", category: "Development", size: "row-span-1" },
  { src: "/images/photo-3.jpg", category: "Hospitality", size: "row-span-2" },
  { src: "/images/photo-4.jpg", category: "Agro", size: "row-span-1" },
  { src: "/images/photo-5.jpg", category: "Maritime", size: "row-span-1" },
  { src: "/images/photo-6.jpg", category: "Leadership", size: "row-span-2" },
];

const videos = [
  {
    title: "Sampan Group — Building What's Next",
    duration: "02:34",
    thumbnail: "/images/video-main.jpg",
    size: "main",
  },
  {
    title: "Behind the Scenes: Sampan Metro Square",
    duration: "01:12",
    thumbnail: "/images/video-1.jpg",
    size: "small",
  },
  {
    title: "A Day at Sampan Golf Academy",
    duration: "03:45",
    thumbnail: "/images/video-2.jpg",
    size: "small",
  },
  {
    title: "Sustainable Agriculture in Action",
    duration: "04:20",
    thumbnail: "/images/video-3.jpg",
    size: "small",
  },
];

const socialPosts = [
  {
    platform: "LINKEDIN",
    date: "02 SEP 2026",
    content:
      "We are thrilled to announce our latest strategic expansion. Read the full press release on our newsroom.",
    image: "/images/social-1.jpg",
  },
  {
    platform: "FACEBOOK",
    date: "28 AUG 2026",
    content:
      "Sampan Development hits a major construction milestone at our new Gulshan project.",
    image: "/images/social-2.jpg",
  },
  {
    platform: "YOUTUBE",
    date: "15 AUG 2026",
    content:
      "Watch the architectural showcase of our new hospitality venture. Link in bio.",
    image: "/images/social-3.jpg",
  },
];

// --- Main Component ---

export default function NewsroomPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeType, setActiveType] = useState("ALL");
  const [activeDivision, setActiveDivision] = useState("ALL DIVISIONS");
  const [visiblePosts, setVisiblePosts] = useState(3);

  const divisions = [
    "ALL DIVISIONS",
    "Corporate",
    "Development",
    "Hospitality",
    "Agro",
    "Automotive",
    "Logistics",
  ];
  const types = ["ALL", "PRESS RELEASE", "BLOG", "PHOTO", "VIDEO"];

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesType = activeType === "ALL" || post.type === activeType;
      const matchesDivision =
        activeDivision === "ALL DIVISIONS" || post.division === activeDivision;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesDivision && matchesSearch;
    });
  }, [activeType, activeDivision, searchQuery]);

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
          );

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
              { clipPath: "inset(0 100% 0 0)" },
              {
                clipPath: "inset(0 0% 0 0)",
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

        // 4. Newsletter Parallax
        gsap.to(".newsletter-bg-text", {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: ".newsletter-section",
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
            ".reveal-up",
          ],
          { autoAlpha: 1, y: 0 },
        );
        gsap.set([".img-reveal-wrapper"], { clipPath: "none" });
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [filteredPosts] }, // Re-run on filter change
  );

  return (
    <main
      ref={containerRef}
      className="bg-white text-[#071018] overflow-x-hidden font-sans"
    >
      {/* 01. PAGE HERO */}
      <section className="relative h-screen min-h-[700px] w-full flex items-center bg-[#071018] text-white overflow-hidden">
        <div className="hero-bg absolute inset-0 opacity-0 will-change-transform">
          <Image
            src="/images/about/sampangroupteam.png"
            alt="Newsroom"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-[#071018]/60 to-[#071018]/20 z-[1]"></div>

        <div className="relative z-10 w-full pb-16 md:pb-24">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <p className="hero-eyebrow mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] opacity-0">
              Newsroom
            </p>
            <h1 className="flex flex-col overflow-hidden text-[clamp(3rem,7vw,8rem)] font-semibold leading-[0.9] tracking-tighter">
              <span className="hero-line block">Stories. Updates.</span>
              <span className="hero-line block">Insights. Impact.</span>
            </h1>
            <p className="hero-desc mt-8 max-w-xl text-lg leading-relaxed text-white/70 opacity-0">
              Explore the latest news, announcements, stories and media from
              Sampan Group.
            </p>
            <div className="hero-cta mt-10 opacity-0">
              <button className="group inline-flex items-center gap-4 border border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#071018] transition-colors duration-300">
                Explore Stories{" "}
                <FiArrowRight className="rotate-90 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 02. FEATURED STORY */}
      <section className="bg-white py-24 lg:py-32 border-b border-[#E5E9EC]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="img-reveal-wrapper relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
              <Image
                src={featuredStory.image}
                alt={featuredStory.title}
                fill
                className="img-reveal object-cover will-change-transform"
                sizes="50vw"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-6">
              Featured
            </p>
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-4">
              {featuredStory.category}
            </p>
            <h2 className="text-[clamp(1.8rem,3vw,3rem)] font-semibold leading-tight tracking-tight mb-6">
              {featuredStory.title}
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              {featuredStory.excerpt}
            </p>
            <div className="flex items-center justify-between border-t border-[#E5E9EC] pt-6">
              <span className="text-sm text-neutral-500">
                {featuredStory.date}
              </span>
              <Link
                href="#"
                className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#007DC5] hover:text-[#071018] transition-colors"
              >
                Read Full Story{" "}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 03. SEARCH & FILTER SYSTEM */}
      <section className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-[#E5E9EC]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-6 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative flex items-center w-full lg:w-1/3 border-b border-[#E5E9EC] pb-2">
            <FiSearch className="text-neutral-400 mr-3" />
            <input
              type="text"
              placeholder="Search newsroom"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm uppercase tracking-widest placeholder-neutral-400 focus:outline-none text-[#071018]"
            />
          </div>

          {/* Content Type */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`text-[11px] font-semibold uppercase tracking-widest transition-colors duration-300 ${
                  activeType === type
                    ? "text-[#007DC5]"
                    : "text-neutral-400 hover:text-[#071018]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Division Dropdown */}
          <div className="relative">
            <select
              value={activeDivision}
              onChange={(e) => setActiveDivision(e.target.value)}
              className="appearance-none bg-transparent border border-[#E5E9EC] px-4 py-2 pr-8 text-[11px] font-semibold uppercase tracking-widest focus:outline-none cursor-pointer"
            >
              {divisions.map((div) => (
                <option key={div} value={div}>
                  {div}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400" />
          </div>
        </div>
      </section>

      {/* 04. PR & PRESS RELEASE FEED */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-16">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              From the Group
            </p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
              Press & Announcements
            </h2>
          </div>

          <div className="flex flex-col">
            {filteredPosts.slice(0, visiblePosts).map((post) => (
              <div
                key={post.id}
                className="reveal-up group border-t border-[#E5E9EC] py-8 grid grid-cols-12 gap-8 items-center"
              >
                <div className="col-span-12 md:col-span-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#007DC5] border border-[#007DC5] inline-block px-2 py-1">
                    {post.type}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {post.title}
                  </h3>
                  <div className="flex gap-4 text-xs text-neutral-500 uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.division}</span>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-3 flex justify-end items-center gap-6">
                  <div className="hidden md:block w-20 h-20 overflow-hidden bg-neutral-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                  <FiArrowRight className="text-2xl text-[#071018] group-hover:text-[#007DC5] group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

          {visiblePosts < filteredPosts.length && (
            <div className="mt-16 text-center">
              <button
                onClick={() => setVisiblePosts(visiblePosts + 3)}
                className="group inline-flex items-center gap-4 border border-[#071018] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#071018] hover:text-white transition-colors duration-300"
              >
                Load More Stories{" "}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-32">
              <p className="text-2xl font-semibold mb-4">
                Nothing matched your search.
              </p>
              <p className="text-neutral-500 mb-8">
                Try another keyword or browse all stories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveType("ALL");
                  setActiveDivision("ALL DIVISIONS");
                }}
                className="group inline-flex items-center gap-4 bg-[#007DC5] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#071018] transition-colors duration-300"
              >
                View All Stories <FiArrowRight />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 05. BLOG LISTING */}
      <section className="bg-[#F5F7F8] py-24 lg:py-32 border-y border-[#E5E9EC]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-16">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              Insights & Stories
            </p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
              Perspectives, ideas and stories from across Sampan Group.
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {blogPosts.map((post, i) => (
              <div
                key={post.id}
                className={`reveal-up group ${post.size === "lg" ? "col-span-12 lg:col-span-7" : "col-span-12 sm:col-span-6 lg:col-span-5"}`}
              >
                <div
                  className={`img-reveal-wrapper relative overflow-hidden bg-neutral-100 mb-6 ${post.size === "lg" ? "aspect-[16/10]" : "aspect-[4/3]"}`}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="img-reveal object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
                    sizes="50vw"
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-3">
                  {post.category}
                </p>
                <h3
                  className={`font-semibold tracking-tight mb-3 ${post.size === "lg" ? "text-3xl md:text-4xl" : "text-2xl"}`}
                >
                  {post.title}
                </h3>
                <p className="text-neutral-600 mb-4 max-w-md">{post.excerpt}</p>
                <div className="flex items-center justify-between border-t border-[#E5E9EC] pt-4">
                  <span className="text-xs text-neutral-500 uppercase tracking-widest">
                    {post.date}
                  </span>
                  <Link
                    href="#"
                    className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#071018] hover:text-[#007DC5] transition-colors"
                  >
                    Read More{" "}
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. PHOTO GALLERY */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-16">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              In Pictures
            </p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
              Moments, milestones and experiences from Sampan Group.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group bg-neutral-100 ${photo.size}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.category}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500 flex flex-col items-center justify-center z-[1]">
                  <span className="text-white text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View Gallery
                  </span>
                  <FiArrowRight className="text-white text-2xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute bottom-4 left-4 z-[2] text-white opacity-0 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-xs uppercase tracking-widest bg-black/40 px-2 py-1">
                    {photo.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. VIDEO GALLERY */}
      <section className="bg-[#0B1B27] py-24 lg:py-32 text-white">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-16">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              Watch & Discover
            </p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
              Cinematic showcases of our ventures.
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {videos.map((video, i) => (
              <div
                key={i}
                className={`group cursor-pointer ${video.size === "main" ? "col-span-12 lg:col-span-8" : "col-span-12 sm:col-span-6 lg:col-span-4"}`}
              >
                <div
                  className={`relative overflow-hidden bg-black ${video.size === "main" ? "aspect-video" : "aspect-video"}`}
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 will-change-transform"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-[1]">
                    <div className="h-16 w-16 md:h-20 md:w-20 rounded-full border border-white/80 flex items-center justify-center group-hover:bg-[#007DC5] group-hover:border-[#007DC5] transition-all duration-300">
                      <FiPlay className="ml-1 text-white text-xl" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center border-b border-white/10 pb-4">
                  <h3
                    className={`font-semibold tracking-tight ${video.size === "main" ? "text-2xl" : "text-lg"}`}
                  >
                    {video.title}
                  </h3>
                  <span className="text-xs text-white/50 font-mono">
                    {video.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. SOCIAL MEDIA FEED */}
      <section className="bg-white py-24 lg:py-32 border-b border-[#E5E9EC]">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-16">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              Follow the Conversation
            </p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,4rem)] font-semibold tracking-tight">
              Stay connected with Sampan Group.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialPosts.map((post, i) => (
              <div
                key={i}
                className="reveal-up group border border-[#E5E9EC] p-8 flex flex-col"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#007DC5]">
                    {post.platform}
                  </span>
                  <span className="text-xs text-neutral-400">{post.date}</span>
                </div>
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 mb-6">
                  <Image
                    src={post.image}
                    alt="Social Post"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="33vw"
                  />
                </div>
                <p className="text-neutral-700 leading-relaxed mb-6 flex-grow">
                  {post.content}
                </p>
                <Link
                  href="#"
                  className="group/link inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#071018] hover:text-[#007DC5] transition-colors mt-auto"
                >
                  View Post{" "}
                  <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09. EMAIL DIGEST SIGNUP */}
      <section className="newsletter-section relative bg-[#071018] text-white py-32 lg:py-40 overflow-hidden">
        <div className="newsletter-bg-text absolute inset-0 flex flex-col items-center justify-center opacity-[0.03] pointer-events-none will-change-transform">
          <span className="text-[20vw] font-bold leading-none tracking-tighter">
            NEWS
          </span>
          <span className="text-[20vw] font-bold leading-none tracking-tighter">
            UPDATES
          </span>
          <span className="text-[20vw] font-bold leading-none tracking-tighter">
            INSIGHTS
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-[800px] px-6 text-center">
          <h2 className="reveal-up text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.05] tracking-tight mb-6">
            Stay Informed.
          </h2>
          <p className="reveal-up text-lg text-white/60 max-w-md mx-auto mb-10">
            Get the latest Sampan Group news, stories and announcements
            delivered to your inbox.
          </p>

          <form className="reveal-up flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#007DC5] transition-colors"
            />
            <button className="group bg-[#007DC5] px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#071018] transition-colors flex items-center justify-center gap-3">
              Subscribe{" "}
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <p className="reveal-up mt-6 text-xs text-white/40">
            By subscribing, you agree to receive updates from Sampan Group.
          </p>
        </div>
      </section>

      {/* 10. MEDIA CONTACT */}
      <section className="bg-white py-24 lg:py-32 border-b border-[#E5E9EC]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-8">
            <p className="reveal-up text-xs font-semibold uppercase tracking-[0.3em] text-[#007DC5] mb-4">
              Media & Press Enquiries
            </p>
            <h2 className="reveal-up text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tight mb-6">
              Contact our communications team.
            </h2>
            <p className="reveal-up text-lg text-neutral-600 max-w-2xl">
              For media enquiries, interviews, press materials and corporate
              information, please reach out to us.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
            <a
              href="mailto:media@sampangroup.com"
              className="reveal-up flex items-center gap-4 text-lg border-b border-[#E5E9EC] pb-4 hover:text-[#007DC5] transition-colors"
            >
              <FiMail /> media@sampangroup.com
            </a>
            <a
              href="tel:+8801000000000"
              className="reveal-up flex items-center gap-4 text-lg border-b border-[#E5E9EC] pb-4 hover:text-[#007DC5] transition-colors"
            >
              <FiPhone /> +880 1000 00000
            </a>
            <Link
              href="#"
              className="reveal-up group mt-4 inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-[#071018] hover:text-[#007DC5] transition-colors"
            >
              Contact Media Team{" "}
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
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
                  More
                </span>
                <Link
                  href="/newsroom"
                  className="hover:text-[#007DC5] transition-colors"
                >
                  Newsroom
                </Link>
                <Link
                  href="/careers"
                  className="hover:text-[#007DC5] transition-colors"
                >
                  Careers
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
    </main>
  );
}
