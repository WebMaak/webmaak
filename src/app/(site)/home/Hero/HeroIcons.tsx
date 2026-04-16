"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { smoothScrollTo } from "@/lib/scrollTo";
import "@/styles/hero.css";

type HeroIconProps = {
  type: "it" | "media";
  scrollTo: string;
};

export default function HeroIcon({ type, scrollTo }: HeroIconProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const hoverRef = useRef<HTMLImageElement | null>(null);
  const mainRef = useRef<HTMLImageElement | null>(null);

  const [hoverActive, setHoverActive] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  // persistent interpolated values
  const currentX = useRef(0);
  const currentY = useRef(0);
  const targetX = useRef(0);
  const targetY = useRef(0);

  // save initial cursor entry point
  const initialX = useRef(0);
  const initialY = useRef(0);

  const rafId = useRef<number | null>(null);
  const wrapperRect = useRef<DOMRect | null>(null);
  const hoverDims = useRef<{ w: number; h: number } | null>(null);

  const LERP = 0.12;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1025px)");
    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop(e.matches);
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const assets = {
    // Small decorative background (not LCP, keep light)
    bg: "/spiral-2.png",

    // Main service icon (~137×140 rendered, w_256 for retina support)
    icon:
      type === "it"
        ? "https://res.cloudinary.com/dsvgjs1qb/image/upload/f_auto,q_auto,w_256/v1772195820/codingicons_o545fu.png"
        : "https://res.cloudinary.com/dsvgjs1qb/image/upload/f_auto,q_auto,w_256/v1772195819/keyframeicons_yodxna.png",

    // Hover / scroll hint (~196×196 rendered, w_400 for retina support)
    hover:
      type === "it"
        ? "https://res.cloudinary.com/dsvgjs1qb/image/upload/f_auto,q_auto,w_400/v1772195706/hover-image-it_at7cpp.png"
        : "https://res.cloudinary.com/dsvgjs1qb/image/upload/f_auto,q_auto,w_400/v1772195706/hover-image-media_u26pl3.png",
  };

  // MAIN LOOP
  const startLoop = () => {
    if (!isDesktop || rafId.current != null) return;
    const hoverEl = hoverRef.current;
    if (!hoverEl) return;

    const loop = () => {
      currentX.current += (targetX.current - currentX.current) * LERP;
      currentY.current += (targetY.current - currentY.current) * LERP;

      if (hoverEl && hoverDims.current) {
        hoverEl.style.setProperty(
          "--x",
          `${currentX.current - hoverDims.current.w / 2}px`,
        );
        hoverEl.style.setProperty(
          "--y",
          `${currentY.current - hoverDims.current.h / 2}px`,
        );
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
  };

  const stopLoop = () => {
    if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    rafId.current = null;
  };

  // mouse move inside wrapper
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || !isDesktop) return;

    const onMove = (e: MouseEvent) => {
      if (!wrapperRect.current) {
        wrapperRect.current = wrapper.getBoundingClientRect();
      }
      targetX.current = e.clientX - wrapperRect.current.left;
      targetY.current = e.clientY - wrapperRect.current.top;
      startLoop();
    };

    wrapper.addEventListener("mousemove", onMove);
    return () => wrapper.removeEventListener("mousemove", onMove);
  }, []);

  // hover start / stop
  useEffect(() => {
    if (hoverActive) {
      // Reset to entry point
      currentX.current = initialX.current;
      currentY.current = initialY.current;
      targetX.current = initialX.current;
      targetY.current = initialY.current;

      startLoop();
    } else {
      // return to entry point
      targetX.current = initialX.current;
      targetY.current = initialY.current;

      startLoop();
    }
  }, [hoverActive]);

  // cleanup
  useEffect(() => () => stopLoop(), []);

  return (
    <div className="heroIcon-wrapper" ref={wrapperRef}>
      <div className={`heroIcon-bg-container ${type}`}>
        <Image
          src={assets.bg}
          alt=""
          width={200}
          height={200}
          className="heroIcon-bg"
          priority
        />
      </div>

      <a
        href={scrollTo}
        className="heroIcon-link"
        onClick={(e) => {
          e.preventDefault();
          smoothScrollTo(scrollTo);
        }}
        onMouseEnter={(e) => {
          if (!isDesktop) return;
          const rect = wrapperRef.current!.getBoundingClientRect();
          wrapperRect.current = rect;

          // Cache hover dimensions once
          if (hoverRef.current && !hoverDims.current) {
            hoverDims.current = {
              w: hoverRef.current.clientWidth,
              h: hoverRef.current.clientHeight,
            };
          }

          // record the entry position
          initialX.current = e.clientX - rect.left;
          initialY.current = e.clientY - rect.top;

          setHoverActive(true);
        }}
        onMouseLeave={() => {
          if (!isDesktop) return;
          wrapperRect.current = null; // Clear to allow fresh measures on next entry
          setHoverActive(false);
        }}
      >
        <Image
          src={assets.icon}
          ref={mainRef}
          alt={type === "it" ? "IT services icon" : "Media services icon"}
          width={137}
          height={140}
          className="heroIcon-main"
          priority
        />
      </a>

      {isDesktop && (
        <Image
          ref={hoverRef}
          src={assets.hover}
          alt=""
          width={196}
          height={196}
          className={`heroIcon-hover ${hoverActive ? "active" : ""}`}
          style={{ pointerEvents: "none" }}
        />
      )}
    </div>
  );
}
