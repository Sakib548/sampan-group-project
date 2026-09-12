import type { Metadata } from "next";
import SampanAgroGolfClubLoungeClient from "../components/SampanAgroGolfClubLoungeClient";

export const metadata: Metadata = {
  title: "Sampan Agro & Golf Club & Lounge | Championship Golf, Executive VIP Lounges & Member Privileges",
  description:
    "Sampan Agro & Golf Club & Lounge in Podunapur, Moulvibazar features executive member lounges, championship 9-hole golf, billiards salon, VIP boardroom suites, and fine dining.",
  keywords: [
    "Sampan Agro and Golf Club and Lounge",
    "Sampan Golf Club",
    "Executive Lounge Moulvibazar",
    "Golf Club Bangladesh",
    "Billiards and Card Lounge",
    "Sampan Group Hospitality",
    "Sylhet Luxury Golf Club",
  ],
  openGraph: {
    title: "Sampan Agro & Golf Club & Lounge | The Executive Realm of Leisure & Sport",
    description:
      "A prestigious country club sanctuary where championship 9-hole golf converges with private executive lounges, fine dining, billiards parlor, and scenic green valleys.",
    images: [
      {
        url: "/images/our-divisions/sampan-agro-golf-resort/sampan-agro-golf-resort.png",
        width: 1200,
        height: 630,
        alt: "Sampan Agro & Golf Club & Lounge",
      },
    ],
  },
};

export default function SampanAgroGolfClubLoungePage() {
  return <SampanAgroGolfClubLoungeClient />;
}
