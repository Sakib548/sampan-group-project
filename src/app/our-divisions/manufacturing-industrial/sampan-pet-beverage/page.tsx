import type { Metadata } from "next";
import SampanPetBeverageClient from "./components/SampanPetBeverageClient";

export const metadata: Metadata = {
  title: "Sampan PET & Beverage | Bottling Plant Alfadanga, Faridpur",
  description:
    "Automated food-grade PET preforms and beverage bottling plant located inside Sampan Industrial Park, Alfadanga, Faridpur.",
};

export default function SampanPetBeveragePage() {
  return <SampanPetBeverageClient />;
}
