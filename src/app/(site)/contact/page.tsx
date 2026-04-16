import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Navbar/Header";
import Contact from "./Contact";

const Footer = dynamic(() => import("@/components/layout/Footer/Footer"));

export const metadata: Metadata = {
  title: "Contact WebMaak Creative LLP",
  description:
    "Contact WebMaak Creative LLP in Kolkata, Newtown for Next.js development, React applications, UI/UX design, CMS systems, e-commerce, mobile apps, and creative digital solutions.",
  keywords: [
    "webmaak",
    "webmaak creative llp",
    "contact webmaak",
    "book consultation",
    "agency contact",
    "IT services contact",
    "media services contact",
  ],
  alternates: {
    canonical: "https://webmaak.com/contact",
  },
  openGraph: {
    title: "Contact WebMaak",
    description:
      "Reach out to WebMaak Creative LLP for professional IT and Media services.",
    url: "https://webmaak.com/contact",
    images: [
      {
        url: "/company-logos/favicon.png",
        width: 1200,
        height: 630,
        alt: "Contact WebMaak",
      },
    ],
    type: "website",
  },
};

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="about-root selection-accent">
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
