"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SpaceBackground from "./SpaceBackground";
import BentoGrid from "./BentoGrids";
import "./Bento.css";
import SectionTitleBlock from "@/components/sectionsShared/SectionTitleBlock";

interface CursorGlowProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const GLOW_SIZE = 750;
const GLOW_HALF = GLOW_SIZE / 2;

const CursorGlow: React.FC<CursorGlowProps> = ({ containerRef }) => {
  const glowRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const isInside = useRef(false);
  const currentOpacity = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const glowEl = glowRef.current;
    if (!container || !glowEl) return;

    gsap.set(glowEl, { opacity: 0 });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      isInside.current = inside;
      if (inside) {
        mouse.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const xSetter = gsap.quickSetter(glowEl, "x", "px");
    const ySetter = gsap.quickSetter(glowEl, "y", "px");
    const opacitySetter = gsap.quickSetter(glowEl, "opacity", "");

    const ticker = () => {
      const rect = container.getBoundingClientRect();
      const dt = 1.0 - Math.pow(1.0 - 0.15, gsap.ticker.deltaRatio());
      const opacityDt = 1.0 - Math.pow(1.0 - 0.12, gsap.ticker.deltaRatio());
      const targetOpacity = isInside.current ? 0.8 : 0;

      glowPos.current.x += (mouse.current.x - glowPos.current.x) * dt;
      glowPos.current.y += (mouse.current.y - glowPos.current.y) * dt;
      currentOpacity.current +=
        (targetOpacity - currentOpacity.current) * opacityDt;

      const localX = glowPos.current.x - rect.left;
      const localY = glowPos.current.y - rect.top;
      xSetter(localX - GLOW_HALF);
      ySetter(localY - GLOW_HALF);
      opacitySetter(currentOpacity.current);
    };

    gsap.ticker.add(ticker);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(ticker);
    };
  }, [containerRef]);

  return <div ref={glowRef} className="cursor-glow" />;
};

const Bento: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div data-theme="dark" id="services" className="bento-wrapper">
      <div ref={containerRef} className="bento-container">
        <div className="bento-title-wrapper">
          <SectionTitleBlock
            normal1="Crating"
            italic1="Digital Experiences"
            normal2="That Fuel Success"
            description="From sleek landing pages to powerful enterprise web apps, we bring ideas to life with precision and creativity."
            theme="dark"
          />
        </div>
        <div className="bento-bg-layer">
          <SpaceBackground />
        </div>

        <div className="cursor-glow-clip">
          <CursorGlow containerRef={containerRef} />
        </div>

        <div className="bento-content-wrapper">
          <div className="bento-max-width">
            <BentoGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
