import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FaHotel,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
  FaGlassCheers,
  FaBed,
  FaUtensils,
  FaGolfBall,
  FaAward,
  FaTree,
  FaPhoneAlt,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Hospitality, Resort & Highway Travel Division | Sampan Group",
  description:
    "Explore Sampan Group's premier hospitality and highway travel portfolio, featuring Sampan Highway Inn, Sampan White House, Express Highway Inn, luxury party banquets, golf resorts, and eco retreats.",
};

const divisionFacts = [
  { value: "500K+", label: "Annual Highway Guests" },
  { value: "24/7", label: "Year-Round Operation" },
  { value: "100+", label: "Motel & Suite Rooms" },
  { value: "4.8★", label: "Average Guest Rating" },
];

const hospitalityConcerns = [
  {
    id: "sampan-highway-inn",
    name: "Sampan Highway Inn",
    category: "Flagship Highway Hospitality",
    status: "Active & Operational",
    statusType: "active",
    location: "Padma Bridge Expressway (N8 Corridor)",
    description:
      "The flagship highway hospitality destination in Bangladesh, offering full-service family dining, motel rooms, prayer areas, and EV charging along the southern corridor.",
    image: "/images/projects/sampan-highway-inn.png",
    link: "/our-divisions/hospitality-highway-travel/sampan-highway-inn",
    badge: "National Flagship",
    highlights: [
      "1,000+ Seater Multi-Cuisine Restaurant",
      "VIP & Executive Motel Suites",
      "24/7 Dedicated Highway Assistance",
      "Spacious Family Restrooms & Prayer Halls",
    ],
  },
  {
    id: "sampan-white-house",
    name: "Sampan White House",
    category: "Boutique Hotel & Grand Banquet",
    status: "Active & Operational",
    statusType: "active",
    location: "Beside Sampan Highway Inn, N8 Expressway",
    description:
      "A softer, luxurious highway pause offering quiet motel rooms, the iconic White Hall grand banquet ballroom, 24/7 garden dining, and gated parking.",
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    link: "/our-divisions/hospitality-highway-travel/sampan-white-house",
    badge: "Premium Boutique",
    highlights: [
      "Iconic White Hall 300+ Guest Ballroom",
      "Sound-Insulated Luxury Motel Suites",
      "Lush Landscaped Garden Dining",
      "Secure Gated Parking for 150+ Vehicles",
    ],
  },
  {
    id: "sampan-highway-inn-restaurant-party-center",
    name: "Sampan Highway Inn Restaurant & Party Center",
    category: "Highway Dining & Event Banquets",
    status: "Active & Operational",
    statusType: "active",
    location: "Padma Bridge Expressway Corridor",
    description:
      "Premier highway restaurant and large-scale event banquet facility configured for regional weddings, corporate retreats, conferences, and tour group meals.",
    image: "/images/projects/sampan-highway-inn.png",
    link: "/our-divisions/hospitality-highway-travel/sampan-highway-inn-restaurant-party-center",
    badge: "Banquets & Dining",
    highlights: [
      "Grand Reception & Gala Banquet Hall",
      "Specialized Highway Buffet & Set Menus",
      "Advanced AV & Stage Production",
      "Dedicated Event Management Concierge",
    ],
  },
  {
    id: "express-highway-inn",
    name: "Express Highway Inn",
    category: "Modern Transit Hospitality",
    status: "Active & Operational",
    statusType: "active",
    location: "Strategic Southern Transit Hub",
    description:
      "Modern-tier sister property engineered for rapid traveler turnaround, express food counters, clean hygiene washrooms, and overnight transit rooms.",
    image: "/images/concerns/highway-motel.png",
    link: "/our-divisions/hospitality-highway-travel/express-highway-inn",
    badge: "Express Transit",
    highlights: [
      "Express Highway Meal Service",
      "Turnaround Rest & Refresh Rooms",
      "Direct Deceleration Highway Ramp",
      "Safe Truck & Coach Staging Area",
    ],
  },
  {
    id: "express-highway-inn-club-lounge",
    name: "Express Highway Inn Club & Lounge",
    category: "VIP Club & Executive Transit",
    status: "Membership Open",
    statusType: "membership",
    location: "Express Highway Inn Compound",
    description:
      "Exclusive members-only VIP lounge providing quiet workstations, private dining, high-speed fiber internet, and prioritized transit reservations.",
    image: "/images/concerns/highway-motel.png",
    link: "/our-divisions/hospitality-highway-travel/express-highway-inn-club-lounge",
    badge: "VIP Club Lounge",
    highlights: [
      "Private Business Lounge & Boardroom",
      "Priority VIP Room Reservations",
      "Exclusive Barista & Chef Tastings",
      "Complimentary EV Fast Charging Access",
    ],
  },
  {
    id: "sampan-agro-golf-resort",
    name: "Sampan Agro & Golf Resort",
    category: "Integrated Luxury Eco-Resort",
    status: "Ongoing Development",
    statusType: "ongoing",
    location: "Southern Scenic Delta Region",
    description:
      "A sprawling 5-star masterplanned destination featuring championship fairways, organic agro farming, private villas, wellness spa, and family leisure lagoons.",
    image: "/images/concerns/agro-golf-resort.png",
    link: "/our-divisions/hospitality-highway-travel/sampan-agro-golf-resort",
    badge: "Masterplanned Resort",
    highlights: [
      "Championship Fairways & Practice Greens",
      "Waterfront Eco-Villas & Cottages",
      "Farm-to-Table Organic Farm Experience",
      "Ayurvedic Spa & Hydrotherapy Retreat",
    ],
  },
  {
    id: "sampan-agro-golf-club-lounge",
    name: "Sampan Agro & Golf Club & Lounge",
    category: "Championship Club Membership",
    status: "Pre-Launch Shares",
    statusType: "pre-launch",
    location: "Sampan Agro & Golf Resort",
    description:
      "Exclusive SAGCL VIP membership shares granting lifetime golf privileges, clubhouse access, international reciprocal club rights, and dividend yields.",
    image: "/images/concerns/agro-golf-resort.png",
    link: "/our-divisions/hospitality-highway-travel/sampan-agro-golf-club-lounge",
    badge: "Club Membership",
    highlights: [
      "Transferable Founder Membership Shares",
      "Panoramic Golf & Delta Lakeview Lounge",
      "Pro Shop & Private Golf Coaching",
      "Annual Tournament & Gala Invitations",
    ],
  },
  {
    id: "sampan-eco-agro",
    name: "Sampan Eco & Agro Resort",
    category: "Lakeside Eco-Resort & Retreat",
    status: "Active & Operational",
    statusType: "active",
    location: "Padma Bridge Expressway Green Belt",
    description:
      "A peaceful lakeside eco-resort sanctuary featuring luxury wooden cottages, serene boat rides, open-air lakeside dining & BBQ, and refreshing nature staycations.",
    image: "/images/our-divisions/sampan-eco-agro/frontview2.jpg",
    link: "/our-divisions/hospitality-highway-travel/sampan-eco-agro",
    badge: "Eco-Resort & Cottages",
    highlights: [
      "Lakeview Luxury Eco-Cottages",
      "Lakeside Open-Air Dining & BBQ",
      "Tranquil Lake Boating & Sunset Pier",
      "Botanical Trails & Family Lawns",
    ],
  },
];

export default function HospitalityHighwayTravelPage() {
  return (
    <main className="min-h-screen bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#ef636b] selection:text-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-[#183b2b]/14 bg-[#102f23] text-white pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-48 lg:pb-32 px-6 sm:px-10 lg:px-16">
        {/* Background glow effects */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-[#008f68]/20 blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-[#ef636b]/12 blur-[120px]"
        />

        <div className="mx-auto max-w-[1400px]">
          {/* Breadcrumb / Division Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-10">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-[#ef636b]" />
              <Link
                href="/our-divisions"
                className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#00a174] hover:text-white transition-colors"
              >
                Our Divisions
              </Link>
              <span className="text-white/30 text-xs">/</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/80">
                Hospitality, Resort &amp; Highway Travel
              </span>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              <span>8 Specialized Concerns</span>
              <span>•</span>
              <span className="text-[#a8df73]">Padma Corridor &amp; Beyond</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.9fr] items-end gap-12 lg:gap-16">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#ef636b]">
                Highway Hospitality &amp; Destination Resorts
              </p>
              <h1 className="text-[clamp(2.5rem,5.5vw,5rem)] font-medium leading-[0.94] tracking-[-0.055em] text-balance">
                Stay, celebrate, and unwind
                <span className="block text-[#00a174] mt-2">
                  on the highway and beyond.
                </span>
              </h1>
              <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70 font-light">
                Sampan Group redefined southern expressway transit with the nation’s
                most recognized highway hospitality hub. Today, our division spans full-service motel stays,
                grand celebration ballrooms, VIP lounges, golf course resorts, and restorative eco-agro retreats.
              </p>
            </div>

            {/* Division Key Stats Card */}
            <div className="grid grid-cols-2 gap-4 bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-md">
              {divisionFacts.map((fact) => (
                <div key={fact.label} className="border-b border-white/10 pb-4 last:border-b-0">
                  <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#ef8d94]">
                    {fact.value}
                  </div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Directory of Hospitality Concerns */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#183b2b]/14 pb-8 mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#008f68] mb-2">
                <FaHotel className="text-[#ef636b]" />
                <span>Division Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#183b2b]">
                All Hospitality &amp; Travel Concerns
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#183b2b]/65 leading-relaxed">
              Click on any concern to view detailed room categories, dining menus, event booking options, and route directions.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitalityConcerns.map((concern) => (
              <article
                key={concern.id}
                className="group flex flex-col bg-white border border-[#183b2b]/12 transition-all duration-300 hover:-translate-y-1 hover:border-[#008f68]/40 hover:shadow-[0_20px_45px_rgba(14,47,33,0.09)]"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={concern.image}
                    alt={concern.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-[#102f23]/90 text-white border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]">
                      {concern.badge}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold drop-shadow">{concern.category}</span>
                    <span className="flex items-center gap-1.5 text-[11px] opacity-80">
                      <FaMapMarkerAlt className="text-[#ef636b]" />
                      <span>Corridor Hub</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-semibold tracking-tight text-[#183b2b] group-hover:text-[#008f68] transition-colors">
                    {concern.name}
                  </h3>

                  <p className="mt-3 text-sm text-[#183b2b]/68 leading-relaxed line-clamp-3">
                    {concern.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <ul className="mt-6 space-y-2 border-t border-[#183b2b]/10 pt-5">
                    {concern.highlights.slice(0, 3).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-[#183b2b]/80"
                      >
                        <FaCheckCircle className="mt-0.5 shrink-0 text-[#008f68]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link */}
                  <div className="mt-auto pt-6 border-t border-[#183b2b]/10">
                    <Link
                      href={concern.link}
                      className="inline-flex w-full items-center justify-between bg-[#183b2b] hover:bg-[#008f68] text-white px-5 py-3.5 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300"
                    >
                      <span>Explore Concern</span>
                      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Corridor Visual / Expressway Highlights */}
      <section className="bg-[#e8efe9] py-16 sm:py-20 px-6 sm:px-10 lg:px-16 border-y border-[#183b2b]/12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#ef636b]">
                Strategically Located
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-medium tracking-tight text-[#183b2b]">
                Connecting the Capital to Southern Bangladesh
              </h2>
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#183b2b]/70">
                Positioned directly on the Padma Bridge 8-lane expressway corridor, our hospitality properties
                feature dedicated deceleration ramps, large bus/truck staging capacity, EV high-speed chargers,
                and gated 24/7 security. Whether heading to Barishal, Khulna, Gopalganj, or Kuakata, Sampan is the dependable stop.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/our-divisions/hospitality-highway-travel/sampan-highway-inn"
                  className="bg-[#183b2b] hover:bg-[#008f68] text-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] transition-colors"
                >
                  Visit Sampan Highway Inn
                </Link>
                <Link
                  href="/our-divisions/hospitality-highway-travel/sampan-white-house"
                  className="border border-[#183b2b]/30 hover:border-[#183b2b] text-[#183b2b] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] transition-colors"
                >
                  Visit Sampan White House
                </Link>
              </div>
            </div>

            <div className="bg-white border border-[#183b2b]/12 p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-[#183b2b] mb-4">
                Highway Hospitality Features
              </h3>
              <div className="space-y-4 text-sm text-[#183b2b]/75">
                <div className="flex items-start gap-3">
                  <FaBed className="text-[#008f68] text-base mt-1 shrink-0" />
                  <div>
                    <strong className="text-[#183b2b] block">Day-Rest &amp; Overnight Stays</strong>
                    Clean air-conditioned motel suites for tired drivers and travelling families.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaUtensils className="text-[#008f68] text-base mt-1 shrink-0" />
                  <div>
                    <strong className="text-[#183b2b] block">Hygiene-Certified Kitchens</strong>
                    Farm-fresh local delicacies, traditional Bangladeshi meals, and fast transit snacks.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaGlassCheers className="text-[#008f68] text-base mt-1 shrink-0" />
                  <div>
                    <strong className="text-[#183b2b] block">Destination Wedding Banquets</strong>
                    White Hall and Party Center spaces accommodating 300+ guests with generator backup.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#102f23] text-white py-16 sm:py-20 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
              Planning a group event, wedding, or corporate stopover?
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Our highway events team assists with hall reservations, customized catering, and guest accommodations.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 bg-[#ef636b] hover:bg-white text-[#071b13] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300"
          >
            Contact Division Office.
          </Link>
        </div>
      </section>
    </main>
  );
}
