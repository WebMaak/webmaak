"use client";

import { useEffect } from "react";
import { initGsap } from "./animations/gsap-setup";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPInitializer() {
  useEffect(() => {
    // Initialize GSAP globally
    initGsap();

    // Refresh ScrollTrigger after a short delay to handle Next.js hydration and scroll restoration
    const id = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(id);
  }, []);

  return null;
}
