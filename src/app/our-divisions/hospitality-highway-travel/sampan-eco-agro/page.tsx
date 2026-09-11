import type { Metadata } from "next";
import SampanEcoAgroClient from "./components/SampanEcoAgroClient";

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Sampan Eco & Agro Resort | Lakeview Eco-Cottages, Lakeside Dining & Nature Retreat",
  description:
    "A peaceful countryside eco-resort sanctuary featuring luxury lakeview wooden cottages, tranquil boat rides, open-air lakeside dining & BBQ, botanical garden trails, and family weekend staycations on the Dhaka Expressway corridor.",
  keywords: [
    "Sampan Eco and Agro Resort",
    "Eco Resort Bangladesh",
    "Dhaka Mawa Expressway Resort",
    "Lakeview Eco Cottage",
    "Lakeside Dining Resort",
    "Weekend Staycation Dhaka",
    "Nature Retreat Bangladesh",
    "Sampan Group Hospitality",
  ],
  openGraph: {
    title: "Sampan Eco & Agro Resort | Luxury Eco-Cottage Retreat & Lakeside Dining",
    description:
      "A peaceful countryside eco-resort sanctuary with lakefront cottages, serene boat rides, open-air lakeside dining, and refreshing nature stays along the expressway corridor.",
    images: [
      {
        url: "/images/our-divisions/sampan-eco-agro/frontview2.jpg",
=======
  title: "Sampan Eco & Agro Resort | Organic Farming, Eco-Cottages & Highway Dining",
  description:
    "Discover 50+ acres of organic orchards, pick-your-own harvests, lakeview eco luxury cottages, authentic farm-to-table dining, and green event grounds on the Dhaka Expressway corridor.",
  keywords: [
    "Sampan Eco and Agro Resort",
    "Agritourism Bangladesh",
    "Dhaka Mawa Expressway Resort",
    "Organic Farm Bangladesh",
    "Lakeview Eco Cottage",
    "Farm to Table Dining Bangladesh",
    "Sampan Group Hospitality",
  ],
  openGraph: {
    title: "Sampan Eco & Agro Resort | Organic Farming & Eco-Cottage Retreat",
    description:
      "A 50+ acre organic farm sanctuary along the expressway corridor. Organic fruit picking, lakefront eco-cottages, 360° virtual tours, and authentic farm-to-table dining.",
    images: [
      {
        url: "/images/concerns/eco-agro.png",
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
        width: 1200,
        height: 630,
        alt: "Sampan Eco & Agro Resort",
      },
    ],
  },
};

export default function SampanEcoAgroPage() {
  return <SampanEcoAgroClient />;
}
