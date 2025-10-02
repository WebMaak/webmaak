"use client";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FirstSection from "../components/FirstSection/FirstSection";
import SecondSection from "../components/SecondSection/SecondSection";
import FourthSection from "../components/FourthSection/FourthSection";
import FifthSection from "../components/FifthSection/FifthSection";
import EighthSection from "../components/EighthSection/EighthSection";
import Footer from "../components/Footer/Footer";
import DigitalMarketing from "../components/SecondSection/DigitalMarketing"
import ItScroll from "../components/SecondSection/ItScroll"
import MediaScroll from "../components/SecondSection/MediaScroll"
import Navigator from "../components/Navigator/Navigator"
import { React, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { OrbitingCirclesPulse } from "../components/orbiting-circles-pulse";
import Loader from "../components/Loader/Loader"

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [bgHeight, setBgHeight] = useState("100vh");
  const [hideHero, setHideHero] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = "/background-design.png";
    img.onload = () => {
      setBgHeight(`${img.naturalHeight}px`);
    };

    const fadeUpElem = [
      { selector: ".hero-content-title", delay: 0 },
      { selector: ".hero-content-subtitle", delay: 0.1 },
      { selector: ".hero-content_btn-wrapper", delay: 0.2 },
      { selector: ".hero_tool_icon-wrap.left", delay: 0.3, x: -50 },
      { selector: ".hero_tool_icon-wrap.right", delay: 0.3, x: 50 },
      { selector: ".hero_tool_icon-wrap.left.mobile", delay: 0.3, x: -50 },
      { selector: ".hero_tool_icon-wrap.right.mobile", delay: 0.3, x: 50 },
    ];

    // Animate all elements on scroll
    fadeUpElem.forEach(({ selector, delay, x = 0 }) => {
      const element = document.querySelector(selector);
      if (!element) return;

      gsap.set(element, { opacity: 0, visibility: "hidden", "z-index": 10 });

      gsap.fromTo(
        element,
        { opacity: 0, y: 50, x, visibility: "hidden" }, // Apply x animation for left/right fade
        {
          opacity: 1,
          y: 0,
          x: 0,
          visibility: "visible",
          duration: 0.5,
          delay: delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animation for .fade-in class
    gsap.utils.toArray(".fade-in").forEach((element) => {
      gsap.set(element, { opacity: 0, visibility: "hidden" });

      gsap.fromTo(
        element,
        { opacity: 0, y: 0, visibility: "hidden" }, // Fade up
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animation for .fade-up class
    gsap.utils.toArray(".fade-up").forEach((element) => {
      gsap.set(element, { opacity: 0, visibility: "hidden" });

      gsap.fromTo(
        element,
        { opacity: 0, y: 50, visibility: "hidden" }, // Fade up
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animation for .scale-up class
    gsap.utils.toArray(".scale-up").forEach((element) => {
      gsap.set(element, { opacity: 0, scale: 0, visibility: "hidden" });

      gsap.fromTo(
        element,
        { opacity: 0, scale: 0, visibility: "hidden" }, // Scale up
        {
          delay: 0.8,
          opacity: 1,
          scale: 1,
          visibility: "visible",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate .logo_title immediately on page load
    const logoTitle = document.querySelector(".logo_title");
    if (logoTitle) {
      gsap.set(logoTitle, { opacity: 0, visibility: "hidden" });

      gsap.fromTo(
        logoTitle,
        { opacity: 0, y: 50, visibility: "hidden" },
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 0.5,
          delay: 0.4, // Match the timing of other elements
          ease: "power2.out",
        }
      );
    }
    const spacer = document.getElementById("spacer"); // target by ID
    if (!spacer) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide hero when spacer is NOT in view
        setHideHero(!entry.isIntersecting); // changes value of setHideHero to opposite
      },
      {
        root: null, // viewport
        threshold: 0, // trigger as soon as any part enters/leaves
      }
    );
    observer.observe(spacer);
    return () => observer.disconnect();

  }, []);

  
  return (
    <>
    <Loader />
      <div className="main relative">
        <Navbar />
        <Navigator />

        {/* Hero fixed background */}
        <div className={`${hideHero ? "hidden" : "fixed top-0 left-0 w-full h-screen"}`}>
          <Hero />
        </div>

        <div id="spacer" className="h-screen pointer-events-none -z-20"></div>

        {/* Content scrolls over Hero */}
        <div className="bg-white rounded-t-[4rem] relative z-10">
          <div className="blob-a">
            <div className="shape-blob one"></div>
            <div className="shape-blob two"></div>
            <div className="shape-blob three"></div>
          </div>

          <FirstSection />
          <SecondSection />
          <div id="section4" data-theme="light" >
            <ItScroll/>
            <MediaScroll />
            <DigitalMarketing />
          </div>
          <FourthSection />
          <FifthSection />
          <div className="relative overflow-hidden h-[900px] w-full mb-20 z-10" data-theme="light">
            <OrbitingCirclesPulse radius={0} duration={0} iconSize={250}>
              <img src="/orbiting-circle-icons/center-icon.png" alt="icon 2" className="mr-[-72px] mb-[-72px]" />
            </OrbitingCirclesPulse>
            <OrbitingCirclesPulse radius={220} reverse duration={25} iconSize={80} > 
              <img src="/orbiting-circle-icons/icon-2.png" alt="icon 2" />
              <img src="/orbiting-circle-icons/icon-3.png" alt="icon 3" />
              {/* <img src="/orbiting-circle-icons/icon-4.png" alt="icon 4" /> */}
              {/* <img src="/orbiting-circle-icons/icon-5.png" alt="icon 5" /> */}
            </OrbitingCirclesPulse>
            <OrbitingCirclesPulse radius={370} duration={20} iconSize={80}>
              <img src="/orbiting-circle-icons/icon-2.png" alt="icon 2" />
              <img src="/orbiting-circle-icons/icon-3.png" alt="icon 3" />
              <img src="/orbiting-circle-icons/icon-4.png" alt="icon 4" />
              <img src="/orbiting-circle-icons/icon-5.png" alt="icon 5" />
              {/* <img src="/orbiting-circle-icons/icon-6.png" alt="icon 6" /> */}
            </OrbitingCirclesPulse>
            <OrbitingCirclesPulse radius={530} reverse duration={17} iconSize={80}>
              <img src="/orbiting-circle-icons/icon-2.png" alt="icon 2" />
              <img src="/orbiting-circle-icons/icon-3.png" alt="icon 3" />
              <img src="/orbiting-circle-icons/icon-4.png" alt="icon 4" />
              <img src="/orbiting-circle-icons/icon-5.png" alt="icon 5" />
              {/* <img src="/orbiting-circle-icons/icon-6.png" alt="icon 6" /> */}
            </OrbitingCirclesPulse>
            <OrbitingCirclesPulse radius={700} duration={15} iconSize={80}>
              <img src="/orbiting-circle-icons/icon-2.png" alt="icon 2" />
              <img src="/orbiting-circle-icons/icon-3.png" alt="icon 3" />
              <img src="/orbiting-circle-icons/icon-4.png" alt="icon 4" />
              <img src="/orbiting-circle-icons/icon-5.png" alt="icon 5" />
              <img src="/orbiting-circle-icons/icon-6.png" alt="icon 6" />
              <img src="/orbiting-circle-icons/icon-7.png" alt="icon 7" />
              {/* <img src="/orbiting-circle-icons/icon-8.png" alt="icon 8" /> */}
            </OrbitingCirclesPulse>
          </div>
          <div id="section7" data-theme="dark">
            <EighthSection />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
