import type { Metadata } from "next";
import SampanIndustrialParkClient from "./components/SampanIndustrialParkClient";

export const metadata: Metadata = {
  title: "Sampan Industrial Park | Alfadanga, Faridpur | Sampan Group",
  description:
    "Master-planned industrial park in Alfadanga, Faridpur housing Sampan Group's anchor manufacturing plants for eco hollow bricks, pavers, and PET beverage packaging.",
};

export default function SampanIndustrialParkPage() {
  return <SampanIndustrialParkClient />;
}
