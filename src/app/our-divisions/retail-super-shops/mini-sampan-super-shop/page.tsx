import type { Metadata } from "next";
import MiniSampanClient from "./components/MiniSampanClient";

export const metadata: Metadata = {
  title: "Mini Sampan Super Shop | Express ~200 Sq. Ft. Convenience Kiosk",
  description:
    "Mini Sampan Super Shop is a compact ~200 sq. ft. express convenience kiosk located at the Sampan Highway Inn Complex on the Dhaka–Khulna Highway (KM 74, Dhaka–Khulna Highway), offering grab-and-go refreshments, road snacks, and travel essentials.",
  keywords: [
    "Mini Sampan Super Shop",
    "Mini Sampan",
    "Express convenience kiosk",
    "Highway convenience store",
    "Highway convenience shop",
    "Sampan Highway Inn",
    "Dhaka Khulna Highway Super Shop",
    "Travel snacks Bangladesh",
    "Sampan Group Retail",
  ],
  openGraph: {
    title: "Mini Sampan Super Shop | Express Convenience Kiosk",
    description:
      "A ~200 sq. ft. rapid grab-and-go convenience kiosk at the Sampan Highway Inn Complex on the Dhaka–Khulna Highway (KM 74, Dhaka–Khulna Highway).",
    images: [
      {
        url: "/images/our-divisions/mini-sampan-super-shop/Web-Banner.jpg",
        width: 1200,
        height: 630,
        alt: "Mini Sampan Super Shop Outlet",
      },
    ],
  },
};

export default function MiniSampanSuperShopPage() {
  return <MiniSampanClient />;
}
