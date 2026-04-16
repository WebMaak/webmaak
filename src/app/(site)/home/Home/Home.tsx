"use client";

import dynamic from "next/dynamic";
import Hero from "../Hero/Hero";
import Header from "@/components/layout/Navbar/Header";
import Navigator from "@/components/layout/Navigator/Navigator";
import { useIsTablet } from "@/hooks/useIsTablet";
import "@/styles/home.css";

// Dynamic imports
const Cards = dynamic(() => import("../Section1_Process/Section1"));
const Showreel = dynamic(() => import("../Section2_Showreel/Showreel"));
const Services = dynamic(() => import("../Section3_Services/Services"));
const Bento = dynamic(() => import("../Section5_Bento/Bento"));
const MobileBento = dynamic(() => import("../Section5_Bento/MobileBento"));
const Orbit = dynamic(() => import("../Section6_Orbit/Orbit"));
const Clients = dynamic(() => import("../Section7_Clients/Clients"));
const Testimonials = dynamic(
  () => import("../Section8_Testimonials/Testimonials"),
);
const Footer = dynamic(() => import("@/components/layout/Footer/Footer"));

export default function Home() {
  const isTablet = useIsTablet();

  return (
    <>
      <Header />
      <Navigator />

      <div className="homepage-top run-clockwise-curve run-anti-clockwise-curve">
        <Hero />
      </div>

      <div className="homepage-bottom">
        <Cards />
        <Showreel />
        <Services />

        {isTablet ? <MobileBento /> : <Bento />}

        <Orbit />
        <Clients />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
