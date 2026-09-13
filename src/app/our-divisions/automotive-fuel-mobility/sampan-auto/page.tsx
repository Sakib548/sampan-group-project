import type { Metadata } from "next";
import SampanAutoClient from "./components/SampanAutoClient";

export const metadata: Metadata = {
  title: "Sampan Auto | Japanese Reconditioned & Used Car Importer & Dealer",
  description:
    "Sampan Auto is an automotive importer and dealer specializing in Japanese reconditioned vehicles, luxury SUVs, and verified used cars with on-demand sourcing and direct delivery.",
  keywords: [
    "Sampan Auto",
    "Car importer Bangladesh",
    "Japanese recondition cars Dhaka",
    "Used car dealer Bangladesh",
    "Toyota Harrier import",
    "Lexus import Bangladesh",
    "Prado import",
    "Sampan Group Automotive",
  ],
  openGraph: {
    title: "Sampan Auto | Vehicle Importer & Dealer",
    description:
      "Tell us what car you want—we source, inspect, import, and deliver Japanese recondition and quality used vehicles directly to your doorstep.",
    images: [
      {
        url: "/images/our-divisions/sampan-auto/Website-Banner-2.jpg",
        width: 1920,
        height: 1080,
        alt: "Sampan Auto Showroom Display",
      },
    ],
  },
};

export default function SampanAutoPage() {
  return <SampanAutoClient />;
}
