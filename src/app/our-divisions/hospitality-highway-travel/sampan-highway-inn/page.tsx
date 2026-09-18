import { Metadata } from "next";
import SampanHighwayInnClient from "./components/SampanHighwayInnClient";

export const metadata: Metadata = {
  title: "Sampan Highway Inn | Luxury Highway Transit & Hospitality Hub",
  description:
    "Bangladesh's premier highway stopover on the Dhaka–Khulna Corridor (KM 103, Dhaka–Khulna Highway). Featuring VVIP suites, 24/7 authentic farm-fresh dining, secure parking, and celebration banquet halls.",
  keywords: [
    "Sampan Highway Inn",
    "Dhaka Khulna Highway Hotel",
    "Dhaka Khulna Highway Hotel",
    "Padma Bridge Rest Stop",
    "Bhanga Highway Restaurant",
    "Sampan Group Hospitality",
    "Highway Inn Bangladesh",
    "Highway motel Bangladesh",
  ],
  openGraph: {
    title: "Sampan Highway Inn | Luxury Highway Transit & Hospitality Hub",
    description:
      "Where your journey pauses in luxury. VVIP suites, 24/7 dining, secure parking, and event banquets directly on the Dhaka–Khulna Expressway.",
    images: [
      {
        url: "/images/projects/sampan-highway-inn.png",
        width: 1200,
        height: 630,
        alt: "Sampan Highway Inn",
      },
    ],
  },
};

export default function SampanHighwayInnPage() {
  return <SampanHighwayInnClient />;
}
