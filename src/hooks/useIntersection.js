'use client'

import { useEffect } from "react";

export function useIntersection(className = "scaleup", threshold = 0.2) {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold, rootMargin: "0px" } // Ensures it triggers only when in view
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [className, threshold]);
}
