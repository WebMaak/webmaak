"use client";

import type { Metadata } from "next";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import SectionTitleBlock from "@/components/sectionsShared/SectionTitleBlock";
import OrbitingCirclesPulse from "./OrbitingIcons";
import styles from "@/styles/orbit/OrbitingIconsWrapper.module.css";

export const metadata: Metadata = {
  title: "WebMaak — Development Navigation",
  description:
    "Temporary development navigation to access all pages during the build process.",
};

export default function RootDevelopmentPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [orbitConfig, setOrbitConfig] = useState({
    radius: [0, 220, 370, 530, 700],
    iconSize: [250, 80, 80, 80, 80],
  });
  const [loadOrbit, setLoadOrbit] = useState(true);

  // Intersection Observer to pause animation when out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Helper to optimize Cloudinary icon URLs
  const getOptimizedIcon = (url: string, size: number) => {
    if (!url.includes("cloudinary.com")) return url;
    // Inject width and auto formats
    const retinaSize = size * 2; // Support retina displays
    return url.replace("/upload/", `/upload/w_${retinaSize},f_auto,q_auto/`);
  };

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
      } else if (window.innerWidth < 1536) {
        setOrbitConfig({
          radius: [0, 170, 300, 450, 600],
          iconSize: [100, 70, 70, 70, 70],
        });
      } else {
        setOrbitConfig({
          radius: [0, 220, 360, 520, 690],
          iconSize: [100, 80, 80, 80, 80],
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div ref={sectionRef} data-theme="light" id="tech-stack">
        <SectionTitleBlock
          normal1="Powering Ideas"
          normal2="With"
          italic2="Modern Technology"
          description="We combine cutting-edge coding frameworks and creative tools to transform concepts into seamless, high-impact digital experiences that blend precision with innovation."
          theme="light"
        />
        <div className={styles.orbitSection} data-theme="light" id="section6">
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
                isInView={isInView}
              >
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193104/center_of0nft.png",
                    orbitConfig.iconSize[0],
                  )}
                  alt="icon center"
                  width={orbitConfig.iconSize[0]}
                  height={orbitConfig.iconSize[0]}
                  className={`${styles.centerIconImg} ${styles.centerIcon}`}
                />
              </OrbitingCirclesPulse>

              <OrbitingCirclesPulse
                radius={orbitConfig.radius[1]}
                reverse
                duration={24}
                iconSize={orbitConfig.iconSize[1]}
                isInView={isInView}
              >
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193880/13_bduaoe.png",
                    orbitConfig.iconSize[1],
                  )}
                  alt="icon 12"
                  width={orbitConfig.iconSize[1]}
                  height={orbitConfig.iconSize[1]}
                />
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193881/12_hxm78z.png",
                    orbitConfig.iconSize[1],
                  )}
                  alt="icon 13"
                  width={orbitConfig.iconSize[1]}
                  height={orbitConfig.iconSize[1]}
                />
              </OrbitingCirclesPulse>

              <OrbitingCirclesPulse
                radius={orbitConfig.radius[2]}
                duration={20}
                iconSize={orbitConfig.iconSize[2]}
                isInView={isInView}
              >
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193107/7_gx5uab.png",
                    orbitConfig.iconSize[2],
                  )}
                  alt="icon 4"
                  width={orbitConfig.iconSize[2]}
                  height={orbitConfig.iconSize[2]}
                />
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193106/6_uip7ag.png",
                    orbitConfig.iconSize[2],
                  )}
                  alt="icon 5"
                  width={orbitConfig.iconSize[2]}
                  height={orbitConfig.iconSize[2]}
                />
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193105/5_m1lsqi.png",
                    orbitConfig.iconSize[2],
                  )}
                  alt="icon 6"
                  width={orbitConfig.iconSize[2]}
                  height={orbitConfig.iconSize[2]}
                />
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193104/4_tm6jdx.png",
                    orbitConfig.iconSize[2],
                  )}
                  alt="icon 7"
                  width={orbitConfig.iconSize[2]}
                  height={orbitConfig.iconSize[2]}
                />
              </OrbitingCirclesPulse>

              <OrbitingCirclesPulse
                radius={orbitConfig.radius[3]}
                reverse
                duration={16}
                iconSize={orbitConfig.iconSize[3]}
                isInView={isInView}
              >
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193108/8_dmcyvi.png",
                    orbitConfig.iconSize[3],
                  )}
                  alt="icon 8"
                  width={orbitConfig.iconSize[3]}
                  height={orbitConfig.iconSize[3]}
                />
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193111/9_dglzf6.png",
                    orbitConfig.iconSize[3],
                  )}
                  alt="icon 9"
                  width={orbitConfig.iconSize[3]}
                  height={orbitConfig.iconSize[3]}
                />
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193880/10_wzkvuy.png",
                    orbitConfig.iconSize[3],
                  )}
                  alt="icon 10"
                  width={orbitConfig.iconSize[3]}
                  height={orbitConfig.iconSize[3]}
                />
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193094/2_sog3g0.png",
                    orbitConfig.iconSize[3],
                  )}
                  alt="icon 11"
                  width={orbitConfig.iconSize[3]}
                  height={orbitConfig.iconSize[3]}
                />
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193103/3_szeoce.png",
                    orbitConfig.iconSize[3],
                  )}
                  alt="icon 12"
                  width={orbitConfig.iconSize[3]}
                  height={orbitConfig.iconSize[3]}
                />
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193066/1_r8o9sl.png",
                    orbitConfig.iconSize[3],
                  )}
                  alt="icon 13"
                  width={orbitConfig.iconSize[3]}
                  height={orbitConfig.iconSize[3]}
                />
              </OrbitingCirclesPulse>

              <OrbitingCirclesPulse
                radius={orbitConfig.radius[4]}
                reverse
                duration={12}
                iconSize={orbitConfig.iconSize[4]}
                isInView={isInView}
              >
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193884/17_kx1ts5.png",
                    orbitConfig.iconSize[4],
                  )}
                  alt="icon 14"
                  width={orbitConfig.iconSize[4]}
                  height={orbitConfig.iconSize[4]}
                />
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193883/15_ko6bqc.png",
                    orbitConfig.iconSize[4],
                  )}
                  alt="icon 15"
                  width={orbitConfig.iconSize[4]}
                  height={orbitConfig.iconSize[4]}
                />
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193882/14_u349qe.png",
                    orbitConfig.iconSize[4],
                  )}
                  alt="icon 16"
                  width={orbitConfig.iconSize[4]}
                  height={orbitConfig.iconSize[4]}
                />
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193886/18_viemp0.png",
                    orbitConfig.iconSize[4],
                  )}
                  alt="icon 17"
                  width={orbitConfig.iconSize[4]}
                  height={orbitConfig.iconSize[4]}
                />
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193885/16_fzgjnd.png",
                    orbitConfig.iconSize[4],
                  )}
                  alt="icon 18"
                  width={orbitConfig.iconSize[4]}
                  height={orbitConfig.iconSize[4]}
                />
                <Image
                  src={getOptimizedIcon(
                    "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772193886/19_amzcg1.png",
                    orbitConfig.iconSize[4],
                  )}
                  alt="icon 19"
                  width={orbitConfig.iconSize[4]}
                  height={orbitConfig.iconSize[4]}
                />
              </OrbitingCirclesPulse>
            </>
          )}
        </div>
      </div>
    </>
  );
}
