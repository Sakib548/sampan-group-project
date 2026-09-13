import type { Metadata } from "next";
import SampanTowingServiceClient from "./components/SampanTowingServiceClient";

export const metadata: Metadata = {
  title: "Sampan Towing Service | 24/7 Highway Emergency Recovery Gopalganj",
  description:
    "24/7 emergency flatbed towing and highway vehicle recovery service stationed at Sampan Highway Inn, KM 74, Dhaka–Khulna Highway, Gopalganj.",
};

export default function SampanTowingServicePage() {
  return <SampanTowingServiceClient />;
}
