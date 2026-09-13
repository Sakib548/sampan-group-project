import type { Metadata } from "next";
import SampanGolfAcademyClient from "./components/SampanGolfAcademyClient";

export const metadata: Metadata = {
  title: "Sampan Golf Academy | Golf Instruction & Practice Greens",
  description:
    "Sampan Golf Academy in Alphadanga, Faridpur offers structured golf instruction, swing practice, and beginner-friendly coaching in a scenic countryside environment.",
};

export default function SampanGolfAcademyPage() {
  return <SampanGolfAcademyClient />;
}
