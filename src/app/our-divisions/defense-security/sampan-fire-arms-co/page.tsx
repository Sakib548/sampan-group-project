import type { Metadata } from "next";
import SampanFireArmsCoClient from "./components/SampanFireArmsCoClient";

export const metadata: Metadata = {
  title: "Sampan Fire Arms Co. | Government Enlisted Defense Importer",
  description:
    "Government-enlisted defense importer and licensed firearms concern operating under official Ministry of Home Affairs compliance in Bangladesh.",
};

export default function SampanFireArmsCoPage() {
  return <SampanFireArmsCoClient />;
}
