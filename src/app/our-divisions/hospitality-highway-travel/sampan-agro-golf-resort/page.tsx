import type { Metadata } from "next";
import SampanAgroGolfResortClient from "../components/SampanAgroGolfResortClient";

export const metadata: Metadata = {
  title: "Sampan Agro & Golf Resort | 100-Acre Eco-Agro, Championship Golf & Luxury Villas",
  description:
    "Sampan Agro & Golf Resort in Podunapur, Moulvibazar blends a 9-hole international golf course, organic agro-farming zones, luxury villas, and 100% Sub-Kabula land ownership in the heart of Bangladesh.",
  keywords: [
    "Sampan Agro and Golf Resort",
    "Moulvibazar Golf Resort",
    "9-hole Golf Bangladesh",
    "Sub-Kabula Land Ownership",
    "Eco Agro Resort Bangladesh",
    "Sampan Group Hospitality",
    "Sylhet Luxury Resort",
  ],
  openGraph: {
    title: "Sampan Agro & Golf Resort | The Luxury of Nature with Leisure",
    description:
      "A 100-acre sanctuary in Moulvibazar combining international golf, organic agriculture, luxury villas, and high-yield ownership benefits.",
    images: [
      {
        url: "/images/our-divisions/sampan-agro-golf-resort/sampan-agro-golf-resort.png",
        width: 1200,
        height: 630,
        alt: "Sampan Agro & Golf Resort",
      },
    ],
  },
};

export default function SampanAgroGolfResortPage() {
  return <SampanAgroGolfResortClient />;
}
