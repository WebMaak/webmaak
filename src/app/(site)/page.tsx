import type { Metadata } from "next";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("./home/Home/Home"));

export const metadata: Metadata = {
  title: "WebMaak — IT & Media Agency",
  description: "WebMaak Creative LLP is a full-service IT and Media agency delivering high-performance websites, branding, UI/UX design, and professional video production.",
  keywords: [
    "webmaak",
    "webmaak creative llp",
    "web development",
    "digital agency",
    "media agency",
    "video production",
    "branding",
    "UI UX design",
    "shopify development",
    "web design"
  ],
  alternates: {
    canonical: "https://webmaak.com",
  },
  openGraph: {
    title: "WebMaak — IT & Media Agency",
    description: "Creative digital agency for IT and Media services by WebMaak Creative LLP.",
    url: "https://webmaak.com",
    siteName: "WebMaak Creative LLP",
    images: [
      {
        url: "/company-logos/favicon.png",
        width: 1200,
        height: 630,
        alt: "WebMaak Agency Homepage",
      },
    ],
    type: "website",
  },
};


import { preload } from "react-dom";

export default function HomePage() {
  preload(
    "https://res.cloudinary.com/dsvgjs1qb/image/upload/f_auto,q_auto,w_1920/v1772194027/hero-bg_usxcj3.jpg",
    { as: "image" },
  );

  return (
    <main className="home-page-wrapper">
      <Home />
    </main>
  );
}
