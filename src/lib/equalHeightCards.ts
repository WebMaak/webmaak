"use client";

import { useEffect } from "react";

export function useEqualCardHeights(selector: string) {
  useEffect(() => {
    function updateHeights() {
      const cards = document.querySelectorAll<HTMLElement>(selector);
      let maxHeight = 0;

      // Reset first (important)
      cards.forEach((card) => (card.style.height = "auto"));

      // Measure tallest
      cards.forEach((card) => {
        const h = card.offsetHeight;
        if (h > maxHeight) maxHeight = h;
      });

      // Apply to all
      cards.forEach((card) => (card.style.height = maxHeight + "px"));
    }

    updateHeights();
    window.addEventListener("resize", updateHeights);

    return () => window.removeEventListener("resize", updateHeights);
  }, [selector]);
}
