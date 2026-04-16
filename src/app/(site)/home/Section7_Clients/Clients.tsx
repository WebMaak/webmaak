"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/clients/Clients.module.css";
import SectionTitleBlock from "@/components/sectionsShared/SectionTitleBlock";
import Image from "next/image";

const logos: string[] = [
  "marquee-logo/1.webp.tmp",
  "marquee-logo/2.webp.tmp",
  "marquee-logo/3.webp.tmp",
  "marquee-logo/4.webp.tmp",
  "marquee-logo/5.webp.tmp",
  "marquee-logo/6.webp.tmp",
  "marquee-logo/7.webp.tmp",
  "marquee-logo/8.webp.tmp",
  "marquee-logo/9.webp.tmp",
  "marquee-logo/10.webp.tmp",
  "marquee-logo/11.webp.tmp",
  "marquee-logo/12.webp.tmp",
  "marquee-logo/13.webp.tmp",
  "marquee-logo/14.webp.tmp",
  "marquee-logo/15.webp.tmp",
  "marquee-logo/16.webp.tmp",
  "marquee-logo/17.webp.tmp",
  "marquee-logo/18.webp.tmp",
  "marquee-logo/19.webp.tmp",
  "marquee-logo/20.webp.tmp",
  "marquee-logo/21.webp.tmp",
  "marquee-logo/22.webp.tmp",
  "marquee-logo/23.webp.tmp",
  "marquee-logo/24.webp.tmp",
  "marquee-logo/25.webp.tmp",
  "marquee-logo/26.webp.tmp",
  "marquee-logo/27.webp.tmp",
  "marquee-logo/28.webp.tmp",
  "marquee-logo/29.webp.tmp",
  "marquee-logo/30.webp.tmp",
  "marquee-logo/31.webp.tmp",
  "marquee-logo/32.webp.tmp",
  "marquee-logo/33.webp.tmp",
  "marquee-logo/34.webp.tmp",
  "marquee-logo/35.webp.tmp",
  "marquee-logo/36.webp.tmp",
  "marquee-logo/37.webp.tmp",
  "marquee-logo/38.webp",
  "marquee-logo/39.webp",
];

export default function Clients() {
  const logosRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!logosRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".logo-img",
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: logosRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );

      ScrollTrigger.refresh();
    }, logosRef);

    return () => ctx.revert();
  }, []);

  return (
    <section data-theme="dark" id="clients" className={styles.section}>
      {/* REQUIRED TITLE BLOCK */}
      <SectionTitleBlock
        normal1="Trusted by Global Brands"
        description="We’ve partnered with clients around the world to bring their ideas to life through creative design, innovative apps, and impactful growth."
        theme="dark"
      />
      {/* LOGO STACK */}
      <div ref={logosRef} className={styles.grid}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.logoItem}>
            <Image
              src={logo.startsWith("/") ? logo : `/${logo}`}
              alt={`Client logo ${index + 1}`}
              width={120}
              height={60}
              loading="lazy"
              unoptimized={true}
              className="logo-img"
              sizes="(max-width: 768px) 100px, 120px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
