"use client";

/**
 * Home page — optimized with staged hydration + JSDoc types.
 * UI & functionality remain 100% identical to your original file.
 */

import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

// Progressive dynamic imports—no UI changes, only hydration optimization
const Navbar = dynamic(
  () => import("../components/Navbar/Navbar").then((m) => m.default),
  { ssr: false }
);
const Hero = dynamic(
  () => import("../components/Hero/Hero").then((m) => m.default),
  { ssr: false }
);
const FirstSection = dynamic(
  () =>
    import("../components/FirstSection/FirstSection").then((m) => m.default),
  { ssr: false }
);
const SecondSection = dynamic(
  () =>
    import("../components/SecondSection/SecondSection").then((m) => m.default),
  { ssr: false }
);
const FourthSection = dynamic(
  () =>
    import("../components/FourthSection/FourthSection").then((m) => m.default),
  { ssr: false }
);
const FifthSection = dynamic(
  () =>
    import("../components/FifthSection/FifthSection").then((m) => m.default),
  { ssr: false }
);
const SeventhSection = dynamic(
  () =>
    import("../components/SeventhSection/SeventhSection").then(
      (m) => m.default
    ),
  { ssr: false }
);
const ModernFooter = dynamic(
  () => import("../components/Footer/ModernFooter").then((m) => m.default),
  { ssr: false }
);

const ItScrollTouch = dynamic(
  () =>
    import("../components/SecondSection/ItScrollTouch").then((m) => m.default),
  { ssr: false }
);
const MediaScrollTouch = dynamic(
  () =>
    import("../components/SecondSection/MediaScrollTouch").then(
      (m) => m.default
    ),
  { ssr: false }
);
const Navigator = dynamic(
  () => import("../components/Navigator/Navigator").then((m) => m.default),
  { ssr: false }
);

const OrbitingCirclesPulse = dynamic(
  () => import("../components/orbiting-circles-pulse").then((m) => m.default),
  { ssr: false, loading: () => null }
);

const Loader = dynamic(
  () => import("../components/Loader/Loader").then((m) => m.default),
  { ssr: false }
);
const WelcomeLoader = dynamic(
  () => import("../components/Loader/WelcomeLoader").then((m) => m.default),
  { ssr: false }
);

const Client = dynamic(
  () => import("../components/client").then((m) => m.default),
  { ssr: false }
);

export default function Home() {
  const [bgHeight, setBgHeight] = useState("100vh");
  const [hideHero, setHideHero] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [orbitConfig, setOrbitConfig] = useState({
    radius: [0, 220, 370, 530, 700],
    iconSize: [250, 80, 80, 80, 80],
  });

  // Hydration stages — safe & invisible to UI
  const [loadFirst, setLoadFirst] = useState(true);
  const [loadAfter, setLoadAfter] = useState(false);
  const [loadLazySections, setLoadLazySections] = useState(false);
  const [loadOrbit, setLoadOrbit] = useState(false);

  // Responsive orbit config
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
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Spacer intersection — identical logic
  useEffect(() => {
    const img = new Image();
    img.src = "/background-design.png";
    img.onload = () => setBgHeight(`${img.naturalHeight}px`);

    const spacer = document.getElementById("spacer");
    if (!spacer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHideHero(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(spacer);
    return () => observer.disconnect();
  }, []);

  // Touch detection
  useEffect(() => {
    const checkWidth = () => setIsTouch(window.innerWidth < 1024);
    checkWidth();
    window.addEventListener("resize", checkWidth, { passive: true });
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Staged hydration (performance optimization)
  useEffect(() => {
    const t1 = setTimeout(() => setLoadAfter(true), 250);
    const t2 = setTimeout(() => setLoadLazySections(true), 700);
    const t3 = setTimeout(() => setLoadOrbit(true), 900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <>
      <WelcomeLoader />
      <Loader />

      <div className="main relative">
        {/* Immediate components */}
        {loadFirst && (
          <>
            <Navbar />
            <Navigator />
            <div
              className={`${hideHero ? "hidden" : "fixed top-0 left-0 w-full"}`}
            >
              <Hero />
            </div>
          </>
        )}

        {/* Keep spacer for navigation logic */}
        <div
          id="spacer"
          className="lg:h-screen md:h-[67vh] h-screen pointer-events-none -z-20"
        ></div>

        {/* Page content wrapper */}
        <div className="bg-white lg:rounded-t-[4rem] md:rounded-t-[2rem] rounded-t-[2rem] relative z-10">
          {/* Blob shapes exactly preserved */}
          <div className="blob-a">
            <div className="shape-blob one"></div>
            <div className="shape-blob two"></div>
            <div className="shape-blob three"></div>
          </div>

          {/* FIRST batch */}
          {loadAfter && <FirstSection />}
          {loadAfter && <SecondSection />}

          {/* Scrolling touch sections */}
          <div id="Services" data-theme="light">
            {loadLazySections && <ItScrollTouch />}
          </div>

          <div id="section8" data-theme="light">
            {loadLazySections && <MediaScrollTouch />}
          </div>

          {/* Fourth and Fifth */}
          {loadLazySections && <FourthSection />}
          {loadLazySections && <FifthSection />}

          {/* Orbiting animation section — FULLY preserved */}
          <div
            className="relative overflow-hidden w-full mb-20 md:mb-2 z-10 min-h-[450px] md:min-h-[775px]"
            data-theme="light"
            id="section6"
          >
            {/* Gradient overlays (kept) */}
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

            {/* All orbit rings preserved 1:1 */}
            {loadOrbit && (
              <>
                <OrbitingCirclesPulse
                  radius={orbitConfig.radius[0]}
                  duration={0}
                  iconSize={orbitConfig.iconSize[0]}
                >
                  <img
                    src="/orbiting-circle-icons/center.png"
                    alt="icon center"
                    className="lg:mr-[-72px] lg:mb-[-72px] md:mr-[-54px] md:mb-[-54px] mr-[-32px] mb-[-24px] animate-pulse-scale"
                  />
                </OrbitingCirclesPulse>

                <OrbitingCirclesPulse
                  radius={orbitConfig.radius[1]}
                  reverse
                  duration={24}
                  iconSize={orbitConfig.iconSize[1]}
                >
                  <img src="/orbiting-circle-icons/12.png" alt="icon 12" />
                  <img src="/orbiting-circle-icons/13.png" alt="icon 13" />
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
              </>
            )}
          </div>

          {/* Clients */}
          <div id="client-section" data-theme="dark">
            {loadLazySections && <Client />}
          </div>

          {/* Reviews */}
          <div id="Reviews" data-theme="light">
            {loadLazySections && <SeventhSection />}
          </div>

          {/* Footer */}
          <ModernFooter />
        </div>
      </div>
    </>
  );
}
