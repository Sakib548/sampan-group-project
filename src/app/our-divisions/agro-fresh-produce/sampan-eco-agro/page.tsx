import type { Metadata } from "next";
import AgroHero from "../components/AgroHero";
import FarmToTableStorytelling from "../components/FarmToTableStorytelling";
<<<<<<< HEAD
import AgroProductsCatalog, { AgroProductItem } from "../components/AgroProductsCatalog";
import AgroHowToBuy from "../components/AgroHowToBuy";
import AgroSeasonalAvailability from "../components/AgroSeasonalAvailability";
import AgroLocationAndMap from "../components/AgroLocationAndMap";
import AgroPhotosGallery, { AgroPhotoItem } from "../components/AgroPhotosGallery";
import AgroNearbyModule from "../components/AgroNearbyModule";
import AgroWholesaleOrderForm from "../components/AgroWholesaleOrderForm";

export const metadata: Metadata = {
  title: "Sampan Eco & Agro | Commercial Organic Farming, Seasonal Produce & Bulk Farmgate Supply",
  description:
    "Sampan Eco & Agro operates organic crop fields, high-yield vegetable complexes, fruit orchards, and commercial floriculture located in Alphadanga, Faridpur, Bangladesh.",
  keywords: [
    "Sampan Eco and Agro",
    "Organic Agriculture Bangladesh",
    "Commercial Vegetable Farming",
    "Alphadanga Faridpur Agro",
    "Fresh Produce Farmgate Supply",
    "Agro B2B Supply Bangladesh",
    "Sampan Group Agro Division",
  ],
  openGraph: {
    title: "Sampan Eco & Agro | Organic Cultivation & Bulk Farmgate Produce",
    description:
      "Organic crop fields, seasonal fruit orchards, and wholesale farmgate harvest supply in Alphadanga, Faridpur, Bangladesh.",
    images: [
      {
        url: "/images/our-divisions/eco-agro/veg2.jpg",
        width: 1200,
        height: 630,
        alt: "Sampan Eco & Agro Agricultural Harvest",
      },
    ],
  },
};

const storyParagraphs = [
  "Founded with a commitment to sustainable, wholesome agriculture, Sampan Eco & Agro manages fertile cultivation fields, seasonal fruit orchards, and greenhouse floriculture in Alphadanga, Faridpur. We focus on natural soil enrichment and chemical-free farming to produce clean, healthy crops.",
  "Our direct farmgate approach ensures produce harvested at peak freshness reaches wholesale merchants, regional markets, corporate kitchens, and retail partners with its natural flavor and nutritional goodness preserved.",
=======
import AgroProductsCatalog from "../components/AgroProductsCatalog";
import AgroHowToBuy from "../components/AgroHowToBuy";
import AgroSeasonalAvailability from "../components/AgroSeasonalAvailability";
import AgroLocationAndMap from "../components/AgroLocationAndMap";
import AgroPhotosGallery from "../components/AgroPhotosGallery";
import AgroNearbyModule from "../components/AgroNearbyModule";
import AgroWholesaleOrderForm from "../components/AgroWholesaleOrderForm"; // wait, let's verify exact file name

export const metadata: Metadata = {
  title: "Sampan Eco & Agro | Organic Cultivation & Bulk Farm Produce",
  description: "Sampan Eco & Agro offers organic farm crops, seasonal fruits, bio-secure vegetables, and wholesale farmgate supply across Bangladesh.",
};

const storyParagraphs = [
  "Founded with a vision to revitalize Bangladesh's agriculture, Sampan Eco & Agro operates expansive organic crop estates and greenhouse complexes. We combine traditional soil care with precision drip irrigation and bio-pesticides.",
  "Our farm-to-table promise guarantees that produce harvested at dawn reaches wholesale markets, processing hubs, and supermarket shelves within hours, preserving peak nutritional value and natural taste.",
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
];

const storyPillars = [
  {
<<<<<<< HEAD
    title: "Natural Soil Care",
    description: "Enriching soil fertility naturally through organic compost and responsible crop rotation.",
    icon: "seed" as const,
  },
  {
    title: "Chemical-Free Farming",
    description: "Dedicated to wholesome agricultural methods free from harmful synthetic chemicals.",
    icon: "sun" as const,
  },
  {
    title: "Morning Fresh Harvest",
    description: "Daily hand-picked vegetables and seasonal fruits harvested at peak maturity.",
    icon: "water" as const,
  },
  {
    title: "Direct Farmgate Supply",
    description: "Efficient collection and dispatch direct from our Alphadanga farm to your delivery hub.",
=======
    title: "Zero Chemical Pesticides",
    description: "100% organic neem oil sprays, bio-fertilizers, and natural pest barrier crops.",
    icon: "seed" as const,
  },
  {
    title: "Solar-Powered Irrigation",
    description: "Eco-friendly solar water pumping and automated drip irrigation for water conservation.",
    icon: "sun" as const,
  },
  {
    title: "Pure Soil Reclamation",
    description: "Organic composting and crop rotation to enrich soil minerals naturally.",
    icon: "water" as const,
  },
  {
    title: "Direct Cold Transport",
    description: "Temperature-controlled farmgate logistics for zero post-harvest spoilage.",
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
    icon: "truck" as const,
  },
];

<<<<<<< HEAD
const ecoAgroProducts: AgroProductItem[] = [
  {
    id: "organic-okra",
    name: "Farm-Fresh Field Okra & Greens",
    category: "Fresh Vegetables",
    priceBDT: "Bulk Farmgate / Inquire",
    packSize: "Standard Crate",
    image: "/images/our-divisions/eco-agro/veg2.jpg",
    tag: "Morning Harvest",
    description: "Crisp, tender field okra and seasonal green vegetables hand-picked directly from our fertile cultivation beds in Alphadanga.",
    highlights: ["Organically Cultivated", "Daily Morning Harvest", "Direct Farmgate Crates"],
  },
  {
    id: "field-pumpkin",
    name: "Sweet Natural Field Pumpkins",
    category: "Fresh Vegetables",
    priceBDT: "Direct Farmgate / Inquire",
    packSize: "Basket / Agro Sack",
    image: "/images/our-divisions/eco-agro/pumpkin.jpg",
    tag: "Soil Grown",
    description: "Naturally soil-grown organic pumpkins featuring dense, sweet flesh, excellent storage life, and natural nutritional richness.",
    highlights: ["Rich Natural Sweetness", "Uniform Size Sorting", "Long Natural Shelf Life"],
  },
  {
    id: "fresh-eggplants",
    name: "Farm-Fresh Purple Eggplants (Brinjal)",
    category: "Fresh Vegetables",
    priceBDT: "Bulk Farmgate / Inquire",
    packSize: "Standard Crate",
    image: "/images/our-divisions/eco-agro/486247078_122141364842588506_5865218886699525094_n.jpg",
    tag: "Estate Grown",
    description: "Glossy, tender purple eggplants grown with natural soil nutrition and harvested fresh for commercial supply.",
    highlights: ["Hand-Harvested Daily", "Tender & Glossy Skin", "Direct Harvest Packaging"],
  },
  {
    id: "vine-tomatoes",
    name: "Fresh Green & Vine Tomatoes",
    category: "Fresh Vegetables",
    priceBDT: "Direct Harvest / Inquire",
    packSize: "Field Crate",
    image: "/images/our-divisions/eco-agro/485807461_122141364836588506_5451588892501741969_n.jpg",
    tag: "Farm Fresh",
    description: "Firm, healthy vine tomatoes hand-sorted in crates, ideal for wholesale distribution, regional markets, and culinary use.",
    highlights: ["Sun-Nourished Vines", "Careful Field Sorting", "Ideal for Storage & Transit"],
  },
  {
    id: "estate-mangoes",
    name: "Orchard Fresh Sweet Mangoes",
    category: "Seasonal Fruits",
    priceBDT: "Seasonal / Inquire",
    packSize: "Harvest Basket",
    image: "/images/our-divisions/eco-agro/mango.jpg",
    tag: "Summer Special",
    description: "Naturally tree-ripened sweet mangoes harvested directly from our estate orchard groves during peak seasonal harvest.",
    highlights: ["Tree Ripened Naturally", "Aromatic & Sweet Flesh", "Direct Orchard Baskets"],
  },
  {
    id: "floriculture-gerbera",
    name: "Greenhouse Cut Flowers & Floriculture",
    category: "Floriculture & Flowers",
    priceBDT: "Wholesale / Inquire",
    packSize: "Commercial Bundle",
    image: "/images/our-divisions/eco-agro/flower.jpg",
    tag: "Fresh Cut",
    description: "Vibrant gerbera daisies and seasonal ornamental blooms cultivated with care under protected greenhouse conditions.",
    highlights: ["Greenhouse Cultivation", "Long-Lasting Fresh Stems", "Commercial Florist Bundles"],
=======
const ecoAgroProducts = [
  {
    id: "organic-tomato",
    name: "Red Vine Organic Tomatoes",
    category: "Fresh Vegetables",
    priceBDT: "45 BDT / kg",
    packSize: "20 kg Crate",
    image: "/images/our-divisions/eco-agro/Red_Vine_Organic_Tomatoes.jpg",
    tag: "Fresh Harvest",
    description: "Juicy, firm red vine tomatoes cultivated in greenhouse conditions without synthetic ripening agents.",
    highlights: ["100% Vine Ripened", "Zero Ripening Chemicals", "20kg Standard Agro Crate"],
  },
  {
    id: "mango-haribhanga",
    name: "Rangpur Haribhanga Mangoes",
    category: "Seasonal Fruits",
    priceBDT: "120 BDT / kg",
    packSize: "10 kg Box",
    image: "/images/our-divisions/eco-agro/Rangpur_Haribhanga_Mangoes.jpg",
    tag: "Summer Special",
    description: "Fibreless, sweet, highly aromatic Haribhanga mangoes harvested direct from our Rangpur orchard estate.",
    highlights: ["Fibreless Sweet Pulp", "Naturally Tree Ripened", "Export Grade Quality"],
  },
  {
    id: "potatoes-diamond",
    name: "Organic Diamond Potatoes",
    category: "Fresh Vegetables",
    priceBDT: "28 BDT / kg",
    packSize: "50 kg Jute Bag",
    image: "/images/our-divisions/eco-agro/Diamond_Potatoes.jpg",
    description: "High-density starch diamond potatoes ideal for household cooking and commercial chip manufacturing.",
    highlights: ["Low Moisture Starch", "Cleaned & Sorted", "Long Cold-Storage Life"],
  },
  {
    id: "guava-kazipara",
    name: "Thai Kazi Guava",
    category: "Seasonal Fruits",
    priceBDT: "75 BDT / kg",
    packSize: "15 kg Crate",
    image: "/images/our-divisions/eco-agro/Thai_Kazi_Guava.jpg",
    tag: "Year-Round",
    description: "Crisp, sweet, seed-light Thai Guava rich in Vitamin C, harvested weekly year-round.",
    highlights: ["Crisp Flesh & Light Seed", "High Vitamin C", "Foam Net Wrapped"],
  },
  {
    id: "mustard-seed",
    name: "Organic Yellow Mustard Seed",
    category: "Grains & Oilseeds",
    priceBDT: "110 BDT / kg",
    packSize: "25 kg Sack",
    image: "/images/our-divisions/eco-agro/Yellow_Mustard_Seed.jpg",
    description: "High oil-content organic yellow mustard seeds for cold-pressed mustard oil production.",
    highlights: ["42% Oil Content", "Sun Dried & De-dusted"],
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
  },
];

const buyingChannels = [
  {
    id: "1",
    title: "Farmgate Bulk Pickup",
<<<<<<< HEAD
    subtitle: "Direct From Alphadanga Estate",
    description: "Wholesale merchants and buyers can inspect and load freshly harvested crates direct from our Alphadanga packing yard.",
    features: ["Direct Farmgate Pricing", "Live Weight Verification", "Instant Quality Inspection"],
    icon: "farmgate" as const,
    recommendedFor: "Wholesale Merchants & Regional Traders",
  },
  {
    id: "2",
    title: "Commercial B2B Supply",
    subtitle: "Scheduled Transport Dispatch",
    description: "Regularly scheduled dispatches organized for supermarket hubs, hotel kitchens, and corporate institutional buyers.",
    features: ["Carefully Handled Logistics", "Minimal Transit Delay", "Consistent Fresh Shipments"],
    icon: "truck" as const,
    recommendedFor: "Supermarket Chains & Culinary Groups",
  },
  {
    id: "3",
    title: "Seasonal Harvest Contracts",
    subtitle: "Pre-Booked Crop Volumes",
    description: "Arranged seasonal acreage agreements for commercial partners requiring predictable supply volumes.",
    features: ["Guaranteed Seasonal Supply", "Priority Harvest Allocation", "Custom Packing Standards"],
    icon: "b2b" as const,
    recommendedFor: "Commercial Processors & Distributors",
=======
    subtitle: "Direct From Estate",
    description: "Wholesale merchants and truck operators can load freshly harvested crates direct from our farmgate packing centers.",
    features: ["Lowest Wholesale Rate", "Live Weighbridge Scale", "Instant Quality Inspection"],
    icon: "farmgate" as const,
    recommendedFor: "Aratdars & Regional Wholesalers",
  },
  {
    id: "2",
    title: "Reefer Truck B2B Supply",
    subtitle: "Doorstep Warehouse Dispatch",
    description: "Insulated temperature-controlled truckloads dispatched directly to city distribution centers and supermarket hubs.",
    features: ["Temperature Monitored", "Zero Transport Loss", "Scheduled Daily Delivery"],
    icon: "truck" as const,
    recommendedFor: "Supermarket Chains & Processing Factories",
  },
  {
    id: "3",
    title: "Contract Farming Supply",
    subtitle: "Guaranteed Annual Volume",
    description: "Pre-arranged annual or seasonal crop acreage contracts tailored for exporters and food processing corporations.",
    features: ["Fixed Price Contract", "Custom Seed Selection", "Phytosanitary Certification"],
    icon: "b2b" as const,
    recommendedFor: "Food Exporters & Processing Plants",
  },
  {
    id: "4",
    title: "Sampan Mart Outlet Supply",
    subtitle: "Direct Retail Outlets",
    description: "Walk-in retail purchases available at all Sampan Mart and Mini Sampan neighborhood super shops.",
    features: ["Consumer Small Packs", "Barcode Scanned", "Sanitized Consumer Bags"],
    icon: "store" as const,
    recommendedFor: "Household Consumers & Small Kitchens",
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
  },
];

const seasonalCalendar = [
  {
    seasonName: "Summer (Baishakh - Jaistha)" as const,
    seasonCode: "summer" as const,
<<<<<<< HEAD
    description: "Peak harvest for sweet orchard mangoes, field okra, and seasonal summer crops.",
    icon: "sun" as const,
    items: [
      { name: "Orchard Mangoes", category: "Fruits", peakMonths: "May - July", status: "Peak Harvest" as const, notes: "Direct estate harvest" },
      { name: "Fresh Field Okra", category: "Vegetables", peakMonths: "April - July", status: "Peak Harvest" as const, notes: "Morning harvest daily" },
      { name: "Seasonal Gourds", category: "Vegetables", peakMonths: "May - August", status: "Available" as const, notes: "Naturally cultivated" },
=======
    description: "Peak harvest for tropical sweet fruits, gourds, cucumbers, and summer spices.",
    icon: "sun" as const,
    items: [
      { name: "Haribhanga Mangoes", category: "Fruits", peakMonths: "May - July", status: "Peak Harvest" as const, notes: "Direct Rangpur orchard harvest" },
      { name: "Organic Cucumber", category: "Vegetables", peakMonths: "April - June", status: "Peak Harvest" as const, notes: "Greenhouse drip irrigated" },
      { name: "Watermelon", category: "Fruits", peakMonths: "March - May", status: "Available" as const, notes: "High sugar brix level" },
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
    ],
  },
  {
    seasonName: "Monsoon (Ashar - Shravan)" as const,
    seasonCode: "monsoon" as const,
<<<<<<< HEAD
    description: "Growth and harvest period for sweet field pumpkins, purple eggplants, and lush greens.",
    icon: "rain" as const,
    items: [
      { name: "Sweet Field Pumpkins", category: "Vegetables", peakMonths: "June - September", status: "Peak Harvest" as const, notes: "Dense soil-grown yield" },
      { name: "Purple Eggplants", category: "Vegetables", peakMonths: "June - October", status: "Peak Harvest" as const, notes: "Tender glossy harvest" },
      { name: "Field Greens", category: "Leafy Greens", peakMonths: "July - Sept", status: "Available" as const, notes: "Chemical-free beds" },
=======
    description: "Heavy rain season yield for leafy greens, papayas, and root crops.",
    icon: "rain" as const,
    items: [
      { name: "Green Papaya", category: "Vegetables", peakMonths: "July - Sept", status: "Peak Harvest" as const, notes: "High papain enzyme content" },
      { name: "Jute Leaves (Pat Shak)", category: "Leafy Greens", peakMonths: "June - Aug", status: "Peak Harvest" as const, notes: "Organic soil grown" },
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
    ],
  },
  {
    seasonName: "Winter (Kartik - Falgun)" as const,
    seasonCode: "winter" as const,
<<<<<<< HEAD
    description: "Prime harvest season for farm tomatoes, winter vegetables, and greenhouse floral blooms.",
    icon: "winter" as const,
    items: [
      { name: "Vine-Fresh Tomatoes", category: "Vegetables", peakMonths: "Dec - March", status: "Peak Harvest" as const, notes: "Firm hand-picked crates" },
      { name: "Greenhouse Gerbera", category: "Flowers", peakMonths: "Nov - Feb", status: "Peak Harvest" as const, notes: "Protected commercial blooms" },
      { name: "Winter Vegetables", category: "Vegetables", peakMonths: "Dec - Feb", status: "Peak Harvest" as const, notes: "Crisp seasonal harvest" },
=======
    description: "Bumper harvest for cauliflower, cabbage, carrots, tomatoes, and winter potatoes.",
    icon: "winter" as const,
    items: [
      { name: "Snowball Cauliflower", category: "Vegetables", peakMonths: "Nov - Feb", status: "Peak Harvest" as const, notes: "Pest-free net enclosure" },
      { name: "Red Vine Tomatoes", category: "Vegetables", peakMonths: "Dec - March", status: "Peak Harvest" as const, notes: "Vine ripened sweet tomatoes" },
      { name: "Diamond Potatoes", category: "Root Crops", peakMonths: "Jan - April", status: "Peak Harvest" as const, notes: "Cold-storage ready" },
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
    ],
  },
];

const ecoAgroFacilities = [
  {
<<<<<<< HEAD
    name: "Sampan Eco & Agro Farm Estate",
    type: "Organic Cultivation & Farmgate Harvest Hub",
    address: "Joydebpur, Boroga, Borice, Alphadanga-7870, Faridpur, Bangladesh",
    phone: "+880 1929-918408",
    keyAssets: [
      "Organic Field Cultivation",
      "Seasonal Fruit Orchards",
      "Commercial Floriculture Greenhouse",
      "Direct Farmgate Dispatch",
    ],
  },
];

const photos: AgroPhotoItem[] = [
  {
    id: "photo-1",
    title: "Fresh Field Okra & Garden Harvest",
    category: "Fresh Vegetables",
    image: "/images/our-divisions/eco-agro/veg2.jpg",
    caption: "Crates of crisp green okra and garden produce harvested fresh in Alphadanga.",
  },
  {
    id: "photo-2",
    title: "Sweet Field Pumpkin Harvest",
    category: "Field Produce",
    image: "/images/our-divisions/eco-agro/pumpkin.jpg",
    caption: "Naturally soil-grown organic pumpkins arranged in harvest baskets.",
  },
  {
    id: "photo-3",
    title: "Estate Purple Eggplant Harvest",
    category: "Fresh Vegetables",
    image: "/images/our-divisions/eco-agro/486247078_122141364842588506_5865218886699525094_n.jpg",
    caption: "Glossy purple eggplants sorted in crates ready for farmgate wholesale dispatch.",
  },
  {
    id: "photo-4",
    title: "Fresh Green & Vine Tomatoes",
    category: "Fresh Vegetables",
    image: "/images/our-divisions/eco-agro/485807461_122141364836588506_5451588892501741969_n.jpg",
    caption: "Hand-picked tomatoes sorted in field crates from our Alphadanga farm beds.",
  },
  {
    id: "photo-5",
    title: "Greenhouse Gerbera Floriculture",
    category: "Floriculture",
    image: "/images/our-divisions/eco-agro/flower.jpg",
    caption: "Commercial gerbera daisy greenhouse rows grown under attentive estate care.",
  },
  {
    id: "photo-6",
    title: "Orchard Mango Harvest Baskets",
    category: "Fruit Orchards",
    image: "/images/our-divisions/eco-agro/mango.jpg",
    caption: "Freshly picked sweet mangoes gathered directly beneath the estate trees.",
  },
  {
    id: "photo-7",
    title: "Fresh Tuberose Blooms & Harvest",
    category: "Floriculture & Greens",
    image: "/images/our-divisions/eco-agro/veg.jpg",
    caption: "Fragrant tuberose floral bundles and garden vegetables prepared for market.",
  },
  {
    id: "photo-8",
    title: "Harvested Farm Mango Baskets",
    category: "Seasonal Fruits",
    image: "/images/our-divisions/eco-agro/fruits.jpg",
    caption: "Wholesale crates of green orchard mangoes ready for seasonal distribution.",
  },
=======
    name: "Sampan Eco & Agro Central Farm Estate",
    type: "Organic Crop Farm & Packing Center",
    address: "Sreemangal Agro Zone, Moulvibazar, Sylhet Division",
    phone: "+880 1700-888999",
    operatingHours: "06:00 AM - 06:00 PM Daily",
    gpsCoordinates: "24.3000° N, 91.7000° E",
    keyAssets: ["150 Acres Organic Fields", "Solar Drip Irrigation", "Cold Storage Warehouse", "Agro Weighbridge"],
  },
];

const photos = [
  { id: "photo-1", title: "Organic Crop Fields", category: "Cultivation", image: "/images/our-divisions/sampan-eco-agro/Organic_Crop_Fields.jpg", caption: "Expansive solar-drip irrigated organic crop fields in Sreemangal." },
  { id: "photo-2", title: "Harvesting & Sorting", category: "Farmgate Operations", image: "/images/our-divisions/sampan-eco-agro/Harvesting_Sorting.png", caption: "Hygienic sorting and washing of vine tomatoes before crate packaging." },
  { id: "photo-3", title: "Cold Storage Warehouse", category: "Logistics", image: "/images/our-divisions/sampan-eco-agro/Cold_Storage_Warehouse.jpg", caption: "Temperature-controlled holding room maintaining produce freshness." },
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
];

const nearbyConcerns = [
  {
<<<<<<< HEAD
    name: "Sampan Eco & Agro Resort",
    category: "Hospitality & Leisure",
    distance: "Adjoining Countryside Resort",
    tagline: "Serene lakeview wooden cottages, boating, and open-air dining in Alphadanga.",
    href: "/our-divisions/hospitality-highway-travel/sampan-eco-agro",
    logo: "/images/brand/sampanechoagro.png",
    icon: "resort" as const,
  },
  {
    name: "Sampan Agro & Golf Resort",
    category: "Hospitality & Leisure",
    distance: "Sister Hospitality Venture",
=======
    name: "Sampan Agro & Golf Resort",
    category: "Hospitality & Leisure",
    distance: "Adjacent (500 meters)",
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
    tagline: "Integrated agro-resort, golf academy, and family leisure destination.",
    href: "/our-divisions/hospitality-highway-travel/sampan-agro-golf-resort",
    logo: "/images/brand/agroandgolf.png",
    icon: "resort" as const,
  },
<<<<<<< HEAD
=======
  {
    name: "Sampan Fish & Meat",
    category: "Agro & Fresh Produce",
    distance: "2 km",
    tagline: "Bio-secure aquaculture & fresh meat processing hub.",
    href: "/our-divisions/agro-fresh-produce/sampan-fish-and-meat",
    logo: "/images/brand/fishandmeat.png",
    icon: "superstore" as const,
  },
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
];

export default function SampanEcoAgroPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-neutral-950">

      {/* 1. Hero Banner */}
      <AgroHero
        title="Sampan Eco & Agro"
<<<<<<< HEAD
        subtitle="Organic Crop Cultivation, Seasonal Fruits & Direct Farmgate Supply"
        concernName="Sampan Eco & Agro"
        logo="/images/brand/sampanechoagro.png"
        statusBadge="Commercial Organic Farming & Farmgate Supply"
        statusType="operating"
        description="Operating organic crop fields, vegetable cultivation beds, seasonal fruit orchards, and floriculture grounds in Alphadanga, Faridpur. Delivering wholesome, chemical-free agricultural produce directly to wholesale merchants, commercial buyers, and partners across Bangladesh."
        bannerImage="/images/our-divisions/eco-agro/flower.jpg"
        facts={[
          { value: "Organic", label: "Chemical-Free Soil" },
          { value: "Farmgate", label: "Direct Harvest Dispatch" },
          { value: "Fresh Daily", label: "Vegetables & Fruits" },
          { value: "Alphadanga", label: "Faridpur, Bangladesh" },
=======
        subtitle="Organic Crop Estates, Seasonal Fruits & Bulk Farmgate Supply"
        concernName="Sampan Eco & Agro"
        logo="/images/brand/sampanechoagro.png"
        statusBadge="Organic Cultivation & Bulk B2B Supply"
        statusType="operating"
        description="Operating over 150 acres of certified organic crop fields, fruit orchards, and solar-drip greenhouse complexes. Supplying fresh, chemical-free vegetables and seasonal fruits to supermarket chains, hotel groups, and wholesale market distributors."
        bannerImage="/images/our-divisions/sampan-eco-agro/eco-agro.png"
        facts={[
          { value: "150+", label: "Acres Organic Estates" },
          { value: "100%", label: "Chemical-Free Produce" },
          { value: "500+ Tons", label: "Annual Crop Yield" },
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
        ]}
        accentColor="#15803d"
        badgeColor="#16a34a"
      />

      {/* 2. Farm-to-Table Storytelling */}
      <FarmToTableStorytelling
<<<<<<< HEAD
        title="Wholesome Cultivation & Farmgate Philosophy"
        subtitle="Cultivating Bangladesh's soil with care, organic compost, and wholesome agricultural stewardship in Alphadanga, Faridpur."
        concernName="Sampan Eco & Agro"
        storyParagraphs={storyParagraphs}
        pillars={storyPillars}
        farmImage="/images/our-divisions/eco-agro/veg2.jpg"
=======
        title="Farm-to-Table Storytelling & Our Philosophy"
        subtitle="Nurturing Bangladesh's soil with organic cultivation, solar irrigation, and zero harmful synthetic pesticides."
        concernName="Sampan Eco & Agro"
        storyParagraphs={storyParagraphs}
        pillars={storyPillars}
        farmImage="/images/our-divisions/sampan-eco-agro/hero_banner.png"
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
        bgTheme="divisions-green"
        accentColor="#15803d"
      />

      {/* 3. What's Sold */}
      <AgroProductsCatalog
        title="What's Sold - Fresh Harvest & Produce Catalog"
<<<<<<< HEAD
        subtitle="Explore our organic farm vegetables, seasonal fruits, and floriculture available for farmgate collection and bulk supply."
=======
        subtitle="Explore our organic farm vegetables, seasonal orchard fruits, grains, and oilseeds available for bulk purchase."
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
        products={ecoAgroProducts}
        bgTheme="about-ivory"
        accentColor="#15803d"
        badgeColor="#16a34a"
      />

      {/* 4. How to Buy */}
      <AgroHowToBuy
        title="How to Buy - Procurement Channels"
<<<<<<< HEAD
        subtitle="Choose your preferred channel - direct farmgate collection, scheduled wholesale transport, or seasonal harvest contracts."
=======
        subtitle="Choose your preferred channel - direct farmgate pickup, reefer truck B2B delivery, or contract farming agreements."
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
        concernName="Sampan Eco & Agro"
        channels={buyingChannels}
        bgTheme="divisions-green"
        accentColor="#15803d"
      />

      {/* 5. Seasonal Availability */}
      <AgroSeasonalAvailability
<<<<<<< HEAD
        title="Seasonal Harvest Availability Schedule"
        subtitle="Check seasonal crop cycles across Summer, Monsoon, and Winter growing seasons."
=======
        title="Seasonal Harvest Availability Matrix"
        subtitle="Check harvest schedules across Summer, Monsoon, and Winter agricultural cycles."
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
        concernName="Sampan Eco & Agro"
        seasons={seasonalCalendar}
        bgTheme="about-ivory"
        accentColor="#15803d"
      />

<<<<<<< HEAD
      {/* 6. Location & Facilities (Verified Address & Directions - No unverified map embed) */}
      <AgroLocationAndMap
        title="Farm Estate Location & Contact"
        subtitle="Located in Alphadanga, Faridpur with direct road connectivity via the Padma Bridge corridor."
        concernName="Sampan Eco & Agro"
        facilities={ecoAgroFacilities}
        facebookUrl="https://www.facebook.com/sampanecoandagro"
        directions={[
          "From Dhaka, follow the expressway across Padma Bridge to Bhanga Interchange.",
          "Continue along the Faridpur regional route toward Alphadanga.",
          "Located at Joydebpur, Boroga, Borice, Alphadanga-7870, Faridpur, Bangladesh.",
        ]}
=======
      {/* 6. Location + Map */}
      <AgroLocationAndMap
        title="Farm Estate Locations & Facilities"
        subtitle="Visit our primary organic crop estate and central packing hub in Moulvibazar."
        concernName="Sampan Eco & Agro"
        facilities={ecoAgroFacilities}
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.482025178652!2d91.7000!3d24.3000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDE4JzAwLjAiTiA5McKwNDInMDAuMCJF!5e0!3m2!1sen!2sbd!4v1625000000000!5m2!1sen!2sbd"
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
        bgTheme="divisions-green"
        accentColor="#15803d"
      />

      {/* 7. Photo Gallery */}
      <AgroPhotosGallery
<<<<<<< HEAD
        title="Farm Operations & Harvest Gallery"
        subtitle="Authentic photos from our Alphadanga crop fields, vegetable beds, fruit orchards, and floriculture greenhouse."
=======
        title="Farm Field Operations & Harvest Gallery"
        subtitle="Take a look inside our organic farm fields, solar drip setups, and sorting hubs."
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
        photos={photos}
        bgTheme="about-ivory"
        accentColor="#15803d"
      />

<<<<<<< HEAD
      {/* 8. Nearby Sister Ventures */}
      <AgroNearbyModule
        title="Adjoining Ventures & Sister Concerns"
        subtitle="Explore our adjoining countryside eco-resort retreat and sister divisions."
        currentStoreName="Sampan Eco & Agro"
        locationHubName="Sampan Agro Hub, Alphadanga, Faridpur"
=======
      {/* 8. Nearby at this location */}
      <AgroNearbyModule
        title="Nearby Facilities at Sampan Agro Complex"
        subtitle="Discover our sister agro-resort, golf academy, and fisheries processing centers."
        currentStoreName="Sampan Eco & Agro"
        locationHubName="Sampan Agro Complex, Moulvibazar"
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
        nearbyConcerns={nearbyConcerns}
        bgTheme="divisions-green"
        accentColor="#15803d"
      />

      {/* 9. Wholesale / B2B Ordering Form & Contact CTA */}
      <AgroWholesaleOrderForm
<<<<<<< HEAD
        title="Wholesale & Bulk Order Inquiry"
        subtitle="Direct farmgate inquiry desk for wholesale merchants, supermarkets, hotel kitchens, and commercial partners."
=======
        title="Wholesale & B2B Bulk Order Inquiry"
        subtitle="Direct farmgate contract supply for supermarket chains, hotel groups, and wholesale market distributors."
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
        concernName="Sampan Eco & Agro"
        bgTheme="white"
        accentColor="#15803d"
      />

    </main>
  );
}
