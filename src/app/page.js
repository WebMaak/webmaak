"use client";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FirstSection from "../components/FirstSection/FirstSection";
import SecondSection from "../components/SecondSection/SecondSection";
import FourthSection from "../components/FourthSection/FourthSection";
import FifthSection from "../components/FifthSection/FifthSection";
import EighthSection from "../components/EighthSection/EighthSection";
import SeventhSection from "../components/SeventhSection/SeventhSection";
import Footer from "../components/Footer/Footer";
import ModernFooter from "../components/Footer/ModernFooter";
import ItScrollTouch from "../components/SecondSection/ItScrollTouch";
import MediaScrollTouch from "../components/SecondSection/MediaScrollTouch";
import Navigator from "../components/Navigator/Navigator";
import { React, useState, useEffect } from "react";
import { OrbitingCirclesPulse } from "../components/orbiting-circles-pulse";
import Loader from "../components/Loader/Loader";
import Client from "@/components/client";

export default function Home() {
  const [bgHeight, setBgHeight] = useState("100vh");
  const [hideHero, setHideHero] = useState(false);
  const [orbitConfig, setOrbitConfig] = useState({
    radius: [0, 220, 370, 530, 700],
    iconSize: [250, 80, 80, 80, 80],
  });

  // ✅ Responsive orbit config
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOrbitConfig({
          radius: [0, 60, 100, 140, 180],
          iconSize: [40, 30, 30, 30, 30],
        });
      } else if (window.innerWidth < 1024) {
        setOrbitConfig({
          radius: [0, 120, 210, 290, 370],
          iconSize: [70, 50, 50, 50, 50],
        });
      } else if (window.innerWidth < 1537) {
        setOrbitConfig({
          radius: [0, 170, 300, 450, 600],
          iconSize: [100, 80, 80, 80, 80],
        });
      } else {
        setOrbitConfig({
          radius: [0, 220, 360, 520, 690],
          iconSize: [100, 70, 70, 70, 70],
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

  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsTouch(window.innerWidth < 1024);
    };

    // Initial check
    checkWidth();

    // Update on window resize
    window.addEventListener("resize", checkWidth);

    // Cleanup
    return () => window.removeEventListener("resize", checkWidth);
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
            <ItScrollTouch />
          </div>
          <div id="section8" data-theme="light">
            <MediaScrollTouch />
          </div>
          {/* <div id="section9" data-theme="light">
            <DigitalMarketingTouch />
          </div> */}

          <FourthSection />
          <FifthSection />

          {/* ✅ Responsive Orbit Section */}
          <div
            className="relative overflow-hidden w-full mb-20 md:mb-2 z-10 min-h-[450px] md:min-h-[775px]"
            data-theme="light"
            id="section6"
          >
            <div
              style={{
                position: "absolute",
                top: "-6px",
                left: 0,
                width: "100%",
                height: "100px",
                zIndex: 20,
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,1), transparent)",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                bottom: "-2px",
                left: 0,
                width: "100%",
                height: "100px",
                zIndex: 20,
                background:
                  "linear-gradient(to top, rgba(255,255,255,1), transparent)",
              }}
            ></div>
            <OrbitingCirclesPulse
              radius={orbitConfig.radius[0]}
              duration={0}
              iconSize={orbitConfig.iconSize[0]}
            >
              <img
                src="/orbiting-circle-icons/center.png"
                alt="icon 2"
                className=" lg:mr-[-72px] lg:mb-[-72px] md:mr-[-54px] md:mb-[-54px] mr-[-32px] mb-[-24px] animate-pulse-scale"
              />
            </OrbitingCirclesPulse>

            <OrbitingCirclesPulse
              radius={orbitConfig.radius[1]}
              reverse
              duration={24}
              iconSize={orbitConfig.iconSize[1]}
            >
              <img src="/orbiting-circle-icons/12.png" alt="icon 2" />
              <img src="/orbiting-circle-icons/13.png" alt="icon 3" />
            </OrbitingCirclesPulse>

            <OrbitingCirclesPulse
              radius={orbitConfig.radius[2]}
              duration={20}
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
              duration={16}
              iconSize={orbitConfig.iconSize[3]}
            >
              <img src="/orbiting-circle-icons/8.png" alt="icon 8" />
              <img src="/orbiting-circle-icons/9.png" alt="icon 9" />
              <img src="/orbiting-circle-icons/10.png" alt="icon 10" />
              <img src="/orbiting-circle-icons/11.png" alt="icon 11" />
              <img src="/orbiting-circle-icons/2.png" alt="icon 12" />
              <img src="/orbiting-circle-icons/3.png" alt="icon 13" />
            </OrbitingCirclesPulse>

            <OrbitingCirclesPulse
              radius={orbitConfig.radius[4]}
              reverse
              duration={12}
              iconSize={orbitConfig.iconSize[4]}
            >
              <img src="/orbiting-circle-icons/14.png" alt="icon 14" />
              <img src="/orbiting-circle-icons/15.png" alt="icon 15" />
              <img src="/orbiting-circle-icons/16.png" alt="icon 16" />
              <img src="/orbiting-circle-icons/17.png" alt="icon 17" />
              <img src="/orbiting-circle-icons/18.png" alt="icon 18" />
              <img src="/orbiting-circle-icons/19.png" alt="icon 19" />
            </OrbitingCirclesPulse>
          </div>
          <Client />
          <div id="section10" data-theme="light">
            <SeventhSection />
          </div>
          <div>
            <ModernFooter />
          </div>
        </div>
      </div>
    </>
  );
}
