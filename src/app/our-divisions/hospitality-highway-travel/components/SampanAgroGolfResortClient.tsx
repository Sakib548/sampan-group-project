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
  FaGlobe,
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
  FaCertificate,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const heroImage = "/images/our-divisions/sampan-agro-golf-resort/sampan-agro-golf-resort.png";
const logoImage = "/images/brand/agroandgolf.png";

const ownershipBenefits = [
  {
    id: 1,
    title: "Nine-Hole International Golf",
    category: "Golf & Sports",
    icon: FaGolfBall,
    image: "/images/our-divisions/sampan-agro-golf-resort/GOLF.jpg",
    description: "PGA-standard 9-hole executive course with manicured greens, sand bunkers, and water contours.",
  },
  {
    id: 2,
    title: "Professional Trainer & Golf Facilities",
    category: "Golf & Sports",
    icon: FaGolfBall,
    image: "/images/our-divisions/sampan-agro-golf-resort/scenic-villa-overlooking-golf-course-(2).jpg",
    description: "Certified golf pros, modern driving range bays, practice putting greens, and golf academy training.",
  },
  {
    id: 3,
    title: "Golf Tournaments & Corporate Events",
    category: "Golf & Sports",
    icon: FaCalendarCheck,
    image: "/images/our-divisions/sampan-agro-golf-resort/sampan-agro-golf-resort.png",
    description: "Full facilities to host national golf championships, corporate invitationals, and executive retreats.",
  },
  {
    id: 4,
    title: "Luxury Villas & Cottages",
    category: "Stay & Living",
    icon: FaBed,
    image: "/images/our-divisions/sampan-agro-golf-resort/modern-architecture-golf-course-clubhouses.jpg",
    description: "Private lakefront villas and presidential suites with plunge pools, sundecks, and 24/7 concierge.",
  },
  {
    id: 5,
    title: "Executive Restaurants & Fine Dining",
    category: "Dining & Organic",
    icon: FaUtensils,
    image: "/images/our-divisions/sampan-agro-golf-resort/Restaurant.jpg",
    description: "Multi-cuisine gourmet dining spaces featuring traditional Bengali banquets, continental feasts, and live grills.",
  },
  {
    id: 6,
    title: "International Standard Gym",
    category: "Wellness & Health",
    icon: FaDumbbell,
    image: "/images/our-divisions/sampan-agro-golf-resort/gym.jpg",
    description: "State-of-the-art cardio machines, free weights, personal fitness coaching, and aerobics studio.",
  },
  {
    id: 7,
    title: "Boating & Kayaking",
    category: "Water Leisure",
    icon: FaSwimmer,
    image: "/images/our-divisions/sampan-agro-golf-resort/Boating-and-Kayaking.jpg",
    description: "Expansive natural lake with pedal boats, kayaks, and waterfront boardwalk promenades.",
  },
  {
    id: 8,
    title: "Basketball, Tennis & Badminton Courts",
    category: "Golf & Sports",
    icon: FaGamepad,
    image: "/images/our-divisions/sampan-agro-golf-resort/basketball.jpg",
    description: "Floodlit championship courts for tennis, badminton, and basketball with professional equipment.",
  },
  {
    id: 9,
    title: "Super Shop & Pharmacy",
    category: "Convenience",
    icon: FaStore,
    image: "/images/our-divisions/mini-sampan-super-shop/mart.jpg",
    description: "On-site convenience store for daily groceries, travel essentials, and fully stocked pharmacy.",
  },
  {
    id: 10,
    title: "Library & Reading Lounge",
    category: "Leisure",
    icon: FaBookOpen,
    image: "/images/our-divisions/sampan-agro-golf-resort/reading-lounge.png",
    description: "Quiet literary retreat stocked with books, periodicals, and private coffee corners.",
  },
  {
    id: 11,
    title: "Salon & Luxury Spa",
    category: "Wellness & Health",
    icon: FaSpa,
    image: "/images/our-divisions/sampan-agro-golf-resort/Salon-and-Spa.jpg",
    description: "Holistic wellness therapies, revitalizing body massages, sauna, and premium beauty salon care.",
  },
  {
    id: 12,
    title: "Private Movie Theater",
    category: "Leisure",
    icon: FaFilm,
    image: "/images/our-divisions/sampan-agro-golf-resort/Movie-Theater.jpg",
    description: "Acoustically engineered cinema hall with Dolby surround audio and ultra-comfortable recliner seats.",
  },
  {
    id: 13,
    title: "Temperature-Controlled Swimming Pool",
    category: "Water Leisure",
    icon: FaSwimmer,
    image: "/images/our-divisions/sampan-agro-golf-resort/Swimming-Pool.jpg",
    description: "All-weather heated main swimming pool with separate secure splash pool for children.",
  },
  {
    id: 14,
    title: "Children's Gaming Zone & Playground",
    category: "Leisure",
    icon: FaGamepad,
    image: "/images/our-divisions/sampan-agro-golf-resort/Amusement-Park.jpg",
    description: "Modern arcade games, VR entertainment, open-air swings, and child-safe amusement park rides.",
  },
  {
    id: 15,
    title: "Men's & Women's Prayer Rooms",
    category: "Convenience",
    icon: FaPrayingHands,
    image: "/images/our-divisions/sampan-agro-golf-resort/Mosque.jpg",
    description: "Peaceful, air-conditioned Islamic prayer spaces with clean ablution facilities for guests and families.",
  },
  {
    id: 16,
    title: "Farm-to-Table Organic Dining",
    category: "Dining & Organic",
    icon: FaSeedling,
    image: "/images/our-divisions/sampan-agro-golf-resort/Argo.jpg",
    description: "Direct culinary harvest from resort greenhouse farms: zero chemicals, 100% fresh nutrition.",
  },
  {
    id: 17,
    title: "Cycling, Hiking & Horse Riding",
    category: "Active Outdoors",
    icon: FaHorse,
    image: "/images/our-divisions/sampan-agro-golf-resort/Horse-Riding.jpg",
    description: "Paved cycling circuits, scenic hill walking trails, and equestrian stables for guided horse rides.",
  },
  {
    id: 18,
    title: "Freshwater Fishing Lake",
    category: "Active Outdoors",
    icon: FaFish,
    image: "/images/our-divisions/sampan-agro-golf-resort/Fishing.jpg",
    description: "Bio-secure angling ponds stocked with indigenous river fish for catch-and-cook barbecue outings.",
  },
  {
    id: 19,
    title: "Agro Farm & Organic Plantation",
    category: "Dining & Organic",
    icon: FaTree,
    image: "/images/our-divisions/sampan-agro-golf-resort/man-farmer-with-homemade-vegetables.jpg",
    description: "Extensive fruit orchards (mango, lemon, malta, dragonfruit) and automated greenhouse vegetable zones.",
  },
  {
    id: 20,
    title: "Bonfire, Picnic Spot & BBQ Zone",
    category: "Leisure",
    icon: FaFire,
    image: "/images/our-divisions/sampan-agro-golf-resort/Sampan-Agro-&-Golf-Resort-5.jpg",
    description: "Open-air starlight fire pits, family picnic gazebos, and personal barbecue grill stations.",
  },
];

const galleryMedia = [
  {
    id: "g-1",
    title: "9-Hole Championship Golf Course",
    category: "Golf Greens",
    src: "/images/our-divisions/sampan-agro-golf-resort/GOLF.jpg",
    caption: "PGA-standard fairway with contoured greens, sand bunkers, and electric buggies.",
  },
  {
    id: "g-2",
    title: "Executive Lakeside Restaurant",
    category: "Dining",
    src: "/images/our-divisions/sampan-agro-golf-resort/Restaurant.jpg",
    caption: "Panoramic dining pavilion serving authentic Bengali, barbecue, and continental delicacies.",
  },
  {
    id: "g-3",
    title: "Temperature-Controlled Swimming Pool",
    category: "Wellness & Pool",
    src: "/images/our-divisions/sampan-agro-golf-resort/Swimming-Pool.jpg",
    caption: "Resort pool deck with sun loungers, tropical palm perimeter, and children's splash pool.",
  },
  {
    id: "g-4",
    title: "Presidential Suite & Luxury Villas",
    category: "Luxury Stay",
    src: "/images/our-divisions/sampan-agro-golf-resort/Room-Web-image.jpg",
    caption: "Elegantly furnished master suites with king orthopaedic bedding and panoramic forest views.",
  },
  {
    id: "g-5",
    title: "Serene Lake Boating & Kayaking",
    category: "Water Sports",
    src: "/images/our-divisions/sampan-agro-golf-resort/Boating-and-Kayaking.jpg",
    caption: "Gentle lake waterways for private kayaking, pedal boating, and tranquil sunset reflection.",
  },
  {
    id: "g-6",
    title: "Holistic Salon & Rejuvenating Spa",
    category: "Wellness & Pool",
    src: "/images/our-divisions/sampan-agro-golf-resort/Salon-and-Spa.jpg",
    caption: "Professional therapist massages, steam rooms, and therapeutic wellness treatments.",
  },
  {
    id: "g-7",
    title: "Private Movie Theater",
    category: "Entertainment",
    src: "/images/our-divisions/sampan-agro-golf-resort/Movie-Theater.jpg",
    caption: "Tiered cinema auditorium for private screenings, family film nights, and corporate launches.",
  },
  {
    id: "g-8",
    title: "Equestrian & Horse Riding Pastures",
    category: "Outdoors",
    src: "/images/our-divisions/sampan-agro-golf-resort/Horse-Riding.jpg",
    caption: "Trained thoroughbred and local horses with scenic riding trails through the green countryside.",
  },
  {
    id: "g-9",
    title: "Scenic Countryside Cycling Trails",
    category: "Outdoors",
    src: "/images/our-divisions/sampan-agro-golf-resort/Cycling.jpg",
    caption: "Kilometers of paved trails winding through tea garden valleys and organic fruit orchards.",
  },
  {
    id: "g-10",
    title: "Freshwater Fishing & Angling Lake",
    category: "Outdoors",
    src: "/images/our-divisions/sampan-agro-golf-resort/Fishing.jpg",
    caption: "Tranquil fishing piers stocked with indigenous freshwater species for recreational angling.",
  },
  {
    id: "g-11",
    title: "Men's & Women's Prayer Rooms",
    category: "Facilities",
    src: "/images/our-divisions/sampan-agro-golf-resort/Mosque.jpg",
    caption: "Serene, air-conditioned Islamic prayer hall with pristine carpets and ablution stations.",
  },
  {
    id: "g-12",
    title: "Floodlit Sports & Basketball Courts",
    category: "Golf & Sports",
    src: "/images/our-divisions/sampan-agro-golf-resort/basketball.jpg",
    caption: "Professional court surfaces for tennis, basketball, badminton, and active recreation.",
  },
  // {
  //   id: "g-cred-1",
  //   title: "Official Certificate of Share",
  //   category: "Official Documents",
  //   src: "/images/our-divisions/sampan-agro-golf-resort/certificate-of-share.jpg",
  //   caption: "Statutory share certificate issued by Sampan Developments Ltd. (REHAB Member No. 1257/2012).",
  // },
  // {
  //   id: "g-cred-2",
  //   title: "Permanent Member Loyalty Card",
  //   category: "Official Documents",
  //   src: "/images/our-divisions/sampan-agro-golf-resort/loyalty-card-permanent-member.jpg",
  //   caption: "Official green RFID smart card for permanent & life members offering 24/7 nationwide resort privileges.",
  // },
  // {
  //   id: "g-cred-3",
  //   title: "Official Certificate of Member",
  //   category: "Official Documents",
  //   src: "/images/our-divisions/sampan-agro-golf-resort/certificate-of-member.jpg",
  //   caption: "Member induction certificate endorsed by President Emamul Hasan granting full club rights and tournament access.",
  // },
];

const investorPrivileges = [
  {
    id: "priv-sub-kabula",
    icon: FaShieldAlt,
    title: "100% Land Sub-Kabula Ownership",
    description:
      "Full legal deed transfer and permanent freehold sub-kabula registry title in your name for total asset security.",
    badge: "Freehold Deed",
  },
  {
    id: "priv-hotel-discount",
    icon: FaTags,
    title: "Hotel & Motel (10%–50%) Discount",
    description:
      "Guaranteed lifetime discounts across all Sampan Group hotels, highway motels, and leisure resorts nationwide.",
    badge: "Group Privilege",
  },
  {
    id: "priv-free-package",
    icon: FaGift,
    title: "Sampan Eco & Agro Resort Free Package",
    description:
      "Complimentary 2 Nights, 3 Days holiday stay package including meals and resort activities for property owners.",
    badge: "Complimentary Stay",
  },
  {
    id: "priv-lounge-card",
    icon: FaIdCard,
    title: "Express Highway Club & Lounge Card",
    description:
      "Exclusive access, VIP lounges, and priority services with the official Sampan member loyalty card.",
    badge: "VIP Membership",
  },
  {
    id: "priv-arunima-resort",
    icon: FaGolfBall,
    title: "Arunima Resort Golf Club Affiliation",
    description:
      "Privileged 10%–30% discount on green fees, dining, and cottages at partner Arunima Resort Golf Club.",
    badge: "Affiliation Discount",
  },
  {
    id: "priv-shooters-club",
    icon: FaAward,
    title: "Shooters Shooting Club Affiliation",
    description:
      "Partner privileges for shooting sport enthusiasts with licensed access to affiliated firing ranges.",
    badge: "Club Affiliation",
  },
];

export default function SampanAgroGolfResortClient() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const categories = ["All", "Golf & Sports", "Stay & Living", "Dining & Organic", "Wellness & Health", "Active Outdoors", "Leisure", "Convenience"];

  const filteredBenefits =
    activeTab === "All"
      ? ownershipBenefits
      : ownershipBenefits.filter((item) => item.category === activeTab);

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
            alt="Sampan Agro & Golf Resort Fairways"
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
              <span>100-Acre Masterplanned Eco-Agro &amp; Golf Resort • Moulvibazar</span>
            </div> */}

            {/* Headline */}
            <h1 className="text-[clamp(2.3rem,4.5vw,4.2rem)] font-bold tracking-tight text-white leading-[1.02]">
              Sampan Agro &amp; <br />
              <span className="text-emerald-400 block mt-0.5">
                Golf Resort
              </span>
            </h1>

            {/* Sub-Tagline */}
            <div className="border-l-2 border-emerald-400/90 pl-4 space-y-1.5">
              <p className="text-lg sm:text-xl font-semibold tracking-wide text-emerald-200">
                The Luxury of Nature with Leisure
              </p>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl font-normal">
                A 100-acre sanctuary in Podunapur, Moulvibazar blending organic agro-farming, international championship golf, luxury private villas, and serene natural leisure.
              </p>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 font-mono text-xs">
              <button
                onClick={() => scrollTo("benefits")}
                className="group inline-flex items-center justify-center gap-2.5 rounded-none bg-emerald-600 hover:bg-emerald-500 px-6 py-3 font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-emerald-950/40 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Benefits</span>
                <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("specifications")}
                className="inline-flex items-center justify-center gap-2 rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-6 py-3 font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                <FaShieldAlt className="text-emerald-400" />
                <span>Resort Privileges</span>
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
                <p className="text-xl sm:text-2xl font-bold text-white">100 Acres</p>
                <p className="text-[10px] sm:text-[11px] text-white/60 uppercase font-mono tracking-wider mt-0.5">Masterplanned Estate</p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-3.5">
                <p className="text-xl sm:text-2xl font-bold text-white">9-Hole</p>
                <p className="text-[10px] sm:text-[11px] text-white/60 uppercase font-mono tracking-wider mt-0.5">International Golf</p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-3.5">
                <p className="text-xl sm:text-2xl font-bold text-white">Eco &amp; Agro</p>
                <p className="text-[10px] sm:text-[11px] text-white/60 uppercase font-mono tracking-wider mt-0.5">Organic Orchards</p>
              </div>

              <div className="border-l-2 border-emerald-500 pl-3.5">
                <p className="text-xl sm:text-2xl font-bold text-white">Luxury Villas</p>
                <p className="text-[10px] sm:text-[11px] text-white/60 uppercase font-mono tracking-wider mt-0.5">&amp; Presidential Suites</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= 2. PHILOSOPHY: WHERE NATURE MEETS LUXURY ================= */}
      <section className="py-24 sm:py-32 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left Header & Intro */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-emerald-600" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-emerald-700">
                  Resort Philosophy
                </span>
              </div>

              <h2 className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-bold tracking-tight text-[#111111] leading-[1.02]">
                Where Nature <br />
                <span className="text-emerald-700 font-bold">Meets Luxury.</span>
              </h2>

              <p className="text-base text-neutral-700 leading-relaxed">
                Welcome to <strong>Sampan Agro &amp; Golf Resort</strong> — a unique haven where the charm of nature meets the elegance of modern leisure. Spread across lush green landscapes in Podunapur, Moulvibazar Sadar, our resort is designed to offer you the perfect blend of relaxation, recreation, and refinement.
              </p>

              <p className="text-sm text-neutral-600 leading-relaxed border-l-2 border-emerald-600 pl-4">
                &ldquo;Here, every sunrise begins with nature, and every moment is touched by tranquility. Enjoy the pleasure of golf amidst scenic beauty, unwind in our serene environment, and experience the joy of sustainable living within a luxurious setting.&rdquo;
              </p>

              <p className="text-sm text-neutral-700 leading-relaxed">
                Whether you come to invest, relax, or simply escape the hustle and bustle of city life, Sampan Agro &amp; Golf Resort promises you an experience where comfort naturally finds peace and a home.
              </p>
            </div>

            {/* Right Dual Feature Cards */}
            <div className="lg:col-span-6 space-y-6">
              <div className="border border-emerald-900/15 bg-[#f5f8f3] p-8 shadow-sm relative group hover:border-emerald-600 transition-colors">
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-emerald-600 transition-all duration-500 group-hover:w-full" />
                <div className="flex items-center gap-3 mb-3">
                  <FaGolfBall className="text-emerald-700 text-xl" />
                  <h3 className="text-xl font-bold text-neutral-950">
                    A New Chapter in Luxurious Leisure &amp; Investment
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  In the midst of greenery, in peaceful silence, the comfort of modern life and the potential of agriculture, Sampan Agro and Golf Resort has been developed. Here you can enjoy together — the peace of nature, the thrill of playing golf, the luxury of a modern resort and the assurance of a safe investment.
                </p>
              </div>

              <div className="border border-emerald-900/15 bg-[#f5f8f3] p-8 shadow-sm relative group hover:border-emerald-600 transition-colors">
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-emerald-600 transition-all duration-500 group-hover:w-full" />
                <div className="flex items-center gap-3 mb-3">
                  <FaSeedling className="text-emerald-700 text-xl" />
                  <h3 className="text-xl font-bold text-neutral-950">
                    Organic Agro Farming Zones for Sustainable Living
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  A unique combination of vast green fields, golden sunlight, and technology-based agricultural systems in the lap of nature with a touch of modernity. We believe that agriculture is the foundation of development. Therefore, we have built a platform where agriculture, entertainment, and investment come together.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= 3. GOLF RESORT BENEFITS OF OWNERSHIP ================= */}
      <section id="benefits" className="py-24 sm:py-32 bg-[#fafbf8] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-emerald-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-emerald-700">
                Exclusive Privileges
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Golf Resort <br />
              <span className="text-emerald-700">Benefits of Ownership.</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-4 leading-relaxed">
              Every landowner and member enjoys world-class amenities designed for health, competitive sport, family joy, and relaxation across the 100-acre sanctuary.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pb-6 mb-10 border-b border-neutral-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeTab === cat
                  ? "bg-[#183b2b] text-white shadow-md"
                  : "bg-white text-neutral-600 hover:bg-neutral-100 hover:text-black border border-neutral-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.id}
                  className="group relative flex flex-col justify-between bg-white border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-600 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="absolute top-0 left-0 h-[3px] w-0 bg-emerald-600 transition-all duration-500 group-hover:w-full z-20" />

                  {/* Benefit Image Header */}
                  <div
                    className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden cursor-pointer"
                    onClick={() => setLightboxImage(benefit.image)}
                  >
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Category Tag */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/85 border border-emerald-500/30 px-2.5 py-1 backdrop-blur-md">
                        {benefit.category}
                      </span>
                    </div>

                    {/* Expand Trigger Icon */}
                    <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-none bg-black/60 backdrop-blur-md text-emerald-400 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaExpand className="text-[10px]" />
                    </div>

                    {/* Floating Icon overlapping image bottom */}
                    <div className="absolute -bottom-3.5 right-4 z-10 w-9 h-9 bg-white border border-neutral-200 shadow-md flex items-center justify-center text-emerald-700 text-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Icon />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 pt-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors leading-snug">
                        {benefit.title}
                      </h3>

                      <p className="mt-2 text-xs text-neutral-600 leading-relaxed line-clamp-3">
                        {benefit.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-neutral-100 flex items-center gap-2 text-[11px] font-mono text-emerald-700">
                      <FaCheck className="text-[10px]" />
                      <span className="uppercase font-semibold">Included in Ownership</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ================= 4. REAL RESORT PHOTO GALLERY ================= */}
      <section id="gallery" className="py-24 sm:py-32 bg-[#091a11] text-white border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-emerald-400" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">
                  Visual Tour
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Visual Glimpses of <br />
                <span className="text-emerald-400">Resort &amp; Living.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-neutral-300 leading-relaxed font-light">
              Explore actual imagery of our championship golf fairways, luxury suites, international dining pavilion, temperature-controlled pool, and outdoor adventure amenities.
            </p>
          </div>

          {/* Gallery Masonry-like Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryMedia.map((item, index) => (
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
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-3.5 left-3.5 z-10 bg-black/75 backdrop-blur-md px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-emerald-400">
                  {item.category}
                </div>

                <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-none bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaExpand className="text-xs text-emerald-400" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                    Click to Expand
                  </span>
                  <h3 className="text-base font-bold text-white mt-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= 5. PROJECT SPECIFICATIONS & OWNERSHIP PRIVILEGES ================= */}
      <section id="specifications" className="py-24 sm:py-32 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-emerald-600" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-emerald-700">
                Project Specification
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              An Investment in Dignity, <br />
              <span className="text-emerald-700">Peace &amp; Opportunity.</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-4 leading-relaxed">
              As a member or owner of Sampan Agro &amp; Golf Resort, you are not just the owner of a property — you are the symbol of a dignified lifestyle with concrete statutory ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investorPrivileges.map((item) => (
              <div
                key={item.id}
                className="group relative bg-[#f8faf6] border border-neutral-200 p-8 shadow-sm hover:shadow-xl hover:border-emerald-600 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-emerald-600 transition-all duration-500 group-hover:w-full" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-none bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <item.icon />
                    </div>
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/70 px-2.5 py-1">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200/80 flex items-center justify-between text-xs font-mono font-bold text-emerald-700">
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-xs" />
                    <span>Statutory Guaranteed Benefit</span>
                  </div>
                </div>
              </div>
            ))}
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
              Every investment and membership in Sampan Agro &amp; Golf Resort is backed by formal regulatory compliance under <strong>Sampan Developments Ltd. (REHAB Member No. 1257/2012)</strong>. Inspect the official Share Certificate, Permanent Member Loyalty Card, and Presidential Member Certificate below. Click any document to view in high resolution.
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


      {/* ================= 6. WHY YOU SHOULD INVEST ================= */}
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
                Investment Fundamentals
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Why You Should Invest in <br />
              <span className="text-emerald-400">Sampan Agro &amp; Golf Resort.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-light pt-2">
              Sampan Agro &amp; Golf Resort is more than just a destination — it&apos;s a smart investment in nature, lifestyle, and growth. Strategically located in the serene green landscape of Moulvibazar, the project combines agro-based sustainability with premium leisure and hospitality facilities. As Bangladesh&apos;s tourism and eco-living sectors expand rapidly, investing in Sampan Agro &amp; Golf Resort offers both financial return and long-term value.
            </p>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              From luxurious accommodations and a world-class golf course to fresh agro experiences and family-friendly amenities, every aspect of the resort is designed for profitability and prestige. Invest today and be part of a visionary project shaping the future of sustainable luxury in Bangladesh.
            </p>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Tangible Land Value
                </h3>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  Registered freehold land ownership with clear Sub-Kabula deeds, offering steady capital appreciation in Moulvibazar&apos;s eco-tourism corridor.
                </p>
              </div>

              <div className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Dual-Stream Yield
                </h3>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  Benefit from both commercial organic agro-crop harvests and high-demand resort hospitality room bookings throughout the year.
                </p>
              </div>

              <div className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Legacy &amp; Wellness
                </h3>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  A tranquil retreat for your family&apos;s health, recreation, and prestigious generational asset building away from urban pollution.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= 7. LOCATION & REGIONAL CONNECTIVITY ================= */}
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
              Strategically Situated in <br />
              <span className="text-emerald-700">Moulvibazar, Sylhet.</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-4 leading-relaxed">
              Surrounded by tea garden valleys, fresh hill air, and natural water bodies, with seamless connectivity from Dhaka via express highways.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Site Location Card */}
            <div className="border border-neutral-200 bg-white p-8 sm:p-10 shadow-sm relative group hover:border-emerald-600 transition-colors">
              <div className="absolute top-0 left-0 h-[3px] w-full bg-emerald-600" />

              <div className="flex items-center gap-3 mb-4 text-emerald-700">
                <FaMapMarkerAlt className="text-2xl" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-800">
                  Project Site Location
                </span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-950">
                Podunapur, Moulvibazar Sadar
              </h3>
              <p className="text-sm text-neutral-600 mt-1">
                Moulvibazar District, Sylhet Division — Bangladesh
              </p>

              <div className="mt-6 pt-6 border-t border-neutral-100 space-y-3 font-mono text-xs text-neutral-700">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Landscape:</span>
                  <span className="font-semibold">100 Acres Rolling Green Terrain</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Region:</span>
                  <span className="font-semibold">Greater Tea Capital Corridor</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Environment:</span>
                  <span className="font-semibold">Zero-Pollution Eco Sanctuary</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Access:</span>
                  <span className="font-semibold">Direct Paved Regional Highway</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap gap-4">
                <a
                  href="tel:+8801906-896326"
                  className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-100 transition-colors"
                >
                  <FaPhoneAlt className="text-xs" />
                  <span>+880 1906-896326</span>
                </a>
                <a
                  href="tel:+8801906896326"
                  className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-100 transition-colors"
                >
                  <FaPhoneAlt className="text-xs" />
                  <span>+880 1906-896 326</span>
                </a>
              </div>
            </div>

            {/* Corporate Head Office Card */}
            <div className="border border-neutral-200 bg-white p-8 sm:p-10 shadow-sm relative group hover:border-emerald-600 transition-colors">
              <div className="absolute top-0 left-0 h-[3px] w-full bg-[#183b2b]" />

              <div className="flex items-center gap-3 mb-4 text-[#183b2b]">
                <FaStore className="text-2xl" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#183b2b]">
                  Corporate Head Office
                </span>
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
                  <span className="text-neutral-500">Investor Service:</span>
                  <span className="font-semibold">Saturday – Thursday (9AM – 6PM)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Site Visit:</span>
                  <span className="font-semibold">Guided Inspection by Appointment</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100">
                <button
                  onClick={() => scrollTo("inquiry")}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#183b2b] hover:bg-emerald-800 text-white py-3.5 px-6 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <FaCalendarCheck />
                  <span>Request Guided Site Visit / Allotment</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= 8. INQUIRY & PRE-LAUNCH REGISTRATION ================= */}
      <section id="inquiry" className="py-24 sm:py-32 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto border border-neutral-200 bg-[#f8faf6] p-8 sm:p-14 shadow-lg relative">
            <div className="absolute top-0 left-0 h-[4px] w-full bg-emerald-600" />

            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-emerald-700">
                Ownership Opportunities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950">
                Register for Pre-Launch Allotment
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Connect with our senior property advisors to receive complete project pricing, layout brochures, and schedule your guided site inspection in Moulvibazar.
              </p>
            </div>

            {inquirySubmitted ? (
              <div className="bg-emerald-50 border border-emerald-300 p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto text-xl">
                  <FaCheck />
                </div>
                <h3 className="text-xl font-bold text-emerald-950">
                  Inquiry Received Successfully!
                </h3>
                <p className="text-sm text-emerald-800 max-w-md mx-auto">
                  Thank you for your interest in Sampan Agro &amp; Golf Resort. Our senior investment counselor will contact you within 24 hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setInquirySubmitted(false)}
                    className="inline-flex items-center gap-2 bg-emerald-700 text-white px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mahfuzar Rahman"
                      className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +880 1711-000000"
                      className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. investor@example.com"
                      className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-800 mb-2">
                      Interest Category
                    </label>
                    <select
                      className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
                    >
                      <option>100% Freehold Land Allotment</option>
                      <option>Luxury Eco-Villa Ownership</option>
                      <option>Golf Club Membership &amp; Privileges</option>
                      <option>Commercial Agro Investment</option>
                      <option>Schedule Guided Site Visit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-800 mb-2">
                    Your Message / Specific Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your preferred parcel size, villa preferences, or questions..."
                    className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <p className="text-xs text-neutral-500 font-mono">
                    * Complete confidentiality assured. Sub-Kabula legal guidance provided.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-colors shadow-lg cursor-pointer"
                  >
                    <span>Submit Allotment Inquiry</span>
                    <FiArrowRight />
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>


      {/* ================= FLOATING QUICK NAVIGATION BAR ================= */}
      {/* <aside aria-label="Resort Navigation" className="fixed bottom-6 inset-x-0 z-40 flex justify-center pointer-events-none px-4">
        <div className="pointer-events-auto bg-neutral-950/90 border border-white/20 backdrop-blur-xl px-4 py-2.5 rounded-none shadow-2xl flex items-center gap-2 sm:gap-4 text-xs font-mono font-bold text-white">
          <button
            onClick={() => scrollTo("benefits")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <FaGolfBall className="text-emerald-400" />
            <span className="hidden sm:inline">Benefits</span>
          </button>

          <button
            onClick={() => scrollTo("gallery")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <FaExpand className="text-emerald-400" />
            <span className="hidden sm:inline">Gallery</span>
          </button>

          <button
            onClick={() => scrollTo("specifications")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <FaShieldAlt className="text-emerald-400" />
            <span className="hidden sm:inline">Specs</span>
          </button>

          <button
            onClick={() => scrollTo("credentials")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <FaCertificate className="text-emerald-400" />
            <span className="hidden sm:inline">Credentials</span>
          </button>

          <button
            onClick={() => scrollTo("location")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <FaMapMarkerAlt className="text-emerald-400" />
            <span className="hidden sm:inline">Location</span>
          </button>

          <button
            onClick={() => scrollTo("inquiry")}
            className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 px-4 py-1.5 rounded-none font-mono font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            <FaCalendarCheck />
            <span>Enquire</span>
          </button>

          <a
            href="tel:+8801906896326"
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-none transition-colors"
          >
            <FaPhoneAlt className="text-emerald-400 text-[10px]" />
            <span className="hidden lg:inline">+8801906-896326  </span>
          </a>
        </div>
      </aside> */}


      {/* ================= FULLSCREEN LIGHTBOX MODAL ================= */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <FaTimes className="text-lg" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] aspect-[16/10] rounded-none overflow-hidden shadow-2xl border border-white/20 bg-black flex items-center justify-center"
          >
            <Image
              src={lightboxImage}
              alt="Sampan Agro & Golf Resort Feature"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}

    </main>
  );
}
