import type { Metadata } from "next";
import SampanFloatingPearlClient from "./components/SampanFloatingPearlClient";

export const metadata: Metadata = {
  title: "Sampan Floating Pearl | Luxury Floating Resort & Cruise Vessel",
  description:
    "Explore Sampan Floating Pearl, Bangladesh's upcoming multi-tier luxury floating resort and destination vessel featuring panoramic suites, rooftop sky garden, fine dining, and wellness club.",
  keywords: [
    "Sampan Floating Pearl",
    "Floating resort Bangladesh",
    "Luxury cruise vessel Bangladesh",
    "Floating hotel Bangladesh",
    "Sampan Group Maritime",
    "Floating restaurant Bangladesh",
  ],
  openGraph: {
    title: "Sampan Floating Pearl | Luxury Floating Resort & Destination Vessel",
    description:
      "Multi-deck floating resort featuring riverfront staterooms, rooftop open-air garden lounge, fine dining, and wellness facilities.",
    images: [
      {
        url: "/images/our-divisions/sampan-floating-pearl/WhatsApp Image 2026-08-01 at 17.41.07 (1).jpeg",
      },
    ],
  },
};

export default function SampanFloatingPearlPage() {
  return <SampanFloatingPearlClient />;
}
