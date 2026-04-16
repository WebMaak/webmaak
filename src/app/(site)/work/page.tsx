import type { Metadata } from "next";
import WorkHero from "./WorkHero";
import WorkInteractive from "./WorkInteractive";
import Header from "@/components/layout/Navbar/Header";
import "@/styles/work/work.css";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Showcase of WebMaak Creative LLP’s IT and Media projects across websites, applications, branding, video production, and 3D work.",
  keywords: [
    "portfolio", 
    "webmaak work", 
    "webmaak creative llp projects", 
    "agency projects", 
    "web design",
    "media projects", 
    "case studies"
  ],
  alternates: {
    canonical: "https://webmaak.com/work",
  },
  openGraph: {
    title: "Our Work — WebMaak",
    description: "Explore WebMaak’s portfolio of IT and Media work.",
    url: "https://webmaak.com/work",
    images: [
      {
        url: "/company-logos/favicon.png",
        width: 1200,
        height: 630,
        alt: "WebMaak Portfolio Showcase",
      },
    ],
    type: "website",
  },
};


import { PROJECTS } from "@/data/work";

export default function WorkPage() {
  return (
    <main className="work-page-wrapper">
      <Header />
      <WorkHero />
      <WorkInteractive projects={PROJECTS} />
    </main>
  );
}
