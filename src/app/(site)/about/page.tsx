import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Navbar/Header";
import About from "./About";

const Footer = dynamic(() => import("@/components/layout/Footer/Footer"));

export const metadata: Metadata = {
  title: "About WebMaak Creative LLP",
  description:
    "Learn about WebMaak Creative LLP — a full-service digital agency in Kolkata specializing in Next.js development, UI/UX design, mobile applications, e-commerce platforms, and creative 3D media production.",
  keywords: [
    "webmaak",
    "webmaak creative llp",
    "about webmaak",
    "webmaak team",
    "agency info",
    "creative agency",
    "digital agency company profile",
  ],
  alternates: {
    canonical: "https://webmaak.com/about",
  },
  openGraph: {
    title: "About WebMaak",
    description:
      "Meet the team and explore the mission behind WebMaak Creative LLP.",
    url: "https://webmaak.com/about",
    images: [
      {
        url: "/company-logos/favicon.png",
        width: 1200,
        height: 630,
        alt: "About WebMaak Creative LLP",
      },
    ],
    type: "website",
  },
};

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
