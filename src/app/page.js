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
  const [orbitConfig, setOrbitConfig] = useState({
    radius: [0, 220, 370, 530],
    iconSize: [250, 80, 80, 80],
  });

  // ✅ Responsive orbit config
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setOrbitConfig({
          radius: [0, 80, 135, 200],
          iconSize: [100, 40, 40, 40],
        });
      } else if (window.innerWidth < 1024) {
        setOrbitConfig({
          radius: [0, 140, 250, 370],
          iconSize: [180, 60, 60, 60],
        });
      } else {
        setOrbitConfig({
          radius: [0, 220, 370, 530],
          iconSize: [250, 80, 80, 80],
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = "/background-design.png";
    img.onload = () => setBgHeight(`${img.naturalHeight}px`);

    const spacer = document.getElementById("spacer");
    if (!spacer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHideHero(!entry.isIntersecting),
      { root: null, threshold: 0 }
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

          {/* ✅ Responsive Orbit Section */}
          <div
            className="relative overflow-hidden w-full mb-20 z-10 min-h-[600px]"
            data-theme="light"
          >
            <OrbitingCirclesPulse
              radius={orbitConfig.radius[0]}
              duration={0}
              iconSize={orbitConfig.iconSize[0]}
            >
              <img
                src="/orbiting-circle-icons/center-icon.png"
                alt="icon 2"
                className="lg:mr-[-72px] lg:mb-[-72px] md:mr-[-62px] md:mb-[-62px] mr-[-38px] mb-[-38px] animate-pulse-scale"
              />
            </OrbitingCirclesPulse>

            <OrbitingCirclesPulse
              radius={orbitConfig.radius[1]}
              reverse
              duration={25}
              iconSize={orbitConfig.iconSize[1]}
            >
              <img src="/orbiting-circle-icons/2.png" alt="icon 2" />
              <img src="/orbiting-circle-icons/3.png" alt="icon 3" />
            </OrbitingCirclesPulse>

            <OrbitingCirclesPulse
              radius={orbitConfig.radius[2]}
              duration={14}
              iconSize={orbitConfig.iconSize[2]}
            >
              <img src="/orbiting-circle-icons/4.png" alt="icon 4" />
              <img src="/orbiting-circle-icons/5.png" alt="icon 5" />
              <img src="/orbiting-circle-icons/6.png" alt="icon 6" />
              <img src="/orbiting-circle-icons/7.png" alt="icon 7" />
            </OrbitingCirclesPulse>

            <OrbitingCirclesPulse
              radius={orbitConfig.radius[3]}
              reverse
              duration={10}
              iconSize={orbitConfig.iconSize[3]}
            >
              <img src="/orbiting-circle-icons/8.png" alt="icon 8" />
              <img src="/orbiting-circle-icons/8.png" alt="icon 8" />
              <img src="/orbiting-circle-icons/9.png" alt="icon 9" />
              <img src="/orbiting-circle-icons/9.png" alt="icon 9" />
            </OrbitingCirclesPulse>
          </div>

          <div id="section7" data-theme="dark">
            <SeventhSection />
            <EighthSection />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
