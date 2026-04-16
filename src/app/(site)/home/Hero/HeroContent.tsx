"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  animateTextReveal,
  cleanupTextReveal,
} from "@/components/animations/textReveal";

import "@/styles/hero.css";

export default function HeroContent() {
  const pathname = usePathname();

  useEffect(() => {
    // small timeout helps avoid layout race conditions
    const t = setTimeout(() => {
      animateTextReveal(".hero-reveal .line p", 0.1);
    }, 50);

    return () => {
      clearTimeout(t);
      cleanupTextReveal();
    };
  }, [pathname]);

  return (
    <div className="hero-content">
      {/* MAIN HEADING */}
      <h1 className="hero-title hero-reveal">
        <div className="line">
          <p className="sm-hide">
            <span className="crafting">Crafting</span>
            <span className="digital">Digital</span>
          </p>
          <p className="crafting sm-visible">Crafting</p>
          <p className="digital sm-visible">Digital</p>
        </div>

        <div className="line">
          <p className="masterpieces ">Masterpieces</p>
        </div>
      </h1>

      <p className="hero-subtext css-fadein-1-2">
        Crafting digital experiences that don’t just look good, but also bring
        measurable growth.
      </p>
    </div>
  );
}
