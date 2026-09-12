"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGolfBall,
  FaTree,
  FaShieldAlt,
  FaBed,
  FaUtensils,
  FaDumbbell,
  FaSwimmer,
  FaFilm,
  FaGamepad,
  FaPrayingHands,
  FaSeedling,
  FaHorse,
  FaBiking,
  FaFish,
  FaCar,
  FaCheck,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTimes,
  FaExpand,
  FaFire,
  FaStore,
  FaBookOpen,
  FaSpa,
  FaArrowRight,
  FaCalendarCheck,
  FaExternalLinkAlt,
  FaFacebookF,
  FaTags,
  FaGift,
  FaIdCard,
  FaAward,
  FaCoffee,
  FaGlassCheers,
  FaCouch,
  FaUsers,
  FaTv,
  FaCertificate,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const heroImage = "/images/our-divisions/sampan-agro-golf-resort/sampan-agro-golf-resort.png";
const logoImage = "/images/brand/agroandgolf.png";

// Dedicated Lounge Experience Highlights
const loungeHighlights = [
  {
    id: "lounge-exec",
    title: "Executive Members Lounge & Terrace",
    category: "Club & Social",
    icon: FaCouch,
    image: "/images/our-divisions/sampan-agro-golf-resort/Web-2.jpg",
    description:
      "A grand panoramic lounge overlooking the 9th green and water hazard. Features bespoke leather chesterfields, artisan coffee bar, afternoon high tea, and breezy sunset balconies.",
    amenities: ["Panoramic Fairway Views", "Artisan Coffee & Barista Bar", "High-Speed Business Wi-Fi", "Dedicated Butler Service"],
  },
  {
    id: "lounge-billiards",
    title: "Championship Billiards & Card Salon",
    category: "Recreation",
    icon: FaGamepad,
    image: "/images/our-divisions/sampan-agro-golf-resort/Billiards-and-cards.jpg",
    description:
      "A sophisticated gentleman's parlor equipped with regulation slate billiards and snooker tables, bridge tables, and comfortable private alcoves for relaxed evening camaraderie.",
    amenities: ["Full-Size Slate Billiards Tables", "Card & Board Game Lounges", "Beverage & Snack Service", "Lounge Booth Seating"],
  },
  {
    id: "lounge-boardroom",
    title: "VIP Boardroom & Business Lounge",
    category: "Executive",
    icon: FaUsers,
    image: "/images/our-divisions/sampan-agro-golf-resort/Conference-Room.jpg",
    description:
      "Acoustically isolated executive meeting suites with 4K presentation screens, video conferencing gear, and bespoke boardroom tables for corporate retreats and high-stakes meetings.",
    amenities: ["Ultra HD Presentation Displays", "Video Conferencing Tech", "Private Butler Catering", "Soundproof Meeting Privacy"],
  },
  {
    id: "lounge-cinema",
    title: "Private Screening & Cinema Lounge",
    category: "Entertainment",
    icon: FaFilm,
    image: "/images/our-divisions/sampan-agro-golf-resort/Movie-Theater.jpg",
    description:
      "Tiered leather recliner cinema lounge with immersive Dolby Atmos surround sound for private family movie nights, sporting championship viewings, and corporate showcases.",
    amenities: ["Dolby Atmos Sound System", "Plush Leather Recliners", "Private Group Bookings", "Fresh Popcorn & Concessions"],
  },
  {
    id: "lounge-dining",
    title: "Fine Dining & Member Dining Lounge",
    category: "Gastronomy",
    icon: FaUtensils,
    image: "/images/our-divisions/sampan-agro-golf-resort/Restaurant.jpg",
    description:
      "Refined culinary pavilion serving fresh farm-to-table gourmet menus, barbecue specials, and continental cuisine accompanied by scenic lake and fairway vistas.",
    amenities: ["Farm-to-Table Organic Harvest", "Lakeside Terrace Seating", "Private Dining Alcoves", "Curated Chef Menus"],
  },
  {
    id: "lounge-spa",
    title: "Thermal Spa & Relaxation Lounge",
    category: "Wellness",
    icon: FaSpa,
    image: "/images/our-divisions/sampan-agro-golf-resort/Salon-and-Spa.jpg",
    description:
      "A peaceful oasis offering post-golf body recovery, restorative herbal massages, Finnish steam suites, and quiet relaxation lounges with detox botanical teas.",
    amenities: ["Post-Golf Muscle Recovery", "Steam & Sauna Suites", "Herbal Tea Bar", "Certified Wellness Therapists"],
  },
];

// 20 Comprehensive Facilities for Club & Lounge
const clubBenefits = [
  {
    id: 1,
    title: "Executive Members Lounge & Terrace",
    category: "Lounges & Social",
    icon: FaCouch,
    description: "Panoramic fairway-view lounge with artisan barista bar, afternoon tea, and handcrafted seating.",
  },
  {
    id: 2,
    title: "Championship Billiards & Snooker Salon",
    category: "Lounges & Social",
    icon: FaGamepad,
    description: "Competition slate billiard tables, card parlors, and private conversation booths for evening leisure.",
  },
  {
    id: 3,
    title: "VIP Boardroom & Conference Suites",
    category: "Lounges & Social",
    icon: FaUsers,
    description: "State-of-the-art corporate meeting halls with 4K video conferencing and dedicated boardroom butler.",
  },
  {
    id: 4,
    title: "Private Screening & Cinema Lounge",
    category: "Entertainment",
    icon: FaFilm,
    description: "Acoustic cinema auditorium with luxury leather recliners and Dolby Atmos surround sound.",
  },
  {
    id: 5,
    title: "Nine-Hole International Golf Course",
    category: "Golf & Sports",
    icon: FaGolfBall,
    description: "PGA-standard 9-hole executive course with manicured greens, sand bunkers, and electric golf buggies.",
  },
  {
    id: 6,
    title: "Certified Pro Golfers & Coaching Academy",
    category: "Golf & Sports",
    icon: FaGolfBall,
    description: "Professional coaching academy with automated driving range bays and precision practice putting greens.",
  },
  {
    id: 7,
    title: "Golf Tournaments & Member Championships",
    category: "Golf & Sports",
    icon: FaAward,
    description: "Regular corporate cups, weekend medals, and seasonal championship tournaments with executive trophies.",
  },
  {
    id: 8,
    title: "Executive Restaurant & Dining Pavilion",
    category: "Dining & Organic",
    icon: FaUtensils,
    description: "Lakeside dining hall serving farm-fresh organic dishes, continental classics, and specialty barbecue.",
  },
  {
    id: 9,
    title: "Farm-to-Table Organic Harvest Kitchen",
    category: "Dining & Organic",
    icon: FaSeedling,
    description: "Direct culinary harvest from resort greenhouse farms: zero chemicals, 100% fresh nutrition.",
  },
  {
    id: 10,
    title: "Bonfire, Picnic Spot & Sundowner Deck",
    category: "Lounges & Social",
    icon: FaFire,
    description: "Open-air starlight fire pits, family picnic gazebos, and personal barbecue grill stations by the lake.",
  },
  {
    id: 11,
    title: "Temperature-Controlled Swimming Pool",
    category: "Wellness & Pool",
    icon: FaSwimmer,
    description: "Full-sized resort swimming deck with sun loungers, poolside beverage service, and children's splash pool.",
  },
  {
    id: 12,
    title: "Holistic Salon & Rejuvenating Spa",
    category: "Wellness & Pool",
    icon: FaSpa,
    description: "Professional therapist massages, steam rooms, Finnish saunas, and rejuvenating thermal baths.",
  },
  {
    id: 13,
    title: "International Standard Fitness Gym",
    category: "Wellness & Pool",
    icon: FaDumbbell,
    description: "Modern cardio treadmills, cross trainers, Olympic free-weights, and certified personal fitness trainers.",
  },
  {
    id: 14,
    title: "Lakeside Boating & Kayaking",
    category: "Active Outdoors",
    icon: FaFish,
    description: "Gentle lake waterways for private kayaking, pedal boating, and tranquil sunset reflection.",
  },
  {
    id: 15,
    title: "Freshwater Fishing & Angling Lake",
    category: "Active Outdoors",
    icon: FaFish,
    description: "Bio-secure angling ponds stocked with indigenous river fish for catch-and-cook barbecue outings.",
  },
  {
    id: 16,
    title: "Cycling & Equestrian Riding Trails",
    category: "Active Outdoors",
    icon: FaHorse,
    description: "Paved cycling circuits and horseback riding through tea garden valleys and organic fruit orchards.",
  },
  {
    id: 17,
    title: "Floodlit Tennis & Basketball Courts",
    category: "Golf & Sports",
    icon: FaAward,
    description: "Professional court surfaces for tennis, basketball, badminton, and active member recreation.",
  },
  {
    id: 18,
    title: "Presidential Suites & Luxury Cottages",
    category: "Stay & Living",
    icon: FaBed,
    description: "Luxuriously furnished suites with panoramic balcony vistas, king orthopedic beds, and 24/7 room service.",
  },
  {
    id: 19,
    title: "Children's Play Park & Gaming Arcade",
    category: "Entertainment",
    icon: FaGamepad,
    description: "Safe, cushioned outdoor play park with swings, slides, and indoor interactive video game terminals.",
  },
  {
    id: 20,
    title: "Executive Car Parking & Prayer Facilities",
    category: "Convenience",
    icon: FaCar,
    description: "24/7 guarded parking with dedicated driver lounge, plus serene air-conditioned Islamic prayer hall.",
  },
];

// Gallery Media Tailored for Club & Lounge
const clubGallery = [
  {
    id: "cg-1",
    title: "Championship Billiards & Card Lounge",
    category: "Lounge & Club",
    src: "/images/our-divisions/sampan-agro-golf-resort/Billiards-and-cards.jpg",
    caption: "Professional slate billiards and snooker parlor with private booths and beverage service.",
  },
  {
    id: "cg-2",
    title: "Executive Conference & Meeting Lounge",
    category: "Business Lounge",
    src: "/images/our-divisions/sampan-agro-golf-resort/Conference-Room.jpg",
    caption: "Soundproof boardroom equipped with 4K video conferencing and high-speed enterprise Wi-Fi.",
  },
  {
    id: "cg-3",
    title: "Lakeside Member Restaurant & Dining",
    category: "Dining Lounge",
    src: "/images/our-divisions/sampan-agro-golf-resort/Restaurant.jpg",
    caption: "Executive dining pavilion serving farm-to-table organic meals with scenic fairway views.",
  },
  {
    id: "cg-4",
    title: "Modern Clubhouse Architecture & Reception",
    category: "Clubhouse",
    src: "/images/our-divisions/sampan-agro-golf-resort/Web-1.1.jpg",
    caption: "Contemporary clubhouse facade welcoming members and distinguished golf guests.",
  },
  {
    id: "cg-5",
    title: "9-Hole Championship Fairways & Greens",
    category: "Golf Greens",
    src: "/images/our-divisions/sampan-agro-golf-resort/GOLF.jpg",
    caption: "PGA-standard fairway contours surrounded by indigenous greenery and pristine water hazards.",
  },
  {
    id: "cg-6",
    title: "Panoramic Clubhouse Lounge Terraces",
    category: "Lounge & Club",
    src: "/images/our-divisions/sampan-agro-golf-resort/Web-2.jpg",
    caption: "Open-air terraces overlooking the 9th green, ideal for afternoon tea and sunset cocktails.",
  },
  {
    id: "cg-7",
    title: "VIP Screening & Cinema Lounge",
    category: "Entertainment",
    src: "/images/our-divisions/sampan-agro-golf-resort/Movie-Theater.jpg",
    caption: "Auditorium cinema with plush leather recliners and Dolby Atmos surround sound.",
  },
  {
    id: "cg-8",
    title: "Executive Suites & Balcony Living",
    category: "Member Suites",
    src: "/images/our-divisions/sampan-agro-golf-resort/Room-Web-image.jpg",
    caption: "Presidential suites with private balconies overlooking tea hills and golf fairways.",
  },
  {
    id: "cg-9",
    title: "Temperature-Controlled Swimming Pool",
    category: "Pool & Deck",
    src: "/images/our-divisions/sampan-agro-golf-resort/Swimming-Pool.jpg",
    caption: "Resort swimming deck with sun loungers, cabanas, and serene tropical landscaping.",
  },
  {
    id: "cg-10",
    title: "Thermal Spa & Holistic Wellness Salon",
    category: "Wellness",
    src: "/images/our-divisions/sampan-agro-golf-resort/Salon-and-Spa.jpg",
    caption: "Rejuvenating massage suites, steam rooms, and post-golf muscle recovery therapies.",
  },
  {
    id: "cg-11",
    title: "Serene Lake Boating & Kayaking",
    category: "Outdoors",
    src: "/images/our-divisions/sampan-agro-golf-resort/Boating-and-Kayaking.jpg",
    caption: "Freshwater lake recreational boating, family pedal boats, and morning kayaking.",
  },
  {
    id: "cg-12",
    title: "Floodlit Tennis & Basketball Courts",
    category: "Sports",
    src: "/images/our-divisions/sampan-agro-golf-resort/basketball.jpg",
    caption: "All-weather multi-sport courts for tennis, basketball, badminton, and active club play.",
  },
  {
    id: "cg-cred-1",
    title: "Official Certificate of Share",
    category: "Official Documents",
    src: "/images/our-divisions/sampan-agro-golf-resort/certificate-of-share.jpg",
    caption: "Statutory share certificate issued by Sampan Developments Ltd. (REHAB Member No. 1257/2012).",
  },
  {
    id: "cg-cred-2",
    title: "Permanent Member Loyalty Card",
    category: "Official Documents",
    src: "/images/our-divisions/sampan-agro-golf-resort/loyalty-card-permanent-member.jpg",
    caption: "Official green RFID smart card for permanent & life members offering 24/7 nationwide club privileges.",
  },
  {
    id: "cg-cred-3",
    title: "Official Certificate of Member",
    category: "Official Documents",
    src: "/images/our-divisions/sampan-agro-golf-resort/certificate-of-member.jpg",
    caption: "Member induction certificate endorsed by President Emamul Hasan granting full club rights and tournament access.",
  },
];

// Member Privileges (NO 01, 02 numbers!)
const clubPrivileges = [
  {
    id: "cp-lounge-card",
    icon: FaIdCard,
    title: "Express Highway Club & Lounge Member Card",
    description:
      "Exclusive access, VIP lounges, priority check-ins, and bespoke services with the official Sampan member card.",
    badge: "VIP Club Access",
  },
  {
    id: "cp-hotel-discount",
    icon: FaTags,
    title: "Hotel & Motel (10%–50%) Nationwide Discount",
    description:
      "Guaranteed lifetime discounts across all Sampan Group hotels, highway motels, and leisure resorts nationwide.",
    badge: "Group Privilege",
  },
  {
    id: "cp-free-package",
    icon: FaGift,
    title: "Complimentary Sampan Eco & Agro Holiday Package",
    description:
      "Exclusive 2 Nights, 3 Days holiday stay package including meals and resort activities for registered club members.",
    badge: "Complimentary Stay",
  },
  {
    id: "cp-arunima-golf",
    icon: FaGolfBall,
    title: "Arunima Resort Golf Club Reciprocal Access",
    description:
      "Privileged 10%–30% discount on green fees, dining, and cottages at partner Arunima Resort Golf Club.",
    badge: "Reciprocal Golf",
  },
  {
    id: "cp-shooters-club",
    icon: FaAward,
    title: "Shooters Shooting Club Affiliation",
    description:
      "Partner privileges for shooting sport enthusiasts with licensed access to affiliated firing ranges.",
    badge: "Club Affiliation",
  },
  {
    id: "cp-banquet-priority",
    icon: FaShieldAlt,
    title: "Priority Banquet & Corporate Lounge Bookings",
    description:
      "Priority reservations and discounted member rates for conference suites, private banquets, and boardrooms.",
    badge: "Priority Service",
  },
];

export default function SampanAgroGolfClubLoungeClient() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const categories = ["All", "Lounges & Social", "Golf & Sports", "Dining & Organic", "Wellness & Pool", "Active Outdoors", "Entertainment", "Convenience"];

  const filteredBenefits =
    activeTab === "All"
      ? clubBenefits
      : clubBenefits.filter((item) => item.category === activeTab);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#f8faf6] text-[#183b2b] selection:bg-[#2d6a4f] selection:text-white">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#091a11] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Sampan Agro & Golf Club & Lounge"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06140d]/95 via-[#06140d]/80 to-[#06140d]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06140d] via-transparent to-black/40" />
        </div>

        <div className="pointer-events-none absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-[140px] z-0" />
        <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] z-0" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-6">
          <div className="max-w-4xl space-y-4 sm:space-y-5">

            {/* Status Badge */}
            {/* <div className="inline-flex items-center gap-2.5 border border-emerald-500/50 bg-emerald-950/70 backdrop-blur-md px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Exclusive Golf Club, VIP Executive Lounges &amp; Agro Estate • Moulvibazar</span>
            </div> */}

            {/* Headline */}
            <h1 className="text-[clamp(2.3rem,4.5vw,4.2rem)] font-bold tracking-tight text-white leading-[1.02]">
              Sampan Agro &amp; <br />
              <span className="text-emerald-400 block mt-0.5">
                Golf Club &amp; Lounge
              </span>
            </h1>

            {/* Sub-Tagline */}
            <div className="border-l-2 border-emerald-400/90 pl-4 space-y-1.5">
              <p className="text-lg sm:text-xl font-semibold tracking-wide text-emerald-200">
                The Executive Realm of Leisure, Sport &amp; Hospitality
              </p>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl font-normal">
                A prestigious country club sanctuary where championship 9-hole golf converges with private executive lounges, fine dining, billiards parlor, and scenic green valleys.
              </p>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 font-mono text-xs">
              <button
                onClick={() => scrollTo("lounge-experience")}
                className="group inline-flex items-center justify-center gap-2.5 rounded-none bg-emerald-600 hover:bg-emerald-500 px-6 py-3 font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-emerald-950/40 transition-all duration-300 cursor-pointer"
              >
                <span>Lounge Spaces</span>
                <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("privileges")}
                className="inline-flex items-center justify-center gap-2 rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-6 py-3 font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                <FaShieldAlt className="text-emerald-400" />
                <span>Club Privileges</span>
              </button>

              <a
                href="https://www.facebook.com/sampangolfresort/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-none border border-[#1877F2]/60 bg-[#1877F2]/20 hover:bg-[#1877F2] hover:text-white px-6 py-3 font-bold uppercase tracking-[0.18em] text-[#93c5fd] hover:border-[#1877F2] transition-all duration-300 shadow-md cursor-pointer"
              >
                <FaFacebookF className="text-sm" />
                <span>Facebook Page</span>
                <FaExternalLinkAlt className="text-[10px] opacity-70" />
              </a>
            </div>

            {/* Key Metric Badges */}
            <div className="pt-5 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="border-l-2 border-emerald-500 pl-3.5">
                <p className="text-xl sm:text-2xl font-bold text-white">9-Hole</p>
                <p className="text-[10px] sm:text-[11px] text-white/60 uppercase font-mono tracking-wider mt-0.5">Championship Golf</p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-3.5">
                <p className="text-xl sm:text-2xl font-bold text-white">VIP Lounges</p>
                <p className="text-[10px] sm:text-[11px] text-white/60 uppercase font-mono tracking-wider mt-0.5">Executive &amp; Billiards</p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-3.5">
                <p className="text-xl sm:text-2xl font-bold text-white">100 Acres</p>
                <p className="text-[10px] sm:text-[11px] text-white/60 uppercase font-mono tracking-wider mt-0.5">Lakeside Greens</p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-3.5">
                <p className="text-xl sm:text-2xl font-bold text-white">Members Club</p>
                <p className="text-[10px] sm:text-[11px] text-white/60 uppercase font-mono tracking-wider mt-0.5">Exclusive Privileges</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= 2. THE EXECUTIVE LOUNGE REALM ================= */}
      <section id="lounge-experience" className="py-24 sm:py-32 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-emerald-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-emerald-700">
                Signature Club Atmosphere
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
              A Symphony of <br />
              <span className="text-emerald-700">Executive Lounges &amp; Social Spaces.</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-4 leading-relaxed">
              Designed for leaders, golfers, and discerning families. Every lounge within the Sampan Agro &amp; Golf Club provides an ambiance of privacy, luxury furnishing, panoramic golf course horizons, and dedicated hospitality staff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loungeHighlights.map((lounge) => {
              const IconComponent = lounge.icon;
              return (
                <div
                  key={lounge.id}
                  className="group bg-[#fcfdfb] border border-neutral-200 overflow-hidden flex flex-col hover:border-emerald-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 cursor-pointer" onClick={() => setLightboxImage(lounge.image)}>
                    <Image
                      src={lounge.image}
                      alt={lounge.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-emerald-950/85 text-emerald-400 px-3 py-1 border border-emerald-500/30 backdrop-blur-sm">
                        {lounge.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaExpand className="text-xs" />
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-9 w-9 flex items-center justify-center bg-emerald-100 text-emerald-800 rounded-none">
                          <IconComponent className="text-base" />
                        </div>
                        <h3 className="text-lg font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors leading-snug">
                          {lounge.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {lounge.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-neutral-100 space-y-2">
                      <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                        Signature Inclusions:
                      </p>
                      <ul className="grid grid-cols-1 gap-1.5 text-xs text-neutral-600">
                        {lounge.amenities.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ================= 3. CLUB FACILITIES & AMENITIES ================= */}
      <section id="facilities" className="py-24 sm:py-32 bg-[#fafbf8] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-emerald-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-emerald-700">
                Resort &amp; Club Amenities
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Comprehensive Club <br />
              <span className="text-emerald-700">Living &amp; Sport Facilities.</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-4 leading-relaxed">
              Explore 20 distinguished amenities combining competitive golf, wellness rejuvenation, organic agro plantations, and luxury living.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${activeTab === cat
                    ? "bg-[#183b2b] text-white shadow-md"
                    : "bg-white text-neutral-600 hover:bg-neutral-100 hover:text-black border border-neutral-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="group bg-white border border-neutral-200 p-6 flex flex-col justify-between hover:border-emerald-600 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 h-1 w-0 bg-emerald-600 transition-all duration-500 group-hover:w-full" />
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-12 flex items-center justify-center bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                        <Icon className="text-xl" />
                      </div>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2 py-0.5">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-xs text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 uppercase tracking-wider">
                    <span>Verified Club Amenity</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ================= 4. TAILORED PHOTO GALLERY ================= */}
      <section id="gallery" className="py-24 sm:py-32 bg-[#0c1f15] text-white border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-emerald-400" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">
                  Visual Tour
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Club &amp; Lounge <br />
                <span className="text-emerald-400">Photographic Gallery.</span>
              </h2>
            </div>
            <p className="text-neutral-300 text-xs sm:text-sm max-w-md font-light">
              High-resolution captures of the billiards lounge, conference boardroom, dining halls, golf course, and wellness suites. Click any photo to inspect in fullscreen.
            </p>
          </div>

          {/* Masonry-Style Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxImage(item.src)}
                className={`group relative overflow-hidden rounded-none bg-neutral-900 border border-white/10 shadow-lg cursor-pointer ${index === 0 ? "aspect-[4/3] sm:col-span-2 sm:row-span-2 min-h-[340px]" : "aspect-[4/3]"
                  }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-emerald-300 px-3 py-1 border border-white/15">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-300 mt-1 line-clamp-2 font-light">
                      {item.caption}
                    </p>
                  </div>
                  <div className="h-9 w-9 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <FaExpand className="text-xs" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= 5. MEMBER PRIVILEGES (NO 01, 02 NUMBERS!) ================= */}
      <section id="privileges" className="py-24 sm:py-32 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-emerald-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-emerald-700">
                Membership Advantages
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
              Exclusive Privileges &amp; <br />
              <span className="text-emerald-700">Reciprocal Affiliations.</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-4 leading-relaxed">
              As a club cardholder, gain privileged access to national hospitality discounts, reciprocal golf arrangements, and VIP priority services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubPrivileges.map((item) => {
              const PrivIcon = item.icon;
              return (
                <div
                  key={item.id}
                  className="border border-neutral-200 bg-[#f9faf7] p-8 flex flex-col justify-between group hover:border-emerald-700 hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 flex items-center justify-center bg-emerald-100 text-emerald-800">
                        <PrivIcon className="text-lg" />
                      </div>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-emerald-900 bg-emerald-100 px-2.5 py-1">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-200/80 flex items-center gap-2 text-xs font-mono font-bold text-emerald-700">
                    <FaCheck className="text-xs" />
                    <span>Exclusive Member Benefit</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ================= 6. OFFICIAL MEMBER CREDENTIALS & SHARE DOCUMENTS ================= */}
      <section id="credentials" className="py-24 sm:py-32 bg-[#f5f8f3] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-emerald-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-emerald-700">
                Official Validation &amp; Certification
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Official Member Credentials &amp; <br />
              <span className="text-emerald-700">Legal Share Certification.</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
              Every investment and membership in Sampan Agro &amp; Golf Club is backed by formal regulatory compliance under <strong>Sampan Developments Ltd. (REHAB Member No. 1257/2012)</strong>. Inspect the official Share Certificate, Permanent Member Loyalty Card, and Presidential Member Certificate below. Click any document to view in high resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Certificate of Share */}
            <div
              onClick={() => setLightboxImage("/images/our-divisions/sampan-agro-golf-resort/certificate-of-share.jpg")}
              className="group bg-white border border-neutral-200 hover:border-emerald-600 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden border-b border-neutral-100">
                <Image
                  src="/images/our-divisions/sampan-agro-golf-resort/certificate-of-share.jpg"
                  alt="Official Certificate of Share"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-emerald-600 text-white p-3 rounded-full shadow-lg">
                    <FaExpand className="text-sm" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-emerald-950/80 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 backdrop-blur-sm">
                  REHAB Member 1257/2012
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 mb-1">
                  <FaCertificate className="text-sm" />
                  <span>Equity Deed</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors">
                  Certificate of Share
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-normal">
                  Official registered share deed issued by Sampan Developments Limited for successfully completing share allotment with official SAGR seal and verification QR codes.
                </p>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-emerald-700 font-bold">
                  <span>Click to Expand</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </div>
              </div>
            </div>

            {/* 2. Loyalty Card Permanent Member */}
            <div
              onClick={() => setLightboxImage("/images/our-divisions/sampan-agro-golf-resort/loyalty-card-permanent-member.jpg")}
              className="group bg-white border border-neutral-200 hover:border-emerald-600 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden border-b border-neutral-100 flex items-center justify-center">
                <Image
                  src="/images/our-divisions/sampan-agro-golf-resort/loyalty-card-permanent-member.jpg"
                  alt="Permanent Member Loyalty Card"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-emerald-600 text-white p-3 rounded-full shadow-lg">
                    <FaExpand className="text-sm" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-emerald-950/80 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 backdrop-blur-sm">
                  24/7 Smart Member Card
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 mb-1">
                  <FaIdCard className="text-sm" />
                  <span>Permanent Membership</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors">
                  Permanent Member Loyalty Card
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-normal">
                  Personalized RFID smart card granting permanent and life members 24/7 priority access, nationwide hotel/motel discounts, and full dining privileges.
                </p>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-emerald-700 font-bold">
                  <span>Click to Expand</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </div>
              </div>
            </div>

            {/* 3. Certificate of Member */}
            <div
              onClick={() => setLightboxImage("/images/our-divisions/sampan-agro-golf-resort/certificate-of-member.jpg")}
              className="group bg-white border border-neutral-200 hover:border-emerald-600 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden border-b border-neutral-100">
                <Image
                  src="/images/our-divisions/sampan-agro-golf-resort/certificate-of-member.jpg"
                  alt="Official Certificate of Member"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-emerald-600 text-white p-3 rounded-full shadow-lg">
                    <FaExpand className="text-sm" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-emerald-950/80 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 backdrop-blur-sm">
                  Presidential Endorsement
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 mb-1">
                  <FaAward className="text-sm" />
                  <span>Club Induction</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors">
                  Certificate of Member
                </h3>
                <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-normal">
                  Executive induction document endorsed by President Emamul Hasan, conferring full club facilities usage, guided private events, and championship tournament access.
                </p>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-emerald-700 font-bold">
                  <span>Click to Expand</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= 6. WHY JOIN THE CLUB ================= */}
      <section className="py-24 sm:py-32 bg-[#122e20] text-white border-b border-white/10 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.18),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(234,179,8,0.12),transparent_35%)]"
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="max-w-4xl space-y-6">

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-emerald-400" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">
                Club Prestige &amp; Heritage
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Why Join <br />
              <span className="text-emerald-400">Sampan Agro &amp; Golf Club &amp; Lounge.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-light pt-2">
              Sampan Agro &amp; Golf Club &amp; Lounge establishes an inspiring benchmark for business leaders, golf enthusiasts, and active families. Set within the picturesque tea hills of Moulvibazar, our club fuses high-standard sporting greens with warm, dignified lounge hospitality.
            </p>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Whether conducting board deliberations in our VIP meeting suites, enjoying a friendly tournament on the fairways, or bonding over billiards with colleagues, the club offers an unparalleled sanctuary designed for lifetime relationships and wellness.
            </p>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Elite Networking &amp; Camaraderie
                </h3>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  Engage with like-minded executives, corporate innovators, and golf aficionados in an exclusive, private environment.
                </p>
              </div>

              <div className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Championship Golf &amp; Coaching
                </h3>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  Refine your swing with certified PGA professionals on a 9-hole international course contoured with natural tea valley terrain.
                </p>
              </div>

              <div className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Holistic Leisure &amp; Wellness
                </h3>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  A serene escape offering farm-to-table nutrition, luxury spa therapies, lake boating, and fresh country air away from city stress.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= 7. LOCATION & VERIFIED HEAD OFFICE ================= */}
      <section id="location" className="py-24 sm:py-32 bg-[#fafbf8] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-emerald-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-emerald-700">
                Location &amp; Offices
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Strategically Located in <br />
              <span className="text-emerald-700">Moulvibazar, Sylhet.</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-4 leading-relaxed">
              Surrounded by tea garden valleys, fresh hill air, and natural water bodies, with seamless connectivity from Dhaka via express highways.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Site Address Card */}
            <div className="lg:col-span-6 bg-white border border-neutral-200 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider mb-6">
                  <FaMapMarkerAlt />
                  <span>Resort &amp; Golf Club Site</span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-950">
                  Podunapur, Moulvibazar Sadar
                </h3>
                <p className="text-sm text-neutral-600 mt-1">
                  Moulvibazar District, Sylhet Division — Bangladesh.
                </p>

                <div className="mt-6 pt-6 border-t border-neutral-100 space-y-4 text-xs sm:text-sm text-neutral-700">
                  <div className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <p>
                      <strong>Regional Proximity:</strong> Located in close distance to Sreemangal tea estates, Lawachara National Park, and Moulvibazar city center.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <p>
                      <strong>Express Highway Route:</strong> Directly connected via Dhaka-Sylhet Highway corridor with express road links for convenient weekend travel.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <p>
                      <strong>Natural Landscape:</strong> Encompasses scenic rolling hills, natural fresh water lake bodies, and tranquil organic agro cultivation zones.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap gap-4">
                <a
                  href="tel:+8801906896326"
                  className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-100 transition-colors"
                >
                  <FaPhoneAlt className="text-xs" />
                  <span>+880 1906-896 326</span>
                </a>
                <a
                  href="tel:+8801906896327"
                  className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-100 transition-colors"
                >
                  <FaPhoneAlt className="text-xs" />
                  <span>+880 1906-896 327</span>
                </a>
              </div>
            </div>

            {/* Corporate Head Office Card */}
            <div className="lg:col-span-6 bg-white border border-neutral-200 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider mb-6">
                  <FaMapMarkerAlt />
                  <span>Corporate Head Office</span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-950">
                  Sampan 21st Century
                </h3>
                <p className="text-sm text-neutral-600 mt-1">
                  House-284, Block-B, Road-1/A, Bashundhara R/A, Dhaka, Bangladesh.
                </p>

                <div className="mt-6 pt-6 border-t border-neutral-100 space-y-3 font-mono text-xs text-neutral-700">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Official Facebook:</span>
                    <a
                      href="https://www.facebook.com/sampangolfresort/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#1877F2] hover:underline flex items-center gap-1.5"
                    >
                      <FaFacebookF className="text-xs" />
                      <span>facebook.com/sampangolfresort</span>
                      <FaExternalLinkAlt className="text-[9px]" />
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Corporate Email:</span>
                    <a
                      href="mailto:contact@sampangolfresort.com"
                      className="font-bold text-emerald-700 hover:underline"
                    >
                      contact@sampangolfresort.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Member Services:</span>
                    <span className="font-semibold">Saturday – Thursday (9AM – 6PM)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Club Visits:</span>
                    <span className="font-semibold">Private Tours by Prior Appointment</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100">
                <button
                  onClick={() => scrollTo("inquiry")}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#183b2b] hover:bg-emerald-800 text-white py-3.5 px-6 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <FaCalendarCheck />
                  <span>Request Membership Information</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ================= 8. INQUIRY & CONTACT FORM ================= */}
      <section id="inquiry" className="py-24 sm:py-32 bg-[#183b2b] text-white">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Prompt */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-emerald-400" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">
                  Join the Club
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Request Club &amp; <br />
                <span className="text-emerald-400">Lounge Membership.</span>
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                Discover the privilege of belonging to Sampan Agro &amp; Golf Club &amp; Lounge. Complete the form to receive our official member prospectus, tour schedule, and corporate banquet brochure.
              </p>

              <div className="pt-4 space-y-3 font-mono text-xs text-neutral-300">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-emerald-400" />
                  <span>Direct Hotline: +880 1906-896 326</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-emerald-400" />
                  <span>contact@sampangolfresort.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaFacebookF className="text-emerald-400" />
                  <span>facebook.com/sampangolfresort</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-white text-neutral-900 p-8 sm:p-12 shadow-2xl">
              {inquirySubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <FaCheck className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    Thank You for Your Membership Interest
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto">
                    Our Club Membership Secretariat has received your details and will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setInquirySubmitted(false)}
                    className="mt-4 inline-flex items-center gap-2 bg-[#183b2b] text-white px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mahfuzar Rahman"
                        className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-emerald-700"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 1..."
                        className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-emerald-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@domain.com"
                        className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-emerald-700"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Membership Category
                      </label>
                      <select className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-emerald-700 bg-white">
                        <option>Executive Club &amp; Lounge Membership</option>
                        <option>Individual Golf Playing Membership</option>
                        <option>Corporate Group &amp; Boardroom Package</option>
                        <option>Family Leisure &amp; Weekend Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Message / Preferred Tour Schedule
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Specify your inquiry or requested date for a private clubhouse tour..."
                      className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-emerald-700"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#183b2b] hover:bg-emerald-800 text-white py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer shadow-lg"
                  >
                    Submit Membership Inquiry
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>


      {/* ================= 9. LIGHTBOX MODAL ================= */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 text-2xl z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <FaTimes />
          </button>
          <div
            className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Sampan Agro & Golf Club Gallery Preview"
              width={1600}
              height={1000}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
            />
          </div>
        </div>
      )}

    </main>
  );
}
