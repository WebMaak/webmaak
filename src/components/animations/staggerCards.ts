import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Animates project cards individually as they enter the viewport
 * Each card fades up when it scrolls into view with a staggered effect
 *
 * @param cardSelector - CSS selector for individual cards
 */
export function animateStaggerCards(cardSelector: string = ".project-card") {
  // Get all cards
  const cards = gsap.utils.toArray<HTMLElement>(cardSelector);

  if (cards.length === 0) return null;

  const ctx = gsap.context(() => {
    // Animate each card individually when it enters viewport
    cards.forEach((card, index) => {
      // Set initial state
      gsap.set(card, {
        opacity: 0,
        y: 50,
      });

      // Create individual ScrollTrigger for each card
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power2.out",
        delay: (index % 3) * 0.15, // Stagger within each row (assuming 3 columns)
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100px", // Start when card is 80px before bottom of viewport
          toggleActions: "play none none none", // Only play once
        },
      });
    });
  });

  return ctx;
}

/**
 * Cleanup function to kill all ScrollTriggers
 * Call this when component unmounts or before re-initializing
 */
export function cleanupStaggerAnimation() {
  // Kill ALL ScrollTriggers is a bit aggressive but helps if context isn't tracked
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}
