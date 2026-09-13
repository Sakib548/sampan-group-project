import type { Metadata } from "next";
import SampanSweetBoxClient from "./components/SampanSweetBoxClient";

export const metadata: Metadata = {
  title: "Sampan Sweet Box | Artisanal Bangladeshi Sweets & Gift Boxes",
  description:
    "Sampan Sweet Box offers artisanal Bangladeshi sweets, traditional mishti, and celebration gift boxes beside Sampan Highway Inn on the Dhaka-Khulna Highway in Gopalganj.",
  keywords: [
    "Sampan Sweet Box",
    "Bangladeshi Mishti",
    "Gopalganj Sweets",
    "Highway Inn Sweets",
    "Rosogolla",
    "Kalojam",
    "Artisanal Sweets Bangladesh",
    "Sampan Group Retail",
  ],
  openGraph: {
    title: "Sampan Sweet Box | Artisanal Bangladeshi Sweets & Gift Boxes",
    description:
      "Crafted daily using 100% pure cow milk chhana, organic deshi ghee, and traditional recipes at the Sampan Highway Complex in Gopalganj.",
    images: [
      {
        url: "/images/our-divisions/sampan-sweet-box/DSC00468.JPG",
        width: 1200,
        height: 630,
        alt: "Sampan Sweet Box Outlet",
      },
    ],
  },
};

export default function SampanSweetBoxPage() {
  return <SampanSweetBoxClient />;
}
