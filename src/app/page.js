"use client";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FirstSection from "../components/FirstSection/FirstSection";
import SecondSection from "../components/SecondSection/SecondSection";
import FourthSection from "../components/FourthSection/FourthSection";
import FifthSection from "../components/FifthSection/FifthSection";
import EighthSection from "../components/EighthSection/EighthSection";
import SeventhSection from "../components/SeventhSection/SeventhSection";
import SixthSection from "../components/SixthSection/SixthSection";
import Footer from "../components/Footer/Footer";
import DigitalMarketing from "../components/SecondSection/DigitalMarketing";
import ItScroll from "../components/SecondSection/ItScroll";
import MediaScroll from "../components/SecondSection/MediaScroll";
import Navigator from "../components/Navigator/Navigator";
import { React, useState, useEffect } from "react";
import { OrbitingCirclesPulse } from "../components/orbiting-circles-pulse";
import Loader from "../components/Loader/Loader";

export default function Home() {
  const [bgHeight, setBgHeight] = useState("100vh");
  const [hideHero, setHideHero] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/background-design.png";
    img.onload = () => {
      setBgHeight(`${img.naturalHeight}px`);
    };

    // GSAP-driven animations removed per request.
    // Keep image preload, visibility logic and the IntersectionObserver that hides the hero.
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
        <div className={`${hideHero ? "hidden" : "fixed top-0 left-0 w-full"}`}>
          <Hero />
        </div>

        <div
          id="spacer"
          className="lg:h-screen md:h-[67vh] h-screen  pointer-events-none -z-20"
        ></div>

        {/* Content scrolls over Hero */}
        <div className="bg-white lg:rounded-t-[4rem] md:rounded-t-[2rem] rounded-t-[2rem] relative z-10">
          <div className="blob-a">
            <div className="shape-blob one"></div>
            <div className="shape-blob two"></div>
            <div className="shape-blob three"></div>
          </div>

          <FirstSection />
          <SecondSection />
          <div id="section4" data-theme="light">
            <ItScroll />
          </div>
          <div id="section8" data-theme="light">
            <MediaScroll />
          </div>
          <div id="section9" data-theme="light">
            <DigitalMarketing />
          </div>
          <FourthSection />
          <FifthSection />
          <div
            className="relative overflow-hidden h-[900px] w-full mb-20 z-10"
            data-theme="light"
          >
            <OrbitingCirclesPulse radius={0} duration={0} iconSize={250}>
              <img
                src="/orbiting-circle-icons/center-icon.png"
                alt="icon 2"
                className="mr-[-72px] mb-[-72px] animate-pulse-scale"
              />
              {/* <div class="orbit-background">
                <div class="blur-circle"></div>
                <img
                  src="/orbiting-circle-icons/center-icon.png"
                  alt="Project"
                  class="orbit-image"
                />
              </div> */}
            </OrbitingCirclesPulse>
            <OrbitingCirclesPulse
              radius={220}
              reverse
              duration={25}
              iconSize={80}
            >
              <img src="/orbiting-circle-icons/2.png" alt="icon 2" />
              <img src="/orbiting-circle-icons/3.png" alt="icon 3" />
              {/* <img src="/orbiting-circle-icons/icon-4.png" alt="icon 4" /> */}
              {/* <img src="/orbiting-circle-icons/icon-5.png" alt="icon 5" /> */}
            </OrbitingCirclesPulse>
            <OrbitingCirclesPulse radius={370} duration={20} iconSize={80}>
              <img src="/orbiting-circle-icons/4.png" alt="icon 2" />
              <img src="/orbiting-circle-icons/5.png" alt="icon 3" />
              <img src="/orbiting-circle-icons/6.png" alt="icon 4" />
              <img src="/orbiting-circle-icons/7.png" alt="icon 5" />
              {/* <img src="/orbiting-circle-icons/icon-6.png" alt="icon 6" /> */}
            </OrbitingCirclesPulse>
            <OrbitingCirclesPulse
              radius={530}
              reverse
              duration={17}
              iconSize={80}
            >
              <img src="/orbiting-circle-icons/8.png" alt="icon 2" />
              <img src="/orbiting-circle-icons/9.png" alt="icon 3" />
              <img src="/orbiting-circle-icons/2.png" alt="icon 4" />
              <img src="/orbiting-circle-icons/3.png" alt="icon 5" />
              {/* <img src="/orbiting-circle-icons/icon-6.png" alt="icon 6" /> */}
            </OrbitingCirclesPulse>
            <OrbitingCirclesPulse radius={700} duration={15} iconSize={80}>
              <img src="/orbiting-circle-icons/2.png" alt="icon 2" />
              <img src="/orbiting-circle-icons/3.png" alt="icon 3" />
              <img src="/orbiting-circle-icons/2.png" alt="icon 4" />
              <img src="/orbiting-circle-icons/3.png" alt="icon 5" />
              <img src="/orbiting-circle-icons/2.png" alt="icon 6" />
              <img src="/orbiting-circle-icons/3.png" alt="icon 7" />
              {/* <img src="/orbiting-circle-icons/icon-8.png" alt="icon 8" /> */}
            </OrbitingCirclesPulse>
          </div>
          <div id="section7" data-theme="dark">
            {/* <SeventhSection /> */}
            <EighthSection />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
