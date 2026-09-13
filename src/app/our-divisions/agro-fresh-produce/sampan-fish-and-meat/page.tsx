import type { Metadata } from "next";
import SampanFishAndMeatClient from "./components/SampanFishAndMeatClient";

export const metadata: Metadata = {
  title: "Sampan Fish & Meat | Fresh Farm Fish Sourced from Sampan Eco & Agro",
  description:
    "Sampan Fish & Meat offers naturally cultivated, chemical-free freshwater fish and quality farm produce sourced directly from Sampan Eco & Agro in Alphadanga, Faridpur.",
};

export default function SampanFishAndMeatPage() {
  return <SampanFishAndMeatClient />;
}
