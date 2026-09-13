import type { Metadata } from "next";
import SampanHollowBricksTilesClient from "./components/SampanHollowBricksTilesClient";

export const metadata: Metadata = {
  title: "Sampan Hollow Bricks & Tiles | Alfadanga, Faridpur | Eco Building Materials",
  description:
    "Automated eco-friendly concrete hollow blocks, interlocking pavers, and heavy-duty parking tiles plant inside Sampan Industrial Park, Alfadanga, Faridpur.",
};

export default function SampanHollowBricksTilesPage() {
  return <SampanHollowBricksTilesClient />;
}
