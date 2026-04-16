"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./ImageTrail.module.css";

const images = [
  "https://images.unsplash.com/photo-1707836885254-79b6e3d7b18d?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1707836916010-3c4ad261936c?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1512729343400-4fcf83a18f72?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1599652645257-ff34421cd171?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const IMAGE_WIDTH = 280;
const IMAGE_HEIGHT = 180;
const MOVE_THRESHOLD = 80;

export default function ImageTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const indexRef = useRef(0);
  const initialized = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (!initialized.current) {
        lastPos.current = { x: clientX, y: clientY };
        initialized.current = true;
        return;
      }

      const dx = clientX - lastPos.current.x;
      const dy = clientY - lastPos.current.y;
      const distance = Math.hypot(dx, dy);

      // 🛑 distance gate
      if (distance < MOVE_THRESHOLD) return;

      lastPos.current = { x: clientX, y: clientY };

      const container = containerRef.current;
      if (!container) return;

      const img = document.createElement("img");
      img.src = images[indexRef.current % images.length];
      img.className = styles.trailImage;
      indexRef.current++;

      // center on cursor
      const x = clientX - IMAGE_WIDTH / 2;
      const y = clientY - IMAGE_HEIGHT / 2;

      container.appendChild(img);

      // INITIAL STATE
      gsap.set(img, {
        x,
        y,
        scale: 0.85,
        opacity: 0,
        rotation: gsap.utils.random(-2, 2),
      });

      // ENTER (elastic)
      gsap.to(img, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.6)",
      });

      // FLOAT + FOLLOW (inertia feel)
      gsap.to(img, {
        x: x + gsap.utils.random(-40, 40),
        y: y + gsap.utils.random(-30, 30),
        duration: 1.6,
        ease: "power3.out",
      });

      // EXIT (soft dissolve)
      gsap.to(img, {
        opacity: 0,
        scale: 1.05,
        duration: 0.9,
        delay: 0.9,
        ease: "power2.out",
        onComplete: () => img.remove(),
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={containerRef} className={styles.trailContainer} />;
}
