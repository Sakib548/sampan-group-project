import type { Metadata } from "next";
import SampanEcoAgroProduceClient from "./components/SampanEcoAgroProduceClient";

export const metadata: Metadata = {
  title: "Sampan Eco & Agro | Organic Farming, Fresh Produce & Cut Flowers",
  description:
    "Sampan Eco & Agro operates organic crop fields, fresh vegetable cultivation, fruit orchards, and commercial greenhouse floriculture in Alphadanga, Faridpur, Bangladesh.",
  keywords: [
    "Sampan Eco and Agro",
    "Organic Agriculture Bangladesh",
    "Fresh Vegetables Alphadanga",
    "Alphadanga Faridpur Farm",
    "Greenhouse Floriculture",
    "Sampan Group Agro Division",
  ],
  openGraph: {
    title: "Sampan Eco & Agro | Organic Cultivation & Fresh Produce",
    description:
      "Organic crop fields, seasonal fruit orchards, and greenhouse floriculture in Alphadanga, Faridpur, Bangladesh.",
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

export default function SampanEcoAgroPage() {
  return <SampanEcoAgroProduceClient />;
}
