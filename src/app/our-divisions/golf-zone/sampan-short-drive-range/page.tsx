import type { Metadata } from "next";
import SampanShortDriveRangeClient from "./components/SampanShortDriveRangeClient";

export const metadata: Metadata = {
  title: "Sampan Short Drive Range (Coming Soon) | Golf Practice & Driving Bays",
  description:
    "Sampan Short Drive Range is an upcoming golf practice and short game driving range situated beside Sampan Highway Inn on the Dhaka–Khulna Highway (KM 74).",
};

export default function SampanShortDriveRangePage() {
  return <SampanShortDriveRangeClient />;
}
