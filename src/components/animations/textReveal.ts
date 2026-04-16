import gsap from "gsap";

/**
 * Animates text reveal with a slide-up and skew effect
 * Text should be wrapped in elements with class "line" containing spans
 *
 * @param selector - CSS selector for the line spans (default: ".line span")
 * @param delay - Delay before animation starts (default: 0.3)
 */
export function animateTextReveal(
  selector: string = ".line span",
  delay: number = 0.3
) {
  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) return;

  const tl = gsap.timeline();

  tl.from(selector, {
    y: 100,
    ease: "power4.out",
    delay: delay,
    stagger: {
      amount: 0.3,
    },
    duration: 1,
    force3D: true, // Force GPU acceleration
    clearProps: "transform", // Clear transform properties after animation
  });

  return tl;
}

/**
 * Cleanup function to kill the timeline
 */
export function cleanupTextReveal() {
  gsap.killTweensOf(".line span");
}
