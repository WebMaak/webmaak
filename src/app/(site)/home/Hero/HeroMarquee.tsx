// // Logo marquee component.

"use client";

import "@/styles/hero.css";

export default function HeroMarquee() {
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
    "marquee-logo/40.webp",
  ];

  return (
    <div className="hero-marquee-wrapper">
      <div className="hero-marquee-track">
        {logos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`logo-${i}`}
            className="hero-marquee-logo"
          />
        ))}

        {/* Duplicate once for seamless loop */}
        {logos.map((src, i) => (
          <img
            key={`dup-${i}`}
            src={src}
            alt={`logo-dup-${i}`}
            className="hero-marquee-logo"
          />
        ))}
        {logos.map((src, i) => (
          <img
            key={`dup-${i}`}
            src={src}
            alt={`logo-dup-${i}`}
            className="hero-marquee-logo"
          />
        ))}
      </div>
    </div>
  );
}
