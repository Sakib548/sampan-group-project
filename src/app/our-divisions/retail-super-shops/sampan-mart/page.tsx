import type { Metadata } from "next";
import SampanMartClient from "./components/SampanMartClient";

export const metadata: Metadata = {
  title: "Sampan Mart 24/7 | Highway Retail Super Shop & Convenience Store",
  description:
    "Sampan Mart is a 24/7 convenience super shop located at the Sampan Highway Inn Complex on the Dhaka–Khulna Highway (KM 74, Dhaka–Khulna Highway), offering cold drinks, snacks, travel toiletries, and daily provisions.",
  keywords: [
    "Sampan Mart",
    "24/7 Highway Super Shop",
    "Highway Super Shop",
    "Sampan Highway Inn",
    "Dhaka Khulna Highway Super Shop",
    "Highway convenience store",
    "Travel snacks Bangladesh",
    "Sampan Group Retail",
  ],
  openGraph: {
    title: "Sampan Mart 24/7 | Highway Retail Super Shop",
    description:
      "24/7 highway retail convenience super shop at the Sampan Highway Inn Complex on the Dhaka–Khulna Highway (KM 74, Dhaka–Khulna Highway).",
    images: [
      {
        url: "/images/our-divisions/sampan-mart/Sampan-Mart.jpg",
        width: 1200,
        height: 630,
        alt: "Sampan Mart 24/7 Storefront",
      },
    ],
  },
};

export default function SampanMartPage() {
  return <SampanMartClient />;
}
