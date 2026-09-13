import type { Metadata } from "next";
import SampanEvChargingStationClient from "./components/SampanEvChargingStationClient";

export const metadata: Metadata = {
  title: "Sampan EV Charging Station | Electric Mobility Gopalganj",
  description:
    "Upcoming electric vehicle charging hub next to Sampan Highway Inn at KM 74, Dhaka–Khulna Highway, Gopalganj.",
};

export default function SampanEvCarChargingStationPage() {
  return <SampanEvChargingStationClient />;
}
