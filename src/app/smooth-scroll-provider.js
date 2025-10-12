"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis();

    // Make Lenis instance globally available
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      if (window.lenis) {
        window.lenis.destroy();
        delete window.lenis;
      }
    };
  }, []);

  return <>{children}</>;
}
