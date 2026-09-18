import type { Metadata } from "next";
import SampanFillingStationClient from "./components/SampanFillingStationClient";

export const metadata: Metadata = {
  title: "Sampan Filling Station | 24/7 Calibrated Octane, Diesel & Mobil Lubricants",
  description:
    "Sampan Filling Station is a 24/7 digital-calibrated highway refueling station located at the Sampan Highway Inn Complex on the Dhaka–Khulna Highway (KM 74, Dhaka–Khulna Highway), supplying Octane 95, Diesel, heavy vehicle bays, and official Mobil lubricants.",
  keywords: [
    "Sampan Filling Station",
    "24/7 Fuel Station Bangladesh",
    "Dhaka Khulna Highway Filling Station",
    "Dhaka Khulna Highway petrol pump",
    "Octane 95 Bangladesh",
    "Diesel fueling highway",
    "Mobil lubricants Bangladesh",
    "Sampan Group Automotive",
  ],
  openGraph: {
    title: "Sampan Filling Station | 24/7 Highway Fueling & Mobil Lubricants",
    description:
      "24/7 digital-calibrated highway refueling station at the Sampan Highway Inn Complex on the Dhaka–Khulna Highway (KM 74, Dhaka–Khulna Highway).",
    images: [
      {
        url: "/images/our-divisions/sampan-filling-station/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Sampan Filling Station Forecourt",
      },
    ],
  },
};

export default function SampanFillingStationPage() {
  return <SampanFillingStationClient />;
}
