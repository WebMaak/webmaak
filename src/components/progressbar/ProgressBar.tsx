"use client";

import { useEffect, useRef } from "react";
import styles from "@/styles/progressbar/ProgressBar.module.css";

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (!barRef.current || docHeight <= 0) return;

      const progress = Math.min(
        100,
        Math.max(0, (scrollTop / docHeight) * 100),
      );

      // Direct DOM update = no lag, no state
      barRef.current.style.width = `${progress}%`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div ref={barRef} className={styles.bar} />
    </div>
  );
}
