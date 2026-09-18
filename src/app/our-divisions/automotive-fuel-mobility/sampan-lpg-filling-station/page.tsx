import type { Metadata } from "next";
import SampanLpgFillingStationClient from "./components/SampanLpgFillingStationClient";

export const metadata: Metadata = {
  title: "Sampan LPG Station | 24/7 Auto LPG Refueling Dhaka-Khulna Highway",
  description:
    "24/7 high-pressure Auto LPG autogas refueling station at the Sampan Highway Inn Complex, KM 74, Dhaka–Khulna Highway.",
};

export default function SampanLpgFillingStationPage() {
  return <SampanLpgFillingStationClient />;
}
