import type { Metadata } from "next";
import NagarArmsAmmunitionClient from "./components/NagarArmsAmmunitionClient";

export const metadata: Metadata = {
  title: "Nagar Arms & Ammunition | Government Licensed Defense Dealership",
  description:
    "Government-licensed arms and ammunition dealership operating under statutory regulatory compliance and Ministry of Home Affairs oversight in Bangladesh.",
};

export default function NagarArmsAmmunitionPage() {
  return <NagarArmsAmmunitionClient />;
}
