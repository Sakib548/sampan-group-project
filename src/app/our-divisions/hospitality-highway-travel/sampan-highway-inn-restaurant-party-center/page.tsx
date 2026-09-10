import type { Metadata } from "next";
import SampanHighwayInnPartyCenterClient from "./components/SampanHighwayInnPartyCenterClient";

export const metadata: Metadata = {
  title: "Sampan Highway Inn Restaurant & Party Center | Grand Event Hall & Fine Highway Dining",
  description:
    "Sampan Highway Inn Restaurant & Party Center offers central AC banquet halls for 500+ guests, wedding reception packages, gourmet Bengali & Chinese catering, and live BBQ dining.",
  keywords: [
    "Sampan Highway Inn Restaurant & Party Center",
    "Highway Party Center Bangladesh",
    "Dhaka Khulna Highway Wedding Venue",
    "Bhanga Convention Center",
    "Highway Banquet Hall Bangladesh",
    "Padma Bridge Party Center",
    "Sampan Group Hospitality",
  ],
  openGraph: {
    title: "Sampan Highway Inn Restaurant & Party Center | Grand Event Hall & Fine Highway Dining",
    description:
      "Central air-conditioned banquet halls accommodating up to 500+ guests, gourmet feasts, and authentic culinary dining on the highway corridor.",
    images: [
      {
        url: "/images/our-divisions/sampan-highway-inn-party-center/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sampan Highway Inn Restaurant & Party Center",
      },
    ],
  },
};

export default function SampanHighwayInnRestaurantPartyCenterPage() {
  return <SampanHighwayInnPartyCenterClient />;
}

